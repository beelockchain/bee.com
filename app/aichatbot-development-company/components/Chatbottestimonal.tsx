"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

/* ================= DATA ================= */
const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;

const users = [
  { name: "James Anderson",   email: "debra.holt@gmail.com",  role: "Mobile App",            image: `${ASSET_URL}/images/testimoniAL1.webp`  },
  { name: "Sophia Martinez",  email: "wade@gmail.com",         role: "Pay-Per-Click",         image: `${ASSET_URL}/images/testimonial2.webp`  },
  { name: "Savannah Nguyen",  email: "savannah@gmail.com",     role: "ERP solution",          image: `${ASSET_URL}/images/testimonial3.webp`  },
  { name: "Brooklyn Simmons", email: "brooklyn@gmail.com",     role: "Digital marketing",     image: `${ASSET_URL}/images/testimonial4.webp`  },
  { name: "Leslie Alexander", email: "leslie@gmail.com",       role: "Web App",               image: `${ASSET_URL}/images/testimonial5.webp`  },
  { name: "Courtney Henry",   email: "debra.holt@gmail.com",   role: "DevOps Services",       image: `${ASSET_URL}/images/testimonial6.webp`  },
  { name: "Wade Warren",      email: "wade@gmail.com",         role: "Android App",           image: `${ASSET_URL}/images/testimonial7.webp`  },
  { name: "Savannah Nguyen",  email: "savannah@gmail.com",     role: "UI/UX Design",          image: `${ASSET_URL}/images/testimonial8.webp`  },
  { name: "Brooklyn Simmons", email: "brooklyn@gmail.com",     role: "Digital Transformation",image: `${ASSET_URL}/images/testimonial9.webp`  },
  { name: "Leslie Alexander", email: "leslie@gmail.com",       role: "AI chatbot",            image: `${ASSET_URL}/images/testimonial10.webp` },
  { name: "Riley Thompson",   email: "riley@gmail.com",        role: "Cloud Services",        image: `${ASSET_URL}/images/testimonial11.webp` },
  { name: "Morgan Davis",     email: "morgan@gmail.com",       role: "SEO",                   image: `${ASSET_URL}/images/testimonial12.webp` },
  { name: "Taylor Brooks",    email: "taylor@gmail.com",       role: "Data Analytics",        image: `${ASSET_URL}/images/testimonial13.webp` },
  { name: "Jordan Reed",      email: "jordan@gmail.com",       role: "Cybersecurity",         image: `${ASSET_URL}/images/testimonial14.webp` },
];

/* ================= ANIMATION KEYFRAMES ================= */
const ANIM_CSS = `
  @keyframes marquee-left  { from { transform: translateX(0);    } to { transform: translateX(-50%); } }
  @keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0);    } }
  .anim-left  { animation: marquee-left  28s linear infinite; }
  .anim-right { animation: marquee-right 28s linear infinite; }
  .mq-row:hover .anim-left,
  .mq-row:hover .anim-right { animation-play-state: paused; }
`;

/* ================= TYPES ================= */
type User = typeof users[number];
type TipState = {
  user: User;
  left: number;
  top: number;
  dir: "top" | "bottom";
} | null;

const TOOLTIP_W = 210;
const TOOLTIP_H = 80;
const GAP = 12;

