"use client";

import Image from "next/image";
import { useState } from "react";

interface SolutionItem {
  id: number;
  label: string;
  title: string;
  description: string;
  image: string;
}

const solutions: SolutionItem[] = [
  {
    id: 1,
    label: "AI Chatbots",
    title: "AI Chatbots",
    description:
      "LLM-powered chatbots can understand complex user queries and deliver contextual responses in real time. Part of our AI chatbot development services, these solutions automate customer interactions and improve response efficiency.",
    image: "/assets/images/llm/llm-solution-icon1.png",
  },
  {
    id: 2,
    label: "AI Knowledge Assistants",
    title: "AI Knowledge Assistants",
    description:
      "Knowledge assistants allow employees to retrieve company information instantly using natural language queries. This makes it easier to access documentation, policies, and internal insights.",
    image: "/assets/images/llm/llm-solution-icon2.png",
  },
  {
    id: 3,
    label: "AI Copilots",
    title: "AI Copilots",
    description:
      "AI copilots assist professionals with tasks such as content writing, research analysis, coding support, and workflow automation. They act as intelligent digital assistants that enhance productivity.",
    image: "/assets/images/llm/llm-solution-icon3.png",
  },
  {
    id: 4,
    label: "Document Intelligence",
    title: "Intelligent Document Processing",
    description:
      "Large language models can analyze complex documents, summarize information, and extract key insights. Businesses use these systems to summarize reports, process contracts, and manage large volumes of textual data.",
    image: "/assets/images/llm/llm-solution-icon4.png",
  },
  {
    id: 5,
    label: "AI Guardrails",
    title: "AI Guardrails & Compliance",
    description:
      "Organizations can use LLM systems to generate marketing content, product descriptions, knowledge articles, and technical documentation. This capability allows companies to scale content production while maintaining quality and consistency.",
    image: "/assets/images/llm/llm-solution-icon5.png",
  },
];

const LlmSolution = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSolution = solutions[activeIndex];

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % solutions.length);
  };

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? solutions.length - 1 : current - 1,
    );
  };

  return (
    <section className="w-full bg-white px-6 py-10 sm:px-8 lg:px-14 ">
      <div className="mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto text-center">
          <h2 className=" text-[19px] sm:text-[19px] md:text-[21px] leading-tight lg:text-[28px] xl:text-[36px] text-black font-bold  mb-4 ">
            <span
              data-text="Beelockchain:"
              className="shine-text text-[#F5B800] relative mx-0"
            >
              LLM Solutions
            </span>{" "}
            We Build
          </h2>
          <p className="text-black text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-poppins leading-relaxed font-medium max-w-2xl mx-auto">
            Large language models enable organizations to develop intelligent
            applications that improve productivity and enhance user experiences.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="rounded-[28px] bg-[#FAF8F5] p-5 shadow-[0_20px_60px_rgba(20,20,20,0.05)] sm:p-6">
            <div className="flex flex-col gap-4">
              {solutions.map((solution, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={solution.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className={`relative flex min-h-[52px] w-full items-center justify-center overflow-hidden rounded-full border px-5 py-3 text-center transition-all duration-300 sm:min-h-[58px]
                        text-black text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-poppins leading-relaxed font-medium ${
                          isActive
                            ? "border-[#EFEAE1] bg-white text-[#1B1B1B] shadow-[0_10px_30px_rgba(245,184,0,0.18)]"
                            : "border-[#EFEAE1] bg-white/90 text-[#262626] hover:border-[#F5B800] hover:bg-white"
                        }`}
                  >
                    {isActive ? (
                      <span className="pointer-events-none absolute inset-y-0 left-0 w-24">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 96 32"
                          className="absolute left-0 top-0 h-1/2 w-full"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient
                              id={`llm-solution-top-${solution.id}`}
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#F5B800" />
                              <stop offset="55%" stopColor="#F5B800" />
                              <stop
                                offset="100%"
                                stopColor="#F5B800"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                          <path
                            d="M4 31.5 A27.5 27.5 0 0 1 31.5 4 H96"
                            fill="none"
                            stroke={`url(#llm-solution-top-${solution.id})`}
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        </svg>
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 96 32"
                          className="absolute bottom-0 left-0 h-1/2 w-full"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient
                              id={`llm-solution-bottom-${solution.id}`}
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#F5B800" />
                              <stop offset="55%" stopColor="#F5B800" />
                              <stop
                                offset="100%"
                                stopColor="#F5B800"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                          <path
                            d="M4 0.5 A27.5 27.5 0 0 0 31.5 28 H96"
                            fill="none"
                            stroke={`url(#llm-solution-bottom-${solution.id})`}
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    ) : null}
                    {solution.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-[520px] flex-col self-start lg:mx-0 lg:justify-start">
            <div className="relative flex items-start justify-start self-start">
              <Image
                src={activeSolution.image}
                alt={activeSolution.title}
                width={300}
                height={300}
                className="h-[300px] w-[300px] sm:h-[300px] sm:w-[300px] object-contain "
              />
            </div>

            <div className="mt-6 text-left">
              <h3 className="text-[19px] sm:text-[19px] md:text-[21px] leading-tight lg:text-[28px] xl:text-[32px] text-black font-bold">
                {activeSolution.title}
              </h3>
              <p className="mt-3 max-w-xl text-black text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-poppins leading-relaxed font-medium">
                {activeSolution.description}
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Show previous solution"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EAE5DD] bg-white text-[#1B1B1B] transition-colors duration-200 hover:border-[#F5B800] hover:text-[#F5B800]"
              >
                <span className="text-lg leading-none">&#8249;</span>
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Show next solution"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EAE5DD] bg-white text-[#1B1B1B] transition-colors duration-200 hover:border-[#F5B800] hover:text-[#F5B800]"
              >
                <span className="text-lg leading-none">&#8250;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LlmSolution;
