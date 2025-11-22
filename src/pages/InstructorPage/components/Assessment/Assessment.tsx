import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Assessment = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const assessmentData = [
    {
      id: 1,
      title: 'Calculus Midterm Exams',
      description:
        'A comprehensive midterm exam covering differential calculus, integration techniques, and applications of calculus in real-world scenarios.',
      course: 'Mathematics',
      questions: 15,
      duration: '45 min',
      attempts: 1,
      dueDate: '20th Aug, 2023',
      difficulty: 'Medium',
      progress: 20,
      status: 'In Progress',
      type: 'Assessment',
    },
    {
      id: 2,
      title: 'Physics Lab Report',
      description:
        'Laboratory report on electromagnetic induction experiments, including data analysis and theoretical explanations.',
      course: 'Physics',
      questions: 8,
      duration: '90 min',
      attempts: 2,
      dueDate: '25th Aug, 2023',
      difficulty: 'Hard',
      progress: 75,
      status: 'Nearly Complete',
      type: 'Exam',
    },
    {
      id: 3,
      title: 'Economics Research',
      description:
        'Research project on market dynamics, supply and demand analysis, and economic policy implications.',
      course: 'Economics',
      questions: 12,
      duration: '60 min',
      attempts: 1,
      dueDate: '30th Aug, 2023',
      difficulty: 'Easy',
      progress: 90,
      status: 'Ready to Submit',
      type: 'Assessment',
    },
    {
      id: 4,
      title: 'Economics Research',
      description:
        'Research project on market dynamics, supply and demand analysis, and economic policy implications.',
      course: 'Economics',
      questions: 12,
      duration: '60 min',
      attempts: 1,
      dueDate: '30th Aug, 2023',
      difficulty: 'Easy',
      progress: 90,
      status: 'Ready to Submit',
      type: 'Assessment',
    },
    {
      id: 5,
      title: 'Economics Research',
      description:
        'Research project on market dynamics, supply and demand analysis, and economic policy implications.',
      course: 'Economics',
      questions: 12,
      duration: '60 min',
      attempts: 1,
      dueDate: '30th Aug, 2023',
      difficulty: 'Easy',
      progress: 90,
      status: 'Ready to Submit',
      type: 'Assessment',
    },
  ];

  const filteredAssessments = assessmentData.filter(
    (assessment) =>
      assessment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assessment.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Helper for difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'hard':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className='flex h-auto bg-gray-100/5'>
      {/* Main Content */}
      <div className='w-full'>
        {/* Header */}
        <div className='bg-white border-gray-200 w-full'>
          <div className='flex items-center gap-12 w-full py-3'>
            <div className='w-full lg:w-auto'>
              <h1 className='font-medium text-2xl lg:text-lg'>
                My <span className='text-[#0843F7]'>Assessment</span>!
              </h1>
              <h3 className='text-xs hidden lg:block'>
                Continue your learning journey
              </h3>
            </div>

            {/* Search Bar */}
            <div className='w-[52%] bg-[#F7F6F6] rounded lg:flex justify-between items-center pl-2 outline outline-[#F7F6F6] shadow hidden'>
              <input
                type='text'
                className='w-[90%] outline-none h-full bg-[#F7F6F6] px-4'
                placeholder='Search assessments...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className='p-2 bg-[#CBE9FF]'>
                <IoIosSearch size={25} />
              </button>
            </div>
            <button className='p-2 lg:hidden'>
              <IoIosSearch size={30} />
            </button>
          </div>
        </div>

        {/* Available Assessments */}
        <h2 className='text-sm font-semibold my-4'>Available Assessments</h2>

        
        <div className='w-full overflow-x-auto'>
          <div className='flex gap-6 px-4 pb-4 min-w-max'>
            {filteredAssessments.length === 0 ? (
              <div className='text-center py-12 w-full'>
                <h2 className='text-xl font-semibold text-gray-600'>
                  No Assessments Available
                </h2>
                <p className='text-gray-500 mt-2'>
                  Try adjusting your search criteria
                </p>
              </div>
            ) : (
              filteredAssessments.map((assessment) => (
                <div
                  key={assessment.id}
                  className='w-[350px] flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow'
                >
                  <div className='p-6'>
                    <div className='flex justify-between items-start mb-4'>
                      <h3 className='text-lg font-semibold text-gray-800 leading-tight'>
                        {assessment.title}
                      </h3>
                     
                    </div>

                    <div className='mb-4 flex justify-between'>
                      <p className='text-gray-600 text-sm'>
                        {assessment.course}
                      </p>
                      <button className='text-black bg-[#EDFF24] w-24 py-1 text-xs rounded-full'>
                        {assessment.type}
                      </button>
                    </div>

                    <p className='mb-6 text-sm text-gray-700 line-clamp-3'>
                      {assessment.description}
                    </p>

                    <div className='grid grid-cols-2 gap-4 my-4 text-sm text-gray-600'>
                      <div>
                        <strong>Questions:</strong> {assessment.questions}
                      </div>
                      <div>
                        <strong>Duration:</strong> {assessment.duration}
                      </div>
                      <div>
                        <strong>Attempts:</strong> {assessment.attempts}
                      </div>
                      <div>
                        <strong>Due:</strong> {assessment.dueDate}
                      </div>
                    </div>

                    <p className='text-xs'>{assessment.status}</p>
                  </div>

                  <div className='mt-4 px-6 w-full h-28 grid place-items-center bg-[#DED0FF]'>
                    <Link to='/assessmentQuestion' className='w-full'>
                      <button
                        className={`w-full py-2 rounded text-white transition-colors ${
                          assessment.status === 'Ready to Submit'
                            ? 'bg-green-600 hover:bg-green-700'
                            : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                      >
                        {assessment.status === 'Ready to Submit'
                          ? 'Submit'
                          : 'Continue'}
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Upcoming assignment */}
        {/* <h2 className='text-sm font-semibold my-4'>Upcoming Assessments </h2>

        
        <div className='w-full overflow-x-auto'>
          <div className='flex gap-6 px-4 pb-4 min-w-max'>
            {filteredAssessments.length === 0 ? (
              <div className='text-center py-12 w-full'>
                <h2 className='text-xl font-semibold text-gray-600'>
                  No Assessments Available
                </h2>
                <p className='text-gray-500 mt-2'>
                  Try adjusting your search criteria
                </p>
              </div>
            ) : (
              filteredAssessments.map((assessment) => (
                <div
                  key={assessment.id}
                  className='w-[350px] flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow'
                >
                  <div className='p-6'>
                    <div className='flex justify-between items-start mb-4'>
                      <h3 className='text-lg font-semibold text-gray-800 leading-tight'>
                        {assessment.title}
                      </h3>
                     
                    </div>

                    <div className='mb-4 flex justify-between'>
                      <p className='text-gray-600 text-sm'>
                        {assessment.course}
                      </p>
                      <button className='text-black bg-[#EDFF24] w-24 py-1 text-xs rounded-full'>
                        {assessment.type}
                      </button>
                    </div>

                    <p className='mb-6 text-sm text-gray-700 line-clamp-3'>
                      {assessment.description}
                    </p>

                    <div className='grid grid-cols-2 gap-4 my-4 text-sm text-gray-600'>
                      <div>
                        <strong>Questions:</strong> {assessment.questions}
                      </div>
                      <div>
                        <strong>Duration:</strong> {assessment.duration}
                      </div>
                      <div>
                        <strong>Attempts:</strong> {assessment.attempts}
                      </div>
                      <div>
                        <strong>Due:</strong> {assessment.dueDate}
                      </div>
                    </div>

                    <p className='text-xs'>{assessment.status}</p>
                  </div>

                  <div className='mt-4 px-6 w-full h-28 grid place-items-center bg-[#DED0FF]'>
                    <Link to='/assessmentQuestion' className='w-full'>
                      <button
                        className={`w-full py-2 rounded text-white transition-colors ${
                          assessment.status === 'Ready to Submit'
                            ? 'bg-green-600 hover:bg-green-700'
                            : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                      >
                        {assessment.status === 'Ready to Submit'
                          ? 'Submit'
                          : 'Continue'}
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Assessment;
