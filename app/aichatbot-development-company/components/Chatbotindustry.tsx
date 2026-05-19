"use client";
import Link from "next/link";

const industries = [
  "FinTech",
  "Healthcare",
  'EdTech & e-Learning',
  'Fitness',
   "Human Resource",
  "Real estate",
  "Logistics",
  "Food delivery",
  "Agritech",
  "Retail & eCommerce",
];

const industryImages = [
  "ind-icon1.webp",
  "ind-icon2.webp",
  "ind-icon3.webp",
  "ind-icon4.webp",
  "ind-icon5.webp",
  "ind-icon6.webp",
  "ind-icon7.webp",
  "ind-icon8.webp",
  "ind-icon9.webp",
  "ind-icon10.webp",
  "ind-icon11.webp",
  "ind-icon12.webp",
];

const Chatbotindustry = () => {
  const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;

  return (
    <section className="w-full bg-white pt-16 sm:py-10 lg:py-20 overflow-hidden">
      {/* MOBILE TITLE */}
      <h2 className="block md:hidden text-[20px] md:text-[21px] lg:text-[28px] xl:text-[36px] font-bold  text-center text-black mb-5">
        <span data-text="Industries" className="shine-text relative text-[#F9C901]">Industries</span>    We Serve
        
      </h2>

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-16 items-start">
        {/* LEFT – IMAGE STACK GRID */}
        <div className="industry-grid grid grid-cols-3 gap-2 cursor-pointer">
          {industryImages.map((img, i) => (
            <div
              key={i}
              className={`
        industry-item
        w-full h-full flex items-center justify-center
        transition-all duration-300 ease-in-out
        ${i % 2 === 0 ? "-rotate-2" : "rotate-2"}
      `}
            >
              <img
                src={`${ASSET_URL}/images/${img}`}
                alt="Industry"
                className="
          w-full h-full object-contain
          transition-all duration-300 ease-in-out
        "
              />
            </div>
          ))}
        </div>

        {/* RIGHT – CONTENT */}
        <div className="md:pt-2 lg:pt-0 lg:mt-10 text-left">
          {/* TABLET + DESKTOP TITLE */}
          <h2 className="hidden md:block text-[20px] md:text-[21px] lg:text-[28px] xl:text-[36px] font-bold text-black  mb-6 ">
            Industries Using
              <span data-text="Industries" className="shine-text relative text-[#F9C901]"> AI Chatbot </span>
              Solutions  
          </h2>

          <p className="text-black max-w-xl mb-10 lg:mb-10 md:mb-10 font-semibold  sm:mb-4 text-[14px] sm:text-sm md:text-[14px] lg:text-[14px] xl:text-[16px] leading-relaxed ">
           AI chatbot technology is transforming customer interaction and operational workflows across industries. Industries adopting AI chatbot solutions include:
          </p>

          {/* INDUSTRY LIST */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 md:gap-y-2 lg:gap-y-6 sm:gap-y-6 gap-x-6 sm:gap-x-2 mb-12 sm:mb-10 md:mb-10 lg:mb-20">
            {industries.map((item, i) => (
              <div
                key={i}
                className="text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px]  xl:text-[18px]  text-black underline cursor-pointer hover:text-yellow-500 transition"
              >
                {item}
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
        <div className="flex justify-center md:justify-start">
        <Link
          href="/contact-us"
          className="group cursor-pointer relative flex items-center gap-2 md:gap-2 lg:gap-3
          px-4 py-1.5 md:px-3 md:py-1.5 lg:px-6 lg:py-2
          border border-black rounded-full overflow-hidden"
        >
          {/* ripple */}
          <span className="absolute inset-0 flex items-center justify-center z-0">
            <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
          </span>

          {/* glow */}
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300" />

          {/* text */}
          <span className="relative z-10  text-black text-sm md:text-xs lg:text-base whitespace-nowrap">
            Consult Our Experts
          </span>

          {/* icon */}
          <svg
            className="relative z-10 w-10 h-10 md:w-8 md:h-8 lg:w-14 lg:h-14 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95"
            viewBox="0 0 56 55"
            fill="none"
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
        </Link>
      </div>

        </div>
      </div>
    </section>
  );
};

export default Chatbotindustry;
