'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface ChatbotType {
  id: number
  label: string
  image: string
  icon: string
  title: string
  description: string
}

const chatbotTypes: ChatbotType[] = [
  {
    id: 1,
    label: 'Transactional Chatbots',
    image: '/assets/images/aichatbot/aichatbot-Transactional.png',
    icon: '/assets/images/aichatbot/aichatbot-Transactional-icon.png',
    title: 'Transactional Chatbots',
    description:
      'Transactional chatbots assist users in completing specific actions such as booking appointments, checking order status, or managing service requests.',
  },
  {
    id: 2,
    label: 'Customer Support Bots',
    image: '/assets/images/aichatbot/aichatbot-Customer.png',
    icon: '/assets/images/aichatbot/aichatbot-customer-icon.png',
    title: 'Customer Support Bots',
    description:
      'Customer support bots deliver round-the-clock assistance, handling FAQs, troubleshooting issues, and routing complex queries to the right team efficiently.',
  },
  {
    id: 3,
    label: 'Voice Assistants',
    image: '/assets/images/aichatbot/aichatbot-Voice.png',
    icon: '/assets/images/aichatbot/aichatbot-Voice-icon.png',
    title: 'Voice Assistants',
    description:
      'Voice assistants enable natural spoken interactions, allowing users to access information, control devices, and complete tasks through conversational voice commands.',
  },
  {
    id: 4,
    label: 'Enterprise Chatbots',
    image: '/assets/images/aichatbot/aichatbot-Enterprise.png',
    icon: '/assets/images/aichatbot/aichatbot-Enterprise-icon.png',
    title: 'Enterprise Chatbots',
    description:
      'Enterprise chatbots integrate with internal systems to support HR, IT helpdesk, and operations, streamlining workflows and improving employee productivity at scale.',
  },
  {
    id: 5,
    label: 'Lead Generation Bots',
    image: '/assets/images/aichatbot/aichatbot-Lead.png',
    icon: '/assets/images/aichatbot/aichatbot-Lead-icon.png',
    title: 'Lead Generation Bots',
    description:
      'Lead generation bots engage website visitors, qualify prospects through dynamic conversations, and capture contact information to fuel your sales pipeline continuously.',
  },
  {
    id: 6,
    label: 'Multilingual Chatbots',
    image: '/assets/images/aichatbot/aichatbot-Multilingual.png',
    icon: '/assets/images/aichatbot/aichatbot-Multilingual-icon.png',
    title: 'Multilingual Chatbots',
    description:
      'Multilingual chatbot systems allow businesses to communicate with global audiences by supporting multiple languages and regional dialects.',
  },
  {
    id: 7,
    label: 'Analytics-Driven Chatbots',
    image: '/assets/images/aichatbot/aichatbot-Analytics.png',
    icon: '/assets/images/aichatbot/aichatbot-Analytics-icon.png',
    title: 'Analytics-Driven Chatbots',
    description:
      'Analytics-powered chatbot systems collect interaction data and provide insights that help businesses improve customer engagement strategies.',
  },
]

type AnimPhase = 'idle' | 'exit-left' | 'exit-right' | 'enter-left' | 'enter-right'

const LAST = chatbotTypes.length - 1

const ChatbotTypesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [displayIndex, setDisplayIndex] = useState(0)
  const [phase, setPhase] = useState<AnimPhase>('idle')
  const animatingRef = useRef(false)
  // Separate refs for the two animated panels (image + text)
  const imgRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const tabsScrollRef = useRef<HTMLDivElement>(null)

  const isFirst = activeIndex === 0
  const isLast = activeIndex === LAST

  // Scroll active tab into view
  useEffect(() => {
    const container = tabsScrollRef.current
    if (!container) return
    const activeTab = container.children[activeIndex] as HTMLElement
    if (!activeTab) return
    const cL = container.scrollLeft
    const cR = cL + container.clientWidth
    const tL = activeTab.offsetLeft
    const tR = tL + activeTab.offsetWidth
    if (tL < cL) container.scrollTo({ left: tL - 16, behavior: 'smooth' })
    else if (tR > cR) container.scrollTo({ left: tR - container.clientWidth + 16, behavior: 'smooth' })
  }, [activeIndex])

  const applySnap = (translateX: string) => {
    ;[imgRef, textRef].forEach((ref) => {
      const el = ref.current
      if (!el) return
      el.style.transition = 'none'
      el.style.transform = translateX
      el.style.opacity = '0'
    })
  }

  const goTo = (nextIndex: number) => {
    if (nextIndex < 0 || nextIndex > LAST) return
    if (nextIndex === activeIndex || animatingRef.current) return
    animatingRef.current = true

    const isForward = nextIndex > activeIndex
    const exitPhase: AnimPhase = isForward ? 'exit-left' : 'exit-right'
    const enterPhase: AnimPhase = isForward ? 'enter-left' : 'enter-right'

    // Phase 1 — exit
    setPhase(exitPhase)

    setTimeout(() => {
      // Phase 2 — swap content, snap new content to off-screen start
      setDisplayIndex(nextIndex)
      setActiveIndex(nextIndex)
      applySnap(isForward ? 'translateX(80px)' : 'translateX(-80px)')

      // Phase 3 — animate in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPhase(enterPhase)
          setTimeout(() => {
            setPhase('idle')
            animatingRef.current = false
          }, 340)
        })
      })
    }, 290)
  }

  const handlePrev = () => { if (!isFirst) goTo(activeIndex - 1) }
  const handleNext = () => { if (!isLast) goTo(activeIndex + 1) }
  const handleTabClick = (idx: number) => goTo(idx)

  const current = chatbotTypes[displayIndex]

  const animStyle = (): React.CSSProperties => {
    switch (phase) {
      case 'exit-left':
        return { transform: 'translateX(-80px)', opacity: 0, transition: 'transform 0.29s ease-in, opacity 0.29s ease-in' }
      case 'exit-right':
        return { transform: 'translateX(80px)', opacity: 0, transition: 'transform 0.29s ease-in, opacity 0.29s ease-in' }
      case 'enter-left':
      case 'enter-right':
        return { transform: 'translateX(0)', opacity: 1, transition: 'transform 0.34s ease-out, opacity 0.34s ease-out' }
      default:
        return { transform: 'translateX(0)', opacity: 1, transition: 'none' }
    }
  }

  return (
    <section className="py-16 bg-[#FBFBFB]">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* ── Centered heading ─────────────────────────────────── */}
        <div className="text-center mb-10">
          <h2 className="text-[22px] md:text-[28px] lg:text-[32px] xl:text-[38px] font-bold text-black leading-tight">
            Types Of{' '}
            <span data-text="AI Chatbots" className="text-[#F9C901] shine-text">AI Chatbots</span>{' '}
            We Build For Businesses
          </h2>
          <p className="mt-4 text-[#525252] text-[13px] xl:text-[15px] max-w-2xl mx-auto leading-relaxed font-semibold">
            Different organizations require different conversational capabilities. We develop AI chatbots
            designed to support multiple business operations and interaction scenarios.
          </p>
        </div>

        {/* ── Tab bar — 4 fully visible + 5th partially clipped ─── */}
        <div className="relative mb-8">
          <div
            className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to left, #FBFBFB 0%, transparent 100%)' }}
          />
          <div className="overflow-hidden">
            <div
              ref={tabsScrollRef}
              className="flex xl:gap-15 overflow-x-auto"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {chatbotTypes.map((type, idx) => (
                <button
                  key={type.id}
                  onClick={() => handleTabClick(idx)}
                  className={[
                    'w-[210px] flex-shrink-0 whitespace-nowrap px-3 py-2.5 rounded-lg text-[13px] xl:text-[14px]',
                    'transition-all duration-200 outline-none focus:outline-none',
                    activeIndex === idx
                      ? 'border-2 border-[#E4E4E4] font-bold text-black bg-white'
                      : 'border-2 border-transparent font-semibold text-[#525252] hover:text-black',
                  ].join(' ')}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Outer grid — never animates ───────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-10 items-center " ref={textRef} style={animStyle()}>

          {/* Left — only the inner image div animates */}
          <div className="overflow-hidden rounded-2xl">
            <div className="flex justify-end items-center p-8">
              <Image
                src={current.image}
                alt={current.title}
                width={300}
                height={370}
                className="object-contain max-h-[350px]"
              />
            </div>
          </div>

          {/* Right column — outer div is static, only text panel animates */}
          <div className="flex flex-col justify-between min-h-[300px] lg:min-h-[400px] py-10">

            {/* Animated text panel */}
            <div className="overflow-hidden">
              <div>
                <div className="w-14 h-14 mb-5 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src={current.icon}
                    alt={current.title + ' icon'}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-[18px] xl:text-[22px] font-bold text-black mb-3 leading-snug">
                  {current.title}
                </h3>
                <p className="text-[#525252] text-[14px] xl:text-[15px] leading-relaxed font-semibold max-w-lg">
                  {current.description}
                </p>
              </div>
            </div>

            {/* ── Arrows sit here in the static outer column — they never move ── */}
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={handlePrev}
                disabled={isFirst}
                aria-label="Previous"
                className={[
                  'w-10 h-10 rounded-full border-2 flex items-center justify-center text-xl leading-none transition-all duration-200',
                  isFirst
                    ? 'border-[#E4E4E4] text-[#000000] cursor-not-allowed'
                    : 'border-[#CCCCCC] text-[#525252] hover:border-black hover:text-black cursor-pointer',
                ].join(' ')}
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                disabled={isLast}
                aria-label="Next"
                className={[
                  'w-10 h-10 rounded-full border-2 flex items-center justify-center text-xl leading-none transition-all duration-200',
                  isLast
                    ? 'border-[#E4E4E4] text-[#000000] cursor-not-allowed'
                    : 'border-[#CCCCCC] text-[#525252] hover:border-black hover:text-black cursor-pointer',
                ].join(' ')}
              >
                ›
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default ChatbotTypesSection