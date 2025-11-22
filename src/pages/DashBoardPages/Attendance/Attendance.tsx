import React from 'react'
import Mycalender from '../Mycalender/Mycalender.tsx'
import MarkAttendanceModal from './AttendanceModal/MarkAttendanceModal.tsx';

const Attendance = () => {

  const [openAttendanceModal, setOpenAttendanceModal] = React.useState(false);
  const [openItemModal, setOpenItemModal] = React.useState<{
    date: string;
    event: string;
    duration?: string;
    time: string;
    room: string;
  } | null>(null);

  const upComingEvents = [
    { date: '2024-07-10', event: 'Math Exam', duration: '1h:20min:00', time: '8am - 10am', room: 'Room 101' },
    { date: '2024-07-15', event: 'Science Project Due', time: '8am - 10am', room: 'Room 101' },
    { date: '2024-07-20', event: 'History Presentation', time: '8am - 10am', room: 'Room 101' },
  ];

  return (
    <>
      <div className='w-full lg:flex lg:justify-center lg:flex-col p-4 bg-[#E0E8FF]/30 '>
        <h1 className='text-xl font-semibold'>Attendance</h1>
        <p className='text-xs text-[#808080]'>Continue your learning journey</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
          <div className='bg-[#F7F6F6] p-4 rounded-lg shadow-md '>
            <h1 className='font-semibold text-xs'>Attendance Rate </h1>
            <p className='text-2xl '>75%</p>
            <p className='text-[#ADADAD]'>Overall attendance</p>
          </div>
          <div className='bg-[#F7F6F6]  rounded-lg shadow-md flex'>
            <div className='w-2 h-full bg-[#0CF352] rounded-l-lg'></div>
            <div className='p-4'>
              <h1 className='font-semibold text-xs'>Present </h1>
              <p className='text-2xl'>20</p>
              <p className='text-[#ADADAD]'>Classes Attended</p>
            </div>
          </div>
          <div className='bg-[#F7F6F6]  rounded-lg shadow-md flex'>
            <div className='w-2 h-full bg-[#EDFF24] rounded-l-lg'></div>
            <div className='p-4'>
              <h1 className='font-semibold text-xs'>Late </h1>
              <p className='text-2xl'>3</p>
              <p className='text-[#ADADAD]'>Late  Arrivals</p>
            </div>
          </div>
          <div className='bg-[#F7F6F6]  rounded-lg shadow-md flex'>
            <div className='w-2 h-full bg-[#FF1818] rounded-l-lg'></div>
            <div className='p-4'>
              <h1 className='font-semibold text-xs'>Absent </h1>
              <p className='text-2xl'>5</p>
              <p className='text-[#ADADAD]'>Classes Missed</p>
            </div>
          </div>
        </div>

        <h1 className='text-xl mt-7 font-semibold'>Upcoming Events</h1>

        <div className='w-full md:flex'>
          <div className='w-full md:w-2/3 p-4 '>
            
              {upComingEvents.map((item, index) => (

                <div key={index} className="bg-white  mb-4 rounded-lg shadow-md ">
                  <div className='flex h-20 cursor-pointer' onClick={() => { setOpenAttendanceModal(true); setOpenItemModal(item); }}>
                    <div className='w-2 h-full bg-[#808080]/60 rounded-l-lg'></div>

                    <div className='w-full '>
                      <div className=" ">
                        <div className="flex  justify-between items-center py-1 px-3">
                          <div className='text-sm'>
                            <h2 className="text-xl font-semibold">{item.event}</h2>
                            <p className="text-sm text-gray-600">{item.date}</p>
                            <p>Room: {item.room}</p>
                          </div>
                          <div className="text-sm text-gray-600  right-1">
                            <p className='my-2 bg-blue-600 w-24 rounded-md text-white text-center'>{item.duration ? ` ${item.duration}` : null}</p>
                            {/* <p className="text-sm text-gray-600">{item.date}</p> */}

                            <p className='text-end'>{item.time}</p>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className='w-4 h-full bg-[#808080]'>hh</div> */}

                  <div className=" ">
                    <div className="flex  justify-between items-center">
                    </div>
                  </div>
                </div>
              ))}
            
          </div>
          <div className='hidden md:w-1/3  md:block'>
            <Mycalender />
          </div>
        </div>
          <h1 className='text-xl mt-7 font-semibold'>Attendance Record</h1>
          <div className='flex'>
          <div className='w-full md:w-2/3 p-4 bg-[#F7F6F6]/50 mt-2'>
            <div>
              {upComingEvents.map((item, index) => (

                <div key={index} className="bg-white  mb-4 rounded-lg shadow-md ">
                  <div className='flex h-20'>
                    <div className='w-2 h-full bg-[#0CF37F]/60 rounded-l-lg'></div>

                    <div className='w-full '>
                      <div className=" ">
                        <div className="flex  justify-between items-center py-1 px-3">
                          <div className='text-sm'>
                            <h2 className="text-xl font-semibold">{item.event}</h2>
                            <p className="text-sm text-gray-600">{item.date}</p>
                            <p>Room: {item.room}</p>
                          </div>
                          <div className="text-sm text-gray-600">
                            <p className='my-2'>{item.duration ? ` ${item.duration}` : null}</p>
                            {/* <p className="text-sm text-gray-600">{item.date}</p> */}

                            <p>{item.time}</p>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className='w-4 h-full bg-[#808080]'>hh</div> */}

                  <div className=" ">
                    <div className="flex  justify-between items-center">
                      {/* <div>
                        <h2 className="text-lg font-semibold">{item.event}</h2>
                        <p className="text-sm text-gray-600">{item.date}</p>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>{item.duration ? `Duration: ${item.duration}` : null}</p>
                        <p>Time: {item.time}</p>
                        <p>Room: {item.room}</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className='w-1/3'>
            <Mycalender />
          </div> */}
        </div>
      </div>

      <MarkAttendanceModal open={openAttendanceModal} close={() => setOpenAttendanceModal(false)} item={openItemModal ? [openItemModal] : []} />
      

    </>
  )
}

export default Attendance