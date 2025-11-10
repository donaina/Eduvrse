import React, { useEffect } from "react";
import { Link } from "react-router-dom";

interface AbsentProps {
  open: boolean;
  close: () => void;
}

const Absent: React.FC<AbsentProps> = ({ open, close }) => {
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
      onClick={close}
    >
      <div
        className="bg-white p-6 rounded-lg w-[60%] shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4 text-center text-[#FF1818]">Absences Marked </h2>

        <div className=" mb-6 text-center">
          {/* Are you sure you want to mark this student as <strong>Absent</strong>?
           */}
           <h1 className="text-2xl font-semibold">Advance Mathematics</h1>
           <p className="text-[#000000]/">8:00 am - 10 :  00am</p>
           <div className="flex justify-center gap-2 mt-4">
            <input type="text" className="outline-[#DDDDDD] outline border-[#DDDDDD] border-solid px-5 py-1" placeholder="Reason for absences"/>
            <button className="w-20 bg-black text-white p-1">send</button>
           </div>
        </div>

        <div className="flex justify-center gap-6">
          <button
            className="bg-black text-white px-4 py-2 rounded transition w-60"
            onClick={() => {
              // Handle absent marking
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

export default Absent;
