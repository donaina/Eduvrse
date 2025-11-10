import React from 'react'
// import { BsBellFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";



const Notification = ({setOpenNotification}) => {
    interface Notification {
        id: number;
        title: string;
        description: string;
        time: string;
    }
    const notifications: Notification[] = [
        {
            id: 1,
            title: 'New Assignment Available',
            description: 'You have a new assignment due next week.',
            time: '2 hours ago'
        },
        {
            id: 2,
            title: 'Course Update',
            description: 'The course syllabus has been updated.',
            time: '1 day ago'
        },
        {
            id: 3,
            title: 'New Message',
            description: 'You have received a new message from your instructor.',
            time: '3 days ago'
        }
    ];

    

  return (
    <>
        <div className='py-2 px-1 shadow-md rounded-lg w-full h-full mx-auto '>
            <div className='flex justify-between items-center '>
                <div className='flex items-center px-2'>
                {/* <span><BsBellFill size={20}/></span> */}
                <h1 className='text-3xl font-bold text-left p-2 my-2 '>  Notifications</h1>
            </div>
            <div className='mr-2 cursor-pointer transition-transform duration-300 hover:rotate-90'> <button onClick={()=>setOpenNotification(false) }><RiCloseLine size={30} /></button></div>
            </div>
            <div className=' max-h-[400px] overflow-y-auto transition-all duration-300'>
                {notifications.length > 0 ? (
                    notifications.map(notification => (
                        <div key={notification.id} className='border-b p-4 my-2 hover:bg-gray-300 rounded-md cursor-pointer transition-colors'>
                            <div className='flex justify-between items-center mb-2'>
                                <div className='flex  items-center mb-2'>
                                    <span className=' text-white text-4xl rounded-full bg-blue-600   '>
                                        <GoDotFill size={12} />
                                    </span>
                                    <span className='text-blue-600 font-semibold mx-2'>Eduverse</span>
                                    <span className='text-gray-500 text-[12px]'> {notification.time}</span>
                                    
                                </div>
                                <p className='transition-transform duration-300 hover:rotate-180' ><IoIosArrowDown /></p>
                            </div>
                            <h2 className='text-md font-semibold'>{notification.title}</h2>
                            <p className='text-sm text-gray-600 line-clamp-1'>{notification.description}</p>
                            {/* <span className='text-xs text-gray-400'>{notification.time}</span> */}
                        </div>
                    ))
                ) : (
                    <p className='text-center'>No notifications available</p>
                )}
            </div>
            {/* <p className='text-center mt-4'>You have no new notifications</p> */}
        </div>
        
        {/* <div className='w-auto h-[70]'>jj</div> */}
    </>
  )
}

export default Notification