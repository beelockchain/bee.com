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
    icon: "/assets/images/llm/custom-llm-icon1.png",
    title: "Custom LLM Development",
    description:
      "We build proprietary large language models trained entirely on your domain data. From continued pre-training of open-source foundations like LLaMA 3.1 and Mistral to full SFT, RLHF alignment, and DPO optimization. The result is a model that speaks your industry's language with the accuracy you define.",
  },
  {
    id: 2,
    icon: "/assets/images/llm/custom-llm-icon2.png",
    title: "LLM Fine-Tuning Services",
    description:
      "Our LLM Developers are adapting the foundation models, such as GPT-4o, Claude 3.5, Gemini 1.5, to your industry-specific vocabulary, brand tone, output format, and compliance requirements using LoRA, QLoRA, and PEFT methods. Fine-tuning delivers dramatically better task-specific accuracy while keeping the inference costs manageable at scale.",
  },
  {
    id: 3,
    icon: "/assets/images/llm/custom-llm-icon3.png",
    title: "RAG Pipeline Development",
    description:
      "Our team of LLM developers designs and builds production-ready Retrieval-Augmented Generation systems that connect your LLM to live enterprise knowledge bases, documents, and databases, delivering accurate, source-grounded, hallucination-resistant responses at scale without the cost of continuous retraining.",
  },
  {
    id: 4,
    icon: "/assets/images/llm/custom-llm-icon4.png",
    title: "AI Agent Development",
    description:
      "Our AI experts build autonomous LLM-powered agents that plan, reason, use tools, and execute multi-step workflows without constant human oversight. From single-purpose task agents to multi-agent orchestration systems with memory, tool use, and feedback loops built on CrewAI, LangGraph, and AutoGen. As part of our AI agent development services, we build systems that automate complex workflows.",
  },
  {
    id: 5,
    icon: "/assets/images/llm/custom-llm-icon5.png",
    title: "LLM Integration Services",
    description:
      "Embed LLM capabilities into your existing enterprise software, such as CRMs, ERPs, helpdesk platforms, and document systems, via a clean API architecture. At Beelockchain, our LLM specialists integrate with Salesforce, HubSpot, SAP, Zendesk, Confluence, and custom applications with bi-directional data flow and enterprise-grade rate management.",
  },
  {
    id: 6,
    icon: "/assets/images/llm/custom-llm-icon6.png",
    title: "LLM Application Development",
    description:
      "Build full-stack LLM applications, internal copilots, document Q&A systems, intelligent search interfaces, content generation engines, compliance checkers, complete with authentication, real-time streaming, usage analytics, and scalable cloud infrastructure ready for enterprise load. Also, we offer generative AI development services to build advanced AI systems beyond LLM applications.",
  },
  {
    id: 7,
    icon: "/assets/images/llm/custom-llm-icon6.png",
    title: "LLM Security & Compliance",
    description:
      "Enterprise-grade LLM security covering prompt injection defence, jailbreak prevention, PII detection and redaction, model output auditing, toxicity filtering, GDPR/HIPAA data handling, and AI governance documentation — including fully on-premise deployment for maximum data sovereignty.",
  },
  {
    id: 8,
    icon: "/assets/images/llm/custom-llm-icon7.png",
    title: "Prompt Engineering & Optimization",
    description:
      "Systematic prompt design, chain-of-thought engineering, few-shot example curation, and evaluation framework development that maximizes model accuracy, consistency, and safety, reducing inference latency and token costs by up to 40% at production scale.",
  },
  {
    id: 9,
    icon: "/assets/images/llm/custom-llm-icon9.png",
    title: "LLM Consulting & Strategy",
    description:
      "A model-agnostic strategy engagement covering use-case discovery, build-vs-buy analysis, model benchmarking, architecture design, and a prioritized LLM roadmap. Our LLM consulting service prevents the single most costly mistake in AI: investing in the wrong solution from the start",
  },
  {
    id: 10,
    icon: "/assets/images/llm/custom-llm-icon10.png",
    title: "Hire LLM Developers",
    description:
      "Hire LLM developers from Beelockchain to build AI-powered applications, chatbots, and intelligent automation solutions using advanced language models like GPT, LLaMA, and Gemini.",
  },
];

// ✅ Fixed: row 3 now correctly has both card 7 and card 8
const rows = [
  [benefitCards[0], benefitCards[1]], // row 0
  [benefitCards[2], benefitCards[3]], // row 1
  [benefitCards[4], benefitCards[5]], // row 2
  [benefitCards[6], benefitCards[7]], // row 3 — both cards
  [benefitCards[8], benefitCards[9]], // row 4 — both cards
];

const DESCRIPTION_PREVIEW_LENGTH = 150;

// ─── CARD ────────────────────────────────────────────────────────────────────
const Card: React.FC<{ card: BenefitCard }> = ({ card }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = card.description.length > DESCRIPTION_PREVIEW_LENGTH;
  const visibleDescription =
    shouldTruncate && !isExpanded
      ? `${card.description.slice(0, DESCRIPTION_PREVIEW_LENGTH).trimEnd()}...`
      : card.description;

  return (
    <div className="bg-[#F5F5F5] rounded-2xl p-4 shadow-lg hover:shadow-lg transition-shadow flex flex-col self-start">
      <div className="mb-2">
        <div className="w-10 h-10 xl:w-10 xl:h-10 bg-[#F5F5F5] rounded-lg flex items-center justify-center">
          <img
            src={card.icon}
            alt={card.title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <h3 className="text-base xl:text-[18px] font-bold text-gray-900 mb-1.5 leading-snug">
        {card.title}
      </h3>
      <div className="flex-1 flex flex-col">
        <p
          className={`text-left text-[13px] md:text-[12px] lg:text-[14px] xl:text-[14px] font-poppins font-medium text-black ${isExpanded ? "overflow-y-auto pr-1" : ""}`}
        >
          {visibleDescription}
        </p>
        {shouldTruncate ? (
          <button
            type="button"
            onClick={() => setIsExpanded((value) => !value)}
            className="cursor-pointer mt-3 self-start text-[13px] font-semibold text-[#F9C901] hover:text-[#d2a900] transition-colors"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        ) : null}
      </div>
    </div>
  );
};

// ─── LEFT PANEL ──────────────────────────────────────────────────────────────
const LeftPanel: React.FC = () => (
  <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
    <h2 className="text-[17px] sm:text-[20px] md:text-[21px] lg:text-[28px] xl:text-[36px] font-bold mb-6 leading-tight text-black">
      
      Our{" "}
      <span className="shine-text relative text-[#F9C901]">
        Large Language Model{" "}
      </span>{" "}
      Development Services
    </h2>
   
    <p className="sm:text-left md:text-left  text-[13px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-poppins font-medium mb-4 text-black text-center lg:text-left">
      Beelockchain’s end-to-end Large Language Model development services cover
      every stage of the AI lifecycle. From strategy and model selection, our
      expert AI Engineers, to production deployment and continuous
      optimization.{" "}
    </p>
    <Image
      src="/assets/images/llm/custom-llm-img.png"
      alt="Custom LLM development illustration"
      width={520}
      height={360}
      sizes="(max-width: 1024px) 100vw, 520px"
      className="w-full max-w-md object-contain self-center lg:self-start"
    />
  </div>
);

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
const CustomLlm: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const columnRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const ROW_H = 260;
  const COLUMN_GAP = 10;
  const ROW_GAP = 10;
  const STEP = ROW_H + ROW_GAP; // distance to travel per scroll step
  const PEEK = 0; // px of next row visi320pxble at bottom as hint
  const WINDOW_H = ROW_H * 2.1 + ROW_GAP + PEEK; // clipping window height
  const HEADER_OFFSET = 80;

  // Now 4 rows, 2 steps to show all (rows 0+1 visible → scroll → rows 1+2 → scroll → rows 2+3)
  const TOTAL_STEPS = rows.length - 2; // = 2

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 991px)");
    const check = () => setIsMobile(mediaQuery.matches);

    check();
    mediaQuery.addEventListener("change", check);
    return () => mediaQuery.removeEventListener("change", check);
  }, []);

  // ── GSAP desktop animation ────────────────────────────────────────────────
  useEffect(() => {
    if (isMobile !== false) return;
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
        <div className="w-full max-w-md px-2">
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

  if (isMobile === null) {
    return (
      <section className="relative bg-gray-50 py-6 lg:py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <LeftPanel />
        </div>
      </section>
    );
  }

  // ── MOBILE LAYOUT ─────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <section className="relative bg-gray-50 py-6">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-2">
            <LeftPanel />
          </div>
          <MobileCards />
        </div>
      </section>
    );
  }

  // ── DESKTOP LAYOUT ────────────────────────────────────────────────────────
  return (
    <section ref={sectionRef} className="relative bg-gray-50">
      <div className="min-h-[calc(100vh-5rem)] flex items-center">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1380px]">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-10 items-center mt-6">
            <LeftPanel />

            <div
              className="relative overflow-hidden"
              style={{ height: `${WINDOW_H}px` }}
            >
              {/* Top fade — masks rows exiting upward */}
              <div
                className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
                style={{
                  height: "20px",
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
                  <div
                    ref={columnRef}
                    className="absolute left-0 right-0 top-0 flex flex-col"
                    style={{
                      gap: `${ROW_GAP}px`,
                    }}
                  >
                    {rows.map((rowCards, rowIdx) => (
                      <div
                        key={rowIdx}
                        className="grid grid-cols-2 items-start"
                        style={{
                          minHeight: `${ROW_H}px`,
                          columnGap: `${COLUMN_GAP}px`,
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

export default CustomLlm;
