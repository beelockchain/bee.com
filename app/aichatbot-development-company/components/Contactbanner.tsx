import Image from "next/image";

export default function ContactBanner() {
  return (
    <section className="w-full px-4 py-8 sm:px-5 md:px-6 lg:px-8 xl:px-10 bg-[#F9FAFB]">
      <div className="relative w-full rounded-2xl overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[180px] xl:min-h-[100px] flex items-center justify-center">

        {/* Background Image */}
        <Image
          src="/assets/images/aichatbot/aichatbot-contact-banner.png"
          alt="Contact Banner Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-[1]" />

        {/* Left decorative shape */}
        <div className="absolute left-0 top-0 h-full z-[2] pointer-events-none select-none hidden sm:block">
          <svg
            viewBox="0 0 120 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-auto opacity-50"
          >
            <path
              d="M0 0 L60 0 L60 30 L30 30 L30 60 L60 60 L60 90 L0 90 Z"
              fill="#6B7280"
            />
            <path
              d="M0 100 L50 100 L50 130 L20 130 L20 160 L50 160 L50 190 L0 190 Z"
              fill="#4B5563"
            />
            <path
              d="M0 200 L40 200 L40 230 L10 230 L10 260 L40 260 L40 260 L0 260 Z"
              fill="#374151"
            />
          </svg>
        </div>

        {/* Right decorative shape */}
        <div className="absolute right-0 top-0 h-full z-[2] pointer-events-none select-none hidden sm:block">
          <svg
            viewBox="0 0 120 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-auto opacity-50"
          >
            <path
              d="M120 0 L60 0 L60 30 L90 30 L90 60 L60 60 L60 90 L120 90 Z"
              fill="#6B7280"
            />
            <path
              d="M120 100 L70 100 L70 130 L100 130 L100 160 L70 160 L70 190 L120 190 Z"
              fill="#4B5563"
            />
            <path
              d="M120 200 L80 200 L80 230 L110 230 L110 260 L80 260 L80 260 L120 260 Z"
              fill="#374151"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-[3] flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 py-10 sm:py-12 md:py-14 lg:py-16 xl:py-16 w-full">

          {/* Heading */}
          <h2 className="font-bold text-white text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-[38px] leading-tight mb-3 sm:mb-4 md:mb-4 lg:mb-5">
            BUILD YOUR{" "}
            <span className="text-[#F5B800]">AI CHATBOT SOLUTION</span>{" "}
            TODAY
          </h2>

          {/* Subtitle */}
          <p className="text-white/80 text-[12px] sm:text-[13px] md:text-[13px] lg:text-[14px] xl:text-[15px] font-medium leading-relaxed max-w-[280px] sm:max-w-[440px] md:max-w-[560px] lg:max-w-[680px] xl:max-w-[760px] mb-6 sm:mb-7 md:mb-8">
            AI chatbot technology is transforming how businesses communicate with
            customers and automate digital interactions. If you want to build an
            intelligent chatbot solution tailored to your business needs, our
            team is ready to help.
          </p>

          {/* CTA Button */}
          <a
            href="/contact-us"
            className="
              group relative overflow-hidden
              inline-flex items-center justify-center gap-2
              px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3
              bg-[#F5B800] hover:bg-[#e0a900]
              text-black font-semibold
              text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]
              rounded-full
              border border-[#e0a900]
              transition-all duration-300
              shadow-md hover:shadow-lg
              cursor-pointer
            "
          >
            Consult Our AI Engineer
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
}
