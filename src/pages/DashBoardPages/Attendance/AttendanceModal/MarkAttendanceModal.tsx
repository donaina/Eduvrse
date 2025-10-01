import React, { useEffect, useState } from "react";
import Present from "../AttendanceModal/Present.tsx";
import Absent from "../AttendanceModal/Absent.tsx";
// import Excused from "../AttendanceModal/Excused.tsx";

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

// Backdrop component with animation
const Backdrop = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <div
    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]"
    onClick={onClick}
    style={{
      animation: 'fadeIn 0.3s ease-out forwards'
    }}
  >
    {children}
  </div>
);

// Modal wrapper component
const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <>
      {isOpen && (
        <Backdrop onClick={onClose}>
          <div
            className="bg-white rounded-2xl shadow-xl p-6 w-[60%] max-w-2xl relative z-50 transform scale-95 opacity-0 animate-[modalIn_0.3s_ease-out_forwards]"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'modalIn 0.3s ease-out forwards'
            }}
          >
            {children}
            {/* <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition-colors duration-200 text-xl leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              ✖
            </button> */}
          </div>
        </Backdrop>
      )}
    </>
  );
};

const MarkAttendanceModal: React.FC<MarkAttendanceModalProps> = ({ open, close, item }) => {
  const [openPresent, setOpenPresent] = useState(false);
  const [openAbsent, setOpenAbsent] = useState(false);
  const [itemData, setItemData] = useState<AttendanceItem | null>(null);

  // const [openExcused, setOpenExcused] = useState(false);

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

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes modalIn {
          from { 
            opacity: 0; 
            transform: scale(0.95) translateY(-10px);
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0);
          }
        }
      `}</style>

      <Modal isOpen={open} onClose={close}>
        <div className="text-center mt-4 mb-8">
          {item?.map((itm, index) => (
            <div key={index} className="mb-4">
              {itm.duration && (
                <p className="my-2 font-bold text-5xl text-[#FF1818] mb-4">
                  {itm.duration}
                </p>
              )}
              <p className="font-bold text-3xl text-gray-800 mb-2">{itm.event}</p>
              <p className="text-lg text-gray-600">{itm.time}</p>
              
            </div>
          ))}
        </div>

        <div className="my-6 flex justify-center items-center gap-4 flex-wrap">
          <button
            className="bg-green-600 text-white px-6 py-3 w-60 rounded-xl hover:bg-green-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={() => {
              close();
              setOpenPresent(true);
              setItemData(item ? item[0] : null);
            }}
          >
            Mark Attendance
          </button>

          <button
            className="bg-red-600 text-white px-6 py-3 w-60 rounded-xl hover:bg-red-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={() => {
              close();
              setOpenAbsent(true);
            }}
          >
            Mark Absences
          </button>

          {/* <button
            className="bg-blue-600 text-white px-6 py-3 w-40 rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={() => {
              close();
              setOpenExcused(true);
            }}
          >
            Mark Excused
          </button> */}
        </div>
      </Modal>

      {/* Nested Modals */}
      <Present open={openPresent} close={() => setOpenPresent(false)} item = {itemData} />
      <Absent open={openAbsent} close={() => setOpenAbsent(false)} />
      {/* <Excused open={openExcused} close={() => setOpenExcused(false)} /> */}
    </>
  );
};

export default MarkAttendanceModal;