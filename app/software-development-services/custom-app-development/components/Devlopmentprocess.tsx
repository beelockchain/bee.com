"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Ideation",
    icon: "💡",
    description:
      "We transform your ideas into actionable app concepts through market research and strategic planning that define clear goals and a strong foundation for mobile app development.",
    side: "left",
  },
  {
    number: "02",
    title: "Scoping",
    icon: "🔍",
    description:
      "Our scoping process aligns your app features, development timelines, and technical requirements to ensure clarity and cost control with your business objectives from day one.",
    side: "right",
  },
  {
    number: "03",
    title: "Prototype design",
    icon: "🖊️",
    description:
      "Our prototype design process creates clickable app models that showcase user flow and functionality, it's enables early feedback and smarter development decisions.",
    side: "left",
  },
  {
    number: "04",
    title: "UX/UI app design",
    icon: "⚙️",
    description:
      "We design intuitive UX/UI interfaces focused on usability, consistency, and delivering visually appealing mobile apps that enhance user experience and retention.",
    side: "right",
  },
  {
    number: "05",
    title: "Development & testing",
    icon: "✅",
    description:
      "We build and test mobile apps using robust frameworks, clean code, and quality assurance practices to provide high-performing applications.",
    side: "left",
  },
  {
    number: "06",
    title: "Maintenance & Support",
    icon: "🚀",
    description:
      "Our maintenance and support services ensure continuous app optimization, updates, bug fixes, and performance monitoring.",
    side: "right",
  },
];

const Developmentprocess = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !headerRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const headerHeight = headerRef.current.offsetHeight;

      const sectionStarted = sectionRect.top <= 0;
      const sectionEnded = sectionRect.bottom <= headerHeight;

      setIsSticky(sectionStarted && !sectionEnded);

      stepRefs.current.forEach((ref, i) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top <= headerHeight + 100 && rect.bottom > headerHeight + 100) {
          setActiveStep(i);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white relative">
      {/* ── STICKY HEADER ── */}
      <div
        ref={headerRef}
        className={`w-full bg-white z-40 duration-300 ${
          isSticky ? "fixed top-0 left-0" : "relative"
        }`}
      >
        <div className="mx-auto px-6 py-10 text-center">
          <h2 className="max-w-10xl mx-auto  text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px] text-black leading-tight font-bold mb-3">
            Mobile App
            <span data-text="Development Process" className="shine-text text-[#F5B800] relative mx-2">Development Process</span> That Makes
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Your App Stand Out
          </h2>
          <p className="text-black text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px]  text-black leading-relaxed font-normal  max-w-[720px] mx-auto mb-6 ">
            <span className="">
              Mobile App Development Solutions are built on the idea that mobile app
              development is an ongoing process focused on constant iteration and better
              alignment with user needs.
            </span>
          </p>
          
          <div className="w-full flex justify-center items-center gap-2">

            <a href="/contact-us">
            <button className="group relative flex items-center gap-2 px-4 py-2 lg:px-4 lg:py-0 border border-black rounded-full overflow-hidden cursor-pointer">
              <span className="absolute inset-0 flex items-center justify-center z-0">
                <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
              </span>
              <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />
              <span className="relative z-10 text-black text-sm whitespace-nowrap transition-colors">
                Contact Experts
              </span>
              <svg
                viewBox="0 0 56 55"
                className="relative z-10 w-10 h-10 lg:w-14 lg:h-14 transition-all duration-300 group-hover:rotate-60 group-hover:translate-x-1 group-active:scale-95"
              >
                <circle cx="28.2" cy="27.1" r="15.9" fill="#F6E000" stroke="#F9C901" strokeWidth="1.5" />
                <path d="M31.3 22.1L33.2 29.4M31.3 22.1L24.1 24.1M31.3 22.1L25.1 32.8" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            </a>
            <div>
            <button
             
              className="group relative flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 lg:px-4 lg:py-0 border border-black rounded-full overflow-hidden cursor-pointer"
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
      </div>

      {isSticky && <div style={{ height: headerRef.current?.offsetHeight }} />}

      {/* ── MOBILE LAYOUT (Alternating with gradient numbers) ── */}
      <div className="relative w-full max-w-[500px] mx-auto px-4 pb-16 mt-8 md:hidden flex flex-col gap-6">
        {steps.map((step, i) => {
          const isLeft = i % 2 === 0;

          return (
            <div
              key={i}
              ref={(el) => { stepRefs.current[i] = el; }}
              className={`relative flex items-center justify-between w-full gap-4 sm:gap-20 ${
                isLeft ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Card Container */}
              <div
                className="w-[70%] bg-[#ebebeb] border border-[#e2e2e2] rounded-xl p-4 z-10 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[16px]">{step.icon}</span>
                  <h3 className="text-[13px] font-bold text-black ">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-[11px] leading-relaxed ">
                  {step.description}
                </p>
              </div>

              {/* Number Container */}
              <div className={`w-[25%] relative flex ${isLeft ? "justify-center sm:justify-start" : "justify-center sm:justify-end"} items-center`}>
                <span
                  className="text-[60px] min-[400px]:text-[75px] font-black leading-none select-none tracking-tighter"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#000",
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 85%)",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 85%)",
                  }}
                >
                  {step.number}
                </span>

                {/* Dotted Line Graphic */}
                {isLeft && (
                  <div className="absolute right-[0px] top-[40%] w-6 sm:w-10 border-t-[2px] border-dotted border-[#F5B800] transform rotate-[-15deg] z-0" />
                )}
                {!isLeft && (
                  <div className="absolute left-[0px] top-[40%] w-6 sm:w-10 border-t-[2px] border-dotted border-[#F5B800] transform rotate-[15deg] z-0 opacity-50" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── TABLET/DESKTOP LAYOUT (alternating left/right) ── */}
      <div className="hidden md:block relative max-w-[1100px] mx-auto px-6 pb-24 mt-10">
        {/* Center dashed line */}
        

        {steps.map((step, i) => {
          const isLeft = step.side === "left";
          const isActive = activeStep === i;

          return (
            <div
              key={i}
              ref={(el) => { stepRefs.current[i] = el; }}
              className={`relative flex items-center gap-0 mb-4 ${
                isLeft ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Card */}
              <div className={`w-[45%] ${isLeft ? "pr-8" : "pl-8"}`}>
                <div
                  className={`bg-[#F3F4F6] rounded-2xl p-6 transition-all duration-500 ${
                    isActive ? "shadow-lg scale-[1.02] bg-white border border-gray-200" : "opacity-80"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{step.icon}</span>
                    <h3 className="text-[16px] font-bold text-black ">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed ">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Center Number */}
              <div className="w-[10%] flex items-center justify-center relative z-10">
                <span
                  className={`text-[65px] min-[400px]:text-[80px] font-black leading-none select-none tracking-tighter ${
                    isLeft ? "-ml-3" : "-mr-3"
                  }`}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#000",
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 85%)",
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 85%)",
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Empty space for opposite side */}
              <div className="w-[45%]" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Developmentprocess;