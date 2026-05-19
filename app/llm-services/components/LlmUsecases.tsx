"use client";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/app/devops-services/components/useIsMobile";
import Link from "next/link";

const services = [
  {
    title: "Intelligent Document Processing",
    description:
      "Automatically analyze contracts, reports, and technical documents to extract key insights, summarize content, and organize information without manual effort.",
  },
  {
    title: "Conversational AI & Virtual Assistants",
    description:
      "AI chatbots and assistants understand user intent and provide real-time support across websites, apps, and messaging platforms.",
  },
  {
    title: "Content Generation at Scale",
    description:
      "Generate marketing content, product descriptions, documentation, and knowledge articles efficiently while maintaining a consistent brand voice.",
  },
  {
    title: "Legal Contract Review & Analysis",
    description:
      "Identify key clauses, highlight potential risks, and summarize complex legal agreements to support faster document review.",
  },

  {
    title: "Multilingual Translation & Localization",
    description:
      "Translate and adapt content across multiple languages while preserving meaning, tone, and context.",
  },
  {
    title: "Code Generation & Review",
    description:
      "Assist developers with code generation, debugging support, documentation, and automated code reviews.",
  },
  {
    title: "Data Analysis & Business Intelligence",
    description:
      "Use natural language queries to analyze data, generate insights, and create reports for better decision-making.",
  },
];

const SidePreviewCard = ({ service }: { service: (typeof services)[0] }) => {
  return (
    <div className="max-w-[230px] text-center xl:max-w-[250px]">
      <h3 className="text-lg font-semibold  mb-3 text-black font-poppins">
        {service.title}
      </h3>
      <p className="flex-1 text-[11px] font-semibold leading-relaxed text-black sm:text-[10px] sm:leading-[1.45] md:text-[11px] lg:text-[13px] xl:text-[14px]">
        {service.description}
      </p>
    </div>
  );
};

const FeaturedServiceCard = ({
  previousService,
  service,
  nextService,
  slideDirection = null,
}: {
  previousService: (typeof services)[0];
  service: (typeof services)[0];
  nextService: (typeof services)[0];
  slideDirection?: "next" | "prev" | null;
}) => {
  const trackClassName =
    slideDirection === "next"
      ? "animate-[usecaseTrackNext_420ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
      : slideDirection === "prev"
        ? "animate-[usecaseTrackPrev_420ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
        : "translate-x-[-33.333%]";

  const contentPanel = (item: (typeof services)[0]) => (
    <div className="flex w-full shrink-0 basis-1/3 flex-col items-center justify-center px-8 py-8 text-center">
      <h3 className="mb-3 max-w-[240px] text-lg font-semibold text-black font-poppins">
        {item.title}
      </h3>
      <p className="text-[11px] font-semibold leading-relaxed text-black sm:text-[10px] sm:leading-[1.45] md:text-[11px] lg:text-[13px] xl:text-[14px]">
        {item.description}
      </p>
    </div>
  );

  return (
    <div className="relative mx-auto min-h-[210px] w-full max-w-[380px] overflow-hidden rounded-[20px] border border-[#d4d4d4] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.14)]">
      <div className="absolute inset-0 overflow-hidden">
        <div className={`flex h-full w-[300%] ${trackClassName}`}>
          {contentPanel(previousService)}
          {contentPanel(service)}
          {contentPanel(nextService)}
        </div>
      </div>
    </div>
  );
};

// Reusable CTA Button Component
const CTAButton = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <div
      className={`
    w-full flex items-center justify-center gap-3
    ${isMobile ? "flex-col" : "flex-row"}
  `}
    >
      {" "}
      <Link href="/contact-us" target="_blank">
        <button
          className={`group relative flex items-center justify-center gap-2 border border-black rounded-full overflow-hidden cursor-pointer bg-white ${
            isMobile
              ? "px-4 py-3 w-auto min-w-[200px]"
              : "px-4 py-2 lg:px-4 lg:py-0 w-auto"
          }`}
        >
          <span className="absolute inset-0 flex items-center justify-center z-0">
            <span className="w-10 h-10 bg-gray-100 rounded-full scale-0  transition-transform duration-500 ease-out" />
          </span>
          <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />
          <span
            className={`relative z-10 text-black font-medium text-center transition-colors ${
              isMobile ? "text-[12px]" : "text-sm whitespace-nowrap"
            }`}
          >
            Contact Our AI Engineer
          </span>
          <svg
            viewBox="0 0 56 55"
            className={`relative z-10 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95 ${
              isMobile ? "w-6 h-6 ml-2" : "w-10 h-10 lg:w-14 lg:h-14"
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
      </Link>
      <Link href="/contact-us" target="_blank">
        <button
          className={`group relative flex items-center justify-center gap-2 border border-black rounded-full overflow-hidden cursor-pointer bg-white ${
            isMobile
              ? "px-4 py-3 w-auto min-w-[200px]"
              : "px-4 py-2 lg:px-4 lg:py-0 w-auto"
          }`}
        >
          <span className="absolute inset-0 flex items-center justify-center z-0">
            <span className="w-10 h-10 bg-gray-100 rounded-full scale-0  transition-transform duration-500 ease-out" />
          </span>
          <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />
          <span
            className={`relative z-10 text-black font-medium text-center transition-colors ${
              isMobile ? "text-[12px]" : "text-sm whitespace-nowrap"
            }`}
          >
            Explore Our Work
          </span>
          <svg
            viewBox="0 0 56 55"
            className={`relative z-10 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95 ${
              isMobile ? "w-6 h-6 ml-2" : "w-10 h-10 lg:w-14 lg:h-14"
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
      </Link>
    </div>
  );
};

// Header Component
const SectionHeader = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <div className={isMobile ? "text-center mb-0" : "mb-0"}>
      <div
        className={
          isMobile ? "" : "flex items-start justify-between gap-8 xl:gap-12"
        }
      >
        <div className={isMobile ? "" : "max-w-2xl text-start"}>
          <h2
            className={`font-bold text-gray-900 ${
              isMobile
                ? "text-[19px] leading-tight mb-3"
                : "text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px] text-black font-bold leading-tight"
            }`}
          >
            Large Language Model Use Cases That Drive
            <span
              data-text="Beelockchain A Leader"
              className="shine-text text-[#F5B800] relative mx-1"
            >
              Real Business Value
            </span>
          </h2>

          <p
            className={`text-black ${
              isMobile
                ? "text-[13px] font-medium font-poppins mb-0 max-w-2xl mx-auto"
                : "text-[13px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-black font-medium font-poppins mt-4 max-w-2xl"
            }`}
          >
            The most valuable LLM applications focus on measurable business
            outcomes. Organizations use large  language models to automate tasks
            that require heavy language processing while creating systems that
            extract information and develop intelligent, user-friendly
            interfaces.
          </p>
        </div>

        <div
          className={
            isMobile
              ? "w-full flex justify-center items-center mt-6"
              : "flex-shrink-0 pt-5"
          }
        >
          <CTAButton isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
};

// ─── Mobile Carousel ────────────────────────────────────────────────────────
// Mirrors exact carousel behaviour from BenefitsSection
const MobileCarousel = () => {
  return (
    <div
      className="
    flex gap-4 overflow-x-auto pl-4 pr-2
    scroll-smooth snap-x snap-mandatory
    no-scrollbar mt-4
  "
    >
      {services.map((service, i) => (
        <div key={i} className="snap-start flex-shrink-0 w-[88%]">
          <div className="bg-[#F8F8F8] rounded-2xl p-5 h-full">
            <div className="mb-3 flex items-start justify-start"></div>

            <h3 className="text-base font-bold text-gray-900 mb-2">
              {service.title}
            </h3>

            <p className="text-xs text-black leading-relaxed font-medium font-poppins">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const LlmUsecases = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(1);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev" | null>(
    null,
  );
  const timeoutRef = useRef<number | null>(null);

  const previousIndex = (activeIndex - 1 + services.length) % services.length;
  const nextIndex = (activeIndex + 1) % services.length;

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const runCarouselTransition = (nextDirection: "next" | "prev") => {
    if (slideDirection !== null) {
      return;
    }

    setSlideDirection(nextDirection);

    timeoutRef.current = window.setTimeout(() => {
      setActiveIndex((currentIndex) =>
        nextDirection === "next"
          ? (currentIndex + 1) % services.length
          : (currentIndex - 1 + services.length) % services.length,
      );
      setSlideDirection(null);
      timeoutRef.current = null;
    }, 420);
  };

  const showPrevious = () => {
    runCarouselTransition("prev");
  };

  const showNext = () => {
    runCarouselTransition("next");
  };

  return (
    <section className="relative pt-10 pb-2  px-6 h-fit ">
      <div className="max-w-7xl mx-auto">
        {isMobile ? (
          <div className="pb-10">
            <SectionHeader isMobile={true} />
            <MobileCarousel />
          </div>
        ) : (
          <div>
            <SectionHeader isMobile={false} />

            <div className="relative overflow-hidden rounded-[36px] px-8 pb-1 pt-6 lg:px-12 xl:px-16">
              <div className="pointer-events-none absolute left-1/2 top-[72px] h-[210px] w-[430px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(248,223,109,0.5)_0%,rgba(248,223,109,0.22)_48%,rgba(248,223,109,0)_76%)] blur-2xl" />

              <div className="relative z-0 flex justify-center">
                <div className="flex  items-center justify-center rounded-full">
                  <img
                    src="/assets/images/llm/llm-logo.png"
                    alt="LLM Logo"
                    className="w-auto object-contain"
                  />
                </div>
              </div>

              <div className="relative z-20 -mt-36 grid grid-cols-[1fr_minmax(320px,380px)_1fr] items-center gap-12 xl:gap-16">
                <div className="flex justify-end">
                  <SidePreviewCard service={services[previousIndex]} />
                </div>

                <FeaturedServiceCard
                  previousService={services[previousIndex]}
                  service={services[activeIndex]}
                  nextService={services[nextIndex]}
                  slideDirection={slideDirection}
                />

                <div className="flex justify-start">
                  <SidePreviewCard service={services[nextIndex]} />
                </div>
              </div>

              <div className="relative z-10 mt-10 flex items-center justify-center gap-3">
                <button
                  type="button"
                  aria-label="Previous use case"
                  onClick={showPrevious}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8d8d8] bg-white text-black transition-colors hover:bg-[#f7f7f7]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                <button
                  type="button"
                  aria-label="Next use case"
                  onClick={showNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8d8d8] bg-white text-black transition-colors hover:bg-[#f7f7f7]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes usecaseTrackNext {
          0% {
            transform: translateX(-33.333%);
          }

          100% {
            transform: translateX(-66.666%);
          }
        }

        @keyframes usecaseTrackPrev {
          0% {
            transform: translateX(-33.333%);
          }

          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  );
};

export default LlmUsecases;
