"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LlmTechnologies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const normalizeAssetPath = (path: string) =>
    path.startsWith("/") ? path : `/${path}`;

  useGSAP(
    () => {
      if (!sectionRef.current || !gridRef.current) return;

      const mediaQuery = gsap.matchMedia();

      mediaQuery.add("(min-width: 1024px)", () => {
        const icons = gsap.utils.toArray<HTMLElement>(".tech-icon");

        gsap.fromTo(
          icons,
          { scale: 0.2, opacity: 0 },
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
              start: "top 75%",
              end: () =>
                "+=" + Math.max(gridRef.current?.offsetHeight || 0, 500),
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );
      });

      return () => mediaQuery.revert();
    },
    { scope: sectionRef },
  );

  // Default layout - 3 rows with mixed technologies (27 total)
  const defaultLayout = [
    // Row 1 - 9 hexagons
    {
      name: "react",
      icon: `assets/images/llm/icons/Foundation/icon1.png`,
      category: "Foundation Models & APIs",
    },
    {
      name: "mongodb",
      icon: `assets/images/llm/icons/Framework/icon1.png`,
      category: "AI Frameworks",
    },

    {
      name: "nodejs",
      icon: `assets/images/llm/icons/VectorDatabases/icon1.png`,
      category: "Vector Databases (RAG)",
    },
    {
      name: "illustrator",
      icon: `assets/images/llm/icons/Devops/icon1.png`,
      category: "Devops",
    },
    {
      name: "flutter",
      icon: `assets/images/llm/icons/Databases/icon1.png`,
      category: "Database",
    },
    {
      name: "selenium",
      icon: `assets/images/llm/icons/Databases/icon2.png`,
      category: "Database",
    },

    {
      name: "angular",
      icon: `assets/images/llm/icons/Databases/icon3.png`,
      category: "DevOps & Deployment",
    },
    {
      name: "python",
      icon: `assets/images/llm/icons/Databases/icon4.png`,
      category: "Programming Languages",
    },
    {
      name: "photoshop",
      icon: `assets/images/llm/icons/Devops/icon2.png`,
      category: "Databases & Storage",
    },

    // Row 2 - 10 hexagons
    {
      name: "postgresql",
      icon: `assets/images/llm/icons/MLOps/icon1.png`,
      category: "NLP Libraries",
    },
    {
      name: "react-native",
      icon: `assets/images/llm/icons/MLOps/icon2.png`,
      category: "LLMs",
    },
    {
      name: "appium",
      icon: `assets/images/llm/icons/MLOps/icon3.png`,
      category: "LLMs",
    },
    {
      name: "vuejs",
      icon: `assets/images/llm/icons/Framework/icon5.png`,
      category: "AI Frameworks",
    },

    {
      name: "java",
      icon: `assets/images/llm/icons/Framework/icon2.png`,
      category: "AI Frameworks",
    },
    {
      name: "framer",
      icon: `assets/images/llm/icons/nlp/icon1.png`,
      category: "NLP Libraries",
    },
    {
      name: "mysql",
      icon: `assets/images/llm/icons/nlp/icon2.png`,
      category: "NLP Libraries",
    },
    {
      name: "android",
      icon: `assets/images/llm/icons/nlp/icon3.png`,
      category: "AI Frameworks",
    },

    {
      name: "jmeter",
      icon: `assets/images/llm/icons/Foundation/icon2.png`,
      category: "Foundation Models & APIs",
    },
    {
      name: "nextjs",
      icon: `assets/images/llm/icons/Foundation/icon3.png`,
      category: "Foundation Models & APIs",
    },
    // Row 3 - 8 hexagons
    {
      name: "golang",
      icon: `assets/images/llm/icons/Foundation/icon4.png`,
      category: "Foundation Models & APIs",
    },

    {
      name: "redis",
      icon: `assets/images/llm/icons/Foundation/icon7.png`,
      category: "Foundation Models & APIs",
    },

    {
      name: "katalon",
      icon: `assets/images/llm/icons/Framework/icon4.png`,
      category: "AI Frameworks",
    },
    {
      name: "tailwind",
      icon: `assets/images/llm/icons/Inference/icon3.png`,
      category: "NLP Libraries",
    },

    {
      name: "nestjs",
      icon: `assets/images/llm/icons/Framework/icon6.png`,
      category: "AI Frameworks",
    },
    {
      name: "tailwind",
      icon: `assets/images/llm/icons/Inference/icon4.png`,
      category: "NLP Libraries",
    },
    {
      name: "xd",
      icon: `assets/images/llm/icons/Foundation/icon5.png`,
      category: "Foundation Models & APIs",
    },
    {
      name: "redis",
      icon: `assets/images/llm/icons/Foundation/icon6.png`,
      category: "Foundation Models & APIs",
    },
  ];

  const buildCategoryLayout = (
    folderName: string,
    count: number,
    category: string,
    namePrefix: string,
  ) =>
    Array.from({ length: count }, (_, index) => ({
      name: `${namePrefix}-${index + 1}`,
      icon: `assets/images/llm/icons/${folderName}/icon${index + 1}.png`,
      category,
    }));



  const foundationCategoryLayout = buildCategoryLayout(
    "Foundation",
    8,
    "Foundation Models & APIs",
    "foundation",
  );

  const aiFrameworkLayout = buildCategoryLayout(
    "Framework",
    6,
    "AI Frameworks",
    "framework",
  );

  const vectorDatabasesCategoryLayout = buildCategoryLayout(
    "VectorDatabases",
    7,
    "Vector Databases (RAG)",
    "vector-database",
  );

  const devopsCategoryLayout = buildCategoryLayout(
    "Devops",
    5,
    "Devops",
    "devops",
  );

  const devopsDeploymentLayout = buildCategoryLayout(
    "Devops",
    5,
    "DevOps & Deployment",
    "devops-deployment",
  );

  const databaseCategoryLayout = buildCategoryLayout(
    "Databases",
    4,
    "Database",
    "Database",
  );

  const programmingLanguagesLayout = buildCategoryLayout(
    "Programming",
    4,
    "Programming Languages",
    "programming",
  );

  const databasesStorageLayout = buildCategoryLayout(
    "Databases",
    4,
    "Databases & Storage",
    "database-storage",
  );

  const nlpLibrariesLayout = buildCategoryLayout(
    "nlp",
    3,
    "NLP Libraries",
    "nlp",
  );

  const llmsCategoryLayout = buildCategoryLayout("LLM", 6, "LLMs", "llm");

  const llmOrchestrationLayout = buildCategoryLayout(
    "LLM Orchestration",
    8,
    "LLM Orchestration",
    "llm-orchestration",
  );

 
  const getActiveLayout = () => {
    switch (activeCategory) {
      case "Foundation Models & APIs":
        return foundationCategoryLayout;
      case "AI Frameworks":
        return aiFrameworkLayout;
      case "LLMs":
        return llmsCategoryLayout;
      case "LLM Orchestration":
        return llmOrchestrationLayout;
      case "Vector Databases (RAG)":
        return vectorDatabasesCategoryLayout;
      case "Devops":
        return devopsCategoryLayout;
      case "DevOps & Deployment":
        return devopsDeploymentLayout;
      case "Database":
        return databaseCategoryLayout;
      case "Programming Languages":
        return programmingLanguagesLayout;
      case "Databases & Storage":
        return databasesStorageLayout;
      case "NLP Libraries":
        return nlpLibrariesLayout;
      default:
        return defaultLayout;
    }
  };

  const fillRemainingSlots = (
    selectedLayout: Array<{ name: string; icon: string; category: string }>,
  ) => {
    const remainingTech = defaultLayout.filter(
      (tech) => tech.category !== activeCategory,
    );

    return [...selectedLayout, ...remainingTech].slice(0, defaultLayout.length);
  };

  const currentLayout =
    activeCategory === null
      ? defaultLayout
      : fillRemainingSlots(getActiveLayout());

  const categories = [
    { key: null as string | null, label: "All" },
    ...Array.from(
      new Set([
        ...defaultLayout.map((tech) => tech.category),
        "LLM Orchestration",
      ]),
    ).map((category) => ({
      key: category,
      label:
        category === "Security & DevSecOps Suricata"
          ? "Security & DevSecOps"
          : category,
    })),
  ];

  return (
    <div ref={sectionRef}>
      <div ref={gridRef} className="w-full bg-white mt-10">
        <div className="max-w-[1400px] mx-auto px-6 text-center flex flex-col items-center justify-center">
          {/* Heading */}
          <h2
            className=" mb-6
       text-[16px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px] text-black font-bold leading-tight"
          >
            LLM Development Technology
            <span
              data-text="Beelockchain A Leader"
              className="shine-text text-[#F5B800] relative mx-1"
            >
               Stack & Tools
            </span>
            We Use
          </h2>

          {/* Category Buttons - Desktop/Tablet Only */}
          {/* <div className="flex  flex-wrap justify-center gap-2 lg:gap-4 top-gap hidden lg:flex"> */}
          <div className="hidden w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto flex-wrap justify-center gap-2 lg:gap-4 top-gap lg:flex">
            {categories.map((category) => (
              <button
                key={category.key || "all"}
                onClick={() => setActiveCategory(category.key)}
                className={`cursor-pointer filter-btn 
                  h-8 px-4 py-2 sm:h-9 sm:px-5 sm:py-2 md:h-10 md:px-6 md:py-2 lg:h-10 lg:px-6 lg:py-2 
                  rounded-[30px] outline-1
                  text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] font-normal text-black font-['Poppins']
                  transition-all duration-300
                  ${
                    activeCategory === category.key
                      ? "bg-yellow-400 outline-yellow-400 shadow-md"
                      : "bg-white outline-yellow-400 hover:bg-yellow-200"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[5px]"></div>

      <div className="w-full flex-col items-center justify-center bg-white px-4 py-2 ">
        {/* Desktop/Tablet View - Hex Grid */}
        <div className="loader hidden lg:flex">
          {currentLayout.map((tech, i) => {
            const isHighlighted =
              activeCategory === null || activeCategory === tech.category;

            return (
              <div key={i} className="hex-wrapper">
                <div
                  className={`hex ${!isHighlighted ? "hex-dimmed" : ""}`}
                  style={{
                    transition: "all 0.4s ease",
                  }}
                >
                  <div className="hex-content">
                    <div className="tech-icon">
                      <img
                        src={normalizeAssetPath(tech.icon)}
                        alt={tech.name}
                        width={50}
                        height={50}
                        style={{
                          opacity: isHighlighted ? 1 : 0.3,
                          filter: isHighlighted
                            ? "grayscale(0%)"
                            : "grayscale(100%)",
                          transition: "all 0.4s ease",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View */}
        <div className="block lg:hidden w-full">
          {/* Mobile Category Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 px-2">
            {categories.map((category) => (
              <button
                key={category.key || "all"}
                onClick={() => setActiveCategory(category.key)}
                className={`cursor-pointer filter-btn 
                  h-7 px-3 py-1.5
                  rounded-[20px] outline-1
                  text-[11px] font-normal text-black font-['Poppins']
                  transition-all duration-300
                  ${
                    activeCategory === category.key
                      ? "bg-yellow-400 outline-yellow-400 shadow-md"
                      : "bg-white outline-yellow-400 active:bg-yellow-200"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Mobile Hex Grid */}
          <div className="mobile-hex-container">
            {currentLayout
              .filter(
                (tech) =>
                  activeCategory === null || activeCategory === tech.category,
              )
              .map((tech, i) => (
                <div key={i} className="mobile-hex-wrapper">
                  <div className="mobile-hex">
                    <div className="mobile-hex-content">
                      <img
                        src={normalizeAssetPath(tech.icon)}
                        alt={tech.name}
                        className="mobile-tech-icon"
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <style jsx>{`
          .top-gap {
            margin-bottom: 200px;
          }

          /* Desktop Loader */
          .loader {
            position: relative;
            width: 100%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 420px;
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
            background: #d1d5db;
            transition: all 0.4s ease;
            cursor: pointer;
          }

          .hex-dimmed {
            background: #e5e7eb;
            opacity: 0.5;
          }

          .hex:hover {
            transform: scale(1.1);
          }

          .hex:before,
          .hex:after {
            content: "";
            position: absolute;
            width: 70px;
            height: 40.4px;
            background: #d1d5db;
            transition: all 0.4s ease;
          }

          .hex-dimmed:before,
          .hex-dimmed:after {
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
            transition: all 0.4s ease;
          }

          .hex-wrapper:hover .tech-icon img {
            filter: grayscale(0%) brightness(1.1) !important;
            opacity: 1 !important;
          }

          /* Mobile Hex Container */
          .mobile-hex-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 40px 20px;
            padding: 0px;
            max-width: 100%;
          }

          .mobile-hex-wrapper {
            display: inline-block;
          }

          .mobile-hex {
            position: relative;
            width: 50px;
            height: 28.87px;
            background: #d1d5db;
            cursor: pointer;
          }

          .mobile-hex:before,
          .mobile-hex:after {
            content: "";
            position: absolute;
            width: 50px;
            height: 28.87px;
            background: #d1d5db;
          }

          .mobile-hex:before {
            transform: rotate(60deg);
          }

          .mobile-hex:after {
            transform: rotate(-60deg);
          }

          .mobile-hex-content {
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

          .mobile-tech-icon {
            width: 24px;
            height: 24px;
          }

          .mobile-hex-wrapper:active .mobile-hex {
            transform: scale(1.1);
          }

          /* Desktop Hex Positions - Row 1 (9 hexagons) */
          .hex-wrapper:nth-of-type(1) {
            margin-left: -560px;
            margin-top: -108px;
          }
          .hex-wrapper:nth-of-type(2) {
            margin-left: -420px;
            margin-top: -108px;
          }
          .hex-wrapper:nth-of-type(3) {
            margin-left: -280px;
            margin-top: -108px;
          }
          .hex-wrapper:nth-of-type(4) {
            margin-left: -140px;
            margin-top: -108px;
          }
          .hex-wrapper:nth-of-type(5) {
            margin-left: 0px;
            margin-top: -108px;
          }
          .hex-wrapper:nth-of-type(6) {
            margin-left: 140px;
            margin-top: -108px;
          }
          .hex-wrapper:nth-of-type(7) {
            margin-left: 280px;
            margin-top: -108px;
          }
          .hex-wrapper:nth-of-type(8) {
            margin-left: 420px;
            margin-top: -108px;
          }
          .hex-wrapper:nth-of-type(9) {
            margin-left: 560px;
            margin-top: -108px;
          }

          /* Row 2 (10 hexagons) */
          .hex-wrapper:nth-of-type(10) {
            margin-left: -630px;
            margin-top: 0px;
          }
          .hex-wrapper:nth-of-type(11) {
            margin-left: -490px;
            margin-top: 0px;
          }
          .hex-wrapper:nth-of-type(12) {
            margin-left: -350px;
            margin-top: 0px;
          }
          .hex-wrapper:nth-of-type(13) {
            margin-left: -210px;
            margin-top: 0px;
          }
          .hex-wrapper:nth-of-type(14) {
            margin-left: -70px;
            margin-top: 0px;
          }
          .hex-wrapper:nth-of-type(15) {
            margin-left: 70px;
            margin-top: 0px;
          }
          .hex-wrapper:nth-of-type(16) {
            margin-left: 210px;
            margin-top: 0px;
          }
          .hex-wrapper:nth-of-type(17) {
            margin-left: 350px;
            margin-top: 0px;
          }
          .hex-wrapper:nth-of-type(18) {
            margin-left: 490px;
            margin-top: 0px;
          }
          .hex-wrapper:nth-of-type(19) {
            margin-left: 630px;
            margin-top: 0px;
          }

          /* Row 3 (8 hexagons) */
          .hex-wrapper:nth-of-type(20) {
            margin-left: -560px;
            margin-top: 108px;
          }
          .hex-wrapper:nth-of-type(21) {
            margin-left: -420px;
            margin-top: 108px;
          }
          .hex-wrapper:nth-of-type(22) {
            margin-left: -280px;
            margin-top: 108px;
          }
          .hex-wrapper:nth-of-type(23) {
            margin-left: -140px;
            margin-top: 108px;
          }
          .hex-wrapper:nth-of-type(24) {
            margin-left: 0px;
            margin-top: 108px;
          }
          .hex-wrapper:nth-of-type(25) {
            margin-left: 140px;
            margin-top: 108px;
          }
          .hex-wrapper:nth-of-type(26) {
            margin-left: 280px;
            margin-top: 108px;
          }
          .hex-wrapper:nth-of-type(27) {
            margin-left: 420px;
            margin-top: 108px;
          }

          /* Larger screens - slightly bigger hexagons */
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

          /* Medium-large tablets (1200px-1400px) */
          @media (max-width: 1400px) {
            .loader {
              height: 380px;
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
            .tech-icon img {
              width: 30px;
              height: 30px;
            }

            /* Scale positions by ~80% */
            .hex-wrapper:nth-of-type(1) {
              margin-left: -448px;
              margin-top: -86.4px;
            }
            .hex-wrapper:nth-of-type(2) {
              margin-left: -336px;
              margin-top: -86.4px;
            }
            .hex-wrapper:nth-of-type(3) {
              margin-left: -224px;
              margin-top: -86.4px;
            }
            .hex-wrapper:nth-of-type(4) {
              margin-left: -112px;
              margin-top: -86.4px;
            }
            .hex-wrapper:nth-of-type(5) {
              margin-left: 0px;
              margin-top: -86.4px;
            }
            .hex-wrapper:nth-of-type(6) {
              margin-left: 112px;
              margin-top: -86.4px;
            }
            .hex-wrapper:nth-of-type(7) {
              margin-left: 224px;
              margin-top: -86.4px;
            }
            .hex-wrapper:nth-of-type(8) {
              margin-left: 336px;
              margin-top: -86.4px;
            }
            .hex-wrapper:nth-of-type(9) {
              margin-left: 448px;
              margin-top: -86.4px;
            }

            .hex-wrapper:nth-of-type(10) {
              margin-left: -504px;
              margin-top: 0px;
            }
            .hex-wrapper:nth-of-type(11) {
              margin-left: -392px;
              margin-top: 0px;
            }
            .hex-wrapper:nth-of-type(12) {
              margin-left: -280px;
              margin-top: 0px;
            }
            .hex-wrapper:nth-of-type(13) {
              margin-left: -168px;
              margin-top: 0px;
            }
            .hex-wrapper:nth-of-type(14) {
              margin-left: -56px;
              margin-top: 0px;
            }
            .hex-wrapper:nth-of-type(15) {
              margin-left: 56px;
              margin-top: 0px;
            }
            .hex-wrapper:nth-of-type(16) {
              margin-left: 168px;
              margin-top: 0px;
            }
            .hex-wrapper:nth-of-type(17) {
              margin-left: 280px;
              margin-top: 0px;
            }
            .hex-wrapper:nth-of-type(18) {
              margin-left: 392px;
              margin-top: 0px;
            }
            .hex-wrapper:nth-of-type(19) {
              margin-left: 504px;
              margin-top: 0px;
            }

            .hex-wrapper:nth-of-type(20) {
              margin-left: -448px;
              margin-top: 86.4px;
            }
            .hex-wrapper:nth-of-type(21) {
              margin-left: -336px;
              margin-top: 86.4px;
            }
            .hex-wrapper:nth-of-type(22) {
              margin-left: -224px;
              margin-top: 86.4px;
            }
            .hex-wrapper:nth-of-type(23) {
              margin-left: -112px;
              margin-top: 86.4px;
            }
            .hex-wrapper:nth-of-type(24) {
              margin-left: 0px;
              margin-top: 86.4px;
            }
            .hex-wrapper:nth-of-type(25) {
              margin-left: 112px;
              margin-top: 86.4px;
            }
            .hex-wrapper:nth-of-type(26) {
              margin-left: 224px;
              margin-top: 86.4px;
            }
            .hex-wrapper:nth-of-type(27) {
              margin-left: 336px;
              margin-top: 86.4px;
            }
          }

          /* Standard tablets (1024px-1200px) */
          @media (max-width: 1200px) {
            .loader {
              height: 340px;
            }
            .hex {
              width: 50px;
              height: 28.87px;
            }
            .hex:before,
            .hex:after {
              width: 50px;
              height: 28.87px;
            }
            .tech-icon img {
              width: 24px;
              height: 24px;
            }

            /* Scale positions by ~66% */
            .hex-wrapper:nth-of-type(1) {
              margin-left: -373px;
              margin-top: -72px;
            }
            .hex-wrapper:nth-of-type(2) {
              margin-left: -280px;
              margin-top: -72px;
            }
            .hex-wrapper:nth-of-type(3) {
              margin-left: -187px;
              margin-top: -72px;
            }
            .hex-wrapper:nth-of-type(4) {
              margin-left: -93px;
              margin-top: -72px;
            }
            .hex-wrapper:nth-of-type(5) {
              margin-left: 0px;
              margin-top: -72px;
            }
            .hex-wrapper:nth-of-type(6) {
              margin-left: 93px;
              margin-top: -72px;
            }
            .hex-wrapper:nth-of-type(7) {
              margin-left: 187px;
              margin-top: -72px;
            }
            .hex-wrapper:nth-of-type(8) {
              margin-left: 280px;
              margin-top: -72px;
            }
            .hex-wrapper:nth-of-type(9) {
              margin-left: 373px;
              margin-top: -72px;
            }

            .hex-wrapper:nth-of-type(10) {
              margin-left: -420px;
              margin-top: 0px;
            }
            .hex-wrapper:nth-of-type(11) {
              margin-left: -327px;
              margin-top: 0px;
            }
            .hex-wrapper:nth-of-type(12) {
              margin-left: -233px;
              margin-top: 0px;
            }
            .hex-wrapper:nth-of-type(13) {
              margin-left: -140px;
              margin-top: 0px;
            }
            .hex-wrapper:nth-of-type(14) {
              margin-left: -47px;
              margin-top: 0px;
            }
            .hex-wrapper:nth-of-type(15) {
              margin-left: 47px;
              margin-top: 0px;
            }
            .hex-wrapper:nth-of-type(16) {
              margin-left: 140px;
              margin-top: 0px;
            }
            .hex-wrapper:nth-of-type(17) {
              margin-left: 233px;
              margin-top: 0px;
            }
            .hex-wrapper:nth-of-type(18) {
              margin-left: 327px;
              margin-top: 0px;
            }
            .hex-wrapper:nth-of-type(19) {
              margin-left: 420px;
              margin-top: 0px;
            }

            .hex-wrapper:nth-of-type(20) {
              margin-left: -373px;
              margin-top: 72px;
            }
            .hex-wrapper:nth-of-type(21) {
              margin-left: -280px;
              margin-top: 72px;
            }
            .hex-wrapper:nth-of-type(22) {
              margin-left: -187px;
              margin-top: 72px;
            }
            .hex-wrapper:nth-of-type(23) {
              margin-left: -93px;
              margin-top: 72px;
            }
            .hex-wrapper:nth-of-type(24) {
              margin-left: 0px;
              margin-top: 72px;
            }
            .hex-wrapper:nth-of-type(25) {
              margin-left: 93px;
              margin-top: 72px;
            }
            .hex-wrapper:nth-of-type(26) {
              margin-left: 187px;
              margin-top: 72px;
            }
            .hex-wrapper:nth-of-type(27) {
              margin-left: 280px;
              margin-top: 72px;
            }
          }

          /* Force hide desktop hex grid on mobile/small tablets */
          @media (max-width: 1023px) {
            .loader {
              display: none !important;
            }
          }

          /* Smaller mobile screens */
          @media (max-width: 375px) {
            .mobile-hex {
              width: 45px;
              height: 25.98px;
            }
            .mobile-hex:before,
            .mobile-hex:after {
              width: 45px;
              height: 25.98px;
            }
            .mobile-tech-icon {
              width: 20px;
              height: 20px;
            }
            .mobile-hex-container {
              gap: 30px;
              padding: 0 !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default LlmTechnologies;
