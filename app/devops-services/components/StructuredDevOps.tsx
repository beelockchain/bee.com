"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import { useIsMobile } from "./useIsMobile";

type Feature = {
  id: string;
  title: ReactNode;
  description: string;
};

const leftFeatures = [
  {
    id: "assessment-workflow-analysis",
    title: (
      <>
        Assessment & <br /> Analysis
      </>
    ),
    description:
      "We analyze your development lifecycle, infrastructure setup, and deployment challenges to identify automation opportunities across development environments.",
  },
  {
    id: "devops-strategy-planning",
    title: (
      <>
        DevOps Strategy <br /> Planning
      </>
    ),
    description:
      "Based on assessment insights, our DevOps expert designs a customized DevOps consulting roadmap aligned with your application architecture and business requirements.",
  },
  {
    id: "tool-selection-implementation",
    title: (
      <>
        Tool Selection & <br /> Implementation
      </>
    ),
    description:
      "We recommend suitable DevOps tools based on your infrastructure and CI/CD pipeline requirements, while guiding implementation across your software development lifecycle.",
  },
] satisfies Feature[];

const rightFeatures = [
  {
    id: "ci-cd-pipeline-setup",
    title: (
      <>
        CI/CD Pipeline <br /> Setup
      </>
    ),
    description:
      "Automated CI/CD pipelines are configured to streamline code integration, testing, and deployment across development and production environments.",
  },
  {
    id: "monitoring-optimization",
    title: (
      <>
        Monitoring & <br /> Optimization
      </>
    ),
    description:
      "Our tech experts provide DevOps infrastructure consulting along with real-time monitoring tools to track application performance & overall software infrastructure health.",
  },
  {
    id: "continuous-support",
    title: (
      <>
        Continuous <br /> Support
      </>
    ),
    description:
      "We offer continuous support and training after DevOps transformation services to help your team adapt effectively to the DevOps environment.",
  },
] satisfies Feature[];

// All features combined for mobile layout
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
  title: ReactNode;
  description: string;
  align?: "left" | "right";
}) => (
  <div
    className={`flex min-h-[170px] w-full max-w-[220px] min-w-0 flex-col justify-between rounded-[20px] bg-[#E2E2E2] p-4 text-left shadow-sm 
      sm:min-h-[140px] sm:max-w-full sm:rounded-[18px] sm:p-3 md:min-h-[150px] md:max-w-[250px] md:p-4 lg:min-h-[182px] lg:max-w-[290px] lg:p-6 xl:min-h-[220px] xl:max-w-[320px] xl:p-7 ${
        align === "right" ? "self-start" : "self-end"
      }`}
  >
    <h3
      className="mb-2 text-[14px] font-semibold leading-tight text-black sm:text-[12px] 
     md:text-[14px] lg:mb-3 lg:text-[16px] xl:text-[18px]"
    >
      {title}
    </h3>
    <p className="text-[11px] font-semibold leading-relaxed text-black sm:text-[10px] sm:leading-[1.45] md:text-[11px] lg:text-[13px] xl:text-[14px]">
      {description}
    </p>
  </div>
);

const MobileFeatureReel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const nextIndex = itemRefs.current.reduce((closestIndex, item, index) => {
      if (!item) return closestIndex;

      const currentDistance = Math.abs(item.offsetLeft - container.scrollLeft);
      const closestItem = itemRefs.current[closestIndex];
      const closestDistance = closestItem
        ? Math.abs(closestItem.offsetLeft - container.scrollLeft)
        : Number.POSITIVE_INFINITY;

      return currentDistance < closestDistance ? index : closestIndex;
    }, 0);

    setActiveIndex(nextIndex);
  };

  const scrollToCard = (index: number) => {
    const item = itemRefs.current[index];
    if (!item) return;

    item.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setActiveIndex(index);
  };

  return (
    <div className="w-full px-1 pb-2">
      <div className="mb-4 flex items-center gap-2 px-1">
        {allFeatures.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToCard(index)}
            aria-label={`Go to step ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-8 bg-black" : "w-3 bg-[#D3D3D3]"
            }`}
          />
        ))}
      </div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {allFeatures.map((item, index) => (
          <article
            key={item.id}
            ref={(element) => {
              itemRefs.current[index] = element;
            }}
            className="group relative min-h-[230px] w-[86%] shrink-0 snap-center overflow-hidden rounded-[28px] bg-[#E2E2E2] px-5 py-5 shadow-sm transition-transform duration-300 active:scale-[0.98]"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-black px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                Step {index + 1}
              </span>
              <div className="opacity-20 transition-transform duration-300 group-active:scale-95">
                <NumberSvg number={(index + 1).toString().padStart(2, "0")} />
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="mb-3 text-[16px] font-bold leading-tight text-black">
                {item.title}
              </h3>
              <p className="text-[13px] font-semibold leading-relaxed text-black">
                {item.description}
              </p>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-white/20 to-transparent" />
          </article>
        ))}
      </div>

      <p className="mt-3 px-1 text-[12px] font-medium text-[#666666]">
        Swipe across the steps to explore the full DevOps process.
      </p>
    </div>
  );
};

const StructuredDevOps = () => {
  const isMobile = useIsMobile();
  return (
    <section className="relative w-full px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-14 max-w-7xl mx-auto flex flex-col justify-center items-center">
        <h2 className="text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px]  text-black font-bold leading-tight mb-3 sm:mb-4">
          Our
          <span
            data-text="Structured DevOps"
            className="shine-text text-[#F5B800] relative mx-1 sm:mx-2"
          >
            Structured DevOps
          </span>
          <span>Consulting Approach</span>
        </h2>
        <p className="text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-black font-poppins font-medium w-full px-2 sm:w-2xl lg:w-4xl">
          Beelockchain follows a structured DevOps consulting approach to
          automate software delivery, optimize infrastructure, and streamline
          CI/CD workflows across cloud-native environments.
        </p>

        <div className="mt-5 flex w-full justify-center sm:mt-6">
          <Link
            href="/contact-us"
            className="group relative inline-flex min-h-9 w-auto max-w-[290px] items-center justify-center gap-1.5 overflow-hidden rounded-full border border-black bg-white px-3 py-1.5 text-black sm:min-h-12 sm:max-w-[360px] sm:gap-2 sm:px-5 sm:py-2.5 lg:min-h-14 lg:px-6"
          >
            <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.95)_0%,rgba(226,226,226,0.35)_55%,transparent_100%)] transition-opacity duration-300 group-hover:opacity-0" />
            <span className="relative z-10 whitespace-nowrap text-center font-poppins text-[11px] font-medium leading-4 sm:text-[14px] sm:leading-5 lg:text-[15px]">
              Consult Our DevOps Specialists
            </span>
            <svg
              className="relative z-10 h-6 w-6 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 sm:h-8 sm:w-8"
              viewBox="0 0 56 55"
              aria-hidden="true"
            >
              <circle
                cx="28"
                cy="27"
                r="16"
                fill="#F6E000"
                stroke="#F9C901"
                strokeWidth="1.5"
              />
              <path
                d="M31 22L33 29M31 22L24 24M31 22L25 33"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* ========== MOBILE ONLY (< 640px) ========== */}
      {isMobile ? (
        <div className="max-w-md mx-auto">
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

          {/* Scrollable reel for Mobile */}
          <MobileFeatureReel />
        </div>
      ) : (
        <div className="relative mx-auto max-w-6xl">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex min-h-[420px] items-start justify-center pt-2 sm:min-h-[360px] lg:min-h-[520px] xl:min-h-[560px]">
            <Image
              src="/assets/images/devops/StructuredDevOps.png"
              alt="Structured DevOps consulting process illustration"
              width={860}
              height={860}
              className="h-[300px] w-auto max-w-none object-contain sm:h-[300px] md:h-[460px] lg:h-[360px] xl:h-[730px]"
              priority
            />
          </div>

          <div className="relative z-10 grid items-center gap-4 sm:grid-cols-[minmax(150px,1fr)_minmax(180px,220px)_minmax(150px,1fr)] md:grid-cols-[minmax(210px,1fr)_minmax(220px,280px)_minmax(210px,1fr)] lg:grid-cols-[minmax(240px,1fr)_minmax(280px,360px)_minmax(240px,1fr)] lg:gap-5 xl:grid-cols-[minmax(320px,1fr)_minmax(420px,560px)_minmax(320px,1fr)] xl:gap-10">
            <div className="flex min-h-[420px] flex-col justify-start gap-3 pr-1 sm:min-h-[360px] sm:gap-2 sm:pr-0 md:min-h-[420px] md:gap-3 lg:min-h-[520px] lg:gap-4 lg:pr-2 xl:min-h-[560px] xl:pr-5">
              {leftFeatures.map((feature) => (
                <FeatureCard
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                  align="left"
                />
              ))}
            </div>

            <div className="min-h-[420px] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[520px] xl:min-h-[560px]" />

            <div className="flex min-h-[420px] flex-col justify-start gap-3 pl-1 sm:min-h-[360px] sm:gap-2 sm:pl-0 md:min-h-[420px] md:gap-3 lg:min-h-[520px] lg:gap-4 lg:pl-2 xl:min-h-[560px] xl:pl-5">
              {rightFeatures.map((feature) => (
                <FeatureCard
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                  align="right"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default StructuredDevOps;
