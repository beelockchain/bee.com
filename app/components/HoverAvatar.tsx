"use client";

import React, { useState } from "react";

interface HoverAvatarProps {
  user: {
    name: string;
    email: string;
    image: string;
    role: string;
  };
}

const HoverAvatar = ({ user }: HoverAvatarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative inline-flex pointer-events-auto group"
      onClick={() => setOpen(!open)}
    >
      {/* ================= AVATAR ================= */}
      <div
        className="
          w-7 h-7
          sm:w-8 sm:h-8
          md:w-12 md:h-12
          rounded-full
          overflow-hidden
          flex-shrink-0
          self-center
          opacity-70
          md:group-hover:opacity-100
          transition
          cursor-pointer
        "
      >
        <img
          src={user.image}
          alt={user.name}
          className="w-full h-full object-cover block"
        />
      </div>

      {/* ================= DESKTOP HOVER CARD ================= */}
      <div
        className="
          hidden md:block absolute left-1/2 -translate-x-1/2
          invisible opacity-0 scale-95
          group-hover:visible group-hover:opacity-100 group-hover:scale-100
          transition-all duration-200 ease-out
          z-50 pointer-events-none
        "
        style={{ top: "100%", marginTop: "12px" }}
      >
        {/* Arrow */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200" />

        {/* Card */}
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 px-4 py-3 min-w-[220px]">
          <p className="text-sm font-semibold text-gray-900 whitespace-nowrap">
            {user.name}
          </p>
          <p className="text-xs text-gray-500 whitespace-nowrap">
            {user.email}
          </p>
          <p className="text-xs text-gray-500 whitespace-nowrap">
            {user.role}
          </p>
        </div>
      </div>

      {/* ================= MOBILE / TABLET TAP CARD ================= */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-[200] flex items-center justify-center bg-black/40"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-xl px-3 py-3 w-[75%] max-w-[240px] sm:max-w-[280px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Smaller avatar on mobile */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-full h-full object-cover block"
                />
              </div>

              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-gray-900 truncate">
                  {user.name}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500 truncate">
                  {user.email}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500 truncate">
                  {user.role}
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="mt-3 w-full text-xs sm:text-sm font-medium text-gray-600 hover:text-black py-1"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverAvatar;