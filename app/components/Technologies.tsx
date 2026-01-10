"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const hexes = gsap.utils.toArray(".hex");

    gsap.fromTo(
      hexes,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: {
          each: 0.025,
          from: "start",
        },
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 75%",
          end: "bottom 30%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 overflow-hidden px-4">
      
      <div ref={gridRef} className="loader">
        {Array.from({ length: 32 }).map((_, i) => (
          <div key={i} className="hex" />
        ))}
      </div>

      <style jsx>{`
        .loader {
          position: relative;
          width: 100%;
          max-width: 1600px;
          height: 450px;
          margin: 0 auto;
        }

        .hex {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100px;
          height: 57.74px;
          background-color: #aca9a9;
          transform: translate(-50%, -50%);
        }

        .hex:before,
        .hex:after {
          content: '';
          position: absolute;
          width: 100px;
          height: 57.74px;
          background-color: #aca9a9;
        }

        .hex:before {
          transform: rotate(60deg);
        }

        .hex:after {
          transform: rotate(-60deg);
        }

        /* Row 1 - Top (10 hexagons) */
        .hex:nth-of-type(1) { margin-left: -562.5px; margin-top: -108.6px; }
        .hex:nth-of-type(2) { margin-left: -437.5px; margin-top: -108.6px; }
        .hex:nth-of-type(3) { margin-left: -312.5px; margin-top: -108.6px; }
        .hex:nth-of-type(4) { margin-left: -187.5px; margin-top: -108.6px; }
        .hex:nth-of-type(5) { margin-left: -62.5px; margin-top: -108.6px; }
        .hex:nth-of-type(6) { margin-left: 62.5px; margin-top: -108.6px; }
        .hex:nth-of-type(7) { margin-left: 187.5px; margin-top: -108.6px; }
        .hex:nth-of-type(8) { margin-left: 312.5px; margin-top: -108.6px; }
        .hex:nth-of-type(9) { margin-left: 437.5px; margin-top: -108.6px; }
        .hex:nth-of-type(10) { margin-left: 562.5px; margin-top: -108.6px; }
        
        /* Row 2 - Middle (12 hexagons) */
        .hex:nth-of-type(11) { margin-left: -625px; margin-top: 0px; }
        .hex:nth-of-type(12) { margin-left: -500px; margin-top: 0px; }
        .hex:nth-of-type(13) { margin-left: -375px; margin-top: 0px; }
        .hex:nth-of-type(14) { margin-left: -250px; margin-top: 0px; }
        .hex:nth-of-type(15) { margin-left: -125px; margin-top: 0px; }
        .hex:nth-of-type(16) { margin-left: 0px; margin-top: 0px; }
        .hex:nth-of-type(17) { margin-left: 125px; margin-top: 0px; }
        .hex:nth-of-type(18) { margin-left: 250px; margin-top: 0px; }
        .hex:nth-of-type(19) { margin-left: 375px; margin-top: 0px; }
        .hex:nth-of-type(20) { margin-left: 500px; margin-top: 0px; }
        .hex:nth-of-type(21) { margin-left: 625px; margin-top: 0px; }
        .hex:nth-of-type(22) { margin-left: 750px; margin-top: 0px; }
        
        /* Row 3 - Bottom (10 hexagons) */
        .hex:nth-of-type(23) { margin-left: -562.5px; margin-top: 108.6px; }
        .hex:nth-of-type(24) { margin-left: -437.5px; margin-top: 108.6px; }
        .hex:nth-of-type(25) { margin-left: -312.5px; margin-top: 108.6px; }
        .hex:nth-of-type(26) { margin-left: -187.5px; margin-top: 108.6px; }
        .hex:nth-of-type(27) { margin-left: -62.5px; margin-top: 108.6px; }
        .hex:nth-of-type(28) { margin-left: 62.5px; margin-top: 108.6px; }
        .hex:nth-of-type(29) { margin-left: 187.5px; margin-top: 108.6px; }
        .hex:nth-of-type(30) { margin-left: 312.5px; margin-top: 108.6px; }
        .hex:nth-of-type(31) { margin-left: 437.5px; margin-top: 108.6px; }
        .hex:nth-of-type(32) { margin-left: 562.5px; margin-top: 108.6px; }

        @media (max-width: 1400px) {
          .hex {
            width: 80px;
            height: 46.19px;
          }
          
          .hex:before,
          .hex:after {
            width: 80px;
            height: 46.19px;
          }

          .hex:nth-of-type(1) { margin-left: -450px; margin-top: -86.88px; }
          .hex:nth-of-type(2) { margin-left: -350px; margin-top: -86.88px; }
          .hex:nth-of-type(3) { margin-left: -250px; margin-top: -86.88px; }
          .hex:nth-of-type(4) { margin-left: -150px; margin-top: -86.88px; }
          .hex:nth-of-type(5) { margin-left: -50px; margin-top: -86.88px; }
          .hex:nth-of-type(6) { margin-left: 50px; margin-top: -86.88px; }
          .hex:nth-of-type(7) { margin-left: 150px; margin-top: -86.88px; }
          .hex:nth-of-type(8) { margin-left: 250px; margin-top: -86.88px; }
          .hex:nth-of-type(9) { margin-left: 350px; margin-top: -86.88px; }
          .hex:nth-of-type(10) { margin-left: 450px; margin-top: -86.88px; }
          
          .hex:nth-of-type(11) { margin-left: -500px; margin-top: 0px; }
          .hex:nth-of-type(12) { margin-left: -400px; margin-top: 0px; }
          .hex:nth-of-type(13) { margin-left: -300px; margin-top: 0px; }
          .hex:nth-of-type(14) { margin-left: -200px; margin-top: 0px; }
          .hex:nth-of-type(15) { margin-left: -100px; margin-top: 0px; }
          .hex:nth-of-type(16) { margin-left: 0px; margin-top: 0px; }
          .hex:nth-of-type(17) { margin-left: 100px; margin-top: 0px; }
          .hex:nth-of-type(18) { margin-left: 200px; margin-top: 0px; }
          .hex:nth-of-type(19) { margin-left: 300px; margin-top: 0px; }
          .hex:nth-of-type(20) { margin-left: 400px; margin-top: 0px; }
          .hex:nth-of-type(21) { margin-left: 500px; margin-top: 0px; }
          .hex:nth-of-type(22) { margin-left: 600px; margin-top: 0px; }
          
          .hex:nth-of-type(23) { margin-left: -450px; margin-top: 86.88px; }
          .hex:nth-of-type(24) { margin-left: -350px; margin-top: 86.88px; }
          .hex:nth-of-type(25) { margin-left: -250px; margin-top: 86.88px; }
          .hex:nth-of-type(26) { margin-left: -150px; margin-top: 86.88px; }
          .hex:nth-of-type(27) { margin-left: -50px; margin-top: 86.88px; }
          .hex:nth-of-type(28) { margin-left: 50px; margin-top: 86.88px; }
          .hex:nth-of-type(29) { margin-left: 150px; margin-top: 86.88px; }
          .hex:nth-of-type(30) { margin-left: 250px; margin-top: 86.88px; }
          .hex:nth-of-type(31) { margin-left: 350px; margin-top: 86.88px; }
          .hex:nth-of-type(32) { margin-left: 450px; margin-top: 86.88px; }
        }

        @media (max-width: 1024px) {
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

          .hex:nth-of-type(1) { margin-left: -337.5px; margin-top: -65.16px; }
          .hex:nth-of-type(2) { margin-left: -262.5px; margin-top: -65.16px; }
          .hex:nth-of-type(3) { margin-left: -187.5px; margin-top: -65.16px; }
          .hex:nth-of-type(4) { margin-left: -112.5px; margin-top: -65.16px; }
          .hex:nth-of-type(5) { margin-left: -37.5px; margin-top: -65.16px; }
          .hex:nth-of-type(6) { margin-left: 37.5px; margin-top: -65.16px; }
          .hex:nth-of-type(7) { margin-left: 112.5px; margin-top: -65.16px; }
          .hex:nth-of-type(8) { margin-left: 187.5px; margin-top: -65.16px; }
          .hex:nth-of-type(9) { margin-left: 262.5px; margin-top: -65.16px; }
          .hex:nth-of-type(10) { margin-left: 337.5px; margin-top: -65.16px; }
          
          .hex:nth-of-type(11) { margin-left: -375px; margin-top: 0px; }
          .hex:nth-of-type(12) { margin-left: -300px; margin-top: 0px; }
          .hex:nth-of-type(13) { margin-left: -225px; margin-top: 0px; }
          .hex:nth-of-type(14) { margin-left: -150px; margin-top: 0px; }
          .hex:nth-of-type(15) { margin-left: -75px; margin-top: 0px; }
          .hex:nth-of-type(16) { margin-left: 0px; margin-top: 0px; }
          .hex:nth-of-type(17) { margin-left: 75px; margin-top: 0px; }
          .hex:nth-of-type(18) { margin-left: 150px; margin-top: 0px; }
          .hex:nth-of-type(19) { margin-left: 225px; margin-top: 0px; }
          .hex:nth-of-type(20) { margin-left: 300px; margin-top: 0px; }
          .hex:nth-of-type(21) { margin-left: 375px; margin-top: 0px; }
          .hex:nth-of-type(22) { margin-left: 450px; margin-top: 0px; }
          
          .hex:nth-of-type(23) { margin-left: -337.5px; margin-top: 65.16px; }
          .hex:nth-of-type(24) { margin-left: -262.5px; margin-top: 65.16px; }
          .hex:nth-of-type(25) { margin-left: -187.5px; margin-top: 65.16px; }
          .hex:nth-of-type(26) { margin-left: -112.5px; margin-top: 65.16px; }
          .hex:nth-of-type(27) { margin-left: -37.5px; margin-top: 65.16px; }
          .hex:nth-of-type(28) { margin-left: 37.5px; margin-top: 65.16px; }
          .hex:nth-of-type(29) { margin-left: 112.5px; margin-top: 65.16px; }
          .hex:nth-of-type(30) { margin-left: 187.5px; margin-top: 65.16px; }
          .hex:nth-of-type(31) { margin-left: 262.5px; margin-top: 65.16px; }
          .hex:nth-of-type(32) { margin-left: 337.5px; margin-top: 65.16px; }
        }

        @media (max-width: 768px) {
          .loader {
            height: 280px;
          }

          .hex {
            width: 45px;
            height: 25.98px;
          }
          
          .hex:before,
          .hex:after {
            width: 45px;
            height: 25.98px;
          }

          .hex:nth-of-type(1) { margin-left: -253.13px; margin-top: -48.87px; }
          .hex:nth-of-type(2) { margin-left: -196.88px; margin-top: -48.87px; }
          .hex:nth-of-type(3) { margin-left: -140.63px; margin-top: -48.87px; }
          .hex:nth-of-type(4) { margin-left: -84.38px; margin-top: -48.87px; }
          .hex:nth-of-type(5) { margin-left: -28.13px; margin-top: -48.87px; }
          .hex:nth-of-type(6) { margin-left: 28.13px; margin-top: -48.87px; }
          .hex:nth-of-type(7) { margin-left: 84.38px; margin-top: -48.87px; }
          .hex:nth-of-type(8) { margin-left: 140.63px; margin-top: -48.87px; }
          .hex:nth-of-type(9) { margin-left: 196.88px; margin-top: -48.87px; }
          .hex:nth-of-type(10) { margin-left: 253.13px; margin-top: -48.87px; }
          
          .hex:nth-of-type(11) { margin-left: -281.25px; margin-top: 0px; }
          .hex:nth-of-type(12) { margin-left: -225px; margin-top: 0px; }
          .hex:nth-of-type(13) { margin-left: -168.75px; margin-top: 0px; }
          .hex:nth-of-type(14) { margin-left: -112.5px; margin-top: 0px; }
          .hex:nth-of-type(15) { margin-left: -56.25px; margin-top: 0px; }
          .hex:nth-of-type(16) { margin-left: 0px; margin-top: 0px; }
          .hex:nth-of-type(17) { margin-left: 56.25px; margin-top: 0px; }
          .hex:nth-of-type(18) { margin-left: 112.5px; margin-top: 0px; }
          .hex:nth-of-type(19) { margin-left: 168.75px; margin-top: 0px; }
          .hex:nth-of-type(20) { margin-left: 225px; margin-top: 0px; }
          .hex:nth-of-type(21) { margin-left: 281.25px; margin-top: 0px; }
          .hex:nth-of-type(22) { margin-left: 337.5px; margin-top: 0px; }
          
          .hex:nth-of-type(23) { margin-left: -253.13px; margin-top: 48.87px; }
          .hex:nth-of-type(24) { margin-left: -196.88px; margin-top: 48.87px; }
          .hex:nth-of-type(25) { margin-left: -140.63px; margin-top: 48.87px; }
          .hex:nth-of-type(26) { margin-left: -84.38px; margin-top: 48.87px; }
          .hex:nth-of-type(27) { margin-left: -28.13px; margin-top: 48.87px; }
          .hex:nth-of-type(28) { margin-left: 28.13px; margin-top: 48.87px; }
          .hex:nth-of-type(29) { margin-left: 84.38px; margin-top: 48.87px; }
          .hex:nth-of-type(30) { margin-left: 140.63px; margin-top: 48.87px; }
          .hex:nth-of-type(31) { margin-left: 196.88px; margin-top: 48.87px; }
          .hex:nth-of-type(32) { margin-left: 253.13px; margin-top: 48.87px; }
        }
      `}</style>
    </div>
  );
}

export default Technologies;