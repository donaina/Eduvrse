import React, { useEffect } from "react";
import { Link } from "react-router-dom";

interface PresentProps {
  open: boolean;
  close: () => void;
  item?: {
    event: string;
    date: string;
    room: string;
    duration?: string;
    time: string;
  } | null;
}

const Present: React.FC<PresentProps> = ({ open, close, item }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={close} // close when clicking background
    >
      <div
        className="bg-white p-6 rounded-lg w-[60%] shadow-lg"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <h2 className="text-xl font-bold mb-4 text-center text-[#0CF37F]">Attendance Marked</h2>

        <p className="text-gray-700 mb-6 text-center">
           <strong>Advance Mathematics</strong>?
            <br />
            <p>8:00 am - 10 :  00am</p>
           {item?.event}

        </p>

        <div className="flex justify-center gap-6">
          <button
            className="bg-black w-60 text-white px-4 py-2 rounded  transition"
            onClick={() => {
              // Here you can call an API or update state
              close();
            }}
          >
            Back
          </button>
          <Link to="/feed" className="bg-black w-60 text-white px-4 py-2 rounded  transition text-center">
            My Feed
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Present;
