"use client";

import { useState } from "react";

const TABS = [
  "Consultant",
  "Software",
  "Blockchain",
  "AI",
  "DevOps",
  "Marketing",
] as const;

type TabType = (typeof TABS)[number];

const TAB_ICONS: Record<TabType, string> = {
  Consultant: "assets/images/services-icon1.png",
  Software:   "assets/images/services-icon2.png",
  Blockchain: "assets/images/services-icon3.png",
  AI:         "assets/images/services-icon4.png",
  DevOps:     "assets/images/services-icon5.png",
  Marketing:  "assets/images/services-icon6.png",
};

const TAB_CENTER_IMAGES: Record<TabType, string> = {
  Consultant: `/assets/images/service.svg`,
  Software:   `/assets/images/service1.svg`,
  Blockchain: `/assets/images/service2.svg`,
  AI:         `/assets/images/service3.svg`,
  DevOps:     `/assets/images/service4.svg`,
  Marketing:  `/assets/images/service5.svg`,
};

const TAB_CONTENT: Record<
  TabType,
  { title: string; desc: string; routes: { label: string; href: string }[] }
> = {
  Consultant: {
    title: "Digital Transformation Services",
    desc: "We provide comprehensive full-cycle digital transformation services that integrate cloud computing, automation, data analytics, and the latest technologies to future-proof your business.",
    routes: [{ label: "Digital Transformation", href: "/digital-transformation-services" }],
  },
  Software: {
    title: "Software Development",
    desc: "We specialize in bespoke software development solutions that help startups and enterprises grow with future-focused technology.",
    routes: [
      { label: "Custom App Development",       href: "#" },
      { label: "Android App Development",      href: "#" },
      { label: "iOS App Development",          href: "#" },
      { label: "React Native App Development", href: "#" },
      { label: "Web App Development",          href: "#" },
      { label: "ERP Software Development",     href: "#" },
      { label: "Progressive Web Apps (PWA)",   href: "#" },
    ],
  },
  Blockchain: {
    title: "Blockchain Development",
    desc: "Enterprise-grade Custom Blockchain Development services for creating decentralized applications, smart contracts, and robust blockchain ecosystems.",
    routes: [{ label: "Blockchain Development", href: "https://beelockchain.io" }],
  },
  AI: {
    title: "AI Development",
    desc: "Beelockchain's AI Development services provide custom machine learning and intelligent automation to improve decision-making and help businesses remain competitive.",
    routes: [
      { label: "Generative AI Development",    href: "#" },
      { label: "Chat AI App Development",      href: "#" },
      { label: "LLM Development",              href: "#" },
      { label: "AI Strategy Consulting",       href: "#" },
      { label: "AI UI/UX Design Services",     href: "#" },
      { label: "Machine Learning Development", href: "#" },
      { label: "Custom AI Development",        href: "#" },
    ],
  },
  DevOps: {
    title: "DevOps Services",
    desc: "Beelockchain specializes in end-to-end DevOps solutions, offering CI/CD automation, cloud DevOps services, and faster, reliable software deployments.",
    routes: [{ label: "DevOps Development", href: "/devops-services" }],
  },
  Marketing: {
    title: "Digital Marketing",
    desc: "Grow faster with our full-service Digital Marketing Services, including SEO, PPC, content marketing, and social media management to achieve your brand's goals.",
    routes: [{ label: "Digital Marketing Services", href: "#" }],
  },
};

function ArrowCircle({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={`shrink-0 transition-transform group-hover:translate-x-0.5 ${className}`}
      viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28.2473" cy="27.0945" r="15.912" fill="#F6E000" stroke="#F9C901" strokeWidth="1.5" />
      <path
        d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
        stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

/* ═════════════════════════════════════════════════════════════════
   ONE EXPORT — click-only tabs, no scroll logic, no height hacks.
   Height is purely content-driven at every breakpoint.

   Mobile  (< 768px):    sidebar icon card + progress dots
   Tablet  (768–1023px): 2-col pill list left + content right
   Desktop (≥ 1024px):   3-col pill list + center image + content
═════════════════════════════════════════════════════════════════ */
export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = TABS[activeTab];

  return (
    <section className="w-full bg-white flex flex-col justify-center items-center gap-5">

      {/* ── Header (all breakpoints) ── */}
      <div className="flex flex-col justify-center items-center text-center  overflow-hidden">
        <img
          src="/assets/images/Services.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none h-16 sm:h-20 lg:h-40 w-[80%] md:w-full"
        />
        <div className="relative z-10">
        <h2 className="font-['Poppins'] text-[17px] mb-4 sm:text-[20px] md:text-[20px] lg:text-[26px] xl:text-[34px] text-black leading-snug font-semibold">
          Areas Of Expertise - 
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #AF7211 33%, #F6E000 49%, #D7B007 63%)",
            }}
          >
            Digital Transformation
          </span>
        </h2>
          <p className="mt-1 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[14px] xl:text-[16px] mb-4 text-black font-['Poppins'] leading-snug  mx-auto w-80 md:w-full">
            A full spectrum of digital transformation services to elevate your business
          </p>
        </div>
      </div>

      {/* ════════════════════════════════════════
          MOBILE  < 768px
          Sidebar icon card + progress dots
      ════════════════════════════════════════ */}
      <div className="md:hidden px-3">
        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
          <div className="flex">

            {/* Sidebar icons */}
            <div className="flex flex-col w-[72px] flex-shrink-0 bg-white border-r border-gray-200">
              {TABS.map((t, index) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(index)}
                  className={`flex flex-col items-center justify-center gap-1 py-3 px-1 border-b border-gray-100 transition-all duration-200 ${
                    activeTab === index
                      ? "bg-yellow-50 border-l-4 border-l-yellow-400"
                      : "bg-white border-l-4 border-l-transparent hover:bg-gray-50"
                  }`}
                >
                  <div className={`w-8 h-8 flex items-center justify-center rounded-lg ${
                    activeTab === index ? "bg-yellow-100" : "bg-gray-100"
                  }`}>
                    <img src={TAB_ICONS[t]} alt={t} className="w-4 h-4" />
                  </div>
                  <span className={`text-[9px] font-medium leading-tight text-center font-['Poppins'] ${
                    activeTab === index ? "text-yellow-600" : "text-gray-400"
                  }`}>{t}</span>
                </button>
              ))}
            </div>

            {/* Content — directly rendered, no absolute positioning */}
            <div className="flex-1 min-w-0 p-4">
              <h3 className="font-semibold text-black text-[13px] leading-tight font-['Poppins'] mb-2">
                {TAB_CONTENT[tab].title}
              </h3>
              <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[14px] xl:text-[16px]  text-black font-['Poppins'] leading-relaxed mb-4">
                {TAB_CONTENT[tab].desc}
              </p>
              <div className="flex flex-col gap-3">
                {TAB_CONTENT[tab].routes.map((route, i) => (
                  <a
                    key={i}
                    href={route.href}
                    target={route.href.startsWith("http") ? "_blank" : undefined}
                    rel={route.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-[11px] font-['Poppins'] text-black underline underline-offset-2 decoration-gray-300 hover:text-yellow-500 transition group"
                  >
                    {route.label}
                    <ArrowCircle className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-1.5 mt-3">
          {TABS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`rounded-full transition-all duration-300 ${
                activeTab === index ? "w-4 h-1.5 bg-yellow-400" : "w-1.5 h-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════
          TABLET  768px – 1023px
          2-col: pill list left, content right
      ════════════════════════════════════════ */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-10 px-10 max-w-4xl mx-auto pt-4">

        {/* Left: pill tab list */}
        <div className="flex flex-col justify-center gap-2">
          {TABS.map((t, index) => (
            <button
              key={t}
              onClick={() => setActiveTab(index)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-full border text-left transition-all duration-200 ${
                activeTab === index
                  ? "bg-white border-yellow-400 shadow-md"
                  : "bg-gray-50 border-gray-200 hover:bg-white hover:border-gray-300"
              }`}
            >
              <span className={`text-[13px] font-['Poppins'] font-medium ${
                activeTab === index ? "text-black" : "text-gray-500"
              }`}>
                {TAB_CONTENT[t].title}
              </span>
            </button>
          ))}
        </div>

        {/* Right: content — directly rendered, no crossfade needed */}
        <div className="flex flex-col justify-start">
          <div className="flex items-start gap-2 mb-3">
            <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-yellow-400 flex-shrink-0" />
            <h3 className="text-[16px] font-semibold font-['Poppins'] text-black leading-snug">
              {TAB_CONTENT[tab].title}
            </h3>
          </div>
          <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[14px] xl:text-[16px]  text-black font-normal font-['Poppins'] mb-4">
            {TAB_CONTENT[tab].desc}
          </p>
          <div className="flex flex-col gap-1.5">
            {TAB_CONTENT[tab].routes.map((route, i) => (
              <a
                key={i}
                href={route.href}
                target={route.href.startsWith("http") ? "_blank" : undefined}
                rel={route.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] md:text-[13px] lg:text-[16px] xl:text-[18px]  font-['Poppins'] text-black underline underline-offset-2 decoration-gray-300 hover:text-yellow-600 transition group"
              >
                {route.label}
                <ArrowCircle className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          DESKTOP  ≥ 1024px
          3-col: pill list | center image | content
      ════════════════════════════════════════ */}
      <div className="hidden lg:grid grid-cols-3 gap-4 xl:gap-6 w-full max-w-7xl mx-auto px-6 py-4">

        {/* Col 1: pill tab list */}
        <div className="flex flex-col justify-center gap-2 pl-4 lg:pl-8 xl:pl-28">
          {TABS.map((t, index) => (
            <button
              key={t}
              onClick={() => setActiveTab(index)}
              className={`w-full flex items-center gap-2 px-3 py-2.5 lg:px-4 lg:py-4 rounded-full border text-left transition-all duration-200 cursor-pointer ${
                activeTab === index
                  ? "bg-white border-yellow-400 shadow-md"
                  : "bg-gray-50 border-gray-200 hover:bg-white hover:border-gray-300"
              }`}
            >
              
              <span className={`text-[12px] lg:text-[13px] xl:text-[14px] font-['Poppins'] font-medium ${
                activeTab === index ? "text-black" : "text-gray-500"
              }`}>
                {TAB_CONTENT[t].title}
              </span>
            </button>
          ))}
        </div>

        {/* Col 2: center image — fixed height so it doesn't collapse */}
        <div className="relative" style={{ height: 380 }}>
          {TABS.map((t, index) => (
            <img
              key={t}
              src={TAB_CENTER_IMAGES[t]}
              alt={t}
              className="absolute inset-0 w-full h-full object-contain transition-all duration-500"
              style={{
                opacity: activeTab === index ? 1 : 0,
                transform: `scale(${activeTab === index ? 1 : 0.96})`,
                pointerEvents: activeTab === index ? "auto" : "none",
              }}
            />
          ))}
        </div>

        {/* Col 3: text content — directly rendered, no absolute */}
        <div className="flex flex-col justify-start py-4">
          <div className="flex items-start gap-2 mb-3">
            <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-yellow-400 flex-shrink-0" />
            <h3 className="text-[15px] lg:text-[17px] font-semibold font-['Poppins'] text-black leading-snug">
              {TAB_CONTENT[tab].title}
            </h3>
          </div>
          <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[14px] xl:text-[16px]  text-black font-normal font-['Poppins'] mb-5">
            {TAB_CONTENT[tab].desc}
          </p>
          <div className="flex flex-col gap-3">
            {TAB_CONTENT[tab].routes.map((route, i) => (
              <a
                key={i}
                href={route.href}
                target={route.href.startsWith("http") ? "_blank" : undefined}
                rel={route.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 lg:text-[13px] font-['Poppins'] text-black underline underline-offset-2 decoration-gray-300 hover:text-yellow-600 transition group cursor-pointer"
              >
                {route.label}
                <ArrowCircle className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}