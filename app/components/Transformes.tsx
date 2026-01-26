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

type TabType = typeof TABS[number];

const TAB_CONTENT: Record<TabType, { title: string; desc: string }> = {
  Blockchain: {
    title: "Digital Transformation Services",
    desc: "We provide comprehensive full-cycle digital transformation services that integrate cloud computing, automation, data analytics, and the latest technologies to future-proof your business.",
  },
  AI: {
    title: "Software Development",
    desc: "We specialize in bespoke software development solutions that help startups and enterprises grow with future-focused technology.",
  },
  Game: {
    title: "Blockchain Development",
    desc: "Enterprise-grade Custom Blockchain Development services for creating decentralized applications, smart contracts, and robust blockchain ecosystems.",
  },
  Consultant: {
    title: "AI Development",
    desc: "Beelockchain’s AI Development services provide custom machine learning and intelligent automation to improve decision-making and help businesses remain competitive.",
  },
  Software: {
    title: "DevOps Services",
    desc: "Beelockchain specializes in end-to-end DevOps solutions, offering CI/CD automation, cloud DevOps services, and faster, reliable software deployments.",
  },
  Web3: {
    title: "Digital Marketing",
    desc: "Grow faster with our full-service Digital Marketing Services, including SEO, PPC, content marketing, and social media management to achieve your brand’s goals.",
  },
};

export default function Transformes() {
  const [activeTab, setActiveTab] = useState(0);

  const desktopRefs = useRef<HTMLDivElement[]>([]);
  const mobileRefs = useRef<HTMLDivElement[]>([]);

  const addDesktopRefs = (el: HTMLDivElement | null) => {
    if (el && !desktopRefs.current.includes(el)) {
      desktopRefs.current.push(el);
    }
  };

  const addMobileRefs = (el: HTMLDivElement | null) => {
    if (el && !mobileRefs.current.includes(el)) {
      mobileRefs.current.push(el);
    }
  };

  /* ================= SCROLL OBSERVER ================= */
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              (entry.target as HTMLElement).dataset.index
            );
            setActiveTab(index);
          }
        });
      },
      isMobile
        ? {
          root: null,
          rootMargin: "-45% 0px -45% 0px", // 🔥 CENTER ALIGN FIX
          threshold: 0,
        }
        : {
          threshold: 0.6,
        }
    );

    const targets = isMobile
      ? mobileRefs.current
      : desktopRefs.current;

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  const scrollToDesktopSection = (index: number) => {
    desktopRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center">
      {/* ---------------- HEADER ---------------- */}
      <div>
        <img src="/Services.png" alt="Services" />
      </div>

      <div className="text-center mb-20 px-6">
        <h1 className="text-xl md:text-4xl font-bold text-black">
          Digital Transformation
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-xs md:text-base">
          A full spectrum of digital transformation services to elevate your
          business
        </p>
      </div>

      {/* ================= DESKTOP + TABLET (UNCHANGED) ================= */}
      <div className="hidden md:block w-full max-w-6xl">
        <div className="grid grid-cols-[320px_1fr] gap-24 relative">
          <div className="sticky top-32 h-fit space-y-6">
            {TABS.map((tab, index) => (
              <button
                key={tab}
                onClick={() => scrollToDesktopSection(index)}
                className={`block w-full text-left text-xl font-medium transition-all ${activeTab === index
                  ? "text-black font-bold"
                  : "text-gray-400 hover:text-black"
                  }`}
              >
                {TAB_CONTENT[tab].title}
              </button>
            ))}
          </div>

          <div>
            {TABS.map((tab, index) => (
              <div
                key={tab}
                ref={addDesktopRefs}
                data-index={index}
                className="min-h-[60vh] flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold text-black">
                  {TAB_CONTENT[tab].title}
                </h2>
                <p className="text-gray-600 mt-6 text-lg max-w-xl">
                  {TAB_CONTENT[tab].desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MOBILE ONLY ================= */}
      <div className="block md:hidden w-full relative">
        {/* ===== STICKY CENTER-LOCKED TITLE ===== */}
        <div className="sticky top-16 z-20 bg-white py-4 ">
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(50% - ${(activeTab + 0.5) * 50}%))`,
              }}
            >
              {TABS.map((tab, index) => (
                <div
                  key={tab}
                  className="w-[50%] flex justify-center items-center gap-10"
                >
                  <h1
                    className={`text-sm font-semibold whitespace-nowrap transition-all duration-300 ml-16 ${index === activeTab
                      ? "text-black opacity-100 scale-100"
                      : "text-gray-400 opacity-40 scale-95"
                      }`}
                  >
                    {TAB_CONTENT[tab].title}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full">
          {TABS.map((tab, index) => (
            <div
              key={tab}
              ref={addMobileRefs}
              data-index={index}
              className="min-h-[80vh] flex flex-col items-center justify-center px-6"
            >
              <p
                className="text-center text-gray-600 text-sm "
              >
                {TAB_CONTENT[tab].desc}
              </p>
              {/* ===== CTA ===== */}
              <div className="flex justify-center mt-4">
                <button className="inline-flex items-center gap-2 font-medium text-black underline">
                  Digital Transformation
                  <span className="w-7 h-7 rounded-full bg-yellow-400 flex items-center justify-center">
                    →
                  </span>
                </button>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}
