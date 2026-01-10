"use client";
import { ReactNode, useEffect, useRef } from "react";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const SideMenu = ({ isOpen, onClose, children }: SideMenuProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  // Close menu when Escape key is pressed
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm transition-opacity duration-300 w-full h-80"
          onClick={onClose}
        />
      )}

      {/* Side panel with cloud effect */}
      <div
        ref={wrapperRef}
        className={`
          fixed right-0 top-0 h-screen w-full z-40
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Cloud smoke effect background - full coverage */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 900px 600px at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 35%, transparent 85%),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.6) 90%, transparent 100%)
            `
          }}
        />

       
        <div className="relative h-full flex flex-col justify-start items-end pr-8 pt-24 text-black pointer-events-auto">
          {children}
        </div>
      </div>
    </>
  );
};

export default SideMenu;
