import React from "react";

const Whatwedo = () => {
  const cards = [
    {
      id: 1,
      image: "assets/images/digi-trans-sub-img.svg",
      title: "Analysing the operational bottlenecks",
    },
    {
      id: 2,
      image: "assets/images/Digi-trans-sun-img2.svg",
      title: "Gaps between business goals and existing technology",
    },
    {
      id: 3,
      image: "assets/images/Digi-trans-sub-img2.svg",
      title: "Legacy system limitations",
    },
  ];

  return (
    <div className="w-full bg-white flex flex-col py-12 lg:pt-16 xl:pt-16">
      {/* Header Section */}
      <div className="flex items-center justify-center px-4 sm:px-6 md:px-8 mb-10 lg:mb-14">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center max-w-4xl leading-tight">
          <span className="text-[#f5c518]">Beelockchain's </span>
          <span className="text-[#1a1a1a]">
            transformation experts begin with a structured assessment across
            these key areas,
          </span>
        </h3>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 mb-10 lg:mb-14">
        <div className="w-full max-w-6xl  md:max-w-6xl lg:max-w-5xl xl:max-w-5xl flex flex-col lg:flex-row items-stretch justify-center gap-6 md:gap-8 lg:gap-8 xl:gap-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`bg-[#EAEAEA] rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col ${
                card.id === 2 ? "w-full sm:w-100" : "w-full sm:w-72 lg:w-64 xl:w-70"
              }`}
            >
              {/* Image Container - Fixed height instead of aspect-square */}
              <div className="w-full h-48 sm:h-52 md:h-56 rounded-xl overflow-hidden bg-gray-100 mb-4 sm:mb-5 md:mb-6">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              {/* Card Title - flex-grow to push content and equalize height */}
              <h4 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-[20px] font-semibold text-[#1a1a1a] leading-snug mt-auto">
                {card.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Text Section */}
      <div className="flex items-center justify-center px-4 sm:px-6 md:px-8">
        <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-[18px] text-[#000000] text-center max-w-4xl font-semibold">
          Based on this evaluation, we deliver comprehensive digital
          transformation solutions that simplify the process flow and improve
          real-time data accessibility across your organisation.
        </p>
      </div>
    </div>
  );
};

export default Whatwedo;