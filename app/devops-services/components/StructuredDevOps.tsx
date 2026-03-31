"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const leftFeatures = [
  {
    title: "Assessment & Workflow Analysis",
    description:
      "We analyze your development lifecycle, infrastructure setup, and deployment challenges to identify automation opportunities across development environments.",
  },
  {
    title: "DevOps Strategy Planning",
    description:
      "Based on assessment insights, our DevOps expert designs a customized DevOps consulting roadmap aligned with your application architecture and business requirements.",
  },
  {
    title: "Tool Selection & Implementation",
    description:
      "We recommend suitable DevOps tools based on your infrastructure and CI/CD pipeline requirements, while guiding implementation across your software development lifecycle.",
  },
];

const rightFeatures = [
  {
    title: "CI/CD Pipeline Setup",
    description:
      "Automated CI/CD pipelines are configured to streamline code integration, testing, and deployment across development and production environments.",
  },
  {
    title: "Monitoring & Optimization",
    description:
      "Our tech experts provide DevOps infrastructure consulting along with real-time monitoring tools to track application performance & overall software infrastructure health.",
  },
  {
    title: "Continuous Support",
    description:
      "We offer continuous support and training after DevOps transformation services to help your team adapt effectively to the DevOps environment.",
  },
];

// All features combined for mobile carousel
const allFeatures = [...leftFeatures, ...rightFeatures];
const NumberSvg = ({ number }: { number: string }) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 52 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-14 h-12"
    >
      <text
        x="50%"
        y="60%"
        textAnchor="middle"
        fill="#000000"
        fontSize="20"
        fontWeight="900"
      >
        {number}
      </text>
    </svg>
  );
};
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
 const CARD_H          = 220;
