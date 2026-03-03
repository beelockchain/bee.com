"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

export const HeroSection = () => {
  const [active, setActive] = useState(false);

  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* LEFT SIDE */}
        <div className="max-w-2xl w-full space-y-8 text-center lg:text-left">
          {/* 🔥 PNG TEXT IMAGE (TOP CENTER) */}
          <div className="flex justify-center lg:justify-center">
            <Image
              src="/assets/images/software-dev/custom-app-dev/hero-mobileapp-text.png"
              alt="Hero Text"
              width={437}
              height={91}
              className="object-contain"
              priority
            />
          </div>

          <h1 className="mb-5 leading-[1.15]">
            {/* LINE 1 */}
            <span
              className="block text-[20px] md:text-[25px] lg:text-[35px] xl:text-[48px] font-bold text-center md:text-left">
              <span className="text-black">Custom </span>

              <span data-text="Mobile App" className="shine-text text-[#F5B800] relative">
                Mobile App
              </span>
            </span>

            {/* LINE 2 */}
            <span className=" block text-[20px] md:text-[25px] lg:text-[35px] xl:text-[48px] font-bold  text-black text-center md:text-left">
              <span data-text="Mobile App" className="shine-text text-[#F5B800] relative">
                Development
              </span>
              <span className="text-black"> Company</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-[13px] sm:text-[14px] md:text-[13px] lg:text-[16px] xl:text-[18px]  text-black font-normal font-['Poppins']">
            As a leading Mobile App Development Company,{" "}
            <span className="text-yellow-400 font-semibold">Beelockchain</span> provides Custom Mobile App Development
            Services combining modern technology and AI-powered solutions to solve real-world challenges and accelerate
            business success.
          </p>

          {/* Button */}
          <div>
            <button
              onTouchStart={() => setActive(true)}
              onTouchEnd={() => setActive(false)}
              onMouseLeave={() => setActive(false)}
              className="group relative flex items-center gap-2 px-4 py-2 lg:px-4 lg:py-0 border border-black rounded-full overflow-hidden cursor-pointer"
            >
              {/* Expand Circle */}
              <span className="absolute inset-0 flex items-center justify-center z-0">
                <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
              </span>

              {/* Glow */}
              <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />

              {/* Text */}
              <span className="relative z-10 text-black text-sm whitespace-nowrap transition-colors">
                Talk To Our Experts
              </span>

              {/* Icon */}
              <svg
                viewBox="0 0 56 55"
                className="relative z-10 w-10 h-10 lg:w-14 lg:h-14 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95"
              >
                <circle cx="28.2" cy="27.1" r="15.9" fill="#F6E000" stroke="#F9C901" strokeWidth="1.5" />
                <path
                  d="M31.3 22.1L33.2 29.4M31.3 22.1L24.1 24.1M31.3 22.1L25.1 32.8"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full max-w-[600px]">
          <Image
            src="/assets/images/software-dev/custom-app-dev/hero-right-img.png"
            alt="Mobile App"
            width={600}
            height={650}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};
