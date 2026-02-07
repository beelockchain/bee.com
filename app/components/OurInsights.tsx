"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

/* ---------------- DATA ---------------- */
const insights = [
  {
    id: 1,
    title: "Low-Code App Development Company: Build Enterprise-Ready Apps Faster",
    image: "/assets/images/insight-one.jpg",
    tags: [ "App Development"]
  },
  // {
  //   id: 2,
  //   title: "How AR and VR Are Transforming Digital Experiences in 2026",
  //   image: "/assets/images/insight-two.jpg",
  //   tags: ["AR", "VR", "Digital Experience"]
  // },
    {
    id: 2,
    title: "How AI-Powered Blockchain Is Redefining Enterprise Digital Transformation in 2026",
    image: "/assets/images/insight-five.jpg",
    tags: ["Digital Transformation"]
  },
  // {
  //   id: 3,
  //   title: "Top Unique And Profitable Business Ideas For 2026",
  //   image: "/assets/images/insight-three.jpg",
  //   tags: ["Business", "Startups", "Trends 2026"]
  // },
  {
    id: 3,
    title: "How to Choose the Right Mobile App Development Partner for Your Industry",
    image: "/assets/images/insight-four.jpg",
    tags: ["Mobile Development"]
  },

  {
    id: 4,
    title: "AI-Driven Blockchain vs Traditional Systems: What Businesses Must Know",
    image: "/assets/images/insight-six.jpg",
    tags: [ "AI"]
  }
];

const OurInsights = () => { 
  const [currentIndex, setCurrentIndex] = useState(6); // Start at middle set
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  // Triple the insights for seamless infinite scroll
  const tripleInsights = [...insights, ...insights, ...insights];
  
  // Group insights into slides of 4 cards each for desktop
  const slides = [];
  for (let i = 0; i < insights.length; i += 4) {
    slides.push(insights.slice(i, i + 4));
  }
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance mobile carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Reset position when reaching end
  useEffect(() => {
    if (currentIndex === insights.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(insights.length);
      }, 500);
    }
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(insights.length);
      }, 500);
    }
  }, [currentIndex]);

  // Auto-advance desktop carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="w-full bg-white py-14 overflow-hidden">
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

          {/* INDICATOR DOTS */}
          {/* <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? "w-10 bg-black/90" : "w-3 bg-black/30 hover:bg-black/50"
                }`}
              />
            ))}
          </div> */}
        </div>

        {/* MOBILE CONTINUOUS CAROUSEL */}
        <div className="sm:hidden">
          <div className="overflow-hidden">
            <div 
              className="flex"
              style={{
                transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 16}px))`,
                transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none',
                gap: '16px'
              }}
            >
              {tripleInsights.map((item, index) => (
                <div
                  key={`insight-${index}`}
                  className="flex-shrink-0 w-full bg-white border border-zinc-400 flex flex-col h-[320px]"
                >
                  <div className="relative w-full h-40 flex-shrink-0">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col justify-between flex-1 p-3">
                    <h3 className="text-[18px] font-semibold text-black font-poppins leading-snug">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between text-[12px] text-black/70 font-poppins mt-1.5">
                      <div className="flex gap-2 flex-wrap">
                        {item.tags.map((tag, idx) => (
                          <span key={idx}>{tag}</span>
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

          {/* MOBILE INDICATOR DOTS */}
          <div className="flex justify-center gap-2 mt-6">
            {insights.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(insights.length + idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  (currentIndex % insights.length) === idx ? "w-8 bg-black/90" : "w-2 bg-black/30"
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