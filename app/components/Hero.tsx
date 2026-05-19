"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const Herosection = () => {
  const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;
  const imgRef = useRef<HTMLImageElement>(null);
  const beeRef = useRef<HTMLImageElement>(null);
  const btnRef = useRef<HTMLAnchorElement >(null);
    const [active, setActive] = useState(false);

  gsap.registerPlugin(MotionPathPlugin);
  const handleMouseMove = (e: React.MouseEvent) => {
    const img = imgRef.current;
    if (!img) return;

    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 10;
    const rotateX = (y / rect.height - 0.5) * -10;

    gsap.to(img, {
      rotateX,
      rotateY,
      scale: 1,
      transformPerspective: 800,
      ease: "power2.out",
      duration: 0.1,
    });
  };

  const handleMouseLeave = () => {
    const img = imgRef.current;
    if (!img) return;

    gsap.to(img, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      ease: "power3.out",
      duration: 0.3,
    });
  };
  const statsData = [
    { title: 50, suffix: "+", sub: "Team Members" },
    { title: 380, suffix: "+", sub: "Completed Projects" },
    { title: 8, suffix: " years", sub: "In Business" },
  ];
  const [count, setCount] = useState(0);
  const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 1500;
      const increment = end / (duration / 16);

      const animate = () => {
        start += increment;
        if (start < end) {
          setCount(Math.ceil(start));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animate();
    }, [end]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };
  useEffect(() => {
    const bee = beeRef.current;
    const btn = btnRef.current;

    if (!bee || !btn) return;

    requestAnimationFrame(() => {
      const beeRect = bee.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();

      // 🎯 TARGET = top-right corner of button
      const targetX = btnRect.right - (beeRect.left + beeRect.width / 2);

      const targetY = btnRect.top - (beeRect.top + beeRect.height / 2);

      const steps = 40;
      const path = [];

      for (let i = 0; i <= steps; i++) {
        const progress = i / steps;

        // 🟡 smooth easing
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        path.push({
          x: targetX * easeProgress,
          y: targetY * easeProgress,
        });
      }

      gsap.to(bee, {
        duration: 2.5,
        ease: "power2.out",
        motionPath: {
          path,
          curviness: 1,
          autoRotate: false, // ❌ disable rotation
        },
      });
    });
  }, []);
  return (
    <section className="w-full bg-white px-2  md:px-10 lg:px-20 py-2">
      <div className="max-w-9xl lg:max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-10">
        {/* LEFT - HEADING */}
       <div className="w-full text-center lg:text-left">
        <div className="w-full flex justify-center lg:justify-start">
        <h1
          className="
            max-w-[320px] 
            sm:max-w-[420px] 
            md:max-w-[400px] 
            lg:max-w-[480px] 
            xl:max-w-[600px]
            
            text-center lg:text-left
            text-[19px] sm:text-[20px] md:text-[20px] lg:text-[22px] xl:text-[26px]
            font-bold text-black leading-tight
          "
        >
          Digital Transformation Company
          Modernizing The Way You Work
        </h1>
      </div>
      </div>

        {/* CENTER - IMAGE */}
        <div className="flex justify-center">
          <img
            ref={imgRef}
            src={`${ASSET_URL}/images/Heromainimg.webp`}
            alt="Beelockchain Hero"
            className="
              w-full max-w-[280px]
              md:max-w-[260px]
              lg:max-w-[200px]
              xl:max-w-[380px]
              object-contain
            "
            style={{ transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div className="relative  flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
          {/* DESCRIPTION BOX */}
          <div className="relative w-full rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage: `url('${ASSET_URL}/images/Herosideimg2.webp')`,
              }}
            />
            <div className="relative z-10 px-4 py-5">
              <p
                className="
                  text-[14px] sm:text-[14px] md:text-[15px] lg:text-[14px] xl:text-[16px]
                  font-normal text-black font-['Poppins']
                  w-full
                  max-w-[280px]
                  sm:max-w-[340px]
                  md:max-w-[450px]
                  lg:max-w-[480px]
                  xl:max-w-[520px]

                  mx-auto lg:mx-0
                "
              >
                Beelockchain is a global digital transformation company that
                integrates future-ready solutions across AI, Blockchain, Cloud
                Infrastructure, Big Data, and Mobile Applications with advanced,
                customer-centric experiences.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <img
                ref={beeRef}
                src="/assets/images/bee.gif"
                alt="bee"
                className="absolute top-0 right-0 w-20 pointer-events-none z-20"
              />
              <a
                href="/contact-us"
                ref={btnRef}
                onTouchStart={() => setActive(true)}
                onTouchEnd={() => setActive(false)}
                onMouseLeave={() => setActive(false)}
                className="group relative flex items-center gap-2 px-4 py-2 lg:px-4 lg:py-0 border border-black rounded-full overflow-hidden cursor-pointer lg:ml-4"
              >
                {/* Expand Circle */}
                <span className="absolute inset-0 flex items-center justify-center z-0">
                  <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
                </span>

                {/* Glow */}
                <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />

                {/* Text */}
                <span className="relative z-10 text-black text-sm whitespace-nowrap transition-colors">
                    Get A Free Strategy Session               

                </span>

                {/* Icon */}
                <svg
                  viewBox="0 0 56 55"
                  className="relative z-10 w-10 h-10 lg:w-14 lg:h-14 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95"
                >
                  <circle
                    cx="28.2"
                    cy="27.1"
                    r="15.9"
                    fill="#F6E000"
                    stroke="#F9C901"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M31.3 22.1L33.2 29.4M31.3 22.1L24.1 24.1M31.3 22.1L25.1 32.8"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="w-full flex justify-center mt-6 lg:mt-10  px-0 lg:px-4">
        <div
          className="
      grid gap-4
      justify-center

      grid-cols-3          /* mobile */
      sm:grid-cols-3
      md:grid-cols-3
      lg:grid-cols-3

      max-w-md
      sm:max-w-lg
      md:max-w-xl
      lg:max-w-2xl
    "
        >
          {statsData.map((item) => (
            <div
              key={item.sub}
              className="
          w-[100px]
          sm:w-[110px]
          md:w-[120px]
          lg:w-[150px]

          h-[70px]
          sm:h-[100px]
          md:h-[90px]
          lg:h-[90px]

          mx-auto

          relative
          bg-white rounded-[10px]

          flex flex-col justify-center items-center text-center

          border border-[#F9C901] border-t-0

          shadow-[0_6px_10px_rgba(249,201,1,0.15),_-4px_0_10px_rgba(249,201,1,0.1),_4px_0_10px_rgba(249,201,1,0.1)]
          overflow-hidden

          transition-all duration-300 hover:-translate-y-1 hover:scale-105
        "
            >
              {/* TOP FADE */}
              <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white to-transparent pointer-events-none" />

              <h2 className="relative z-10 text-[20px] sm:text-lg md:text-xl lg:text-2xl font-semibold text-black">
                <Counter end={item.title} suffix={item.suffix} />
              </h2>

              <p className="relative z-10 text-[10px] sm:text-xs xl:text-[14px] font-medium text-black mt-1 leading-tight">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Herosection;
