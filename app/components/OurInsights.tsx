"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";



const OurInsights = () => { 
    const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    /* ---------------- DATA ---------------- */
const insights = [
  {
    id: 1,
    title: "Low-Code App Development Company: Build Enterprise-Ready Apps Faster",
    image: `${ASSET_URL}/images/insight-one.webp`,
    tags: [ "App Development"]
  },
  // {
  //   id: 2,
  //   title: "How AR and VR Are Transforming Digital Experiences in 2026",
  //   image: "https://beecomassets.s3.ap-southeast-2.amazonaws.com/assets/images/insight-two.webp",
  //   tags: ["AR", "VR", "Digital Experience"]
  // },
    {
    id: 2,
    title: "How AI-Powered Blockchain Is Redefining Enterprise Digital Transformation in 2026",
    image: `${ASSET_URL}/images/insight-five.webp`,
    tags: ["Digital Transformation"]
  },
  // {
  //   id: 3,
  //   title: "Top Unique And Profitable Business Ideas For 2026",
  //   image: "https://beecomassets.s3.ap-southeast-2.amazonaws.com/assets/images/insight-three.webp",
  //   tags: ["Business", "Startups", "Trends 2026"]
  // },
  {
    id: 3,
    title: "How to Choose the Right Mobile App Development Partner for Your Industry",
    image: `${ASSET_URL}/images/insight-four.webp`,
    tags: ["Mobile Development"]
  },

  {
    id: 4,
    title: "AI-Driven Blockchain vs Traditional Systems: What Businesses Must Know",
    image: `${ASSET_URL}/images/insight-six.webp`,
    tags: [ "AI"]
  }
];
  

  
  // Group insights into slides of 4 cards each for desktop
  const slides = [];
  for (let i = 0; i < insights.length; i += 4) {
    slides.push(insights.slice(i, i + 4));
  }
  const [currentSlide, setCurrentSlide] = useState(0);




const handleScroll = () => {
  const container = scrollRef.current;
  if (!container) return;

  const scrollLeft = container.scrollLeft;
  const cardWidth = container.clientWidth * 0.85 + 16; // 85vw + gap
  const index = Math.round(scrollLeft / cardWidth);

  setActiveIndex(index);
};


  return (
    <section className="w-full bg-white py-14 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* TITLE */}
        <h2 className=" text-center font-['Poppins'] text-[22px] sm:text-[20px] md:text-[20px] lg:text-[26px] xl:text-[34px] text-black leading-snug font-semibold   mb-12">
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
                  <h3 className="text-[14px] sm:text-[16px] md:text-[16px] lg:text-[14px] font-semibold text-black font-poppins leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-[12px] sm:text-[14px] lg:text-[11px] text-black/70 font-poppins mt-4">
                    <div className="flex gap-2 flex-wrap">
                      {item.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                      ))}
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

        {/* MOBILE CONTINUOUS CAROUSEL */}
  <div className="sm:hidden">
      
      {/* SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
      >
        <div className="flex gap-4 pb-4">
          {insights.map((item: any, i: number) => (
            <div
              key={item.id}
              className="shrink-0 w-[85vw] snap-start bg-white border border-zinc-400 flex flex-col h-[320px]"
            >
              {/* IMAGE */}
              <div className="relative w-full h-40 flex-shrink-0">
               <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-top"
              />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-between flex-1 p-3">
                <h3 className="text-[18px] font-semibold text-black">
                  {item.title}
                </h3>

                <div className="flex items-center justify-between text-[12px] text-black/70 mt-1.5">
                  <div className="flex gap-2 flex-wrap">
                    {item.tags.map((tag: string, idx: number) => (
                      <span key={idx}>{tag}</span>
                    ))}
                  </div>

                  {/* ICON */}
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

      {/* INDICATORS */}
      <div className="flex justify-center gap-2 mt-2">
        {insights.map((_: any, i: number) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === i
                ? "w-6 bg-yellow-400"
                : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>

      </div>
    </section>
  );
};

export default OurInsights;