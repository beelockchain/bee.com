"use client";
import { ReactNode, useEffect, useRef, useState } from "react";

interface NavItemProps {
  label: string;
  children: ReactNode;
}

const NavItem = ({ label, children }: NavItemProps) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative">
      {/* top nav item */}
      <button
        type="button"
        className="cursor-pointer text-black font-medium focus:outline-none hover:text-gray-700"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
      </button>

      {/* dropdown cloud */}
      {open && (
        <div className="fixed left-0 top-16 w-full h-96 z-40 pointer-events-none">
          {/* cloud bg - smooth fade out at bottom */}
          <div
            className="
              absolute inset-0
              pointer-events-auto
            "
            style={{
              backgroundImage: `
                radial-gradient(ellipse 900px 350px at 50% 0%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 35%, transparent 85%),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.6) 90%, transparent 100%)
              `
            }}
          />

          {/* dropdown content (clickable) */}
          <div className="relative h-full flex justify-center items-start pt-12 pl-20 text-black pointer-events-auto">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavItem;
