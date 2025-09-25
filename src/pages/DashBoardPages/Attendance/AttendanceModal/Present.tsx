import React, { useEffect } from "react";

interface PresentProps {
  open: boolean;
  close: () => void;
}

const Present: React.FC<PresentProps> = ({ open, close }) => {
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
        <h2 className="text-xl font-bold mb-4 text-center">✅ Mark Present</h2>

        <p className="text-gray-700 mb-6 text-center">
          Are you sure you want to mark this student as <strong>Present</strong>?
        </p>

        <div className="flex justify-center gap-6">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            onClick={() => {
              // Here you can call an API or update state
              close();
            }}
          >
            Confirm
          </button>
          <button
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
            onClick={close}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Present;
