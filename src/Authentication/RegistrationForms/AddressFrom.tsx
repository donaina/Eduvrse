import React from 'react'

const AddressFrom = () => {
    return (
        <>
            <div className="my-2 lg:my-3">
                <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                    {/* Country Input */}
                <div className="w-full lg:w-[48%]">
                        <label htmlFor="state" className="block">Country</label>
                        <select
                            name="state"
                            id="state"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Select Country</option>
                            <option value="Nigeria">Nigeria</option>
                        </select>
                    </div>        

                    {/* State Dropdown */}
                    <div className="w-full lg:w-[48%]">
                        <label htmlFor="state" className="block">State:</label>
                        <select
                            name="state"
                            id="state"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Select state</option>
                            <option value="Nigeria">Lagos</option>
                        </select>
                    </div>
                </div>

            </div>
            <div className="my-2 lg:my-3">
                <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                    {/* Country Input */}
                    <div className="w-full lg:w-[48%]">
                        <label htmlFor="country" className="block">School Name:</label>
                        <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* school type */}
                    <div className="w-full lg:w-[48%]">
                        <label htmlFor="schoolType" className="block">School type:</label>
                        <select
                            name="schoolType"
                            id="schoolType"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Select School Type</option>
                            <option value="Nigeria">Primary</option>
                            <option value="Nigeria">Secondary</option>
                            <option value="Nigeria">University</option>
                        </select>
                    </div>
                </div>

            </div><div className="my-2 lg:my-3">
                <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                    {/* Level Input */}
                    <div className="w-full lg:w-[48%]">
                        <label htmlFor="level" className="block">Grade/Level:</label>
                        <select
                            name="level"
                            id="level"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Select Grade/Level</option>
                            <option value="Nigeria">100 Level</option>
                            <option value="Nigeria">200 Level</option>
                            <option value="Nigeria">300 Level</option>
                        </select>
                    </div>

                    {/* Gender Dropdown */}
                    <div className="w-full lg:w-[48%]">
                        <label htmlFor="gender" className="block">Gender:</label>
                        <select
                            name="gender"
                            id="gender"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Gender</option>
                            <option value="Nigeria">Male</option>
                            <option value="Nigeria">Female</option>
                        </select>
                    </div>
                </div>

            </div>
            
        </>
    )
}

export default AddressFrom