'use client'
import React, { useEffect, useRef, useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

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
    icon: '/assets/images/digital-tranform-card5.png',
    title: 'Enhanced Innovation Capabilities',
    description:
      'Empowers teams with modern tools and methodologies to rapidly prototype, test, and deploy new digital solutions.',
  },
  {
    id: 6,
    icon: '/assets/images/digital-tranform-card6.png',
    title: 'Scalable Infrastructure',
    description:
      'Builds flexible technology foundations that adapt to growing business needs without compromising performance or reliability.',
  },
]

const BenefitsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const rowHeight = 230
  const visibleHeight = rowHeight * 2.5
  const maxScroll = rowHeight

  // detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // scroll animation (desktop only)
  useEffect(() => {
    if (isMobile) return

    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY

      const sectionStart = sectionTop - windowHeight / 2
      const sectionEnd = sectionTop + sectionHeight - windowHeight / 2

      const progress =
        (scrollY - sectionStart) / (sectionEnd - sectionStart)

      setScrollProgress(Math.max(0, Math.min(1, progress)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  const getGridTransform = () => {
    return -(scrollProgress * maxScroll)
  }

  // CARD
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

  // MOBILE CAROUSEL
  const [sliderRef, slider] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 15,
    },
    mode: 'snap',
  })

  return (
    <section
      ref={sectionRef}
      className={`relative bg-gray-50 ${
        isMobile ? 'py-12' : 'min-h-[250vh]'
      }`}
    >
      <div
        className={`${
          isMobile ? '' : 'sticky top-0 h-screen flex items-center overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center">
              <div className="mb-4 md:text-center lg:text-left xl:text-left">
                <span className="inline-block md:mt-20 py-2 lg:py-0 xl:py-0  border-b-2 border-[#F9C901] text-[16px] font-bold text-black ">
                  What make us Unique
                </span>
              </div>

              <h2 className="text-3xl lg:text-[35px] xl:text-[35px] font-bold mb-6 leading-tight text-black md:text-center lg:text-left xl:text-left">
                Benefits Of <span className="text-yellow-400">Beelockchain</span> Digital Transformation Services
              </h2>

              <p className="text-black text-sm lg:text-base mb-8 leading-relaxed max-w-md font-semibold">
               Begin your transformation journey with Beelockchain’s skilled experts. Build a future-ready organization using a structured digital business transformation service approach.
              </p>

            
            {/* CTA Button */}
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
                <span className="font-poppins text-black text-sm md:text-[12px] lg:text-[12px] xl:text-[15px]  bg-gray">
                Digitalize Your Business Now
                </span>

                {/* Arrow Icon */}
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

            {/* RIGHT SIDE */}
            {!isMobile ? (
              <div
                className="relative overflow-hidden"
                style={{ height: visibleHeight }}
              >
                {/* blur overlays */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />

                <div
                  className="absolute inset-0 py-16"
                  style={{
                    transform: `translateY(${getGridTransform()}px)`,
                    transition: 'transform 0.2s ease-out',
                  }}
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
                  <div className="grid grid-cols-2 gap-4">
                    <Card card={benefitCards[4]} />
                    <Card card={benefitCards[5]} />
                  </div>
                </div>
              </div>
            ) : (
              // MOBILE CAROUSEL
              <div className="w-full relative mt-10">
                <div ref={sliderRef} className="keen-slider">
                  {benefitCards.map((card) => (
                    <div key={card.id} className="keen-slider__slide">
                      <Card card={card} />
                    </div>
                  ))}
                </div>

                {/* arrows */}
                <button
                  onClick={() => slider.current?.prev()}
                  className="absolute left-[-10px] top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center"
                >
                  ←
                </button>

                <button
                  onClick={() => slider.current?.next()}
                  className="absolute right-[-10px] top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center"
                >
                  →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
