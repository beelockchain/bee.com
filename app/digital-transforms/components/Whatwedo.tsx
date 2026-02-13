import React from "react";

const Whatwedo = () => {
  const cards = [
    {
      id: 1,
      image: "/images/analysing.jpg", 
      title: "Analysing the operational bottlenecks",
    },
    {
      id: 2,
      image: "/images/gaps.jpg", 
      title: "Gaps between business goals and existing technology",
    },
    {
      id: 3,
      image: "/images/legacy.jpg",
      title: "Legacy system limitations",
    },
  ];

  return (
    <div className="w-full min-h-[80vh] lg:h-[80vh] bg-white flex flex-col">
      {/* Header Section - 20% */}
      <div className="h-auto lg:h-[10%] flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 lg:py-0">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center max-w-4xl leading-tight">
          <span className="text-[#f5c518]">Beelockchain's </span>
          <span className="text-[#1a1a1a]">
            transformation experts begin with a structured assessment across
            these key areas,
          </span>
        </h3>
      </div>

      {/* Cards Section - 60% */}
      <div className="h-auto lg:h-[70%] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-6 lg:py-0">
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4 sm:mb-5 md:mb-6">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              {/* Card Title */}
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-[#1a1a1a] leading-snug">
                {card.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Text Section - 20% */}
      <div className="h-auto lg:h-15%] flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 lg:py-0">
        <p className="text-sm sm:text-base md:text-lg text-[#4a4a4a] text-center max-w-4xl leading-relaxed">
          Based on this evaluation, we deliver comprehensive digital
          transformation solutions that simplify the process flow and improve
          real-time data accessibility across your organisation.
        </p>
      </div>
    </div>
  );
};

export default Whatwedo;