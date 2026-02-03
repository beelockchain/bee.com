"use client";

import React, { useState } from "react";

interface HoverAvatarProps {
  user: {
    name: string;
    email: string;
    image: string;
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
          w-9 h-9
          sm:w-10 sm:h-10
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
          z-[100] pointer-events-none
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
        </div>
      </div>

      {/* ================= MOBILE / TABLET TAP CARD ================= */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[200] flex items-center justify-center bg-black/40">
          <div
            className="bg-white rounded-2xl shadow-xl px-5 py-4 w-[90%] max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-full h-full object-cover block"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="mt-4 w-full text-sm font-medium text-gray-600 hover:text-black"
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
