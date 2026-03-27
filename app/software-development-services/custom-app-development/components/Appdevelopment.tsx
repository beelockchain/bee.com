"use client";

import { useState, useEffect, useRef } from "react";

const leftFeatures = [
  {
    title: "Artificial Intelligence",
    description:
      "We build AI-powered algorithms and cognitive automation into your mobile applications to enable predictive analytics, smart decision-making, and intelligent process optimization.",
  },
  {
    title: "Internet of Things",
    description:
      "We deploy mobile applications with IoT ecosystems to ensure real-time device connectivity, monitoring, and data synchronization.",
  },
  {
    title: "Blockchain",
    description:
      "We build high-end security decentralized applications (DApps) using blockchain architecture to ensure data security, immutability, and data integrity.",
  },
];

const rightFeatures = [
  {
    title: "Cloud Computing",
    description:
      "Our reliable cloud infrastructure and DevOps methodologies enable us to build high-availability mobile applications with optimized performance.",
  },
  {
    title: "Generative AI",
    description:
      "We integrate the Generative AI models with the mobile applications to automate content creation, intelligent code generation, and rapid design prototyping.",
  },
  {
    title: "Machine Learning",
    description:
      "Our advanced machine learning models are trained on historical and real-time data to deliver adaptive and data-driven app functionality.",
  },
];

// All features combined for mobile carousel
const allFeatures = [...leftFeatures, ...rightFeatures];

const FeatureCard = ({
  title,
  description,
  align = "left",
}: {
  title: string;
  description: string;
  align?: "left" | "right";
}) => (
  <div
    className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col gap-3 flex-1 min-h-[140px] justify-center ${
      align === "right" ? "text-left" : "text-left"
    }`}
  >
    <h3 className="text-gray-900 font-bold text-[18px] leading-snug">{title}</h3>
    <p className="text-black text-xs leading-relaxed">{description}</p>
  </div>
);

// Mobile Carousel Component
const MobileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalSlides = allFeatures.length;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      goToNext();
    }
    if (touchStart - touchEnd < -75) {
      goToPrev();
    }
  };

  return (
    <div className="w-full px-4">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {allFeatures.map((feature, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 border border-gray-100 shadow-sm min-h-[160px]">
                <h3 className="text-gray-900 font-bold text-base leading-snug mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {allFeatures.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === index
                ? "w-6 h-2 bg-[#F5B800]"
                : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={goToPrev}
          className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Appdevelopment = () => {
  return (
    <section className="relative w-full py-10 px-4 sm:px-6 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-14 max-w-6xl mx-auto flex flex-col justify-center items-center">
        <h2 className="text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px]  text-black font-bold text-black leading-tight font-bold leading-tight mb-3 sm:mb-4">
          Custom
          <span
            data-text="App Development Services"
            className="shine-text text-[#F5B800] relative mx-1 sm:mx-2"
          >
            App Development Services
          </span>{" "}
          Powered By
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>Advanced Technologies
        </h2>
        <p className="text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px]  text-black leading-relaxed font-normal leading-6 sm:leading-7 w-full sm:w-2xl lg:w-3xl px-2">
          We combine advanced technologies, including AI, IoT, and blockchain,
          to build the future-ready mobile apps that respond dynamically to user
          and market needs. Our developers provide mobile solutions that optimize
          operations and enhance user experience.
        </p>
      </div>

      {/* ========== MOBILE ONLY (< 768px) ========== */}
      <div className="md:hidden max-w-md mx-auto">
        {/* Phone Image Centered */}
        <div className="flex justify-center items-center mb-6 sm:mb-8">
          <div className="relative w-[180px] sm:w-[220px]">
            {/* Yellow blob background */}
            <div
              className="absolute inset-0 rounded-[40%] h-64 sm:h-80 blur-2xl z-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(245, 184, 0, 0.4) 0%, rgba(245, 184, 0, 0.1) 50%, transparent 70%)",
              }}
            />
            <img
              src="/assets/images/software-dev/custom-app-dev/Appdevelopment.svg"
              alt="App Development Mockup"
              className="relative object-contain drop-shadow-2xl w-full"
            />
          </div>
        </div>

        {/* Carousel for Mobile */}
        <MobileCarousel />
      </div>

      {/* ========== DESKTOP ONLY (≥ 1024px) ========== */}
      <div
        className="hidden lg:grid max-w-5xl mx-auto gap-8 items-stretch"
        style={{
          backgroundImage:
            "url('/assets/images/software-dev/custom-app-dev/Appdevelopmentbg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          gridTemplateColumns: "1fr auto 1fr",
        }}
      >
        {/* Left Column */}
        <div className="flex flex-col gap-5">
          {leftFeatures.map((f, i) => (
            <FeatureCard
              key={i}
              title={f.title}
              description={f.description}
              align="left"
            />
          ))}
        </div>

        {/* Center Column — Phone Image */}
        <div className="flex justify-center items-center w-[220px] lg:w-[360px]">
          <div className="relative w-full">
            {/* Yellow blob background */}
            <div
              className="absolute inset-0 rounded-[40%] h-80 blur-2xl z-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(245, 184, 0, 0.4) 0%, rgba(245, 184, 0, 0.1) 50%, transparent 70%)",
              }}
            />
            <img
              src="/assets/images/software-dev/custom-app-dev/Appdevelopment.svg"
              alt="App Development Mockup"
              className="relative object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-5">
          {rightFeatures.map((f, i) => (
            <FeatureCard
              key={i}
              title={f.title}
              description={f.description}
              align="right"
            />
          ))}
        </div>
      </div>

      {/* ========== TABLET ONLY (768px - 1023px) ========== */}
      <div
        className="hidden md:grid lg:hidden max-w-5xl mx-auto gap-6 items-stretch"
        style={{
          gridTemplateColumns: "1fr auto 1fr",
        }}
      >
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {leftFeatures.map((f, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-gray-100 shadow-sm min-h-[120px]"
            >
              <h3 className="text-gray-900 font-bold text-base leading-snug mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* Center Column — Phone Image */}
        <div className="flex justify-center items-center w-[180px] md:w-[220px]">
          <div className="relative w-full">
            {/* Yellow blob background */}
            <div
              className="absolute inset-0 rounded-[40%] h-64 blur-2xl z-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(245, 184, 0, 0.3) 0%, rgba(245, 184, 0, 0.1) 50%, transparent 70%)",
              }}
            />
            <img
              src="/assets/images/software-dev/custom-app-dev/Appdevelopment.svg"
              alt="App Development Mockup"
              className="relative object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {rightFeatures.map((f, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-gray-100 shadow-sm min-h-[120px]"
            >
              <h3 className="text-gray-900 font-bold text-base leading-snug mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Appdevelopment;