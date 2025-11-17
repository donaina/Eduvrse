import React from 'react'
// @ts-ignore
import cloud from '../../Assets/images/cloud.png';
import { IoIosSearch } from 'react-icons/io';
import { ChevronDown } from 'lucide-react';

const Editcourse = () => {


    return (
        <>
            <div className='mx-5'>
                <div className=''>
                    <div className='bg-white border-gray-200 w-full'>
                        <div className='flex items-center gap-12 w-full py-3'>
                            <div className='w-full lg:w-auto'>
                                <h1 className='font-medium text-2xl lg:text-lg'>
                                    <span className='text-[#0843F7]'>Course</span>
                                </h1>
                                <h3 className='text-xs hidden lg:block'>
                                    Manage and create your courses
                                </h3>
                            </div>

                            {/* Search Bar */}
                            <div className='w-[52%] bg-[#F7F6F6] rounded lg:flex justify-between items-center pl-2 outline outline-[#F7F6F6] shadow hidden'>
                                <input
                                    type='text'
                                    className='w-[90%] outline-none h-full bg-[#F7F6F6] px-4'
                                    placeholder='Search ...'
                                // value={searchTerm}
                                // onChange={(e) => setSearchTerm(e.target.value)}
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
                </div>
                <div className='mt-5'>
                    <h1 className='text-md font-semibold'>Create new course</h1>
                    <label htmlFor="course format" className='my-5 text-xs font-semibold'>Course Format</label>
                    <div className='relative'>
                        <select name="" id="" className='w-3/5 appearance-none border-2 border-gray-300 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:border-indigo-500 transition-colors bg-white cursor-pointer'>
                            <option value="" >PDF</option>
                            <option value="" >Document</option>
                        </select>
                        <div className="absolute right-[41%] top-1/2 -translate-y-1/2 pointer-events-none">
                            <ChevronDown className="w-5 h-5 text-gray-600 fill-gray-600" />
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto  my-4'>
                    <div className='flex  gap-6'>
                        <div className='w-3/5 h-[400px] mt-9   border-dashed border-2 border-[#D9D7D7] grid justify-center items-center rounded-lg'>
                            <div>
                                <div className=' text-center font-semibold'>
                                    <img src={cloud} alt="" className='max-h-20' />
                                    <p>Drop files here </p>
                                    <p className='my-1'>or</p>
                                    {/* <button className='w-28 text-white p-2 bg-black rounded-md text-sm'>Browse files</button> */}
                                    <div className='mt-2'>
                                        {/* <input type="file" name="" id="uploadCourse" className='hidden' /> */}
                                        <input
                                            type="file"
                                            //   onChange={handleFileChange}
                                            className="hidden"
                                            id="uploadCourse"
                                        />
                                        <label htmlFor="uploadCourse" className='py-2 px-4 w-full text-sm bg-black text-white rounded-md cursor-pointer'>Browse files</label>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className='flex w-2/5 flex-col  '>
                            <div>
                                <h1 className='my-2 text-sm font-semibold'>Course Info</h1>

                                <div className=''>
                                    <input type="text" className='py-2 px-4 w-full outline-none border border-[#D0CACA] text-sm' placeholder='Course Name' />
                                </div>
                                <div className='my-2'>
                                    <textarea name="" id="" placeholder='Description' className='py-2 px-4 w-full outline-none border border-[#D0CACA] text-sm' />
                                </div>
                                <div className='my-2'>
                                    <select name="" id="" className='py-2 px-4 w-full outline-none border border-[#D0CACA] text-sm' >
                                        <option value="">Category</option>
                                    </select>
                                </div>
                                <div className='my-2'>
                                    <input type="text" className='py-2 px-4 w-full outline-none border border-[#D0CACA] text-sm' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end my-4'>
                    <button className='bg-black w-20 p-3 text-white rounded-md'>Submit</button>



                </div>
            </div>
        </>
    )
}

export default Editcourse