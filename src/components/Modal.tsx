import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="w-[90vw] h-[90vh] bg-white rounded-lg shadow-lg relative p-6">
        {/* Botón de cierre */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Contenido */}
        <div className="h-full overflow-auto flex flex-col gap-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
