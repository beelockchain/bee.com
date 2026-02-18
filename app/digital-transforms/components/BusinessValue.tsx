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
      "Our design and development of web, mobile, and enterprise applications tailored to your specific workflows, helping you improve productivity and customer engagement.",
  },
  {
    title: "Cybersecurity Services",
    description:
      "We implement data protection, identity management, threat monitoring, and compliance controls to safeguard critical systems and sensitive information.",
  },
  {
    title: "Cloud Infrastructure & Migration",
    description:
      "We help organizations migrate to cloud platforms, optimizing infrastructure for scalability, cost-efficiency, and seamless integration with existing systems.",
  },
  {
    title: "Data Analytics & Business Intelligence",
    description:
      "Transform raw data into actionable insights with our analytics solutions that drive informed decision-making and competitive advantage.",
  },
  {
    title: "AI & Machine Learning Solutions",
    description:
      "Leverage artificial intelligence and machine learning to automate processes, predict trends, and create intelligent applications for your business.",
  },
  {
    title: "DevOps & Continuous Integration",
    description:
      "Streamline your development pipeline with DevOps practices that accelerate delivery, improve quality, and enhance collaboration across teams.",
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
        fill="#969696"
        fontSize="38"
        fontWeight="900"
        fontFamily="Poppins, sans-serif"
      >
        {number}
      </text>
    </svg>
  );
};

