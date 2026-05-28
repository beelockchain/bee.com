"use client";

import Link from "next/link";

const features = [
  "Personalized user interactions",
  "Enterprise-grade chatbot architecture",
  "Secure and scalable AI solutions",
  "Seamless integration with business platforms",
  "Continuous performance optimization",
];

function FeatureButton({ label }: { label: string }) {
  return (
    <div className="group relative w-full cursor-pointer">
      {/* Yellow Hover Effect */}
      <div
        className="
          absolute inset-0
          rounded-full
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
          pointer-events-none
        "
      >
        <div
          className="
            absolute left-0 top-0
            h-full w-[50%]
            rounded-l-full
            border-l-[4px] border-y-[4px]
            border-[#F4C715]
          "
          style={{
            maskImage: "linear-gradient(to right, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 70%, transparent 100%)",
          }}
        />
      </div>

      {/* Main Button */}
      <div
        className="
          px-3 py-[16px]
          bg-white
          border-[4px]
          border-[#F9F9F9]
          rounded-full
          text-[13px] lg:text-[14px] xl:text-[15px]
          font-semibold
          text-black
          text-center
          select-none
          leading-tight
          shadow-sm
          w-full
        "
      >
        {label}
      </div>
    </div>
  );
}

function CTAButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group cursor-pointer relative flex items-center gap-2 md:gap-2 lg:gap-3
        px-4 py-1.5 md:px-3 md:py-1.5 lg:px-6 lg:py-1
        border border-black rounded-full overflow-hidden"
    >
      {/* ripple */}
      <span className="absolute inset-0 flex items-center justify-center z-0">
        <span className="w-5 h-5 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
      </span>

      {/* glow */}
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300" />

      {/* text */}
      <span className="relative z-10 text-black text-sm md:text-xs lg:text-base whitespace-nowrap">
        {label}
      </span>

      {/* icon */}
      <svg
        className="relative z-10 w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95"
        viewBox="0 0 56 55"
        fill="none"
      >
        <circle
          cx="28.2473"
          cy="27.0945"
          r="15.912"
          fill="#F6E000"
          stroke="#F9C901"
          strokeWidth="1.51543"
        />
        <path
          d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
          stroke="black"
          strokeWidth="3.03086"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-gradient-to-t from-[#FFF39A] to-white px-4">
      <div className="max-w-7xl mx-auto">

        {/* Top: Title left, Description right */}
        <div className="flex flex-col md:flex-row  mb-12">
          <div className="md:w-[42%]">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              Why Choose{" "}
              <span className="text-[#D4A017]">Beelockchain For</span> 
              <br />
              <span className="text-[#D4A017]">AI Chatbot</span> Development
            </h2>
          </div>
          <div className="md:w-[58%]">
            <p className="text-[16px] font-semibold text-gray-500 leading-relaxed">
              Businesses choose Beelockchain because we focus on building
              intelligent chatbot systems that produce measurable business
              results. Our goal is to build chatbot systems that not only
              automate communication but also improve digital customer
              experiences and business efficiency. Key advantages include:
            </p>
          </div>
        </div>

        {/* Bottom: Robot image left, Feature buttons right */}
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Robot Image */}
          <div className="md:w-[40%] flex justify-center relative">
            <img
              src="/assets/images/aichatbot/whychoose-robotimage.png"
              alt="AI Robot"
              className="w-[260px] md:w-[350px] object-cover relative top-[65px]"
            />
          </div>

          {/* Feature Buttons + CTAs */}
          <div className="md:w-[60%] flex flex-col gap-3 w-full  pb-10">
           <div className="flex flex-col gap-3 md:w-[67%] ml-25">
             {features.map((f) => (
              <FeatureButton key={f} label={f}/>
            ))}

           </div>
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mt-4 ml-25">
              <CTAButton href="/contact-us" label="Consult Our Expert" />
              <CTAButton href="/portfolio" label="Explore Our Portfolio" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}