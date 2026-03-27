import Image from "next/image";

// Replace these with your actual award image paths
const awards = [
  { src: "/assets/images/beelock-reward1.png", alt: "Clutch Top Rated" },
  { src: "/assets/images/beelock-reward2.png", alt: "GoodFirms Top Mobile App Development Company" },
  { src: "/assets/images/beelock-reward3.png", alt: "Clutch Top Company" },
  { src: "/assets/images/beelock-reward4.png", alt: "Top Software Developer" },
  { src: "/assets/images/beelock-reward5.png", alt: "GoodFirms Top Mobile Development Company" },
];

export default function AwardsSection() {
  return (
    
    <section className="w-full bg-white pb-5 px-4">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mt-10 mb-12">
        <h2 className="text-[18px] md:text-2xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
          Awards &{" "}
          <span data-text="Recognition Milestones" className="shine-text relative text-[#f5c518]">Recognition Milestones</span>{" "}
          That
          <br />
          Reflect Our Commitment to Quality
        </h2>
        <p className="text-[#000000] text-[14px] md:text-[13px] xl:text-[16px] font-semibold">
          Our recognitions reflect our dedication to excellence and innovation in software and mobile app development services.
          We create solutions that provide long-term value for their business. This approach enables us to consistently exceed
          client expectations while maintaining high-quality standards.
        </p>
      </div>

      {/* Awards Grid */}
      {/* Desktop: 5 in a row | Mobile: 3 first row, 2 second row centered */}
      <div className="max-w-5xl mx-auto">

        {/* Desktop layout: all 5 in one row */}
        <div className="hidden md:flex items-center justify-center gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-[#F5F7F9]  border border-gray-100 rounded-xl p-5 w-40 h-40 md:w-30 md:h-30 xl:w-40 xl:h-40 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={award.src}
                alt={award.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Mobile layout: 3 on first row, 2 centered on second row */}
        <div className="flex flex-col gap-4 md:hidden">
          {/* First row: 3 items */}
          <div className="flex items-center justify-center gap-4">
            {awards.slice(0, 3).map((award, index) => (
              <div
                key={index}
                className="flex items-center justify-center  border border-gray-100 rounded-xl  w-20 h-20"
              >
                <img
                  src={award.src}
                  alt={award.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Second row: 2 items centered */}
          <div className="flex items-center justify-center gap-4">
            {awards.slice(3, 5).map((award, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-gray-50 border border-gray-100 rounded-xl  w-20 h-20"
              >
                <img
                  src={award.src}
                  alt={award.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}