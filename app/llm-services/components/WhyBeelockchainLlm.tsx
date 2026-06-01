"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState, useCallback } from "react";

interface BenefitCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const benefitCards: BenefitCard[] = [
  {
    id: 1,
    icon: "/assets/images/llm/why-llm-icon1.png",
    title: "Experienced AI Engineers",
    description:
      "Our LLM engineers specialize in transformer architectures, training pipelines, inference optimization, and enterprise deployment.",
  },
  {
    id: 2,
    icon: "/assets/images/llm/why-llm-icon2.png",
    title: "Customized AI Solutions",
    description:
      "Every solution we build is customized to align with specific business objectives and operational workflows.",
  },
  {
    id: 3,
    icon: "/assets/images/llm/why-llm-icon3.png",
    title: "Proven AI Implementation",
    description:
      "Beelockchain builds ML solutions around measurable and result-oriented business outcomes. If the impact isn’t clear, we suggest a different & modern approach.",
  },
  {
    id: 4,
    icon: "/assets/images/llm/why-llm-icon4.png",
    title: "Secure AI Infrastructure",
    description:
      "Our AI solutions follow strong security practices and are designed to support growing data and user demands.",
  },
  {
    id: 5,
    icon: "/assets/images/llm/why-llm-icon5.png",
    title: "End-to-End LLM Development",
    description:
      "From initial consultation to deployment and optimization, we provide comprehensive LLM development services.",
  },
  {
    id: 6,
    icon: "/assets/images/llm/why-llm-icon6.png",
    title: "Business-Centric Approach",
    description:
      "Every solution is designed to deliver measurable value to improve efficiency, reduce costs, and enhance user experience.",
  },
];

// ✅ Fixed: row 3 now correctly has both card 7 and card 8
const rows = [
  [benefitCards[0], benefitCards[1]], // row 0
  [benefitCards[2], benefitCards[3]], // row 1
  [benefitCards[4], benefitCards[5]], // row 2
];

// ─── CARD ────────────────────────────────────────────────────────────────────
const Card: React.FC<{ card: BenefitCard }> = ({ card }) => (
  <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-md h-full flex flex-col items-start justify-center">
    <div className="mb-3 flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F5F5] border border-[#E5E7EB]">
      <img
        src={card.icon}
        alt={card.title}
        className="w-6 h-6 object-contain"
      />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug text-left">
      {card.title}
    </h3>
    <p className="text-black text-[12px] md:text-[10px] lg:text-[12px] xl:text-[14px] font-poppins leading-relaxed font-medium">
      {card.description}
    </p>
  </div>
);

