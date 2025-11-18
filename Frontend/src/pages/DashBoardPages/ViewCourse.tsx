import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { CiPlay1 } from 'react-icons/ci';
import { IoIosArrowBack } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
// import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoMdCheckmarkCircle } from "react-icons/io";
// import { VscFiles } from "react-icons/vsc";
import { MdFileCopy } from "react-icons/md";
import { Play, Pause, SkipBack, SkipForward, Volume2, Maximize, Settings, BookOpen } from 'lucide-react';





const ViewCourse = () => {
    // const navigate = useNavigate()
    // const videoRef = useRef(null);
    // const [isPlaying, setIsPlaying] = useState(false);
    // const [activeTab, setActiveTab] = useState("notes");


    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const chapterData = [
        {
            id: 1,
            tittle: 'Chapter 1',
            description: 'Understanding Data Handling and data sets',
            assessmentNum: '2',
            completed: true
        },
        {
            id: 2,
            tittle: 'Chapter 2',
            description: 'Understanding Data Handling and data sets',
            assessmentNum: '2',
            completed: true
        },
        {
            id: 3,
            tittle: 'Chapter 3',
            description: 'Understanding Data Handling and data sets',
            assessmentNum: '2',
            completed: false
        },
        {
            id: 4,
            tittle: 'Chapter 4',
            description: 'Understanding Data Handling and data sets',
            assessmentNum: '2',
            completed: false
        },
    ]


    const tabs = [
        { id: "notes", label: "Notes" },
        { id: "resources", label: "Resouces" },
        { id: "quiz", label: "Quiz" },

    ];

    const goToChapters = () => {
        navigate("/chapters");
    };
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(31);
    const [duration, setDuration] = useState(151);
    const [showControls, setShowControls] = useState(true);
    const [volume, setVolume] = useState(0.7);
    const videoRef = useRef(null);
    const navigate = useNavigate();
    function formatTime(duration: number) {
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // Toggle play/pause for the video
    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    // Skip backward 10 seconds
    const skipBackward = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
            setCurrentTime(Math.floor(videoRef.current.currentTime));
        }
    };

    function setActiveTab(id: string) {
        // Sets the active tab by updating state
        // This function is called when a tab button is clicked
        setActiveTabState(id);
    }

    // Add a state for activeTab
    const [activeTab, setActiveTabState] = useState("notes");

    // Calculate progress percentage for the progress bar
    const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (
        <>
            <div className='flex w-full '>
                <div className='w-full'>
                    <div className='flex items-center cursor-pointer text-sm' onClick={() => navigate('/my-course')}>
                        <p><IoIosArrowBack size={20} /></p>
                        <p>back</p>
                    </div>
                    <p className='text-[#808080] text-sm '>Back to list of courses</p>
                    <div className='w-full flex justify-between '>
                        <div className='w-full lg:w-[70%]  '>
                            <div className='w-full flex justify-between items-center '>
                                <div className=' my-2'>
                                    <h1 className='font-bold text-2xl'>Computer Science Fundamentals</h1>
                                    <p className='text-xs text-[#808080]'>Understanding the in and out of computer science.... <span className='text-blue-600 font-semibold hover:underline cursor-pointer'>More</span> </p>
                                </div>
                                <button className='p-2  shadow hover:scale-110 border mb-4'><IoMdHeartEmpty size={20} /></button>
                            </div>
                            <div className='w-full h-auto mb-5 relative rounded-2xl '>
                                <div
                                    className="relative aspect-video bg-black"
                                    onMouseEnter={() => setShowControls(true)}
                                    onMouseLeave={() => setShowControls(false)}
                                >
                                    <video
                                        ref={videoRef}
                                        src="https://v.ftcdn.net/16/80/97/38/700_F_1680973890_ZGQv9IaBBSP8IHcZv9d3wN9bfvRq91RI_ST.mp4"
                                        className="w-full h-full object-cover"
                                        onClick={togglePlay}
                                    />

                                    {/* Central Play/Pause Button */}
                                    {!isPlaying && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <button
                                                onClick={togglePlay}
                                                className="w-20 h-20 bg-black bg-opacity-60 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-transform transform hover:scale-105"
                                            >
                                                <Play className="w-8 h-8 text-white" />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Custom Controls */}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    {/* Progress Bar */}
                                    <div className="px-4 pb-2">
                                        <div
                                            className="w-full h-1 bg-gray-600 rounded-full cursor-pointer"
                                            onClick={(e) => {
                                                const rect = (e.target as HTMLDivElement).getBoundingClientRect();
                                                const clickX = e.clientX - rect.left;
                                                if (videoRef.current && duration) {
                                                    const newTime = (clickX / rect.width) * duration;
                                                    videoRef.current.currentTime = newTime;
                                                    setCurrentTime(Math.floor(newTime));
                                                }
                                            }}
                                        >
                                            <div
                                                className="h-full bg-white rounded-full"
                                                style={{ width: `${progressPercentage}%` }}
                                            />
                                        </div>
                                    </div>

                                    {/* Bottom Control Bar */}
                                    <div className="flex items-center justify-between px-4 pb-4">
                                        <div className="flex items-center space-x-4">
                                            {/* Time */}
                                            <div className="text-white text-sm font-mono">
                                                {formatTime(currentTime)}
                                            </div>

                                            {/* Playback Buttons */}
                                            <div className="flex items-center space-x-2">
                                                <button
                                                    onClick={skipBackward}
                                                    className="text-white hover:text-gray-300 transition-colors"
                                                >
                                                    <SkipBack className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={togglePlay}
                                                    className="text-white hover:text-gray-300 transition-colors"
                                                >
                                                    {isPlaying ? (
                                                        <Pause className="w-6 h-6" />
                                                    ) : (
                                                        <Play className="w-6 h-6" />
                                                    )}
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        if (videoRef.current) {
                                                            videoRef.current.currentTime += 10; // skip forward 10 seconds
                                                            setCurrentTime(Math.floor(videoRef.current.currentTime));
                                                        }
                                                    }}
                                                    className="text-white hover:text-gray-300 transition-colors"
                                                >
                                                    <SkipForward className="w-5 h-5" />
                                                </button>
                                            </div>

                                            {/* Volume Slider */}
                                            <div className="flex items-center space-x-2">
                                                <Volume2 className="w-4 h-4 text-white" />
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="1"
                                                    step="0.05"
                                                    value={volume}
                                                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                                                    className="w-16 h-1 bg-gray-600 rounded-full appearance-none cursor-pointer slider"
                                                />
                                            </div>
                                        </div>

                                        {/* Right Side: Duration, Title & Controls */}
                                        <div className="flex items-center space-x-4">
                                            <div className="text-white text-sm font-mono">
                                                {formatTime(duration)}
                                            </div>
                                            <div className="text-white text-sm">Introduction</div>
                                            <div className="flex items-center space-x-2">
                                                <button
                                                    onClick={() => navigate("/chapters")}
                                                    className="text-white hover:text-blue-400 transition-colors flex items-center space-x-1"
                                                >
                                                    <BookOpen className="w-5 h-5" />
                                                    <span className="text-sm">Chapters</span>
                                                </button>
                                                <button className="text-white hover:text-gray-300 transition-colors">
                                                    <Settings className="w-5 h-5" />
                                                </button>
                                                <button className="text-white hover:text-gray-300 transition-colors">
                                                    <Maximize className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
        }
      `}</style>
                            </div>
                            <div className=' w-full'>
                                <h1 className='font-semibold'>Description:</h1>
                                <p className='text-wrap'>Introduction to Programming, Algorithms, Data Structures  learn many more things as  you dive into this course and achieve,Introduction to Programming, Algorithms, Data Structures  learn many more things as  you dive into this course and achieve ,Introduction to Programming, Algorithms, Data Structures  learn many more things as  you dive into this course and achieve  - More </p>
                            </div>

                            <div className="w-full">

                                <div className="flex border-b border-gray-200">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`px-4 py-2 text-sm font-medium transition-all ${activeTab === tab.id
                                                ? "border-b-2  text-black"
                                                : "text-gray-600 hover:text-blue-500"
                                                }`}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>


                                <div className=" bg-white rounded-b shadow">
                                    {activeTab === "notes" &&
                                        <div className='flex justify-center items-center p-1 gap-2 bg-[#FBFFCE] my-2'>
                                            <div className='p-2 bg-white '><MdFileCopy size={50} color='purple' />
                                            </div><div>
                                                <h1 className='font-semibold text-lg'>Note 1: Data Structures</h1>
                                                <p className='text-xs line-clamp-2'>Introduction to Programming, Algorithms, Data Structures  learn many more things as  you dive into this course and achieve,Introduction to Programming - More </p>
                                            </div>
                                        </div>
                                    }
                                    {activeTab === "resources" &&
                                        <div className='flex justify-center items-center p-1 gap-2 bg-[#0CF37F] my-2'>
                                            <div className='p-2 bg-white '><MdFileCopy size={50} color='purple' />
                                            </div><div>
                                                <h1 className='font-semibold text-lg'>Note 1: Data Structures</h1>
                                                <p className='text-xs line-clamp-2'>Introduction to Programming, Algorithms, Data Structures  learn many more things as  you dive into this course and achieve,Introduction to Programming - More </p>
                                            </div>
                                        </div>
                                    }
                                    {activeTab === "quiz" &&
                                        <div className='flex justify-center items-center p-1 gap-2 bg-[#BEA1FF] my-2'>
                                            <div className='p-2 bg-white '><MdFileCopy size={50} color='black' />
                                            </div><div>
                                                <h1 className='font-semibold text-lg'>Note 1: Data Structures</h1>
                                                <p className='text-xs line-clamp-2'>Introduction to Programming, Algorithms, Data Structures  learn many more things as  you dive into this course and achieve,Introduction to Programming - More </p>
                                            </div>
                                        </div>
                                    }

                                </div>
                            </div>

                        </div>
                        <div className='w-[28%] hidden lg:block'>
                            <div className='w-full flex font-bold justify-between items-center text-xl my-4'>
                                <h1>Chapters</h1>
                                <h3>1/2</h3>
                            </div>
                            <div className='w-full h-3/4 border rounded shadow p-3 mb-5'>
                                {
                                    chapterData.map((items, index) => (
                                        <div key={index} className='w-full h-20 p-2 my-2 bg-[#F7F6F6] drop-shadow-md '>
                                            <div className='w-full flex justify-between  '>
                                                <h1 className='text-sm font-semibold'>{items.tittle}</h1>
                                                <p className=''>
                                                    {items.completed === true ? <IoMdCheckmarkCircle color='green' size={18} /> : <IoMdCheckmarkCircle color='gray' size={18} />}
                                                </p>
                                            </div>
                                            <p className='text-[0.65rem] text-[#808080] py-2 w-full line-clamp-1'>{items.description}</p>
                                            <p className='text-[0.65rem] hover:underline text-[#808080]'>{items.assessmentNum} assessment</p>
                                        </div>
                                    ))
                                }
                            </div>

                            {/* discussion */}

                            <div className='w-full flex font-bold justify-between items-center  text-xl my-6'>
                                <h1>Discussion</h1>
                                <h3>(30)</h3>
                            </div>
                            <div className='w-full h-2/3 border rounded shadow p-3'>
                                hello
                            </div>



                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ViewCourse