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
      {/* ================= MOBILE LAYOUT ================= */}
      <div className="flex md:hidden flex-col items-center px-6">
        {/* Heading */}
        <div className="w-full max-w-sm text-left mb-8">
          <p className="text-xs text-black mb-2">
            Your Vision. Our Dedication.
          </p>
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
        <div className="flex gap-2">
          {[
            { title: "50+", sub: "team members" },
            { title: "380+", sub: "Completed Projects" },
            { title: "8 years", sub: "in Business" },
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
        <div className="h-60 w-full flex flex-col justify-center items-center bg-cover bg-center gap-2">
          <div className="text-black text-sm text-center">
            Beelockchain is a global digital transformation company that
            integrates future-ready solutions across AI, Blockchain, Cloud
            Infrastructure, Big Data, and Mobile Applications with an advanced,
            customer-centric experience.
          </div>

          <button className="flex items-center gap-2 text-black border border-black px-2 py-1 rounded-full font-medium shadow hover:bg-gray-100 transition">
            Consult Our Experts
            <svg
              className="relative z-10 w-10 h-10 md:w-8 md:h-8 lg:w-14 lg:h-14"
              viewBox="0 0 56 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="28.2473"
                cy="27.0945"
                r="15.912"
                fill="#F6E000"
                stroke="#F9C901"
                strokeWidth="1.51543"
              />
              <path
                d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
                stroke="black"
                strokeWidth="3.03086"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ================= DESKTOP + TABLET LAYOUT ================= */}
      {/* ⚠️ UNTOUCHED JSX */}
      {/* ================= DESKTOP / TABLET HERO SECTION ================= */}
      <div className="hidden md:flex min-h-screen w-full flex-col bg-white">
        {/* ================= MAIN CONTENT AREA ================= */}
        <div className="flex-1 w-full flex items-center justify-center px-6 lg:px-12 xl:px-20 py-8 lg:py-12">
          <div className="w-full max-w-7xl flex items-start justify-between gap-6 lg:gap-10">
            {/* -------- LEFT: Title -------- */}
            <div className="w-[28%] flex flex-col justify-center">
              <h1 className="md:text-[14px] lg:text-[26px] font-extrabold text-black leading-tight md:w-52 lg:w-96 mt-0 lg:mt-20">
                BeeLockChain Your Trusted
             
                Digital Transformation
              </h1>
            </div>

            {/* -------- CENTER: Hero Image -------- */}
            <div className="w-[34%] flex justify-center items-center">
              <img
                ref={imgRef}
                src={`${ASSET_URL}/images/Heromainimg.webp`}
                alt="Beelockchain Hero"
                className="w-full max-w-[280px] lg:max-w-[400px] xl:max-w-[400px] object-contain"
                style={{ transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />
            </div>

            {/* -------- RIGHT: Description + CTA -------- */}
            <div className="w-[28%] flex flex-col justify-center gap-5 lg:gap-2">
              {/* Background pattern container */}
              <div className="relative">
                {/* Optional: subtle background pattern */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 rounded-lg"
                  style={{
                    backgroundImage: `url('${ASSET_URL}/images/Herosideimg2.webp')`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 py-4 ">
                  <p className="text-gray-700 text-sm md:text-sm lg:text-base xl:text-lg leading-relaxed">
                    Beelockchain is a global digital transformation company that
                    integrating future-ready solutions across AI, Blockchain,
                    Cloud Infrastructure, Big Data, and Mobile Applications with
                    advanced, customer-centric experiences.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className="
            cursor-pointer
            inline-flex items-center gap-2
            w-fit
            px-4 py-2 lg:px-5 lg:py-2.5
            border border-black rounded-full
            bg-white
            hover:bg-gray-50
            transition-colors
          "
              >
                <span className="font-poppins text-black text-sm lg:text-base whitespace-nowrap">
                  Consult Our Experts
                </span>

                {/* Arrow Icon */}
                <svg
                  className="w-8 h-8 lg:w-10 lg:h-10"
                  viewBox="0 0 56 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="28.2473"
                    cy="27.0945"
                    r="15.912"
                    fill="#F6E000"
                    stroke="#F9C901"
                    strokeWidth="1.51543"
                  />
                  <path
                    d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
                    stroke="black"
                    strokeWidth="3.03086"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ================= STATS SECTION ================= */}
        <div className="w-full flex justify-center items-center pb-12 lg:pb-16">
          <div className="flex justify-center items-center gap-6 lg:gap-10 xl:gap-12">
            {[
              { title: "50+", sub: "team members" },
              { title: "380+", sub: "Completed Projects" },
              { title: "8 years", sub: "in Business" },
            ].map((item) => (
              <div
                key={item.title}
                className="
            w-[140px] h-[90px]
            md:w-[150px] md:h-[100px]
            lg:w-[170px] lg:h-[110px]
            bg-white 
            rounded-2xl lg:rounded-[28px]
            flex flex-col items-start justify-center 
            p-3 lg:p-4
            shadow-[0_8px_20px_rgba(255,200,90,0.4),_0_0_0_1px_rgba(255,200,90,0.2)]
          "
              >
                <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-black">
                  {item.title}
                </h2>
                <p className="text-xs lg:text-sm text-gray-600 mt-1">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