/* ================= PORTAL TOOLTIP ================= */
function TooltipPortal({ tip }: { tip: TipState }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted || !tip) return null;

  return createPortal(
    <div
      className="fixed z-[9999] pointer-events-none"
      style={{ left: tip.left, top: tip.top, width: TOOLTIP_W }}
    >
      <div
        className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border border-gray-200
          ${tip.dir === "top" ? "-bottom-1.5 border-r border-b border-t-0 border-l-0" : "-top-1.5 border-l border-t border-b-0 border-r-0"}`}
      />
      <div className="bg-white rounded-xl shadow-xl border border-gray-200 px-4 py-3">
        <p className="text-sm font-semibold text-black">{tip.user.name}</p>
        <p className="text-xs text-gray-500 mt-0.5">{tip.user.email}</p>
        <p className="text-xs text-gray-500">{tip.user.role}</p>
      </div>
    </div>,
    document.body
  );
}

/* ================= AVATAR ================= */
function Avatar({ user, tooltipDir, onShow, onHide }: {
  user: User;
  tooltipDir: "top" | "bottom";
  onShow: (u: User, rect: DOMRect, dir: "top" | "bottom") => void;
  onHide: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const show = () => ref.current && onShow(user, ref.current.getBoundingClientRect(), tooltipDir);

  return (
    <div
      ref={ref}
      className="flex-shrink-0 px-1 cursor-pointer group"
      onMouseEnter={show}
      onMouseLeave={onHide}
      onTouchStart={(e) => { e.stopPropagation(); show(); }}
    >
      <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden opacity-90 group-hover:opacity-100 transition-all duration-200 group-hover:scale-110 group-hover:-translate-y-0.5">
        <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

/* ================= MARQUEE ROW ================= */
function MarqueeRow({ direction, onShow, onHide }: {
  direction: "left" | "right";
  onShow: (u: User, rect: DOMRect, dir: "top" | "bottom") => void;
  onHide: () => void;
}) {
  const tooltipDir = direction === "left" ? "top" : "bottom";
  const list = direction === "left" ? users : [...users].reverse();
  const doubled = [...list, ...list];

  return (
    <div className="mq-row relative w-full pt-2" style={{ overflowX: "clip", overflowY: "visible" }}>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-20 bg-gradient-to-l from-white to-transparent" />

      <div className={`flex items-center w-max anim-${direction}`}>
        {doubled.map((user, i) => (
          <Avatar
            key={i}
            user={user}
            tooltipDir={tooltipDir}
            onShow={onShow}
            onHide={onHide}
          />
        ))}
      </div>
    </div>
  );
}

/* ================= MAIN ================= */
export default function Chatbottestimonal() {
  const [tip, setTip] = useState<TipState>(null);

  // Dismiss tooltip on any touch outside an avatar
  useEffect(() => {
    const dismiss = () => setTip(null);
    document.addEventListener("touchstart", dismiss, { passive: true });
    return () => document.removeEventListener("touchstart", dismiss);
  }, []);

  const handleShow = useCallback((u: User, rect: DOMRect, dir: "top" | "bottom") => {
    const cx   = rect.left + rect.width / 2;
    const left = Math.max(8, Math.min(window.innerWidth - TOOLTIP_W - 8, cx - TOOLTIP_W / 2));
    const top  = dir === "top" ? rect.top - TOOLTIP_H - GAP : rect.bottom + GAP;
    setTip({ user: u, left, top, dir });
  }, []);

  const handleHide = useCallback(() => setTip(null), []);

  return (
    <>
      <style>{ANIM_CSS}</style>
      <TooltipPortal tip={tip} />

      <div className="w-full bg-white mt-10">
        <div className="flex flex-col items-center w-full">

          <img
            src="https://beecomassets.s3.ap-southeast-2.amazonaws.com/assets/images/TESTIMONIALS.webp"
            className="w-[80%] md:w-[80%]"
            alt="Testimonials"
          />

           <h2 className="text-[18px] md:text-2xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
          Know{" "}
          <span data-text="Recognition Milestones" className="shine-text relative text-[#f5c518]">What Our Customers Say</span>{" "}
          About
          <br />
         Beelockchain’s DevOps Consulting Services
        </h2>
          <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[14px] xl:text-[16px] text-black text-center px-4 font-normal font-['Poppins']">
            Trusted by Leading Enterprises and Innovators
          </p>

          <div className="mt-6 pb-6" style={{ width: "500px", maxWidth: "100%" }}>
            <MarqueeRow direction="left"  onShow={handleShow} onHide={handleHide} />
            <MarqueeRow direction="right" onShow={handleShow} onHide={handleHide} />
          </div>

        </div>
      </div>
    </>
  );
}