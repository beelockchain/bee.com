"use client";
import { useState, useCallback } from "react";

const services = [
  {
    image: "/assets/images/software-dev/custom-app-dev/mobile-development.svg",
    title: "Android App Development",
    description:
      "Beelockchain offers reliable Android app development using Java, Kotlin, and cross-platform frameworks to create dependable mobile applications for Android Mobile, Tablet, and TV. Our process includes strategy, UI/UX, development, QA, and deployment.",
  },
  {
    image: "/assets/images/software-dev/custom-app-dev/app-development.svg",
    title: "iOS App Development",
    description:
      "Our iOS app development services help reach elite prospects with stable, full-fledged iOS apps. Using Swift and Apple frameworks, our developers follow a complete process from idea and UI/UX to development, testing, and App Store launch.",
  },
  {
    image: "/assets/images/software-dev/custom-app-dev/Flutter.svg",
    title: "Flutter App Development",
    description:
      "Beelockchain Flutter App Development delivers high-end performance for Android and iOS from one codebase. We develop responsive, native-feeling mobile apps ensuring user satisfaction across every screen and platform.",
  },
  {
    image: "/assets/images/software-dev/custom-app-dev/Reactnative.svg",
    title: "React Native App Development",
    description:
      "We build next-generation mobile apps with React Native — visually attractive, strong, secure, and high-performing applications that work hassle-free on Android and iOS.",
  },
  {
    image: "/assets/images/software-dev/custom-app-dev/Pwa.svg",
    title: "PWA App Development",
    description:
      "Our PWA Development services combine modern web technologies like HTML, CSS, and JavaScript to provide installable, cross-platform web apps with offline functionality, fast load times, and engaging UI.",
  },
  {
    image: "/assets/images/software-dev/custom-app-dev/Webapp.svg",
    title: "Web App Development",
    description:
      "Our web app development services offer end-to-end solutions. We build web applications with React, Node.js, and Django, providing responsive frontends, reliable backend architecture, and API integration.",
  },
  {
    image: "/assets/images/software-dev/custom-app-dev/Wearableapp.svg",
    title: "Wearable App Development",
    description:
      "We design innovative wearable apps for iOS and Android smart devices, specializing in health monitoring, activity tracking, and interactive notifications — following global coding standards and best practices.",
  },
  {
    image: "/assets/images/software-dev/custom-app-dev/CrossPlatform.svg",
    title: "Cross-Platform App Development",
    description:
      "Beelockchain builds custom web and mobile apps for Android, iOS, and Windows offering cross-platform support, rich features, and a hassle-free user experience built to grow your business.",
  },
  {
    image: "/assets/images/software-dev/custom-app-dev/ERP.svg",
    title: "ERP App Development",
    description:
      "At Beelockchain, we develop robust ERP applications for your unique operational demands of modern enterprises. Our solutions align complex business processes, ensure data accuracy, and provide end-to-end visibility into performance metrics.",
  },
];

const delayClasses = [
  "delay-[50ms]",
  "delay-[120ms]",
  "delay-[190ms]",
  "delay-[260ms]",
  "delay-[330ms]",
  "delay-[400ms]",
  "delay-[470ms]",
  "delay-[540ms]",
  "delay-[610ms]",
];

