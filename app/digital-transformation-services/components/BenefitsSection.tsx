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
    description:
      'Aligns technology initiatives with business goals to ensure measurable impact, clarity in execution, and long-term value creation.',
  },
  {
    id: 2,
    icon: '/assets/images/digital-tranform-prod.png',
    title: 'Improved Productivity & Efficiency',
    description:
      'Reduces manual work and process delays through automation and streamlined workflows, improving overall operational performance.',
  },
  {
    id: 3,
    icon: '/assets/images/digital-tranform-fur.png',
    title: 'Future-Ready Digital Platforms',
    description:
      'Creates digital systems that help businesses grow while ensuring strong security, reliability, and performance.',
  },
  {
    id: 4,
    icon: '/assets/images/digital-tranform-cus.png',
    title: 'Better Customer Engagement',
    description:
      'Enables consistent, connected digital experiences that improve responsiveness, satisfaction, and customer retention.',
  },
  {
    id: 5,
    icon: '/assets/images/benefits-compliance.png',
    title: 'Compliance & Risk Readiness',
    description:
      'Supports data protection, governance, and regulatory needs. It helps businesses manage operational and compliance risks.',
  },
  {
    id: 6,
    icon: '/assets/images/benefits-risks.png',
    title: 'Faster Innovation Cycles',
    description:
      'Allows quicker development, testing, and deployment of digital solutions to respond to the market and business changes.',
  },
    {
    id: 7,
    icon: '/assets/images/benefits-sustainable.png',
    title: 'Sustainable Technology Foundation',
    description:
      'Develops future-ready digital foundations that can adapt to evolving needs while reducing long-term technical debt.',
  },
]

// ─── CARD ────────────────────────────────────────────────────────────────────
const Card: React.FC<{ card: BenefitCard }> = ({ card }) => (
  <div className="bg-[#F8F8F8] rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow">
    <div className="mb-3">
      <div className="w-10 h-10 lg:w-10 lg:h-10 xl:w-20 xl:h-20 bg-[#F8F8F8] rounded-lg flex items-center justify-center">
        <img
          src={card.icon}
          alt={card.title}
          className="w-15 h-15 object-contain"
        />
      </div>
    </div>
    <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
      {card.title}
    </h3>
    <p className="text-xs text-gray-600 leading-relaxed font-bold">
      {card.description}
    </p>
  </div>
)

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
const BenefitsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Mobile carousel state
  const [activeIndex, setActiveIndex] = useState(0)

  // ── Desktop looping scroll state ──────────────────────────────────────────
  // We track which "step" we are on: 0-based index into the scroll positions.
  // Steps: 0 = idle (no shift), 1 = row1 moves, 2 = row2 moves, 3 = row3 moves, then loops back to step 1.
  // The translateY offset cycles: 0 → -rowHeight → -rowHeight*2 → 0 (loop).
  // Each row animates individually so we get the "one row at a time" feel.

  const ROW_HEIGHT = 230          // px – height of one card row + gap
  const SCROLL_STEPS = 3          // 3 scroll "clicks" per loop (one per row)
  // Total sticky scroll distance = 2 full entries into section + 3 steps × some drag + exit
  // We allocate 600 vh for the pinned section (adjust as needed).
  const STICKY_SCROLL_VH = 600

  // Which row is currently being "lifted" (0 = none, 1-3 = row index)
  const [activeRow, setActiveRow] = useState(0)
  // The cumulative offset of the grid (cycles 0 → -ROW_HEIGHT → -2*ROW_HEIGHT → back to 0)
  const [gridOffset, setGridOffset] = useState(0)
  // Internal step counter (unbounded, so we can reverse)
  const stepRef = useRef(0)
  const lastStepRef = useRef(0)

  // ── Detect mobile ─────────────────────────────────────────────────────────
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // ── Desktop scroll logic ──────────────────────────────────────────────────
  useEffect(() => {
    if (isMobile) return

    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const sectionTop = section.offsetTop
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY

      // How far into the sticky zone have we scrolled?
      // The pinned zone starts when the section top reaches viewport top.
      const scrollIntoSection = scrollY - sectionTop
      if (scrollIntoSection < 0) return // haven't reached the section yet

      // Each "step" takes windowHeight * 0.4 px of scroll
      const PX_PER_STEP = windowHeight * 0.4

      // Raw step (float)
      const rawStep = scrollIntoSection / PX_PER_STEP

      // Current integer step (clamped to 0+)
      const currentStep = Math.max(0, Math.floor(rawStep))

      if (currentStep === lastStepRef.current) return
      lastStepRef.current = currentStep

      // Which row is active within the loop?  (1-indexed: 1, 2, 3, 1, 2, 3 …)
      const loopPos = currentStep % SCROLL_STEPS // 0, 1, 2
      const rowIndex = loopPos + 1              // 1, 2, 3
      const loopCount = Math.floor(currentStep / SCROLL_STEPS)

      // Grid offset: after completing a full loop the grid snaps back to 0 seamlessly
      // Within a loop: step 0 → offset 0, step 1 → -ROW_HEIGHT, step 2 → -2*ROW_HEIGHT
      // On step 3 (start of new loop) → back to 0
      const targetOffset = -(loopPos * ROW_HEIGHT)

      setActiveRow(rowIndex)
      setGridOffset(targetOffset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // run once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  // ── Mobile carousel helpers ───────────────────────────────────────────────
  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % benefitCards.length)
  }, [])

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + benefitCards.length) % benefitCards.length)
  }, [])

  // ── Shared left-panel content ─────────────────────────────────────────────
  const LeftPanel = () => (
    <div className="flex flex-col justify-center">
      <div className="mb-4 md:text-center lg:text-left xl:text-left">
        <span className="inline-block md:mt-20 py-2 lg:py-0 xl:py-0 border-b-2 border-[#F9C901] text-[16px] lg:text-[13px] xl:text-[16px] font-bold text-black">
          What make us Unique
        </span>
      </div>

      <h2 className="text-3xl lg:text-[25px] xl:text-[35px] font-bold mb-6 leading-tight text-black md:text-center lg:text-left xl:text-left">
        Benefits Of <span data-text="Beelockchain" className="shine-text relative text-[#F9C901]">Beelockchain</span> Digital
        Transformation Services
      </h2>

      <p className="text-black text-sm lg:text-[13px] mb-8 leading-relaxed max-w-md font-semibold">
        Begin your transformation journey with Beelockchain's skilled experts.
        Build a future-ready organization using a structured digital business
        transformation service approach.
      </p>

      <button
        className="
          cursor-pointer
          inline-flex items-center
          w-fit
          px-4 py-2 md:px-2 md:py-1 lg:px-3 lg:py-2 xl:px-3 xl:py-2.5
          border border-black rounded-full
          bg-white
          hover:bg-gray-50
          transition-colors
        "
      >
        <span className="font-poppins text-black text-sm md:text-[12px] lg:text-[12px] xl:text-[15px] bg-gray">
          Digitalize Your Business Now
        </span>
        <svg
          className="w-8 h-8 lg:w-8 lg:h-8"
          viewBox="0 0 56 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
  )

  // ── Desktop right panel – looping row animation ───────────────────────────
  // We render 4 rows (3 real + a clone of row 0 at the bottom for seamless loop feel).
  // Only one row translates at a time; the others stay put.
  // Strategy: the entire grid slides via gridOffset; individual rows get a subtle
  // "lift" highlight when they are the activeRow.

  const VISIBLE_HEIGHT = ROW_HEIGHT * 2.5 // show ~2.5 rows at a time

  const DesktopCards = () => {
    // Row-level animation: the currently-active row gets a subtle upward nudge
    const rowStyle = (rowIdx: number): React.CSSProperties => {
      const isActive = activeRow === rowIdx
      return {
        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isActive ? 'translateY(-6px)' : 'translateY(0)',
      }
    }

    return (
      <div
        className="relative overflow-hidden"
        style={{ height: VISIBLE_HEIGHT }}
      >
        {/* top fade */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 via-gray-50/70 to-transparent z-10 pointer-events-none" />
        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 via-gray-50/70 to-transparent z-10 pointer-events-none" />

        {/* Sliding grid */}
        <div
          className="absolute inset-0 py-12"
          style={{
            transform: `translateY(${gridOffset}px)`,
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* ROW 1 */}
          <div className="grid grid-cols-2 gap-4 mb-5" style={rowStyle(1)}>
            <Card card={benefitCards[0]} />
            <Card card={benefitCards[1]} />
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-2 gap-4 mb-5" style={rowStyle(2)}>
            <Card card={benefitCards[2]} />
            <Card card={benefitCards[3]} />
          </div>

          {/* ROW 3 */}
          <div className="grid grid-cols-2 gap-4 mb-5" style={rowStyle(3)}>
            <Card card={benefitCards[4]} />
            <Card card={benefitCards[5]} />
          </div>

          {/* Clone ROW 1 for seamless loop illusion at the bottom */}
          <div className="grid grid-cols-2 gap-4" style={{ opacity: 0.5 }}>
            <Card card={benefitCards[6]} />
            <Card card={benefitCards[0]} />
          </div>
        </div>
      </div>
    )
  }

  // ── Mobile card view ──────────────────────────────────────────────────────
  const MobileCards = () => {
    const card = benefitCards[activeIndex]
    return (
      <div className="w-full flex flex-col items-center mt-8">
        {/* Single centered card */}
        <div className="w-full max-w-sm px-6">
          <Card card={card} />
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-5">
          {benefitCards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === activeIndex ? 'bg-yellow-400 w-4' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Arrow buttons below card */}
        <div className="flex items-center gap-4 mt-5">
          <button
            onClick={goPrev}
            className="bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors text-lg"
            aria-label="Previous card"
          >
            ←
          </button>
          <button
            onClick={goNext}
            className="bg-yellow-400 shadow-md w-10 h-10 rounded-full flex items-center justify-center border border-yellow-400 hover:bg-yellow-500 transition-colors text-lg"
            aria-label="Next card"
          >
            →
          </button>
        </div>
      </div>
    )
  }

  // ── MOBILE LAYOUT ─────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <section className="relative bg-gray-50 py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Centered heading block */}
          <div className="flex flex-col items-center text-center mb-2">
            <span className="inline-block py-1 border-b-2 border-[#F9C901] text-[13px] font-bold text-black mb-4">
              What make us Unique
            </span>

            <h2 className="text-2xl font-bold leading-tight text-black">
              Benefits Of{' '}
              <span data-text="Beelockchain" className="shine-text relative text-yellow-400">Beelockchain</span> Digital
              Transformation Services
            </h2>

            <p className="text-black text-[13px] mt-4 leading-relaxed  max-w-sm md:max-w-xl">
              Begin your transformation journey with Beelockchain's skilled
              experts. Build a future-ready organization using a structured
              digital business transformation service approach.
            </p>

            <button
              className="
                mt-6
                cursor-pointer
                inline-flex items-center
                px-3 py-2
                border border-black rounded-full
                bg-white
                hover:bg-gray-50
                transition-colors
              "
            >
              <span className="font-poppins text-black text-[12px]">
                Digitalize Your Business Now
              </span>
              <svg
                className="w-8 h-8 ml-1"
                viewBox="0 0 56 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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

          {/* Mobile carousel */}
          <MobileCards />
        </div>
      </section>
    )
  }

  // ── DESKTOP LAYOUT ────────────────────────────────────────────────────────
  // The section is tall enough to accommodate the scroll steps.
  // The inner content sticks to the viewport during scrolling.
  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-50"
      style={{ minHeight: `${STICKY_SCROLL_VH}vh` }}
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