"use client";
import Link from "next/link";
import { useState } from "react";
const Digitaltransformation = () => {
  const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;
  const [active, setActive] = useState(false);

  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-20 py-6">
      
      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-4">

          {/* HEADING */}
          <h2 className="order-1 sm:order-none font-['Poppins'] text-[19px] sm:text-[20px] md:text-[20px] lg:text-[24px] xl:text-[32px] text-black leading-snug font-semibold ">
            Beelockchain Your Trusted
            <span
              className="block text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #AF7211 33%, #F6E000 49%, #D7B007 63%)",
              }}
            >
              Digital Transformation Company
            </span>
          </h2>

          {/* IMAGE (MOBILE ONLY) */}
          <div className="order-2 sm:hidden w-full flex justify-center">
            <img
              src={`${ASSET_URL}/images/Digitalbuttoniimg.webp`}
              alt="trusted digital"
              className="w-full max-w-[280px] object-contain"
            />
          </div>

          {/* PARAGRAPHS */}
          <div className="order-3 sm:order-none flex flex-col gap-4">
            <p className="text-[13px] sm:text-[14px] md:text-[13px] lg:text-[16px] xl:text-[18px]  text-black font-normal font-['Poppins']">
              As a forward-thinking{" "}
              <span className="text-[#F9C901] font-semibold">
                Digital Transformation Company
              </span>
              , Beelockchain empowers organizations to achieve measurable business
              outcomes through automation, innovation, and scalable technologies.
            </p>

            <p className="text-[13px] sm:text-[14px] md:text-[13px] lg:text-[16px] xl:text-[18px]  text-black font-normal font-['Poppins']">
              With over 8 years of experience in delivering enterprise grade
              <span  className="mx-2 text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #AF7211 33%, #F6E000 49%, #D7B007 63%)",
              }}>
                <Link href="digital-transformation-services">
                  Digital transformation services and solutions
                </Link>
              </span>
              we help businesses modernize applications, optimize operations, and
              unlock new digital capabilities.
            </p>

            <p className="text-[13px] sm:text-[14px] md:text-[13px] lg:text-[16px] xl:text-[18px]  text-black font-normal font-['Poppins']">
              Our future-ready experts mitigate risks, streamline workflows, and
              solve complex digital challenges using front-line strategies.
            </p>
          </div>

          {/* BUTTON */}
          <div className="order-4 sm:order-none">
<button
      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setActive(false)}
      onMouseLeave={() => setActive(false)}
      className="group relative flex items-center gap-3 px-4 py-2 lg:px-2 lg:py-0 border border-black rounded-full overflow-hidden cursor-pointer"
    >
      {/* Expand Background */}
      <span
        className={`
        absolute inset-0 bg-gray-100 z-0
        transition-all duration-300 md:duration-500 ease-out
        ${active ? "[clip-path:circle(150%_at_50%_50%)]" : "[clip-path:circle(0%_at_50%_50%)]"}
        group-hover:[clip-path:circle(150%_at_50%_50%)]
      `}
      />

      {/* Glow */}
      <span
        className="
        absolute inset-0 z-0
        bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)]
        transition-opacity duration-300
        group-hover:opacity-0
        group-active:opacity-0
      "
      />

      {/* Text */}
      <span className="relative z-10 text-black text-[13px] md:text-[14px] lg:text-[16px] font-medium whitespace-nowrap">
        Get a Free Strategy Session
      </span>

      {/* Icon */}
      <svg
        viewBox="0 0 56 55"
        className="
        relative z-10 w-10 h-10 lg:w-14 lg:h-14
        transition-all duration-300 ease-out
        group-hover:rotate-[60deg] group-hover:translate-x-1
        group-active:rotate-[60deg] group-active:translate-x-1 group-active:scale-95
      "
      >
        <circle
          cx="28.2"
          cy="27.1"
          r="15.9"
          fill="#F6E000"
          stroke="#F9C901"
          strokeWidth="1.5"
        />
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

        {/* IMAGE (TABLET + DESKTOP) */}
        <div className="hidden sm:flex justify-center sm:justify-end">
          <img
            src={`${ASSET_URL}/images/Digitalbuttoniimg.webp`}
            alt="trusted digital"
            className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Digitaltransformation;