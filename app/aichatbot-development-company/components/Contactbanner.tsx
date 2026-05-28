"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function ContactBanner() {
    const [active, setActive] = useState(false);
  
  return (
    <section className="w-full px-4 py-8 sm:px-5 md:px-6 lg:px-8 xl:px-0 bg-[#F9FAFB]">
      <div className="relative w-full  overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[100px] xl:min-h-[100px] flex items-center justify-center">

        {/* Background Image */}
        <Image
          src="/assets/images/aichatbot/aichatbot-contact-banner.png"
          alt="Contact Banner Background"
          fill
          className="object-conatain"
          priority
          quality={100}
        />
        {/* Content */}
        <div className="relative z-[3] flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 py-10 sm:py-12 md:py-14 lg:py-16 xl:py-10 w-full">

          {/* Heading */}
          <h2 className="font-extrabold text-white text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-[36px] leading-tight mb-3 sm:mb-4 md:mb-4 lg:mb-5 tracking-normal">
            BUILD YOUR{" "}
            <span
            className="
              bg-gradient-to-b
              from-[#DFAB05]
              to-[#B37A0C]
              bg-clip-text
              text-transparent
              font-extrabold
            "
          >
            AI CHATBOT SOLUTION
          </span>{" "}
            TODAY
          </h2>

          {/* Subtitle */}
          <p className="text-white text-[12px] sm:text-[13px] md:text-[13px] lg:text-[14px] xl:text-[16px] font-medium leading-normal tracking-wide max-w-[280px] sm:max-w-[440px] md:max-w-[560px] lg:max-w-[680px] xl:max-w-[760px] mb-6 sm:mb-7 md:mb-5">
            AI chatbot technology is transforming how businesses communicate with
            customers and automate digital interactions. If you want to build an
            intelligent chatbot solution tailored to your business needs, our
            team is ready to help.
          </p>

          {/* CTA Button */}
            <Link
              href="/contact-us"
              target="_blank"
              onTouchStart={() => setActive(true)}
              onTouchEnd={() => setActive(false)}
              onMouseLeave={() => setActive(false)}
              className="group relative inline-flex min-h-9 items-center justify-center gap-1 overflow-hidden rounded-full border border-black bg-gradient-to-b from-yellow-400 to-yellow-700 px-3 py-1.5 text-black outline outline-1 outline-offset-[-1px] outline-black sm:min-h-11 sm:gap-1 sm:px-4 sm:py-3"
            >
              <span
                className={`absolute inset-0 bg-white/20 transition-all duration-300 ease-out ${
                  active
                    ? "[clip-path:circle(150%_at_50%_50%)]"
                    : "[clip-path:circle(0%_at_50%_50%)]"
                } group-hover:[clip-path:circle(150%_at_50%_50%)]`}
              />
              <span className="relative z-10 text-center font-poppins text-[11px] font-medium leading-4 sm:text-[14px] sm:leading-5">
                Consult Our AI Engineer
              </span>
              <svg
                className="relative z-10 h-5 w-5 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 sm:h-7 sm:w-7"
                viewBox="0 0 56 55"
              >
                <circle
                  cx="28"
                  cy="27"
                  r="16"
                  fill="#F6E000"
                  stroke="#F9C901"
                  strokeWidth="1.5"
                />
                <path
                  d="M31 22L33 29M31 22L24 24M31 22L25 33"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </Link>

        </div>
      </div>
    </section>
  );
}
