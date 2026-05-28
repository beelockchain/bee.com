"use client";

import React from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const row1 = [
  "Natural Language Processing (NLP)",
  "Machine Learning algorithms",
  "Generative AI models",
];

const row2 = [
  "Retrieval-Augmented Generation (RAG)",
  "Large Language Models (LLMs)",
];

const row3 = ["Cloud-based AI infrastructure"];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function TechnologiesSection() {
  return (
    <section
      className="relative w-full  px-6 overflow-hidden"
    
    >
      <div className="bg-contain bg-center bg-no-repeat lg:h-h-[90vh] xl:h-[80vh]"  style={{
        backgroundImage:
          "url('/assets/images/aichatbot/aichatbot-technologies-sol-bg.png')",
      }}>
              {/* ── Header ── */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-[2.6rem] xl:text-[32px] font-bold text-gray-900 leading-tight mb-4">
          <span className="text-[#C8920A]">Technologies</span>{" "}
          Behind Our AI Chatbot Solutions
        </h2>

        <p className="text-[#505050] text-[15px] leading-relaxed font-semibold">
          Our AI chatbot solutions are powered by advanced technologies that
          enable intelligent, scalable conversational systems. These
          technologies allow chatbot systems to understand intent, retrieve
          relevant information, and generate accurate responses. A key
          technologies include:
        </p>
      </div>

      {/* ── Grid + Connectors + Center Image ── */}
      <div className="relative max-w-5xl mx-auto flex flex-col items-center">
        
        {/* ── Row 1 — 3 columns ── */}
        <div className="relative z-10 grid grid-cols-3 gap-5 w-full mb-12">
          {row1.map((label) => (
            <TechBadge key={label} label={label} />
          ))}
        </div>

        {/* ── Row 2 — 2 columns ── */}
        <div className="relative z-10 grid grid-cols-2 gap-5 w-[65%] mb-12">
          {row2.map((label) => (
            <TechBadge key={label} label={label} />
          ))}
        </div>

        {/* ── Row 3 — 1 column ── */}
        <div className="relative z-10 w-[36%] mb-6">
          {row3.map((label) => (
            <TechBadge key={label} label={label} />
          ))}
        </div>
        {/* ── Animated Dashed Lines + Center Image ── */}
        <div
          className="relative z-10 w-full flex items-center justify-center"
        >
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes dashFlowLeft {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 34; }
        }

        @keyframes dashFlowRight {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -34; }
        }
      `}</style>
      </div>
      

    </section>
  );
}

/* ─────────────────────────────────────────────
   TECH BADGE
───────────────────────────────────────────── */
function TechBadge({ label }: { label: string }) {
  return (
    <div
      className="
        relative group
        rounded-full
        px-5 py-[13px]
        text-[13.5px] font-bold text-[#505050]
        text-center bg-white
        shadow-sm
        transition-all duration-200 ease-in-out
        hover:shadow-[0_4px_18px_rgba(249,217,87,0.18)]
        cursor-default select-none
        truncate overflow-hidden
      "
    >
      {/* Yellow Partial Border Effect */}
      <div
        className="
          absolute left-0 top-0
          h-full w-[70%]
          rounded-l-full
          border-l-[2px] border-t-[2px]
          border-[#BEBEBE]
          opacity-90
          pointer-events-none
        "
        style={{
          maskImage:
            "linear-gradient(to right, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 70%, transparent 100%)",
        }}
      />

      {/* Label */}
      <span className="relative z-10">{label}</span>
    </div>
  );
}