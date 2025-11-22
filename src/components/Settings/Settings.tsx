
import React, { useState } from 'react'

interface formData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string
}

const Settings = () => {
  const [editProfile, setEditProfile] = useState<boolean>(false)
  const [isOn, setIsOn] = useState(false);
  const [formData, setFormData] = useState<formData>(
    {
      firstName: 'Abcd',
      lastName: 'Dfgh',
      email: 'abcd@email.com',
      phone: '080627'
    }
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <>
      <div className='px-6 py-4'>
        <h1 className='text-2xl font-bold '>Setting</h1>
        <p className='text-xs text-[#808080]'>Manage your account and prefrence</p>
      </div>
      <div className='px-6 grid lg:flex lg:justify-between '>
        <div className='w-full lg:w-[58%] '>
          <div className='border p-4 shadow-sm rounded-md'>
            <h2 className='font-semibold'>Profile Information</h2>
            <p className='my-2 text-[#808080] text-xs'>Edit your personal details</p>
            <div className='grid grid-cols-1 justify-center items-center lg:grid-cols-2 gap-4'>
              <div className='gap-y-4'>
                <label htmlFor="firstName" className='text-sm font-semibold my-1'>First name</label>
                <p><input
                  type="text"
                  name="firstName"
                  className='w-[100%] lg:w-[90%] px-2 py-2 border border-[#D9D8D8] rounded-md outline-none text-lg disabled:bg-gray-100 disabled:cursor-not-allowed'
                  value={formData.firstName}
                  onChange={handleInputChange}
                  disabled={!editProfile}
                /></p>
              </div>

              <div className='gap-y-4'>
                <label htmlFor="lastName" className='text-sm font-semibold my-1'>Last name</label>
                <p><input
                  type="text"
                  name='lastName'
                  className='w-[100%] lg:w-[90%] px-2 py-2 border border-[#D9D8D8] rounded-md outline-none text-lg disabled:bg-gray-100 disabled:cursor-not-allowed'
                  value={formData.lastName}
                  onChange={handleInputChange}
                  disabled={!editProfile}
                /></p>
              </div>

              <div className='gap-y-4'>
                <label htmlFor="email" className='text-sm font-semibold my-1'>Email</label>
                <p><input
                  type="text"
                  name='email'
                  className='w-[100%] lg:w-[90%] px-2 py-2 border border-[#D9D8D8] rounded-md outline-none text-lg disabled:bg-gray-100 disabled:cursor-not-allowed'
                  value={formData.email} onChange={handleInputChange}
                  disabled={!editProfile}
                /></p>
              </div>

              <div className='gap-y-4'>
                <label htmlFor="phone" className='text-sm font-semibold my-1'>Phone number</label>
                <p><input
                  type="number"
                  name='phone'
                  className='w-[100%] lg:w-[90%] px-2 py-2 border border-[#D9D8D8] rounded-md outline-none text-lg disabled:bg-gray-100 disabled:cursor-not-allowed'
                  value={formData.phone} onChange={handleInputChange}
                  disabled={!editProfile}
                /></p>
              </div>

              <button
                className={`text-white p-2 rounded-md w-[100%] lg:w-[90%] ${!editProfile ? 'bg-black hover:bg-gray-800' : 'bg-blue-500 hover:bg-green-900'}`}
                onClick={() => setEditProfile(!editProfile)}
              >
                {!editProfile ? 'Edit Profile' : 'Save Changes'}
              </button>
            </div>
          </div>
          {/* security sections */}

          <div className='border p-4 shadow-sm rounded-md mt-2'>
            <h1 className='text-bold'>Security </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <div className='border-r pr-4'>
                <p className='my-2 text-[#808080] text-xs'>Manage your account security </p>

                <div className='gap-y-4 '>
                  <label htmlFor="First name" className='text-sm font-semibold my-1 '>New Password</label>
                  <p><input type='email' placeholder='abec@gmail.com' className='w-[100%] lg:w-[90%] p-2 border border-[#D9D8D8] rounded-md outline-none text-lg' /></p>
                </div>
                <div className='gap-y-4 '>
                  <label htmlFor="First name" className='text-sm font-semibold my-1 '>Confirm Password</label>
                  <p><input type="text" className='w-[100%] lg:w-[90%] p-2 border border-[#D9D8D8] rounded-md' /></p>
                </div>
                <div className='my-3'>
                  <button className='text-white bg-black p-2 rounded-md w-[90%]'>Update Password</button>

                </div>
              </div>
              <div className=' '>

                <div className='gap-y-4 '>
                  <p className='my-2 text-black text-xs font-bold'>2 factor authentication </p>

                  <label htmlFor="First name" className='text-sm font-semibold my-1 '>Email</label>
                  <p><input type="text" className='w-[100%] lg:w-[90%] p-2 border border-[#D9D8D8] rounded-md'
                    name='email'
                    onChange={handleInputChange}
                    value={formData.email}
                  /></p>
                </div>
                <div className='gap-y-4 '>
                  <label htmlFor="First name" className='text-sm font-semibold my-1 '>Phone number</label>
                  <p>
                    <input type="text"
                      name='phone'
                      className='w-[100%] lg:w-[90%] p-2 border border-[#D9D8D8] rounded-md'
                      value={formData.phone}
                      onChange={handleInputChange}
                    /></p>
                </div>
                <div className='my-3'>
                  <button className='text-white bg-black p-2 rounded-md w-[100%] lg:w-[90%]'>Proceed</button>

                </div>
              </div>


            </div>
          </div>

        </div>
        <div className=' w-full my-6 lg:w-[40%] '>
          <div className='border shadow px-5 py-2 rounded-md'>
            <h2 className='font-semibold'>Notification</h2>
            <p className='text-[#808080] text-xs my-2'>Configure your notification preference</p>
            <div className='flex justify-between items-center'>
              <div className='text-sm font-semibold'>Email notification</div>
              <div>
                <button
                  onClick={() => setIsOn(!isOn)}
                  className={`relative w-[46px] h-[22px] rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-50 ${isOn
                    ? 'bg-black focus:ring-black'
                    : 'bg-gray-300 focus:ring-gray-200'
                    }`}
                  aria-label="Toggle switch"
                >
                  {/* Sliding Circle */}
                  <span
                    className={`absolute top-[3px] left-1 w-[16px] h-[16px] bg-white rounded-full  shadow-md transform transition-transform duration-300 ease-in-out ${isOn ? 'translate-x-6' : 'translate-x-0'
                      }`}
                  />
                </button>
              </div>
            </div>
            <div className='flex justify-between items-center my-1'>
              <div className='text-sm font-semibold'>Push notification</div>
              <div>
                <button
                  onClick={() => setIsOn(!isOn)}
                  className={`relative w-[46px] h-[22px] rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-50 ${isOn
                    ? 'bg-black focus:ring-black'
                    : 'bg-gray-300 focus:ring-gray-200'
                    }`}
                  aria-label="Toggle switch"
                >
                  {/* Sliding Circle */}
                  <span
                    className={`absolute top-[3px] left-1 w-[16px] h-[16px] bg-white rounded-full  shadow-md transform transition-transform duration-300 ease-in-out ${isOn ? 'translate-x-6' : 'translate-x-0'
                      }`}
                  />
                </button>
              </div>
            </div>
            <div className='flex justify-between items-center my-1'>
              <div className='text-sm font-semibold'>Assignment Reminder</div>
              <div>
                <button
                  onClick={() => setIsOn(!isOn)}
                  className={`relative w-[46px] h-[22px] rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-50 ${isOn
                    ? 'bg-black focus:ring-black'
                    : 'bg-gray-300 focus:ring-gray-200'
                    }`}
                  aria-label="Toggle switch"
                >
                  {/* Sliding Circle */}
                  <span
                    className={`absolute top-[3px] left-1 w-[16px] h-[16px] bg-white rounded-full  shadow-md transform transition-transform duration-300 ease-in-out ${isOn ? 'translate-x-6' : 'translate-x-0'
                      }`}
                  />
                </button>
              </div>
            </div>
            <div className='flex justify-between items-center my-1'>
              <div className='text-sm font-semibold'>Grades Update</div>
              <div>
                <button
                  onClick={() => setIsOn(!isOn)}
                  className={`relative w-[46px] h-[22px] rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-50 ${isOn
                    ? 'bg-black focus:ring-black'
                    : 'bg-gray-300 focus:ring-gray-200'
                    }`}
                  aria-label="Toggle switch"
                >
                  {/* Sliding Circle */}
                  <span
                    className={`absolute top-[3px] left-1 w-[16px] h-[16px] bg-white rounded-full  shadow-md transform transition-transform duration-300 ease-in-out ${isOn ? 'translate-x-6' : 'translate-x-0'
                      }`}
                  />
                </button>
              </div>
            </div>
            <div className='flex justify-between items-center my-1'>
              <div className='text-sm font-semibold'>Assessment Update</div>
              <div>
                <button
                  onClick={() => setIsOn(!isOn)}
                  className={`relative w-[46px] h-[22px] rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-50 ${isOn
                    ? 'bg-black focus:ring-black'
                    : 'bg-gray-300 focus:ring-gray-200'
                    }`}
                  aria-label="Toggle switch"
                >
                  {/* Sliding Circle */}
                  <span
                    className={`absolute top-[3px] left-1 w-[16px] h-[16px] bg-white rounded-full  shadow-md transform transition-transform duration-300 ease-in-out ${isOn ? 'translate-x-6' : 'translate-x-0'
                      }`}
                  />
                </button>
              </div>
            </div>

          </div>
          <div className='border shadow px-5 py-2 rounded-md mt-4'>
            <h2 className='font-semibold'>Appearance</h2>
            <p className='text-[#808080] text-xs my-2'>Customize experience</p>
            <div className='flex justify-between items-center'>
              <div className='text-sm font-semibold'>Dark Mode</div>
              <div>
                <button
                  onClick={() => setIsOn(!isOn)}
                  className={`relative w-[46px] h-[22px] rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-50 ${isOn
                    ? 'bg-black focus:ring-black'
                    : 'bg-gray-300 focus:ring-gray-200'
                    }`}
                  aria-label="Toggle switch"
                >
                  {/* Sliding Circle */}
                  <span
                    className={`absolute top-[3px] left-1 w-[16px] h-[16px] bg-white rounded-full  shadow-md transform transition-transform duration-300 ease-in-out ${isOn ? 'translate-x-6' : 'translate-x-0'
                      }`}
                  />
                </button>
              </div>
            </div>
            <div className='my-4'>
              <label htmlFor="language" className='text-sm font-semibold '>Language</label>
              <div>
                <select name="language" id="" className='w-full border p-1 outline-none'>
                  <option value="english" className='my-2 '>English</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings