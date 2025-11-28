import React from 'react'
import { Link } from 'react-router-dom';
// @ts-ignore
import studentImg from '../../Assets/images/student.jpeg'
// @ts-ignore
import gardians from '../../Assets/images/family.jpeg'
// @ts-ignore
import instructor from '../../Assets/images/instructor.jpeg'
// @ts-ignore
import admin from '../../Assets/images/admin.jpeg'
// @ts-ignore
import Logo from '../../Assets/images/eduverseLogo2.png'

const Login = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col ">
        <div className="h-1/2 bg-[#dee2f0]">
          <div className=" text-black pl-4 pr-4 mt-5 lg:mt-24 flex flex-col items-center lg:flex-row lg:justify-between lg:items-start lg:pl-20 ">
            <div className="w-full px-4 lg:w-1/2 my-4">
              <div className="w-64 -ml-6 md:-ml-10 md:w-96">
                <img src={Logo} alt="Logo" />
              </div>

              <p className="text-2xl font-semibold lg:mt-16 pb-0">Sign in to</p>
              {/* <p className="text-xl">Lorem ipsum is simply</p> */}
              <div className="lg:w-2/3 pt-6 md:pt-2">
                <p className="text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt, cum repellendus odit libero ex nobis maxime quis maiores est consequatur sed voluptatem soluta delectus debitis assumenda quam aliquid architecto.</p>
              </div>
              <div className="mt-4 text-2xl lg:hidden">
                <h1>Welcome Back</h1>
              </div>
            </div>
            <div className=" w-full lg:w-1/2 h-3/4  rounded-lg justify-center flex lg:relative">
              <div className="bg-white text-black w-11/12 rounded-2xl shadow-lg py-5 lg:py-7 justify-center px-4 md:px-7 lg:px-12 absolute">
                <div className="justify-between hidden lg:flex">
                  <h1 className="text-xl">Welcome Back</h1>
                  <div className="text-sm">
                    <p className="text-gray-400">No Account ?</p>
                        <Link to="/register" className='text-blue-500 hover:underline'>Sign Up</Link>
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl font-bold">Sign in</h1>
                  <div className="mt-2 lg:mt-9">
                    <h3>Select Role:</h3>
                    <div className="flex  cursor-pointer justify-between ">
                      <div className="flex flex-col justify-center items-center mt-2 ">
                        <img src={studentImg} alt="student" />
                        <label className="ml-1  text-sm sm:text-sm md:text-base">Student</label>
                      </div>
                      {/* <div className="flex flex-col items-center mt-2 ">
                        <img src={gardians} alt="gardian" />
                        <label className="ml-1  text-sm sm:text-sm md:text-base">Gardian</label>
                      </div> */}
                      <div className="flex flex-col items-center mt-2">
                        <img src={instructor} alt="instructor" />
                        <label className="ml-1 text-sm sm:text-sm md:text-base">Instructor</label>
                      </div>
                      <div className="flex flex-col items-center mt-2 ">
                        <img src={admin} alt="admin" />
                        <label className="ml-1   text-sm sm:text-sm md:text-base">Admin</label>
                      </div>
                    </div>
                    <div className="">
                      <div className="my-3 lg:my-7">
                        <label htmlFor="studentId">Student ID:</label>
                        <input type="text" placeholder="Email" name="studentId" className="w-full mt-1 lg:mt-2 p-2 border border-gray-300 rounded-md" />
                      </div>
                      <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" placeholder="Password" name="name" className="w-full mt-2 p-2 border border-gray-300 rounded-md" />
                      </div>
                      <div className="flex justify-end lg:my-2">
                        <p className="text-sm text-blue-500 right-0 relative">Forget Password</p>
                      </div>
                      <div className="my-4 lg:my-10">
                        <Link to='/feed'>
                        <button className="bg-blue-500 p-3 w-full rounded-lg text-white">
                          Sign in
                        </button>
                        </Link>
                      </div>
                      <div className=" justify-end flex lg:hidden ">
                        <p>No Account ?<span className="text-blue-500 text-sm ">Sign up</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>


          </div>

        </div>
        {/* <div className="h-1/2 bg-white">

        </div> */}

      </div>
    </>
  )
}

export default Login