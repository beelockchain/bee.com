"use client";

import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";

const highlightNumbers = (text: string) => {
  return text.split(/(\d+(?:[+x]\d*)?)/).map((part, index) => {
    if (/^\d+(?:[+x]\d*)?$/.test(part)) {
      return (
        <span
          key={index}
          className="text-black"
        >
          {part}
        </span>
      );
    }
    return <span key={index} className="text-black">{part}</span>;
  });
};

const cardsData = [
  {
    initialLogo: "/Group 300 2.svg",
    initialText: "100+ Tech Maestros",
    hoverLogo: "/Group 300 2.svg",
    hoverTitle: "Enterprise-Grade Security 100",
    hoverSubtitle: "For Your Business",
    image: "assets/images/why-choose-img1.png",
    description:
      "We provide enterprise-level blockchain security, ensuring reliability and protection.",
  },
  {
    initialLogo: "/Group 300 2.svg",
    initialText: "350+ Successful Projects",
    hoverLogo: "/Group 300 2.svg",
    hoverTitle: "Automation Excellence 7",
    hoverSubtitle: "Process Reliability",
    image: "assets/images/why-choose-img1.png",
    description:
      "We deliver consistent quality and outstanding digital transformation results.",
  },
  {
    initialLogo: "/Group 300 2.svg",
    initialText: "Trusted by 350+ Industries",
    hoverLogo: "/Group 300 2.svg",
    hoverTitle: "Safe & Scalable 24x7",
    hoverSubtitle: "Data Infrastructure",
    image: "assets/images/why-choose-img1.png",
    description:
      "We deliver secure, scalable, high-performance systems for enterprises.",
  },
  {
    initialLogo: "/Group 300 2.svg",
    initialText: "7+ Years of Quality",
    hoverLogo: "/Group 300 2.svg",
    hoverTitle: "Real-Time Insights 24",
    hoverSubtitle: "Modern Intelligence",
    image: "assets/images/why-choose-img1.png",
    description:
      "We deliver analytics and blockchain-powered insights for modern businesses.",
  },
  {
    initialLogo: "/Group 300 2.svg",
    initialText: "7+ Years of Quality",
    hoverLogo: "/Group 300 2.svg",
    hoverTitle: "Real-Time Insights 24",
    hoverSubtitle: "Modern Intelligence",
    image: "assets/images/why-choose-img1.png",
    description:
      "We deliver analytics and blockchain-powered insights for modern businesses.",
  },
];

const OverView = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  /* ======================
      SMOOTH HOVER
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

  return (
    <div className="w-full bg-white flex flex-col items-center py-20">
      {/* Title */}
      <div className="mb-10">
        <h1 className="text-black text-[34px] font-bold text-center">
          Why{" "}
          <span className="text-black">
            Beelockchain
          </span>
        </h1>

        <p className="w-[500px] text-center text-black text-lg">
          Entrepreneurs worldwide trust BeelockChain digital solutions
        </p>
      </div>

      {/* 🔥 Card Row */}
      <div
        className="w-[80%] h-[520px] flex gap-4 px-6"
        onMouseLeave={resetCards} // ✅ FIXED HERE
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
              transition-colors
            "
          >
            {activeIndex === i ? (
              /* Expanded Content */
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
              /* Collapsed Content */
              <div className="w-full h-full flex flex-col justify-between items-center py-6 px-4">
                <h3
                  className="text-3xl font-semibold text-black"
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
    </div>
  );
};

export default OverView;
