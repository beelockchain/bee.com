import React from 'react';

const DigitalTransformationSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden h-[600px] sm:h-[400px] md:h-[400px] lg:h-[400px] xl:h-[400px] flex items-center justify-center">
      
      <div className="relative w-full md:px-5 lg:px-15 xl:px-20">
        
        <div className=" container  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 items-start px-0 sm:px-2 md:px-2 lg:px-0 xl:px-0 xl:pt-15 gap-20 sm:gap-5 lg:gap-0">
          
          {/* TEXT */}
          <div className="order-1 md:order-1 space-y-4 sm:space-y-8 md:space-y-2">
            <h2 className="font-bold text-center md:text-left lg:text-left">
              <span className="block text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px] text-[#1a1a1a]">
                Strategic
                <span  data-text="Digital Transformation" className="shine-text relative text-[#f5c518] ml-2 text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px]">
                  Digital Transformation
                </span>
              </span>

              <span data-text="Services" className="block shine-text relative text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px] text-[#f5c518]">
                Services
                <span className="text-[#1a1a1a] text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px]">
                  {" "}for Business Growth
                </span>
              </span>
            </h2>

            <p className="text-[#4a4a4a] text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] leading-relaxed sm:max-w-xl md:max-w-xl lg:max-w-lg font-semibold text-center sm:text-left lg:text-left px-2 md:px-0">
              Many organisations are struggling with fragmented infrastructure, 
              manual processes, limited data visibility, and unconnected customer 
              relationships. These challenges slow down operations, increase spending, 
              and make it difficult to scale.The Digital transformation eliminates these 
              problems and creates an organised, technology-enabled operational strategy.
            </p>
          </div>
          
          {/* IMAGE */}
          <div className="order-2 md:order-2 flex justify-center lg:justify-end xl:justify-center">
            <div className="relative w-60 sm:w-80 md:w-70 lg:w-80 xl:w-100 flex justify-center">
              <img src="assets/images/digitaltransform.png" alt="Digital Transformation Illustration" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalTransformationSection;
