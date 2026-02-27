'use client'
import React, { useEffect, useRef, useState, useCallback } from 'react'

interface BenefitCard {
  id: number
  icon: string
  title: string
  description: string
}

const benefitCards: BenefitCard[] = [
  {
    id: 1,
    icon: '/assets/images/digital-tranform-buss.png',
    title: 'Business-Aligned Digital Strategy',
    description: 'Aligns technology initiatives with business goals to ensure measurable impact, clarity in execution, and long-term value creation.',
  },
  {
    id: 2,
    icon: '/assets/images/digital-tranform-prod.png',
    title: 'Improved Productivity & Efficiency',
    description: 'Reduces manual work and process delays through automation and streamlined workflows, improving overall operational performance.',
  },
  {
    id: 3,
    icon: '/assets/images/digital-tranform-fur.png',
    title: 'Future-Ready Digital Platforms',
    description: 'Creates digital systems that help businesses grow while ensuring strong security, reliability, and performance.',
  },
  {
    id: 4,
    icon: '/assets/images/digital-tranform-cus.png',
    title: 'Better Customer Engagement',
    description: 'Enables consistent, connected digital experiences that improve responsiveness, satisfaction, and customer retention.',
  },
  {
    id: 5,
    icon: '/assets/images/benefits-compliance.png',
    title: 'Compliance & Risk Readiness',
    description: 'Supports data protection, governance, and regulatory needs. It helps businesses manage operational and compliance risks.',
  },
  {
    id: 6,
    icon: '/assets/images/benefits-risks.png',
    title: 'Faster Innovation Cycles',
    description: 'Allows quicker development, testing, and deployment of digital solutions to respond to the market and business changes.',
  },
  {
    id: 7,
    icon: '/assets/images/benefits-sustainable.png',
    title: 'Sustainable Technology Foundation',
    description: 'Develops future-ready digital foundations that can adapt to evolving needs while reducing long-term technical debt.',
  },
]

const Card: React.FC<{ card: BenefitCard; style?: React.CSSProperties }> = ({ card, style }) => (
  <div
    className="bg-[#F8F8F8] rounded-2xl p-5 shadow-md"
    style={style}
  >
    <div className="mb-3">
      <div className="w-10 h-10 lg:w-10 lg:h-10 xl:w-20 xl:h-20 bg-[#F8F8F8] rounded-lg flex items-center justify-center">
        <img src={card.icon} alt={card.title} className="w-15 h-15 object-contain" />
      </div>
    </div>
    <h3 className="text-base xl:text-[18px] font-bold text-gray-900 mb-2 leading-snug">
      {card.title}
    </h3>
    <p className="text-xs xl:text-[14px] text-gray-600 leading-relaxed font-bold">
      {card.description}
    </p>
  </div>
)

