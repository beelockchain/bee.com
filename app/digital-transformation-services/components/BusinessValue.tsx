"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Digital Transformation Strategy Consulting",
    description:
      "We assess your business goals with the current technology landscape and market environment to define a clear, practical roadmap that guides technology investments and transformation priorities.",
  },
  {
    title: "Legacy Application Modernization",
    description:
      "Beelockchain upgrades existing applications for better performance, security, scalability, and compatibility with modern cloud and digital platforms.",
  },
  {
    title: "Custom Software Development",
    description:
      "Our design and development of web, mobile, and enterprise applications are tailored to your specific workflows, helping you improve productivity and customer engagement.",
  },
  {
    title: "Cybersecurity Services",
    description:
      "We implement data protection, identity management, threat monitoring, and compliance controls to safeguard the critical systems and sensitive information.",
  },
  {
    title: "Cloud Migration",
    description:
      "Migrate applications and infrastructure to secure and scalable cloud environments. This will improve flexibility, reliability, and cost efficiency.",
  },
  {
    title: "New Technology Adoption",
    description:
      "Beelockchain helps you to adopt emerging technologies such as AI, IoT, blockchain, and advanced analytics to unlock new business capabilities and innovation.",
  },
  {
    title: "Data Analytics & Business Intelligence (BI) Solutions",
    description:
      "We help organizations turn raw data into useful insights through analytics platforms, dashboards, and reporting systems. That supports better planning, performance tracking, and enables informed decision-making.",
  },
  {
    title: "Business Restructuring & Process Optimization",
    description:
      "Supporting businesses with restructuring initiatives by improving organizational structures and workflows, reducing bottlenecks, and enabling faster, more agile responses to market and operational changes.",
  },
];

const NumberSvg = ({ number }: { number: string }) => {
  return (
    <svg
      width="52"
      height="52"
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
        fontSize="30"
        fontWeight="900"
        fontFamily="Poppins, sans-serif"
  
      >
        {number}
      </text>
    </svg>
  );
};

