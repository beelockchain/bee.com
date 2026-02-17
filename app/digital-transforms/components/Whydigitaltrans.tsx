import React from "react";

const WhyDigitalTransformation = () => {
  return (
    <div className="w-full relative bg-white py-16 lg:py-72 overflow-hidden">
      {/* Background SVG */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover opacity-50"
        style={{
          backgroundImage: "url('assets/images/Whydigitrans.svg')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12">
          <span className="text-[#1a1a1a]">Why </span>
          <span className="text-[#f5c518]">Digital Transformation </span>
          <span className="text-[#1a1a1a]">Matters Today</span>
        </h2>

        {/* First Paragraph */}
        <p className="text-sm sm:text-base md:text-md text-[#1a1a1a] text-center leading-relaxed mb-6">
          Today's businesses are expected to move faster, work smarter, and
          provide better experiences in an increasingly digital world. When
          organizations depend on manual processes with outdated technology, it
          becomes difficult to adapt to changing customer expectations and
          market demands.
          <span className="text-[#f5c518] font-medium">Beelockchain</span>, a
          digital transformation service provider, helps businesses address
          these challenges by building structured, digitally driven business
          operations with a strong focus on customer-centric solutions.
        </p>

        {/* Second Paragraph */}
        <p className="text-sm sm:text-base md:text-md text-[#1a1a1a] text-center leading-relaxed">
          <span className="text-[#f5c518] font-medium">
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