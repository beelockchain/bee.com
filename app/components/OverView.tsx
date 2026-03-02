"use client";

import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";

/* ======================
   NUMBER HIGHLIGHT
====================== */
const highlightNumbers = (text: string) => {
  return text.split(/(\d+(?:[+x]\d*)?)/).map((part, index) => {
    if (/^\d+(?:[+x]\d*)?$/.test(part)) {
      return (
        <span key={index} className="text-black font-bold">
          {part}
        </span>
      );
    }
    return (
      <span key={index} className="text-black">
        {part}
      </span>
    );
  });
};

/* ======================
   DATA — defined OUTSIDE the component so it is never
   recreated on re-render, preventing stale closure bugs
   that caused click events to silently fail.
====================== */
const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;

const cardsData = [
  {
    initialLogo: `${ASSET_URL}/images/Overviewlogo.webp`,
    initialText: "People-centric Digital Transformation",
    hoverLogo: `${ASSET_URL}/images/Heromainimg.webp`,
    hoverTitle: "Enterprise-Grade Security 100",
    hoverSubtitle: "For Your Business",
    image: `${ASSET_URL}/images/whychooseusimg1.webp`,
    description:
      "We believe digital transformation succeeds when people come first. At Beelockchain, we design solutions around real user needs, empower teams, and drive adoption that creates meaningful, lasting impact beyond technology alone.",
  },
  {
    initialLogo: `${ASSET_URL}/images/Overviewlogo.webp`,
    initialText: "Vendor-neutral & strategy-first approach",
    hoverLogo: `${ASSET_URL}/images/Heromainimg.webp`,
    hoverTitle: "Automation Excellence 7",
    hoverSubtitle: "Process Reliability",
    image: `${ASSET_URL}/images/why-choose-img1.webp`,
    description:
      "Our vendor-neutral, strategy-first approach is why organizations choose Beelockchain. We focus on business outcomes, not tools, delivering unbiased guidance and flexible solutions aligned with long-term goals.",
  },
  {
    initialLogo: `${ASSET_URL}/images/Overviewlogo.webp`,
    initialText: "Market Responsiveness",
    hoverLogo: `${ASSET_URL}/images/Heromainimg.webp`,
    hoverTitle: "Safe & Scalable 24x7",
    hoverSubtitle: "Data Infrastructure",
    image: `${ASSET_URL}/images/whychooseusimg3.webp`,
    description:
      "Beelockchain helps organizations stay ahead of change. We respond quickly to market shifts, emerging technologies, and customer demands—enabling confident decisions and sustained competitiveness in dynamic environments.",
  },
  {
    initialLogo: `${ASSET_URL}/images/Overviewlogo.webp`,
    initialText: "Proactive Risk Mitigation",
    hoverLogo: `${ASSET_URL}/images/Heromainimg.webp`,
    hoverTitle: "Real-Time Insights 24",
    hoverSubtitle: "Modern Intelligence",
    image: `${ASSET_URL}/images/whychooseusimg4.webp`,
    description:
      "We proactively identify and reduce risks before they become barriers. Beelockchain embeds security, compliance, and resilience into every solution, protecting operations, reputation, and future growth.",
  },
  {
    initialLogo: `${ASSET_URL}/images/Overviewlogo.webp`,
    initialText: "Agile Methodologies",
    hoverLogo: `${ASSET_URL}/images/Heromainimg.webp`,
    hoverTitle: "Always-On Support 24x7",
    hoverSubtitle: "Dedicated Experts",
    image: `${ASSET_URL}/images/whychooseusimg.webp`,
    description:
      "Our agile methodologies enable faster delivery and continuous improvement. Beelockchain works collaboratively with teams to adapt quickly, deliver value early, and evolve solutions as business needs change.",
  },
];

