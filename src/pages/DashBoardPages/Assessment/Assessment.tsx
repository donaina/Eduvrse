import React, { useState } from 'react';
import { Search, Clock, Calendar, User, BookOpen, Home, FileText, Settings, LogOut } from 'lucide-react';
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Assessment = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const assessmentData = [
    {
      id: 1,
      title: 'Calculus Midterm Exams',
      description: 'A comprehensive midterm exam covering differential calculus, integration techniques, and applications of calculus in real-world scenarios.',
      course: 'Mathematics',
      questions: 15,
      duration: '45 min',
      attempts: 1,
      dueDate: '20th Aug, 2023',
      difficulty: 'Medium',
      progress: 20,
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Physics Lab Report',
      description: 'Laboratory report on electromagnetic induction experiments, including data analysis and theoretical explanations.',
      course: 'Physics',
      questions: 8,
      duration: '90 min',
      attempts: 2,
      dueDate: '25th Aug, 2023',
      difficulty: 'Hard',
      progress: 75,
      status: 'Nearly Complete'
    },
    {
      id: 3,
      title: 'Economics Research',
      description: 'Research project on market dynamics, supply and demand analysis, and economic policy implications.',
      course: 'Economics',
      questions: 12,
      duration: '60 min',
      attempts: 1,
      dueDate: '30th Aug, 2023',
      difficulty: 'Easy',
      progress: 90,
      status: 'Ready to Submit'
    },
    {
      id: 4,
      title: 'Physics Lab Report',
      description: 'Laboratory report on electromagnetic induction experiments, including data analysis and theoretical explanations.',
      course: 'Physics',
      questions: 8,
      duration: '90 min',
      attempts: 2,
      dueDate: '25th Aug, 2023',
      difficulty: 'Hard',
      progress: 75,
      status: 'Nearly Complete'
    },
    {
      id: 5,
      title: 'Economics Research',
      description: 'Research project on market dynamics, supply and demand analysis, and economic policy implications.',
      course: 'Economics',
      questions: 12,
      duration: '60 min',
      attempts: 1,
      dueDate: '30th Aug, 2023',
      difficulty: 'Easy',
      progress: 90,
      status: 'Ready to Submit'
    }
  ];


  const filteredAssessments = assessmentData.filter(assessment =>
    assessment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    assessment.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const getProgressColor = (progress: number) => {
  //   if (progress >= 80) return 'bg-green-400';
  //   if (progress >= 60) return 'bg-yellow-400';
  //   if (progress >= 40) return 'bg-blue-400';
  //   return 'bg-red-400';
  // };

  // const getDifficultyColor = (difficulty: string) => {
  //   switch (difficulty) {
  //     case 'Easy': return 'bg-green-100 text-green-700';
  //     case 'Medium': return 'bg-yellow-100 text-yellow-700';
  //     case 'Hard': return 'bg-red-100 text-red-700';
  //     default: return 'bg-gray-100 text-gray-700';
  //   }
  // };

  return (
    <div className='flex h-screen bg-gray-50'>


      {/* Main Content */}
      <div className='flex-1 w-full'>
        {/* Header */}
        <div className='bg-white border-b border-gray-200 w-full  py-6 '>
          <div className='flex items-center gap-12 w-full px-8 '>
            
            <div className='w-full lg:w-auto mr-24'>
              <h1 className='font-medium text-2xl lg:text-lg '>My <span className='text-[#0843F7]'>Courses</span> !</h1>
              <h3 className='text-xs hidden lg:block'>continue your learning journey</h3>
            </div>

            {/* Search Bar */}
            <div className='w-[52%] bg-[#F7F6F6] rounded  lg:flex justify-between items-center px-2 outline outline-[#F7F6F6] shadow-[-4px_0_6px_rgba(0,0,0,0.2) shadow-[0_-4px_6px_rgba(0,0,0,0.2)] hidden'>
                          <input type="text" className='w-[90%] outline-none h-full bg-[#F7F6F6] px-4' placeholder='search' value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />
                          <button className='p-2 bg-red'><IoIosSearch size={25} /></button>
                        </div>
                        <button className='p-2 lg:hidden'><IoIosSearch size={30} /></button>
            
          </div>
        </div>

        {/* Assessment Cards */}
        <div className='p-8 w-full flex justify-center items-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredAssessments.length === 0 ? (
              <div className='col-span-full text-center py-12'>
                <h2 className='text-xl font-semibold text-gray-600'>No Assessments Available</h2>
                <p className='text-gray-500 mt-2'>Try adjusting your search criteria</p>
              </div>
            ) : (
              filteredAssessments.map((assessment) => (
                <div key={assessment.id} className='bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow'>
                  {/* Card Header */}
                  <div className='flex justify-between items-start mb-4'>
                    <h3 className='text-lg font-semibold text-gray-800 leading-tight'>
                      {assessment.title}
                    </h3>
                    {/* <span className={`px-2 py-1 text-xs font-medium rounded ${getDifficultyColor(assessment.difficulty)}`}>
                      {assessment.difficulty}
                    </span> */}
                  </div>

                  {/* Description */}
                  <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                    {assessment.description}
                  </p>

                  {/* Assessment Details */}
                  <div className='grid grid-cols-2 gap-4 mb-4 text-sm'>
                    <div className='flex items-center text-gray-600'>
                      <span className='font-medium'>Questions:</span>
                      <span className='ml-1'>{assessment.questions}</span>
                    </div>
                    <div className='flex items-center text-gray-600'>
                      <span className='font-medium'>Duration:</span>
                      <span className='ml-1'>{assessment.duration}</span>
                    </div>
                    <div className='flex items-center text-gray-600'>
                      <span className='font-medium'>Attempts:</span>
                      <span className='ml-1'>{assessment.attempts}</span>
                    </div>
                    <div className='flex items-center text-gray-600'>
                      <span className='font-medium'>Due:</span>
                      <span className='ml-1'>{assessment.dueDate}</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className='mb-4'>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='text-sm font-medium text-gray-700'>Progress</span>
                      <span className='text-sm font-medium text-gray-800'>{assessment.progress}%</span>
                    </div>
                    <div className='w-full bg-gray-200 rounded-full h-2'>
                      {/* <div 
                        className={`h-2 rounded-full ${getProgressColor(assessment.progress)} transition-all duration-300`}
                        style={{ width: `${assessment.progress}%` }}
                      ></div> */}
                    </div>
                  </div>

                  {/* Status */}
                  <div className='mb-4'>
                    <span className='text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded'>
                      {assessment.status}
                    </span>
                  </div>

                  {/* Action Button */}
                  <Link to='/assessmentQuestion' className='w-full'>
                    <button className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors'>
                      {assessment.status === 'Ready to Submit' ? 'Submit' : 'Continue'}   
                    </button>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;