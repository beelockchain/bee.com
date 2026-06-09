"use client";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/app/devops-development-company/components/useIsMobile";
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

const UseCaseCard = ({
  service,
  isActive = false,
}: {
  service: (typeof services)[0];
  isActive?: boolean;
}) => {
  return (
    <div
      className={`mx-auto flex h-[260px] min-h-[260px] w-full max-w-[560px] flex-col items-center justify-center overflow-hidden rounded-3xl border-2 bg-white px-5 py-6 text-center transition-[border-color,box-shadow] duration-300 sm:px-6 sm:py-7 ${
        isActive
          ? "border-[#F6E000] shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
          : "border-[#d4d4d4] shadow-none"
      }`}
    >
      <h3 className="mb-3 min-h-[48px] font-poppins text-base font-semibold leading-tight text-black sm:text-lg">
        {service.title}
      </h3>
      <p className="max-w-[430px] text-center text-[13px] font-poppins font-medium leading-relaxed text-black md:text-[12px] lg:text-[14px] xl:text-[14px]">
        {service.description}
      </p>
    </div>
  );
};

const DesktopCarousel = ({
  visibleServices,
  slideDirection = null,
}: {
  visibleServices: (typeof services)[0][];
  slideDirection?: "next" | "prev" | null;
}) => {
  const trackClassName =
    slideDirection === "next"
      ? "animate-[usecaseCardTrackNext_420ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
      : slideDirection === "prev"
        ? "animate-[usecaseCardTrackPrev_420ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
        : "translate-x-[-33.333%]";
  const highlightedIndex =
    slideDirection === "next" ? 3 : slideDirection === "prev" ? 1 : 2;

  return (
    <div className="relative h-[292px] overflow-hidden px-8 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-7 bg-white" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-7 bg-white" />
      <div
        className={`flex h-full transform-gpu items-stretch will-change-transform ${trackClassName}`}
      >
        {visibleServices.map((service, index) => (
          <div
            key={`${service.title}-${index}`}
            className="flex min-w-0 basis-1/3 shrink-0 px-1"
          >
            <UseCaseCard
              service={service}
              isActive={index === highlightedIndex}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const IndicatorDots = ({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (targetIndex: number) => void;
}) => {
  return (
    <div className="flex items-center justify-center gap-2">
      {services.map((service, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={service.title}
            type="button"
            aria-label={`Go to ${service.title}`}
            aria-pressed={isActive}
            onClick={() => onSelect(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              isActive
                ? "w-8 bg-[#F6E000]"
                : "w-2.5 bg-[#d2d2d2] hover:bg-[#b8b8b8]"
            }`}
          />
        );
      })}
    </div>
  );
};

const getDirectionalSteps = (fromIndex: number, targetIndex: number) => {
  const forwardSteps =
    (targetIndex - fromIndex + services.length) % services.length;
  const backwardSteps =
    (fromIndex - targetIndex + services.length) % services.length;

  if (forwardSteps === 0) {
    return { direction: null, steps: 0 };
  }

  if (forwardSteps <= backwardSteps) {
    return { direction: "next" as const, steps: forwardSteps };
  }

  return { direction: "prev" as const, steps: backwardSteps };
};

const getVisibleServices = (activeIndex: number) => {
  const total = services.length;

  return [
    services[(activeIndex - 2 + total) % total],
    services[(activeIndex - 1 + total) % total],
    services[activeIndex],
    services[(activeIndex + 1) % total],
    services[(activeIndex + 2) % total],
  ];
};

const MobileCarousel = ({
  activeIndex,
  onPrevious,
  onNext,
  onSelect,
}: {
  activeIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (targetIndex: number) => void;
}) => {
  return (
    <div className="relative z-10 mt-0">
      <div className="mx-auto w-full max-w-full overflow-hidden px-1 sm:max-w-2xl sm:px-2 md:max-w-3xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="mt-0 flex w-full shrink-0 justify-center px-1 sm:px-2"
            >
              <div className="relative flex min-h-[220px]  h-full w-full max-w-[320px] flex-col justify-center rounded-[24px] border-2 border-[#f6e000] bg-white p-5 shadow-sm sm:max-w-[380px] sm:min-h-[240px] sm:p-6 md:max-w-[430px]">
                <div className="mb-3 flex items-start justify-start"></div>

                <h3 className="text-center mb-4 text-[17px] sm:text-[19px] md:text-[21px] leading-tight lg:text-[28px] xl:text-[36px] text-black font-semibold  font-poppins">
                  {service.title}
                </h3>

                <p className="text-center text-[13px] md:text-[12px] lg:text-[14px] xl:text-[14px] font-poppins font-medium text-black ">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-6">
        <button
          type="button"
          aria-label="Previous use case"
          onClick={onPrevious}
          className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-[#d8d8d8] bg-white text-black transition-colors hover:bg-[#f7f7f7]"
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

        <IndicatorDots activeIndex={activeIndex} onSelect={onSelect} />

        <button
          type="button"
          aria-label="Next use case"
          onClick={onNext}
          className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-[#d8d8d8] bg-white text-black transition-colors hover:bg-[#f7f7f7]"
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
  );
};

// Reusable CTA Button Component
const CTAButton = ({ isCompact = false }: { isCompact?: boolean }) => {
  return (
    <div
      className={`
    w-full flex items-center justify-center gap-3 lg:mt-10
    ${isCompact ? "flex-col sm:flex-row" : "flex-row"}
  `}
    >
      {" "}
      <Link href="/contact-us" target="_blank">
        <button
          className={`group relative flex items-center justify-center gap-2 border border-black rounded-full overflow-hidden cursor-pointer bg-white ${
            isCompact
              ? "w-full px-4 py-3 sm:w-auto sm:min-w-[200px]"
              : "px-4 py-2 lg:px-4 lg:py-0 w-auto"
          }`}
        >
          <span className="absolute inset-0 flex items-center justify-center z-0">
            <span className="w-10 h-10 bg-gray-100 rounded-full scale-0  transition-transform duration-500 ease-out" />
          </span>
          <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />
          <span
            className={`relative z-10 text-black font-medium text-center transition-colors ${
              isCompact ? "text-[12px]" : "text-sm whitespace-nowrap"
            }`}
          >
            Contact Our AI Engineer
          </span>
          <svg
            viewBox="0 0 56 55"
            className={`relative z-10 transition-all duration-300 group-hover:rotate-60 group-hover:translate-x-1 group-active:scale-95 ${
              isCompact ? "w-6 h-6 ml-2" : "w-10 h-10 lg:w-14 lg:h-14"
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
            isCompact
              ? "w-full px-8 py-3"
              : "px-4 py-2 lg:px-4 lg:py-0 w-auto"
          }`}
        >
          <span className="absolute inset-0 flex items-center justify-center z-0">
            <span className="w-10 h-10 bg-gray-100 rounded-full scale-0  transition-transform duration-500 ease-out" />
          </span>
          <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />
          <span
            className={`relative z-10 text-black font-medium text-center transition-colors ${
              isCompact ? "text-[12px]" : "text-sm whitespace-nowrap"
            }`}
          >
            Explore Our Work
          </span>
          <svg
            viewBox="0 0 56 55"
            className={`relative z-10 transition-all duration-300 group-hover:rotate-60 group-hover:translate-x-1 group-active:scale-95 ${
              isCompact ? "w-6 h-6 ml-2" : "w-10 h-10 lg:w-14 lg:h-14"
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
const SectionHeader = ({
  isMobile = false,
  isCompact = false,
}: {
  isMobile?: boolean;
  isCompact?: boolean;
}) => {
  return (
    <div className={isCompact ? "mb-0 text-center" : "mb-0"}>
      <div
        className={
          isCompact
            ? "space-y-6"
            : "flex items-start justify-between gap-8 xl:gap-12"
        }
      >
        <div
          className={isCompact ? "mx-auto max-w-2xl" : "max-w-2xl text-start"}
        >
          <h2
            className={`font-bold text-gray-900 ${
              isCompact
                ? "mb-3 text-[21px] leading-tight sm:text-[24px] md:text-[30px]"
                : isMobile
                  ? "mb-3 text-[19px] leading-tight"
                  : "text-[19px] sm:text-[19px] md:text-[21px] leading-tight lg:text-[28px] xl:text-[36px] text-black font-bold"
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
              isCompact
                ? "mx-auto mb-0 max-w-xl font-medium font-poppins text-black text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] "
                : isMobile
                  ? "text-[13px] font-medium font-poppins mb-0 max-w-2xl mx-auto"
                  : "text-black text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-medium font-poppins mt-4 md:max-w-[550px] lg:max-w-2xl "
            }`}
          >
            The most valuable LLM applications focus on measurable business
            outcomes. Organizations use large language models to automate tasks
            that require heavy language processing while creating systems that
            extract information and develop intelligent, user-friendly
            interfaces.
          </p>
        </div>

        <div
          className={
            isCompact
              ? "w-full flex justify-center items-center"
              : "shrink-0 pt-5"
          }
        >
          <CTAButton isCompact={isCompact} />
        </div>
      </div>
    </div>
  );
};

const LlmUsecases = () => {
  const isMobile = useIsMobile();
  const isCompactLayout = useIsMobile(1024);
  const [activeIndex, setActiveIndex] = useState(1);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev" | null>(
    null,
  );
  const timeoutRef = useRef<number | null>(null);
  const queuedStepsRef = useRef<{
    direction: "next" | "prev" | null;
    steps: number;
  }>({ direction: null, steps: 0 });
  const visibleServices = getVisibleServices(activeIndex);

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

      if (
        queuedStepsRef.current.direction === nextDirection &&
        queuedStepsRef.current.steps > 0
      ) {
        queuedStepsRef.current.steps -= 1;
      }

      if (
        queuedStepsRef.current.direction !== null &&
        queuedStepsRef.current.steps > 0
      ) {
        const queuedDirection = queuedStepsRef.current.direction;
        window.setTimeout(() => {
          runCarouselTransition(queuedDirection);
        }, 0);
      } else {
        queuedStepsRef.current = { direction: null, steps: 0 };
      }
    }, 420);
  };

  const showPrevious = () => {
    runCarouselTransition("prev");
  };

  const showNext = () => {
    runCarouselTransition("next");
  };

  const goToIndex = (targetIndex: number) => {
    if (slideDirection !== null || targetIndex === activeIndex) {
      return;
    }

    const { direction, steps } = getDirectionalSteps(activeIndex, targetIndex);

    if (direction === null || steps === 0) {
      return;
    }

    queuedStepsRef.current = {
      direction,
      steps: steps - 1,
    };

    runCarouselTransition(direction);
  };

  return (
    <section className="relative h-fit px-4 pb-2 mt-6 sm:px-6 lg:px-6">
      <div className="mx-auto max-w-7xl">
        {isCompactLayout ? (
          <div className="pb-6">
            <SectionHeader isMobile={isCompactLayout} isCompact={true} />
            <div className="relative overflow-hidden rounded-[28px] px-4 pb-2 pt-5 sm:rounded-[32px] sm:px-6 sm:pt-6 md:px-8">
              <div className="pointer-events-none absolute left-1/2 top-[56px] h-[150px] w-[220px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(248,223,109,0.5)_0%,rgba(248,223,109,0.22)_48%,rgba(248,223,109,0)_76%)] blur-2xl sm:top-[64px] sm:h-[180px] sm:w-[300px] md:top-[72px] md:h-[210px] md:w-[430px]" />

              <MobileCarousel
                activeIndex={activeIndex}
                onPrevious={showPrevious}
                onNext={showNext}
                onSelect={goToIndex}
              />
            </div>
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

              <div className="relative z-20 -mt-52">
                <DesktopCarousel
                  visibleServices={visibleServices}
                  slideDirection={slideDirection}
                />
              </div>

              <div className="relative z-10 mt-6 flex items-center justify-center gap-3">
                <button
                  type="button"
                  aria-label="Previous use case"
                  onClick={showPrevious}
                  className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-[#d8d8d8] bg-white text-black transition-colors hover:bg-[#f7f7f7]"
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

                <IndicatorDots activeIndex={activeIndex} onSelect={goToIndex} />

                <button
                  type="button"
                  aria-label="Next use case"
                  onClick={showNext}
                  className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-[#d8d8d8] bg-white text-black transition-colors hover:bg-[#f7f7f7]"
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
        @keyframes usecaseCardTrackNext {
          0% {
            transform: translateX(-33.333%);
          }

          100% {
            transform: translateX(-66.666%);
          }
        }

        @keyframes usecaseCardTrackPrev {
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
