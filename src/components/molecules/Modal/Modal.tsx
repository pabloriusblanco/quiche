import React from "react";

interface ModalProps {
  children?: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="fade-in-bottom relative mx-5 rounded-2xl bg-white md:mx-0 md:w-[440px]">
        <button
          className="absolute right-0 top-0 m-4 fill-gray-500 hover:fill-gray-700"
          onClick={onClose}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="inherit"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.5286 1.97366L13.1186 0.56366L7.52856 6.15366L1.93856 0.56366L0.528564 1.97366L6.11856 7.56366L0.528564 13.1537L1.93856 14.5637L7.52856 8.97366L13.1186 14.5637L14.5286 13.1537L8.93856 7.56366L14.5286 1.97366Z" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