// ─── MOBILE CARD STACK ───────────────────────────────────────────────────────
// Cards stacked exactly like the reference image:
// - Card 01 on TOP layer (visible front)
// - Card 08 on BOTTOM layer (visible at back edge)
// - Stacked vertically with peek effect
// - Dismissal order: 01 → 02 → 03 → ... → 08
const MobileCardStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stackContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const totalCards = services.length; // 8
    const CARD_PEEK = 10;        // Visible gap between stacked cards
    const SCALE_STEP = 0.015;    // Scale reduction per card depth
    const SCROLL_PER_CARD = 200; // Slower, smoother scroll per card

    /**
     * Visual stacking order:
     * services[0] = Card 01 → TOP (frontmost, highest z-index, dismissed first)
     * services[1] = Card 02 → Behind 01
     * ...
     * services[7] = Card 08 → BOTTOM (backmost, lowest visible z-index, dismissed last)
     */

    const applyInitialState = () => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        // i=0 is Card 01 (top), i=7 is Card 08 (bottom)
        gsap.set(card, {
          y: i * CARD_PEEK,              // Stack downward
          scale: 1 - i * SCALE_STEP,     // Smaller as depth increases
          zIndex: totalCards - i,        // Card 01 has highest z-index
          opacity: 1,
          rotateX: 0,
          force3D: true,
        });
      });
    };

    applyInitialState();

    const totalScroll = totalCards * SCROLL_PER_CARD;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${totalScroll}`,
        pin: true,
        pinSpacing: true,
        scrub: 1.5, // Slower = smoother
        onUpdate: (self) => {
          const progress = self.progress;
          const cardsDismissed = progress * totalCards;

          cardRefs.current.forEach((card, i) => {
            if (!card) return;

            // ✅ ADD THIS — card 08 (i=7) never moves, stays as permanent base
            if (i === totalCards - 1) return;

            // Everything below is exactly the same as your original code
            const dismissProgress = Math.max(0, Math.min(1, cardsDismissed - i));

            if (dismissProgress === 0) {
              const remainingAbove = Math.max(0, i - cardsDismissed);
              gsap.to(card, {
                y: remainingAbove * CARD_PEEK,
                scale: 1 - remainingAbove * SCALE_STEP,
                opacity: 1,
                rotateX: 0,
                duration: 0.4,
                ease: "power2.out",
                overwrite: true,
              });
            } else if (dismissProgress < 1) {
              const easeProgress = Math.pow(dismissProgress, 0.8);
              gsap.to(card, {
                y: -300 * easeProgress,
                opacity: Math.pow(1 - dismissProgress, 2),
                rotateX: dismissProgress * 10,
                scale: 1 - dismissProgress * 0.1,
                duration: 0.4,
                ease: "power2.out",
                overwrite: true,
              });
            } else {
              gsap.to(card, {
                y: -320,
                opacity: 0,
                duration: 0.1,
                overwrite: true,
              });
            }
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const CARD_H = 230;
  const PEEK = 10;
  const stackHeight = CARD_H + (services.length - 1) * PEEK;

  return (
    <div ref={sectionRef} className="block md:hidden w-full min-h-screen bg-white pt-8 pb-16 px-5">
      <div className="max-w-[400px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[20px] text-black font-bold leading-tight font-poppins">
            How Beelockchain Delivers{" "}
            <span className="text-yellow-400">Digital Transformation</span> for
            Business Value Creation
          </h2>
          <p className="mt-4 text-black text-[12px] font-poppins font-medium leading-relaxed">
            Beelockchain supports organizations through their digital
            transformation journey by combining consulting expertise with practical
            execution.
          </p>
        </div>

        {/* Card Stack Container - Centered */}
        <div
          ref={stackContainerRef}
          className="relative mx-auto"
          style={{
            height: `${stackHeight}px`,
            width: '100%',
            maxWidth: '300px',
          }}
        >
          {services.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="absolute left-0 right-0 top-0 rounded-2xl bg-[#E2E2E2] shadow-xl p-5"
              style={{
                height: `${CARD_H}px`,
                transformOrigin: "center center",
                willChange: "transform, opacity",
              }}
            >
              <div className="relative h-full">
                <h3 className="text-[13px] font-semibold mb-2 text-black font-poppins leading-tight">
                  {item.title}
                </h3>
                <p className="text-black text-[10px] leading-relaxed font-poppins pr-12">
                  {item.description}
                </p>
                <div className="absolute bottom-0 right-0 opacity-25">
                  <NumberSvg number={(i + 1).toString().padStart(2, "0")} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
        
      <button
        className="
          cursor-pointer
          inline-flex items-center
          w-fit
          px-4 py-2 md:px-2 md:py-1 lg:px-3 lg:py-2 xl:px-3 xl:py-2.5
          border border-black rounded-full
          bg-white
          hover:bg-gray-50
          transition-colors
        "
      >
        <span className="font-poppins text-black text-sm md:text-[12px] lg:text-[12px] xl:text-[15px] bg-gray">
         Transform Your Business
        </span>
        <svg
          className="w-8 h-8 lg:w-8 lg:h-8"
          viewBox="0 0 56 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
      </button>
        </div>
      </div>
    </div>
  );
};

// ─── TABLET (MD) — All 8 cards left + sticky image right, no animation ───────
const TabletLayout = () => {
  return (
    <section className="hidden md:block lg:hidden w-full bg-white py-8 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[22px] text-black font-bold leading-tight">
            How Beelockchain Delivers{" "}
            <span data-text="Digital Transformation" className="shine-text relative text-yellow-400">Digital Transformation</span> for
            Business Value Creation
          </h2>
          <p className="mt-4 mx-auto text-black text-[12px] font-poppins font-medium max-w-2xl">
            Beelockchain supports organizations through their digital
            transformation journey by combining consulting expertise with
            practical execution. Our end-to-end services improve process
            efficiency, modernize workflows, and help businesses respond faster
            to change while delivering better customer experiences.
          </p>
        </div>

        {/* Grid: cards left, image right */}
        <div className="grid grid-cols-2 gap-8 items-start">
          {/* Left: All 8 cards */}
          <div className="flex flex-col gap-4">
            {services.map((item, index) => (
              <div
                key={index}
                className="relative p-5 rounded-xl bg-[#E2E2E2] shadow-sm"
              >
                <h3 className="text-[13px] font-semibold mb-2 text-black font-poppins">
                  {item.title}
                </h3>
                <p className="text-black text-[11px] leading-relaxed font-poppins pr-8">
                  {item.description}
                </p>
                <div className="absolute bottom-2 right-3 opacity-40">
                  <NumberSvg number={(index + 1).toString().padStart(2, "0")} />
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image + CTA (sticky so it stays visible while scrolling cards) */}
          <div className="sticky top-8">
            <Image
              src="/assets/images/business_val1.png"
              alt="Digital transformation visual"
              width={500}
              height={809}
              className="w-full object-contain rounded-xl"
            />
            <div className="mt-4">
              <button className="cursor-pointer relative flex items-center gap-2 px-4 py-2 border border-black rounded-full overflow-hidden bg-white/80 shadow-md">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)]" />
                <span className="relative z-10 font-poppins text-black text-sm whitespace-nowrap">
                  Transform Your Business
                </span>
                <svg className="relative z-10 w-9 h-9" viewBox="0 0 56 55" fill="none">
                  <circle cx="28.2473" cy="27.0945" r="15.912" fill="#F6E000" stroke="#F9C901" strokeWidth="1.51543" />
                  <path d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865" stroke="black" strokeWidth="3.03086" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── DESKTOP (LG / XL) — Original pinned scroll animation ────────────────────
const DesktopLayout = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const secondSetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(secondSetRef.current, { yPercent: 100, opacity: 0 });
      gsap.set(firstSetRef.current, { yPercent: 0, opacity: 1 });

      ScrollTrigger.create({
        trigger: paragraphRef.current,
        start: "top 10px",
        end: "+=200%",
        pin: sectionRef.current,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress < 0.5) {
            const firstProgress = progress * 2;
            gsap.to(firstSetRef.current, { yPercent: 0, opacity: 1, duration: 0.1, overwrite: true });
            gsap.to(secondSetRef.current, { yPercent: 100 - firstProgress * 50, opacity: 0, duration: 0.1, overwrite: true });
          } else {
            const secondProgress = (progress - 0.5) * 2;
            gsap.to(firstSetRef.current, { yPercent: -100 * secondProgress, opacity: 1 - secondProgress, duration: 0.1, overwrite: true });
            gsap.to(secondSetRef.current, { yPercent: 100 - 100 * secondProgress, opacity: secondProgress, duration: 0.1, overwrite: true });
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const firstFourCards = services.slice(0, 4);
  const secondFourCards = services.slice(4, 8);

  return (
    <section
      ref={sectionRef}
      className="hidden lg:block w-full bg-white py-5 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-[36px] md:text-[36px] lg:text-[26px] xl:text-[30px] text-black font-bold leading-tight">
            How Beelockchain Delivers{" "}
            <span data-text="Digital Transformation" className=" shine-text relative text-[#f5c518]">Digital Transformation</span> for{" "}
            <br />
            Business Value Creation
          </h2>
          <p
            ref={paragraphRef}
            className="mt-6 mx-auto text-black lg:text-[14px] xl:text-[16px] font-poppins font-medium max-w-xl md:max-w-2xl lg:max-w-4xl"
          >
            Beelockchain supports organizations through their digital
            transformation journey by combining consulting expertise with
            practical execution. Our end-to-end services improve process
            efficiency, modernize workflows, and help businesses respond faster
            to change while delivering better customer experiences.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          <div
            ref={cardsContainerRef}
            className="relative h-[calc(4*180px+3*20px)] overflow-hidden"
          >
            <div ref={firstSetRef} className="absolute inset-0 flex flex-col gap-5">
              {firstFourCards.map((item, index) => (
                <div key={index} className="relative p-6 rounded-xl bg-[#E2E2E2] shadow-sm md:h-[180px] lg:h-[220px] xl:h-[180px]">
                  <h3 className="text-xl md:text-[16px] lg:text-[16px] xl:text-xl font-semibold mb-3 text-black font-poppins">{item.title}</h3>
                  <p className="text-black text-[14px] lg:text-[12px] xl:text-[14px] leading-relaxed font-poppins pr-10">{item.description}</p>
                  <div className="absolute bottom-4 right-6 opacity-40">
                    <NumberSvg number={(index + 1).toString().padStart(2, "0")} />
                  </div>
                </div>
              ))}
            </div>

            <div ref={secondSetRef} className="absolute inset-0 flex flex-col gap-5 mt-15">
              {secondFourCards.map((item, index) => (
                <div key={index + 4} className="relative p-6 rounded-xl bg-[#E2E2E2] shadow-sm h-[180px] md:h-[180px] lg:h-[220px] xl:h-[180px]">
                  <h3 className="text-xl md:text-[16px] lg:text-[16px] xl:text-xl font-semibold mb-3 text-black font-poppins">{item.title}</h3>
                  <p className="text-black text-[14px] lg:text-[12px] xl:text-[14px] leading-relaxed font-poppins pr-10">{item.description}</p>
                  <div className="absolute bottom-4 right-6 opacity-40">
                    <NumberSvg number={(index + 5).toString().padStart(2, "0")} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full h-full">
            <div className="relative w-full h-full min-h-[400px]">
              <Image
                src="/assets/images/business_val1.png"
                alt="Digital transformation visual"
                width={500}
                height={809}
                className="object-fit xl:ml-25"
              />
              <div className="absolute bottom-6">
                <button className="cursor-pointer relative flex items-center gap-2 md:gap-2 lg:gap-3 xl:gap-0 px-4 py-1.5 md:px-3 md:py-1.5 lg:px-6 lg:py-2 xl:px-3 xl:py-2 border border-black rounded-full overflow-hidden bg-white/80 shadow-md">
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)]" />
                  <span className="relative z-10 font-poppins text-black text-sm md:text-xs lg:text-[12px] xl:text-[12px] whitespace-nowrap">
                    Transform Your Business
                  </span>
                  <svg className="relative z-10 w-10 h-10 md:w-8 md:h-8 lg:w-7 lg:h-7" viewBox="0 0 56 55" fill="none">
                    <circle cx="28.2473" cy="27.0945" r="15.912" fill="#F6E000" stroke="#F9C901" strokeWidth="1.51543" />
                    <path d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865" stroke="black" strokeWidth="3.03086" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── ROOT EXPORT ─────────────────────────────────────────────────────────────
const BusinessValue = () => {
  return (
    <>
      {/* Mobile (< md): stacked cards 01→08, smooth slow dismissal animation */}
      <MobileCardStack />

      {/* Tablet (md → lg): plain 8-card list + sticky image, no animation */}
      <TabletLayout />

      {/* Desktop (lg +): original pinned two-set scroll animation */}
      <DesktopLayout />
    </>
  );
};

export default BusinessValue;