"use client";

import { useRef } from "react";
import gsap from "gsap";

const Herosection = () => {
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

  return (
    <div className="w-full bg-white">
      {/* ================= MOBILE LAYOUT ================= */}
      <div className="flex md:hidden flex-col items-center px-6 pt-24">
        {/* Heading */}
        <div className="w-full max-w-sm text-left mb-8">
          <p className="text-xs text-black mb-2">
            Your Vision. Our Dedication.
          </p>
          <h1 className="text-md font-extrabold leading-snug text-black">
            Digital Transformation Company
            <br />
            Modernizing The Way You Work
          </h1>
        </div>

        {/* Center Image */}
        <div className="w-full max-w-xs mb-10">
          <img src="/assets/images/Heromainimg.webp" alt="BeeLockchain" className="w-full" />
        </div>

        {/* Stats */}
        <div className="flex gap-2">
          {[
            { title: "50+", sub: "team members" },
            { title: "380+", sub: "Completed Projects" },
            { title: "8 years", sub: "in Business" },
          ].map((item) => (
            <div
              key={item.title}
              className="
                w-[100px] h-[90px]
                bg-white
                rounded-[22px]
                p-3
                shadow-[0_8px_18px_rgba(255,200,90,0.45),_0_0_0_1px_rgba(255,200,90,0.25)]
                flex flex-col justify-center
              "
            >
              <h2 className="text-xl font-semibold text-black">{item.title}</h2>
              <p className="text-[11px] text-black mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
        <div className="h-72 w-full flex flex-col justify-center items-center bg-cover bg-center gap-2">
          <div className="text-black text-sm text-center">
            Beelockchain is a global digital transformation company that
            integrates future-ready solutions across AI, Blockchain, Cloud
            Infrastructure, Big Data, and Mobile Applications with an advanced,
            customer-centric experience.
          </div>

          <button className="flex items-center gap-2 text-black border border-black px-2 py-1 rounded-full font-medium shadow hover:bg-gray-100 transition">
            Consult Our Experts
            <div className="w-8 h-8 rounded-full flex justify-center items-center bg-yellow-500">
              <img
                src="/assets/images/Herobuttonimg.png"
                alt="arrow"
                className="h-8 w-8"
              />
            </div>
          </button>
        </div>
      </div>

      {/* ================= DESKTOP + TABLET LAYOUT ================= */}
      {/* ⚠️ UNTOUCHED JSX */}
      <div className="hidden md:flex h-screen w-full flex-col justify-center items-center bg-white">
        <div className="h-[77%] w-full flex justify-center items-center mb-10">
          <div className="w-[33%] h-[70%] relative flex justify-start items-start mt-60 pl-10">
            <div className="relative">
              <h1 className="text-[24px] leading-10 text-black font-extrabold">
                Digital Transformation Company
              </h1>
              <h1 className="text-[24px] leading-10 text-black font-extrabold">
                Modernizing The Way You Work
              </h1>
            </div>
          </div>

          <div className="w-[30%] h-[70%]">
            <img
              ref={imgRef}
              src="/assets/images/Heromainimg.webp"
              className="w-full"
              style={{ transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          </div>

          <div className="w-[30%] h-[50%] flex justify-center items-start">
            <div className="h-72 w-full relative ml-10">
              {/* Background image with opacity */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: "url('/assets/images/Herosideimg2.svg')" }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center items-start gap-6 px-6">
                <div className="text-black text-lg">
                  Beelockchain is a global digital transformation company that
                  integrates future-ready solutions across AI, Blockchain, Cloud
                  Infrastructure, Big Data, and Mobile Applications with an
                  advanced, customer-centric experience.
                </div>

                <button className="flex items-center gap-2 text-black border border-black px-2 py-1 rounded-full font-medium shadow hover:bg-gray-100 transition">
                  Consult Our Experts
                  <div className="w-8 h-8 rounded-full flex justify-center items-center bg-yellow-500">
                    <img
                      src="/assets/images/Herobuttonimg.png"
                      alt="arrow"
                      className="h-8 w-8"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[23%] w-[70%] flex justify-center items-center gap-8">
          {[
            { title: "50+", sub: "team members" },
            { title: "380+", sub: "Completed Projects" },
            { title: "8 years", sub: "in Business" },
          ].map((item) => (
            <div
              key={item.title}
              className="w-[170px] h-[110px] flex items-center justify-center"
            >
              <div className="w-full h-full bg-white rounded-[28px] flex flex-col items-start justify-center p-4 shadow-[0_10px_22px_rgba(255,200,90,0.45),_0_0_0_1px_rgba(255,200,90,0.25)]">
                <h2 className="text-3xl text-black">{item.title}</h2>
                <p className="text-sm text-black mt-1">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Herosection;
