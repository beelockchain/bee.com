"use client";

import Image from "next/image";
import { useState } from "react";

/* ---------------- DATA ---------------- */
const insights = [
  { id: 1, title: "How does Beelockchain help businesses with digital transformation?", image: "/assets/images/insight-one.png" },
  { id: 2, title: "How does Beelockchain help businesses with digital transformation?", image: "/assets/images/insight-two.png" },
  { id: 3, title: "How does Beelockchain help businesses with digital transformation?", image: "/assets/images/insight-three.png" },
  { id: 4, title: "How does Beelockchain help businesses with digital transformation?", image: "/assets/images/insight-four.png" },
  { id: 5, title: "How does Beelockchain help businesses with digital transformation?", image: "/assets/images/insight-one.png" },
  { id: 6, title: "How does Beelockchain help businesses with digital transformation?", image: "/assets/images/insight-three.png" },
  { id: 7, title: "How does Beelockchain help businesses with digital transformation?", image: "/assets/images/insight-four.png" },
  { id: 8, title: "How does Beelockchain help businesses with digital transformation?", image: "/assets/images/insight-two.png" },
];

const OurInsights = () => { 
  const [currentSlide, setCurrentSlide] = useState(0);

  // Group insights into slides of 4 cards each
  const slides = [];
  for (let i = 0; i < insights.length; i += 4) {
    slides.push(insights.slice(i, i + 4));
  }

  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-[36px] text-center font-semibold text-black font-poppins mb-12">
          Our Insights
        </h2>

        {/* DESKTOP GRID WITH INDICATORS */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {slides[currentSlide].map((item) => (
              <div
                key={item.id}
                className="bg-white outline outline-1 outline-zinc-400 flex flex-col h-[400px] hover:scale-105 transition-transform duration-300"
              >
                <div className="relative w-full h-56 flex-shrink-0">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-between flex-1 p-5">
                  <h3 className="text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px] font-semibold text-black font-poppins leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-[12px] sm:text-[14px] lg:text-[11px]  text-black/70 font-poppins mt-4">
                    <div className="flex gap-2">
                      <span>Industry</span>
                      <span>Dec 01-2025</span>
                    </div>
                    <svg width="40" height="40" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="28.2473" cy="27.0945" r="15.912" fill="#F6E000" stroke="#F9C901" strokeWidth="1.51543"/>
                      <path d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865" stroke="black" strokeWidth="3.03086" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* INDICATOR DOTS */}
          <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? "w-10 bg-black/90" : "w-3 bg-black/30 hover:bg-black/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* MOBILE HORIZONTAL SCROLL */}
        <div className="sm:hidden overflow-x-auto scroll-smooth snap-x snap-mandatory -mx-6 px-6">
          <div className="flex gap-4">
            {insights.map((item) => (
             <div
  key={item.id}
  className="flex-shrink-0 w-full snap-center bg-white border border-zinc-400 flex flex-col h-[320px] hover:scale-105 transition-transform duration-300"
>

                <div className="relative w-full h-40 flex-shrink-0">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
          <div className="flex flex-col justify-between flex-1 p-3">
  <h3 className="text-[18px] font-semibold text-black font-poppins leading-snug">
    {item.title}
  </h3>
  <div className="flex items-center justify-between text-[12px] text-black/70 font-poppins mt-1.5">
    <div className="flex gap-2">
      <span>Industry</span>
      <span>Dec 01-2025</span>
    </div>
    <svg width="40" height="40" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28.2473" cy="27.0945" r="15.912" fill="#F6E000" stroke="#F9C901" strokeWidth="1.51543"/>
      <path d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865" stroke="black" strokeWidth="3.03086" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
</div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurInsights;
