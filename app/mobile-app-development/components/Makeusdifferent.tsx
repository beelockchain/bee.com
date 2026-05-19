"use client";
import { useState, useEffect, useRef } from "react";




const Makeusdifferent = () => {
  const [active, setActive] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);



  const cards = [
    {
      number: "01",
      title: "Expert Custom Mobile App Developers",
      description:
        "Our team of expert custom mobile app developers brings deep technical knowledge and industry experience to every project. We design and develop mobile applications suitable for your specific business objectives, and with our advanced technology and business logic, we ensure intuitive user experiences and applications that support long-term growth.",
    },
    {
      number: "02",
      title: "Agile Methodology",
      description:
        "We follow a proven agile development methodology that emphasizes flexibility, and speed. Through iterative planning, continuous testing, and regular feedback cycles, we ensure faster delivery without compromising quality.",
    },
    {
      number: "03",
      title: "Audience-First Approach",
      description:
        "Our audience-first approach ensures the users are at the middle of the development process. We analyze user behavior, preferences, and engagement patterns, and we design mobile applications that are intuitive, accessible, and purpose-driven. This focus on user experience helps increase adoption rates, improve retention, and create meaningful digital interactions.",
    },
    {
      number: "04",
      title: "Complete App Lifecycle",
      description:
        "We provide end-to-end mobile app development services covering the entire application lifecycle from starting with initial strategy, requirement analysis, and UI/UX design, to development, testing, deployment, and ongoing maintenance, we ensure consistent performance at every stage.",
    },
  ];

  return (
    <div className="w-full bg-white py-8 px-6 md:px-12">
      {/* Top Section */}
      <div className=" md:text-center mb-10 ">
        <h2 className="text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px] font-bold text-black leading-tight mb-4 text-center md:px-0">
          <span data-text="Beelockchain:" className="shine-text text-[#F5B800] relative mx-0">Beelockchain:</span> What Makes Us Different
        </h2>
        <p className="text-black text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-black leading-relaxed font-semibold  mb-6 max-w-2xl mx-auto">
          As a leading mobile app development company, we focus on diagnosing
          business pain points and launching the best-in-class app solutions
          through strategic problem-solving and technical precision.
        </p>

        {/* Buttons */}
        <div className="flex flex-row justify-center gap-2 lg:gap-4 flex-nowrap w-full overflow-hidden md:overflow-visible">
          <div>
            <button
              onTouchStart={() => setActive(true)}
              onTouchEnd={() => setActive(false)}
              onMouseLeave={() => setActive(false)}
              className="group relative flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 lg:px-4 lg:py-0 border border-black rounded-full overflow-hidden cursor-pointern font-semibold"
            >
              <span className="absolute inset-0 flex items-center justify-center z-0">
                <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
              </span>
              <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />
              <span className="relative z-10 text-black text-[10px] sm:text-[11px] lg:text-sm whitespace-nowrap transition-colors">
                Build Your Mobile App
              </span>
              <svg
                viewBox="0 0 56 55"
                className="relative z-10 w-6 h-6 lg:w-14 lg:h-14 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95"
              >
                <circle cx="28.2" cy="27.1" r="15.9" fill="#F6E000" stroke="#F9C901" strokeWidth="1.5" />
                <path d="M31.3 22.1L33.2 29.4M31.3 22.1L24.1 24.1M31.3 22.1L25.1 32.8" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div>
            <button
              onTouchStart={() => setActive(true)}
              onTouchEnd={() => setActive(false)}
              onMouseLeave={() => setActive(false)}
              className="group relative flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 lg:px-4 lg:py-0 border border-black rounded-full overflow-hidden cursor-pointer font-semibold"
            >
              <span className="absolute inset-0 flex items-center justify-center z-0">
                <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
              </span>
              <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />
              <span className="relative z-10 text-black text-[10px] sm:text-[11px] lg:text-sm whitespace-nowrap transition-colors">
                Explore Our Portfolio
              </span>
              <svg
                viewBox="0 0 56 55"
                className="relative z-10 w-6 h-6 lg:w-14 lg:h-14 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95"
              >
                <circle cx="28.2" cy="27.1" r="15.9" fill="#F6E000" stroke="#F9C901" strokeWidth="1.5" />
                <path d="M31.3 22.1L33.2 29.4M31.3 22.1L24.1 24.1M31.3 22.1L25.1 32.8" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 
         FIX APPLIED HERE:
         Changed 'h-auto md:h-[500px] lg:h-auto' to just 'h-auto'.
         The fixed 500px height was causing the content to overflow and overlap the next section.
         'h-auto' allows the container to grow to the natural height of the cards.
      */}
      <div ref={containerRef} className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10 h-auto mt-6 lg:mt-0">
        
        {/* Image Section - First on mobile/tablet, right on desktop */}
        <div ref={imageRef} className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center lg:items-end h-full order-none lg:order-2">
          <img
            src="/assets/images/software-dev/custom-app-dev/makeusdifferent.png"
            alt="Beelockchain mobile app"
            className="max-w-[280px] md:max-w-[400px] lg:max-w-full w-auto h-auto object-contain mx-auto"
          />
        </div>

        {/* Cards Section - Below image on mobile/tablet, left on desktop */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 order-none lg:order-1">
          {cards.map((card) => (
            <div
              key={card.number}
              className="relative bg-[#ebebeb] lg:bg-[#E2E2E2] border border-gray-200 rounded-xl lg:rounded-2xl p-4 md:p-5 lg:p-4 flex flex-col gap-1 hover:shadow-md transition-shadow duration-200 overflow-hidden lg:overflow-visible"
            >
              <h3 className="text-[16px] md:text-[16px] lg:text-[16px] xl:text-[20px] font-semibold mb-3 text-black">
                {card.title}
              </h3>
              <p className="text-left text-black text-[12px] md:text-[12px] lg:text-[12px] xl:text-[14px] leading-relaxed font-semibold pr-10 xl:pr-15">
                {card.description}
              </p>
              <span className="absolute bottom-1 right-2 lg:static self-end lg:self-end text-[28px] lg:text-2xl font-extrabold text-black lg:text-black leading-none pointer-events-none lg:pointer-events-auto z-0 lg:mt-2">
                {card.number}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Makeusdifferent;