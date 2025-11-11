import React from 'react'
import { useNavigate } from 'react-router-dom'
// @ts-ignore
import SubmitIcon from '../../../Assets/images/submitIcon.png'

const AssessmentModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
    const navigate = useNavigate()
    if (!open) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-[40&] shadow-lg">

                <div className="flex flex-col items-center justify-center w-full h-full">
                    <img
                        src={SubmitIcon}
                        alt="Submit Icon"
                        className="w-[34px] h-[34px]"
                    />
                </div>
                <div className="text-center mt-4 mb-4">
                    <h1 className='text-2xl font-bold '>Assessment Submitted</h1>
                </div>

                <div className="my-6 flex justify-between items-center">

                    <button
                        className="bg-black text-white px-4 py-2 w-40 rounded hover:bg-blue-700 transition"
                        onClick={onClose}
                    >
                        Close 
                    </button>
                    <button
                        className="bg-black text-white px-4 py-2 w-40 rounded hover:bg-blue-700 transition"
                        onClick={() => navigate('/feed')}
                    >
                        Feed
                    </button>
                </div>
                <div>
                    <p>If you have Questions Reach out to : <span className='text-[#0089ED]'>Prof Fred Jimmiesayo </span> </p>
                </div>

            </div>
        </div>

    );
}

export default AssessmentModal