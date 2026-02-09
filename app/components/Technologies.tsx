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

  useGSAP(
    () => {
      if (!sectionRef.current || !gridRef.current) return;

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

  // Default layout - 3 rows with mixed technologies (27 total)
  const defaultLayout = [
    // Row 1 - 9 hexagons
    { name: "react", icon: "assets/icons/front/react-front.webp", category: "frontend" },
    { name: "nodejs", icon: "assets/icons/backend/nodejs-backend.webp", category: "backend" },
    { name: "illustrator", icon: "assets/icons/design/ai-design.webp", category: "design" },
    { name: "mongodb", icon: "assets/icons/database/mongodb-database.webp", category: "database" },
    { name: "flutter", icon: "assets/icons/mobile/flutter-mobile.webp", category: "mobile" },
    { name: "selenium", icon: "assets/icons/qa/selenium-qa.webp", category: "qa" },
    { name: "angular", icon: "assets/icons/front/angular-front.webp", category: "frontend" },
    { name: "python", icon: "assets/icons/backend/python-backend.webp", category: "backend" },
    { name: "photoshop", icon: "assets/icons/design/photoshop-design.webp", category: "design" },

    // Row 2 - 10 hexagons
    { name: "postgresql", icon: "assets/icons/database/postgresql-database.webp", category: "database" },
    { name: "react-native", icon: "assets/icons/mobile/reactjs-mobile.webp", category: "mobile" },
    { name: "appium", icon: "assets/icons/qa/appium-qa.webp", category: "qa" },
    { name: "vuejs", icon: "assets/icons/front/vuejs-front.webp", category: "frontend" },
    { name: "java", icon: "assets/icons/backend/java-backend.webp", category: "backend" },
    { name: "framer", icon: "assets/icons/design/framer-design.webp", category: "design" },
    { name: "mysql", icon: "assets/icons/database/mysql-database.webp", category: "database" },
    { name: "android", icon: "assets/icons/mobile/android-mobile.webp", category: "mobile" },
    { name: "jmeter", icon: "assets/icons/qa/jmeter-qa.webp", category: "qa" },
    { name: "nextjs", icon: "assets/icons/front/nextjs-front.webp", category: "frontend" },

    // Row 3 - 8 hexagons
    { name: "golang", icon: "assets/icons/backend/golang-backend.webp", category: "backend" },
    { name: "xd", icon: "assets/icons/design/xd-design.webp", category: "design" },
    { name: "redis", icon: "assets/icons/database/redis-database.webp", category: "database" },
    { name: "ios", icon: "assets/icons/mobile/ios-mobile.webp", category: "mobile" },
    { name: "katalon", icon: "assets/icons/qa/katalon-qa.webp", category: "qa" },
    { name: "tailwind", icon: "assets/icons/front/tailwind-css-front.webp", category: "frontend" },
    { name: "nestjs", icon: "assets/icons/backend/nestjs-backend.webp", category: "backend" },
    { name: "sketch", icon: "assets/icons/design/sketch-design.webp", category: "design" },
  ];

  // Frontend layout - 3 rows with frontend tools
  const frontendLayout = [
    // Row 1
    { name: "react", icon: "assets/icons/front/react-front.webp", category: "frontend" },
    { name: "angular", icon: "assets/icons/front/angular-front.webp", category: "frontend" },
    { name: "vuejs", icon: "assets/icons/front/vuejs-front.webp", category: "frontend" },
    { name: "nextjs", icon: "assets/icons/front/nextjs-front.webp", category: "frontend" },
    { name: "svelte", icon: "assets/icons/front/svelte-front.webp", category: "frontend" },
    { name: "nodejs", icon: "assets/icons/backend/nodejs-backend.webp", category: "backend" },
    { name: "illustrator", icon: "assets/icons/design/ai-design.webp", category: "design" },
    { name: "mongodb", icon: "assets/icons/database/mongodb-database.webp", category: "database" },
    { name: "flutter", icon: "assets/icons/mobile/flutter-mobile.webp", category: "mobile" },

    // Row 2
    { name: "selenium", icon: "assets/icons/qa/selenium-qa.webp", category: "qa" },
    { name: "tailwind", icon: "assets/icons/front/tailwind-css-front.webp", category: "frontend" },
    { name: "bootstrap", icon: "assets/icons/front/bootstrap-front.webp", category: "frontend" },
    { name: "html", icon: "assets/icons/front/html-front.webp", category: "frontend" },
    { name: "css", icon: "assets/icons/front/css-front.webp", category: "frontend" },
    { name: "javascript", icon: "assets/icons/front/javascript-front.webp", category: "frontend" },
    { name: "python", icon: "assets/icons/backend/python-backend.webp", category: "backend" },
    { name: "photoshop", icon: "assets/icons/design/photoshop-design.webp", category: "design" },
    { name: "postgresql", icon: "assets/icons/database/postgresql-database.webp", category: "database" },
    { name: "react-native", icon: "assets/icons/mobile/reactjs-mobile.webp", category: "mobile" },

    // Row 3
    { name: "appium", icon: "assets/icons/qa/appium-qa.webp", category: "qa" },
    { name: "emberjs", icon: "assets/icons/front/emberjs-front.webp", category: "frontend" },
    { name: "meteorjs", icon: "assets/icons/front/meteorjs-front.webp", category: "frontend" },
    { name: "jquery", icon: "assets/icons/front/jquery-front.webp", category: "frontend" },
    { name: "java", icon: "assets/icons/backend/java-backend.webp", category: "backend" },
    { name: "framer", icon: "assets/icons/design/framer-design.webp", category: "design" },
    { name: "mysql", icon: "assets/icons/database/mysql-database.webp", category: "database" },
    { name: "android", icon: "assets/icons/mobile/android-mobile.webp", category: "mobile" },
  ];

  // Backend layout - 3 rows with backend tools
  const backendLayout = [
    // Row 1
    { name: "react", icon: "assets/icons/front/react-front.webp", category: "frontend" },
    { name: "nodejs", icon: "assets/icons/backend/nodejs-backend.webp", category: "backend" },
    { name: "python", icon: "assets/icons/backend/python-backend.webp", category: "backend" },
    { name: "java", icon: "assets/icons/backend/java-backend.webp", category: "backend" },
    { name: "golang", icon: "assets/icons/backend/golang-backend.webp", category: "backend" },
    { name: "nestjs", icon: "assets/icons/backend/nestjs-backend.webp", category: "backend" },
    { name: "illustrator", icon: "assets/icons/design/ai-design.webp", category: "design" },
    { name: "mongodb", icon: "assets/icons/database/mongodb-database.webp", category: "database" },
    { name: "flutter", icon: "assets/icons/mobile/flutter-mobile.webp", category: "mobile" },

    // Row 2
    { name: "selenium", icon: "assets/icons/qa/selenium-qa.webp", category: "qa" },
    { name: "angular", icon: "assets/icons/front/angular-front.webp", category: "frontend" },
    { name: "expressjs", icon: "assets/icons/backend/expressjs-backend.webp", category: "backend" },
    { name: "laravel", icon: "assets/icons/backend/laravel-backend.webp", category: "backend" },
    { name: "dotnet", icon: "assets/icons/backend/dotnet-backend.webp", category: "backend" },
    { name: "ruby", icon: "assets/icons/backend/ruby-backend.webp", category: "backend" },
    { name: "rust", icon: "assets/icons/backend/rust-backend.webp", category: "backend" },
    { name: "photoshop", icon: "assets/icons/design/photoshop-design.webp", category: "design" },
    { name: "postgresql", icon: "assets/icons/database/postgresql-database.webp", category: "database" },
    { name: "react-native", icon: "assets/icons/mobile/reactjs-mobile.webp", category: "mobile" },

    // Row 3
    { name: "appium", icon: "assets/icons/qa/appium-qa.webp", category: "qa" },
    { name: "vuejs", icon: "assets/icons/front/vuejs-front.webp", category: "frontend" },
    { name: "framer", icon: "assets/icons/design/framer-design.webp", category: "design" },
    { name: "mysql", icon: "assets/icons/database/mysql-database.webp", category: "database" },
    { name: "android", icon: "assets/icons/mobile/android-mobile.webp", category: "mobile" },
    { name: "jmeter", icon: "assets/icons/qa/jmeter-qa.webp", category: "qa" },
    { name: "tailwind", icon: "assets/icons/front/tailwind-css-front.webp", category: "frontend" },
    { name: "sketch", icon: "assets/icons/design/sketch-design.webp", category: "design" },
  ];

  // Design layout - 3 rows with design tools
  const designLayout = [
    // Row 1
    { name: "react", icon: "assets/icons/front/react-front.webp", category: "frontend" },
    { name: "nodejs", icon: "assets/icons/backend/nodejs-backend.webp", category: "backend" },
    { name: "illustrator", icon: "assets/icons/design/ai-design.webp", category: "design" },
    { name: "photoshop", icon: "assets/icons/design/photoshop-design.webp", category: "design" },
    { name: "xd", icon: "assets/icons/design/xd-design.webp", category: "design" },
    { name: "framer", icon: "assets/icons/design/framer-design.webp", category: "design" },
    { name: "sketch", icon: "assets/icons/design/sketch-design.webp", category: "design" },
    { name: "mongodb", icon: "assets/icons/database/mongodb-database.webp", category: "database" },
    { name: "flutter", icon: "assets/icons/mobile/flutter-mobile.webp", category: "mobile" },

    // Row 2
    { name: "selenium", icon: "assets/icons/qa/selenium-qa.webp", category: "qa" },
    { name: "angular", icon: "assets/icons/front/angular-front.webp", category: "frontend" },
    { name: "python", icon: "assets/icons/backend/python-backend.webp", category: "backend" },
    { name: "lottie", icon: "assets/icons/design/lottie-design.webp", category: "design" },
    { name: "spline", icon: "assets/icons/design/spline-design.webp", category: "design" },
    { name: "webflow", icon: "assets/icons/design/webflow-design.webp", category: "design" },
    { name: "after-effects", icon: "assets/icons/design/ae-design.webp", category: "design" },
    { name: "postgresql", icon: "assets/icons/database/postgresql-database.webp", category: "database" },
    { name: "react-native", icon: "assets/icons/mobile/reactjs-mobile.webp", category: "mobile" },
    { name: "appium", icon: "assets/icons/qa/appium-qa.webp", category: "qa" },

    // Row 3
    { name: "vuejs", icon: "assets/icons/front/vuejs-front.webp", category: "frontend" },
    { name: "java", icon: "assets/icons/backend/java-backend.webp", category: "backend" },
    { name: "mysql", icon: "assets/icons/database/mysql-database.webp", category: "database" },
    { name: "android", icon: "assets/icons/mobile/android-mobile.webp", category: "mobile" },
    { name: "jmeter", icon: "assets/icons/qa/jmeter-qa.webp", category: "qa" },
    { name: "tailwind", icon: "assets/icons/front/tailwind-css-front.webp", category: "frontend" },
    { name: "nestjs", icon: "assets/icons/backend/nestjs-backend.webp", category: "backend" },
    { name: "redis", icon: "assets/icons/database/redis-database.webp", category: "database" },
  ];

  // Database layout - 3 rows with database tools
  const databaseLayout = [
    // Row 1
    { name: "react", icon: "assets/icons/front/react-front.webp", category: "frontend" },
    { name: "nodejs", icon: "assets/icons/backend/nodejs-backend.webp", category: "backend" },
    { name: "illustrator", icon: "assets/icons/design/ai-design.webp", category: "design" },
    { name: "mongodb", icon: "assets/icons/database/mongodb-database.webp", category: "database" },
    { name: "mysql", icon: "assets/icons/database/mysql-database.webp", category: "database" },
    { name: "postgresql", icon: "assets/icons/database/postgresql-database.webp", category: "database" },
    { name: "redis", icon: "assets/icons/database/redis-database.webp", category: "database" },
    { name: "flutter", icon: "assets/icons/mobile/flutter-mobile.webp", category: "mobile" },
    { name: "selenium", icon: "assets/icons/qa/selenium-qa.webp", category: "qa" },

    // Row 2
    { name: "angular", icon: "assets/icons/front/angular-front.webp", category: "frontend" },
    { name: "python", icon: "assets/icons/backend/python-backend.webp", category: "backend" },
    { name: "photoshop", icon: "assets/icons/design/photoshop-design.webp", category: "design" },
    { name: "oracle", icon: "assets/icons/database/oracle-database.webp", category: "database" },
    { name: "cassandra", icon: "assets/icons/database/cassandra-database.webp", category: "database" },
    { name: "react-native", icon: "assets/icons/mobile/reactjs-mobile.webp", category: "mobile" },
    { name: "appium", icon: "assets/icons/qa/appium-qa.webp", category: "qa" },
    { name: "vuejs", icon: "assets/icons/front/vuejs-front.webp", category: "frontend" },
    { name: "java", icon: "assets/icons/backend/java-backend.webp", category: "backend" },
    { name: "framer", icon: "assets/icons/design/framer-design.webp", category: "design" },

    // Row 3
    { name: "android", icon: "assets/icons/mobile/android-mobile.webp", category: "mobile" },
    { name: "jmeter", icon: "assets/icons/qa/jmeter-qa.webp", category: "qa" },
    { name: "nextjs", icon: "assets/icons/front/nextjs-front.webp", category: "frontend" },
    { name: "golang", icon: "assets/icons/backend/golang-backend.webp", category: "backend" },
    { name: "xd", icon: "assets/icons/design/xd-design.webp", category: "design" },
    { name: "ios", icon: "assets/icons/mobile/ios-mobile.webp", category: "mobile" },
    { name: "katalon", icon: "assets/icons/qa/katalon-qa.webp", category: "qa" },
    { name: "tailwind", icon: "assets/icons/front/tailwind-css-front.webp", category: "frontend" },
  ];

  // Mobile layout - 3 rows with mobile tools
  const mobileLayout = [
    // Row 1
    { name: "react", icon: "assets/icons/front/react-front.webp", category: "frontend" },
    { name: "nodejs", icon: "assets/icons/backend/nodejs-backend.webp", category: "backend" },
    { name: "illustrator", icon: "assets/icons/design/ai-design.webp", category: "design" },
    { name: "mongodb", icon: "assets/icons/database/mongodb-database.webp", category: "database" },
    { name: "flutter", icon: "assets/icons/mobile/flutter-mobile.webp", category: "mobile" },
    { name: "react-native", icon: "assets/icons/mobile/reactjs-mobile.webp", category: "mobile" },
    { name: "android", icon: "assets/icons/mobile/android-mobile.webp", category: "mobile" },
    { name: "ios", icon: "assets/icons/mobile/ios-mobile.webp", category: "mobile" },
    { name: "selenium", icon: "assets/icons/qa/selenium-qa.webp", category: "qa" },

    // Row 2
    { name: "angular", icon: "assets/icons/front/angular-front.webp", category: "frontend" },
    { name: "python", icon: "assets/icons/backend/python-backend.webp", category: "backend" },
    { name: "photoshop", icon: "assets/icons/design/photoshop-design.webp", category: "design" },
    { name: "postgresql", icon: "assets/icons/database/postgresql-database.webp", category: "database" },
    { name: "kotlin", icon: "assets/icons/mobile/kotlin-mobile.webp", category: "mobile" },
    { name: "swift", icon: "assets/icons/mobile/swift-mobile.webp", category: "mobile" },
    { name: "ionic", icon: "assets/icons/mobile/ionic-mobile.webp", category: "mobile" },
    { name: "xamarin", icon: "assets/icons/mobile/xamarin-mobile.webp", category: "mobile" },
    { name: "appium", icon: "assets/icons/qa/appium-qa.webp", category: "qa" },
    { name: "vuejs", icon: "assets/icons/front/vuejs-front.webp", category: "frontend" },

    // Row 3
    { name: "java", icon: "assets/icons/backend/java-backend.webp", category: "backend" },
    { name: "framer", icon: "assets/icons/design/framer-design.webp", category: "design" },
    { name: "mysql", icon: "assets/icons/database/mysql-database.webp", category: "database" },
    { name: "jetpack", icon: "assets/icons/mobile/jetpack-mobile.webp", category: "mobile" },
    { name: "pwa", icon: "assets/icons/mobile/pwa-mobile.webp", category: "mobile" },
    { name: "jmeter", icon: "assets/icons/qa/jmeter-qa.webp", category: "qa" },
    { name: "nextjs", icon: "assets/icons/front/nextjs-front.webp", category: "frontend" },
    { name: "golang", icon: "assets/icons/backend/golang-backend.webp", category: "backend" },
  ];

  // QA layout - 3 rows with QA tools
  const qaLayout = [
    // Row 1
    { name: "react", icon: "assets/icons/front/react-front.webp", category: "frontend" },
    { name: "nodejs", icon: "assets/icons/backend/nodejs-backend.webp", category: "backend" },
    { name: "illustrator", icon: "assets/icons/design/ai-design.webp", category: "design" },
    { name: "mongodb", icon: "assets/icons/database/mongodb-database.webp", category: "database" },
    { name: "flutter", icon: "assets/icons/mobile/flutter-mobile.webp", category: "mobile" },
    { name: "selenium", icon: "assets/icons/qa/selenium-qa.webp", category: "qa" },
    { name: "appium", icon: "assets/icons/qa/appium-qa.webp", category: "qa" },
    { name: "jmeter", icon: "assets/icons/qa/jmeter-qa.webp", category: "qa" },
    { name: "katalon", icon: "assets/icons/qa/katalon-qa.webp", category: "qa" },

    // Row 2
    { name: "angular", icon: "assets/icons/front/angular-front.webp", category: "frontend" },
    { name: "python", icon: "assets/icons/backend/python-backend.webp", category: "backend" },
    { name: "photoshop", icon: "assets/icons/design/photoshop-design.webp", category: "design" },
    { name: "postgresql", icon: "assets/icons/database/postgresql-database.webp", category: "database" },
    { name: "react-native", icon: "assets/icons/mobile/reactjs-mobile.webp", category: "mobile" },
    { name: "lambda", icon: "assets/icons/qa/lambda-qa.webp", category: "qa" },
    { name: "vuejs", icon: "assets/icons/front/vuejs-front.webp", category: "frontend" },
    { name: "java", icon: "assets/icons/backend/java-backend.webp", category: "backend" },
    { name: "framer", icon: "assets/icons/design/framer-design.webp", category: "design" },
    { name: "mysql", icon: "assets/icons/database/mysql-database.webp", category: "database" },

    // Row 3
    { name: "android", icon: "assets/icons/mobile/android-mobile.webp", category: "mobile" },
    { name: "nextjs", icon: "assets/icons/front/nextjs-front.webp", category: "frontend" },
    { name: "golang", icon: "assets/icons/backend/golang-backend.webp", category: "backend" },
    { name: "xd", icon: "assets/icons/design/xd-design.webp", category: "design" },
    { name: "redis", icon: "assets/icons/database/redis-database.webp", category: "database" },
    { name: "ios", icon: "assets/icons/mobile/ios-mobile.webp", category: "mobile" },
    { name: "tailwind", icon: "assets/icons/front/tailwind-css-front.webp", category: "frontend" },
    { name: "nestjs", icon: "assets/icons/backend/nestjs-backend.webp", category: "backend" },
  ];

  // Get the appropriate layout based on active category
  const getActiveLayout = () => {
    switch (activeCategory) {
      case "frontend":
        return frontendLayout;
      case "backend":
        return backendLayout;
      case "design":
        return designLayout;
      case "database":
        return databaseLayout;
      case "mobile":
        return mobileLayout;
      case "qa":
        return qaLayout;
      default:
        return defaultLayout;
    }
  };

  const currentLayout = getActiveLayout();

  const categories = [
    { key: null as string | null, label: "All" },
    { key: "design" as string, label: "Design Tools" },
    { key: "frontend" as string, label: "Frontend Tools" },
    { key: "backend" as string, label: "Backend Tools" },
    { key: "database" as string, label: "Database" },
    { key: "mobile" as string, label: "Mobile App" },
    { key: "qa" as string, label: "Quality Assurance" },
  ];

  return (
    <div ref={sectionRef}>
      <div ref={gridRef} className="w-full bg-white py-0">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Heading */}
          <h2 className="text-center text-black text-[26px] sm:text-[18px] md:text-[26px] xl:text-[40px] lg:text-[40px] font-semibold font-['Poppins'] leading-snug mb-4">
            Core Technologies We Implemented
          </h2>

          {/* Subheading */}
          <p className="text-center text-black text-[14px] sm:text-[18px] md:text-[20px] xl:text-[20px] lg:text-[20px] font-normal font-['Poppins'] mb-8">
            Unlock new opportunities with tailored digital transformation strategies
          </p>

          {/* Category Buttons - Desktop/Tablet Only */}
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4 top-gap hidden lg:flex">
            {categories.map((category) => (
              <button
                key={category.key || "all"}
                onClick={() => setActiveCategory(category.key)}
                className={`cursor-pointer filter-btn 
                  h-8 px-4 py-2 sm:h-9 sm:px-5 sm:py-2 md:h-10 md:px-6 md:py-2 lg:h-10 lg:px-6 lg:py-2 
                  rounded-[30px] outline outline-1
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
                        src={tech.icon}
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
                  h-8 px-3 py-1.5
                  rounded-[20px] outline outline-1
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
              .filter((tech) => activeCategory === null || activeCategory === tech.category)
              .map((tech, i) => (
                <div key={i} className="mobile-hex-wrapper">
                  <div className="mobile-hex">
                    <div className="mobile-hex-content">
                      <img
                        src={tech.icon}
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
            gap:40px 20px;
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

          /* Tablet view */
          @media (max-width: 1024px) and (min-width: 769px) {
            .loader {
              height: 400px;
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
          }
/* Force hide desktop hex grid on mobile */
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

export default Technologies;