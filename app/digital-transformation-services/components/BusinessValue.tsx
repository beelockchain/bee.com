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
        fontFamily="Poppins, sans-serif"
      >
        {number}
      </text>
    </svg>
  );
};

// ─── MOBILE CARD STACK ────────────────────────────────────────────────────────
// Your original working scroll logic — untouched.
// Added on top:
//   1. Touch/swipe: each swipe advances or reverses exactly ONE card,
//      by programmatically scrolling the page to that card's scroll band.
//   2. Dot indicators: 8 dots on the right, one per card, active dot filled.
//
const CARD_H          = 300;
const CARD_PEEK       = 13;
const SCROLL_PER_CARD = 600;
const TOTAL_CARDS     = services.length; // 8
const DISMISSIBLE     = TOTAL_CARDS - 1; // 7 cards animate, card 08 stays
const SWIPE_THRESHOLD = 20;              // px needed to commit a swipe

const MobileCardStack = () => {
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
          card.style.transform = `translateY(-${CARD_H + 120}px) scale(0.85)`;
          card.style.opacity   = "0";
        } else if (i === activeIndex) {
          // Currently moving card (ONLY ONE)
          const ease    = Math.pow(progressInCard, 1);
          const yOffset = -(CARD_H + 120) * ease;
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
  const outerHeight = `calc(100vh + ${DISMISSIBLE * SCROLL_PER_CARD}px)`;

  return (
    <div
      ref={outerRef}
      className="block sm:hidden md:hidden w-full bg-white"
      style={{ height: outerHeight }}
    >
      {/* Sticky inner */}
      <div
        className="sticky top-0 w-full bg-white pt-8 pb-16 px-5"
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <div className="max-w-[400px] mx-auto h-full flex flex-col">

          {/* Heading */}
          <div className="text-center mb-10 flex-shrink-0">
            <h2 className="text-[19px] text-[#000000] font-bold leading-tight font-poppins">
              How Beelockchain Delivers{" "}
              <span className="text-yellow-400">Digital Transformation</span>{" "}
              for Business Value Creation
            </h2>
            <p className="mt-4 text-black text-[14px] font-poppins font-medium leading-relaxed">
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
                {services.map((item, i) => (
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
                      <h3 className="text-[15px] font-semibold mb-2 text-black font-poppins leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-black text-[13px] leading-relaxed font-poppins pr-10">
                        {item.description}
                      </p>
                      <div className="absolute bottom-0 right-0 opacity-25">
                        <NumberSvg number={(i + 1).toString().padStart(2, "0")} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dot Indicators — right side, vertical */}
              {/* <div className="flex flex-col gap-2 items-center">
                {services.map((_, i) => (
                  <div
                    key={i}
                    ref={(el) => { dotRefs.current[i] = el; }}
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      backgroundColor: i === 0 ? "#000" : "#D1D1D1",
                      transition: "background-color 0.25s ease, transform 0.25s ease",
                      transform: i === 0 ? "scale(1.3)" : "scale(1)",
                    }}
                  />
                ))}
              </div> */}

            </div>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0 flex justify-center pb-4">
          <a
            href="/contact-us"
            className="
              cursor-pointer
              inline-flex items-center gap-2
              w-fit
              px-4 py-2 md:px-2 md:py-1 lg:px-3 lg:py-2 xl:px-3 xl:py-2.5
              border border-black rounded-full
              bg-white
              hover:bg-gray-50
              transition-colors
            "
          >
            <span className="font-poppins text-black text-sm md:text-[12px] lg:text-[12px] xl:text-[15px]">
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
          </a>
          </div>

        </div>
      </div>
    </div>
  );
};

// ─── TABLET (MD) — All 8 cards left + sticky image right, no animation ───────
const 
TabletLayout = () => {
  return (
    <section className="hidden sm:block md:block lg:hidden w-full bg-white py-8 px-6 sm:px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[22px] sm:text-[19px] text-black font-bold leading-tight px-10">
            How Beelockchain Delivers{" "}
            <span data-text="Digital Transformation" className="shine-text relative text-yellow-400">Digital Transformation</span> for
            Business Value Creation
          </h2>
          <p className="mt-4 mx-auto text-black text-[14px] sm:text-[12px] font-poppins font-medium max-w-2xl">
            Beelockchain supports organizations through their digital
            transformation journey by combining consulting expertise with
            practical execution. Our end-to-end services improve process
            efficiency, modernize the workflows, and help businesses respond faster
            to change while delivering better customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-4">
            {services.map((item, index) => (
              <div key={index} className="relative p-5 rounded-xl bg-[#E2E2E2] shadow-sm">
                <h3 className="text-[13px] font-semibold mb-2 text-black font-poppins">{item.title}</h3>
                <p className="text-black text-[11px]  leading-relaxed font-poppins  pr-8 sm:pr-10">{item.description}</p>
                <div className="absolute bottom-2 right-3 opacity-40 ">
                  <NumberSvg number={(index + 1).toString().padStart(2, "0")} />
                </div>
              </div>
            ))}
          </div>

          <div className="sticky top-8">
            <Image src="/assets/images/business_val1.png" alt="Digital transformation visual" width={500} height={809} className="w-full object-contain rounded-xl" />
            <div className="mt-4">
              <a href="/contact-us">
              <button className="cursor-pointer relative flex items-center gap-2 px-4 py-2 border border-black rounded-full overflow-hidden bg-white/80 shadow-md">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)]" />
                <span className="relative z-10 font-poppins text-black text-sm whitespace-nowrap">Transform Your Business</span>
                <svg className="relative z-10 w-9 h-9" viewBox="0 0 56 55" fill="none">
                  <circle cx="28.2473" cy="27.0945" r="15.912" fill="#F6E000" stroke="#F9C901" strokeWidth="1.51543" />
                  <path d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865" stroke="black" strokeWidth="3.03086" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── DESKTOP (LG / XL) — Original pinned scroll animation ────────────────────
const DesktopLayout = () => {
  const sectionRef        = useRef<HTMLElement>(null);
  const paragraphRef      = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const firstSetRef       = useRef<HTMLDivElement>(null);
  const secondSetRef      = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(secondSetRef.current, { yPercent: 100 });
      gsap.set(firstSetRef.current, { yPercent: 0 });

      ScrollTrigger.create({
        trigger:    paragraphRef.current,
        start:      "top 10px",
        end:        "+=200%",
        pin:        sectionRef.current,

        pinSpacing: true,
        scrub:      1,
        onUpdate: (self) => {
          const progress = self.progress;

          // first set moves out
          gsap.to(firstSetRef.current, {
            yPercent: -100 * progress,
            // opacity: 1 - progress,
            duration: 0.1,
            overwrite: true,
          });

          // second set moves in
          gsap.to(secondSetRef.current, {
            yPercent: 100 - 100 * progress,
            opacity: progress,
            duration: 0.1,
            overwrite: true,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const firstFourCards  = services.slice(0, 4);
  const secondFourCards = services.slice(4, 8);

  return (
    <section ref={sectionRef} className="hidden sm:hidden lg:block w-full bg-white py-5 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-[36px] sm:text-[19px] md:text-[36px] lg:text-[28px] xl:text-[36px] text-black font-bold leading-tight">
            How Beelockchain Delivers{" "}
            <span data-text="Digital Transformation" className="shine-text relative text-[#f5c518]">Digital Transformation</span> for <br />
            Business Value Creation
          </h2>
          <p ref={paragraphRef} className="mt-6 mx-auto text-black lg:text-[14px] xl:text-[16px] font-poppins font-medium max-w-xl md:max-w-2xl lg:max-w-4xl">
            Beelockchain supports organizations through their digital transformation journey by combining
            consulting expertise with practical execution. Our end-to-end services improve process efficiency,
            modernize the workflows, and help businesses respond faster to change while delivering better customer experiences.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          <div ref={cardsContainerRef} className="relative h-[calc(4*180px+3*20px)] overflow-hidden">
            <div ref={firstSetRef} className="absolute inset-0 flex flex-col gap-5">
              {firstFourCards.map((item, index) => (
                <div key={index} className="relative p-6 rounded-xl bg-[#E2E2E2] shadow-sm md:h-[180px] lg:h-[220px] xl:h-[180px]">
                  <h3 className="text-[19px] md:text-[16px] lg:text-[16px] xl:text-[20px] font-semibold mb-3 text-black font-poppins">{item.title}</h3>
                  <p className="text-black text-[14px] lg:text-[12px] xl:text-[14px] leading-relaxed font-poppins pr-10 xl:pr-15">{item.description}</p>
                  <div className="absolute bottom-4 right-6 opacity-40">
                    <NumberSvg number={(index + 1).toString().padStart(2, "0")} />
                  </div>
                </div>
              ))}
            </div>

            <div ref={secondSetRef} className="absolute inset-0 flex flex-col gap-5 mt-5">
              {secondFourCards.map((item, index) => (
                <div key={index + 4} className="relative p-6 rounded-xl bg-[#E2E2E2] shadow-sm h-[180px] md:h-[180px] lg:h-[220px] xl:h-[180px]">
                  <h3 className="text-[19px] md:text-[16px] lg:text-[16px] xl:text-[20px] font-semibold mb-3 text-black font-poppins">{item.title}</h3>
                  <p className="text-black text-[14px] lg:text-[12px] xl:text-[14px] leading-relaxed font-poppins pr-10 xl:pr-15">{item.description}</p>
                  <div className="absolute bottom-4 right-6 opacity-40">
                    <NumberSvg number={(index + 5).toString().padStart(2, "0")} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full h-full">
            <div className="relative w-full h-full min-h-[400px]">
              <Image src="/assets/images/business_val1.png" alt="Digital transformation visual" width={500} height={809} className="object-fit xl:ml-25" />
              <div className="absolute bottom-6">
              <a href="/contact-us">
              <button className="cursor-pointer relative flex items-center gap-2 md:gap-2 lg:gap-3 xl:gap-0 px-4 py-1.5 md:px-3 md:py-1.5 lg:px-6 lg:py-2 xl:px-3 xl:py-2 border border-black rounded-full overflow-hidden bg-white/80 shadow-md">
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)]" />
                  <span className="relative z-10 font-poppins text-black text-sm md:text-xs lg:text-[12px] xl:text-[16px] whitespace-nowrap">Transform Your Business</span>
                  <svg className="relative z-10 w-10 h-10 md:w-8 md:h-8 lg:w-7 lg:h-7" viewBox="0 0 56 55" fill="none">
                    <circle cx="28.2473" cy="27.0945" r="15.912" fill="#F6E000" stroke="#F9C901" strokeWidth="1.51543" />
                    <path d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865" stroke="black" strokeWidth="3.03086" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </a>
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
      <MobileCardStack />
      <TabletLayout />
      <DesktopLayout />
    </>
  );
};

export default BusinessValue;