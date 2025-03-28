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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
      <div className="w-[90%] max-w-2xl h-[90vh] bg-white rounded-lg shadow-lg relative flex flex-col gap-6 p-6">
        {/* Botón de cierre */}
        <div className="flex items-center justify-end">
          <button
            className="text-dark text-4xl cursor-pointer"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Contenido con scroll */}
        <div ref={contentRef} className="h-full overflow-auto flex flex-col gap-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
