"use client";
import { ReactNode, useEffect, useRef, useState } from "react";

interface NavItemProps {
  label: string;
  children: ReactNode;
  isFirst?: boolean;
  isHovered?: boolean;
  anyHovered?: boolean;
  onHover?: (hovered: boolean) => void;
}

const NavItem = ({
  label,
  children,
  isFirst = false,
  isHovered = false,
  anyHovered = false,
  onHover,
}: NavItemProps) => {
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

  // Determine text color
  const getTextColor = () => {
    if (isHovered) return "text-black";
    if (anyHovered) return "text-gray-400";
    if (isFirst) return "text-black";
    return "text-gray-400";
  };

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        className={`cursor-pointer font-medium focus:outline-none transition-colors duration-200 ${getTextColor()}`}
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => onHover?.(true)}
        onMouseLeave={() => onHover?.(false)}
      >
        {label}
      </button>

      {open && (
        <div className="fixed left-0 top-16 w-full h-screen z-40 pointer-events-none">
          <div
            className="absolute inset-0 pointer-events-auto"
            style={{
              backgroundImage: `
                radial-gradient(ellipse 900px 350px at 50% 0%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 35%, transparent 85%),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.6) 90%, transparent 100%)
              `,
            }}
          />
          <div className="relative h-full flex justify-center items-start pt-12 pl-20 text-black pointer-events-auto">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavItem;