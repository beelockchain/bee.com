"use client";

import { useEffect, useRef, useState } from "react";

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
    routes: [{ label: "DevOps Development", href: "#" }],
  },
  Marketing: {
    title: "Digital Marketing",
    desc: "Grow faster with our full-service Digital Marketing Services, including SEO, PPC, content marketing, and social media management to achieve your brand's goals.",
    routes: [{ label: "Digital Marketing Services", href: "#" }],
  },
};

const NAV_HEIGHT = 64; // ✏️ match your navbar height in px

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
   1. MOBILE + TABLET  — < 1024px
   Pure click-based tab switching. No scroll animation.

   Mobile  (< 768px):   sidebar icon layout (original design)
   Tablet  (768–1023px): desktop-style 2-col pill list + crossfade content
═════════════════════════════════════════════════════════════════ */
function MobileTabletLayout() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-white py-8">

      {/* ── Header ── */}
      <div className="relative text-center px-4 pb-6 overflow-hidden">
        <img
          src="/assets/images/Services.svg" alt=""
          aria-hidden="true"
          className="w-full pointer-events-none select-none opacity-50"
        />
        <div className="relative z-10">
          <h2 className="font-['Poppins'] text-[20px] md:text-[26px] font-bold text-black leading-tight">
            Digital Transformation
          </h2>
          <p className="mt-1 text-[12px] md:text-[14px] text-gray-500 font-['Poppins'] leading-snug max-w-[280px] md:max-w-[480px] mx-auto">
            A full spectrum of digital transformation services to elevate your business
          </p>
        </div>
      </div>

      {/* ── MOBILE card (< 768px) ── */}
      <div className="md:hidden px-3">
        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
          <div className="flex">

            {/* Sidebar icons */}
            <div className="flex flex-col w-[72px] flex-shrink-0 bg-white border-r border-gray-200">
              {TABS.map((tab, index) => (
                <button
                  key={tab}
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
                    <img src={TAB_ICONS[tab]} alt={tab} className="w-4 h-4" />
                  </div>
                  <span className={`text-[9px] font-medium leading-tight text-center font-['Poppins'] ${
                    activeTab === index ? "text-yellow-600" : "text-gray-400"
                  }`}>{tab}</span>
                </button>
              ))}
            </div>

            {/* Content panel */}
            <div className="flex-1 min-w-0">
              {TABS.map((tab, index) => (
                <div
                  key={tab}
                  className="p-4"
                  style={{ display: activeTab === index ? "block" : "none" }}
                >
                  <h3 className="font-semibold text-black text-[13px] leading-tight font-['Poppins'] mb-2">
                    {TAB_CONTENT[tab].title}
                  </h3>
                  <p className="text-[11px] text-gray-600 font-['Poppins'] leading-relaxed mb-4">
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
              ))}
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

      {/* ── TABLET 2-col layout (768px–1023px) ── */}
      <div className="hidden md:grid grid-cols-2 gap-10 px-10 max-w-4xl mx-auto">

        {/* Left: pill tab list */}
        <div className="flex flex-col justify-center gap-2">
          {TABS.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`w-fit flex items-center gap-3 px-4 py-2.5 rounded-full border text-left transition-all duration-200 ${
                activeTab === index
                  ? "bg-white border-yellow-400 shadow-md"
                  : "bg-gray-50 border-gray-200 hover:bg-white hover:border-gray-300"
              }`}
            >
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${
                activeTab === index ? "bg-yellow-400" : "border border-gray-300"
              }`} />
              <span className={`text-[13px] font-['Poppins'] font-medium ${
                activeTab === index ? "text-black" : "text-gray-500"
              }`}>
                {TAB_CONTENT[tab].title}
              </span>
            </button>
          ))}
        </div>

        {/* Right: crossfade content */}
        <div className="relative" style={{ minHeight: 340 }}>
          {TABS.map((tab, index) => (
            <div
              key={tab}
              className="absolute inset-0 flex flex-col justify-center transition-all duration-300"
              style={{
                opacity: activeTab === index ? 1 : 0,
                transform: `translateY(${activeTab === index ? 0 : 12}px)`,
                pointerEvents: activeTab === index ? "auto" : "none",
              }}
            >
              <div className="flex items-start gap-2 mb-3">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-yellow-400 flex-shrink-0" />
                <h3 className="text-[16px] font-semibold font-['Poppins'] text-black leading-snug">
                  {TAB_CONTENT[tab].title}
                </h3>
              </div>
              <p className="text-[13px] text-gray-600 font-['Poppins'] leading-relaxed mb-4">
                {TAB_CONTENT[tab].desc}
              </p>
              <div className="flex flex-col gap-2.5">
                {TAB_CONTENT[tab].routes.map((route, i) => (
                  <a
                    key={i}
                    href={route.href}
                    target={route.href.startsWith("http") ? "_blank" : undefined}
                    rel={route.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-[13px] font-['Poppins'] text-black underline underline-offset-2 decoration-gray-300 hover:text-yellow-600 transition group"
                  >
                    {route.label}
                    <ArrowCircle className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

/* ═════════════════════════════════════════════════════════════════
   2. DESKTOP  — ≥ 1024px
   3-col sticky scroll. Tab changes driven by scroll position.
   Clicking a tab also scrolls to the matching position.
   VH_PER_TAB = scroll runway per tab. ✏️ Higher = slower.
═════════════════════════════════════════════════════════════════ */
function DesktopLayout() {
  const VH_PER_TAB     = 100;
  const SCROLL_SCREENS = TABS.length;
  const SECTION_VH     = 100 + VH_PER_TAB * SCROLL_SCREENS; // 700vh

  const [activeTab, setActiveTab] = useState(0);
  const isScrollingClick           = useRef(false);
  const sectionRef                 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || isScrollingClick.current) return;
      const rect    = sectionRef.current.getBoundingClientRect();
      const sTop    = rect.top - NAV_HEIGHT;
      const sHeight = sectionRef.current.offsetHeight - window.innerHeight;
      if (sTop > 0 || sTop < -sHeight) return;
      const progress = Math.abs(sTop) / sHeight;
      const next     = Math.min(Math.floor(progress * SCROLL_SCREENS), SCROLL_SCREENS - 1);
      setActiveTab(prev => (prev === next ? prev : next));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleTabClick = (index: number) => {
    if (!sectionRef.current) return;
    isScrollingClick.current = true;
    setActiveTab(index);
    const sTop    = sectionRef.current.offsetTop;
    const sHeight = sectionRef.current.offsetHeight - window.innerHeight;
    window.scrollTo({ top: sTop + sHeight * (index / SCROLL_SCREENS), behavior: "smooth" });
    setTimeout(() => { isScrollingClick.current = false; }, 800);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: `${SECTION_VH}vh` }}
    >
      <div
        className="sticky bg-white flex flex-col overflow-hidden"
        style={{ top: NAV_HEIGHT, height: `calc(100vh - ${NAV_HEIGHT}px)` }}
      >
        {/* Header */}
        <div className="w-full max-w-6xl mx-auto px-6 pt-8 pb-3 text-center flex-shrink-0">
          <img src="/assets/images/Services.svg" alt="Services" className="mx-auto" />
          <h2 className="font-['Poppins'] text-[28px] lg:text-[32px] font-bold text-black mt-1">
            Digital Transformation
          </h2>
          <p className="mt-1 text-[14px] lg:text-[15px] text-black font-['Poppins']">
            A full spectrum of digital transformation services to elevate your business
          </p>
        </div>

        {/* 3-col grid */}
        <div className="w-full max-w-7xl mx-auto px-6 flex-1 min-h-0 pb-4">
          <div className="w-full h-full grid grid-cols-3 gap-2 lg:gap-4 xl:gap-6">

            {/* Col 1: tab list */}
            <div className="flex flex-col justify-center gap-1.5 pl-4 lg:pl-8 xl:pl-28">
              {TABS.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(index)}
                  className={`w-fit flex items-center gap-2 px-3 py-2.5 lg:px-4 lg:py-3 rounded-full border text-left transition-all duration-200 ${
                    activeTab === index
                      ? "bg-white border-yellow-400 shadow-md"
                      : "bg-gray-50 border-gray-200 hover:bg-white hover:border-gray-300"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    activeTab === index ? "bg-yellow-400" : "border border-gray-300"
                  }`} />
                  <span className={`text-[12px] lg:text-[13px] xl:text-[14px] font-['Poppins'] font-medium ${
                    activeTab === index ? "text-black" : "text-gray-500"
                  }`}>
                    {TAB_CONTENT[tab].title}
                  </span>
                </button>
              ))}
            </div>

            {/* Col 2: center image */}
            <div className="relative w-full h-full">
              {TABS.map((tab, index) => (
                <img
                  key={tab}
                  src={TAB_CENTER_IMAGES[tab]}
                  alt={tab}
                  className="absolute inset-0 w-full h-full object-contain transition-all duration-500"
                  style={{
                    opacity: activeTab === index ? 1 : 0,
                    transform: `scale(${activeTab === index ? 1 : 0.96})`,
                    pointerEvents: activeTab === index ? "auto" : "none",
                  }}
                />
              ))}
            </div>

            {/* Col 3: text content */}
            <div className="relative w-full h-full">
              {TABS.map((tab, index) => {
                const isActive = activeTab === index;
                return (
                  <div
                    key={tab}
                    className="absolute inset-0 flex flex-col justify-center transition-all duration-500"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: `translateY(${isActive ? 0 : 16}px)`,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <div className="flex items-start gap-1 mb-3">
                     
                      <h3 className="text-[15px] lg:text-[17px] font-semibold font-['Poppins'] text-black leading-snug">
                        {TAB_CONTENT[tab].title}
                      </h3>
                    </div>
                    <p className="text-[12px] lg:text-[13px] text-gray-700 font-['Poppins'] leading-relaxed mb-5">
                      {TAB_CONTENT[tab].desc}
                    </p>
                    <div className="flex flex-col gap-2">
                      {TAB_CONTENT[tab].routes.map((route, i) => (
                        <a
                          key={i}
                          href={route.href}
                          target={route.href.startsWith("http") ? "_blank" : undefined}
                          rel={route.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-2 text-[12px] lg:text-[13px] font-['Poppins'] text-black underline underline-offset-2 decoration-gray-300 hover:text-yellow-600 transition group"
                        >
                          {route.label}
                          <ArrowCircle className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ═════════════════════════════════════════════════════════════════
   ROOT EXPORT
═════════════════════════════════════════════════════════════════ */
export default function Services() {
  return (
    <>
      <style>{`
        @keyframes cardFade { from { opacity:0; } to { opacity:1; } }
        .card-fade { animation: cardFade 0.25s ease both; }
      `}</style>
      {/* Mobile + Tablet: click-only, no scroll animation */}
      <div className="block lg:hidden">
        <MobileTabletLayout />
      </div>
      {/* Desktop: sticky scroll animation */}
      <div className="hidden lg:block">
        <DesktopLayout />
      </div>
    </>
  );
}