import { AiFillBell } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { Outlet, Link, useLocation, NavLink } from 'react-router-dom';
import { IoMenuOutline } from 'react-icons/io5';
import React, { useState, useRef, useEffect } from 'react';
import Notification from './pages/DashBoardPages/Notification.tsx';
// @ts-ignore
import eduverseLabsLogo from '../src/Assets/images/eduverseLogo2.png';
import { IoLogOut } from "react-icons/io5";

const sideMenuData = [
    { name: 'Feed', path: '/feed' },
    { name: 'My Course', path: '/my-course' },
    { name: 'Assessments', path: '/assessment' },
    { name: 'Attendance', path: '/attendance' },
    { name: 'Certification', path: '/certification' },
    { name: 'Messages', path: '/messages' },
    { name: 'Settings', path: '/settings' },
    { name: 'Tools', path: '/tools' },
];

const DashBoard = () => {
    const location = useLocation();
    const [openNotification, setOpenNotification] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    // Separate refs for menu and notification
    const menuRef = useRef<HTMLDivElement>(null);
    const notificationRef = useRef<HTMLDivElement>(null);

    // Close menu or notification when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            // Close notification if clicked outside
            if (notificationRef.current && !notificationRef.current.contains(e.target as Node)) {
                setOpenNotification(false);
            }

            // Close sidebar menu if clicked outside
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpenMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex h-screen">
            {/* Sidebar menu */}
            <div
                ref={menuRef}
                className={`bg-[#FFFFFF] w-[50%] p-2 h-screen text-white transition-all duration-300 lg:relative
                    ${openMenu ? "flex absolute z-50" : "w-0 hidden"}
                    lg:w-[18%] lg:flex lg:flex-col`}
            >
                <div className="w-full h-full">
                    <ul className="gap-2 w-full font-normal mt-20">
                        <div className="h-3/4 w-full">
                            {sideMenuData.map((item, index) => (
                                <li key={index} className="p-2 mt-1 w-full rounded-md">
                                    <NavLink
                                        to={item.path}
                                        end={false}
                                        className={({ isActive }) =>
                                            `block w-full rounded-md p-2 transition-colors text-lg ${
                                                isActive
                                                    ? "bg-blue-700 text-white hover:bg-gray-600/25 hover:text-white"
                                                    : "text-black hover:bg-gray-600/25 hover:text-white"
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}

                            <Link to="/" className="">
                                <li className="bottom-16 p-2 flex gap-2 text-black hover:bg-blue-700 hover:text-white rounded-md w-[40%] lg:w-[16.7%] fixed">
                                    <span>
                                        <IoLogOut size={25} />
                                    </span>
                                    <span>LogOut</span>
                                </li>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>

            {/* Main content area */}
            <div className="w-full lg:w-10/12 h-screen overflow-auto animate-bounce-right">
                {/* Header */}
                <div className="px-2 lg:px-7 mb-2 lg:my-4 border-b-[1px] border-gray-300 flex lg:justify-between items-center lg:h-16 text-black lg:bg-white lg:text-black">
                    <div className="my-2 w-full flex h-full items-center">
                        {/* Menu button for mobile */}
                        <div
                            className="lg:hidden p-2 font-bold text-black"
                            onClick={() => setOpenMenu(!openMenu)}
                        >
                            <IoMenuOutline size={30} />
                        </div>

                        <div className="flex justify-between items-center lg:flex-row lg:items-center w-full lg:w-auto">
                            <div className="w-full lg:hidden grid justify-center items-center z-50">
                                <img src={eduverseLabsLogo} alt="eduverse logo" className="h-20" />
                            </div>

                            <div className="hidden lg:block">
                                {location.pathname === '/feed' ? (
                                    <div className="w-full">
                                        <h1 className="font-bold text-md capitalize lg:hidden flex">
                                            Welcome Back Rolake
                                        </h1>
                                        <h1 className="font-bold text-2xl capitalize hidden lg:flex">
                                            Welcome back, <span className="text-blue-600">Rolake</span>!
                                        </h1>
                                        <h5 className="text-[11px]">
                                            Here is what is happening with your studies today.
                                        </h5>
                                    </div>
                                ) : (
                                    <h1 className="font-bold text-2xl capitalize hidden lg:flex gap-2">
                                        Eduverse
                                    </h1>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Notification + User info */}
                    <div className="flex items-center">
                        <div
                            className="p-4 lg:p-2 cursor-pointer"
                            onClick={() => setOpenNotification((prev) => !prev)}
                        >
                            <p className="relative">
                                <AiFillBell size={25} />
                            </p>
                        </div>

                        <div className="items-center text-black px-1 mr-10 h-10 p-4 rounded-lg border border-black hidden lg:flex">
                            <p className="px-4 py-2">Rolake</p>
                            <p className="text-2xl text-[#0CF37F]">
                                <BsDot size={35} />
                            </p>
                        </div>
                    </div>
                </div>

                {/* Page outlet */}
                <div>
                    <Outlet />
                </div>

                {/* Notification dropdown */}
                <div
                    ref={notificationRef}
                    className={`absolute right-0 -top-4 w-full h-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg border border-gray-200 z-50 bg-white ${
                        openNotification ? "block" : "hidden"
                    } animate-bounce-right`}
                >
                    <Notification setOpenNotification={setOpenNotification} />
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
