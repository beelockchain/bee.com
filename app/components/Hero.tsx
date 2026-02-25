
"use client";

import { useRef , useState, useEffect} from "react";
import gsap from "gsap";

const Herosection = () => {
  const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;
  const imgRef = useRef<HTMLImageElement>(null);

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
  return (
    <section className="w-full bg-white px-2  md:px-10 lg:px-20 py-2">
      <div className="max-w-8xl lg:max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-10">

        {/* LEFT - HEADING */}
        <div className="w-full text-center lg:text-left">
          <h1 className="
          text-[19px] sm:text-[20px]  md:text-[20px] lg:text-[18px] xl:text-[26px] font-bold text-black leading-snug 
          ">
            Digital Transformation Company
            <br />
            Modernizing The Way You Work
          </h1>
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
        <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">

          {/* DESCRIPTION BOX */}
          <div className="relative w-full rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: `url('${ASSET_URL}/images/Herosideimg2.webp')` }}
            />
           <div className="relative z-10 px-4 py-5">
              <p
                className="
                  text-[13px] sm:text-[14px] md:text-[15px] lg:text-[14px] xl:text-[17px]
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
                integrates future-ready solutions across AI, Blockchain,
                Cloud Infrastructure, Big Data, and Mobile Applications
                with advanced, customer-centric experiences.
              </p>
            </div>
                      <div className="flex justify-center lg:justify-start">

                    <button
            className="cursor-pointer lg:ml-4
            relative flex items-center
            gap-2 md:gap-2 lg:gap-1
            px-4 py-2 md:px-3  md:py-1 lg:px-2 lg:py-0
            border border-black rounded-full
            overflow-hidden"
          >
            {/* Soft center glow */}
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)]" />

            {/* Text */}
            <span className="relative z-10 font-poppins text-black text-sm md:text-xs lg:text-sm whitespace-nowrap">
              Consult Our Experts
            </span>

            {/* Icon */}
            <svg
              className="relative z-10 w-10 h-10 md:w-8 md:h-8 lg:w-14 lg:h-14"
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