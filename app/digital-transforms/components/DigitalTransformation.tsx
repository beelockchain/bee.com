import React from 'react';

const DigitalTransformationSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden h-[600px] items-center flex justify-center">
      {/* Subtle grain texture overlay */}
      
      
      <div className="relative w-full lg:w-[80%] xl:w-[85%]  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start px-0 md:px-2 lg:px-0 xl:px-1 xl:pt-15 gap-20 lg:gap-0">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 ">
            <h2 className="font-bold text-center lg:text-left">
              <span className="block text-[16px] md:text-2xl lg:text-xl xl:text-[32px] text-[#1a1a1a]">
                STRATEGIC
                <span className="text-[#f5c518] ml-2 text-[16px] md:text-2xl lg:text-xl xl:text-[32px]">DIGITAL TRANSFORMATION</span>
              </span>
              <span className="block text-[17px] md:text-2xl lg:text-xl xl:text-[32px] text-[#f5c518]">
                SERVICES
                <span className="text-[#1a1a1a] text-[17px] md:text-2xl lg:text-xl xl:text-[32px]"> FOR BUSINESS GROWTH</span>
              </span>
            </h2>
            
            <p className="text-[#4a4a4a] text-[14px] md:text-md lg:text-[14px] xl:text-xl leading-relaxed px-3 sm:max-w-xl md:max-w-xl lg:max-w-xl font-semibold text-left lg:text-left">
              Many organisations are struggling with fragmented infrastructure, 
              manual processes, limited data visibility, and unconnected customer 
              relationships. These challenges slow down operations, increase spending, 
              and make it difficult to scale. Digital transformation eliminates these 
              problems and creates an organised, technology-enabled operational strategy.
            </p>
          </div>
          
          {/* 3D Illustration */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-60 sm:w-80 md:w-50 lg:w-80 xl:w-full  flex justify-center">
             <img src="assets/images/digitaltransform.png" alt="Digital Transformation Illustration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformationSection;