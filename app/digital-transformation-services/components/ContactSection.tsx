import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F9FAFB] sm:px-5 md:px-5 md:py-16 lg:pb-10">
      <div className="max-w-7xl mx-auto">

        {/* Desktop */}
        <div
          className="hidden sm:block md:block 
           rounded-[15px] px-12 py-10 sm:py-5 md:py-5 lg:px-16 lg:py-8 xl:px-10 xl:py-8 
           relative overflow-hidden
            bg-[#EFEFEF]
               transition-all duration-300 ease-out
                 border-1 border-[#E1E1E1]
                shadow-[-3px_-6px_16px_0_rgba(253,253,253,0.69),9px_5px_14px_0_rgba(0,0,0,0.15)]
                
                /* HOVER */
                hover:bg-[#f5c518ac]
                hover:border-[#E1E1E1]
                hover:shadow-[inset_-3px_-6px_16px_0_rgba(253,253,253,0.69),inset_9px_5px_14px_0_rgba(0,0,0,0.15)]
                hover:scale-[1.02]

                /* ACTIVE */
                active:scale-[0.99]

                /* FOCUS */
                focus:shadow-[-3px_-6px_16px_0_rgba(253,253,253,0.69),9px_5px_14px_0_rgba(0,0,0,0.15)]
           "

        >
          <div className="flex items-center justify-between">
            <div className="max-w-3xl">

              <h4 className="text-[#0a0e1a] text-4xl sm:text-[25px] md:text-[25px] lg:text-[30px] xl:text-[35px] font-manrope font-bold mb-4 tracking-tight">
                Begin Your Transformation Journey
              </h4>

              <p className="text-[#0a0e1a] xl:max-w-5xl text-base sm:text-[12px] md:text-[11px] lg:text-[14px] xl:text-[15px] opacity-90 leading-relaxed">
                Begin your transformation journey with Beelockchain’s skilled experts. 
                Build a future-ready organization using a structured digital business 
                transformation service approach.
              </p>

            </div>

            <div className="ml-8">
              <button className="bg-[#0a0e1a] text-white px-8 py-3 rounded-full font-medium text-base hover:bg-[#151b2b] transition-colors duration-300 whitespace-nowrap sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div
          className="sm:hidden md:hidden font-manrope px-7 py-10 text-center tracking-tight
          bg-[#EFEFEF]
               transition-all duration-300 ease-out
                 border-1 border-[#E1E1E1]
                shadow-[-3px_-6px_16px_0_rgba(253,253,253,0.69),9px_5px_14px_0_rgba(0,0,0,0.15)]
                
                /* HOVER */
                hover:bg-[#f5c518ac]
                hover:border-[#E1E1E1]
                hover:shadow-[inset_-3px_-6px_16px_0_rgba(253,253,253,0.69),inset_9px_5px_14px_0_rgba(0,0,0,0.15)]
                hover:scale-[1.02]

                /* ACTIVE */
                active:scale-[0.99]

                /* FOCUS */
                focus:shadow-[-3px_-6px_16px_0_rgba(253,253,253,0.69),9px_5px_14px_0_rgba(0,0,0,0.15)]
          "

        >
          <h2 className="text-[#0a0e1a] text-[25px] font-bold mb-4">
            Begin Your Transformation Journey
          </h2>

          <p className="text-[#0a0e1a] text-[12px] opacity-90 leading-relaxed mb-8">
            Begin your transformation journey with Beelockchain’s skilled experts. 
            Build a future-ready organization using a structured digital business 
            transformation service approach.
          </p>

          <button className="bg-[#0a0e1a] text-white px-8 py-3 rounded-full font-medium text-[13px] hover:bg-[#151b2b] transition-colors duration-300 w-full max-w-xs mx-auto block">
            Get Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;