import React, { useRef, useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollEnd?: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, onScrollEnd, children }: ModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const isScrollingDown = scrollTop > lastScrollTop;

      if (isScrollingDown && scrollTop + clientHeight >= scrollHeight - 5) {
        onScrollEnd?.();
      }

      setLastScrollTop(scrollTop);
    };

    const contentEl = contentRef.current;
    contentEl?.addEventListener("scroll", handleScroll);

    return () => contentEl?.removeEventListener("scroll", handleScroll);
  }, [onScrollEnd, lastScrollTop]);

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

        {/* Contenido con scroll */}
        <div ref={contentRef} className="h-full overflow-auto flex flex-col gap-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
