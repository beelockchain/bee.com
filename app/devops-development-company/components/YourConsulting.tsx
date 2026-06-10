"use client";
import { useState, useCallback, useEffect } from "react";
import { useIsMobile } from "./useIsMobile";
import Link from "next/link";

const services = [
  {
    image: "/assets/images/devops/partner-icon1.png",
    title: "Certified DevOps Engineers",
    description:
      "Our certified DevOps engineers work closely with your teams to assess existing workflows and identify opportunities for infrastructure automation and CI/CD pipeline implementation.",
  },
  {
    image: "/assets/images/devops/partner-icon2.png",
    title: "Cloud-Native Infrastructure Expertise",
    description:
      "We design scalable cloud-native environments optimized for AWS, Azure, and hybrid platforms to support DevOps consulting and infrastructure automation.",
  },
  {
    image: "/assets/images/devops/partner-icon3.png",
    title: "CI/CD Implementation Specialists",
    description:
      "Our DevOps consulting team implements automated CI/CD pipelines to support continuous integration and reliable software release cycles.",
  },
  {
    image: "/assets/images/devops/partner-icon4.png",
    title: "Tailored DevOps Implementation Strategy",
    description:
      "We design customized DevOps strategies aligned with your application architecture and business goals. This ensures efficient deployment workflows and scalable infrastructure.",
  },

  {
    image: "/assets/images/devops/partner-icon5.png",
    title: "DevSecOps Integration",
    description:
      "Our DevSecOps consulting approach embeds security checks into CI/CD pipelines to ensure compliant and secure software delivery throughout the development lifecycle.",
  },
  {
    image: "/assets/images/devops/partner-icon6.png",
    title: "Scalable Infrastructure Design",
    description:
      "We build infrastructure environments using Infrastructure as Code (IaC) to support evolving application workloads and DevOps automation requirements.",
  },
  {
    image: "/assets/images/devops/partner-icon7.png",
    title: "24/7 Monitoring & Support",
    description:
      "Continuous monitoring and DevOps managed services help maintain deployment stability and application uptime across distributed environments.",
  },
  {
    image: "/assets/images/devops/partner-icon8.png",
    title: "AI-Driven Monitoring Capabilities",
    description:
      "We implement AI-enabled DevOps monitoring tools to proactively identify infrastructure risks and help optimize deployment workflows.",
  },
];

const delayClasses = [
  "delay-[50ms]",
  "delay-[120ms]",
  "delay-[190ms]",
  "delay-[260ms]",
  "delay-[330ms]",
  "delay-[400ms]",
  "delay-[470ms]",
  "delay-[540ms]",
  "delay-[610ms]",
];

// Desktop/Tablet Card Component
const ServiceCard = ({ service }: { service: (typeof services)[0] }) => {
  return (
    <div
      tabIndex={0}
      className="
        group relative flex h-full flex-col overflow-hidden rounded-xl p-6
        bg-[#F5F5F5]"
    >
      <div
        className="rounded-full flex items-start justify-start  overflow-hidden mb-5
     "
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-10 h-10 object-contain transition-transform"
        />
      </div>
      <h3 className="text-lg font-semibold  mb-3 text-black font-poppins">
        {service.title}
      </h3>
      <p className="flex-1 text-[11px] font-semibold leading-relaxed text-black sm:text-[10px] sm:leading-[1.45] md:text-[11px] lg:text-[13px] xl:text-[14px]">
        {service.description}
      </p>
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
            Build Your DevOps Strategy
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
            Explore Our  Portfolio
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
    <div className={`text-center ${isMobile ? "mb-0" : "mb-14 space-y-6"}`}>
      <h2
        className={`font-bold text-gray-900 ${
          isMobile
            ? "text-[19px] leading-tight mb-3"
            : "text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px] text-black font-bold leading-tight"
        }`}
      >
        Why Choose Beelockchain As Your<br />
       <span
          data-text="Beelockchain A Leader"
          className="shine-text text-[#F5B800] relative mx-1"
        >DevOps</span>Consulting Partner?
      </h2>

      <p
        className={`max-w-2xl mx-auto text-black ${
          isMobile
            ? "text-[13px] font-medium font-poppins mb-0"
            : "text-[13px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-black  font-medium font-poppins mb-8"
        }`}
      >
        Beelockchain, a team of certified DevOps engineers with a client-first
        approach, delivers tailored DevOps consulting services that improve
        deployment efficiency, infrastructure scalability, and software delivery
        performance.
      </p>

      <div className="w-full flex justify-center items-center mt-6">
        <CTAButton isMobile={isMobile} />
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
            <div className="mb-3 flex items-start justify-start">
              <div className="w-14 h-14  rounded-full flex items-start justify-start">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

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

const YourConsulting = () => {
  const isMobile = useIsMobile();
  return (
    <section className="relative pt-10 pb-2 sm:py-10 px-6 h-fit ">
      <div className="max-w-7xl mx-auto">
        {isMobile ? (
        <div className="pb-10">
          <SectionHeader isMobile={true} />
          <MobileCarousel />
        </div>
        ) : (
        <div>
          <SectionHeader isMobile={false} />

          <div className="relative w-full overflow-visible">
            {/* Background connectors */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <img
                src="/assets/images/devops/your-consulting-bg.png"
                alt=""
                className="object-cover"
              />
            </div>
            {/* Cards */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, i) => (
                <div
                  key={i}
                  className={`animate-fade-up h-full ${delayClasses[i]}`}
                >
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
};

export default YourConsulting;
