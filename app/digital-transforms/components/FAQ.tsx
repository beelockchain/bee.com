'use client';
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

const faqs = [
    {
      q: "What challenges should I expect during digital transformation?",
      a: "Common challenges include adapting to the new technologies, managing change across teams, and integrating legacy systems. Beelockchain helps businesses address these challenges through structured planning, hands-on support, and training throughout the transformation process.",
    },
    {
      q: "How long does it usually take to implement the digital transformation services?",
      a: "We serve a diverse range of industries, including fintech, healthcare, education, retail, logistics, and enterprise services. Our customized digital transformation solutions address industry-specific challenges and requirements.",
    },
    {
      q: "How do I find the best digital transformation solutions provider?",
      a: "Yes. Beelockchain offers AI and machine learning development services, including intelligent automation, predictive analytics, generative AI, and data-centric solutions to enhance decision-making and operational efficiency.",
    },
    {
      q: "What are digital transformation services, and how do they help my business/organization?",
      a: "Absolutely. We specialize in legacy system modernization by upgrading software architectures, migrating to cloud platforms, improving performance, and integrating modern technologies without disrupting your ongoing business operations.",
    },
    {
      q: "Is digital transformation fit for small- and medium-sized businesses?",
      a: "Our DevOps and cloud services enable faster deployments, improved system reliability, continuous integration, and delivery. These solutions help businesses reduce downtime, accelerate time-to-market, and improve scalability.",
    },
  ];

  return (
    <section className="w-full bg-[#fff]  py-0 h-[60vh] flex items-center">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row  gap-2 md:gap-[30px] lg:gap-[100px] text-white">

        {/* LEFT SIDE — Desktop only */}
        <div className="hidden md:flex md:w-[40%] flex-col gap-10">
          <h2 className="text-[20px] sm:text-[40px] md:text-[44px]   lg:text-[64px] xl:text-[58px] font-bold leading-tight font-manrope   text-black">
            Frequently <br /> Asked <br />
            <span className="bg-gradient-to-r from-black via-black to-black/50 bg-clip-text text-transparent"  >
              Questions
            </span>
          </h2>
        </div>
        {/* MOBILE HEADING */}
      <div className="md:hidden text-center mt-4 mb-6">
        <h2 className="text-3xl font-bold font-manrope text-black">
          Frequently Asked <br />
          <span className="bg-gradient-to-r text-black from-black via-black to-black/50 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
      </div>


        {/* RIGHT SIDE — FAQ */}
        <div className="w-full md:w-[60%] flex flex-col gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="relative rounded-[14px] p-[1px] bg-[#646464] cursor-pointer">
                <div className="bg-[#fafafa] rounded-[13px] px-5 py-4"
                 onClick={() => setOpenIndex(isOpen ? null : index)}>
                  <button
                    className="w-full flex justify-between items-center gap-6 text-left cursor-pointer "
                  >
                    <p className="text-black text-[10px] sm:text-[14px] md:text-[12px]  xl:text-[15px] lg:text-[16px] font-manrope">{item.q}</p>

                    {isOpen ? (
                      <svg width="16" height="3" viewBox="0 0 16 3">
                        <path d="M1 1H15" stroke="black" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16">
                        <path
                          d="M8 1V15M1 8H15"
                          stroke="black"
                          strokeOpacity="0.6"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-50 mt-6" : "max-h-0"}`}>
                    <p className="text-[10px] sm:text-[14px] md:text-[12px]  xl:text-[15px] lg:text-[16px] text-[#646464] leading-relaxed font-poppins">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
