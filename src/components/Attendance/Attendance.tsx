import React from 'react'
import { IoIosSearch } from 'react-icons/io'
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import '../Attendance/MyCalendarStyle.css';


const Attendance = () => {

    const [subjectsTab, setSubjectsTab] = React.useState(['mathematics']);
    const [date, setDate] = React.useState<Date | [Date, Date] | null>(new Date());
    const Tabs = [
        {
            id: 'mathematics',
            label: 'Mathematics',
        },
        {
            id: 'physics',
            label: 'Physics',
        },
        {
            id: 'chemistry',
            label: 'Chemistry',
        }
    ]

    const tabContent = {
        mathematics: {
            title: 'Mathematics',
            students: [
                {
                    id: 1,
                    name: 'Ayomide Akinrinola',
                    matric_no: 'EDU12345',
                    attendance: '60%',
                    status: 'Present',
                    lastSeen: '2024-06-01'
                },
                {
                    id: 2,
                    name: 'Ayomide Akinrinola',
                    matric_no: 'EDU12345',
                    attendance: '60%',
                    status: 'Present',
                    lastSeen: '2024-06-01'
                },
                {
                    id: 3,
                    name: 'Ayomide Akinrinola',
                    matric_no: 'EDU12345',
                    attendance: '60%',
                    status: 'Present',
                    lastSeen: '2024-06-01'
                },
            ]

        },
        physics: {
            title: 'Physics',
            students: [
                {
                    id: 1,
                    name: 'Ayomide Akinrinolaxxxxx',
                    matric_no: 'EDU12345',
                    attendance: '60%',
                    status: 'Present',
                    lastSeen: '2024-06-01'
                },
                {
                    id: 2,
                    name: 'Ayomide Akinrinola',
                    matric_no: 'EDU12345',
                    attendance: '60%',
                    status: 'Present',
                    lastSeen: '2024-06-01'
                },
                {
                    id: 3,
                    name: 'Ayomide Akinrinola',
                    matric_no: 'EDU12345',
                    attendance: '60%',
                    status: 'Present',
                    lastSeen: '2024-06-01'
                },
            ]

        },
        chemistry: {
            title: 'Chemistry',
            students: [
                {
                    id: 1,
                    name: 'Ayomide Akinrinolavvvvvv',
                    matric_no: 'EDU12345',
                    attendance: '60%',
                    status: 'Present',
                    lastSeen: '2024-06-01'
                },
                {
                    id: 2,
                    name: 'Ayomide Akinrinola',
                    matric_no: 'EDU12345',
                    attendance: '60%',
                    status: 'Absent',
                    lastSeen: '2024-06-01'
                },
                {
                    id: 3,
                    name: 'Ayomide Akinrinola',
                    matric_no: 'EDU12345',
                    attendance: '60%',
                    status: 'Present',
                    lastSeen: '2024-06-01'
                },
            ]

        },

    }

    
    return (
        <>
            <div>
                <div className='w-full lg:w-auto'>
                    <h1 className='font-medium text-2xl lg:text-lg'>
                        <span className='text-black'>Attendance</span>
                    </h1>
                    <h3 className='text-xs hidden lg:block text-[#808080] mt-1'>
                        Track your students attendance across various subject
                    </h3>
                </div>
                <div className='h-[144px] w-full grid lg:grid-cols-3 bg-[#FFF7FF] rounded-md p-4 mt-6 gap-4 border border-pink-200 justify-center items-center mb-9 '>
                    <div className=''>
                        <div className='flex justify-between items-center bg-[#FDDDFF] h-28 px-12'><span className='text-sm font-semibold'>Total Course </span><span className='font-semibold text-5xl'>3</span></div>
                    </div>
                    <div>
                        <div className='flex justify-between items-center bg-[#FDDDFF] h-28 px-12'><span className='text-sm font-semibold'>Total Students </span><span className='font-semibold text-5xl'>55</span></div>
                    </div>
                    <div>
                        <div className='flex justify-between items-center bg-[#FDDDFF] h-28 px-12'><span className='text-sm font-semibold'>Attendance Rate </span><span className='font-semibold text-5xl text-[#FBB441]'>68%</span></div>
                    </div>

                </div>
                <div className='h-[76px] w-full  border border-pink-200 rounded-md p-4'>
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        {
                            Tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`flex-1 px-6 py-4 text-sm font-medium transition-all duration-200 relative ${subjectsTab.includes(tab.id)
                                        ? 'bg-[#E0EEFF] text-black'
                                        : 'bg-[#FFFFFF] text-[#808080] hover:text-slate-900 hover:bg-slate-100'
                                        }`}
                                    onClick={() => setSubjectsTab([tab.id])}
                                >
                                    {tab.label}
                                    {subjectsTab.includes(tab.id) && (
                                        <span className="absolute bottom-0 left-0 w-full h-full  rounded-t-md"></span>
                                    )}
                                </button>
                            ))
                        }
                    </div>

                </div>
                <div className='gridd lg:flex lg:justify-between lg:items-start mt-6 gap-4'>
                    <div className='w-[60%] p-4 border border-gray-300 rounded-md'>
                        <div className='w-full bg-[#F7F6F6] rounded lg:flex justify-between items-center pl-2 pb-4 outline outline-[#F7F6F6] shadow hidden'>
                            <input
                                type='text'
                                className='w-[90%] outline-none h-full bg-[#F7F6F6] px-4'
                                placeholder='Search assessments...'
                            // value={searchTerm}
                            // onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className='p-2 bg-[#CBE9FF]'>
                                <IoIosSearch size={25} />
                            </button>
                        </div>
                        <table className="min-w-full border border-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Matric No</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Seen</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>

                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">

                                {tabContent[subjectsTab[0] as keyof typeof tabContent].students.map((student) => (
                                    <tr key={`${subjectsTab[0]}-${student.id}`}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 line-clamp-1 w-52">{student.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.matric_no}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.attendance}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.lastSeen}</td>
                                        <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${student.status === 'Present' ? 'text-black bg-[#0CF37F]' : 'text-black bg-[#FF7979]'}`}>{student.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='w-[40%]'>
                        <div className="calendar-container">
                            {/* <h1 className="calendar-title">📅 My Website Calendar</h1> */}
                            {/* <Calendar
                                onChange={setDate}
                                value={date}
                                className="custom-calendar"
                            /> */}
                            {/* <p className="calendar-selected">
        Selected Date:{" "}
        {date instanceof Date ? date.toDateString() : "No date selected"}
      </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Attendance