// Desktop/Tablet Card Component
const ServiceCard = ({ service }: { service: (typeof services)[0] }) => {
  return (
<div
  tabIndex={0}
  className="
    group relative overflow-hidden rounded-xl p-8
    border-2 border-[#E1E1E1] cursor-pointer
    bg-[#F7F7F7]
    transition-all duration-300 ease-out
    shadow-[-3px_-6px_16px_0_rgba(253,253,253,0.69),9px_5px_14px_0_rgba(0,0,0,0.15)]
    hover:bg-[#f5c518ac]
    hover:border-[#E1E1E1]
    hover:shadow-[inset_-3px_-6px_16px_0_rgba(253,253,253,0.69),inset_9px_5px_14px_0_rgba(0,0,0,0.15)]
    hover:scale-[1.02]
    active:scale-[0.99]
    focus:shadow-[-3px_-6px_16px_0_rgba(253,253,253,0.69),9px_5px_14px_0_rgba(0,0,0,0.15)]
    h-full flex flex-col
  "
>
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 overflow-hidden bg-[#F9C901] border border-gray-200 transition-all duration-300 group-hover:bg-white/80">
        <img
          src={service.image}
          alt={service.title}
          className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-bold leading-snug mb-3 text-gray-900 transition-colors duration-300 group-hover:text-gray-900">
        {service.title}
      </h3>
      <p className="text-[12px] xl:text-sm leading-relaxed text-gray-500 h-36 transition-colors duration-300 group-hover:text-gray-700">
        {service.description}
      </p>
    </div>
  );
};

// Reusable CTA Button Component
const CTAButton = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <a href="/contact-us">
      <button
        className={`group relative flex items-center justify-center gap-2 border border-black rounded-full overflow-hidden cursor-pointer bg-white ${
          isMobile ? "px-6 py-3 w-auto min-w-[200px]" : "px-4 py-2 lg:px-4 lg:py-0 w-auto"
        }`}
      >
        <span className="absolute inset-0 flex items-center justify-center z-0">
          <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
        </span>
        <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />
        <span
          className={`relative z-10 text-black font-medium text-center transition-colors ${
            isMobile ? "text-[14px]" : "text-sm whitespace-nowrap"
          }`}
        >
          Talk To Our Experts
        </span>
        <svg
          viewBox="0 0 56 55"
          className={`relative z-10 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95 ${
            isMobile ? "w-6 h-6 ml-2" : "w-10 h-10 lg:w-14 lg:h-14"
          }`}
        >
          <circle cx="28.2" cy="27.1" r="15.9" fill="#F6E000" stroke="#F9C901" strokeWidth="1.5" />
          <path
            d="M31.3 22.1L33.2 29.4M31.3 22.1L24.1 24.1M31.3 22.1L25.1 32.8"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </a>
  );
};

// Header Component
const SectionHeader = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <div className={`text-center ${isMobile ? "mb-0" : "mb-14 space-y-6"}`}>
      <h2
        className={`font-bold text-gray-900 ${
          isMobile
            ? "text-[18px] leading-tight mb-3"
            : "text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px] text-black font-bold leading-tight"
        }`}
      >
        What Makes
        <span
          data-text="Beelockchain A Leader"
          className="shine-text text-[#F5B800] relative mx-2"
        >
          Beelockchain A Leader
        </span>
        In Custom
        {!isMobile && <br className="hidden sm:block" />} Mobile App Development Services
      </h2>

      <p
        className={`max-w-2xl mx-auto text-black ${
          isMobile
            ? "text-[14px] leading-relaxed font-semibold mb-0 px-2"
            : "text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-black leading-relaxed font-semibold mb-8"
        }`}
      >
        Every business faces unique challenges throughout the mobile app development process.
        Beelockchain provides custom mobile development solutions focused on solving complex
        challenges with innovative and user-friendly mobile solutions globally.
      </p>

      {!isMobile && (
        <div className="w-full flex justify-center items-center mt-6">
          <CTAButton isMobile={false} />
        </div>
      )}
    </div>
  );
};

// ─── Mobile Carousel ────────────────────────────────────────────────────────
// Mirrors exact carousel behaviour from BenefitsSection

const MobileCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = useCallback(
    () => setActiveIndex((i) => (i + 1) % services.length),
    []
  );
  const goPrev = useCallback(
    () => setActiveIndex((i) => (i - 1 + services.length) % services.length),
    []
  );

  const service = services[activeIndex];

  return (
    <div className="w-full flex flex-col items-center mt-8">
      {/* Card */}
      <div className="w-full max-w-sm px-0">
        <div className="bg-[#F8F8F8] rounded-2xl p-5 shadow-lg transition-shadow h-full">
          {/* Icon */}
          <div className="mb-3 flex items-center justify-center">
            <div className="w-15 h-15 bg-[#F9C901] rounded-full p-3 flex items-center justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          {/* Title */}
          <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
            {service.title}
          </h3>
          {/* Description */}
          <p className="text-xs text-[#000000] leading-relaxed font-bold">
            {service.description}
          </p>
        </div>
      </div>

      {/* Dots — identical to BenefitsSection */}
      <div className="flex gap-2 mt-5">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === activeIndex ? "bg-yellow-400 w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Prev / Next buttons — identical to BenefitsSection */}
      <div className="flex items-center gap-4 mt-5">
        <button
          onClick={goPrev}
          className="bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors text-lg"
        >
          ←
        </button>
        <button
          onClick={goNext}
          className="bg-yellow-400 shadow-md w-10 h-10 rounded-full flex items-center justify-center border border-yellow-400 hover:bg-yellow-500 transition-colors text-lg"
        >
          →
        </button>
      </div>
    </div>
  );
};


const BlockchainLeader = () => {
  return (
    <section className="relative pt-10 pb-2 sm:py-10 px-6 h-fit lg:min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* ── Mobile Layout ── */}
        <div className="sm:hidden pb-10">
          <SectionHeader isMobile={true} />
          <MobileCarousel />
          <div className="w-full flex justify-center items-center mt-6">
            <CTAButton isMobile={true} />
          </div>
        </div>

        {/* ── Desktop / Tablet Layout ── */}
<div className="hidden sm:block">
  <SectionHeader isMobile={false} />

  <div className="relative w-full overflow-visible">

    {/* Background connectors */}
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
      <img
        src="/assets/images/software-dev/custom-app-dev/Blockchainleader.png"
        alt=""
        className="
         md:w-[700px]
        lg:w-[1000px]
          xl:w-[1500px] 
          max-w-none
          opacity-100
        "
      />
    </div>

    {/* Cards */}
    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, i) => (
        <div key={i} className={`animate-fade-up ${delayClasses[i]}`}>
          <ServiceCard service={service} />
        </div>
      ))}
    </div>

  </div>
</div>

      </div>
    </section>
  );
};

export default BlockchainLeader;