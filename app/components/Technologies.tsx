"use client";
import { useEffect, useRef ,useState} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
const sectionRef = useRef<HTMLDivElement>(null);
const gridRef = useRef<HTMLDivElement>(null);
const [activeCategory, setActiveCategory] = useState<string | null>(null);

useGSAP(
  () => {
    if (!sectionRef.current || !gridRef.current) return;

    const icons = gsap.utils.toArray(".tech-icon");

    gsap.fromTo(
      icons,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        stagger: {
          each: 0.15,     // ⏳ slow, sequential
          from: "start",  // ✅ starts from first
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1600",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      }
    );
  },
  {
    scope: sectionRef, // ✅ auto cleanup + scoped selectors
  }
);




  const techStack = [
    // Row 1 - 8 hexagons
    // Row 1
  { name: "react", icon: "assets/images/tech-icon1.png", category: "frontend" },
  { name: "nextjs", icon: "assets/images/tech-icon2.png", category: "frontend" },
  { name: "typescript", icon: "assets/images/tech-icon3.png", category: "frontend" },
  { name: "nodejs", icon: "assets/images/tech-icon4.png", category: "backend" },
  { name: "python", icon: "assets/images/tech-icon5.png", category: "backend" },
  { name: "mongodb", icon: "assets/images/tech-icon6.png", category: "database" },
  { name: "postgresql", icon: "assets/images/tech-icon7.png", category: "database" },
  { name: "docker", icon: "assets/images/tech-icon8.png", category: "devops" },
    
    // Row 2 - 10 hexagons
   { name: "react", icon: "assets/images/tech-icon1.png", category: "qa"  },
    { name: "nextjs", icon: "assets/images/tech-icon2.png", category: "mobile"  },
    { name: "typescript", icon: "assets/images/tech-icon3.png" , category: "design"  },
    { name: "nodejs", icon: "assets/images/tech-icon4.png", category: "backend"  },
    { name: "mongodb", icon: "assets/images/tech-icon6.png", category: "database"  },
    { name: "postgresql", icon: "assets/images/tech-icon7.png", category: "database"  },
    { name: "docker", icon: "assets/images/tech-icon8.png", category: "devops"  },
    { name: "react", icon: "assets/images/tech-icon1.png", category: "qa"  },
    { name: "nextjs", icon: "assets/images/tech-icon2.png", category: "mobile"  },
    
    // Row 3 - 8 hexagons
    { name: "typescript", icon: "assets/images/tech-icon3.png" , category: "design"  },
    { name: "nodejs", icon: "assets/images/tech-icon4.png", category: "backend"  },
    { name: "python", icon: "assets/images/tech-icon5.png", category: "backend"  },
    { name: "mongodb", icon: "assets/images/tech-icon6.png", category: "database"  },
    { name: "postgresql", icon: "assets/images/tech-icon7.png", category: "database"  },
    { name: "react", icon: "assets/images/tech-icon1.png", category: "qa"  },
    { name: "nextjs", icon: "assets/images/tech-icon2.png", category: "mobile"  },
    { name: "typescript", icon: "assets/images/tech-icon3.png", category: "design"  },
  ];
  const categories = [
  { key: "design", label: "Design Tools" },
  { key: "frontend", label: "Frontend Tools" },
  { key: "backend", label: "Backend Tools" },
  { key: "database", label: "Database" },
  { key: "mobile", label: "Mobile App" },
  { key: "qa", label: "Quality Assurance" },
];

  return (
<div
  ref={sectionRef}
  className="w-full min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden px-4 py-20"
>
          <div className="w-full bg-white py-0 lg:py-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-black text-[20px] sm:text-[18px] md:text-[26px]  xl:text-[40px] lg:text-[40px] font-semibold font-['Poppins'] leading-snug mb-4">
          Core Technologies We Implemented
        </h2>

        {/* Subheading */}
        <p className="text-center text-black text-[14px] sm:text-[18px] md:text-[20px]  xl:text-[20px] lg:text-[20px]  font-normal font-['Poppins'] mb-8">
          Unlock new opportunities with tailored digital transformation strategies
        </p>

        {/* Category Buttons */}
<div className="flex flex-wrap justify-center gap-2 lg:gap-4 lg:mb-12 mb-2">
  {categories.map((category) => (
    <button
      key={category.key}
      onClick={() => setActiveCategory(category.key)}
     className={`cursor-pointer filter-btn 
  h-8 px-4 py-2           /* default: mobile / xs */
  sm:h-9 sm:px-5 sm:py-2  /* small screens >= 640px */
  md:h-10 md:px-6 md:py-2 /* medium screens >= 768px */
  lg:h-10 lg:px-6 lg:py-2 /* large screens >= 1024px */
  rounded-[30px] outline outline-1
  text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] font-normal text-black font-['Poppins']
  transition-colors duration-300
  ${activeCategory === category.key 
      ? "bg-yellow-400 outline-yellow-400" 
      : "bg-white outline-yellow-400 hover:bg-yellow-200"}`}

    >
      {category.label}
    </button>
  ))}
</div>
      </div>
    </div>
     

      <div ref={gridRef} className="loader">
      {techStack.map((tech, i) => {
 const isActive = activeCategory === tech.category;


  return (
   <div
  key={i}
  className={`hex-wrapper ${
    activeCategory
      ? isActive
        ? "active"
        : "inactive"
      : ""
  }`}
>
      <div className="hex">
        <div className="hex-content">
          <div className="tech-icon">
            <Image src={tech.icon} alt={tech.name} width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
})}

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
       

/* Active hex – full dark highlight */
.hex-wrapper.active .hex,
.hex-wrapper.active .hex::before,
.hex-wrapper.active .hex::after {
  background: #c6c6c6;              /* full dark hex */
}

.hex-wrapper.active .hex {
  transform: scale(1.12);
  z-index: 5;
}

/* Hover works ONLY when not active */
.hex-wrapper:not(.active) .hex:hover {
  transform: scale(1.1);
  background: #e5e7eb;
}

.hex-wrapper:not(.active) .hex:hover::befor


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
        
        /* Row 3 - Bottom (8 hexagons) */
        .hex-wrapper:nth-of-type(18) { margin-left: -525px; margin-top: 135px; }
        .hex-wrapper:nth-of-type(19) { margin-left: -350px; margin-top: 135px; }
        .hex-wrapper:nth-of-type(20) { margin-left: -175px; margin-top: 135px; }
        .hex-wrapper:nth-of-type(21) { margin-left: 0px; margin-top: 135px; }
        .hex-wrapper:nth-of-type(22) { margin-left: 175px; margin-top: 135px; }
        .hex-wrapper:nth-of-type(23) { margin-left: 350px; margin-top: 135px; }
        .hex-wrapper:nth-of-type(24) { margin-left: 525px; margin-top: 135px; }
        .hex-wrapper:nth-of-type(25) { margin-left: 700px; margin-top: 135px; }

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
          
          .hex-wrapper:nth-of-type(18) { margin-left: -412.5px; margin-top: 106.05px; }
          .hex-wrapper:nth-of-type(19) { margin-left: -275px; margin-top: 106.05px; }
          .hex-wrapper:nth-of-type(20) { margin-left: -137.5px; margin-top: 106.05px; }
          .hex-wrapper:nth-of-type(21) { margin-left: 0px; margin-top: 106.05px; }
          .hex-wrapper:nth-of-type(22) { margin-left: 137.5px; margin-top: 106.05px; }
          .hex-wrapper:nth-of-type(23) { margin-left: 275px; margin-top: 106.05px; }
          .hex-wrapper:nth-of-type(24) { margin-left: 412.5px; margin-top: 106.05px; }
          .hex-wrapper:nth-of-type(25) { margin-left: 550px; margin-top: 106.05px; }
        }

        @media (max-width: 2560px) {
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
          
          .hex-wrapper:nth-of-type(18) { margin-left: -337.5px; margin-top: 86.73px; }
          .hex-wrapper:nth-of-type(19) { margin-left: -225px; margin-top: 86.73px; }
          .hex-wrapper:nth-of-type(20) { margin-left: -112.5px; margin-top: 86.73px; }
          .hex-wrapper:nth-of-type(21) { margin-left: 0px; margin-top: 86.73px; }
          .hex-wrapper:nth-of-type(22) { margin-left: 112.5px; margin-top: 86.73px; }
          .hex-wrapper:nth-of-type(23) { margin-left: 225px; margin-top: 86.73px; }
          .hex-wrapper:nth-of-type(24) { margin-left: 337.5px; margin-top: 86.73px; }
          .hex-wrapper:nth-of-type(25) { margin-left: 450px; margin-top: 86.73px; }
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
          
          .hex-wrapper:nth-of-type(18) { margin-left: -225px; margin-top: 57.82px; }
          .hex-wrapper:nth-of-type(19) { margin-left: -150px; margin-top: 57.82px; }
          .hex-wrapper:nth-of-type(20) { margin-left: -75px; margin-top: 57.82px; }
          .hex-wrapper:nth-of-type(21) { margin-left: 0px; margin-top: 57.82px; }
          .hex-wrapper:nth-of-type(22) { margin-left: 75px; margin-top: 57.82px; }
          .hex-wrapper:nth-of-type(23) { margin-left: 150px; margin-top: 57.82px; }
          .hex-wrapper:nth-of-type(24) { margin-left: 225px; margin-top: 57.82px; }
          .hex-wrapper:nth-of-type(25) { margin-left: 300px; margin-top: 57.82px; }
        }
      `}</style>
    </div>
  );
}

export default Technologies;