// ─── LEFT PANEL ──────────────────────────────────────────────────────────────
const LeftPanel: React.FC = () => (
  <div className="flex flex-col justify-center">
    <h2 className="text-3xl lg:text-[28px] xl:text-[36px] font-bold mb-6 leading-tight text-black">
      <span className="shine-text relative text-[#F9C901]">
        Why Beelockchain{" "}
      </span>{" "}
      For Large Language Model Development?
    </h2>
    <p className="text-center sm:text-left md:text-left  text-[13px] md:text-[12px] lg:text-[14px] xl:text-[14px] font-poppins font-medium mb-4  text-black">
      Selecting the right development partner plays a critical role in the
      success of AI initiatives. Beelockchain, a leading LLM solutions provider,
      offers a combination of technical expertise and strategic guidance to help
      businesses implement powerful LLM solutions.{" "}
    </p>
    <div className="mt-6 flex flex-row gap-3">
      <a href="/contact-us">
        <button className="group cursor-pointer relative inline-flex items-center px-3 py-2 border border-black rounded-full bg-white overflow-hidden">
          {/* ripple */}
          <span className="absolute inset-0 flex items-center justify-center z-0">
            <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
          </span>

          {/* glow */}
          <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300" />

          <span className="relative z-10  text-black text-[14px]">
            Digitalize Your Business Now
          </span>

          <svg
            className="relative z-10 w-8 h-8 ml-1 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95"
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
        </button>
      </a>

      <button className="group cursor-pointer relative inline-flex items-center justify-center px-3 py-2 border border-black rounded-full bg-white overflow-hidden">
        {/* ripple */}
        <span className="absolute inset-0 flex items-center justify-center z-0">
          <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
        </span>

        {/* glow */}
        <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300" />

        <span className="relative z-10  text-black text-[14px]">
          Explore Our Portfolio
        </span>

        <svg
          className="relative z-10 w-8 h-8 ml-1 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95"
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
      </button>
    </div>
  </div>
);

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
const WhyBeelockchainLlm: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const columnRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const ROW_H =245;
  const GAP = 14; // gap between columns inside a row AND between rows
  const STEP = ROW_H + GAP; // distance to travel per scroll step
  const PEEK = 0; // px of next row visible at bottom as hint
  const WINDOW_H = ROW_H * 2.1 + GAP + PEEK; // clipping window height
  const HEADER_OFFSET = 80;

  // Now 4 rows, 2 steps to show all (rows 0+1 visible → scroll → rows 1+2 → scroll → rows 2+3)
  const TOTAL_STEPS = rows.length - 2; // = 2

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ── GSAP desktop animation ────────────────────────────────────────────────
  useEffect(() => {
    if (isMobile) return;
    if (typeof window === "undefined") return;

    let cleanup: (() => void) | undefined;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([gsapModule, stModule]) => {
        const gsap = gsapModule.default;
        const { ScrollTrigger } = stModule;
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current || !columnRef.current) return;

        const totalMove = STEP * TOTAL_STEPS; // 230 × 2 = 460px
        const scrollDistance = TOTAL_STEPS * 140;
        const ctx = gsap.context(() => {
          gsap.fromTo(
            columnRef.current,
            { y: 0 },
            {
              y: -totalMove,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: `top top+=${HEADER_OFFSET}`,
                end: `+=${scrollDistance}%`,
                scrub: 1.6,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                fastScrollEnd: true,
              },
            },
          );
        }, sectionRef);

        cleanup = () => ctx.revert();
      },
    );

    return () => cleanup?.();
  }, [isMobile, STEP, TOTAL_STEPS]);

  const goNext = useCallback(
    () => setActiveIndex((i) => (i + 1) % benefitCards.length),
    [],
  );
  const goPrev = useCallback(
    () =>
      setActiveIndex(
        (i) => (i - 1 + benefitCards.length) % benefitCards.length,
      ),
    [],
  );

  // ── Mobile Cards ──────────────────────────────────────────────────────────
  const MobileCards = () => {
    const card = benefitCards[activeIndex];
    return (
      <div className="w-full flex flex-col items-center mt-8">
        <div className="w-full max-w-sm px-6">
          <Card card={card} />
        </div>
        <div className="flex gap-2 mt-5">
          {benefitCards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? "bg-yellow-400 w-4" : "bg-gray-300"}`}
            />
          ))}
        </div>
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

  // ── MOBILE LAYOUT ─────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <section className="relative bg-gray-50 py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col items-center text-center mb-2">
            <span className="inline-block py-1 border-b-2 border-[#F9C901] text-[13px] font-bold text-black mb-4">
              What Make Us Unique
            </span>
            <h2 className="text-[20px] font-bold leading-tight text-black">
              Benefits Of{" "}
              <span className="shine-text relative text-yellow-400">
                Beelockchain's
              </span>{" "}
              Digital Transformation Services
            </h2>
            <p className="text-black text-[14px] mt-4 leading-relaxed max-w-sm md:max-w-xl font-semibold">
              Begin your transformation journey with Beelockchain's skilled
              experts. Build a future-ready organization using a structured
              digital business transformation service approach.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a href="/contact-us">
                <button className="group cursor-pointer relative inline-flex items-center px-3 py-2 border border-black rounded-full bg-white overflow-hidden">
                  {/* ripple */}
                  <span className="absolute inset-0 flex items-center justify-center z-0">
                    <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
                  </span>

                  {/* glow */}
                  <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300" />

                  <span className="relative z-10  text-black text-[12px]">
                    Digitalize Your Business Now
                  </span>

                  <svg
                    className="relative z-10 w-8 h-8 ml-1 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95"
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
                </button>
              </a>

              <button className="group cursor-pointer relative inline-flex items-center justify-center px-3 py-2 border border-black rounded-full bg-white overflow-hidden">
                {/* ripple */}
                <span className="absolute inset-0 flex items-center justify-center z-0">
                  <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
                </span>

                {/* glow */}
                <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300" />

                <span className="relative z-10  text-black text-[12px]">
                  Explore Our Portfolio
                </span>

                <svg
                  className="relative z-10 w-8 h-8 ml-1 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95"
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
              </button>
            </div>
          </div>
          <MobileCards />
        </div>
      </section>
    );
  }

  // ── DESKTOP LAYOUT ────────────────────────────────────────────────────────
  return (
    <section ref={sectionRef} className="relative bg-gray-50">
      <div className="min-h-[calc(100vh-5rem)] pt-20 flex items-center">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1380px]">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-10 items-center">
            <LeftPanel />

            <div
              className="relative overflow-hidden"
              style={{ height: `${WINDOW_H}px` }}
            >
              {/* Top fade — masks rows exiting upward */}
              <div
                className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
                style={{
                  height: "60px",
                  background:
                    "linear-gradient(to bottom, #F9FAFB 0%, transparent 100%)",
                }}
              />
              {/* Bottom fade — peek hint */}
              <div
                className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
                style={{
                  height: `${PEEK + 10}px`,
                  background:
                    "linear-gradient(to top, #F9FAFB 0%, transparent 100%)",
                }}
              />

              {/* Moving column — GSAP drives translateY on this */}
              <div ref={columnRef} className="absolute left-0 right-0 top-0 ">
                {rows.map((rowCards, rowIdx) => (
                  <div
                    key={rowIdx}
                    className="grid grid-cols-2"
                    style={{
                      gap: `${GAP}px`, // gap between the 2 cards in a row
                      height: `${ROW_H}px`,
                      marginBottom: rowIdx < rows.length - 1 ? `${GAP}px` : 0, // gap between rows
                    }}
                  >
                    {rowCards.map((card) => (
                      <Card key={card.id} card={card} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBeelockchainLlm;
