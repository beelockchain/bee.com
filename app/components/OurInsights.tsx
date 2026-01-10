"use client";

import Image from "next/image";
import { useState } from "react";

/* ---------------- DATA ---------------- */
const insights = [
  {
    id: 1,
    title: "How does Beelockchain help businesses with digital transformation?",
    image: "/assets/images/insight-one.png",
  },
  {
    id: 2,
    title: "How does Beelockchain help businesses with digital transformation?",
    image: "/assets/images/insight-two.png",
  },
  {
    id: 3,
    title: "How does Beelockchain help businesses with digital transformation?",
    image: "/assets/images/insight-three.png",
  },
  {
    id: 4,
    title: "How does Beelockchain help businesses with digital transformation?",
    image: "/assets/images/insight-one.png",
  },
  {
    id: 5,
    title: "How does Beelockchain help businesses with digital transformation?",
    image: "/assets/images/insight-two.png",
  },
  {
    id: 6,
    title: "How does Beelockchain help businesses with digital transformation?",
    image: "/assets/images/insight-three.png",
  },
  {
    id: 7,
    title: "How does Beelockchain help businesses with digital transformation?",
    image: "/assets/images/insight-one.png",
  },
  {
    id: 8,
    title: "How does Beelockchain help businesses with digital transformation?",
    image: "/assets/images/insight-two.png",
  },
];

const OurInsights = () => {
  const [current, setCurrent] = useState(0);

  /* -------- GROUP INTO SETS OF 4 -------- */
  const groupedInsights: typeof insights[] = [];
  for (let i = 0; i < insights.length; i += 4) {
    groupedInsights.push(insights.slice(i, i + 4));
  }

  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-[36px] text-center font-semibold text-black font-poppins mb-12">
          Our Insights
        </h2>

        {/* CAROUSEL */}
        <div className="relative">

          {/* SLIDES */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
{groupedInsights.map((group, index) => (
  <div key={index} className="min-w-full px-3">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {group.map((item) => (
        <div
          key={item.id}
          className="bg-white outline outline-1 outline-zinc-400
                     flex flex-col h-[420px]"
        >
          {/* IMAGE */}
          <div className="relative w-full h-56 flex-shrink-0">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-between flex-1 p-5">
            <h3 className="text-[20px] font-semibold text-black font-poppins leading-snug">
              {item.title}
            </h3>

            <div className="flex items-center justify-between text-[14px] text-black/70 font-poppins mt-6">
              <div className="flex gap-6">
                <span>Industry</span>
                <span>December 01-2025</span>
              </div>

<svg width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="28.2473" cy="27.0945" r="15.912" fill="#F6E000" stroke="#F9C901" strokeWidth="1.51543"/>
<path d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865" stroke="black" strokeWidth="3.03086" strokeLinecap="round" strokeLinejoin="round"/>
</svg>



            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
))}

          </div>
        </div>

        {/* INDICATORS (ONLY DOTS) */}
{/* INDICATORS — USER FRIENDLY */}
<div className="flex justify-center gap-3 mt-10">
  {groupedInsights.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrent(index)}
      aria-label={`Go to insights slide ${index + 1}`}
      className={`
        h-3 rounded-full transition-all duration-300
        ${current === index
          ? "w-10 bg-black/90"
          : "w-3 bg-black/30 hover:bg-black/50"}
      `}
    />
  ))}
</div>


      </div>
    </section>
  );
};

export default OurInsights;
