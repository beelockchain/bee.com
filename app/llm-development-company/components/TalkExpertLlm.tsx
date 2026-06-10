"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const TalkExpertLlm = () => {
  const [active, setActive] = useState(false);
  return (
    <section className="w-full pb-6 pt-10">
      <div className="relative w-full overflow-hidden bg-black px-6 py-5 sm:px-8 sm:py-5 lg:px-14 lg:py-4">
        <div className="absolute left-0 top-0 z-20 hidden lg:block m-[-10px]">
          <Image
            src="/assets/images/devops/left-icon.png"
            alt="Decorative DevOps icon"
            width={82}
            height={82}
            className="h-12 w-12 object-contain sm:h-14 sm:w-14 lg:h-[82px] lg:w-[82px]"
          />
        </div>

        <div className="relative z-10 flex min-h-[170px] flex-col items-center justify-center gap-5 text-center lg:px-14">
          <div className="max-w-3xl">
            <p className="text-center mb-3 font-poppins text-[18px] font-medium leading-5 text-white sm:text-[18px] md:text-[24px] sm:leading-7 lg:text-[30px] lg:leading-7">
              Build Your <span className="text-yellow-400">Custom LLM</span>{" "}
              Solution With Our Experts
            </p>
            <p className="text-center  text-white text-[14px] md:text-[12px] lg:text-[12px] xl:text-[14px] font-poppins font-medium ">
              Start your project with our experienced AI engineers and bring
              your idea to production faster
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact-us"
              target="_blank"
              onTouchStart={() => setActive(true)}
              onTouchEnd={() => setActive(false)}
              onMouseLeave={() => setActive(false)}
              className="group relative inline-flex min-h-9 items-center justify-center gap-1.5 overflow-hidden rounded-full border border-black bg-gradient-to-b from-yellow-400 to-yellow-700 px-3 py-1.5 text-black outline outline-1 outline-offset-[-1px] outline-black sm:min-h-11 sm:gap-2 sm:px-4 sm:py-2.5"
            >
              <span
                className={`absolute inset-0 bg-white/20 transition-all duration-300 ease-out ${
                  active
                    ? "[clip-path:circle(150%_at_50%_50%)]"
                    : "[clip-path:circle(0%_at_50%_50%)]"
                } group-hover:[clip-path:circle(150%_at_50%_50%)]`}
              />
              <span className="relative z-10 text-center font-poppins text-[11px] font-medium leading-4 sm:text-[14px] sm:leading-5">
                Talk to Our AI Experts
              </span>
              <svg
                className="relative z-10 h-5 w-5 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 sm:h-7 sm:w-7"
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
            <Link
              href="#"
              onTouchStart={() => setActive(true)}
              onTouchEnd={() => setActive(false)}
              onMouseLeave={() => setActive(false)}
              className="group relative inline-flex min-h-9 items-center justify-center gap-1.5 overflow-hidden rounded-full border border-black bg-gradient-to-b from-yellow-400 to-yellow-700 px-3 py-1.5 text-black outline outline-1 outline-offset-[-1px] outline-black sm:min-h-11 sm:gap-2 sm:px-4 sm:py-2.5"
            >
              <span
                className={`absolute inset-0 bg-white/20 transition-all duration-300 ease-out ${
                  active
                    ? "[clip-path:circle(150%_at_50%_50%)]"
                    : "[clip-path:circle(0%_at_50%_50%)]"
                } group-hover:[clip-path:circle(150%_at_50%_50%)]`}
              />
              <span className="relative z-10 text-center font-poppins text-[11px] font-medium leading-4 sm:text-[14px] sm:leading-5">
                Explore Our Portfolio
              </span>
              <svg
                className="relative z-10 h-5 w-5 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 sm:h-7 sm:w-7"
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

          <div className="pointer-events-none absolute bottom-0 right-0 hidden translate-x-[50%] translate-y-[30%] lg:block">
            <div className="relative h-32 w-32 lg:h-44 lg:w-44 xl:h-52 xl:w-52">
              <Image
                src="/assets/images/devops/cta-box-img.png"
                alt="Consultation Logo"
                fill
                className="object-contain object-bottom-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkExpertLlm;
