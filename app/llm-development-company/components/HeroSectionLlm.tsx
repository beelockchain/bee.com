"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  backgroundImage?: string;
  onConsultClick?: () => void;
}

export default function HeroSectionLlm({
  backgroundImage = "/assets/images/llm/llm-hero-bg.png",
  onConsultClick,
}: HeroSectionProps) {
  return (
    <div className="bg-white px-3 sm:px-4 md:px-4 lg:px-6">
      <section className="relative w-full overflow-hidden rounded-2xl">
        {/* Background (hidden on mobile) */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={backgroundImage}
            alt="DevOps Background"
            fill
            priority
            className="object-cover object-center"
            quality={100}
          />
        </div>

        <div
          className="relative z-10 flex items-center justify-center md:justify-start text-center md:text-left 
  min-h-[380px] sm:min-h-[520px] md:min-h-[200px] lg:min-h-[470px] xl:min-h-[620px]"
        >
          <div className="mx-auto w-full max-w-8xl px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-xl sm:max-w-2xl md:max-w-[400px] lg:max-w-2xl mx-auto md:mx-0 pt-5 sm:pt-6 md:pt-4 lg:pt-0 xl:pt-6">
              {/* Image Text */}
              <div className="mb-2 sm:mb-4 md:mb-2 flex justify-center md:justify-start w-full overflow-visible">
                <Image
                  src="/assets/images/llm/llm-text.png"
                  alt="LLM Text"
                  width={500}
                  height={120}
                  className="w-full max-w-[200px] sm:max-w-[320px] md:max-w-40 lg:max-w-[220px] xl:max-w-[320px]"
                  priority
                />
              </div>

              {/* Heading */}
              <h1 className="mb-5 md:mb-3 leading-[1.15] mt-3">
                <span
                  data-text="LLM Development"
                  className="block text-[23px] sm:text-[30px] shine-text text-[#F5B800] relative  md:text-[25px] lg:text-[35px] xl:text-[48px] font-bold  text-center md:text-left "
                >
                  LLM Development
                </span>

                <span className="block text-[23px] sm:text-[30px] md:text-[25px] lg:text-[35px] xl:text-[48px] font-bold text-center md:text-left">
                  <span className="text-black relative">Company</span>
                </span>
              </h1>

              {/* Description */}
              <p
                className="
               text-black text-[14px] sm:text-[15px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-semibold sm:leading-[1.7]  xl:mt-5 mb-5 md:mb-3 sm:mb-6 md:max-w-[325px] lg:max-w-[400px] xl:max-w-[520px] text-center md:text-left
              "
              >
                Beelockchain helps businesses build intelligent applications powered by large language models and advanced AI systems. Our AI engineers develop custom LLM solutions, AI copilots, chatbots, and knowledge assistants that automate workflows and enhance decision-making.  We design scalable generative AI systems using advanced language models such as GPT, LLaMA, and Claude.
              </p>

              {/* CTA */}
              <div className="flex justify-center md:justify-start mt-4">
                <Link
                  href="/contact-us"
                  onClick={onConsultClick}
                  target="_blank"
                  className="
                   group relative overflow-hidden
                  cursor-pointer
                  inline-flex items-center justify-center gap-2
                  w-fit
                  px-4 py-2 sm:px-5 sm:py-2.5 md:px-2 md:py-1 lg:px-3 lg:py-2 xl:px-3 xl:py-2.5
                  border border-black rounded-full
                  bg-[#f2f2f2]
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] mb-5
                  "
                >
                  {/* Hover Effect */}
                  <span className="absolute inset-0 flex items-center justify-center z-0">
                    <span className="w-10 h-10 bg-gray-200 rounded-full scale-0 group-hover:scale-[5] transition-transform duration-500 ease-out" />
                  </span>

                  {/* Text */}
                  <span className="relative z-10 text-black font-poppins text-sm sm:text-[15px] md:text-[12px] lg:text-[12px] xl:text-[15px]">
                    Contact Our LLM Engineers
                  </span>

                  {/* Icon */}
                  <svg
                    className="relative z-10 w-8 h-8 transition-all duration-300 group-hover:rotate-60 group-hover:translate-x-1"
                    viewBox="0 0 56 55"
                  >
                    <circle
                      cx="28"
                      cy="27"
                      r="16"
                      fill="#F6E000"
                      stroke="#F9C901"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M31 22L33 29M31 22L24 24M31 22L25 33"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
