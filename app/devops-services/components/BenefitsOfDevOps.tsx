"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const benefits = [
  "Faster software release cycles",
  "Reduced deployment risks",
  "Improved collaboration between development and operations teams",
  "On-demand infrastructure scalability",
  "Continuous software delivery",
  "Optimized infrastructure costs",
  "Automated compliance monitoring",
  "Real-time performance visibility",
];

const SCROLL_SPEED = 32;

const BenefitsOfDevOps = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const firstGroup = firstGroupRef.current;

    if (!track || !firstGroup || typeof window === "undefined") return;

    let frameId = 0;
    let offset = 0;
    let lastTime = performance.now();

    const getLoopDistance = () => {
      const trackStyles = window.getComputedStyle(track);
      const groupGap = parseFloat(trackStyles.rowGap || trackStyles.gap || "0");

      return firstGroup.offsetHeight + groupGap;
    };

    let loopDistance = getLoopDistance();

    const syncPosition = () => {
      if (loopDistance <= 0) return;

      offset %= loopDistance;
      track.style.transform = `translate3d(0, -${offset}px, 0)`;
    };

    const resizeObserver = new ResizeObserver(() => {
      loopDistance = getLoopDistance();
      syncPosition();
    });

    resizeObserver.observe(track);
    resizeObserver.observe(firstGroup);

    const step = (currentTime: number) => {
      const elapsedSeconds = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (loopDistance > 0) {
        offset += SCROLL_SPEED * elapsedSeconds;

        if (offset >= loopDistance) {
          offset -= loopDistance;
        }

        track.style.transform = `translate3d(0, -${offset}px, 0)`;
      }

      frameId = window.requestAnimationFrame(step);
    };

    frameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      track.style.transform = "";
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto text-center mb-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px]  text-black font-bold mb-4 leading-tight">
        Key{" "}
        <span
          data-text="DevOps Consulting"
          className="shine-text text-[#F5B800] relative mx-1"
        >
          Benefits Of DevOps
        </span>
        Consulting
        <br />
        Services For Software Delivery
      </h2>
      <p className="text-black text-[13px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-poppins  font-medium  mb-6 max-w-3xl mx-auto">
        Implementing DevOps consulting practices enables businesses to automate
        infrastructure provisioning and deployment workflows, helping teams
        deliver stable software updates faster while minimizing operational
        overhead across modern application environments.
      </p>

      <div className="mt-8 grid items-center lg:mt-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-12">
        <div className="relative mx-auto w-full max-w-2xl">
          <Image
            src="/assets/images/devops/devops-benefits-desktop.png"
            alt="Illustration showing DevOps benefit flow"
            width={1168}
            height={1174}
            className="hidden h-auto w-full sm:block"
            priority
          />
        </div>

        <div className="relative mx-auto flex h-[460px] w-full max-w-[490px] overflow-hidden px-3 sm:h-[520px] sm:px-4">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-linear-to-b from-white via-white/95 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-linear-to-t from-white via-white/95 to-transparent" />

          <div
            ref={trackRef}
            className="flex w-full flex-col gap-6 will-change-transform xl:gap-10"
          >
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                ref={groupIndex === 0 ? firstGroupRef : undefined}
                aria-hidden={groupIndex === 1}
                className="flex w-full shrink-0 flex-col gap-6 xl:gap-10"
              >
                {benefits.map((benefit, index) => (
                  <div
                    key={`${groupIndex}-${benefit}-${index}`}
                    className="benefit-pill flex min-h-[52px] items-center justify-center rounded-full px-6 py-4
                     text-center text-[12px] xl:text-[16px] font-semibold leading-snug"
                  >
                    <span className="max-w-[320px]">{benefit}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfDevOps;
