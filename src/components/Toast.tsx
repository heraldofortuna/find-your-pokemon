import { useState, useEffect } from "react";

interface ToastProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Toast = ({ isOpen, onClose, children }: ToastProps) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    setVisible(isOpen);
  }, [isOpen]);

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 max-w-[90%] px-6 py-3 bg-dark text-white rounded-lg shadow-lg flex items-center gap-4 transition-all duration-300 z-100 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <div>{children}</div>
      <button className="text-white text-2xl font-bold mb-auto cursor-pointer" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Toast;
