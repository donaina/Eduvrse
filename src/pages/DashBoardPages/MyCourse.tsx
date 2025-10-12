import React from 'react';
import { IoIosSearch } from "react-icons/io";
// @ts-ignore 
import mycourse from '../../Assets/images/mycourse.jpg'
import { FiDownload } from "react-icons/fi";
import { CiPlay1 } from "react-icons/ci";



const MyCourse = () => {

  const mycourseData = [
    {
      id: 1,
      title: 'Computer Science Fundermentals',
      description: 'Introduction to Programming, Algorithms, Data Structures  learn many more things as  you dive into this course and achieve ',
      course: 'Computer Science',
      img: mycourse,
      progress: '20%',
      time: '3 hours left',
      tutor: 'Dr. Sarah Wilson'
    },
    {
      id: 2,
      title: 'Computer Science Fundermentals',
      description: 'Introduction to Programming, Algorithms, Data Structures  learn many more things as  you dive into this course and achieve ',
      course: 'Computer Science',
      img: mycourse,
      progress: '60%',
      time: '3 hours left',
      tutor: 'Dr. Sarah Wilson'
    },
    {
      id: 3,
      title: 'Cyber Security Fundermentals',
      description: 'Introduction to Programming, Algorithms, Data Structures  learn many more things as  you dive into this course and achieve ',
      course: 'Cyber Security',
      img: mycourse,
      progress: '90%',
      time: '3 hours left',
      tutor: 'Dr. Sarah Wilson'
    },
    {
      id: 4,
      title: 'Computer Science Fundermentals',
      description: 'Introduction to Programming, Algorithms, Data Structures  learn many more things as  you dive into this course and achieve ',
      course: 'Computer Science',
      img: mycourse,
      progress: '40%',
      time: '3 hours left',
      tutor: 'Dr. Sarah Wilson'
    }
  ]

  return (
    <>
      <div className='h-full w-full px-3 lg:px-6'>
        <div className='flex items-center my-6'>
          <div className='w-full lg:w-auto mr-24'>
            <h1 className='font-medium text-2xl lg:text-lg '>My <span className='text-[#0843F7]'>Courses</span> !</h1>
            <h3 className='text-xs hidden lg:block'>continue your learning journey</h3>
          </div>
          <div className='w-[52%] bg-[#F7F6F6] rounded  lg:flex justify-between items-center px-2 outline outline-[#F7F6F6] shadow-[-4px_0_6px_rgba(0,0,0,0.2) shadow-[0_-4px_6px_rgba(0,0,0,0.2)] hidden'>
            <input type="text" className='w-[90%] outline-none h-full bg-[#F7F6F6] px-4' placeholder='search' />
            <button className='p-2 bg-red'><IoIosSearch size={25} /></button>
          </div>
            <button className='p-2 lg:hidden'><IoIosSearch size={30} /></button>

        </div>
        <div className='w-full'>
          {
            mycourseData.map(item => (
              <div key={item.id} className='w-full h-full flex flex-col lg:flex-row justify-between items-center lg:items-start my-6 gap-4'>
                <div className='w-full lg:w-[75%] h-40 lg:h-72 p-2 outline outline-[#F7F6F6] bg-[#F7F6F6] rounded flex  gap-3'>
                  <div className="w-3/4 h-full relative">
                    <img
                      src={item.img}
                      alt="my course"
                      className="w-full h-full rounded opacity-[4]"
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-4xl text-white">
                      <button className='bg-gray-400 rounded-3xl p-2 text-black'><CiPlay1 size={30} /></button>
                    </span>
                  </div>


                  <div className='w-full h-full'>
                    <div className='flex lg:justify-between  items-center w-full'>
                      <div className='w-full '>
                        <h1 className='font-extrabold lg:font-semibold text-[12px] lg:text-lg lg:my-2 text-black flex  w-full  '>{item.title}</h1>
                        <p className='text-[#ADADAD] text-[10px] lg:text-xs'>By <span>{item.tutor}</span></p>
                      </div>
                      <p className='text-[10px] text-black bg-yellow-200 p-1 rounded-xl w-32 hidden  lg:flex justify-center items-center truncate'>{item.course}</p>
                    </div>
                    <div className="flex flex-col gap-y-4 lg:my-3 text-xs text-gray-600 w-full lg:h-20 line-clamp-3 ">
                      <p className='text-[12px] lg:text-xs line-clamp-2'>{item.description.split('\n')}</p>
                    </div>
                    <div className=''>
                      <div className='flex justify-between my-1 items-center text-[10px] lg:text-xs font-semibold'>
                        <p className=''>Progress</p>
                        <p>{item.progress}</p>
                      </div>
                      <div className='bg-[#EEE9FC] rounded w-full h-[3px] lg:h-2 my-1'><div className='h-full  bg-[#0843F7] rounded' style={{ width: item.progress }}></div></div>
                    </div>
                    <div className='text-[10px] lg:text-xs flex justify-between'>
                      <h5 className=''>18/25 chapters</h5>
                      <p>12 weeks</p>
                    </div>
                    <div className='w-full h-[25px] lg:h-12 my-2 text-white flex justify-between items-center'>
                      <button className='bg-black w-5/6 h-full rounded'>Continue</button>
                      <button className='bg-black w-[13%] h-full flex justify-center items-center rounded'><FiDownload /></button>
                    </div>

                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default MyCourse