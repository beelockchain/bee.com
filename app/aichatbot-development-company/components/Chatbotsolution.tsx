'use client'
import React from 'react'
import Image from 'next/image'

const leftFeatures = [
  'Natural language understanding',
  'Real-time automated responses',
  'Advanced analytics and reporting',
  'Context-aware conversations',
]

const rightFeatures = [
  'Personalized user interactions',
  'Scalable conversation management',
  'Omnichannel messaging support',
  'CRM and API integrations',
]

interface FeatureButtonProps {
  label: string
}

const FeatureButton = ({ label }: FeatureButtonProps) => (
  <div className="group relative w-full cursor-pointer">

    {/* Yellow Hover Effect */}
    <div
      className="
        absolute inset-0
        rounded-full
        opacity-0
        group-hover:opacity-100
        transition-opacity duration-300
        pointer-events-none
      "
    >
      <div
        className="
          absolute left-0 top-0
          h-full w-[20%]
          rounded-l-full
             border-l-[4px] border-y-[4px]
          border-[#F4C715]
        "
        style={{
          maskImage:
            "linear-gradient(to right, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 70%, transparent 100%)",
        }}
      />
    </div>

    {/* Main Button */}
    <div
      className="
        px-3 py-[16px]
        bg-white
        border-[4px]
        border-[#F9F9F9]
        rounded-full
        text-[13px] lg:text-[14px] xl:text-[15px]
        font-semibold
        text-black
        text-center
        select-none
        leading-tight
        shadow-sm
        w-full
      "
    >
      {label}
    </div>
  </div>
)
const ChatbotSolution = () => {
  return (
    <section className="bg-white py-16 px-4 lg:px-6 xl:px-30">
      {/* Section header */}
      <div className="text-center mb-4">
        <h2 className="text-[28px] lg:text-[32px] xl:text-[38px] font-bold text-black leading-snug">
          Key Benefits And Features Of
          <br />
          AI&nbsp;<span className="text-[#EEC625]">Chatbot Solutions</span>
        </h2>
      </div>

      {/* Top description */}
      <p className="text-center text-[#525252] text-[13px] lg:text-[14px] xl:text-[15px] font-semibold leading-relaxed mb-10">
        Modern AI chatbot solutions provide intelligent capabilities that improve communication
        <br />
        and operational efficiency.
      </p>

      {/* Yellow gradient content box */}
      <div
        className="rounded-3xl py-12 px-6 lg:px-12 xl:px-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/aichatbot/aichatbot-solution-bg.png')",
        }}
      >
        <div className="flex flex-row items-center gap-4 lg:gap-8">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-5">
            {leftFeatures.map((feature, i) => (
              <FeatureButton key={i} label={feature} />
            ))}
          </div>

          {/* Center icon */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Image
              src="/assets/images/aichatbot/aichatbot-solution-icon.png"
              alt="AI Chatbot Solutions Icon"
              width={90}
              height={90}
              className="object-contain w-[80px] h-[80px] lg:w-[120px] lg:h-[120px]"
            />
          </div>

          {/* Right column */}
          <div className="flex-1 flex flex-col gap-5">
            {rightFeatures.map((feature, i) => (
              <FeatureButton key={i} label={feature} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom description */}
      <p className="text-center text-[#525252] text-[13px] lg:text-[14px] xl:text-[15px] font-semibold leading-relaxed mt-8">
        These features enable businesses to automate customer communication while
        <br />
        maintaining high service quality and engagement.
      </p>
    </section>
  )
}

export default ChatbotSolution