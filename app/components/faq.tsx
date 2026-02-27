'use client';
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How does Beelockchain help businesses with digital transformation?",
      a: "Beelockchain offers end-to-end digital transformation services, combining AI-driven solutions, custom software development, cloud migration, and automation. We align technology strategies with your business goals to drive measurable outcomes and sustainable growth.",
    },
    {
      q: "What industries do you serve with your digital transformation services?",
      a: "We serve a diverse range of industries, including fintech, healthcare, education, retail, logistics, and enterprise services. Our customized digital transformation solutions address industry-specific challenges and requirements.",
    },
    {
      q: "Do you provide AI and machine learning development as part of digital transformation?",
      a: "Yes. Beelockchain offers AI and machine learning development services, including intelligent automation, predictive analytics, generative AI, and data-centric solutions to enhance decision-making and operational efficiency.",
    },
    {
      q: "Can Beelockchain modernize existing software and legacy systems?",
      a: "Absolutely. We specialize in legacy system modernization by upgrading software architectures, migrating to cloud platforms, improving performance, and integrating modern technologies without disrupting your ongoing business operations.",
    },
    {
      q: "How do your DevOps and cloud services improve business performance?",
      a: "Our DevOps and cloud services enable faster deployments, improved system reliability, continuous integration, and delivery. These solutions help businesses reduce downtime, accelerate time-to-market, and improve scalability.",
    },
    {
      q: "Is blockchain development part of your digital transformation solutions?",
      a: "Yes. Beelockchain provides enterprise-grade blockchain development services as part of our digital transformation services. We help businesses enrich the security, transparency, and automation through decentralized technologies where applicable.",
    },
  ];

  return (
    <section className="w-full bg-white py-0">
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-6 xl:px-6 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 lg:gap-60 py-6">

    {/* SINGLE HEADING */}
    <div className="w-full md:w-auto flex justify-center md:justify-start">
      <h2 className="text-center md:text-left text-[24px] sm:text-[32px] md:text-[44px] lg:text-[42px] xl:text-[64px] font-bold leading-tight font-manrope text-black">
        Frequently <br className="hidden md:block" />
        Asked <br className="hidden md:block" />
        <span className="bg-gradient-to-r from-black via-black to-black/50 bg-clip-text text-transparent">
          Questions
        </span>
      </h2>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex-1 flex flex-col gap-4">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="relative rounded-[14px] p-[1px] bg-[#646464] cursor-pointer"
          >
            <div
              className="bg-[#fafafa] rounded-[13px] px-5 py-4"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <button className="w-full flex justify-between items-center gap-6 text-left cursor-pointer">
                <p className="text-black text-[11px] sm:text-[14px] md:text-[12px] lg:text-[16px] xl:text-[15px] font-manrope font-semibold">
                  {item.q}
                </p>

                {isOpen ? (
                  <svg width="16" height="3" viewBox="0 0 16 3" className="flex-none">
                    <path d="M1 1H15" stroke="black" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" className="flex-none">
                    <path d="M8 1V15M1 8H15" stroke="black" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-50 mt-6" : "max-h-0"}`}>
                <p className="text-[11px] sm:text-[14px] md:text-[12px] lg:text-[16px] xl:text-[15px] text-[#646464] leading-relaxed font-poppins">
                  {item.a}
                </p>
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

export default FAQSection;