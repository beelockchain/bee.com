"use client";
import React from "react";

const items = [
  { title: "Projects Delivered" },
  { title: "NDA-Protected Consultations" },
  { title: "Agile Development Process" },
  { title: "Enterprise-Grade Security" },
  { title: "Dedicated Project Managers" },
  { title: "98% Client Retention Rate" },
  { title: "24/7 Technical Support" },
];

const ContactMarquee = () => {
  return (
    <section className="w-full flex flex-col items-center py-5">
      {/* Heading */}
      <h2 className="text-[23px] md:text-[25px] lg:text-[35px] xl:text-[38px] text-black mb-10 text-center font-bold">
        Why Businesses Trust
        <span data-text="Services" className="shine-text text-[#F5B800] relative">
          {" "}
          Beelockchain
        </span>
      </h2>

      {/* Marquee Container */}
      <div className="w-full max-w-[1440px] h-30 md:h-40 relative overflow-hidden rounded-md">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_#AF7211_33%,_#F6E000_54%,_#D7B007_63%)]" />{" "}
        {/* Marquee Track */}
        <div className="absolute flex gap-6 items-center h-full animate-marquee px-6">
          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              className="w-40 h-20 md:w-60 md:h-28 p-3.5 bg-white rounded-2xl md:rounded-3xl shadow-[0px_39px_40px_0px_rgba(14,7,41,0.07)] flex flex-col justify-center items-center"
            >
              <div className="text-center font-poppins">
                {item.title && (
                  <div className="text-[13px] sm:text-[14px] md:text-[13px] lg:text-[16px] xl:text-[18px]  text-black font-medium font-['Poppins']">
                    {item.title}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactMarquee;
