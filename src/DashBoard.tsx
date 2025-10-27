import { AiFillBell } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { Outlet, Link, useLocation, NavLink } from 'react-router-dom';
import { IoMenuOutline, IoLogOut } from 'react-icons/io5';
import React, { useState, useRef, useEffect } from 'react';
import Notification from './pages/DashBoardPages/Notification.tsx';
// @ts-ignore
import eduverseLabsLogo from '../src/Assets/images/eduverseLogo2.png';

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

  const menuRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);
  const [currentDate, setCurrentDate] = useState(new Date());


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(e.target as Node)) {
        setOpenNotification(false);
      }
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(false);
      }
      
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);

  }, []);

   useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  
  const formattedDate = currentDate.toLocaleDateString('en-US', { 
    weekday: 'long',

  });

//   const weekday = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const day = currentDate.getDate();
  const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <div
        ref={menuRef}
        className={`bg-white shadow-lg p-4 transition-all duration-300 fixed lg:relative z-40
        ${openMenu ? 'left-0 w-2/3 sm:w-1/3' : '-left-full'}
        lg:left-0 lg:w-[18%] lg:flex lg:flex-col`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center py-4">
            <img src={eduverseLabsLogo} alt="eduverse logo" className="h-16" />
          </div>
          <ul className="flex-1 mt-4 space-y-2">
            {sideMenuData.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block rounded-md p-2 text-md font-semibold transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-800 hover:bg-blue-100'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/"
            className="flex items-center gap-2 mt-auto p-2 rounded-md text-gray-800 hover:bg-blue-100"
          >
            <IoLogOut size={22} />
            <span>Log Out</span>
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:w-[82%]">
        {/* Header */}
        <header className="flex justify-between items-center px-4 py-3 bg-white shadow-sm">
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden mr-3"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <IoMenuOutline size={28} />
            </button>

            {/* Title / Greeting */}
            {location.pathname === '/feed' ? (
              <div>
                {/* <h1 className="font-bold text-xl lg:text-2xl">
                  Welcome back, <span className="text-blue-600">Rolake</span>!
                </h1>
                <p className="text-sm text-gray-500">
                  Here is what’s happening with your studies today.
                </p> */}
                <p className=' text-2xl font-bold'>{formattedDate}</p>
                <p className='text-xs text-[#808080]'>{month} {day},{year}</p>
              </div>
            ) : (
              <h1 className="font-bold text-xl lg:text-2xl">Eduverse</h1>
            )}
          </div>

          {/* Notification & User Info */}
          <div className="flex items-center space-x-4">
            <div className='relative'>
                <button
              onClick={() => setOpenNotification((prev) => !prev)}
              className=" p-2 rounded-full hover:bg-gray-100 "
            >
              <AiFillBell size={25} />
            </button>
            <span className='absolute top-1 right-0.5 w-4 h-4 flex justify-center items-center text-xs  bg-red-500 rounded-full'>2</span>
            </div>

            <div className="hidden lg:flex items-center px-3 py-1 border rounded-md">
              <p className="text-gray-800 font-medium">R.F</p>
              <BsDot size={30} className="text-green-500" />
            </div>
          </div>
        </header>

        {/* Outlet */}
        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>

        {/* Notification Panel */}
        {openNotification && (
          <div
            ref={notificationRef}
            className="absolute right-2 top-16 w-80 bg-white border rounded-lg shadow-xl z-50"
          >
            <Notification setOpenNotification={setOpenNotification} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoard;