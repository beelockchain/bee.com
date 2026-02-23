
"use client";

import { useRef } from "react";
import gsap from "gsap";

const Herosection = () => {
  const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const img = imgRef.current;
    if (!img) return;

    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 10;
    const rotateX = (y / rect.height - 0.5) * -10;

    gsap.to(img, {
      rotateX,
      rotateY,
      scale: 1,
      transformPerspective: 800,
      ease: "power2.out",
      duration: 0.1,
    });
  };

  const handleMouseLeave = () => {
    const img = imgRef.current;
    if (!img) return;

    gsap.to(img, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      ease: "power3.out",
      duration: 0.3,
    });
  };

  return (
    <section className="w-full bg-white px-2 md:px-10 lg:px-20 py-2">
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] items-center gap-10">

        {/* LEFT - HEADING */}
        <div className="w-full text-center lg:text-left">
          <h1 className="
           text-[19px]  sm:text-[12px] md:text-[12px]  lg:text-[16px] xl:text-[24px] font-[800] mt-2 md:mt-20
               lg:mt-[20px] text-black leading-tight
          ">
            Digital Transformation Company
            <br />
            Modernizing The Way You Work
          </h1>
        </div>

        {/* CENTER - IMAGE */}
        <div className="flex justify-center">
          <img
            ref={imgRef}
            src={`${ASSET_URL}/images/Heromainimg.webp`}
            alt="Beelockchain Hero"
            className="
              w-full max-w-[280px]
              md:max-w-[260px]
              lg:max-w-[300px]
              xl:max-w-[380px]
              object-contain
            "
            style={{ transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </div>
{/* MOBILE STATS (under image) */}
<div className="flex justify-center  text-center  lg:hidden">
  <div className="flex w-full max-w-[320px] justify-between gap-2">
    {[
      { title: "50+", sub: "Team Members" },
      { title: "380+", sub: "Completed Projects" },
      { title: "8 years", sub: "In Business" },
    ].map((item) => (
      <div
        key={item.title}
        className="
          flex-1
          min-w-0
          bg-white rounded-2xl
          flex flex-col items-center justify-center
          px-2 py-3 
          shadow-[0_8px_20px_rgba(255,200,90,0.4),_0_0_0_1px_rgba(255,200,90,0.2)]
        "
      >
        <h2 className="text-xl  font-semibold text-black">
          {item.title}
        </h2>
        <p className="text-[11px] text-black mt-1 leading-tight">
          {item.sub}
        </p>
      </div>
    ))}
  </div>
</div>
        {/* RIGHT - CONTENT */}
        <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">

          {/* DESCRIPTION BOX */}
          <div className="relative w-full rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: `url('${ASSET_URL}/images/Herosideimg2.webp')` }}
            />
            <div className="relative z-10 p-5">
              <p className="text-gray-700 text-sm  lg:text-lg leading-relaxed font-normal font-['Poppins']">
                Beelockchain is a global digital transformation company that
                integrates future-ready solutions across AI, Blockchain,
                Cloud Infrastructure, Big Data, and Mobile Applications
                with advanced, customer-centric experiences.
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <button className="inline-flex items-center gap-2 px-4 py-2 border border-black rounded-full bg-white hover:bg-gray-50 transition">
            <span className="text-black text-sm md:text-base whitespace-nowrap">
              Consult Our Experts
            </span>
            <svg className="w-8 h-8 lg:w-10 lg:h-10" viewBox="0 0 56 55" fill="none">
              <circle cx="28.2473" cy="27.0945" r="15.912" fill="#F6E000" stroke="#F9C901" strokeWidth="1.5" />
              <path
                d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* STATS */}
     <div className="hidden lg:flex justify-center mt-10">
  <div className="flex flex-wrap justify-center gap-4">
          {[
            { title: "50+", sub: "Team Members" },
            { title: "380+", sub: "Completed Projects" },
            { title: "8 years", sub: "In Business" },
          ].map((item) => (
            <div
              key={item.title}
              className="
                w-[110px] h-[90px]
                md:w-[140px] md:h-[100px]
                lg:w-[170px] lg:h-[110px]
                bg-white rounded-2xl
                flex flex-col items-start justify-center
                p-3
                shadow-[0_8px_20px_rgba(255,200,90,0.4),_0_0_0_1px_rgba(255,200,90,0.2)]
              "
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black">
                {item.title}
              </h2>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE STATS */}

    </section>
  );
};

export default Herosection;