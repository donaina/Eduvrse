import React from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ComposedChart } from 'recharts';

const Maximize2: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 3H5a2 2 0 0 0-2 2v3" />
    <path d="M16 3h3a2 2 0 0 1 2 2v3" />
    <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
    <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
  </svg>
);
const Analyzecourse = () => {
    const data = [
    { time: '1AM', line1: 18, line2: 16, line3: 15, bar: 10 },
    { time: '1:30AM', line1: 19, line2: 17, line3: 16, bar: 12 },
    { time: '2AM', line1: 17, line2: 14, line3: 14, bar: 8 },
    { time: '2:30AM', line1: 16, line2: 15, line3: 15, bar: 9 },
    { time: '3AM', line1: 18, line2: 18, line3: 17, bar: 11 },
    { time: '3:30AM', line1: 20, line2: 21, line3: 19, bar: 13 },
    { time: '4AM', line1: 19, line2: 19, line3: 20, bar: 10 },
    { time: '4:30AM', line1: 17, line2: 18, line3: 22, bar: 11 },
    { time: '5AM', line1: 16, line2: 20, line3: 23, bar: 9 },
    { time: '5:30AM', line1: 18, line2: 24, line3: 24, bar: 12 },
    { time: '6AM', line1: 20, line2: 22, line3: 22, bar: 14 },
    { time: '6:30AM', line1: 21, line2: 20, line3: 21, bar: 13 },
    { time: '7AM', line1: 20, line2: 18, line3: 20, bar: 12 },
    { time: '7:30AM', line1: 19, line2: 17, line3: 19, bar: 11 }
    ]
  return (
    <div className='mx-6'>
        <div className='mb-6'>
            <h1 className='my-7 font-semibold text-xl'>Course Analytics</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
                <div className='w-60 h-60 flex justify-center items-center border '>
                    <div className='text-center'>
                        <p className='text-sm font-semibold text-black'>Advance Mathematics </p>
                        <p className='text-sm text-[#808080] mt-2'>25 chapters</p>
                    </div>
                </div>
                <div className='w-60 h-60 flex justify-center items-center border '>
                    <div className='text-center'>
                        <h1 className='text-2xl text-[#0CF37F] font-semibold'>92%</h1>
                        <p className='text-sm font-semibold text-black'>Completion Rate</p>
                        <p className='text-sm text-[#808080] w-36'>48 out of 50 Students  Completed</p>
                    </div>
                </div>
                <div className='w-60 h-60 flex justify-center items-center border '>
                    <div className='text-center'>
                        <h1 className='text-black text-3xl font-semibold'>1h:21:00</h1>
                        <p className='text-sm font-semibold text-black mb-2'>Average Time Spent </p>
                        <p className='text-sm text-[#808080]'>Per student</p>
                    </div>
                </div>
                <div className='w-60 h-60 flex justify-center items-center border '>
                    <div className='text-center'>
                        <h1 className='font-semibold text-2xl text-black'>58</h1>
                        <p className='text-sm font-semibold text-black my-2'>Students </p>
                        <p className='text-sm text-[#808080]'>enrolled for this course</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border-2 border-blue-500 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
            <button className="text-gray-400 hover:text-gray-600">
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>

          {/* Chart */}
          <ResponsiveContainer width="100%" height={200}>
            <ComposedChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
              <XAxis 
                dataKey="time" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9ca3af', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9ca3af', fontSize: 12 }}
                domain={[0, 28]}
                ticks={[8, 12, 16, 20, 24]}
              />
              <Bar dataKey="bar" fill="#e5e7eb" radius={[4, 4, 0, 0]} />
              <Line 
                type="monotone" 
                dataKey="line1" 
                stroke="#a78bfa" 
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="line2" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="line3" 
                stroke="#60a5fa" 
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6 }}
              />
            </ComposedChart>
          </ResponsiveContainer>

          {/* Progress Bar */}
          <div className="mt-6 flex justify-center">
            <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analyzecourse