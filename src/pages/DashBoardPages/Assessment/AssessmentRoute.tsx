import React from 'react'
import { Outlet } from 'react-router-dom'

export const AssessmentRoute = () => {
  return (
    <>
        <div className='p-6'>
            <Outlet />
        </div>
    </>
  )
}
