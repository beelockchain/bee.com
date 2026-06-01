"use client";

import { useState } from "react";

const steps = [
  {
    id: "01",
    title: "Requirement Analysis",
    description:
      "We analyze business objectives, customer interaction patterns, and automation opportunities.",
  },
  {
    id: "02",
    title: "AI Model Development",
    description:
      "Our team designs conversational flows that create intuitive user interactions.",
  },
  {
    id: "03",
    title: "Conversation Design",
    description:
      "Our team designs conversational flows that create intuitive user interactions.",
  },
  {
    id: "04",
    title: "System Integration",
    description:
      "Chatbots are integrated with enterprise systems, APIs, and databases.",
  },
  {
    id: "05",
    title: "Testing and Optimization",
    description:
      "We conduct extensive testing to ensure performance, accuracy, and security.",
  },
  {
    id: "06",
    title: "Deployment and Monitoring",
    description:
      "After deployment, we continuously monitor chatbot performance and refine models to improve functionality.",
  },
];

export default function AIChatbotProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white py-16 px-4">
      
      {/* Heading */}
      <div className="text-center mb-12">
       
        <h2 className="text-3xl font-bold text-gray-900">
          AI Chatbot{" "}
          <span style={{ color: "#D4A017" }}>
            Development Process
          </span>
        </h2>

        <p className="mt-3 text-gray-500 text-[16px] font-semibold mx-auto">
          Our development process ensures the delivery of reliable and scalable
          chatbot solutions.
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="max-w-5xl mx-auto hidden md:flex items-start gap-12">
        
        {/* Left Image */}
        <div className="flex-shrink-0 w-[500px] flex justify-center">
          <img
            src="/assets/images/aichatbot/aichatbot-development-leftimg.png"
            alt="AI Chatbot Mockup"
            className="w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-1 gap-6">

          {/* LEFT INDEX COLUMN */}
          <div className="w-10 bg-[#F8F8F8] rounded-[30px] py-0 flex flex-col items-center justify-between">
            {steps.map((item, index) => (
              <div
                key={item.id}
                className={`
                  w-9 h-9 flex items-center justify-center
                  rounded-full text-sm font-semibold
                  transition-all duration-200
                  ${
                    activeIndex === index
                      ? "bg-[#F5C518] text-black"
                      : "bg-transparent text-gray-700"
                  }
                `}
              >
                {item.id}
              </div>
            ))}
          </div>

          {/* RIGHT CARDS */}
          <div className="flex-1 flex flex-col gap-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                onMouseEnter={() => setActiveIndex(index)}
                className="p-4 rounded-xl bg-white hover:bg-[#F8F8F8] transition-all duration-200 cursor-pointer"
              >
                <h3 className="xl:text-[20px] font-bold text-black mb-1">
                  {step.title}
                </h3>

                <p className="xl:text-[15px] text-[#525252] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="max-w-md mx-auto flex flex-col items-center gap-6 md:hidden">
        
        {/* Image */}
        <div className="w-full flex justify-center">
          <img
            src="/assets/images/aichatbot/aichatbot-development-leftimg.png"
            alt="AI Chatbot Mockup"
            className="w-[240px] object-contain"
          />
        </div>

        {/* Cards */}
        <div className="w-full flex flex-col gap-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="p-2 rounded-xl bg-[#F8F8F8]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#F5C518] flex items-center justify-center text-sm font-semibold">
                  {step.id}
                </div>

                <h3 className="text-sm font-bold text-gray-900">
                  {step.title}
                </h3>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}