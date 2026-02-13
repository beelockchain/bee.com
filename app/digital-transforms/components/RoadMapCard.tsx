"use client";

import React from "react";

const roadmap = [
  {
    title: "Business Discovery",
    desc: "We analyze your business goals, challenges, and current digital environment to understand where transformation is needed and what success looks like.",
  },
  {
    title: "Transformation Strategy",
    desc: "We define a focused digital transformation strategy that aligns technology initiatives with business priorities and long-term objectives.",
  },
  {
    title: "Solution Planning & Design",
    desc: "We design scalable, customer-centric solutions and select platforms that support integration, performance, and future growth.",
  },
];

export default function RoadMapCard() {
  return (
    <section className="relative w-full py-20 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            From Strategy to Execution:{" "}
            <span className="text-yellow-400">
              Our Digital Transformation Roadmap
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {roadmap.map((item, index) => (
            <div
              key={index}
              className="relative p-8 rounded-[32px] 
              bg-white/40 backdrop-blur-xl 
              border border-white/40
              shadow-lg
              flex flex-col justify-between
              min-h-[380px]
              hover:scale-[1.02] transition duration-300"
            >

              {/* Optional Top Icon Placeholder */}
              <div className="w-14 h-14 rounded-xl bg-yellow-100 mb-8" />

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
