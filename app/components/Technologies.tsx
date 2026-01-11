"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const icons = gsap.utils.toArray(".tech-icon");

    gsap.fromTo(
      icons,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: {
          each: 0.05,
          from: "start",
        },
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 60%",
          end: "bottom 20%",
          scrub: 1,
        },
      }
    );
  }, []);

  const techStack = [
    // Row 1 - 8 hexagons
    { name: "react", icon: "assets/images/tech-icon1.png" },
    { name: "nextjs", icon: "assets/images/tech-icon2.png" },
    { name: "typescript", icon: "assets/images/tech-icon3.png" },
    { name: "nodejs", icon: "assets/images/tech-icon4.png" },
    { name: "python", icon: "assets/images/tech-icon5.png" },
    { name: "mongodb", icon: "assets/images/tech-icon6.png" },
    { name: "postgresql", icon: "assets/images/tech-icon7.png" },
    { name: "docker", icon: "assets/images/tech-icon8.png" },
    
    // Row 2 - 10 hexagons
   { name: "react", icon: "assets/images/tech-icon1.png" },
    { name: "nextjs", icon: "assets/images/tech-icon2.png" },
    { name: "typescript", icon: "assets/images/tech-icon3.png" },
    { name: "nodejs", icon: "assets/images/tech-icon4.png" },
    { name: "mongodb", icon: "assets/images/tech-icon6.png" },
    { name: "postgresql", icon: "assets/images/tech-icon7.png" },
    { name: "docker", icon: "assets/images/tech-icon8.png" },
    { name: "react", icon: "assets/images/tech-icon1.png" },
    { name: "nextjs", icon: "assets/images/tech-icon2.png" },
    
    // Row 3 - 8 hexagons
    { name: "typescript", icon: "assets/images/tech-icon3.png" },
    { name: "nodejs", icon: "assets/images/tech-icon4.png" },
    { name: "python", icon: "assets/images/tech-icon5.png" },
    { name: "mongodb", icon: "assets/images/tech-icon6.png" },
    { name: "postgresql", icon: "assets/images/tech-icon7.png" },
   { name: "react", icon: "assets/images/tech-icon1.png" },
    { name: "nextjs", icon: "assets/images/tech-icon2.png" },
    { name: "typescript", icon: "assets/images/tech-icon3.png" },
    { name: "nodejs", icon: "assets/images/tech-icon4.png" },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden px-4 py-20">
          <div className="w-full bg-white py-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-black text-4xl md:text-5xl font-semibold font-['Poppins'] leading-snug mb-4">
          Core Technologies We Implemented
        </h2>

        {/* Subheading */}
        <p className="text-center text-black text-xl md:text-3xl font-normal font-['Poppins'] mb-8">
          Unlock new opportunities with tailored digital transformation strategies
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="h-10 px-6 py-2.5 bg-yellow-400 rounded-[30px] outline outline-1 outline-yellow-400 font-normal text-black text-lg font-['Poppins']">
            Design Tools
          </button>
          <button className="h-10 px-6 py-2.5 rounded-[30px] outline outline-1 outline-yellow-400 font-normal text-black text-lg font-['Poppins']">
            Frontend Tools
          </button>
          <button className="h-10 px-6 py-2.5 rounded-[30px] outline outline-1 outline-yellow-400 font-normal text-black text-lg font-['Poppins']">
            Backend Tools
          </button>
          <button className="h-10 px-6 py-2.5 rounded-[30px] outline outline-1 outline-yellow-400 font-normal text-black text-lg font-['Poppins']">
            Database
          </button>
          <button className="h-10 px-6 py-2.5 rounded-[30px] outline outline-1 outline-yellow-400 font-normal text-black text-lg font-['Poppins']">
            Mobile App
          </button>
          <button className="h-10 px-6 py-2.5 rounded-[30px] outline outline-1 outline-yellow-400 font-normal text-black text-lg font-['Poppins']">
            Quality Assurance
          </button>
        </div>
      </div>
    </div>
     

      <div ref={gridRef} className="loader">
        {techStack.map((tech, i) => (
          <div key={i} className="hex-wrapper">
            <div className="hex">
              <div className="hex-content">
                <div className="tech-icon">
                  <Image 
                    src={tech.icon} 
                    alt={tech.name}
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .loader {
          position: relative;
          width: 100%;
          max-width: 1800px;
          height: 350px;
          margin: 0 auto;
        }

        .hex-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .hex {
          position: relative;
          width: 140px;
          height: 80.83px;
          background: #f3f4f6;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .hex:hover {
          transform: scale(1.1);
          background: #e5e7eb;
        }

        .hex:before,
        .hex:after {
          content: '';
          position: absolute;
          width: 140px;
          height: 80.83px;
          background: #f3f4f6;
          transition: all 0.3s ease;
        }
        
        .hex:hover:before,
        .hex:hover:after {
          background: #e5e7eb;
        }

        .hex:before {
          transform: rotate(60deg);
        }

        .hex:after {
          transform: rotate(-60deg);
        }

        .hex-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .hex-wrapper :global(.tech-icon) {
          transform-origin: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hex-wrapper :global(.tech-icon img) {
          filter: grayscale(0%);
          transition: filter 0.3s ease;
        }

        .hex-wrapper:hover :global(.tech-icon img) {
          filter: grayscale(0%) brightness(1.1);
        }

        /* Row 1 - Top (8 hexagons) */
        .hex-wrapper:nth-of-type(1) { margin-left: -525px; margin-top: -135px; }
        .hex-wrapper:nth-of-type(2) { margin-left: -350px; margin-top: -135px; }
        .hex-wrapper:nth-of-type(3) { margin-left: -175px; margin-top: -135px; }
        .hex-wrapper:nth-of-type(4) { margin-left: 0px; margin-top: -135px; }
        .hex-wrapper:nth-of-type(5) { margin-left: 175px; margin-top: -135px; }
        .hex-wrapper:nth-of-type(6) { margin-left: 350px; margin-top: -135px; }
        .hex-wrapper:nth-of-type(7) { margin-left: 525px; margin-top: -135px; }
        .hex-wrapper:nth-of-type(8) { margin-left: 700px; margin-top: -135px; }
        
        /* Row 2 - Middle (10 hexagons) */
        .hex-wrapper:nth-of-type(9) { margin-left: -612.5px; margin-top: 0px; }
        .hex-wrapper:nth-of-type(10) { margin-left: -437.5px; margin-top: 0px; }
        .hex-wrapper:nth-of-type(11) { margin-left: -262.5px; margin-top: 0px; }
        .hex-wrapper:nth-of-type(12) { margin-left: -87.5px; margin-top: 0px; }
        .hex-wrapper:nth-of-type(13) { margin-left: 87.5px; margin-top: 0px; }
        .hex-wrapper:nth-of-type(14) { margin-left: 262.5px; margin-top: 0px; }
        .hex-wrapper:nth-of-type(15) { margin-left: 437.5px; margin-top: 0px; }
        .hex-wrapper:nth-of-type(16) { margin-left: 612.5px; margin-top: 0px; }
        .hex-wrapper:nth-of-type(17) { margin-left: 787.5px; margin-top: 0px; }
        .hex-wrapper:nth-of-type(18) { margin-left: 962.5px; margin-top: 0px; }
        
        /* Row 3 - Bottom (8 hexagons) */
        .hex-wrapper:nth-of-type(19) { margin-left: -525px; margin-top: 135px; }
        .hex-wrapper:nth-of-type(20) { margin-left: -350px; margin-top: 135px; }
        .hex-wrapper:nth-of-type(21) { margin-left: -175px; margin-top: 135px; }
        .hex-wrapper:nth-of-type(22) { margin-left: 0px; margin-top: 135px; }
        .hex-wrapper:nth-of-type(23) { margin-left: 175px; margin-top: 135px; }
        .hex-wrapper:nth-of-type(24) { margin-left: 350px; margin-top: 135px; }
        .hex-wrapper:nth-of-type(25) { margin-left: 525px; margin-top: 135px; }
        .hex-wrapper:nth-of-type(26) { margin-left: 700px; margin-top: 135px; }

        @media (max-width: 1600px) {
          .hex {
            width: 110px;
            height: 63.51px;
          }
          
          .hex:before,
          .hex:after {
            width: 110px;
            height: 63.51px;
          }

          .hex-wrapper :global(.tech-icon) {
            width: 40px;
            height: 40px;
          }

          .hex-wrapper:nth-of-type(1) { margin-left: -412.5px; margin-top: -106.05px; }
          .hex-wrapper:nth-of-type(2) { margin-left: -275px; margin-top: -106.05px; }
          .hex-wrapper:nth-of-type(3) { margin-left: -137.5px; margin-top: -106.05px; }
          .hex-wrapper:nth-of-type(4) { margin-left: 0px; margin-top: -106.05px; }
          .hex-wrapper:nth-of-type(5) { margin-left: 137.5px; margin-top: -106.05px; }
          .hex-wrapper:nth-of-type(6) { margin-left: 275px; margin-top: -106.05px; }
          .hex-wrapper:nth-of-type(7) { margin-left: 412.5px; margin-top: -106.05px; }
          .hex-wrapper:nth-of-type(8) { margin-left: 550px; margin-top: -106.05px; }
          
          .hex-wrapper:nth-of-type(9) { margin-left: -481.25px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(10) { margin-left: -343.75px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(11) { margin-left: -206.25px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(12) { margin-left: -68.75px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(13) { margin-left: 68.75px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(14) { margin-left: 206.25px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(15) { margin-left: 343.75px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(16) { margin-left: 481.25px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(17) { margin-left: 618.75px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(18) { margin-left: 756.25px; margin-top: 0px; }
          
          .hex-wrapper:nth-of-type(19) { margin-left: -412.5px; margin-top: 106.05px; }
          .hex-wrapper:nth-of-type(20) { margin-left: -275px; margin-top: 106.05px; }
          .hex-wrapper:nth-of-type(21) { margin-left: -137.5px; margin-top: 106.05px; }
          .hex-wrapper:nth-of-type(22) { margin-left: 0px; margin-top: 106.05px; }
          .hex-wrapper:nth-of-type(23) { margin-left: 137.5px; margin-top: 106.05px; }
          .hex-wrapper:nth-of-type(24) { margin-left: 275px; margin-top: 106.05px; }
          .hex-wrapper:nth-of-type(25) { margin-left: 412.5px; margin-top: 106.05px; }
          .hex-wrapper:nth-of-type(26) { margin-left: 550px; margin-top: 106.05px; }
        }

        @media (max-width: 1200px) {
          .loader {
            height: 450px;
          }

          .hex {
            width: 90px;
            height: 51.96px;
          }
          
          .hex:before,
          .hex:after {
            width: 90px;
            height: 51.96px;
          }

          .hex-wrapper :global(.tech-icon) {
            width: 32px;
            height: 32px;
          }

          .hex-wrapper:nth-of-type(1) { margin-left: -337.5px; margin-top: -86.73px; }
          .hex-wrapper:nth-of-type(2) { margin-left: -225px; margin-top: -86.73px; }
          .hex-wrapper:nth-of-type(3) { margin-left: -112.5px; margin-top: -86.73px; }
          .hex-wrapper:nth-of-type(4) { margin-left: 0px; margin-top: -86.73px; }
          .hex-wrapper:nth-of-type(5) { margin-left: 112.5px; margin-top: -86.73px; }
          .hex-wrapper:nth-of-type(6) { margin-left: 225px; margin-top: -86.73px; }
          .hex-wrapper:nth-of-type(7) { margin-left: 337.5px; margin-top: -86.73px; }
          .hex-wrapper:nth-of-type(8) { margin-left: 450px; margin-top: -86.73px; }
          
          .hex-wrapper:nth-of-type(9) { margin-left: -393.75px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(10) { margin-left: -281.25px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(11) { margin-left: -168.75px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(12) { margin-left: -56.25px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(13) { margin-left: 56.25px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(14) { margin-left: 168.75px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(15) { margin-left: 281.25px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(16) { margin-left: 393.75px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(17) { margin-left: 506.25px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(18) { margin-left: 618.75px; margin-top: 0px; }
          
          .hex-wrapper:nth-of-type(19) { margin-left: -337.5px; margin-top: 86.73px; }
          .hex-wrapper:nth-of-type(20) { margin-left: -225px; margin-top: 86.73px; }
          .hex-wrapper:nth-of-type(21) { margin-left: -112.5px; margin-top: 86.73px; }
          .hex-wrapper:nth-of-type(22) { margin-left: 0px; margin-top: 86.73px; }
          .hex-wrapper:nth-of-type(23) { margin-left: 112.5px; margin-top: 86.73px; }
          .hex-wrapper:nth-of-type(24) { margin-left: 225px; margin-top: 86.73px; }
          .hex-wrapper:nth-of-type(25) { margin-left: 337.5px; margin-top: 86.73px; }
          .hex-wrapper:nth-of-type(26) { margin-left: 450px; margin-top: 86.73px; }
        }

        @media (max-width: 768px) {
          .loader {
            height: 350px;
          }

          .hex {
            width: 60px;
            height: 34.64px;
          }
          
          .hex:before,
          .hex:after {
            width: 60px;
            height: 34.64px;
          }

          .hex-wrapper :global(.tech-icon) {
            width: 24px;
            height: 24px;
          }

          .hex-wrapper:nth-of-type(1) { margin-left: -225px; margin-top: -57.82px; }
          .hex-wrapper:nth-of-type(2) { margin-left: -150px; margin-top: -57.82px; }
          .hex-wrapper:nth-of-type(3) { margin-left: -75px; margin-top: -57.82px; }
          .hex-wrapper:nth-of-type(4) { margin-left: 0px; margin-top: -57.82px; }
          .hex-wrapper:nth-of-type(5) { margin-left: 75px; margin-top: -57.82px; }
          .hex-wrapper:nth-of-type(6) { margin-left: 150px; margin-top: -57.82px; }
          .hex-wrapper:nth-of-type(7) { margin-left: 225px; margin-top: -57.82px; }
          .hex-wrapper:nth-of-type(8) { margin-left: 300px; margin-top: -57.82px; }
          
          .hex-wrapper:nth-of-type(9) { margin-left: -262.5px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(10) { margin-left: -187.5px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(11) { margin-left: -112.5px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(12) { margin-left: -37.5px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(13) { margin-left: 37.5px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(14) { margin-left: 112.5px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(15) { margin-left: 187.5px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(16) { margin-left: 262.5px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(17) { margin-left: 337.5px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(18) { margin-left: 412.5px; margin-top: 0px; }
          
          .hex-wrapper:nth-of-type(19) { margin-left: -225px; margin-top: 57.82px; }
          .hex-wrapper:nth-of-type(20) { margin-left: -150px; margin-top: 57.82px; }
          .hex-wrapper:nth-of-type(21) { margin-left: -75px; margin-top: 57.82px; }
          .hex-wrapper:nth-of-type(22) { margin-left: 0px; margin-top: 57.82px; }
          .hex-wrapper:nth-of-type(23) { margin-left: 75px; margin-top: 57.82px; }
          .hex-wrapper:nth-of-type(24) { margin-left: 150px; margin-top: 57.82px; }
          .hex-wrapper:nth-of-type(25) { margin-left: 225px; margin-top: 57.82px; }
          .hex-wrapper:nth-of-type(26) { margin-left: 300px; margin-top: 57.82px; }
        }
      `}</style>
    </div>
  );
}

export default Technologies;