// ─── MOBILE CARD STACK ───────────────────────────────────────────────────────
// All 8 cards stacked like the reference image (fanned behind the front card).
// Section pins when it enters the viewport.
// Scrolling UP peels the top card away (flies upward & fades out).
// Scrolling back DOWN reverses — cards come back from above.
const MobileCardStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const totalCards = services.length; // 8
    const CARD_PEEK = 12;       // px gap between stacked cards (fan offset)
    const SCALE_STEP = 0.025;   // each depth level shrinks card slightly
    const SCROLL_PER_CARD = 130; // px of scroll dedicated to each card dismissal

    /**
     * cardRefs[7] → topmost (frontmost) card, dismissed first
     * cardRefs[0] → bottommost (backmost) card, dismissed last
     * depthFromTop: 0 = top card, 7 = bottom card
     */
    const getDepth = (i: number) => totalCards - 1 - i;

    const applyInitialState = () => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const depth = getDepth(i);
        gsap.set(card, {
          y: depth * CARD_PEEK,
          scale: 1 - depth * SCALE_STEP,
          zIndex: i,           // higher index = higher z (topmost card on top)
          opacity: 1,
          rotateX: 0,
          clearProps: "none",
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
        scrub: 0.5,
        onUpdate: (self) => {
          const cardsDismissed = self.progress * totalCards; // 0 → 8 (float)

          cardRefs.current.forEach((card, i) => {
            if (!card) return;
            const depth = getDepth(i); // 0 = topmost card
            // Each card starts its dismissal animation when depth cards have
            // already been dismissed, and finishes 1 scroll-unit later.
            const dismissProgress = Math.max(0, Math.min(1, cardsDismissed - depth));

            if (dismissProgress === 0) {
              // Card hasn't been reached yet — keep it in its fan position,
              // but shift upward as cards above it are removed.
              const remainingAbove = Math.max(0, depth - cardsDismissed);
              gsap.to(card, {
                y: remainingAbove * CARD_PEEK,
                scale: 1 - remainingAbove * SCALE_STEP,
                opacity: 1,
                rotateX: 0,
                duration: 0.08,
                overwrite: true,
              });
            } else if (dismissProgress < 1) {
              // Actively dismissing: fly upward + fade out
              gsap.to(card, {
                y: -180 * dismissProgress,
                opacity: 1 - dismissProgress,
                rotateX: dismissProgress * 15,
                scale: 1 - dismissProgress * 0.05,
                duration: 0.08,
                overwrite: true,
              });
            } else {
              // Fully dismissed
              gsap.to(card, {
                y: -200,
                opacity: 0,
                duration: 0.08,
                overwrite: true,
              });
            }
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // Height of the stack area: one card height + fan peek from all cards behind
  const CARD_H = 250;
  const PEEK = 12;
  const stackHeight = CARD_H + (services.length - 1) * PEEK;

  return (
    <div ref={sectionRef} className="block md:hidden w-full bg-white py-8 px-4">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-[26px] text-black font-bold leading-tight font-poppins">
          How Beelockchain Delivers{" "}
          <span className="text-yellow-400">Digital Transformation</span> for
          Business Value Creation
        </h2>
        <p className="mt-3 text-black text-[13px] font-poppins font-medium leading-relaxed">
          Beelockchain supports organizations through their digital
          transformation journey by combining consulting expertise with practical
          execution.
        </p>
      </div>

      {/* Card Stack */}
      <div
        className="relative mx-auto w-full"
        style={{ height: `${stackHeight}px` }}
      >
        {services.map((item, i) => (
          <div
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="absolute inset-x-0 top-0 rounded-2xl bg-[#E2E2E2] shadow-lg p-5"
            style={{
              height: `${CARD_H}px`,
              transformOrigin: "center top",
              willChange: "transform, opacity",
            }}
          >
            <h3 className="text-[15px] font-semibold mb-2 text-black font-poppins">
              {item.title}
            </h3>
            <p className="text-black text-[12px] leading-relaxed font-poppins pr-8">
              {item.description}
            </p>
            <div className="absolute bottom-2 right-3 opacity-40">
              <NumberSvg number={(i + 1).toString().padStart(2, "0")} />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-8 flex justify-center">
        <button className="cursor-pointer relative flex items-center gap-2 px-5 py-2 border border-black rounded-full overflow-hidden bg-white/80 shadow-md">
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
  );
};

// ─── TABLET (MD) — All 8 cards left + sticky image right, no animation ───────
const TabletLayout = () => {
  return (
    <section className="hidden md:block lg:hidden w-full bg-white py-8 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[30px] text-black font-bold leading-tight">
            How Beelockchain Delivers{" "}
            <span className="text-yellow-400">Digital Transformation</span> for
            Business Value Creation
          </h2>
          <p className="mt-4 mx-auto text-black text-[14px] font-poppins font-medium max-w-2xl">
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
                <h3 className="text-[14px] font-semibold mb-2 text-black font-poppins">
                  {item.title}
                </h3>
                <p className="text-black text-[12px] leading-relaxed font-poppins pr-8">
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
          <h2 className="text-[36px] md:text-[36px] lg:text-[36px] xl:text-[30px] text-black font-bold leading-tight">
            How Beelockchain Delivers{" "}
            <span className="text-yellow-400">Digital Transformation</span> for{" "}
            <br />
            Business Value Creation
          </h2>
          <p
            ref={paragraphRef}
            className="mt-6 mx-auto text-black text-[16px] font-poppins font-medium max-w-xl md:max-w-2xl lg:max-w-4xl"
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
                  <h3 className="text-xl font-semibold mb-3 text-black font-poppins">{item.title}</h3>
                  <p className="text-black text-[14px] leading-relaxed font-poppins pr-10">{item.description}</p>
                  <div className="absolute bottom-4 right-6 opacity-40">
                    <NumberSvg number={(index + 1).toString().padStart(2, "0")} />
                  </div>
                </div>
              ))}
            </div>

            <div ref={secondSetRef} className="absolute inset-0 flex flex-col gap-5 mt-15">
              {secondFourCards.map((item, index) => (
                <div key={index + 4} className="relative p-6 rounded-xl bg-[#E2E2E2] shadow-sm h-[180px] md:h-[180px] lg:h-[220px] xl:h-[180px]">
                  <h3 className="text-xl font-semibold mb-3 text-black font-poppins">{item.title}</h3>
                  <p className="text-black text-[14px] leading-relaxed font-poppins pr-10">{item.description}</p>
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
                  <span className="relative z-10 font-poppins text-black text-sm md:text-xs lg:text-base xl:text-[12px] whitespace-nowrap">
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
      {/* Mobile (< md): stacked cards scroll-peel animation */}
      <MobileCardStack />

      {/* Tablet (md → lg): plain 8-card list + sticky image, no animation */}
      <TabletLayout />

      {/* Desktop (lg +): original pinned two-set scroll animation */}
      <DesktopLayout />
    </>
  );
};

export default BusinessValue;