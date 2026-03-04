"use client"
import { useState } from "react";

const Makeusdifferent = () => {
  const [active, setActive] = useState(false);

  const cards = [
    {
      number: "01",
      title: "Expert Custom Mobile App Developers",
      description:
        "Our team of expert custom mobile app developers brings deep technical knowledge and industry experience to every project. We design and develop mobile applications suitable for your specific business objectives, and with our advanced technology and business logic, we ensure intuitive user experiences and applications that support long-term growth.",
    },
    {
      number: "02",
      title: "Agile Methodology",
      description:
        "We follow a proven agile development methodology that emphasizes flexibility, and speed. Through iterative planning, continuous testing, and regular feedback cycles, we ensure faster delivery without compromising quality.",
    },
    {
      number: "03",
      title: "Audience-First Approach",
      description:
        "Our audience-first approach ensures the users are at the middle of the development process. We analyze user behavior, preferences, and engagement patterns, and we design mobile applications that are intuitive, accessible, and purpose-driven. This focus on user experience helps increase adoption rates, improve retention, and create meaningful digital interactions.",
    },
    {
      number: "04",
      title: "Complete App Lifecycle",
      description:
        "We provide end-to-end mobile app development services covering the entire application lifecycle from starting with initial strategy, requirement analysis, and UI/UX design, to development, testing, deployment, and ongoing maintenance, we ensure consistent performance at every stage.",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-6 md:px-12">
      {/* Top Section */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-[20px] md:text-[25px] lg:text-[35px] xl:text-[48px] font-extrabold text-gray-900 mb-4 leading-snug">
          <span data-text="Beelockchain:" className="shine-text text-[#F5B800] relative mx-4">Beelockchain:</span> What Makes Us
          Different
          <br /> From The Rest
        </h2>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
          As a leading mobile app development company, we focus on diagnosing
          business pain points and launching the best-in-class app solutions
          through strategic problem-solving and technical precision.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <div>
            <button
              onTouchStart={() => setActive(true)}
              onTouchEnd={() => setActive(false)}
              onMouseLeave={() => setActive(false)}
              className="group relative flex items-center gap-2 px-4 py-2 lg:px-4 lg:py-0 border border-black rounded-full overflow-hidden cursor-pointer"
            >
              {/* Expand Circle */}
              <span className="absolute inset-0 flex items-center justify-center z-0">
                <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
              </span>

              {/* Glow */}
              <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />

              {/* Text */}
              <span className="relative z-10 text-black text-sm whitespace-nowrap transition-colors">
                Talk To Our Experts
              </span>

              {/* Icon */}
              <svg
                viewBox="0 0 56 55"
                className="relative z-10 w-10 h-10 lg:w-14 lg:h-14 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95"
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
          </div>
          <div>
            <button
              onTouchStart={() => setActive(true)}
              onTouchEnd={() => setActive(false)}
              onMouseLeave={() => setActive(false)}
              className="group relative flex items-center gap-2 px-4 py-2 lg:px-4 lg:py-0 border border-black rounded-full overflow-hidden cursor-pointer"
            >
              {/* Expand Circle */}
              <span className="absolute inset-0 flex items-center justify-center z-0">
                <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
              </span>

              {/* Glow */}
              <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />

              {/* Text */}
              <span className="relative z-10 text-black text-sm whitespace-nowrap transition-colors">
                Talk To Our Experts
              </span>

              {/* Icon */}
              <svg
                viewBox="0 0 56 55"
                className="relative z-10 w-10 h-10 lg:w-14 lg:h-14 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95"
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
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* LEFT — 4 Cards */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {cards.map((card) => (
            <div
              key={card.number}
              className="bg-[#E2E2E2] border border-gray-200 rounded-2xl p-4 flex flex-col gap-1 hover:shadow-md transition-shadow duration-200"
              
            >
              <h3 className="text-md font-bold text-black">{card.title}</h3>
              <p className="text-black text-xs leading-relaxed">
                {card.description}
              </p>
              <span className="self-end text-2xl font-extrabold text-black leading-none">
                {card.number}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT — Single Image */}
        <div className="w-full md:w-1/2 flex justify-end items-end h-full">
          <img
            src="/assets/images/software-dev/custom-app-dev/makeusdifferent.png"
            alt="Beelockchain mobile app"
            className="w-full h-full flex justify-end items-end"
          />
        </div>
      </div>
    </div>
  );
};

export default Makeusdifferent;
