"use client";

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
  "ind-icon1.png",
  "ind-icon2.png",
  "ind-icon3.png",
  "ind-icon4.png",
  "ind-icon5.png",
  "ind-icon6.png",
  "ind-icon7.png",
  "ind-icon8.png",
  "ind-icon9.png",
  "ind-icon10.png",
  "ind-icon11.png",
  "ind-icon12.png",
];

const IndustryWeServe = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-10 lg:py-20 overflow-hidden">
      {/* MOBILE TITLE */}
      <h2 className="block md:hidden text-3xl font-medium font-[Poppins] text-center text-black mb-8">
        Industries We Serve
      </h2>

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start">
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
        src={`/assets/images/${img}`}
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
        <div className="md:pt-2 lg:pt-0 mt-10">
          {/* TABLET + DESKTOP TITLE */}
          <h2 className="hidden md:block text-3xl lg:text-5xl font-medium text-black font-[Poppins] mb-6 ">
            Industries We Serve
          </h2>

          <p className="text-black max-w-xl mb-10 md:mb-6  lg:mb-20  sm:mb-14 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[20px] leading-relaxed">
            Beelockchain tackles the world’s biggest challenges by building great
            digital products and delivering customized services that help
            businesses overcome challenges and reach their goals.
          </p>

          {/* INDUSTRY LIST */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 md:gap-y-2 lg:gap-y-6 sm:gap-y-6 gap-x-6 sm:gap-x-2 mb-12 sm:mb-10 lg:mb-20">
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
         <button
  className=" cursor-pointer
    relative flex items-center
    gap-2 md:gap-2 lg:gap-3
    px-4 py-1.5 md:px-3 md:py-1.5 lg:px-6 lg:py-2
    border border-black rounded-full
    overflow-hidden
  "
>
  {/* Soft center glow */}
  <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)]" />

  {/* Text */}
  <span className="relative z-10 font-poppins text-black text-sm md:text-xs lg:text-base whitespace-nowrap">
    Consult Our Experts
  </span>

  {/* Icon */}
  <svg
    className="relative z-10 w-10 h-10 md:w-8 md:h-8 lg:w-14 lg:h-14"
    viewBox="0 0 56 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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
</button>

        </div>
      </div>
    </section>
  );
};

export default IndustryWeServe;