const CARD_PEEK       = 10;
const SCROLL_PER_CARD = 260;
const TOTAL_CARDS     = allFeatures.length; // 8
const DISMISSIBLE     = TOTAL_CARDS - 1; // 7 cards animate, card 08 stays
const SWIPE_THRESHOLD = 20; 
// Mobile Carousel Component
const MobileCarousel = () => {

 const outerRef   = useRef<HTMLDivElement>(null);
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs    = useRef<(HTMLDivElement | null)[]>([]);

  // Touch tracking refs
  const touchStartY  = useRef(0);
  const touchEndY    = useRef(0);
  // Which card is currently the top card (for swipe navigation)
  const currentCard  = useRef(0);

  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;

    // ── Initial stack positions (your original code) ──────────────────────
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      card.style.transform = `translateY(${i * CARD_PEEK}px) scale(${1 - i * 0.015})`;
      card.style.opacity = "1";
      card.style.zIndex = String(TOTAL_CARDS - i);
    });

    // ── Dot updater ───────────────────────────────────────────────────────
    const updateDots = (activeIndex: number) => {
      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        // Dots go in reverse: dot 0 = card 0 (top), dot 7 = card 7 (bottom)
        // Active = the card currently on top
        dot.style.backgroundColor = i === activeIndex ? "#000" : "#D1D1D1";
        dot.style.transform = i === activeIndex ? "scale(1.3)" : "scale(1)";
      });
    };

    // ── Scroll handler (your original logic — zero changes) ───────────────
    const handleScroll = () => {
      const rect           = outer.getBoundingClientRect();
      const scrolled       = Math.max(0, -rect.top);
      const totalScroll    = DISMISSIBLE * SCROLL_PER_CARD;
      const clampedScroll  = Math.min(scrolled, totalScroll);
      const activeIndex    = Math.floor(clampedScroll / SCROLL_PER_CARD);
      const progressInCard = (clampedScroll % SCROLL_PER_CARD) / SCROLL_PER_CARD;

      // Keep currentCard in sync for swipe navigation
      currentCard.current = activeIndex;
      updateDots(activeIndex);

      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        // Last card never moves
        if (i === TOTAL_CARDS - 1) return;

        if (i < activeIndex) {
          // Already dismissed
          card.style.transform = `translateY(-${CARD_H + 60}px) scale(0.85)`;
          card.style.opacity   = "0";
        } else if (i === activeIndex) {
          // Currently moving card (ONLY ONE)
          const ease    = Math.pow(progressInCard, 1);
          const yOffset = -(CARD_H + 60) * ease;
          const scale   = 1 - ease * 0.1;
          const opacity = 2 - ease;
          card.style.transform = `translateY(${yOffset}px) scale(${scale})`;
          card.style.opacity   = String(opacity);
        } else {
          // Cards below active one stay stacked
          const stackIndex = i - activeIndex;
          card.style.transform = `translateY(${stackIndex * CARD_PEEK}px) scale(${1 - stackIndex * 0.015})`;
          card.style.opacity   = "1";
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // ── Touch/swipe: scroll the page to the target card's band ───────────
    // Works exactly like a carousel indicator tap — we compute the exact
    // scrollY that puts the target card at the start of its scroll band,
    // then smoothly scroll there. The existing scroll handler does the rest.
    const scrollToCard = (cardIndex: number) => {
      const target = Math.max(0, Math.min(DISMISSIBLE, cardIndex));
      const outerTop    = outer.getBoundingClientRect().top + window.scrollY;
      // Each card's band starts at: outerTop + cardIndex * SCROLL_PER_CARD
      // Add half a band so the card is mid-dismiss when we land (feels natural)
      const targetScrollY = outerTop + target * SCROLL_PER_CARD;
      window.scrollTo({ top: targetScrollY, behavior: "smooth" });
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      touchEndY.current   = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      touchEndY.current = e.touches[0].clientY;

      // Only intercept if the section is currently sticky (outer straddles viewport top)
      const rect     = outer.getBoundingClientRect();
      const isPinned = rect.top <= 0 && rect.bottom > 0;
      if (!isPinned) return;

      const delta = touchStartY.current - touchEndY.current; // + = swipe up

      const active = currentCard.current;
      if (Math.abs(delta) > 10) {
        if (delta > 0 && active < TOTAL_CARDS - 1) e.preventDefault();
        if (delta < 0 && active > 0)               e.preventDefault();
      }
    };

    const onTouchEnd = () => {
      const delta  = touchStartY.current - touchEndY.current;
      const active = currentCard.current;

      const rect     = outer.getBoundingClientRect();
      const isPinned = rect.top <= 0 && rect.bottom > 0;
      if (!isPinned) return;

      if (delta > SWIPE_THRESHOLD && active < TOTAL_CARDS - 1) {
        // Swipe UP → next card
        scrollToCard(active + 1);
      } else if (delta < -SWIPE_THRESHOLD && active > 0) {
        // Swipe DOWN → previous card
        scrollToCard(active - 1);
      }
    };

    // Attach touch listeners to the sticky inner (not window, not body)
    const sticky = outer.querySelector(".sticky") as HTMLElement | null;
    if (sticky) {
      sticky.addEventListener("touchstart", onTouchStart, { passive: true });
      sticky.addEventListener("touchmove",  onTouchMove,  { passive: false });
      sticky.addEventListener("touchend",   onTouchEnd,   { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sticky) {
        sticky.removeEventListener("touchstart", onTouchStart);
        sticky.removeEventListener("touchmove",  onTouchMove);
        sticky.removeEventListener("touchend",   onTouchEnd);
      }
    };
  }, []);

  const stackHeight = CARD_H + (TOTAL_CARDS - 1) * CARD_PEEK;
  // const outerHeight = `calc(100vh + ${DISMISSIBLE * SCROLL_PER_CARD}px)`;
  const outerHeight = `calc(100svh + ${DISMISSIBLE * SCROLL_PER_CARD}px)`;

  return (
    <div
      ref={outerRef}
      className="block sm:hidden md:hidden w-full bg-white"
      style={{ height: outerHeight }}
    >
      {/* Sticky inner */}
      <div
        className="sticky top-0 w-full bg-white pt-6 pb-10 px-5 h-[100svh] overflow-hidden"
      >
        <div className="max-w-[400px] mx-auto h-full flex flex-col">

          {/* Heading */}
          <div className="text-center mb-10 flex-shrink-0">
            <h2 className="text-[19px] text-[#000000] font-bold leading-tight ">
              How Beelockchain Delivers{" "}
              <span className="text-yellow-400">Digital Transformation</span>{" "}
              For Business Value Creation
            </h2>
            <p className="mt-4 text-black text-[14px]  font-semibold leading-relaxed">
              Beelockchain supports organizations through their digital
              transformation journey by combining consulting expertise with
              practical execution.
            </p>
          </div>

          {/* Card Stack + Dots */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative flex items-center gap-3">

              {/* Cards */}
              <div
                className="relative"
                style={{ width: "320px", height: `${stackHeight}px` }}
              >
                {allFeatures.map((item, i) => (
                  <div
                    key={i}
                    ref={(el) => { cardRefs.current[i] = el; }}
                    className="absolute left-0 right-0 top-0 rounded-2xl bg-[#E2E2E2] shadow-xl p-5"
                    style={{
                      height: `${CARD_H}px`,
                      transformOrigin: "center center",
                      willChange: "transform, opacity",
                      transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
                    }}
                  >
                    <div className="relative h-full">
                      <h3 className="text-[15px] font-bold mb-2 text-black  leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-black text-[14px] leading-relaxed font-semibold pr-10">
                        {item.description}
                      </p>
                      <div className="absolute bottom-0 right-0 opacity-25">
                        <NumberSvg number={(i + 1).toString().padStart(2, "0")} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

           
            </div>
          </div>

    

        </div>
      </div>
    </div>
  );
};

const StructuredDevOps = () => {
  return (
    <section className="relative w-full py-10 px-4 sm:px-6 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-14 max-w-6xl mx-auto flex flex-col justify-center items-center">
        <h2 className="text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px]  text-black font-bold leading-tight mb-3 sm:mb-4">
          Our
          <span
            data-text="Structured DevOps"
            className="shine-text text-[#F5B800] relative mx-1 sm:mx-2"
          >
            Structured DevOps 
          </span><br />
          Consulting Approach
          <br />
        </h2>
        <p className="text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px]  text-black leading-relaxed font-medium font-poppins leading-6 sm:leading-7 w-full sm:w-2xl lg:w-3xl px-2">
         Beelockchain follows a structured DevOps consulting approach to automate software delivery, optimize infrastructure, and streamline CI/CD workflows across cloud-native environments.
        </p>
      </div>

      {/* ========== MOBILE ONLY (< 768px) ========== */}
      <div className="md:hidden max-w-md mx-auto">
        {/* Phone Image Centered */}
        <div className="flex justify-center items-center mb-6 sm:mb-8">
          <div className="relative w-full">
            <img
              src="/assets/images/devops/StructuredDevOps-mobile.png"
              alt="App Development Mockup"
              className="relative object-contain  w-full"
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
            "url('/assets/images/devops/StructuredDevOps.png')",
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

    
    </section>
  );
};

export default StructuredDevOps;