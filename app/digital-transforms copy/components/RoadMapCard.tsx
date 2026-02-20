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
    icon: "/assets/images/digital-roadmap-1.png",
  },
  {
    number: "05",
    title: "Optimization & Quality Assurance",
    description:
      "We test, validate, and optimize solutions to ensure reliability, security, and operational efficiency before and after launch.",
    icon: "/assets/images/digital-roadmap-2.png",
  },
  {
    number: "06",
    title: "Training & Enablement",
    description:
      "We support teams with training, documentation, and change enablement to ensure smooth adoption across the organization.",
    icon: "/assets/images/digital-roadmap-3.png",
  },
   {
    number: "07",
    title: "Continuous Improvement",
    description:
      "We monitor performance, gather insights, and continuously enhance systems to keep pace with evolving business needs.",
    icon: "/assets/images/digital-roadmap-3.png",
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
      const cardWidth = 410;
      const gap = 32;
      const moveDistance = (cardWidth + gap) * totalCards;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=4000",
          scrub: 0.5,
          pin: true,
          // pinSpacing: true ensures scroll height is correct
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
      {/* ─── Desktop & Tablet ─────────────────────────────────────── */}
      <section
        ref={sectionRef}
        className="hidden md:flex flex-col justify-center relative w-full h-dvh bg-[#F5F5F5]"
        // Using flex + justify-center so content is always vertically centered
        // regardless of viewport height. The 7% padding-top/bottom creates
        // breathing room while keeping the card zone in the middle.
        
      >
        <div className="max-w-[1400px] mx-auto px-8 w-full flex flex-col overflow-hidden justify-center h-full">

          {/* Heading */}
          <div className="text-center mb-8 xl:mb-8 xl:pt-10">
            <h2 className="text-4xl md:text-2xl lg:text-[25px] text-black font-semibold leading-snug font-poppins">
              From Strategy to Execution:{" "}
              <span className="text-[#E1A402]">
                Our Digital <br /> Transformation Roadmap
              </span>
            </h2>
          </div>

          {/* Carousel Container */}
          {/*
            flex-1 + flex items-center makes the overflow wrapper
            take remaining vertical space and vertically centers the
            card strip inside it — this is what kills the dead space.
          */}
          <div className="relative px-8  flex items-center">
            <div className="pointer-events-none absolute inset-0 hidden md:block z-20">
  
            {/* LEFT FADE */}
            <div
              className="
                absolute left-[-7%] top-0 h-full w-24 md:w-32 lg:w-40
                bg-gradient-to-r 
                from-[#F5F5F5] via-[#F5F5F5]/80 via-[#F5F5F5]/40 to-transparent
              "
            />

            {/* RIGHT FADE */}
            <div
              className="
                absolute right-[-7%] top-0 h-full w-24 md:w-32 lg:w-40
                bg-gradient-to-l 
                from-[#F5F5F5] via-[#F5F5F5]/80 via-[#F5F5F5]/40 to-transparent
              "
            />
          </div>

            <div
              ref={carouselRef}
              className="flex md:gap-8 lg:gap-8 xl:gap-10 will-change-transform"
            >
              {[...roadmapData, ...roadmapData, ...roadmapData].map(
                (item, index) => (
                  <div
                    key={index}
                    className="
                      flex-shrink-0
                      w-[410px]
                      rounded-[28px]
                      md:p-5
                      lg:p-5
                      xl:p-8
                      
                      relative
                      bg-[rgba(255,253,250,0.6)]
                      backdrop-blur-[24px]
                      border border-[rgba(255,255,255,0.65)]
                      shadow-[0_10px_35px_rgba(140,125,100,0.10),inset_0_1px_0_rgba(255,255,255,0.75),inset_0_-1px_0_rgba(255,255,255,0.3)]
                      hover:shadow-[0_18px_60px_rgba(140,125,100,0.16),inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-1px_0_rgba(255,255,255,0.35)]
                      transition-all duration-300
                    "
                  >
                    <div className="pointer-events-none  absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/90 to-transparent" />

                    {/* Number */}
                    <div
                      className="md:text-[35px] lg:text-[35px] xl:text-[45px] font-bold leading-none mb-3 text-transparent"
                      style={{ WebkitTextStroke: "1px #F5C518" }}
                    >
                      {item.number}
                    </div>

                    {/* Icon */}
                    <div className="md:h-15 lg:h-15 xl:h-18 flex items-center justify-center mb-25 mt-10 md:p-10 lg:p-10 xl:p-10">
                      <img src={item.icon} alt={item.title} className="object-cover" />
                    </div>

                    {/* Title */}
                    <h3 className="md:text-[11px] lg:text-[14px] xl:text-lg font-semibold text-black mb-3 leading-tight font-poppins">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="md:text-[10px] lg:text-[11px] xl:text-[13px] text-gray-700 leading-relaxed font-poppins">
                      {item.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mobile (unchanged) ───────────────────────────────────── */}
      <section className="md:hidden relative w-full bg-[#F5F5F5] py-12">
        <div className="px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl font-semibold leading-tight text-black font-poppins">
              From Strategy to Execution:{" "}
              <span className="text-[#F59E0B]">
                Our Digital Transformation Roadmap
              </span>
            </h2>
          </div>

          <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory pl-5">
            <div className="flex gap-4 pb-4">
              {roadmapData.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[82vw] bg-gradient-to-br from-[#d1d0d065] to-[#C0C0C0] rounded-[20px] snap-start min-h-[400px] flex flex-col justify-around"
                >
                  <div
                    className="text-[50px] font-bold text-[white/30] leading-none px-3"
                    style={{ WebkitTextStroke: "1px #F5C518" }}
                  >
                    {item.number}
                  </div>

                  <div className="h-10 flex items-center justify-center">
                    <img src={item.icon} alt={item.title} className="object-cover p-15" />
                  </div>

                  <div>
                    <h3 className="text-md font-semibold text-black leading-tight p-5 font-poppins">
                      {item.title}
                    </h3>
                    <p className="text-[12px] text-black leading-relaxed px-5 font-poppins">
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