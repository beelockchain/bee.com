'use client'
import React, { useEffect, useRef, useState, useCallback } from 'react'

interface BenefitCard {
  id: number
  icon: string
  title: string
  description: string
}

const benefitCards: BenefitCard[] = [
  { id: 1, icon: '/assets/images/aichatbot/automation-icon.png', title: 'Chatbot Consulting', description: 'Our chatbot consulting services help businesses identify the most valuable chatbot use cases and define a strategy that aligns with operational goals and customer interaction requirements.' },
  { id: 2, icon: '/assets/images/aichatbot/automation-icon.png', title: 'Chatbot Conversion Design', description: 'We design structured conversation flows that guide users through intuitive interactions, helping businesses improve engagement and increase conversion rates.' },
  { id: 3, icon: '/assets/images/aichatbot/automation-icon.png', title: 'Chatbot Architecture', description: 'Our team builds secure and scalable chatbot architectures capable of handling enterprise workloads while ensuring reliability, performance, and seamless integrations.' },
  { id: 4, icon: '/assets/images/aichatbot/automation-icon.png', title: 'Custom Chatbot Development', description: 'We develop custom AI chatbot solutions tailored to specific business needs, enabling companies to automate customer support, lead generation, and digital communication.' },
  { id: 5, icon: '/assets/images/aichatbot/automation-icon.png', title: 'Chatbot Integration', description: 'Our chatbot systems integrate with CRM platforms, APIs, enterprise databases, and third-party applications to create unified communication ecosystems.' },
  { id: 6, icon: '/assets/images/aichatbot/automation-icon.png', title: 'AI Chatbot Support', description: 'We provide ongoing monitoring, optimization, and support to ensure chatbot systems continue delivering accurate responses and improved performance over time.' },
]

// ✅ Fixed: row 3 now correctly has both card 7 and card 8
const rows = [
  [benefitCards[0], benefitCards[1]], // row 0
  [benefitCards[2], benefitCards[3]], // row 1
  [benefitCards[4], benefitCards[5]], // row 2
]

