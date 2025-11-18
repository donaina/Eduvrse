import React from 'react'
import { FaPlus } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

// @ts-ignore
import module1 from '../../Assets/images/documentation.png';
// @ts-ignore
import module2 from './../../Assets/images/assessmentV.png';
// @ts-ignore
import module3 from './../../Assets/images/calender.png';
// @ts-ignore
import AskEduAi from '../../Assets/images/AskEduai.png';
// @ts-ignore
import book from '../../Assets/images/book.png';
// @ts-ignore
import pending from '../../Assets/images/pending.png';
// @ts-ignore
import success from '../../Assets/images/success.png';
// @ts-ignore
import student from '../../Assets/images/student.png';
// @ts-ignore
import style from '../../Assets/images/style.png';


export const Feed = () => {
    const feedEvents = [
    { id: 1, title: "Total Student ", number: "136", date: "Across all courses", icon: student },
    { id: 2, title: "Active Courses", number: "12", date: "This Semester", icon: book },
    { id: 3, title: "Pending Assignments", number: "3", date: "Due this week", icon: pending },
    { id: 4, title: "Average Performance", number: "85%", date: "Class Average ", icon: success },
  ];

  const recentUpdates = [
    {
      id: 1,
      title: "Student Attendance Updated ",
      description: "30 students attended , 10 Students Absent in the advance mathematic class ",
      time: "About 2 hours ago",
      color: "bg-blue-600",
      buttonText: "view",
      categories: "Attendance",
    },
    {
      id: 2,
      title: "Class Reminder",
      description: "Advance Mathematics Starts in 45 minutes - Room 101  ",
      time: "About 2 hours ago",
      color: "bg-red-600",
      buttonText: "Join Class",
      categories: "event",
    },
    {
      id: 3,
      title: "Assessment Grading",
      description: "Your Physics Lab Report has been graded: 65 / 100",
      time: "About 2 hours ago",
      color: "bg-green-600",
      buttonText: "View Grades",
      categories: "Grades",
    }
  ];

  const activitiesAndBadges = [
    {
      id: 1,
      title: "Completed Course",
      description: "You have completed the 'Introduction to Programming' course.",
      badge: module1,
      color: "bg-[#BEA1FF]",
    },
    {
      id: 2,
      title: "Top Performer",
      description: "You ranked in the top 10% of your class this semester.",
      badge: module2,
      color: "bg-[#93FFC9]",
    },
    {
      id: 3,
      title: "Community Contributor",
      description: "You contributed to the community forum by answering questions.",
      badge: module3,
      color: "bg-[#F5FF89]",
    },
    {
      id: 4,
      title: "Community Contributor",
      description: "You contributed to the community forum by answering questions.",
      badge: module3,
      color: "bg-[#F5FF89]",
    },
  ];
  return (
    <div className="w-full lg:flex lg:justify-center lg:flex-col">
      <div className="mx-4 my-2 ">
        <div className="flex flex-col lg:justify-between lg:flex-row mt-1 gap-x-4">
          {/* LEFT SECTION */}
          <div className="w-full lg:w-[48%]">
            <div className="flex items-center justify-between h-48 mb-2 bg-gray-200/35 gap-2 rounded-lg">
              <div className='p-2'>
                <h2 className="text-black text-lg lg:text-2xl font-bold">Welcome back,</h2>
                <h1 className="text-blue-600 text-xl lg:text-3xl font-bold">Mr. Solomon!</h1>
                <p className='text-xs'>Here is what is happening with your studies today.</p>
              </div>
              <img src={style} alt="Style" className=' object-contain w-48  h-48' />
            </div>

            <div className="flex justify-between items-center mb-2">
              <div>
                <h1 className="font-semibold text-xl lg:text-xl">Recent Updates</h1>
                <h5 className="text-[8px] lg:text-[10px] mt-1 ">Latest Activities & Notifications</h5>
              </div>
              <button className="p-2 bg-black text-white text-[10px] rounded-md lg:hidden">
                Ask Eduai
              </button>
            </div>

            <div className="lg:border  border-gray-200 mt-1 lg:h-[500px] bg-white py-2 px-1 rounded-lg overflow-y-auto">
              {recentUpdates.map((update) => (
                <div
                  key={update.id}
                  className="w-full h-24 bg-[#F7F6F6] border border-gray-300 rounded flex mb-2"
                >
                  <div className={`w-[6px] h-full rounded-l-xl ${update.color}`} />
                  <div className="flex justify-between items-center w-full py-1 px-2">
                    <div>
                      <h3 className="text-sm font-semibold">{update.title}</h3>
                      <p className="text-[8px]">{update.time}</p>
                      <p className="text-[10px] py-1 line-clamp-1">{update.description}</p>
                      <button className="p-1 w-24 my-2 bg-black rounded-md text-white capitalize font-medium text-[10px] hidden lg:block">
                        {update.buttonText}
                      </button>
                    </div>
                    <button className="bg-[#f4d6eb] text-black w-24 p-2 text-[10px] font-medium rounded-md">
                      {update.categories}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full lg:w-[50%]">
            {/* Feed Events */}
            <div className="grid grid-cols-2 h-48 gap-2 mb-2 w-full rounded-lg">
              {feedEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-[#F7F6F6] p-2 mt-1 rounded-lg border border-gray-300  flex items-center justify-between"
                >
                  <div>
                    <h2 className="text-xs font-bold">{event.title}</h2>
                    <p className="text-xl font-bold">{event.number}</p>
                    <p className="text-xs text-gray-500">{event.date}</p>
                  </div>
                  <img
                    src={event.icon}
                    alt={event.title}
                    className="w-10 h-10 opacity-55"
                  />
                </div>
              ))}
            </div>

            {/* Activities & Badges */}
            <div>
              <h1 className="font-semibold text-xl">Quick actions</h1>
              <h5 className="text-[8px] lg:text-[10px] mt-1 ">
                Common Task & Shortcuts 
              </h5>
            </div>

            <div className="lg:border border-gray-200 mt-2 lg:h-[500px] bg-white py-2 px-1 rounded-lg ">
              <div className="flex gap-2 p-1 w-full overflow-x-auto whitespace-nowrap">
                {activitiesAndBadges.map((activity) => (
                  <div
                    key={activity.id}
                    className="h-44 w-40 rounded-lg flex flex-col shadow shadow-gray-400 overflow-hidden flex-shrink-0"
                  >
                    <div className="flex items-center justify-center bg-white h-24 w-full ">
                      <img
                        src={activity.badge}
                        alt={activity.title}
                        className="max-h-16 max-w-full object-contain opacity-65"
                      />
                    </div>
                    <div className={`flex flex-col justify-between flex-1 ${activity.color} text-black`}>
                        <p className='p-1 text-[10px] font-semibold line-clamp-2 text-wrap'>{activity.title}</p>
                      <p className="p-1 text-[8px] w-[96%] h-10  line-clamp-2 text-wrap">{activity.description}</p>
                      <button className="bg-black text-white text-[10px] w-16 py-1 m-1 rounded-md">
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ask EduAI Section */}
              <div className="p-2 hidden lg:flex flex-col items-center justify-center mt-1">
                <div className="flex flex-col justify-start w-full items-start">
                  <h1 className="font-semibold text-xl">Ask Eduai</h1>
                  <h3 className="text-[10px]">Common Tasks & Shortcuts</h3>
                </div>
                <div className="border border-gray-300 my-1 h-56 rounded-md p-2 w-full">
                  <div
                    style={{ backgroundImage: `url(${AskEduAi})` }}
                    className="relative bg-no-repeat bg-center w-full h-40 rounded-lg shadow-md"
                  >
                    <div className="absolute inset-0 bg-black/5"></div>
                  </div>
                  <div className="flex justify-between items-center w-full h-14">
                    <button className="bg-black/5 p-2 ml-2 rounded-md">
                      <FaPlus size={12} />
                    </button>
                    <input
                      type="text"
                      className="w-[80%] mx-2 p-1 bg-[#F7F6F6] rounded-sm outline-none"
                      placeholder="Type your question here..."
                    />
                    <button className="text-[#F6F6F6] rounded-md bg-[#0843F7] p-2">
                      <IoMdSend size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* END RIGHT */}
        </div>
      </div>
    </div>
  )
}

export default Feed;