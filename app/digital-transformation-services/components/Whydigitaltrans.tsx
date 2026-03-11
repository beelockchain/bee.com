import React from "react";

const WhyDigitalTransformation = () => {
  return (
    <div className="w-full relative bg-white py-16 lg:py-72 xl:pt-42 xl:pb-62 overflow-hidden">
      
      {/* Desktop Background */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover opacity-50 hidden md:hidden lg:block xl:block"
        style={{
          backgroundImage: "url('assets/images/Whydigitrans.png')",
        }}
      />

      {/* Mobile Background */}
      <div
        className="absolute inset-0 w-full h-full bg-repeat  bg-contain opacity-50 block md:block lg:hidden xl:hidden"
        style={{
          backgroundImage: "url('/assets/images/digital-transform-mobile.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:p-8 lg:px-8 xl:px-8">
        {/* Heading */}
        <h2 className="text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px] font-bold text-center mb-4 lg:mb-7">
          <span className="text-[#1a1a1a]">Why </span>
          <span data-text="Digital Transformation" className="shine-text relative text-[#F9C901]">Digital Transformation </span>
          <span className="text-[#1a1a1a]">Matters Today</span>
        </h2>

        {/* First Paragraph */}
        <p className="text-[13px] p-1 sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] text-[#1a1a1a] text-center leading-relaxed mb-3 font-semibold lg:px-10 xl:px-50">
          Today's businesses are expected to move faster, work smarter, and
          provide better experiences in an increasingly digital world. When
          organizations depend on manual processes with outdated technology, it
          becomes difficult to adapt to changing customer expectations and
          market demands.
          <span data-text="Beelockchain" className=" text-[#f5c518] font-medium"> Beelockchain</span>, a
          digital transformation service provider, helps businesses address
          these challenges by building structured, digitally driven business
          operations with a strong focus on customer-centric solutions.
          
        </p>

        {/* Second Paragraph */}
        <p className="text-[13px] p-1 sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] text-[#1a1a1a] text-center font-semibold leading-relaxed lg:px-25 xl:px-60">
          <span data-text="Digital transformation" className="text-[#f5c518] font-medium  relative">
            Digital transformation
          </span>{" "}
          to you can modernise systems, automating workflows, and improving
          access to data, operate more efficiently, strengthen security, and
          deliver consistent customer-focused digital experiences. This leads to
          faster decision-making, greater agility, and sustainable growth in a
          rapidly evolving digital environment.
        </p>
      </div>
    </div>
  );
};

export default WhyDigitalTransformation;
