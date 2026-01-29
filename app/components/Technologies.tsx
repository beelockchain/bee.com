"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
const [buttonsEnabled, setButtonsEnabled] = useState(false);


useGSAP(
  () => {
    if (!sectionRef.current || !gridRef.current) return;

    const icons = gsap.utils.toArray<HTMLElement>(".tech-icon");

    gsap.fromTo(
      icons,
      { scale: 0.3, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        stagger: {
          each: 0.12,
          from: "start",
        },
     scrollTrigger: {
  trigger: sectionRef.current,
  start: "top top",
  end: () => "+=" + (gridRef.current?.offsetHeight || 1600),
  scrub: true,
  pin: true,
  anticipatePin: 1,
  onLeave: (self) => {
    self.disable();
    self.animation?.progress(1);
  },
},
      }
    );
  },
  { scope: sectionRef }
);


  // 53 icons total
const techStack = [
  // ===== FRONTEND =====
  { name: "angular", icon: "assets/icons/front/angular-front.svg", category: "frontend" },
  { name: "bootstrap", icon: "assets/icons/front/bootstrap-front.svg", category: "frontend" },
  { name: "css", icon: "assets/icons/front/css-front.svg", category: "frontend" },
  { name: "kotlin", icon: "assets/icons/mobile/kotlin-mobile.svg", category: "mobile" },
  { name: "jquery", icon: "assets/icons/front/jquery-front.svg", category: "frontend" },
      { name: "appium", icon: "assets/icons/qa/appium-qa.svg", category: "qa" },
  { name: "meteorjs", icon: "assets/icons/front/meteorjs-front.svg", category: "frontend" },
    { name: "cassandra", icon: "assets/icons/database/cassandra-database.svg", category: "database" },
  { name: "after-effects", icon: "assets/icons/design/ae-design.svg", category: "design" },

 
  { name: "nodejs", icon: "assets/icons/backend/nodejs-backend.svg", category: "backend" },
  { name: "python", icon: "assets/icons/backend/python-backend.svg", category: "backend" },
  { name: "ruby", icon: "assets/icons/backend/ruby-backend.svg", category: "backend" },
  { name: "rust", icon: "assets/icons/backend/rust-backend.svg", category: "backend" },
  // ===== BACKEND =====
  { name: "dotnet", icon: "assets/icons/backend/dotnet-backend.svg", category: "backend" },
  { name: "expressjs", icon: "assets/icons/backend/expressjs-backend.svg", category: "backend" },
  { name: "golang", icon: "assets/icons/backend/golang-backend.svg", category: "backend" },
  { name: "java", icon: "assets/icons/backend/java-backend.svg", category: "backend" },
  { name: "laravel", icon: "assets/icons/backend/laravel-backend.svg", category: "backend" },
  { name: "nestjs", icon: "assets/icons/backend/nestjs-backend.svg", category: "backend" },
 { name: "react", icon: "assets/icons/front/react-front.svg", category: "frontend" },
  { name: "svelte", icon: "assets/icons/front/svelte-front.svg", category: "frontend" },
  { name: "tailwind", icon: "assets/icons/front/tailwind-css-front.svg", category: "frontend" },
  { name: "vuejs", icon: "assets/icons/front/vuejs-front.svg", category: "frontend" },

  // ===== DATABASE =====
  { name: "mongodb", icon: "assets/icons/database/mongodb-database.svg", category: "database" },
  { name: "nextjs", icon: "assets/icons/front/nextjs-front.svg", category: "frontend" },
  { name: "emberjs", icon: "assets/icons/front/emberjs-front.svg", category: "frontend" },
  { name: "html", icon: "assets/icons/front/html-front.svg", category: "frontend" },
  { name: "javascript", icon: "assets/icons/front/javascript-front.svg", category: "frontend" },
    { name: "sketch", icon: "assets/icons/design/sketch-design.svg", category: "design" },
  { name: "spline", icon: "assets/icons/design/spline-design.svg", category: "design" },
  { name: "webflow", icon: "assets/icons/design/webflow-design.svg", category: "design" },
  { name: "xd", icon: "assets/icons/design/xd-design.svg", category: "design" },

  // ===== DESIGN =====
  { name: "illustrator", icon: "assets/icons/design/ai-design.svg", category: "design" },
  { name: "framer", icon: "assets/icons/design/framer-design.svg", category: "design" },
  { name: "lottie", icon: "assets/icons/design/lottie-design.svg", category: "design" },
  { name: "photoshop", icon: "assets/icons/design/photoshop-design.svg", category: "design" },
  { name: "mysql", icon: "assets/icons/database/mysql-database.svg", category: "database" },
  { name: "oracle", icon: "assets/icons/database/oracle-database.svg", category: "database" },
  { name: "postgresql", icon: "assets/icons/database/postgresql-database.svg", category: "database" },
  { name: "redis", icon: "assets/icons/database/redis-database.svg", category: "database" },

  // ===== MOBILE =====
  { name: "android", icon: "assets/icons/mobile/android-mobile.svg", category: "mobile" },
  { name: "flutter", icon: "assets/icons/mobile/flutter-mobile.svg", category: "mobile" },
  { name: "ionic", icon: "assets/icons/mobile/ionic-mobile.svg", category: "mobile" },
  { name: "ios", icon: "assets/icons/mobile/ios-mobile.svg", category: "mobile" },
  { name: "jetpack", icon: "assets/icons/mobile/jetpack-mobile.svg", category: "mobile" },


  { name: "jmeter", icon: "assets/icons/qa/jmeter-qa.svg", category: "qa" },
  { name: "katalon", icon: "assets/icons/qa/katalon-qa.svg", category: "qa" },
  { name: "pwa", icon: "assets/icons/mobile/pwa-mobile.svg", category: "mobile" },


  // ===== QA =====
  { name: "react-native", icon: "assets/icons/mobile/reactjs-mobile.svg", category: "mobile" },
  { name: "swift", icon: "assets/icons/mobile/swift-mobile.svg", category: "mobile" },
  { name: "xamarin", icon: "assets/icons/mobile/xamarin-mobile.svg", category: "mobile" },
  { name: "lambda", icon: "assets/icons/qa/lambda-qa.svg", category: "qa" },
  { name: "selenium", icon: "assets/icons/qa/selenium-qa.svg", category: "qa" },
];


  const categories = [
    { key: null as string | null, label: "All" },
    { key: "design" as string, label: "Design Tools" },
    { key: "frontend" as string, label: "Frontend Tools" },
    { key: "backend" as string, label: "Backend Tools" },
    { key: "database" as string, label: "Database" },
    { key: "mobile" as string, label: "Mobile App" },
    { key: "qa" as string, label: "Quality Assurance" },
  ];

  // Count technologies per category
  const getCategoryCount = (categoryKey: string | null) => {
    if (!categoryKey) return techStack.length;
    return techStack.filter(tech => tech.category === categoryKey).length;
  };

  return (
    <div>
<div className="w-full bg-white py-0">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Heading */}
          <h2 className="text-center text-black text-[20px] sm:text-[18px] md:text-[26px] xl:text-[40px] lg:text-[40px] font-semibold font-['Poppins'] leading-snug mb-4">
            Core Technologies We Implemented
          </h2>

          {/* Subheading */}
          <p className="text-center text-black text-[14px] sm:text-[18px] md:text-[20px] xl:text-[20px] lg:text-[20px] font-normal font-['Poppins'] mb-8">
            Unlock new opportunities with tailored digital transformation strategies
          </p>

          {/* Category Buttons */}
