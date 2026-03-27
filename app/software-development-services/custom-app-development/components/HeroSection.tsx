"use client";

import React, { useState } from "react";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <section className="w-full py-6 md:py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">

        {/* LEFT SIDE CONTENT */}
        <div className="w-full max-w-2xl flex flex-col items-start text-left space-y-6 md:space-y-8 z-10">

          {/* PNG TEXT IMAGE */}
          {/* Hidden on mobile, Visible on Tablet (md) and Desktop */}
          <div className="hidden md:flex justify-start w-full">
            <Image
              src="/assets/images/software-dev/custom-app-dev/hero-mobileapp-text.png"
              alt="Hero Text"
              width={437}
              height={91}
              className="object-contain max-w-full"
              priority
            />
          </div>

          {/* MAIN TITLE */}
          <h1 className="leading-[1.15] w-full">
            {/* LINE 1 */}
            <span className="block text-[24px] md:text-[30px] lg:text-[35px] xl:text-[48px] font-bold text-left">
              <span className="text-black">Custom </span>
              <span data-text="Mobile App" className="shine-text text-[#F5B800] relative">
                Mobile App
              </span>
            </span>

            {/* LINE 2 */}
            <span className="block text-[24px] md:text-[30px] lg:text-[35px] xl:text-[48px] font-semibold text-black text-left">
              <span data-text="Development" className="shine-text text-[#F5B800] relative">
                Development
              </span>
              <span className="text-black"> Company</span>
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-black/80 font-normal leading-tight max-w-lg w-full">
            As a leading Mobile App Development Company,{" "}
            <span className="text-yellow-500 font-bold">Beelockchain</span> provides Custom Mobile App Development
            Services combining modern technology and AI-powered solutions to solve real-world challenges and accelerate
            business success.
          </p>

          {/* BUTTON CONTAINER */}
         
          <div className="flex justify-start w-full">
            <a href="/contact-us">
              <button
                onTouchStart={() => setActive(true)}
                onTouchEnd={() => setActive(false)}
                onMouseLeave={() => setActive(false)}
                className="group relative flex items-center gap-2 px-6 py-3 border border-black rounded-full overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 active:translate-y-0 bg-white"
              >
                {/* Expand Circle Effect */}
                <span className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                  <span className="w-full h-full bg-gray-100 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />
                </span>

                {/* Glow Background */}
                <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />

                {/* Button Text & Icon */}
                <span className="relative z-10 text-black text-sm md:text-base font-medium whitespace-nowrap flex items-center gap-2">
                  Talk To Our Experts

                  <svg
                    viewBox="0 0 56 55"
                    className="relative z-10 w-6 h-6 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95"
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
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        {/* 
           Mobile: Hidden.
           Tablet (md): Visible, max-width 450px (Smaller size).
           Desktop (lg): Visible, max-width 600px (Larger size).
        */}
        <div className="hidden md:flex w-full max-w-[400px] md:max-w-[450px] lg:max-w-[600px] justify-center lg:justify-end order-first lg:order-last">
          <Image
            src="/assets/images/software-dev/custom-app-dev/hero-right-img.png"
            alt="Mobile App"
            width={600}
            height={600}
            className="w-full h-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>

      </div>
    </section>
  );
};