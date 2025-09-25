import React from 'react'
// import { IoMenuOutline } from "react-icons/io5";

// @ts-ignore
import module1 from './../../Assets/images/module1.png';
// @ts-ignore
import module2 from './../../Assets/images/module2.png';
// @ts-ignore
import module3 from './../../Assets/images/module3.png';
// @ts-ignore
import AskEduAi from '../../Assets/images/AskEduai.png';
// @ts-ignore
import book from '../../Assets/images/book.png';
// @ts-ignore
import pending from '../../Assets/images/pending.png';
// @ts-ignore
import success from '../../Assets/images/success.png'
// @ts-ignore
import schedule from '../../Assets/images/schedule.png';
// import { AiFillBell } from 'react-icons/ai';
// import { BsDot } from 'react-icons/bs';
import { FaPlus } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
// import Notification from './Notification.tsx';


const Feed = () => {

  const feedEvents = [
    {
      id: 1,
      title: "Active Courses",
      number: 6,
      date: "2 new this semester",
      icon: `${book}`
    },
    {
      id: 2,
      title: "Upcoming Events",
      number: "2",
      date: "today",
      icon: `${schedule}`
    },
    {
      id: 3,
      title: "Pending Assignments",
      number: "3",
      date: "due this week",
      icon: `${pending}`
    },
    {
      id: 4,
      title: "Achievements",
      number: "12",
      date: "earned this month",
      icon: `${success}`
    }
  ];

  const recentUpdates = [
    {
      id: 1,
      title: "New Assessment Posted",
      description: "Mathematics assignment has been posted. Due Date: Tomorrow at 11:59 ",
      time: "About 2 hours ago",
      color: "bg-blue-600",
      buttonText: "Start",
      categories: "Assessment"
    },
    {
      id: 2,
      title: "Upcoming Class",
      description: "Advance Mathematics Starts in 30 minutes - Room 101 ",
      time: "About 2 hours ago",
      color: "bg-red-600",
      buttonText: "join class",
      categories: "Class"
    },
    {
      id: 3,
      title: "Upcoming Class",
      description: "Advance Mathematics Starts in 30 minutes - Room 101 ",
      time: "About 2 hours ago",
      color: "bg-red-600",
      buttonText: "join class",
      categories: "Assessment"
    },
    {
      id: 4,
      title: "Grades Released",
      description: "Your Physics Lab Report has been graded: 65 / 100",
      time: "About 2 hours ago",
      color: "bg-green-600",
      buttonText: "View Grades",
      categories: "Grades"
    },
    {
      id: 5,
      title: "System Maintenance",
      description: "Scheduled maintenance on the platform will occur tonight from 12 AM to 2 AM.",
      time: "About 3 days ago",
      color: "bg-yellow-600",
      buttonText: "Learn More",
      categories: "Maintenance"
    }
  ];

  const activitiesAndBadges = [
    {
      id: 1,
      title: "Completed Course",
      description: "You have completed the 'Introduction to Programming' course.",
      badge: module1,
      color: "bg-[#BEA1FF]"
    },
    {
      id: 2,
      title: "Top Performer",
      description: "You ranked in the top 10% of your class this semester.",
      badge: module2,
      color: 'bg-[#93FFC9]'
    },
    {
      id: 3,
      title: "Community Contributor",
      description: "You contributed to the community forum by answering questions.",
      badge: module3,
      color: "bg-[#F5FF89]"
    },
    {
      id: 4,
      title: "Community Contributor",
      description: "You contributed to the community forum by answering questions .",
      badge: module3,
      color: "bg-[#F5FF89]"
    }
  ];




  return (
    
    <>
      <div className=' px-3 lg:px-6 w-full relative '>
        
        <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-2 lg:gap-5  lg:my-1 w-full rounded-lg">
          {feedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-[#F7F6F6] w-full lg:w-[23%] p-2 lg:justify-between mt-1 rounded-lg  border border-gray-300 shadow-md lg:mt-2 flex items-center lg:flex-row  lg:items-start md:gap-2"
            >
              <div className=" grid grid-cols-1 order-2 lg:order-1 px-3">
                <h2 className="text-[10px] md:text-[10px] lg:text-xs font-bold">{event.title}</h2>
                <p className="order-2 lg:order-1 text-xl lg:text-2xl font-bold">{event.number}</p>
                <p className="order-1 lg:order-2  text-xs text-gray-500 ">{event.date}</p>
              </div>
              <img src={event.icon} alt="event.title" className='w-10 h-10 md:w-14 md:h-14 opacity-55 order-1 lg:order-2' />
            </div>
          ))}
        </div>

        <div className='flex flex-col lg:flex-row mt-5 gap-4 lg:gap-2'>
          <div className='w-full lg:w-[48%] '>
            <div className='flex justify-between items-center mb-2'>
              <div>
                <h1 className='font-semibold text-[15px] lg:text-xl'>Recent Updates</h1>
                <h5 className='text-[8px] lg:text-[10px] mt-1 mb-1'>Lastest Activties & Notifcations</h5>
              </div>
              <div>
                <button className='p-2  bg-black text-white text-[10px] rounded-md lg:hidden'>Ask Eduai</button>
              </div>
            </div>
            <div className=' lg:border-[1.5px] lg:border-gray-200 mt-1 lg:h-[535px] bg-white py-2 px-1 rounded-lg lg:shadow-lg  overflow-y-auto'>
              {recentUpdates.map((update) => (
                <div key={update.id} className='w-full h-24  lg:h-24 lg:bg-[#F7F6F6] border border-gray-300 rounded flex shadow-[#F7F6F6] mb-2 lg:mb-2 lg:mt-1 '>
                  <div className={`w-[6px] lg:w-1 h-full rounded-l-xl ${update.color} `}>

                  </div>
                  
                  <div className='flex  justify-between items-center  w-full py-1 px-2 lg:px-2'>
                    <div className='  h-full w-full '>
                      <div className=' flex flex-col justify-between '>
                        <h3 className='text-sm lg:text-[12px] font-semibold'>{update.title}</h3>
                        <p className='text-[8px] lg:my-0'>{update.time}</p>
                        <p className='text-[10px] py-1 line-clamp-1 lg:line-clamp-1 w-full h-auto '>{update.description}</p>

                      </div>

                      <button className=' p-1  w-24 my-2  bg-black rounded-md text-white capitalize font-medium text-[10px] hidden lg:block '>{update.buttonText}</button>
                    </div>
                    <div>
                      <button className='bg-[#f4d6eb] text-black w-24 p-2 text-[10px] font-medium rounded-md'>{update.categories}</button>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
          <div className='w-full lg:w-[48%]'>
            <div>
              <h1 className='font-bold text-[15px] text-xl'>Activities & Badges</h1>
              <h5 className='text-[8px] lg:text-[10px] mt-1 mb-3 '>Catch up on activities and earn badges</h5>
            </div>
            <div className='lg:border-[1.5px] lg:border-gray-200 mt-2 lg:h-[535px] bg-white py-2 px-1 rounded-lg lg:shadow-lg '>

              <div className="flex gap-2 p-1 w-full  overflow-x-auto overflow-y-hidden  whitespace-nowrap">
                {activitiesAndBadges.map((activity) => (
                  <div
                    key={activity.id}
                    className="h-44 w-40 rounded-lg flex flex-col shadow shadow-gray-400 overflow-hidden flex-shrink-0"
                  >
                    {/* Badge image */}
                    <div className="flex items-center justify-center bg-white h-24 w-full">
                      <img
                        src={activity.badge}
                        alt={activity.title}
                        className="max-h-24 max-w-full object-contain"
                      />
                    </div>

                    {/* Description + Button */}
                    <div
                      className={`flex flex-col w-full  justify-between flex-1 ${activity.color} text-black`}
                    >
                      <p className="p-1 text-[10px] text-wrap line-clamp-2">{activity.description}</p>
                      <button className="bg-black text-white text-[10px]  w-16 py-1 m-1 rounded-md">
                        View
                      </button>
                    </div>
                  </div>

                ))}
              </div>
              <div className='p-2 hidden lg:flex flex-col items-center justify-center mt-2'>
                <div className='flex flex-col justify-start w-full items-start'>
                  <h1 className='font-bold text-xl'>Ask Eduai</h1>
                  <h3 className='text-[10px]'>Common Task & SHortcuts</h3>
                </div>

                {/* divide section */}
                <div className='border border-gray-300 my-2 h-56  rounded-md p-2 w-full'>
                  <div
                    style={{ backgroundImage: `url(${AskEduAi})` }}
                    className="relative bg-no-repeat  bg-center w-full h-40 rounded-lg shadow-md flex flex-col items-center justify-center text-white"
                  >
                    <div className="absolute inset-0 bg-[black/15]"></div> {/* overlay */}
                    <span className="relative z-10">
                    </span>
                  </div>
                  <div className='flex justify-between items-center w-full  h-14  '>

                    <button className='bg-[#D9D9D9] p-2 ml-2 rounded-md'><FaPlus size={12} /></button>
                    <input type="text" className='w-[80%] mx-2 p-1 bg-[#F7F6F6] rounded-sm outline outline-[#F7F6F6] ' placeholder='Type Your questions here ?' />
                    <button className='text-[#F6F6F6] rounded-md bg-[#0843F7] p-2'><IoMdSend size={12} /></button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Feed