<div className="flex flex-wrap justify-center gap-2 lg:gap-4 top-gap hidden md:flex">            {categories.map((category) => (
              <button
                key={category.key || 'all'}
                onClick={() => setActiveCategory(category.key)}
                className={`cursor-pointer filter-btn 
                  h-8 px-4 py-2 sm:h-9 sm:px-5 sm:py-2 md:h-10 md:px-6 md:py-2 lg:h-10 lg:px-6 lg:py-2 
                  rounded-[30px] outline outline-1
                  text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] font-normal text-black font-['Poppins']
                  transition-all duration-300
                  ${activeCategory === category.key 
                    ? "bg-yellow-400 outline-yellow-400 shadow-md" 
                    : "bg-white outline-yellow-400 hover:bg-yellow-200"}`}
              >
                {category.label}
                {/* ({getCategoryCount(category.key)}) */}
              </button>
            ))}
          </div>
        </div>
      </div>
<div className="h-[5px]"></div>

  
    <div
      ref={sectionRef}
  className="w-full min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12"
    >
     
      <div ref={gridRef} className="loader">
        {techStack.map((tech, i) => {
          const isActive = activeCategory === null || activeCategory === tech.category;
          
          // Calculate staggered animation progress for each icon
          const totalIcons = 53;
          const delayPerIcon = 1 / totalIcons;
          const iconStartProgress = i * delayPerIcon;
          const iconEndProgress = iconStartProgress + 0.3; // Each icon animates over 30% of scroll
          
          let iconProgress = 0;
          if (scrollProgress >= iconStartProgress) {
            iconProgress = Math.min(1, (scrollProgress - iconStartProgress) / 0.3);
          }
          
          const scale = 0.3 + (iconProgress * 0.7); // Start at 0.3, end at 1
          const opacity = iconProgress;

          return (
            <div
              key={i}
              className={`hex-wrapper ${!isActive ? "filter-inactive" : ""}`}
            >
              <div 
                className="hex"
                style={{
                  transform: `scale(${isActive ? 1 : 0.9})`,
                  opacity: isActive ? 1 : 0.3,
                }}
              >
                <div className="hex-content">
                 <div className="tech-icon">
                    <img src={tech.icon} alt={tech.name} width={50} height={50} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
{/* Mobile view only */}
<div className="block md:hidden px-2">
  {["frontend", "backend", "design", "database", "qa"].map((category) => {
    const tools = techStack.filter((tech) => tech.category === category);

    // Find the label for this category
    const categoryLabel = categories.find((c) => c.key === category)?.label || category;

    return (
      <div key={category} className="mb-6">
        {/* Heading */}
        <h2 className="text-md font-bold mb-3 capitalize">{categoryLabel}</h2>

        {/* Tools */}
        <div className="flex flex-wrap gap-3">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-md shadow-sm"
            >
              <img src={tool.icon} alt={tool.name} className="w-10 h-10" />
            </div>
          ))}
        </div>
      </div>
    );
  })}
</div>


      <style jsx>{`
      @media (max-width: 767px) {
  .loader {
    display: none !important;
  }
}
      .top-gap{
      margin-bottom: 200px;
      }
          .loader {
      position: relative;
      width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }


        .hex-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
.hex {
  position: relative;
  width: 70px;
  height: 40.4px;
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
  width: 70px;
  height: 40.4px;
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

        .tech-icon {
          transform-origin: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tech-icon img {
          filter: grayscale(0%);
          transition: filter 0.3s ease;
        }

        .hex-wrapper:hover .tech-icon img {
          filter: grayscale(0%) brightness(1.1);
        }

        /* Row 1 - 8 hexagons */
  .hex-wrapper:nth-of-type(1) { margin-left: -560px; margin-top: -216px; }
.hex-wrapper:nth-of-type(2) { margin-left: -420px; margin-top: -216px; }
.hex-wrapper:nth-of-type(3) { margin-left: -280px; margin-top: -216px; }
.hex-wrapper:nth-of-type(4) { margin-left: -140px; margin-top: -216px; }
.hex-wrapper:nth-of-type(5) { margin-left: 0px;    margin-top: -216px; }
.hex-wrapper:nth-of-type(6) { margin-left: 140px;  margin-top: -216px; }
.hex-wrapper:nth-of-type(7) { margin-left: 280px;  margin-top: -216px; }
.hex-wrapper:nth-of-type(8) { margin-left: 420px;  margin-top: -216px; }
.hex-wrapper:nth-of-type(9) { margin-left: 560px;  margin-top: -216px; }


        /* Row 2 - 10 hexagons */
.hex-wrapper:nth-of-type(10) { margin-left: -630px; margin-top: -108px; }
.hex-wrapper:nth-of-type(11) { margin-left: -490px; margin-top: -108px; }
.hex-wrapper:nth-of-type(12) { margin-left: -350px; margin-top: -108px; }
.hex-wrapper:nth-of-type(13) { margin-left: -210px; margin-top: -108px; }
.hex-wrapper:nth-of-type(14) { margin-left: -70px;  margin-top: -108px; }
.hex-wrapper:nth-of-type(15) { margin-left: 70px;   margin-top: -108px; }
.hex-wrapper:nth-of-type(16) { margin-left: 210px;  margin-top: -108px; }
.hex-wrapper:nth-of-type(17) { margin-left: 350px;  margin-top: -108px; }
.hex-wrapper:nth-of-type(18) { margin-left: 490px;  margin-top: -108px; }
.hex-wrapper:nth-of-type(19) { margin-left: 630px;  margin-top: -108px; }

        /* Row 3 - 9 hexagons */
.hex-wrapper:nth-of-type(20) { margin-left: -560px; margin-top: 0px; }
.hex-wrapper:nth-of-type(21) { margin-left: -420px; margin-top: 0px; }
.hex-wrapper:nth-of-type(22) { margin-left: -280px; margin-top: 0px; }
.hex-wrapper:nth-of-type(23) { margin-left: -140px; margin-top: 0px; }
.hex-wrapper:nth-of-type(24) { margin-left: 0px;    margin-top: 0px; }
.hex-wrapper:nth-of-type(25) { margin-left: 140px;  margin-top: 0px; }
.hex-wrapper:nth-of-type(26) { margin-left: 280px;  margin-top: 0px; }
.hex-wrapper:nth-of-type(27) { margin-left: 420px;  margin-top: 0px; }
.hex-wrapper:nth-of-type(28) { margin-left: 560px;  margin-top: 0px; }

        
        /* Row 4 - 10 hexagons */
.hex-wrapper:nth-of-type(29) { margin-left: -630px; margin-top: 108px; }
.hex-wrapper:nth-of-type(30) { margin-left: -490px; margin-top: 108px; }
.hex-wrapper:nth-of-type(31) { margin-left: -350px; margin-top: 108px; }
.hex-wrapper:nth-of-type(32) { margin-left: -210px; margin-top: 108px; }
.hex-wrapper:nth-of-type(33) { margin-left: -70px;  margin-top: 108px; }
.hex-wrapper:nth-of-type(34) { margin-left: 70px;   margin-top: 108px; }
.hex-wrapper:nth-of-type(35) { margin-left: 210px;  margin-top: 108px; }
.hex-wrapper:nth-of-type(36) { margin-left: 350px;  margin-top: 108px; }
.hex-wrapper:nth-of-type(37) { margin-left: 490px;  margin-top: 108px; }
.hex-wrapper:nth-of-type(38) { margin-left: 630px;  margin-top: 108px; }

        /* Row 5 - 8 hexagons */
.hex-wrapper:nth-of-type(39) { margin-left: -560px; margin-top: 216px; }
.hex-wrapper:nth-of-type(40) { margin-left: -420px; margin-top: 216px; }
.hex-wrapper:nth-of-type(41) { margin-left: -280px; margin-top: 216px; }
.hex-wrapper:nth-of-type(42) { margin-left: -140px; margin-top: 216px; }
.hex-wrapper:nth-of-type(43) { margin-left: 0px;    margin-top: 216px; }
.hex-wrapper:nth-of-type(44) { margin-left: 140px;  margin-top: 216px; }
.hex-wrapper:nth-of-type(45) { margin-left: 280px;  margin-top: 216px; }
.hex-wrapper:nth-of-type(46) { margin-left: 420px;  margin-top: 216px; }
.hex-wrapper:nth-of-type(47) { margin-left: 560px;  margin-top: 216px; }

.hex-wrapper:nth-of-type(48) { margin-left: -350px; margin-top: 324px; } 
.hex-wrapper:nth-of-type(49) { margin-left: -210px; margin-top: 324px; } 
.hex-wrapper:nth-of-type(50) { margin-left: -70px; margin-top: 324px; } 
.hex-wrapper:nth-of-type(51) { margin-left: 70px; margin-top: 324px; } 
.hex-wrapper:nth-of-type(52) { margin-left: 210px; margin-top: 324px; } 
.hex-wrapper:nth-of-type(53) { margin-left: 350px; margin-top: 324px; }


        @media (max-width: 1600px) {
          .loader {
            height: 450px;
          }
        .hex {
  width: 80px;
  height: 46.19px;
}

.hex:before,
.hex:after {
  width: 80px;
  height: 46.19px;
}

        }

        @media (max-width: 768px) {
          .loader {
            height: 350px;
          }
          .hex {
    width: 40px;        /* smaller hex width */
    height: 23.09px;    /* height scales proportionally */
  }
  .hex:before,
  .hex:after {
    width: 40px;
    height: 23.09px;
  }
  .tech-icon img {
    width: 16px;       /* smaller icons */
    height: 16px;
  }
        }

        /* Tablet view (smaller hexes than desktop) */
@media (max-width: 1024px) and (min-width: 769px) {
  .loader {
    height: 400px; /* adjust as needed */
  }

  .hex {
    width: 50px;      /* smaller hex width */
    height: 28.87px;  /* proportional height */
  }

  .hex:before,
  .hex:after {
    width: 50px;
    height: 28.87px;
  }

  .tech-icon img {
    width: 24px;  /* smaller icon */
    height: 24px;
  }
}

      `}</style>
    </div>
      </div>
  );
};

export default Technologies;