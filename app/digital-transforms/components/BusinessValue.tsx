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
      height="42"
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
        fontWeight="700"
        fontFamily="Poppins, sans-serif"
      >
        {number}
      </text>
    </svg>
  );
};

const BusinessValue = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const secondSetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state - second set is below viewport
      gsap.set(secondSetRef.current, { yPercent: 100, opacity: 0 });
      gsap.set(firstSetRef.current, { yPercent: 0, opacity: 1 });

      ScrollTrigger.create({
        trigger: paragraphRef.current, // Use paragraph as trigger
        start: "top 10px", // Pin when paragraph hits 80px from top (adjust based on your nav height)
        end: "+=200%", // Stay pinned for 200% of viewport height scroll
        pin: sectionRef.current, // Pin the entire section
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress < 0.5) {
            // First half of scroll - show first 4 cards
            const firstProgress = progress * 2; // 0 to 1 during first half
            gsap.to(firstSetRef.current, {
              yPercent: 0,
              opacity: 1,
              duration: 0.1,
              overwrite: true,
            });
            gsap.to(secondSetRef.current, {
              yPercent: 100 - firstProgress * 50, // Gradually move up but stay hidden
              opacity: 0,
              duration: 0.1,
              overwrite: true,
            });
          } else {
            // Second half of scroll - transition to second 4 cards
            const secondProgress = (progress - 0.5) * 2; // 0 to 1 during second half
            gsap.to(firstSetRef.current, {
              yPercent: -100 * secondProgress,
              opacity: 1 - secondProgress,
              duration: 0.1,
              overwrite: true,
            });
            gsap.to(secondSetRef.current, {
              yPercent: 100 - 100 * secondProgress,
              opacity: secondProgress,
              duration: 0.1,
              overwrite: true,
            });
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
      className="w-full bg-white py-5 px-4 md:px-8 lg:px-16 "
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-[36px] font-bold leading-tight">
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

        {/* Content Grid */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SERVICES - Cards Container */}
          <div
            ref={cardsContainerRef}
            className="relative h-[calc(4*180px+3*20px)] overflow-hidden"
          >
            {/* First Set of 4 Cards */}
            <div
              ref={firstSetRef}
              className="absolute inset-0 flex flex-col gap-5"
            >
              {firstFourCards.map((item, index) => (
                <div
                  key={index}
                  className="relative p-6 rounded-xl bg-neutral-100 shadow-sm h-[180px]"
                >
                  <h3 className="text-xl font-semibold mb-3 text-black font-poppins">
                    {item.title}
                  </h3>
                  <p className="text-black text-[14px] leading-relaxed font-poppins pr-10">
                    {item.description}
                  </p>
                  <div className="absolute bottom-4 right-6 opacity-40">
                    <NumberSvg number={(index + 1).toString().padStart(2, "0")} />
                  </div>
                </div>
              ))}
            </div>

            {/* Second Set of 4 Cards */}
            <div
              ref={secondSetRef}
              className="absolute inset-0 flex flex-col gap-5"
            >
              {secondFourCards.map((item, index) => (
                <div
                  key={index + 4}
                  className="relative p-6 rounded-xl bg-neutral-100 shadow-sm h-[180px]"
                >
                  <h3 className="text-xl font-semibold mb-3 text-black font-poppins">
                    {item.title}
                  </h3>
                  <p className="text-black text-[14px] leading-relaxed font-poppins pr-10">
                    {item.description}
                  </p>
                  <div className="absolute bottom-4 right-6 opacity-40">
                    <NumberSvg number={(index + 5).toString().padStart(2, "0")} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-full">
            <div className="relative w-full h-full min-h-[400px]">
              <Image
                src="/assets/images/business_val1.png"
                alt="Digital transformation visual"
                width={500}
                height={809}
                className="object-fit"
              />

              <div className="absolute bottom-6 left-6">
                <button
                  className="cursor-pointer
                  relative flex items-center
                  gap-2 md:gap-2 lg:gap-3
                  px-4 py-1.5 md:px-3 md:py-1.5 lg:px-6 lg:py-2
                  border border-black rounded-full
                  overflow-hidden bg-white/80 shadow-md"
                >
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)]" />

                  <span className="relative z-10 font-poppins text-black text-sm md:text-xs lg:text-base whitespace-nowrap">
                    Transform Your Business
                  </span>

                  <svg
                    className="relative z-10 w-10 h-10 md:w-8 md:h-8 lg:w-14 lg:h-14"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessValue;