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
    <div className="w-full bg-white">
    

      {/* ================= DESKTOP / TABLET HERO SECTION ================= */}
{/* ================= TABLET + DESKTOP (md and above) ================= */}
<div className="hidden md:flex w-full flex-col bg-white">

  {/* MAIN CONTENT */}
  <div className="w-full flex items-start justify-center px-6 md:px-10 lg:px-20 pt-6 lg:pt-10 pb-6">
    <div className="w-full max-w-7xl grid grid-cols-[1fr_auto_1fr] items-start gap-6 lg:gap-10">

      {/* LEFT: Tagline + Heading — top aligned */}
      <div className="flex flex-col justify-start pt-2">
      <h1 className="text-[20px]  sm:text-[12px] md:text-[12px]  lg:text-[16px] xl:text-[24px] font-[800] mt-16 md:mt-20 
      lg:mt-[120px] text-black leading-tight">          Digital Transformation Company
          <br />
          Modernizing The Way You Work
        </h1>
      </div>

      {/* CENTER: Hero Image */}
      <div className="flex flex-col items-center gap-6">
        <img
          ref={imgRef}
          src={`${ASSET_URL}/images/Heromainimg.webp`}
          alt="Beelockchain Hero"
          className="w-full max-w-[200px] md:max-w-[200px] 
          lg:max-w-[260px] xl:max-w-[380px] object-contain"
          style={{ transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
      </div>

      {/* RIGHT: Description + CTA */}
      <div className="flex flex-col justify-center gap-4 h-full">
        <div className="relative min-h-[200px]  flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 rounded-2xl"
            style={{ backgroundImage: `url('${ASSET_URL}/images/Herosideimg2.webp')` }}
          />
          <div className="relative z-10 py-4 px-4">
            <p className="text-gray-700 text-sm md:text-[12px] lg:text-[14px]   xl:text-[18px]  leading-relaxed">
              Beelockchain is a global digital transformation company that
              integrating future-ready solutions across AI, Blockchain,
              Cloud Infrastructure, Big Data, and Mobile Applications with
              advanced, customer-centric experiences.
            </p>
          </div>
        </div>

        <button className="cursor-pointer inline-flex items-center gap-2 w-fit px-4 py-2  md:px-3 md:py-1 lg:px-5 lg:py-2.5 border border-black rounded-full bg-white hover:bg-gray-50 transition-colors">
          <span className="text-black text-sm md:text-[12px] lg:text-base whitespace-nowrap">Consult Our Experts</span>
          <svg className="w-8 h-8 lg:w-10 lg:h-10" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28.2473" cy="27.0945" r="15.912" fill="#F6E000" stroke="#F9C901" strokeWidth="1.51543" />
            <path d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
              stroke="black" strokeWidth="3.03086" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

    </div>
  </div>

  {/* STATS SECTION */}
  <div className="w-full flex justify-center items-center py-8 md:py-4 lg:py-12">
    <div className="flex justify-center items-center gap-6 lg:gap-10 xl:gap-12">
      {[
        { title: "50+", sub: "Team Members" },
        { title: "380+", sub: "Completed Projects" },
        { title: "8 years", sub: "In Business" },
      ].map((item) => (
        <div
          key={item.title}
          className="
            w-[140px] h-[90px]
            md:w-[150px] md:h-[100px]
            lg:w-[170px] lg:h-[110px]
            bg-white rounded-2xl lg:rounded-[28px]
            flex flex-col items-start justify-center
            p-3 lg:p-4
            shadow-[0_8px_20px_rgba(255,200,90,0.4),_0_0_0_1px_rgba(255,200,90,0.2)]
          "
        >
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-black">{item.title}</h2>
          <p className="text-xs lg:text-sm text-gray-600 mt-1">{item.sub}</p>
        </div>
      ))}
    </div>
  </div>

</div>


     {/* ================= MOBILE LAYOUT ================= */}
{/* ================= MOBILE LAYOUT ================= */}
      <div className="flex md:hidden flex-col items-center px-6">
        {/* Heading */}
        <div className="w-full max-w-sm text-center md:text-center mb-8 ">
         
          <h1 className="text-md font-extrabold leading-snug text-black">
            Digital Transformation Company
            <br />
            Modernizing The Way You Work
          </h1>
        </div>

        {/* Center Image */}
        <div className="w-full max-w-xs mb-10">
          <img
            src={`${ASSET_URL}/images/Heromainimg.webp`}
            alt="BeeLockchain"
            className="w-full"
          />
        </div>

        {/* Stats */}
        <div className="flex gap-2 text-center">
          {[
            { title: "50+", sub: "Team Members" },
            { title: "380+", sub: "Completed Projects" },
            { title: "8 years", sub: "In Business" },
          ].map((item) => (
            <div
              key={item.title}
              className="
                w-[100px] h-[90px]
                bg-white
                rounded-[22px]
                p-3
                shadow-[0_8px_18px_rgba(255,200,90,0.45),_0_0_0_1px_rgba(255,200,90,0.25)]
                flex flex-col justify-center
              "
            >
              <h2 className="text-xl font-semibold text-black">{item.title}</h2>
              <p className="text-[11px] text-black mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
    <div className="relative w-full rounded-2xl overflow-hidden mb-8">
    {/* 👇 THIS is the missing bg image — same as desktop right column */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-10"
      style={{ backgroundImage: `url('${ASSET_URL}/images/Herosideimg2.webp')` }}
    />
    <div className="relative z-10 items-center  text-center p-5 flex flex-col gap-4">
      <p className="text-black text-sm leading-relaxed">
        Beelockchain is a global digital transformation company that
        integrates future-ready solutions across AI, Blockchain, Cloud
        Infrastructure, Big Data, and Mobile Applications with an advanced,
        customer-centric experience.
      </p>
      <button className="flex items-center gap-2 w-fit text-black border border-black px-3 py-1.5 rounded-full font-medium bg-white/80 hover:bg-white transition">
        Consult Our Experts
        <svg className="w-8 h-8" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28.2473" cy="27.0945" r="15.912" fill="#F6E000" stroke="#F9C901" strokeWidth="1.51543" />
          <path d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
            stroke="black" strokeWidth="3.03086" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  </div>
      </div>
    </div>
  );
};

export default Herosection;