const BenefitsSection: React.FC = () => {
  const sectionRef   = useRef<HTMLDivElement>(null)
  const gridRef      = useRef<HTMLDivElement>(null)
  const rafRef       = useRef<number | null>(null)
  const currentYRef  = useRef(0)   // actual rendered translateY (lerped)
  const targetYRef   = useRef(0)   // desired translateY from scroll

  const [isMobile, setIsMobile]     = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  // ── Dimensions ────────────────────────────────────────────────────────────
  // 7 cards in 4 rows: [2, 2, 2, 1]
  // ROW_HEIGHT = card height + gap
  const ROW_HEIGHT  = 230   // px per row including gap
  const TOTAL_ROWS  = 4
  const VISIBLE_ROWS = 2
  // Max scroll = how many rows are hidden below the viewport window
  const MAX_OFFSET  = ROW_HEIGHT * (TOTAL_ROWS - VISIBLE_ROWS) // 2 × 230 = 460px

  // How many px of page scroll = full card travel
  // We want ~100vh per row transition = deliberate but not sluggish
  const PX_PER_ROW  = typeof window !== 'undefined' ? window.innerHeight * 0.9 : 700
  // Total sticky section height: enter buffer + travel + exit hold
  const SECTION_PX  = PX_PER_ROW * (TOTAL_ROWS - VISIBLE_ROWS + 2)

  // ── Detect mobile ─────────────────────────────────────────────────────────
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // ── RAF lerp loop ─────────────────────────────────────────────────────────
  // Runs continuously while desktop; lerps currentY → targetY each frame.
  useEffect(() => {
    if (isMobile) return

    const LERP = 0.14  // 0 = frozen, 1 = instant — 0.12 = smooth but responsive

    const tick = () => {
      const diff = targetYRef.current - currentYRef.current
      // Snap if close enough
      if (Math.abs(diff) > 0.1) {
        currentYRef.current += diff * LERP
      } else {
        currentYRef.current = targetYRef.current
      }
      if (gridRef.current) {
        gridRef.current.style.transform = `translateY(${-currentYRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isMobile])

  // ── Scroll → targetY ──────────────────────────────────────────────────────
  useEffect(() => {
    if (isMobile) return

    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionTop   = sectionRef.current.offsetTop
      const windowHeight = window.innerHeight
      const scrollY      = window.scrollY

      // scrollIntoSection: 0 at section entry, positive as we scroll down
      const scrollIntoSection = scrollY - sectionTop

      // We start moving after 1 × PX_PER_ROW (entrance buffer)
      // We stop moving at MAX_OFFSET and hold
      const pxPerRow   = windowHeight * 0.9
      const travelStart = pxPerRow           // start moving after 1 step
      const travelEnd   = travelStart + (TOTAL_ROWS - VISIBLE_ROWS) * pxPerRow

      if (scrollIntoSection <= travelStart) {
        // Entrance: grid at top, all of row 1 & 2 visible
        targetYRef.current = 0
      } else if (scrollIntoSection >= travelEnd) {
        // Exit hold: grid fully scrolled, rows 3 & 4 visible
        targetYRef.current = MAX_OFFSET
      } else {
        // Active travel zone: map scroll progress → grid offset
        const progress = (scrollIntoSection - travelStart) / ((TOTAL_ROWS - VISIBLE_ROWS) * pxPerRow)
        targetYRef.current = progress * MAX_OFFSET
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  // ── Mobile helpers ────────────────────────────────────────────────────────
  const goNext = useCallback(() => setActiveIndex(i => (i + 1) % benefitCards.length), [])
  const goPrev = useCallback(() => setActiveIndex(i => (i - 1 + benefitCards.length) % benefitCards.length), [])

  // ── Left panel ────────────────────────────────────────────────────────────
  const LeftPanel = () => (
    <div className="flex flex-col justify-center">
      <div className="mb-4">
        <span className="inline-block py-2 border-b-2 border-[#F9C901] text-[16px] lg:text-[13px] xl:text-[16px] font-bold text-black">
          What make us Unique
        </span>
      </div>
      <h2 className="text-3xl lg:text-[28px] xl:text-[36px] font-bold mb-6 leading-tight text-black">
        Benefits Of{' '}
        <span data-text="Beelockchain" className="shine-text relative text-[#F9C901]">Beelockchain</span>{' '}
        Digital Transformation Services
      </h2>
      <p className="text-black text-sm lg:text-[14px] xl:text-[16px] mb-8 leading-relaxed max-w-md font-semibold">
        Begin your transformation journey with Beelockchain's skilled experts.
        Build a future-ready organization using a structured digital business
        transformation service approach.
      </p>
      <button className="cursor-pointer inline-flex items-center w-fit px-4 py-2 border border-black rounded-full bg-white hover:bg-gray-50 transition-colors">
        <span className="font-poppins text-black text-sm lg:text-[12px] xl:text-[15px]">
          Digitalize Your Business Now
        </span>
        <svg className="w-8 h-8" viewBox="0 0 56 55" fill="none">
          <circle cx="28.2473" cy="27.0945" r="15.912" fill="#F6E000" stroke="#F9C901" strokeWidth="1.51543" />
          <path d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
            stroke="black" strokeWidth="3.03086" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )

  // ── Desktop cards panel ───────────────────────────────────────────────────
  const VISIBLE_HEIGHT = ROW_HEIGHT * VISIBLE_ROWS + 30 // slight extra for peek

  const DesktopCards = () => (
    <div className="relative overflow-hidden" style={{ height: VISIBLE_HEIGHT }}>
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none" />

      {/* Grid — translateY driven by RAF loop via gridRef */}
      <div
        ref={gridRef}
        className="absolute inset-0 pt-4 pb-4"
        style={{ willChange: 'transform' }}
      >
        {/* ROW 1 */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <Card card={benefitCards[0]} />
          <Card card={benefitCards[1]} />
        </div>
        {/* ROW 2 */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <Card card={benefitCards[2]} />
          <Card card={benefitCards[3]} />
        </div>
        {/* ROW 3 */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <Card card={benefitCards[4]} />
          <Card card={benefitCards[5]} />
        </div>
        {/* ROW 4 — card 7 */}
        <div className="grid grid-cols-2 gap-4">
          <Card card={benefitCards[6]} />
          <div className="rounded-2xl bg-[#F8F8F8]/30 border-2 border-dashed border-gray-200 flex items-center justify-center">
            <span className="text-gray-300 text-xs font-semibold text-center px-4">More services coming soon</span>
          </div>
        </div>
      </div>
    </div>
  )

  // ── Mobile layout ─────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <section className="relative bg-gray-50 py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col items-center text-center mb-2">
            <span className="inline-block py-1 border-b-2 border-[#F9C901] text-[13px] font-bold text-black mb-4">
              What make us Unique
            </span>
            <h2 className="text-[20px] font-bold leading-tight text-black">
              Benefits Of{' '}
              <span className="shine-text relative text-yellow-400">Beelockchain</span>{' '}
              Digital Transformation Services
            </h2>
            <p className="text-black text-[13px] mt-4 leading-relaxed max-w-sm md:max-w-xl">
              Begin your transformation journey with Beelockchain's skilled experts.
            </p>
            <button className="mt-6 cursor-pointer inline-flex items-center px-3 py-2 border border-black rounded-full bg-white hover:bg-gray-50 transition-colors">
              <span className="font-poppins text-black text-[12px]">Digitalize Your Business Now</span>
              <svg className="w-8 h-8 ml-1" viewBox="0 0 56 55" fill="none">
                <circle cx="28.2473" cy="27.0945" r="15.912" fill="#F6E000" stroke="#F9C901" strokeWidth="1.51543" />
                <path d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
                  stroke="black" strokeWidth="3.03086" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Mobile carousel */}
          <div className="w-full flex flex-col items-center mt-8">
            <div className="w-full max-w-sm px-6">
              <Card card={benefitCards[activeIndex]} />
            </div>
            <div className="flex gap-2 mt-5">
              {benefitCards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all ${i === activeIndex ? 'bg-yellow-400 w-4' : 'bg-gray-300 w-2'}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-4 mt-5">
              <button onClick={goPrev} className="bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors text-lg">←</button>
              <button onClick={goNext} className="bg-yellow-400 shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors text-lg">→</button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // ── Desktop layout ────────────────────────────────────────────────────────
  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-50"
      style={{ height: `${SECTION_PX}px` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <LeftPanel />
            <DesktopCards />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection