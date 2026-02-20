"use client";

import React, { useMemo, useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

/* ================= DATA ================= */
const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;

const users = [
  { name: "James Anderson",   email: "debra.holt@example.com",  role: "Mobile App",            image: `${ASSET_URL}/images/testimoniAL1.webp`  },
  { name: "Sophia Martinez",  email: "wade@example.com",         role: "Pay-Per-Click",         image: `${ASSET_URL}/images/testimonial2.webp`  },
  { name: "Savannah Nguyen",  email: "savannah@example.com",     role: "ERP solution",          image: `${ASSET_URL}/images/testimonial3.webp`  },
  { name: "Brooklyn Simmons", email: "brooklyn@example.com",     role: "Digital marketing",     image: `${ASSET_URL}/images/testimonial4.webp`  },
  { name: "Leslie Alexander", email: "leslie@example.com",       role: "Web App",               image: `${ASSET_URL}/images/testimonial5.webp`  },
  { name: "Courtney Henry",   email: "debra.holt@example.com",   role: "DevOps Services",       image: `${ASSET_URL}/images/testimonial6.webp`  },
  { name: "Wade Warren",      email: "wade@example.com",         role: "Android App",           image: `${ASSET_URL}/images/testimonial7.webp`  },
  { name: "Savannah Nguyen",  email: "savannah@example.com",     role: "UI/UX Design",          image: `${ASSET_URL}/images/testimonial8.webp`  },
  { name: "Brooklyn Simmons", email: "brooklyn@example.com",     role: "Digital Transformation",image: `${ASSET_URL}/images/testimonial9.webp`  },
  { name: "Leslie Alexander", email: "leslie@example.com",       role: "AI chatbot",            image: `${ASSET_URL}/images/testimonial10.webp` },
  { name: "Riley Thompson",   email: "riley@example.com",        role: "Cloud Services",        image: `${ASSET_URL}/images/testimonial11.webp` },
  { name: "Morgan Davis",     email: "morgan@example.com",       role: "SEO",                   image: `${ASSET_URL}/images/testimonial12.webp` },
  { name: "Taylor Brooks",    email: "taylor@example.com",       role: "Data Analytics",        image: `${ASSET_URL}/images/testimonial13.webp` },
  { name: "Jordan Reed",      email: "jordan@example.com",       role: "Cybersecurity",         image: `${ASSET_URL}/images/testimonial14.webp` },
];

/* ================= ANIMATION KEYFRAMES ONLY ================= */
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

/* ================= PORTAL TOOLTIP — your white card style ================= */
function TooltipPortal({ tip }: { tip: TipState }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted || !tip) return null;

  return createPortal(
    <div
      className="fixed z-[9999] pointer-events-none"
      style={{ left: tip.left, top: tip.top, width: TOOLTIP_W }}
    >
      {/* Arrow — top tooltip: arrow points down; bottom tooltip: arrow points up */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border border-gray-200
          ${tip.dir === "top" ? "-bottom-1.5 border-r border-b border-t-0 border-l-0" : "-top-1.5 border-l border-t border-b-0 border-r-0"}`}
      />
      {/* Card — your style */}
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
function Avatar({ user, tooltipDir, onEnter, onLeave, onTap }: {
  user: User;
  tooltipDir: "top" | "bottom";
  onEnter: (u: User, rect: DOMRect, dir: "top" | "bottom") => void;
  onLeave: () => void;
  onTap: (u: User) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="flex-shrink-0 px-1 cursor-pointer group"
      onMouseEnter={() => ref.current && onEnter(user, ref.current.getBoundingClientRect(), tooltipDir)}
      onMouseLeave={onLeave}
      onClick={() => onTap(user)}
    >
      <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden opacity-90 group-hover:opacity-100 transition-all duration-200 group-hover:scale-110 group-hover:-translate-y-0.5">
        <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

/* ================= MARQUEE ROW ================= */
function MarqueeRow({ direction, onEnter, onLeave, onTap }: {
  direction: "left" | "right";
  onEnter: (u: User, rect: DOMRect, dir: "top" | "bottom") => void;
  onLeave: () => void;
  onTap: (u: User) => void;
}) {
  const tooltipDir = direction === "left" ? "top" : "bottom";
  const list = direction === "left" ? users : [...users].reverse();
  const doubled = [...list, ...list];

  return (
    <div className="mq-row relative w-full pt-2" style={{ overflowX: "clip", overflowY: "visible" }}>
      {/* fade edges — match white bg */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-20 bg-gradient-to-l from-white to-transparent" />

      <div className={`flex items-center w-max anim-${direction}`}>
        {doubled.map((user, i) => (
          <Avatar
            key={i}
            user={user}
            tooltipDir={tooltipDir}
            onEnter={onEnter}
            onLeave={onLeave}
            onTap={onTap}
          />
        ))}
      </div>
    </div>
  );
}

/* ================= MOBILE MODAL — your style ================= */
function MobileModal({ user, onClose }: { user: User; onClose: () => void }) {
  return (
    <div
      className="md:hidden fixed inset-0 z-[200] flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl p-4 w-[70%] max-w-xs"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="text-sm font-semibold text-black">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
            <p className="text-xs text-gray-500">{user.role}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-full mt-3 text-xs font-medium text-gray-600 hover:text-black"
        >
          Close
        </button>
      </div>
    </div>
  );
}

/* ================= MAIN ================= */
export default function Testi() {
  const [tip, setTip]           = useState<TipState>(null);
  const [modal, setModal]       = useState<User | null>(null);

  const handleEnter = useCallback((u: User, rect: DOMRect, dir: "top" | "bottom") => {
    const cx   = rect.left + rect.width / 2;
    const left = Math.max(8, Math.min(window.innerWidth - TOOLTIP_W - 8, cx - TOOLTIP_W / 2));
    const top  = dir === "top" ? rect.top - TOOLTIP_H - GAP : rect.bottom + GAP;
    setTip({ user: u, left, top, dir });
  }, []);

  const handleLeave = useCallback(() => setTip(null), []);
  const handleTap   = useCallback((u: User) => setModal(u), []);

  return (
    <>
      <style>{ANIM_CSS}</style>
      <TooltipPortal tip={tip} />
      {modal && <MobileModal user={modal} onClose={() => setModal(null)} />}

      <div className="w-full bg-white mt-10">
        <div className="flex flex-col items-center w-full">

          {/* Testimonials image */}
          <img
            src="https://beecomassets.s3.ap-southeast-2.amazonaws.com/assets/images/TESTIMONIALS.webp"
            className="w-[80%] md:w-[60%]"
            alt="Testimonials"
          />

          {/* Heading */}
          <h2 className="text-2xl font-bold mt-4 text-black">What We've Done</h2>
          <p className="text-sm text-black text-center px-4">
            Trusted by Leading Enterprises and Innovators
          </p>

          {/* Marquee rows — 500px centered */}
          <div className="mt-6 pb-6" style={{ width: "500px", maxWidth: "100%" }}>
            <MarqueeRow direction="left"  onEnter={handleEnter} onLeave={handleLeave} onTap={handleTap} />
            <MarqueeRow direction="right" onEnter={handleEnter} onLeave={handleLeave} onTap={handleTap} />
          </div>

        </div>
      </div>
    </>
  );
}