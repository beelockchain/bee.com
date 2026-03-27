'use client';
import { useState } from "react";

const AppFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long does it take to develop a mobile app?",
      a: "Most mobile apps take between  8 to 16 weeks in the development process, depending on app complexity, features, platform (iOS, Android, or both), UI/UX scope, and third-party integrations. Enterprise or AI-powered apps, it may take add more weeks.",
    },
    {
      q: "Do you provide AI-powered mobile app development?",
      a: "Yes. We have an artificial intelligence developer who builds AI-powered mobile app development using machine learning, predictive analytics, AI chatbots, computer vision, and work automation.",
    },
    {
      q: "Do you work with security-sensitive apps?",
      a: "Absolutely. We specialize in security-sensitive mobile apps for fintech, healthcare, blockchain, and enterprise, implementing end-to-end encryption, APIs, compliance standards, and robust data protection practices.",
    },
    {
      q: " What is the difference between Cross-platform and Hybrid app development?",
      a: "Cross-platform apps use a single codebase (e.g., Flutter, React Native) to offer near-native performance across platforms. Hybrid apps rely on web technologies within a native wrapper and are faster to build but less performance-optimized.",
    },
    {
      q: "Do you sign the non-disclosure agreement to protect my app idea?",
      a: "Yes. We sign a legally binding NDA before project discussions to ensure complete confidentiality, protect intellectual property, and safeguard your app idea throughout the development lifecycle.",
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
                <p className="text-[11px] sm:text-[14px] md:text-[12px] lg:text-[16px] xl:text-[15px] text-black/80 leading-relaxed font-poppins">
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

export default AppFaq;