import { AiFillBell } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { IoMenuOutline } from 'react-icons/io5';
import React, { useState, useRef, useEffect } from 'react';
import Notification from './pages/DashBoardPages/Notification.tsx';
// import { HiOutlineLogout } from "react-icons/hi";
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

]

const DashBoard = () => {
    const location = useLocation();
    const [openNotification, setOpenNotification] = useState(false);
    const [openMenu, setOpenMenu] = useState(false)
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpenNotification(false);
            }
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpenMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <div className=' flex h-screen'>
                {/* menu section */}
                <div className={`bg-[#0843F7] p-2 h-screen w-full text-white transition-all duration-300 lg:relative ${openMenu ? "w-[50%] flex absolute z-50" : "w-0 hidden"} lg:w-[18%] lg:flex lg:flex-col `} >
                    <div className=' w-full h-full '>
                        <h1 className={`px-2 my-14 lg:text-3xl text-2xl  font-bold transition-opacity  ${location.pathname === '/feed' ? 'block ' : 'hidden'}`}>EduverseLabs</h1>
                        <ul className=" gap-2  my-6 w-full font-normal mt-4">

                            <div className='h-3/4 w-full '>
                                {sideMenuData.map((item, index) => (

                                    <Link to={item.path} className=" ">
                                        <li key={index} className={` p-2 mt-1 hover:bg-white hover:text-black cursor-pointer w-full rounded-md transition-colors  ${location.pathname === item.path
                                            ? "bg-white text-black" // Active page
                                            : "text-white hover:bg-white hover:text-black" // Inactive pages
                                            }`} >
                                            <span className="text-lg">{item.name}</span>
                                        </li>
                                    </Link>

                                ))}
                                <Link to="/" className=" ">
                                    <li className=' bottom-16 p-2 flex  gap-2 hover:bg-white hover:text-black rounded-md  w-[16.7%] fixed '><span ><IoLogOut size={25} />

                                    </span><span>LogOut</span></li></Link>
                            </div>


                        </ul>
                    </div>
                </div>

                <div className="w-full lg:w-10/12 h-screen overflow-auto animate-bounce-right">
                    {/* header section */}
                    <div className=" px-2 lg:px-7 mb-2 lg:my-4 border-b-[1px] border-gray-300 flex  lg:justify-between items-center lg:h-16 bg-blue-700 text-white lg:bg-white lg:text-black ">

                        <div className='my-2 w-full flex  h-full items-center '>
                            <div className='lg:hidden p-2 font-bold text-white' onClick={() => setOpenMenu(!openMenu)}>
                                <IoMenuOutline size={30} />
                            </div>
                            <div className='flex flex-col lg:flex-row lg:items-center w-full lg:w-auto  '>
                                <h1 className='lg:hidden text-xl font-bold'>EduVerse</h1>
                                {location.pathname === '/feed' ?
                                    (<div className='w-full'>
                                        <h1 className='font-bold text-md capitalize lg:hidden flex'>Welcome Back Rolake</h1>
                                        <h1 className='font-bold text-2xl capitalize hidden lg:flex '>Welcome back, <span className='text-blue-600'>Rolake</span> !</h1>
                                        <h5 className='text-[11px]'>Here is what is happening with your studies today.</h5>
                                    </div>
                                    ) : (
                                        <h1 className='font-bold text-2xl capitalize hidden lg:flex gap-2'>Eduverse <span className='text-blue-600'>Labs</span></h1>
                                    )}
                            </div>
                        </div>
                        {/* // <img src={eduverseLabsLogo} alt="Eduverse Labs Logo" className='max-w-20' />  */}
                        <div className='flex items-center  '>
                            <div className='p-4 lg:p-2 cursor-pointer' onClick={() => setOpenNotification((prev) => (!prev))} >

                                <p className='relative'><AiFillBell size={25} /></p>
                                {/* <p className='absolute top-5 right-[205px] text-md w-10 h-10  text-white justify-center'>3</p> */}
                            </div>
                            <div className='items-center  text-black px-1 mr-10  h-10 p-4 rounded-lg border border-black hidden lg:flex'>
                                <p className='px-4 py-2  '>Rolake</p>
                                <p className='  text-2xl text-[#0CF37F]'><BsDot size={35} />
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className=''>
                        <Outlet />
                    </div>
                    <div className=''>
                        {/* Notification dropdown */}
                        <div className={`absolute right-0 -top-4 w-full h-full md:w-1/2 lg:w-1/3  rounded-lg shadow-lg border border-gray-200 z-50  bg-white ${openNotification ? 'block' : 'hidden'} animate-bounce-right`} ref={dropdownRef}>
                            <Notification setOpenNotification={setOpenNotification} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DashBoard