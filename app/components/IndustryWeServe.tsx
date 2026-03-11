"use client";
import { useState } from "react";
const industries = [
  "Fintech",
  "Healthcare",
  "Education",
  "Insurance",
  "Hotel",
  "Manufacturing",
  "Logistics",
  "Entertainment",
  "Real Estate",
  "Social Networking",
  "Ecommerce",
  "Supply Chain",
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

const IndustryWeServe = () => {
  const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;
    const [active, setActive] = useState(false);

  return (
    <section className="w-full bg-white py-10  overflow-hidden">
      {/* MOBILE TITLE */}
      <h2 className="block md:hidden font-['Poppins'] text-[20px] sm:text-[20px] md:text-[20px] lg:text-[26px] xl:text-[34px] text-black leading-snug font-semibold   text-center text-black mb-8 ">
        Industries We Serve
      </h2>

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-16 items-start">
        {/* LEFT – IMAGE STACK GRID */}
        <div className="industry-grid grid grid-cols-3 gap-2 cursor-pointer">
          {industryImages.map((img, i) => (
      //       <div
      //         key={i}
      //         className={`
      //   industry-item
      //   w-full h-full flex items-center justify-center
      //   transition-all duration-300 ease-in-out
      //   ${i % 2 === 0 ? "-rotate-2" : "rotate-2"}
      // `}
      //       >
      //         <img
      //           src={`${ASSET_URL}/images/${img}`}
      //           alt="Industry"
      //           className="
      //     w-full h-full object-contain
      //     transition-all duration-300 ease-in-out
      //   "
      //         />
      //       </div>


     <div
  key={i}
  className={`
    relative
    w-full h-full flex items-center justify-center
    transition-all duration-500 ease-out
    transform
    ${i % 2 === 0 ? "-rotate-2" : "rotate-2"}

    group-hover:opacity-50
    hover:!opacity-100
    hover:rotate-0
    hover:scale-110
    hover:z-20
  `}
>
  {/* Glow Layer */}
  <span
    className="
      absolute inset-0 rounded-xl
      bg-yellow-400/20
      blur-xl
      opacity-0
      transition-all duration-500
      hover:opacity-100
    "
  />

  <img
    src={`${ASSET_URL}/images/${img}`}
    alt="Industry"
    className="
      relative
      w-full h-full object-contain
      transition-all duration-500
      hover:drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)]
    "
  />
</div>
          ))}
        </div>

        {/* RIGHT – CONTENT */}
        <div className="md:pt-2 lg:pt-0 lg:mt-10 text-left">
          {/* TABLET + DESKTOP TITLE */}
          <h2 className="hidden md:block text-[19px] sm:text-[20px] md:text-[20px] lg:text-[26px] xl:text-[34px] font-bold text-black  mb-6 ">
            Industries We Serve
          </h2>

          <p className="text-black max-w-xl mb-10 lg:mb-20 md:mb-10  sm:mb-4 text-sm sm:text-sm md:text-[14px] lg:text-lg leading-relaxed font-normal font-['Poppins']">
            Beelockchain tackles the world’s biggest challenges by building
            great digital products and delivering customized services that help
            businesses overcome challenges and reach their goals.
          </p>

          {/* INDUSTRY LIST */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 md:gap-y-2 lg:gap-y-6 sm:gap-y-6 gap-x-6 sm:gap-x-2 mb-12 sm:mb-10 md:mb-10 lg:mb-20">
            {industries.map((item, i) => (
              <div
                key={i}
                className="text-[12px] sm:text-[12px] md:text-[12px]  lg:text-[18px]  font-[Poppins] text-black underline cursor-pointer hover:text-yellow-500 transition"
              >
                {item}
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="flex justify-center md:justify-start">
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
              Consult Our Experts
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
      </div>
    </section>
  );
};

export default IndustryWeServe;
