"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface RoadmapItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const roadmapData: RoadmapItem[] = [
  {
    number: "01",
    title: "Business Discovery",
    description:
      "We analyze your business goals, challenges, and current digital environment to understand where transformation is needed and what success looks like.",
    icon: "/assets/images/digital-roadmap-1.png",
  },
  {
    number: "02",
    title: "Transformation Strategy",
    description:
      "We define a focused digital transformation strategy that aligns technology initiatives with business priorities and long-term objectives.",
    icon: "/assets/images/digital-roadmap-2.png",
  },
  {
    number: "03",
    title: "Solution Planning & Design",
    description:
      "We design the scalable, customer-centric solutions and select platforms that support integration, performance, and future growth.",
    icon: "/assets/images/digital-roadmap-3.png",
  },
  {
    number: "04",
    title: "Implementation & Integration",
    description:
      "We execute the strategy by building, modernizing, and integrating systems with minimal disruption to operations.",
    icon: "/assets/images/trans-implimentation.png",
  },
  {
    number: "05",
    title: "Optimization & Quality Assurance",
    description:
      "We test, validate, and optimize solutions to ensure reliability, security, and operational efficiency before and after launch.",
    icon: "/assets/images/trans-optimization.png",
  },
  {
    number: "06",
    title: "Training & Enablement",
    description:
      "We support teams with training, documentation, and change enablement to ensure smooth adoption across the organization.",
    icon: "/assets/images/trans-training.png",
  },
  {
    number: "07",
    title: "Continuous Improvement",
    description:
      "We monitor performance, gather insights, and continuously enhance systems to keep pace with evolving business needs.",
    icon: "/assets/images/trans-enablement.png",
  },
];

export default function RoadmapCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const carousel = carouselRef.current;

    if (!section || !carousel) return;

    const mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  const totalCards = roadmapData.length;
  const cardWidth = 270;
  const gap = 32;

  const moveDistance =
    (cardWidth + gap) * (totalCards - 1);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=4000",
      scrub: 0.5,
      pin: true,
      pinSpacing: true,
    },
  });

  tl.to(carousel, {
    x: -moveDistance,
    ease: "none",
  });
});
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* ─── Desktop & Tablet ───────────────────────── */}
      <section
        ref={sectionRef}
        className="hidden md:flex flex-col justify-center relative w-full h-dvh bg-[#F5F5F5]"
      >
       {/* LEFT FADE */}
<div
  className="pointer-events-none absolute left-0 top-0 h-full w-40 lg:w-56 xl:w-60 z-999 hidden sm:hidden md:block"
  style={{
    background:
      "linear-gradient(to right, #F5F5F5 30%, rgba(245,245,245,0.8) 60%, transparent 100%)",
  }}
/>
{/* RIGHT FADE */}
<div
  className="pointer-events-none absolute right-0 top-0 h-full w-40 lg:w-56 xl:w-60 z-999 hidden md:block"
  style={{
    background:
      "linear-gradient(to left, #F5F5F5 30%, rgba(245,245,245,0.8) 60%, transparent 100%)",
  }}
/>

        <div className="max-w-[1400px] mx-auto px-8 w-full flex flex-col overflow-hidden justify-center h-full">
          <div className="text-center mb-8 xl:mb-8 xl:pt-10">
            <h2 className="text-4xl sm:text-[19px] md:text-[22px] lg:text-[28px] xl:text-[36px] text-black font-semibold leading-snug ">
              From Strategy To Execution:{" "}
              <span className="shine-text relative text-[#f5c518]">
                Our Digital <br /> Transformation Roadmap
              </span>
            </h2>
          </div>

          <div className="relative px-8 flex items-center">
            <div
              ref={carouselRef}
              className="flex md:gap-8 lg:gap-8 xl:gap-10 will-change-transform"
            >
              {roadmapData.map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[410px] rounded-[28px] md:p-5 lg:p-5 xl:p-8 relative bg-[rgba(255,253,250,0.6)] backdrop-blur-[24px] border border-[rgba(255,255,255,0.65)] shadow-[0_10px_35px_rgba(140,125,100,0.10)] transition-all duration-300"
                  >
                      <div
                        className="text-[45px] font-bold leading-none mb-3 text-[#FDD90E]"
                        style={{ WebkitTextStroke: "1px #F5C518" }}
                      >
                      {item.number}
                    </div>

                    <div className="h-20 flex items-center justify-center mb-10 mt-6 p-20">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="object-contain max-w-full"
                      />
                    </div>

                    <h3 className="text-lg md:text-[16px] lg:text-[16px] xl:text-[20px] font-bold text-black mb-3 ">
                      {item.title}
                    </h3>

                    <p className="text-sm md:text-[14px] lg:text-[14px] xl:text-[14px] text-gray-700 font-semibold leading-relaxed ">
                      {item.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mobile FIXED ───────────────────────────────────────── */}
      <section className="sm:block md:hidden relative w-full bg-[#F5F5F5] py-12 overflow-x-hidden">
        <div className="px-4 max-w-full overflow-x-hidden">
          <div className="text-center mb-12">
            <h2 className="text-xl  font-semibold leading-tight text-black ">
              From Strategy to Execution:{" "}
              <span className="shine-text relative text-[#f5c518]">
                Our Digital Transformation Roadmap
              </span>
            </h2>
          </div>

          <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            <div className="flex gap-4 pb-4">
              {roadmapData.map((item, index) => (
                <div
                  key={index}
                  className="shrink-0 w-[85vw] sm:w-[55vw] bg-linear-to-br from-[#d1d0d065] to-[#C0C0C0] rounded-[20px] snap-start min-h-[400px] flex flex-col justify-around"
                >
                  <div
                    className="text-[50px] font-bold  leading-none px-4 pt-4 text-[#FDD90E]"
                    style={{ WebkitTextStroke: "1px #F5C518" }}
                  >
                    {item.number}
                  </div>

                  <div className="h-20 sm:h-14 flex items-center justify-center p-25 sm:p-30">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="object-contain max-w-full sm:max-w-70"
                    />
                  </div>

                  <div className="px-5 pb-6">
                    <h3 className="text-md sm:text-[16px] font-bold text-black leading-tight mb-2 ">
                      {item.title}
                    </h3>
                    <p className="text-[14px] sm:text-[12px] text-black leading-relaxed font-semibold">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>
    </>
  );
}