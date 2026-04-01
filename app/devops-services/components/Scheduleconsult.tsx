"use client";
import { useState, useCallback } from "react";


const Scheduleconsult = () => {
    const [active, setActive] = useState(false);
  return (
<section className="w-full bg-gradient-to-t from-[#dfdfdf] via-[#EDEDED] to-[#FFFFFF] pb-5 px-4">
          {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mt-10 mb-12">
        <p className="text-[#000000] text-[14px] md:text-[13px] xl:text-[16px] font-semibold">
         Improve your software delivery lifecycle with Beelockchain’s client-first DevOps consulting services designed to support scalable infrastructure & continuous deployment.
        </p>
          <div className="flex justify-center my-3">
          <a
            href="/contact-us"
            onTouchStart={() => setActive(true)}
            onTouchEnd={() => setActive(false)}
            onMouseLeave={() => setActive(false)}
            className="group relative flex items-center gap-3 px-4 py-2 lg:px-4 lg:py-0 border border-black rounded-full overflow-hidden cursor-pointer"
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
              Schedule a DevOps Consultation
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
          </a>

        </div>
      </div>

    </section>
  );
};

export default Scheduleconsult;