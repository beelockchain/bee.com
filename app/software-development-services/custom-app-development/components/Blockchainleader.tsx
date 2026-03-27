"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
      "
    >
      {/* Image */}
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 overflow-hidden bg-white border border-gray-200 transition-all duration-300 group-hover:bg-white/80">
        <img
          src={service.image}
          alt={service.title}
          className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold leading-snug mb-3 text-gray-900 transition-colors duration-300 group-hover:text-gray-900">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-gray-500 h-36 transition-colors duration-300 group-hover:text-gray-700">
        {service.description}
      </p>
    </div>
  );
};

// Reusable CTA Button Component
const CTAButton = ({ isMobile = false }: { isMobile?: boolean }) => {
  const [active, setActive] = useState(false);

  return (
     <a href="/contact-us">
    <button
      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setActive(false)}
      onMouseLeave={() => setActive(false)}
      className={`group relative flex items-center justify-center gap-2 border border-black rounded-full overflow-hidden cursor-pointer bg-white ${isMobile ? "px-6 py-3 w-auto min-w-[200px]" : "px-4 py-2 lg:px-4 lg:py-0 w-auto"
        }`}
    >
     
      <span className="absolute inset-0 flex items-center justify-center z-0">
        <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
      </span>

      <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />

      <span
        className={`relative z-10 text-black font-medium text-center transition-colors ${isMobile ? "text-[14px]" : "text-sm whitespace-nowrap"
          }`}
      >
        Talk To Our Experts
      </span>

      <svg
        viewBox="0 0 56 55"
        className={`relative z-10 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95 ${isMobile ? "w-6 h-6 ml-2" : "w-10 h-10 lg:w-14 lg:h-14"
          }`}
      >
        <circle
          cx="28.2"
          cy="27.1"
          r="15.9"
          fill="#F6E000"
          stroke="#F9C901"
          strokeWidth="1.5"
        />
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

// Header Component - reusable for both layouts
const SectionHeader = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <div className={`text-center ${isMobile ? "mb-0" : "mb-14 space-y-6"}`}>
      <h2
        className={`font-bold text-gray-900 ${isMobile
          ? "text-[18px] leading-tight mb-3"
          : "text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px] text-black font-bold leading-tight "
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
        {!isMobile && <br className="hidden sm:block" />} Mobile App
        Development Services
      </h2>

      <p
        className={` max-w-2xl mx-auto text-black ${isMobile ? "text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px]  text-black leading-relaxed font-normal mb-0 px-2" : "text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px]  text-black leading-relaxed font-normal  mb-8"
          }`}
      >
        Every business faces unique challenges throughout the mobile app
        development process. Beelockchain provides custom mobile development
        solutions focused on solving complex challenges with innovative and
        user-friendly mobile solutions globally.
      </p>

      {/* CTA Button placed in header globally only for Desktop */}
      {!isMobile && (
        <div className="w-full flex justify-center items-center mt-6">
          <CTAButton isMobile={false} />
        </div>
      )}
    </div>
  );
};

// Mobile Card Component - for GSAP animation
const MobileServiceCard = ({
  service,
  index,
  totalCards
}: {
  service: (typeof services)[0];
  index: number;
  totalCards: number;
}) => {
  return (
    <div
      data-card-index={index}
      className="
        mobile-card
        absolute inset-0
        rounded-xl p-6
        border-2 border-[#E1E1E1] cursor-pointer
        bg-[#F7F7F7]

        transition-all duration-300 ease-out

        shadow-[-3px_-6px_16px_0_rgba(253,253,253,0.69),9px_5px_14px_0_rgba(0,0,0,0.15)]

        active:bg-[#f5c518ac]
        active:shadow-[inset_-3px_-6px_16px_0_rgba(253,253,253,0.69),inset_9px_5px_14px_0_rgba(0,0,0,0.15)]
      "
      style={{
        opacity: index === 0 ? 1 : 0,
        visibility: index === 0 ? 'visible' : 'hidden',
      }}
    >
      {/* Image */}
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 overflow-hidden bg-white border border-gray-200">
        <img
          src={service.image}
          alt={service.title}
          className="w-8 h-8 object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-base font-bold leading-snug mb-2 text-gray-900">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-xs leading-relaxed text-gray-500 line-clamp-4">
        {service.description}
      </p>

      {/* Card Counter */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        <span className="text-xs font-medium text-gray-400">
          {String(index + 1).padStart(2, '0')} / {String(totalCards).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

// Progress Indicator Dots
const ProgressDots = ({
  total,
  currentIndex
}: {
  total: number;
  currentIndex: number;
}) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      <div className="flex gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex
              ? 'bg-[#F5B800] w-4'
              : 'bg-gray-300'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

const BlockchainLeader = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const mobileSectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<number>(0);

  useEffect(() => {
    // Only run on mobile
    if (typeof window === "undefined" || window.innerWidth >= 640) return;

    const ctx = gsap.context(() => {
      // Create scroll trigger for the entire mobile section
      ScrollTrigger.create({
        trigger: mobileSectionRef.current,
        start: "top top",
        end: `+=${services.length * 80}%`, // Significantly reduces the blank scrolling space below
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          progressRef.current = progress;

          // Calculate which card should be shown
          const cardIndex = Math.min(
            Math.floor(progress * services.length),
            services.length - 1
          );

          setCurrentCardIndex(cardIndex);

          // Animate cards
          const cards = cardsContainerRef.current?.querySelectorAll('.mobile-card');
          if (cards) {
            cards.forEach((card, i) => {
              const cardEl = card as HTMLElement;
              const cardProgress = (progress * services.length) - i;

              if (cardProgress >= 0 && cardProgress < 1) {
                // Current card - animate in
                gsap.to(cardEl, {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  visibility: 'visible',
                  duration: 0.3,
                  ease: 'power2.out',
                });
              } else if (cardProgress >= 1) {
                // Past card - Keep it anchored so the new cards elegantly stack over it
                gsap.to(cardEl, {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  visibility: 'visible',
                  duration: 0.3,
                  ease: 'none',
                });
              } else {
                // Future card - animate out to right
                gsap.to(cardEl, {
                  opacity: 0,
                  x: 100,
                  scale: 0.9,
                  visibility: 'hidden',
                  duration: 0.3,
                  ease: 'power2.in',
                });
              }
            });
          }
        },
      });
    }, mobileSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative pt-10 pb-2 sm:py-10 px-6 h-fit lg:min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Mobile Layout - GSAP Pin + Scroll Animation */}
        <div ref={mobileSectionRef} className="sm:hidden lg:min-h-screen h-fit pb-4 space-y-15">
          {/* Sticky Header */}
          <div className="sticky-header bg-white/95 backdrop-blur-sm py-6">
            <SectionHeader isMobile={true} />
          </div>

          {/* Cards Container - Stacked for GSAP animation */}
          <div
            ref={cardsContainerRef}
            className="relative w-full h-[280px] mt-4"
          >
            {services.map((service, i) => (
              <MobileServiceCard
                key={i}
                service={service}
                index={i}
                totalCards={services.length}
              />
            ))}
          </div>

          {/* Progress Dots */}
          <div className="mb-4">
            <ProgressDots total={services.length} currentIndex={currentCardIndex} />
          </div>

          {/* CTA Button for Mobile Layout - Below Cards */}
          <div className="w-full flex justify-center items-center pb-8">
            <a href="/contact-us">
            <CTAButton isMobile={true} />
            </a>
          </div>
        </div>

        {/* Desktop/Tablet Layout - Grid */}
        <div className="hidden sm:block">
          {/* Header */}
          <SectionHeader isMobile={false} />

          {/* Cards Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-cover bg-center bg-no-repeat w-full"
            style={{
              backgroundImage:
                "url('/assets/images/software-dev/custom-app-dev/Blockchainleader.svg')",
            }}
          >
            {services.map((service, i) => (
              <div key={i} className={`animate-fade-up ${delayClasses[i]}`}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainLeader;