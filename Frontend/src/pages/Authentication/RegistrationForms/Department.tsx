import React from 'react'

const Department = () => {
  return (
    <>
            <div>
                <label htmlFor="email address">Department:</label>
                <input type="password" placeholder="email address" name="name" className="w-full mt-4 p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="my-2 lg:my-3">
                <div className="justify-between flex gap-4">
                    <div>
                        <label htmlFor="studentId">School Type:</label>
                        <input type="text" placeholder="School Type" name="studentId" className="w-full mt-1 lg:mt-4 p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="studentId">School Name:</label>
                        <input type="text" placeholder="School Name" name="studentId" className="w-full mt-1 lg:mt-4 p-2 border border-gray-300 rounded-md" />
                    </div>
                </div>
            </div>
            
            <div className="my-2 lg:my-3">
                <div className="justify-between flex gap-4">
                    <div>
                        <label htmlFor="studentId">Grade/Level:</label>
                        <input type="text" placeholder="Grade/Level" name="studentId" className="w-full mt-1 lg:mt-4 p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="studentId">Gender:</label>
                        <input type="text" placeholder="Gender" name="studentId" className="w-full mt-1 lg:mt-4 p-2 border border-gray-300 rounded-md" />
                    </div>
                </div>
            </div>
        </>
  )
}

export default Department