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
    <section className="w-full bg-white py-5 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT – IMAGE STACK GRID */}
        <div className="grid grid-cols-3 gap-2">
          {industryImages.map((img, i) => (
            <div
              key={i}
              className={`w-full h-full flex items-center justify-center
          ${i % 2 === 0 ? "-rotate-2" : "rotate-2"}`}
            >
              <img
                src={`/assets/images/${img}`}
                alt="Industry"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* RIGHT – CONTENT */}
        <div>
          <h2 className="text-5xl font-medium font-[Poppins] mb-6">
            Industries We Serve
          </h2>

          <p className="text-black max-w-xl  mb-14 leading-6 text-[20px]">
            Beelockchain tackles the world’s biggest challenges by building
            great digital products and delivering customized services that help
            businesses overcome challenges and reach their goals.
          </p>

          {/* Industry list */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-10 mb-20 mt-30">
            {industries.map((item, i) => (
              <div
                key={i}
                className="text-xl font-[Poppins] underline cursor-pointer hover:text-yellow-500 transition"
              >
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="relative flex items-center gap-3 px-6 py-2 border border-black rounded-full overflow-hidden">
            {/* Soft center glow */}
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)]" />

            {/* Content */}
            <span className="relative z-10 font-[Poppins]">
              Consult Our Experts
            </span>
            <svg
              width="56"
              height="55"
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
