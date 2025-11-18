import React from 'react'

const UserForm = () => {
    return (
        <>
            <div className="my-2 lg:my-3">
                <div className="justify-between flex gap-4">
                    <div>
                        <label htmlFor="studentId">First Name:</label>
                        <input type="text" placeholder="First Name" name="studentId" className="w-full mt-1 lg:mt-4 p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="studentId">Last Name:</label>
                        <input type="text" placeholder="Last Name" name="studentId" className="w-full mt-1 lg:mt-4 p-2 border border-gray-300 rounded-md" />
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="email address">Email address:</label>
                <input type="password" placeholder="email address" name="name" className="w-full mt-4 p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="my-2 lg:my-3">
                <div className="justify-between flex gap-4">
                    <div>
                        <label htmlFor="studentId">Username:</label>
                        <input type="text" placeholder="Username" name="studentId" className="w-full mt-1 lg:mt-4 p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="studentId">Password:</label>
                        <input type="text" placeholder="Password" name="studentId" className="w-full mt-1 lg:mt-4 p-2 border border-gray-300 rounded-md" />
                    </div>
                </div>
            </div>
            {/* <div className="flex justify-end ">
                <p className="text-sm text-blue-500 right-0 relative">Forget Password</p>
            </div>
            <div className="my-3 lg:my-2">
                <button className="bg-blue-500 p-3 w-full rounded-lg text-white">Next</button>
            </div>
            <div className=" justify-end flex lg:hidden ">
                <p>No Account ?<span className="text-blue-500 text-sm">Sign up</span></p>
            </div> */}
        </>
    )
}

export default UserForm