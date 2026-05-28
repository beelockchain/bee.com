'use client'
import React from 'react'
import Image from 'next/image'

const useCases = [
  {
    icon: '/assets/images/aichatbot/aichatbot-business-icon.png',
    title: 'Customer Support Automation',
    description:
      'AI chatbots automatically respond to frequently asked questions and support requests, reducing response times and improving customer satisfaction.',
  },
  {
    icon: '/assets/images/aichatbot/aichatbot-business-icon.png',
    title: 'Lead Generation and Qualification',
    description:
      'Chatbots interact with website visitors, answer questions, and collect contact information, helping businesses generate qualified leads.',
  },
  {
    icon: '/assets/images/aichatbot/aichatbot-business-icon.png',
    title: 'Appointment Scheduling',
    description:
      'Organizations can automate appointment bookings and reminders through conversational chatbot systems.',
  },
  {
    icon: '/assets/images/aichatbot/aichatbot-business-icon.png',
    title: 'Employee Assistance',
    description:
      'Internal chatbot solutions help employees access information, submit requests, and streamline workplace communication.',
  },
]

const ChatbotBusiness: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-10 xl:px-30">
{/* ── Header row ── */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
  
  {/* Left: title + description */}
  <div className="w-full">
    <h2 className="text-[28px] lg:text-[32px] xl:text-[32px] font-bold text-black leading-tight mb-3">
      AI Chatbot Use Cases For{' '}
      <span className="text-[#E88B00]">Businesses</span>
    </h2>

    <p className="text-[#525252] text-[13px] lg:text-[14px] xl:text-[15px] leading-relaxed font-semibold max-w-[620px]">
      AI chatbots are widely used to automate communication workflows and
      improve operational efficiency across digital platforms.
    </p>
  </div>

  {/* Right: CTAs */}
  <div className="w-full flex items-center justify-start lg:justify-start gap-4">
    
    <a href="/contact-us">
      <button className="group cursor-pointer relative inline-flex items-center px-5 py-3 border border-black rounded-full bg-white overflow-hidden">
        
        <span className="absolute inset-0 flex items-center justify-center z-0">
          <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
        </span>

        <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300" />

        <span className="relative z-10 text-black text-sm lg:text-[14px]">
          Consult Our AI Expert
        </span>

        <svg
          className="relative z-10 w-8 h-8 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95"
          viewBox="0 0 56 55"
          fill="none"
        >
          <circle
            cx="28.2473"
            cy="27.0945"
            r="15.912"
            fill="#F6E000"
            stroke="#F9C901"
            strokeWidth="1.51543"
          />
          <path
            d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
            stroke="black"
            strokeWidth="3.03086"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </a>

    <button className="group cursor-pointer relative inline-flex items-center px-5 py-3 border border-black rounded-full bg-white overflow-hidden">
      
      <span className="absolute inset-0 flex items-end justify-end z-0">
        <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
      </span>

      <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300" />

      <span className="relative z-10 text-black text-sm lg:text-[14px]">
        Explore Our Portfolio
      </span>

      <svg
        className="relative z-10 w-8 h-8 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95"
        viewBox="0 0 56 55"
        fill="none"
      >
        <circle
          cx="28.2473"
          cy="27.0945"
          r="15.912"
          fill="#F6E000"
          stroke="#F9C901"
          strokeWidth="1.51543"
        />
        <path
          d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
          stroke="black"
          strokeWidth="3.03086"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>

  </div>
</div>

      {/* ── Content row ── */}
      <div className="flex flex-col lg:flex-row gap-8 items-stretch border border-[#ECECEC] rounded-xl p-5">
        {/* Left: workflow image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center  overflow-hidden">
          <Image
            src="/assets/images/aichatbot/aichatbot-business.png"
            alt="AI Chatbot Use Cases Workflow"
            width={620}
            height={440}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right: use case cards */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          {useCases.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#F8F8F8] px-7 py-4 border-b-2 border-t-3 border-[#F1F1F1] border-[#DBDBDB] rounded-xl"
            >
              {/* Left corner accent */}
              <div className="absolute left-0 top-0  h-5 bg-[#DBDBDB] rounded-xl" />
              {/* Right corner accent */}
              <div className="absolute right-0 top-0  h-5 bg-[#DBDBDB] rounded-xl" />

              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 shrink-0">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-extrabold text-black text-[14px] lg:text-[15px] xl:text-[16px] leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="text-[#525252] text-[12px] lg:text-[13px] xl:text-[13px] leading-relaxed font-semibold">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChatbotBusiness
