"use client";
import React from "react";

const items = [
  { title: "300+ Projects Delivered" },
  { title: "NDA-Protected Consultations" },
  { title: "Agile Development Process" },
  { title: "Enterprise-Grade Security" },
  { title: "Dedicated Project Managers" },
  { title: "24/7 Technical Support" },
  { title: "98% Client Retention Rate" },
];

const ContactMarquee = () => {
  return (
    <section className="w-full flex flex-col items-center py-6 md:py-10">

      {/* Heading */}
      <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[38px] text-black mb-8 md:mb-10 text-center font-bold px-4">
        Why Businesses Trust
        <span className="shine-text text-[#F5B800]"> Beelockchain</span>
      </h2>

      {/* Marquee Container */}
      <div className="w-full max-w-[1400px] relative overflow-hidden rounded-md">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_#AF7211_33%,_#F6E000_54%,_#D7B007_63%)]" />

        {/* Marquee Track */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 py-6 animate-marquee w-max px-4">

          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              className="
              flex-shrink-0
              w-[140px]
              sm:w-[180px]
              md:w-[220px]
              lg:w-[260px]
              h-[70px]
              sm:h-[80px]
              md:h-[95px]
              lg:h-[110px]
              bg-white
              rounded-xl
              md:rounded-2xl
              lg:rounded-3xl
              shadow-[0px_20px_30px_rgba(14,7,41,0.07)]
              flex items-center justify-center
              px-3 text-center
              "
            >
              <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] text-black font-semibold">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ContactMarquee;