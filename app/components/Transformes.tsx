"use client";

import { useEffect, useRef, useState } from "react";

/* ---------------- TABS ---------------- */
const TABS = [
  "Blockchain",
  "AI",
  "Game",
  "Consultant",
  "Software",
  "Web3",
] as const;

type TabType = (typeof TABS)[number];

const TAB_CONTENT: Record<
  TabType,
  { title: string; desc: string; routes: { label: string; href: string }[] }
> = {
  Blockchain: {
    title: "Digital Transformation Services",
    desc: "We provide comprehensive full-cycle digital transformation services that integrate cloud computing, automation, data analytics, and the latest technologies to future-proof your business.",
    routes: [{ label: "Digital Transformation", href: "#" }],
  },
  AI: {
    title: "Software Development",
    desc: "We specialize in bespoke software development solutions that help startups and enterprises grow with future-focused technology.",
    routes: [
      { label: "Custom App Development", href: "#" },
      { label: "Android App Development", href: "#" },
      { label: "iOS App Development", href: "#" },
      { label: "React. Active App Development", href: "#" },
      { label: "Web App Development", href: "#" },
      { label: "ERP Software Development", href: "#" },
      { label: "Progressive Web Apps(PWAS)", href: "#" },
    ],
  },
  Game: {
    title: "Blockchain Development",
    desc: "Enterprise-grade Custom Blockchain Development services for creating decentralized applications, smart contracts, and robust blockchain ecosystems.",
    routes: [
      { label: "Blockchain Development", href: "https://beelockchain.io" },
    ],
  },
  Consultant: {
    title: "AI Development",
    desc: "Beelockchain's AI Development services provide custom machine learning and intelligent automation to improve decision-making and help businesses remain competitive.",
    routes: [
      { label: "Generative AI Development", href: "#" },
      { label: "Chat AI  App Development", href: "#" },
      { label: "AI Strategy Consulting", href: "#" },
      { label: "AI UI/UX Design Services", href: "#" },
      { label: "Machine Learning Development ", href: "#" },
      { label: "LLM Development", href: "#" },
      { label: "Custom AI Development", href: "#" },
      
    ],
  },
  Software: {
    title: "DevOps Services",
    desc: "Beelockchain specializes in end-to-end DevOps solutions, offering CI/CD automation, cloud DevOps services, and faster, reliable software deployments.",
    routes: [{ label: "DevOps Development", href: "#" }],
  },
  Web3: {
    title: "Digital Marketing",
    desc: "Grow faster with our full-service Digital Marketing Services, including SEO, PPC, content marketing, and social media management to achieve your brand's goals.",
    routes: [{ label: "Digital Marketing Services", href: "#" }],
  },
};

/* ---------------- ROUTE TAG COMPONENT ---------------- */
function RouteTag({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1 text-sm md:text-lg text-gray-700  transition-colors group underline underline-offset-2 decoration-gray-300 hover:decoration-yellow-500 "
    >
      {label}
      <span className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center text-xs group-hover:bg-yellow-500 transition-colors">
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-black hover:text-yellow-400"
        >
          <path
            d="M2 10L10 2M10 2H4M10 2V8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}

export default function Transformes() {
  const [activeTab, setActiveTab] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Height of your top navbar - adjust this value to match your navbar
  const NAV_HEIGHT = 64;

  // Number of "screens" to scroll through (one per tab)
  const SCROLL_SCREENS = TABS.length;

  // Handle tab click - scrolls to the appropriate position
  const handleTabClick = (index: number) => {
    if (!sectionRef.current) return;

    setIsScrolling(true);

    const section = sectionRef.current;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight - window.innerHeight;

    // Calculate the scroll position for this tab
    const targetProgress = index / SCROLL_SCREENS;
    const targetScrollPosition = sectionTop + sectionHeight * targetProgress;

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });

    // Reset isScrolling after animation completes
    setTimeout(() => {
      setIsScrolling(false);
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !containerRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top - NAV_HEIGHT;
      const sectionHeight = section.offsetHeight - window.innerHeight;

      // Calculate how far we've scrolled through the pinned section
      if (sectionTop <= 0 && sectionTop > -sectionHeight) {
        // We're in the pinned zone
        const progress = Math.abs(sectionTop) / sectionHeight;
        setScrollProgress(progress);

        // Only update activeTab from scroll if not programmatically scrolling
        if (!isScrolling) {
          // Calculate which tab should be active based on scroll progress
          const tabIndex = Math.min(
            Math.floor(progress * SCROLL_SCREENS),
            SCROLL_SCREENS - 1,
          );
          setActiveTab(tabIndex);
        }
      } else if (sectionTop > 0) {
        // Before the section
        setScrollProgress(0);
        if (!isScrolling) setActiveTab(0);
      } else {
        // After the section
        setScrollProgress(1);
        if (!isScrolling) setActiveTab(SCROLL_SCREENS - 1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  // Calculate individual tab progress for smooth transitions
  const getTabProgress = (index: number) => {
    const tabStart = index / SCROLL_SCREENS;
    const tabEnd = (index + 1) / SCROLL_SCREENS;

    if (scrollProgress < tabStart) return 0;
    if (scrollProgress > tabEnd) return 1;

    return (scrollProgress - tabStart) / (tabEnd - tabStart);
  };

  return (
    <>
      {/* 
        This outer container creates the scroll height needed for the pinned effect.
        The height is: 100vh (for the section itself) + 100vh * number of tabs (for scroll distance)
      */}
      <section
        ref={sectionRef}
        className="relative w-full"
        style={{ height: `${100 + 100 * SCROLL_SCREENS}vh` }}
      >
        {/* 
          This inner container is what actually gets "pinned" (sticky).
          It stays in view while you scroll through the outer container.
        */}
        <div
          ref={containerRef}
          className="sticky bg-white flex flex-col items-center overflow-hidden"
          style={{
            top: NAV_HEIGHT,
            height: `calc(100vh - ${NAV_HEIGHT}px)`,
          }}
        >
          {/* ---------------- HEADER ---------------- */}
          <div className="pt-8 pb-4">
            <img src="/assets/images/Services.webp" alt="Services" className="" />
          </div>

          <div className="text-center mb-8 md:mb-12 px-6">
            <h2 className="text-xl md:text-4xl font-bold text-black">
              Digital Transformation
            </h2>
            <p className="text-gray-600 mt-2 md:mt-4 max-w-2xl mx-auto text-xs md:text-base">
              A full spectrum of digital transformation services to elevate your
              business
            </p>
          </div>

          {/* ================= DESKTOP + TABLET ================= */}
          <div className="hidden md:flex flex-1 w-full max-w-6xl px-6">
            <div className="grid grid-cols-[320px_1fr] gap-24 w-full">
              {/* Left side - Tab titles */}
              <div className="space-y-6">
                {TABS.map((tab, index) => (
                  <button
                    key={tab}
                    onClick={() => handleTabClick(index)}
                    className={`block w-full text-left text-xl font-medium transition-all duration-300 cursor-pointer ${
                      activeTab === index
                        ? "text-black font-bold translate-x-2"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {TAB_CONTENT[tab].title}
                  </button>
                ))}
              </div>

              {/* Right side - Content */}
              <div className="relative flex items-center">
                {TABS.map((tab, index) => {
                  const isActive = activeTab === index;
                  const progress = getTabProgress(index);

                  return (
                    <div
                      key={tab}
                      className="absolute inset-0 flex flex-col justify-start transition-all duration-500"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: `translateY(${isActive ? 0 : index < activeTab ? -30 : 30}px)`,
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      <p className="text-gray-600 text-lg font-semibold max-w-xl">
                        {TAB_CONTENT[tab].desc}
                      </p>

                      {/* Route Tags */}
                      {TAB_CONTENT[tab].routes.length > 0 && (
                        <div className="flex flex-wrap gap-x-4 gap-y-3 mt-8 ">
                          {TAB_CONTENT[tab].routes.map((route, i) => (
                            <RouteTag
                              key={i}
                              label={route.label}
                              href={route.href}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================= MOBILE ONLY ================= */}
          <div className="flex md:hidden flex-1 flex-col w-full">
            {/* Sticky title carousel */}
            <div className="py-4 space-x-10">
              <div className="relative w-full overflow-hidden ">
                <div
                  className="flex gap-8 transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(calc(50% - ${activeTab * 180 + 90}px))`,
                  }}
                >
                  {TABS.map((tab, index) => (
                    <div
                      key={tab}
                      className="w-[50%] flex justify-center items-center gap-10"
                    >
                      <h3
                        className={`text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                          index === activeTab
                            ? "text-black opacity-100 scale-100"
                            : "text-gray-400 opacity-40 scale-95"
                        }`}
                      >
                        {TAB_CONTENT[tab].title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="flex-1 relative px-6">
              {TABS.map((tab, index) => {
                const isActive = activeTab === index;

                return (
                  <div
                    key={tab}
                    className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 px-6"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: `translateY(${isActive ? 0 : index < activeTab ? -20 : 20}px)`,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <p className="text-center text-gray-600 text-sm font-semibold gap-10">
                      {TAB_CONTENT[tab].desc}
                    </p>

                    {/* Route Tags - Mobile */}
                    {TAB_CONTENT[tab].routes.length > 0 && (
                      <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mt-4">
                        {TAB_CONTENT[tab].routes.map((route, i) => (
                          <RouteTag
                            key={i}
                            label={route.label}
                            href={route.href}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
