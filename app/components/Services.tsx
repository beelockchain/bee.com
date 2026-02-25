 "use client";

  import { useEffect, useRef, useState } from "react";
    const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;

  /* ---------------- TABS ---------------- */
  const TABS = [
    "Consultant",
    "Software",
    "Blockchain",
    "AI",
    "DevOps",
    "Marketing",

  ] as const;

  type TabType = (typeof TABS)[number];

  /* ---------------- ICONS ---------------- */
  // Replace these paths with your actual local image paths
  const TAB_ICONS: Record<TabType, string> = {
    Consultant: "assets/images/services-icon1.png",
    Software: "assets/images/services-icon2.png",    
    Blockchain: "assets/images/services-icon3.png",  
    AI: "assets/images/services-icon4.png",    
    DevOps: "assets/images/services-icon5.png",    
    Marketing: "assets/images/services-icon6.png",    
  };

  /* ---------------- CONTENT ---------------- */
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
        { label: "Custom App Development", href: "#" },
        { label: "Android App Development", href: "#" },
        { label: "iOS App Development", href: "#" },
        { label: "React Native App Development", href: "#" },
        { label: "Web App Development", href: "#" },
        { label: "ERP Software Development", href: "#" },
        { label: "Progressive Web Apps (PWA)", href: "#" },
      ],
    },
    Blockchain: {
      title: "Blockchain Development",
      desc: "Enterprise-grade Custom Blockchain Development services for creating decentralized applications, smart contracts, and robust blockchain ecosystems.",
      routes: [{ label: "Blockchain Development", href: "https://beelockchain.io" }],
    },
    AI: {
      title: "AI Development",
      desc: "Beelockchain’s AI Development services provide custom machine learning and intelligent automation to improve decision-making and help businesses remain competitive.",
      routes: [
        { label: "Generative AI Development ", href: "#" },
        { label: "Chat AI  App Development", href: "#" },
        { label: "LLM Development ", href: "#" },
        { label: "AI Strategy Consulting", href: "#" },
        { label: "AI UI/UX Design Services", href: "#" },
        { label: "Machine Learning Development", href: "#" },
        { label: "Custom AI Development", href: "#" },
      ],
    },
    DevOps: {
      title: "DevOps Services",
      desc: "Beelockchain specializes in end-to-end DevOps solutions, offering CI/CD automation, cloud DevOps services, and faster, reliable software deployments.",
      routes: [{ label: "DevOps Development", href: "#" }],
    },
    Marketing: {
      title: "Digital Marketing",
      desc: "Grow faster with our full-service Digital Marketing Services, including SEO, PPC, content marketing, and social media management to achieve your brand’s goals.",
      routes: [{ label: "Digital Marketing Services", href: "#" }],
    },
  
  };

  /* ---------------- ROUTE TAG ---------------- */
  function RouteTag({
    label,
    href,
    target,
  }: {
    label: string;
    href: string;
    target?: string;
  }) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className="inline-flex items-center gap-1.5 text-sm md:text-base text-gray-700 group underline underline-offset-4 decoration-gray-300 hover:decoration-yellow-500 transition-all"
      >
        {label}
        <span className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-bold group-hover:bg-yellow-500 transition-colors">
          →
        </span>
      </a>
    );
  }

  /* ---------------- MAIN COMPONENT ---------------- */
  export default function Services() {
    const [activeTab, setActiveTab] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const NAV_HEIGHT = 64;
    const SCROLL_SCREENS = TABS.length;

    /* -------- TAB CLICK SCROLL -------- */
    const handleTabClick = (index: number) => {
      if (!sectionRef.current) return;

      setIsScrolling(true);

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight - window.innerHeight;

      const targetProgress = index / SCROLL_SCREENS;
      const targetScrollPosition = sectionTop + sectionHeight * targetProgress;

      window.scrollTo({
        top: targetScrollPosition,
        behavior: "smooth",
      });

      setTimeout(() => setIsScrolling(false), 500);
    };

    /* -------- SCROLL LOGIC -------- */
    useEffect(() => {
      const handleScroll = () => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top - NAV_HEIGHT;
        const sectionHeight =
          sectionRef.current.offsetHeight - window.innerHeight;

        if (sectionTop <= 0 && sectionTop > -sectionHeight) {
          const progress = Math.abs(sectionTop) / sectionHeight;

          if (!isScrolling) {
            const tabIndex = Math.min(
              Math.floor(progress * SCROLL_SCREENS),
              SCROLL_SCREENS - 1
            );
            setActiveTab(tabIndex);
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [isScrolling]);

    return (
      <section
        ref={sectionRef}
        className="relative w-full"
        style={{ height: `${100 + 100 * SCROLL_SCREENS}vh` }}
      >
        <div
          ref={containerRef}
          className="sticky bg-white flex flex-col items-center overflow-hidden"
          style={{
            top: NAV_HEIGHT,
            height: `calc(100vh - ${NAV_HEIGHT}px)`,
          }}
        >
      {/* <div className="relative w-full max-w-5xl mx-auto lg:py-5">

    <img
      src={`${ASSET_URL}/images/Services.webp`}
      alt="Services"
      className="w-full h-auto object-cover"
    />

    <div
      className="
        absolute
        left-1/2 -translate-x-1/2
        -bottom-10 md:-bottom-10
      
        px-6 py-4
        text-center
        w-[90%] md:w-[70%]
      "
    >
      <h2 className="text-nowrap text-[19px] sm:text-[20px] md:text-[20px] lg:text-[26px] xl:text-[34px] font-bold text-black leading-snug">
        Areas Of Expertise - Digital Transformation
      </h2>

      <p className="mt-2 text-sm md:text-lg text-black text-center px-4 font-normal font-['Poppins']">
        A full spectrum of digital transformation services to elevate<br/> your business
      </p>
    </div>

  </div> */}

  <div className="relative w-full max-w-6xl mx-auto lg:py-5">

    <img
      src={`${ASSET_URL}/images/Services.webp`}
      alt="Services"
      className="w-full h-auto object-cover"
    />

    {/* TEXT BOX OVERLAPPING BOTTOM */}
    <div
      className="
        absolute
        left-1/2 -translate-x-1/2
        -bottom-20 sm:-bottom-8 md:-bottom-10
        px-3 sm:px-6 py-2 sm:py-4
        text-center
        w-[95%] sm:w-[85%] md:w-[70%]
      "
    >
      <h2 className=" overflow-hidden 
        font-['Poppins'] text-[19px] sm:text-[20px] md:text-[20px] lg:text-[26px] xl:text-[34px] text-black leading-snug font-semibold
      ">
        Areas Of Expertise - Digital Transformation
      </h2>

      <p className="
        mt-1 sm:mt-2
      text-[10px]   xs:text-[12px] sm:text-[12px] md:text-[14px]
        text-black text-center
        px-0 sm:px-4
        font-normal font-['Poppins']
      
      ">
        A full spectrum of digital transformation services to elevate<br/> your business
      </p>

    </div>

  </div>

          {/* ================= DESKTOP CARD LAYOUT ================= */}
          <div className="hidden md:flex w-full max-w-6xl  md:mt-12 lg:mt-12 px-6">
            <div className="w-full bg-gray-100 rounded-xl p-6 md:p-6 shadow-sm">
              <div className="grid grid-cols-[300px_1fr] gap-12 items-start">

                {/* LEFT TABS */}
                <div className="space-y-1">
                  {TABS.map((tab, index) => (
                    <button
                      key={tab}
                      onClick={() => handleTabClick(index)}
                      className={`w-full flex items-center gap-4 p-2 rounded-xl border transition-all duration-200 cursor-pointer
                        ${
                          activeTab === index
                            ? "bg-white border-yellow-400 shadow-sm"
                            : "bg-gray-50 border-gray-200 hover:bg-white hover:border-gray-300"
                        }`}
                    >
                      {/* ICON */}
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-md flex-shrink-0 transition-colors ${
                          activeTab === index ? "bg-yellow-100" : ""
                        }`}
                      >
                        
                      
                        <img
                          src={TAB_ICONS[tab]}
                          alt={tab}
                          className="w-5 h-5"
                        />
                      </div>

                      {/* TAB LABEL */}
                      <span
                        className={`text-[13px] sm:text-[14px] md:text-[13px] lg:text-[14px] xl:text-[14px] font-medium text-black font-['Poppins'] ${
                          activeTab === index ? "text-black" : "text-gray-500"
                        }`}
                      >
                        {TAB_CONTENT[tab].title}
                      </span>
                    </button>
                  ))}
                </div>

                {/* RIGHT CONTENT */}
                <div className="relative min-h-[260px] w-[600px] md:w-[350px]">
                  {TABS.map((tab, index) => {
                    const isActive = activeTab === index;

                    return (
                      <div
                        key={tab}
                        className="absolute inset-0 transition-all duration-500"
                        style={{
                          opacity: isActive ? 1 : 0,
                          transform: `translateY(${isActive ? 0 : 20}px)`,
                          pointerEvents: isActive ? "auto" : "none",
                        }}
                      >
                        <p className="text-[13px] sm:text-[14px] md:text-[13px] lg:text-[16px] xl:text-[16px] font-medium text-black font-normal font-['Poppins']">
                          {TAB_CONTENT[tab].desc}
                        </p>

            
                            <div className="mt-6 flex flex-wrap">
  <div className="mt-6 grid grid-cols-1 md:grid-cols-1 gap-x-8 gap-y-4 md:gap-y-1">
    {TAB_CONTENT[tab].routes.map((route, i) => (

      <div
        key={i}
        className="
          flex items-center justify-between
          text-[12px] sm:text-[12px] md:text-[12px] lg:text-[16px]
          font-[Poppins] text-black underline
          cursor-pointer hover:text-yellow-500 transition group
        "
      >
        <span className="inline-flex items-center gap-2 text-left text-[12px] sm:text-[12px] md:text-[12px] 
        lg:text-[14px]  font-[Poppins] text-black underline cursor-pointer hover:text-yellow-500 transition">
    {route.label}

    <svg
      className="w-4 h-4 md:w-8 md:h-8 shrink-0 group-hover:translate-x-1 transition"
      viewBox="0 0 56 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="28.2473"
        cy="27.0945"
        r="15.912"
        fill="#F6E000"
        stroke="#F9C901"
        strokeWidth="1.5"
      />
      <path
        d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
      

      </div>

    ))}
  </div>
  </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>

  {/* ================= MOBILE LAYOUT ================= */}
  <div className="md:hidden w-full px-3 mt-20">
    <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
      <div className="flex">

        {/* LEFT: Vertical Icon Tabs */}
        <div className="flex flex-col w-[72px] bg-white border-r border-gray-200">
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
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
                  activeTab === index ? "bg-yellow-100" : "bg-gray-100"
                }`}
              >
                <img src={TAB_ICONS[tab]} alt={tab} className="w-4 h-4" />
              </div>
              <span
                className={`text-[9px] font-medium leading-tight text-center font-['Poppins'] transition-colors ${
                  activeTab === index ? "text-yellow-600" : "text-gray-400"
                }`}
              >
                {tab}
              </span>
            </button>
          ))}
        </div>

        {/* RIGHT: Content Area */}
        <div className="flex-1 relative min-h-[380px]">
          {TABS.map((tab, index) => {
            const isActive = activeTab === index;
            return (
              <div
                key={tab}
                className="absolute inset-0 p-4 overflow-y-auto"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: `translateY(${isActive ? 0 : 12}px)`,
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                {/* Title */}
                <h3 className="font-semibold text-black text-[13px] leading-tight font-['Poppins'] mb-2">
                  {TAB_CONTENT[tab].title}
                </h3>

                {/* Description */}
                <p className="text-[11px] text-black font-['Poppins'] leading-relaxed mb-4">
                  {TAB_CONTENT[tab].desc}
                </p>

                {/* Routes */}
                <div className="flex flex-col gap-3">
                  {TAB_CONTENT[tab].routes.map((route, i) => (
                    <a
                      key={i}
                      href={route.href}
                      className="inline-flex items-center gap-2 text-[10px] font-['Poppins'] text-black underline underline-offset-2 decoration-gray-300 hover:text-yellow-500 hover:decoration-yellow-400 transition group"
                    >
                      {route.label}
                      <svg
                        className="w-5 h-5 shrink-0 group-hover:translate-x-0.5 transition-transform"
                        viewBox="0 0 56 55"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="28.2473"
                          cy="27.0945"
                          r="15.912"
                          fill="#F6E000"
                          stroke="#F9C901"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
                          stroke="black"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
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
            activeTab === index
              ? "w-4 h-1.5 bg-yellow-400"
              : "w-1.5 h-1.5 bg-gray-300"
          }`}
        />
      ))}
    </div>
  </div>

        </div>
      </section>
    );
  }