// ─── CARD ────────────────────────────────────────────────────────────────────
const Card: React.FC<{ card: BenefitCard }> = ({ card }) => (
    
  <div
    className="
      relative 
      rounded-2xl 
      p-5 
      h-full 
      overflow-hidden
      border border-[#ECECEC]
      bg-[#F5F5F5]/90
      backdrop-blur-sm
    "
  >


    {/* CONTENT */}
    <div className="relative z-10">
      <div className="mb-3">
        <div className="w-10 h-10 xl:w-15 xl:h-15 bg-[#F8F8F8] rounded-lg flex items-center justify-center">
          <img
            src={card.icon}
            alt={card.title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <h3 className="text-base xl:text-[18px] font-extrabold text-black mb-2 leading-snug">
        {card.title}
      </h3>

      <p className="text-xs xl:text-[14px] text-[#525252] leading-relaxed font-bold">
        {card.description}
      </p>
    </div>
  </div>
)
// ─── LEFT PANEL ──────────────────────────────────────────────────────────────
const LeftPanel: React.FC = () => (
    
  <div className="flex flex-col justify-start pt-4">
    
        {/* HEXAGON BG */}
    {/* <div className="mb-4">
      <span className="inline-block py-2 border-b-2 border-[#F9C901] text-[16px] lg:text-[13px] xl:text-[16px] font-bold text-black">
        What Make Us Unique
      </span>
    </div> */}
    <h2 className="text-3xl lg:text-[28px] xl:text-[36px] font-bold mb-6 leading-tight text-black">
      <span className="shine-text relative text-[#F9C901]">AI Chatbot</span>{' '}
      Development Services 
      for Enterprise Automation
    </h2>
    <p className="text-[#525252] text-[14px] lg:text-[14px] xl:text-[16px] mb-8 leading-relaxed  font-semibold">
     Beelockchain provides AI chatbot development services designed to support enterprise automation and intelligent customer engagement. Our solutions help organizations streamline communication, automate workflows, and improve digital experiences.
    </p>
   <div className="flex flex-row gap-3">
    <a href="/contact-us">
      <button className="group cursor-pointer relative inline-flex items-center w-fit px-4 py-2 lg:px-3 lg:py-2 border border-black rounded-full bg-white overflow-hidden">
        
        {/* ripple */}
        <span className="absolute inset-0 flex items-center justify-center z-0">
          <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
        </span>

        {/* glow */}
        <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300" />

        <span className="relative z-10 text-black text-sm lg:text-[12px] xl:text-[15px]">
           Consult Our Expert
        </span>

        <svg className="relative z-10 w-8 h-8 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95" viewBox="0 0 56 55" fill="none">
          <circle cx="28.2473" cy="27.0945" r="15.912" fill="#F6E000" stroke="#F9C901" strokeWidth="1.51543" />
          <path d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
            stroke="black" strokeWidth="3.03086" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      </button>
    </a>

    <button className="group cursor-pointer relative inline-flex items-center w-fit px-4 py-2 lg:px-3 lg:py-2 border border-black rounded-full bg-white overflow-hidden">
      
      {/* ripple */}
      <span className="absolute inset-0 flex items-center justify-center z-0">
        <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
      </span>

      {/* glow */}
      <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300" />

      <span className="relative z-10  text-black text-sm lg:text-[12px] xl:text-[15px]">
        Explore Our Portfolio
      </span>

      <svg className="relative z-10 w-8 h-8 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95" viewBox="0 0 56 55" fill="none">
        <circle cx="28.2473" cy="27.0945" r="15.912" fill="#F6E000" stroke="#F9C901" strokeWidth="1.51543" />
        <path d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
          stroke="black" strokeWidth="3.03086" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    </button>
  </div>
  </div>
)

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
const Automation: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const columnRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const ROW_H = 310
  const GAP = 30           // gap between columns inside a row AND between rows
  const STEP = ROW_H + GAP // 230px — distance to travel per scroll step
  const PEEK = 0          // px of next row visible at bottom as hint
  const WINDOW_H = ROW_H * 2.1 + GAP + PEEK // clipping window height

  // Now 4 rows, 2 steps to show all (rows 0+1 visible → scroll → rows 1+2 → scroll → rows 2+3)
  const TOTAL_STEPS = rows.length - 2 // = 2

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // ── GSAP desktop animation ────────────────────────────────────────────────
  useEffect(() => {
    if (isMobile) return
    if (typeof window === 'undefined') return

    let cleanup: (() => void) | undefined

    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]).then(([gsapModule, stModule]) => {
      const gsap = gsapModule.default
      const { ScrollTrigger } = stModule
      gsap.registerPlugin(ScrollTrigger)

      if (!sectionRef.current || !columnRef.current) return

      const totalMove = STEP * TOTAL_STEPS // 230 × 2 = 460px

      gsap.fromTo(
        columnRef.current,
        { y: 0 },
        {
          y: -totalMove,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: `+=${TOTAL_STEPS * 100}%`, // 200vh total scroll
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        }
      )

      cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill())
    })

    return () => cleanup?.()
  }, [isMobile, STEP, TOTAL_STEPS])

  const goNext = useCallback(() => setActiveIndex((i) => (i + 1) % benefitCards.length), [])
  const goPrev = useCallback(() => setActiveIndex((i) => (i - 1 + benefitCards.length) % benefitCards.length), [])

  // ── Mobile Cards ──────────────────────────────────────────────────────────
  const MobileCards = () => {
    const card = benefitCards[activeIndex]
    return (
      <div className="w-full flex flex-col items-center mt-8">
        <div className="w-full max-w-sm px-6"><Card card={card} /></div>
        <div className="flex gap-2 mt-5">
          {benefitCards.map((_, i) => (
            <button key={i} onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'bg-yellow-400 w-4' : 'bg-gray-300'}`} />
          ))}
        </div>
        <div className="flex items-center gap-4 mt-5">
          <button onClick={goPrev} className="bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors text-lg">←</button>
          <button onClick={goNext} className="bg-yellow-400 shadow-md w-10 h-10 rounded-full flex items-center justify-center border border-yellow-400 hover:bg-yellow-500 transition-colors text-lg">→</button>
        </div>
      </div>
    )
  }

  // ── MOBILE LAYOUT ─────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <section className="relative 5 py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col items-center text-center mb-2">
            <span className="inline-block py-1 border-b-2 border-[#F9C901] text-[13px] font-bold text-black mb-4">What Make Us Unique</span>
            <h2 className="text-[20px] font-bold leading-tight text-black">
              Benefits Of <span className="shine-text relative text-yellow-400">Beelockchain's</span> Digital Transformation Services
            </h2>
            <p className="text-black text-[14px] mt-4 leading-relaxed max-w-sm md:max-w-xl font-semibold">
              Begin your transformation journey with Beelockchain's skilled experts. Build a future-ready organization using a structured digital business transformation service approach.
            </p>
          <div className="mt-6 flex flex-col gap-3">
            <a href="/contact-us">
              <button className="group cursor-pointer relative inline-flex items-center px-3 py-2 border border-black rounded-full bg-white overflow-hidden">
                
                {/* ripple */}
                <span className="absolute inset-0 flex items-center justify-center z-0">
                  <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
                </span>

                {/* glow */}
                <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300" />

                <span className="relative z-10  text-black text-[12px]">
                  Digitalize Your Business Now
                </span>

                <svg className="relative z-10 w-8 h-8 ml-1 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95" viewBox="0 0 56 55" fill="none">
                  <circle cx="28.2473" cy="27.0945" r="15.912" fill="#F6E000" stroke="#F9C901" strokeWidth="1.51543" />
                  <path d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
                    stroke="black" strokeWidth="3.03086" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </button>
            </a>


              <button className="group cursor-pointer relative inline-flex items-center justify-center px-3 py-2 border border-black rounded-full bg-white overflow-hidden">
                
                {/* ripple */}
                <span className="absolute inset-0 flex items-center justify-center z-0">
                  <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
                </span>

                {/* glow */}
                <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300" />

                <span className="relative z-10  text-black text-[12px]">
                  Explore Our Portfolio
                </span>

                <svg className="relative z-10 w-8 h-8 ml-1 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95" viewBox="0 0 56 55" fill="none">
                  <circle cx="28.2473" cy="27.0945" r="15.912" fill="#F6E000" stroke="#F9C901" strokeWidth="1.51543" />
                  <path d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
                    stroke="black" strokeWidth="3.03086" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </button>

            </div>
          </div>
          <MobileCards />
        </div>
      </section>
    )
  }

  // ── DESKTOP LAYOUT ────────────────────────────────────────────────────────
  return (
    <section ref={sectionRef} className="relative bg-gray-50">
     <div className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6 lg:px-10 xl:px-20">
         <div className="grid lg:grid-cols-2 xl:gap-5 items-start">
    {/* HEXAGON BG */}
    <div
      className="absolute inset-0 opacity-[0.4] bg-right bg-contain bg-no-repeat"
      style={{
        backgroundImage:
          "url('/assets/images/aichatbot/aichatbot-hexagon.png')",
      }}
    />
            <LeftPanel />

            <div
              className="relative overflow-hidden"
              style={{ height: `${WINDOW_H}px` }}
            >
              {/* Top fade — masks rows exiting upward */}
              {/* <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
                style={{ height: '60px', background: 'linear-gradient(to bottom, #F9FAFB 0%, transparent 100%)' }}
              /> */}
              {/* Bottom fade — peek hint */}
              <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
                style={{ height: `${PEEK + 10}px`, background: 'linear-gradient(to top, #F9FAFB 0%, transparent 100%)' }}
              />

              {/* Moving column — GSAP drives translateY on this */}
              <div ref={columnRef} className="absolute left-0 right-0 top-0">
                {rows.map((rowCards, rowIdx) => (
                  <div
                    key={rowIdx}
                    className="grid grid-cols-2"
                    style={{
                      gap: `${GAP}px`,          // gap between the 2 cards in a row
                      height: `${ROW_H}px`,
                      marginBottom: rowIdx < rows.length - 1 ? `${GAP}px` : 0, // gap between rows
                    }}
                  >
                    {rowCards.map((card) => <Card key={card.id} card={card} />)}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Automation