/* ======================
   COMPONENT
====================== */
const OverView = () => {
  // Separate ref array ONLY for desktop cards so GSAP never
  // accidentally targets the hidden mobile DOM nodes.
  const desktopCardsRef = useRef<HTMLDivElement[]>([]);

  // Completely independent state — desktop hover never bleeds into mobile
  const [desktopActive, setDesktopActive] = useState<number | null>(null);
  const [mobileActive, setMobileActive] = useState<number | null>(null);

  /* ======================
     DESKTOP GSAP
  ====================== */
  const expandCard = (index: number) => {
    setDesktopActive(index);
    gsap.to(desktopCardsRef.current, {
      flex: (i) => (i === index ? 1.6 : 0.8),
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.03,
    });
  };

  const resetCards = () => {
    setDesktopActive(null);
    gsap.to(desktopCardsRef.current, {
      flex: 1,
      duration: 0.45,
      ease: "power3.out",
    });
  };

  /* ======================
     MOBILE CLICK — plain setState, zero GSAP involved
  ====================== */
  const handleMobileClick = (index: number) => {
    setMobileActive((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full bg-white flex flex-col items-center py-10">
      {/* ================= TITLE ================= */}
      <div className="mb-6 lg:mb-10 text-center">
        <h2 className="text-black text-[19px] sm:text-[20px] md:text-[20px] lg:text-[26px] xl:text-[34px] font-bold">
          Why Choose <span>Beelockchain</span>
        </h2>
        <p className="w-full  md:w-[720px] lg:w-[820px] max-w-full text-black text-sm md:text-lg font-normal font-['Poppins']">
          As experts in digital transformation, we create customized, future-ready
          solutions that ensure your investment counts by focusing on your unique
          customer and market needs.
        </p>
      </div>

      {/* ======================================================
           DESKTOP VIEW
      ====================================================== */}
      <div
        className="hidden lg:flex w-[90%] xl:w-[80%] gap-4 px-6"
        style={{ height: "clamp(420px, calc(100vh - 220px), 580px)" }}
        onMouseLeave={resetCards}
      >
        {cardsData.map((card, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) desktopCardsRef.current[i] = el;
            }}
            onMouseEnter={() => expandCard(i)}
            className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
          >
            {desktopActive === i ? (
              /* ---- Expanded ---- */
              <div className="flex flex-col w-full h-full p-4 xl:p-6 gap-3 xl:gap-5">
                <div className="flex justify-between items-start flex-shrink-0">
                  <div>
                    <h2 className="text-[20px] xl:text-[26px] font-extrabold leading-tight">
                      {highlightNumbers(card.hoverTitle)}
                    </h2>
                    <p className="text-[15px] xl:text-[18px]">
                      {highlightNumbers(card.hoverSubtitle)}
                    </p>
                  </div>
                  <Image
                    src={card.hoverLogo}
                    alt="logo"
                    width={40}
                    height={40}
                    className="opacity-60 rotate-[320deg] flex-shrink-0"
                  />
                </div>

                <div className="w-full flex-1 min-h-0 rounded-xl overflow-hidden">
                  <Image
                    src={card.image}
                    alt="image"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-gray-700 text-[13px] xl:text-[15px] leading-5 xl:leading-6 flex-shrink-0 line-clamp-4">
                  {card.description}
                </p>
              </div>
            ) : (
              /* ---- Collapsed ---- */
              <div className="w-full h-full flex flex-col justify-between items-center py-6 px-4">
                <h3
                  className="text-base xl:text-xl font-semibold text-black"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {card.initialText}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-base xl:text-xl font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Image
                    src={card.initialLogo}
                    alt="icon"
                    width={22}
                    height={22}
                    className="opacity-60"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ======================================================
           MOBILE + TABLET VIEW
           Completely isolated from desktop — no shared state,
           no shared refs, no GSAP.
      ====================================================== */}
      <div className="flex lg:hidden w-full flex-col gap-4 px-4">
        {cardsData.map((card, i) => {
          const isOpen = mobileActive === i;
          return (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/*
                <button> ensures tap events always fire on mobile.
                The onClick closure captures `i` directly from the
                outer map — no stale references possible.
              */}
              <button
                type="button"
                onClick={() => handleMobileClick(i)}
                className="w-full p-4 flex justify-between items-center text-left"
              >
                <h3 className="text-md font-semibold text-black flex-1 pr-3">
                  {card.initialText}
                </h3>

                {/* Icon: hoverLogo + rotated when open, initialLogo when closed */}
                <span className="flex-shrink-0">
                  <Image
                    src={isOpen ? card.hoverLogo : card.initialLogo}
                    alt="icon"
                    width={28}
                    height={28}
                    style={{ opacity: isOpen ? 1 : 0.7 }}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-[320deg]" : ""
                    }`}
                  />
                </span>
              </button>

              {/* Expand panel — CSS-only transition, no JS DOM manipulation */}
              <div
                className="overflow-hidden"
                style={{
                  maxHeight: isOpen ? "600px" : "0px",
                  transition: "max-height 0.4s ease-in-out",
                }}
              >
                <div className="p-4 pt-0 flex flex-col gap-4">
                  <h2 className="text-xl font-bold">
                    {highlightNumbers(card.hoverTitle)}
                  </h2>
                  <p className="text-base">
                    {highlightNumbers(card.hoverSubtitle)}
                  </p>
                  <Image
                    src={card.image}
                    alt="image"
                    width={400}
                    height={240}
                    className="w-full h-[200px] object-cover rounded-lg"
                  />
                  <p className="text-gray-700 text-sm pb-2">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OverView;