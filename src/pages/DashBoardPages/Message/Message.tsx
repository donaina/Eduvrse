import React from 'react';
import { IoIosSearch, IoMdAdd } from "react-icons/io";



const Message = () => {

  const messages = [
    {
      id: 1,
      sender: 'Dr Sarah Wilson',
      type: 'Instructor',
      message: 'Great work on you last assessment i see you have improved ',
      date: '12/7/25'
    },
    {
      id: 2,
      sender: 'Dr Sarah Wilson',
      type: 'Instructor',
      message: 'Great work on you last assessment i see you have improved ',
      date: '12/7/25',
      notification: '2'
    },
    {
      id: 3,
      sender: 'Dr Sarah Wilson',
      type: 'Instructor',
      message: 'Great work on you last assessment i see you have improved ',
      date: '12/7/25'
    },
    {
      id: 4,
      sender: 'Dr Sarah Wilson',
      type: 'Instructor',
      message: 'Great work on you last assessment i see you have improved ',
      date: '12/7/25'
    }
  ]

  // const getMessage =

  return (
    <>
      <div className='p-4'>
        <div>
          <h1 className='font-bold text-2xl'>Messages</h1>
          <p className='text-xs text-[#808080]'>Your learning Accomplishments and Certification</p>
        </div>
        <div className='w-1/2 h-auto pr-2   mt-2 flex justify-between items-center'>
          <p>Message List </p>
          <button className='bg-black text-white p-2 rounded-md'><IoMdAdd /></button>
        </div>
        <div className='grid lg:grid-cols-2 my-6 gap-4 '>
          <div className='my-2'>
            <div className='w-full bg-[#F7F6F6] rounded  lg:flex justify-between items-center px-2 outline outline-[#F7F6F6] shadow-[-4px_0_6px_rgba(0,0,0,0.2) shadow-[0_-4px_6px_rgba(0,0,0,0.2)] hidden'>
              <input type="text" className='w-[90%] outline-none h-full bg-[#F7F6F6] px-4' placeholder='search'
              />
              <button className='p-2 bg-red'><IoIosSearch size={25} /></button>
            </div>
            <div className="w-full h-[425px] my-10 p-4 bg-gray-200/30 rounded-md overflow-y-auto">
              {messages && messages.length > 0 ? (
                messages.map((item) => {
                  // Extract initials
                  const initials = item.sender
                    .split(" ")
                    .filter((word) => word.length > 1 && word.toLowerCase() !== "dr")
                    .map((word) => word[0])
                    .join("")
                    .toUpperCase();

                  return (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 my-4 cursor-pointer hover:bg-gray-50 transition p-2 rounded-md  bg-white relative"
                    >
                      {/* init */}
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white font-semibold text-lg">
                        {initials}
                      </div>

                      {/* other details */}
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h1 className="text-black text-md font-semibold">{item.sender}</h1>
                          
                        </div>
                        <p className="text-[#808080] text-xs">{item.type}</p>
                        <p className="text-[#454545] text-sm mt-1">{item.message}</p>
                        <p className="text-gray-500 text-xs">{item.date}</p>
                      </div>

                      {/* Notification  */}
                      {item.notification && (
                        <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">
                          {item.notification}
                        </span>
                      )}
                    </div>
                  );
                })
              ) : (
                <p className="text-center text-gray-500 text-sm">No messages available</p>
              )}
            </div>


          </div>

          <div>
            hello
          </div>
        </div>
      </div>
    </>
  )
}

export default Message