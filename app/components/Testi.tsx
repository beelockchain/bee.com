"use client";

import React, { useState } from "react";

/* ================= DATA ================= */
const users = [
  { name: "James Anderson", email: "debra.holt@example.com", role: "Mobile App", image: "/assets/images/testimonial2.webp" },
  { name: "Sophia Martinez", email: "wade@example.com", role: "Pay-Per-Click", image: "/assets/images/testimonial3.webp" },
  { name: "Savannah Nguyen", email: "savannah@example.com", role: "ERP solution", image: "/assets/images/testimonial4.webp" },
  { name: "Brooklyn Simmons", email: "brooklyn@example.com", role: "Digital marketing", image: "/assets/images/testimonial5.webp" },
  { name: "Leslie Alexander", email: "leslie@example.com", role: "Web App", image: "/assets/images/testimonial6.webp" },
  { name: "Courtney Henry", email: "debra.holt@example.com", role: "DevOps Services", image: "/assets/images/testimonial7.webp" },
  { name: "Wade Warren", email: "wade@example.com", role: "Android App", image: "/assets/images/testimonial8.webp" },
  { name: "Savannah Nguyen", email: "savannah@example.com", role: "UI/UX Design", image: "/assets/images/testimonial9.webp" },
  { name: "Brooklyn Simmons", email: "brooklyn@example.com", role: "Digital Transformation", image: "/assets/images/testimonial10.webp" },
  { name: "Leslie Alexander", email: "leslie@example.com", role: "AI chatbot", image: "/assets/images/testimonial11.webp" },
];

/* ================= AVATAR ================= */
const HoverAvatar = ({
  user,
  hoverPosition = "bottom",
}: {
  user: typeof users[number];
  hoverPosition?: "top" | "bottom";
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative inline-flex pointer-events-auto group"
      onClick={() => setOpen(true)}
    >
      {/* Avatar */}
      <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden opacity-90 md:group-hover:opacity-100 transition cursor-pointer">
        <img
          src={user.image}
          alt={user.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Desktop Hover Card */}
      <div
        className={`
          hidden md:block absolute left-1/2 -translate-x-1/2
          invisible opacity-0 scale-95
          group-hover:visible group-hover:opacity-100 group-hover:scale-100
          transition-all duration-200 z-50 pointer-events-none 
          ${hoverPosition === "top" ? "bottom-full mb-4" : "top-full mt-2"}
        `}
      >
        {/* Arrow */}
        <div
          className={`
            absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border
            ${hoverPosition === "top"
              ? "-bottom-1.5 border-r border-b"
              : "-top-1.5 border-l border-t"}
          `}
        />

        {/* Card */}
        <div className="bg-white rounded-xl shadow-xl border border-gray-200 px-4 py-3 min-w-[200px]">
          <p className="text-sm font-semibold">{user.name}</p>
          <p className="text-xs text-gray-500">{user.email}</p>
          <p className="text-xs text-gray-500">{user.role}</p>
        </div>
      </div>

      {/* Mobile / Tablet Modal */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-[200] flex items-center justify-center bg-black/40"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl px-5 py-4 w-[90%] max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
                <p className="text-xs text-gray-500">{user.role}</p>
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

/* ================= MARQUEE ROW ================= */
const MarqueeRow = ({ direction }: { direction: "left" | "right" }) => {
  const list = direction === "left" ? users : [...users].reverse();

  return (
    <div className="relative w-full">


      {/* Track */}
      <div
        className={`flex items-center w-max pt-2 ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        {[...list, ...list].map((user, index) => (
          <div key={index} className="flex-shrink-0 px-1">
            <HoverAvatar
              user={user}
              hoverPosition={direction === "left" ? "top" : "bottom"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ================= MAIN COMPONENT ================= */
const Testi = () => {
  return (
    <>
      {/* Desktop & Tablet */}
      <div className="hidden md:flex justify-center w-full bg-white mt-10">
        <div className="flex flex-col items-center w-full">
          <img
            src="/assets/images/TESTIMONIALS.webp"
            className="w-[80%]"
          />

          <section className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mt-4 text-black">What We've Done</h2>
            <p className="text-sm text-black">
              Trusted by Leading Enterprises and Innovators
            </p>

            <div className="w-[600px] h-60 flex flex-col gap-3 mt-6 overflow-hidden">
              <MarqueeRow direction="left" />
              <MarqueeRow direction="right" />
            </div>
          </section>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full bg-white mt-6 px-4">
        <img
          src="/assets/images/TESTIMONIALS.webp"
          className="w-full"
        />

        <h2 className="text-xl font-bold mt-4 text-center text-black">
          What We've Done
        </h2>
        <p className="text-xs text-center text-black">
          Trusted by Leading Enterprises and Innovators
        </p>

        <div className="flex flex-col gap-3 mt-4 overflow-hidden">
          <MarqueeRow direction="left" />
          <MarqueeRow direction="right" />
        </div>
      </div>
    </>
  );
};

export default Testi;
