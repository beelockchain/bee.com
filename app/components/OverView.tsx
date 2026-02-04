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
   DATA (ALL 5 CARDS)
====================== */
const cardsData = [
  {
    initialLogo: "/Group 300 2.svg",
    initialText: "People-centric Digital Transformation",
    hoverLogo: "/Group 300 2.svg",
    hoverTitle: "Enterprise-Grade Security 100",
    hoverSubtitle: "For Your Business",
    image: "/assets/images/why-choose-img1.png",
    description:
      "We believe digital transformation succeeds when people come first. At Beelockchain, we design solutions around real user needs, empower teams, and drive adoption that creates meaningful, lasting impact beyond technology alone.",
  },
  {
    initialLogo: "/Group 300 2.svg",
    initialText: "Vendor-neutral & strategy-first approach",
    hoverLogo: "/Group 300 2.svg",
    hoverTitle: "Automation Excellence 7",
    hoverSubtitle: "Process Reliability",
    image: "/assets/images/why-choose-img1.png",
    description:
      "Our vendor-neutral, strategy-first approach is why organizations choose Beelockchain. We focus on business outcomes, not tools, delivering unbiased guidance and flexible solutions aligned with long-term goals.",
  },
  {
    initialLogo: "/Group 300 2.svg",
    initialText: "Market Responsiveness",
    hoverLogo: "/Group 300 2.svg",
    hoverTitle: "Safe & Scalable 24x7",
    hoverSubtitle: "Data Infrastructure",
    image: "/assets/images/why-choose-img1.png",
    description:
      "Beelockchain helps organizations stay ahead of change. We respond quickly to market shifts, emerging technologies, and customer demands—enabling confident decisions and sustained competitiveness in dynamic environments.",
  },
  {
    initialLogo: "/Group 300 2.svg",
    initialText: "Proactive Risk Mitigation",
    hoverLogo: "/Group 300 2.svg",
    hoverTitle: "Real-Time Insights 24",
    hoverSubtitle: "Modern Intelligence",
    image: "/assets/images/why-choose-img1.png",
    description:
      "We proactively identify and reduce risks before they become barriers. Beelockchain embeds security, compliance, and resilience into every solution, protecting operations, reputation, and future growth.",
  },
  {
    initialLogo: "/Group 300 2.svg",
    initialText: "Agile Methodologies",
    hoverLogo: "/Group 300 2.svg",
    hoverTitle: "Always-On Support 24x7",
    hoverSubtitle: "Dedicated Experts",
    image: "/assets/images/why-choose-img1.png",
    description:
      "Our agile methodologies enable faster delivery and continuous improvement. Beelockchain works collaboratively with teams to adapt quickly, deliver value early, and evolve solutions as business needs change.",
  },
];

/* ======================
   COMPONENT
====================== */
const OverView = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  /* ======================
     DESKTOP GSAP
  ====================== */
  const expandCard = (index: number) => {
    setActiveIndex(index);

    gsap.to(cardsRef.current, {
      flex: (i) => (i === index ? 1.6 : 0.8),
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.03,
    });
  };

  const resetCards = () => {
    setActiveIndex(null);

    gsap.to(cardsRef.current, {
      flex: 1,
      duration: 0.45,
      ease: "power3.out",
    });
  };

  /* ======================
     MOBILE CLICK
  ====================== */
  const toggleCardMobile = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white flex flex-col items-center py-20">
      {/* ================= TITLE ================= */}
      <div className="mb-10 text-center">
        <h1 className="text-black text-[34px] font-bold">
          Why <span>Beelockchain</span>
        </h1>
        <p className="w-full md:w-[500px] max-w-full text-black text-lg">
          As experts in digital transformation, we create customized, future-ready solutions that ensure your investment counts by focusing on your unique customer and market needs.
        </p>
      </div>

      {/* ======================================================
           DESKTOP VIEW (100% UNCHANGED)
      ====================================================== */}
      <div
        className="hidden lg:flex w-[80%] h-[520px] gap-4 px-6"
        onMouseLeave={resetCards}
      >
        {cardsData.map((card, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            onMouseEnter={() => expandCard(i)}
            className="
              flex-1
              bg-white
              rounded-xl
              shadow-lg
              overflow-hidden
              cursor-pointer
            "
          >
            {activeIndex === i ? (
              /* Expanded (DESKTOP SAME AS ORIGINAL) */
              <div className="flex flex-col w-full h-full p-6 gap-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-[26px] font-extrabold">
                      {highlightNumbers(card.hoverTitle)}
                    </h2>
                    <p className="text-[18px]">
                      {highlightNumbers(card.hoverSubtitle)}
                    </p>
                  </div>

                  <Image
                    src={card.hoverLogo}
                    alt="logo"
                    width={45}
                    height={45}
                    className="opacity-60"
                  />
                </div>

                <div className="w-full h-[220px] rounded-xl overflow-hidden">
                  <Image
                    src={card.image}
                    alt="image"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-gray-700 text-[16px] leading-6">
                  {card.description}
                </p>
              </div>
            ) : (
              /* Collapsed (DESKTOP SAME AS ORIGINAL) */
              <div className="w-full h-full flex flex-col justify-between items-center py-6 px-4">
                <h3
                  className="text-xl font-semibold text-black"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {card.initialText}
                </h3>

                <div className="flex items-center gap-2">
                  <span className="text-xl font-semibold">
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
           MOBILE + TABLET (COLUMN + CLICK)
      ====================================================== */}
      <div className="flex lg:hidden w-full flex-col gap-4 px-4">
        {cardsData.map((card, i) => (
          <div
            key={i}
            onClick={() => toggleCardMobile(i)}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
          >
            {/* Header */}
            <div className="p-4 flex justify-between items-center">
              <h3 className="text-md font-semibold text-black">
                {card.initialText}
              </h3>
              <Image
                src={card.initialLogo}
                alt="icon"
                width={24}
                height={24}
              />
            </div>

            {/* Expand */}
            {activeIndex === i && (
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

                <p className="text-gray-700 text-sm">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverView;
