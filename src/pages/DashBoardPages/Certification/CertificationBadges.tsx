import React from 'react'
// @ts-ignore
import BadgesImage from '../../../Assets/images/badgesImage.png'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';


const Badges = [
    {
        id: 1,
        img: BadgesImage,
        title: 'Achievement 06 ',
        description: '200 Modules completed',
        color: 'text-[#D745E0]',

    },
    {
        id: 2,
        img: BadgesImage,
        title: 'Achievement 06 ',
        description: '200 Modules completed',
        color: 'text-[#0AB79D]',
    },
    {
        id: 3,
        img: BadgesImage,
        title: 'Achievement 06 ',
        description: '200 Modules completed',
        color: 'text-[#D745E0]',
    },
    {
        id: 4,
        img: BadgesImage,
        title: 'Achievement 06 ',
        description: '200 Modules completed',
        color: 'text-[#FBB441]',
    },
    {
        id: 5,
        img: BadgesImage,
        title: 'Achievement 06 ',
        description: '200 Modules completed',
        color: 'text-[#D745E0]',

    },
    {
        id: 6,
        img: BadgesImage,
        title: 'Achievement 06 ',
        description: '200 Modules completed',
        color: 'text-[#0AB79D]',
    },
    {
        id: 7,
        img: BadgesImage,
        title: 'Achievement 06 ',
        description: '200 Modules completed',
        color: 'text-[#D745E0]',
    },
    {
        id: 4,
        img: BadgesImage,
        title: 'Achievement 06 ',
        description: '200 Modules completed',
        color: 'text-[#FBB441]',
    }
]

const CertificationBadges = () => {
    return (
        <>
            <div className='p-4'>
                <Link to='/certification' ><p className='text-sm flex justify-start items-center '> <span><IoIosArrowBack /></span> back</p>
            </Link>
            <h1 className='font-bold md:text-lg lg:text-2xl'>Certification & Achievement</h1>
            <p className='text-xs'>Your learning Accomplishments and Certification</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-x-auto mt-4 mx-auto p-2'>
                {Badges.map(item => (
                    <div key={item.id} className=' flex min-w-[120px] lg:min-w-[160px] bg-white rounded-lg shadow-md gap-2 p-2'>
                        <div className='w-full h-16 lg:h-24'>
                            <img src={item.img} alt={item.title} className='w-full h-full object-contain rounded-lg' />
                        </div>
                        <div>
                            <h2 className={`font-semibold text-md mt-2 ${item.color}`}>{item.title}</h2>
                            <p className='text-sm text-gray-600 mt-1'>{item.description}</p>
                            {/* <p className='text-xs text-gray-400 mt-2'>{item.date}</p> */}
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}

export default CertificationBadges