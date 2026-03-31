"use client";

import React, { useState } from "react";

const PillButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="group relative flex items-center gap-2 px-2 mt-2 py-1 md:py-1 lg:px-4 lg:py-0 border border-black rounded-full overflow-hidden cursor-pointer"
  >
    {/* Expand circle */}
    <span className="absolute inset-0 flex items-center justify-center z-0">
      {/* <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" /> */}
   <span className="absolute inset-0 
bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] 
group-hover:opacity-0 group-active:opacity-0 
transition-opacity duration-300 z-0" />
    </span>

    {/* Radial glow */}
    <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />

    <span className="relative z-10 text-black text-sm font-poppins  whitespace-nowrap transition-colors">
      {label}
    </span>

    <svg
      viewBox="0 0 56 55"
      aria-hidden="true"
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
);
export const HeroSectionDevops = () => {
  const [active, setActive] = useState(false);

  return (
<section
  className="
    w-full py-6 md:py-16 relative
    bg-no-repeat bg-center bg-cover
    bg-none md:bg-[url('/assets/images/devops/devops-hero-bg.png')]
  "
>
<div className="w-full px-4 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 lg:gap-4">
        {/* LEFT SIDE CONTENT */}
        <div className="w-full max-w-2xl flex flex-col items-start text-left space-y-4  z-10">

          {/* PNG TEXT IMAGE */}
          <div className="flex justify-start w-full">
            <img
              src="/assets/images/devops/devops-text.png"
              alt="Hero Text"
              className="object-contain max-w-full"
            />
          </div>

          {/* TITLE */}
          <h1 className="leading-[1.15] w-full">
            <span className="block text-[24px] md:text-[30px] lg:text-[35px] xl:text-[48px] font-bold">
              <span className="text-[#F5B800]">DevOps Development</span>
            </span>

            <span className="block text-[24px] md:text-[30px] lg:text-[35px] xl:text-[48px] font-semibold text-black">
              Company
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-[14px] md:text-[13px] lg:text-[14px] xl:text-[16px] text-black/80 font-medium leading-tight  font-poppins">
            Beelockchain is a leading AI-powered DevOps development company that helps organizations automate software delivery and enhance deployment reliability with robust CI/CD pipelines. Our cloud-native DevOps expertise strengthens infrastructure security across modern application environments.
          </p>

          {/* BUTTON */}
          <div className="flex justify-start w-full">
                       <PillButton label="Talk To Our Experts" />

          </div>
        </div>
      </div>
    </section>
  );
};