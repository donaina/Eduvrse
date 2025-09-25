import React, { useEffect, useState } from "react";
import Present from "../AttendanceModal/Present.tsx";
import Absent from "./Absent.tsx";

interface AttendanceItem {
  event: string;
  date: string;
  room: string;
  duration?: string;
  time: string;
}

interface MarkAttendanceModalProps {
  open: boolean;
  close: () => void;
  item?: AttendanceItem[];
}

const MarkAttendanceModal: React.FC<MarkAttendanceModalProps> = ({ open, close, item }) => {
  const [openPresent, setOpenPresent] = useState(false);
  const [openAbsent, setOpenAbsent] = useState(false);

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
      onClick={close} // Close when clicking background
    >
      <div
        className="bg-white p-6 rounded-lg w-[50%] shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="text-center mt-4 mb-4">
          {item?.map((itm, index) => (
            <div key={index}>
              {itm.duration && <p className="my-2 font-semibold text-5xl">{itm.duration}</p>}
              <p className="font-semibold text-2xl">{itm.event}</p>
              <p>{itm.time}</p>
            </div>
          ))}
        </div>

        <div className="my-6 flex justify-center items-center gap-10">
          <button
            className="bg-green-500 text-white px-4 py-2 w-40 rounded hover:bg-green-600 transition"
            onClick={() => {
              close();
              setOpenPresent(true); 
            }}
          >
            Mark Attendance
          </button>

          <button
            className="bg-red-500 text-white px-4 py-2 w-40 rounded hover:bg-red-600 transition"
            onClick={() => {
              close();
              setOpenAbsent(true);
            }}
          >
            Mark Absences
          </button>
        </div>
      </div>

      {/* Nested Modals */}
      <Present open={openPresent} close={() => setOpenPresent(false)} />
      <Absent open={openAbsent} close={() => setOpenAbsent(false)} />
    </div>
  );
};

export default MarkAttendanceModal;
