import React from 'react'
import { Outlet } from 'react-router-dom';

const AssessmentRoute = () => {
  return (
    <div className='p-6'>
            <Outlet />
        </div>
  )
}

export default AssessmentRoute