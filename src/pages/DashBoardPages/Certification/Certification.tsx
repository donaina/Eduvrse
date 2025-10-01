import React from 'react'
// @ts-ignore
import DaysFire from '../../../Assets/images/dayfire.jpeg'
// @ts-ignore
import Course from '../../../Assets/images/course.jpeg'
// @ts-ignore
import Badge from '../../../Assets/images/badges.jpeg'
// @ts-ignore
import Assessment from '../../../Assets/images/assessment.jpeg'
// @ts-ignore
import BadgesImage from '../../../Assets/images/badgesImage.png'
import { Link } from 'react-router-dom'


const Certification = () => {
  const statisticData = [
    {
      id: 1,
      img: DaysFire,
      title: 'Days Streak',
      // description: 'Completed 30 days of learning streak',
      number: '50',
      // bg: 'bg-[#E6F0FF]'
    },
    {
      id: 2,
      img: Course,
      title: 'Courses Finished',
      // description: 'You have completed 5 courses',
      number: '150',
      // bg: 'bg-[#FFF4E5]'
    },
    {
      id: 3,
      img: Badge,
      title: 'Badges',
      // description: 'Awarded for outstanding performance',
      number: '10',
      // bg: 'bg-[#E6FFF4]'
    },
    {
      id: 4,
      img: Assessment,
      title: 'Assessments Passed',
      number: '20',
      // description: 'Recognized for exceptional achievement',
      // bg: 'bg-[#F0E6FF]'
    }
  ]

  const DownloadCertification = [{
    id: 1,
    title: 'Certification of Completion',
    course: 'Mathematics',
    instructor: 'John Doe',
    issued: '10/5/25',
    grade: 'A+'
  },
  {
    id: 2,
    title: 'Certification of Completion',
    course: 'Mathematics',
    instructor: 'John Doe',
    issued: '10/5/25',
    grade: 'A+'
  },
  {
    id: 3,
    title: 'Certification of Completion',
    course: 'Mathematics',
    instructor: 'John Doe',
    issued: '10/5/25',
    grade: 'A+'
  }]

  const topBadges = [
    {
      id: 1,
      img: BadgesImage,
      title: 'Achievement 06 ',
      description: '200 Modules completed',
      color: 'text-[#D745E0]',

    },
    {
      id: 2,
      img: BadgesImage,
      title: 'Achievement 06 ',
      description: '200 Modules completed',
      color: 'text-[#0AB79D]',
    },
    {
      id: 3,
      img: BadgesImage,
      title: 'Achievement 06 ',
      description: '200 Modules completed',
      color: 'text-[#D745E0]',
    },
    {
      id: 4,
      img: BadgesImage,
      title: 'Achievement 06 ',
      description: '200 Modules completed',
      color: 'text-[#FBB441]',
    }
  ]

  const LeaderBoard = [
    {
      id: 1,
      name: 'John Doe',
      points: 1500,
      rank: 1
    },
    {
      id: 2,
      name: 'Jane Smith',
      points: 1400,
      rank: 2
    },
    {
      id: 3,
      name: 'Alice Johnson',
      points: 1300,
      rank: 3
    }]

  return (
    <>
      <div className='px-6 flex flex-col gap-6'>
        <div>
          <h1 className='font-semibold text-xl'>Certificates & Achievement </h1>
          <p className='text-xs'>Your learning Accomplishments and Certification</p>
        </div>
        <div className='flex gap-6 mt-4'>
          <div className='w-[70%] font-semibold text-md my-2 '>
            <h1 className='my-2 font-bold text-2xl'>Statistics</h1>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 '>
              {statisticData.map(item => (
                <div key={item.id} className='flex gap-4 p-4 rounded-lg shadow-md bg-[#0C7FDA] text-white'>
                  <div className='w-12 h-12 lg:w-16 lg:h-16'>
                    <img src={item.img} alt={item.title} className='w-full h-full object-cover rounded-lg' />
                  </div>
                  <div className=''>
                    {item.number && <p className='text-2xl lg:text-md  font-bold mt-2 '>{item.number}+</p>}

                    <p className='font-semibold text-sm lg:text-md'>{item.title}</p>

                    {/* <p className='text-xs lg:text-sm text-gray-600'>{item.description}</p> */}
                  </div>
                </div>
              ))}


            </div>
            <div className='my-4'>
              <div className='flex justify-between items-center'>
                <h1 className='text-xl font-semibold'>Badges</h1>
                <Link to= "/certificationBadge" ><button className=' px-2 py-1 text-white bg-black text-sm rounded-md'>View All</button></Link>
              </div>
              <div className='flex gap-4 overflow-x-auto mt-4 p-2'>
                {topBadges.map(item => (
                  <div key={item.id} className='flex min-w-[120px] lg:min-w-[160px] bg-white rounded-lg gap-4 shadow-md p-1 hover:bg-gray-400/10 cursor-pointer'>
                    <div className='w-full h-16 lg:h-24 '>
                      <img src={item.img} alt={item.title} className='w-full h-full object-contain rounded-lg' />
                    </div>
                    <div>
                      <h2 className={`font-semibold text-md mt-2 ${item.color}`}>{item.title}</h2>
                      <p className='text-sm text-gray-600 mt-1'>{item.description}</p>
                      {/* <p className='text-xs text-gray-400 mt-2'>{item.date}</p> */}
                    </div>
                  </div>
                ))}
              </div>
              <div className='my-4'>
                <div className='flex justify-between items-center mt-10 mb-16 '>
                  <h1 className='text-xl font-semibold'>Certification</h1>
                  <button className=' px-2 py-1 text-white bg-black text-sm rounded-md'>View All</button>
                </div>
                <div className='flex gap-4'>
                  {DownloadCertification.map(item => (
                    <div className='w-64 h-80  rounded-md hover:bg-gray-400/25 ' key={item.id}>
                      <div className=' w-full h-40 bg-white rounded-t-md bg-gradient-to-t from-[#BEA1FF] to-[#0089ED] p-4'>
                        <div className='flex justify-between items-center'>
                          <p>v</p>
                          <button className=' border border-[#EDFF24] rounded-full p-1 bg-green-300 text-sm'>Grade: <strong>{item.grade}</strong></button>
                        </div>
                        <div className='text-white mt-10'>
                          <h1 className='font-semibold'>{item.title}</h1>
                          <p className='text-xs my-3 font-light'>{item.course}</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className='p-3 text-sm'>
                            <p><span className='font-bold'>Instructor:</span> <span className=''>{item.instructor}</span></p>
                            <p><span className='font-bold'>Issued:</span> <span className='mt-4 mb-10'>{item.issued}</span></p>
                            <button className='mt-8 w-[70%] text-center bg-black p-2 text-white rounded-md'>Download</button>
                          </div>
                        </div>
                      </div>
                    </div>))}
                </div>
              </div>
            </div>
          </div>
          <div className='w-[25%] font-semibold text-md my-2'>
            <h1 className='my-2 font-bold text-2xl'>Leaderboard</h1>
            <div className='border rounded-md w-full h-[80%] shadow-md'>
              <div className=' '>
                {LeaderBoard.map(item => (
                  <div key={item.id} className='gap-3 p-2 flex justify-between items-center m-2 border rounded-md shadow text-sm cursor-pointer hover:bg-gray-400/10'>
                    <div className=''>
                      <span className='px-3'>v</span>
                      <span>{item.name}</span>
                    </div>
                    <span className='font-bold'>{item.points}xp</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Certification