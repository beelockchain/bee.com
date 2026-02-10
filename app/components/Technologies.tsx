"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
    const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;

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
    { name: "react", icon: `${ASSET_URL}/icons/front/react-front.webp`, category: "frontend" },
    { name: "nodejs", icon: `${ASSET_URL}/icons/backend/nodejs-backend.webp`, category: "backend" },
    { name: "illustrator", icon: `${ASSET_URL}/icons/design/ai-design.webp`, category: "design" },
    { name: "mongodb", icon: `${ASSET_URL}/icons/database/mongodb-database.webp`, category: "database" },
    { name: "flutter", icon: `${ASSET_URL}/icons/mobile/flutter-mobile.webp`, category: "mobile" },
    { name: "selenium", icon: `${ASSET_URL}/icons/qa/selenium-qa.webp`, category: "qa" },
    { name: "angular", icon: `${ASSET_URL}/icons/front/angular-front.webp`, category: "frontend" },
    { name: "python", icon: `${ASSET_URL}/icons/backend/python-backend.webp`, category: "backend" },
    { name: "photoshop", icon: `${ASSET_URL}/icons/design/photoshop-design.webp`, category: "design" },

    // Row 2 - 10 hexagons
    { name: "postgresql", icon: `${ASSET_URL}/icons/database/postgresql-database.webp`, category: "database" },
    { name: "react-native", icon: `${ASSET_URL}/icons/mobile/reactjs-mobile.webp`, category: "mobile" },
    { name: "appium", icon: `${ASSET_URL}/icons/qa/appium-qa.webp`, category: "qa" },
    { name: "vuejs", icon: `${ASSET_URL}/icons/front/vuejs-front.webp`, category: "frontend" },
    { name: "java", icon: `${ASSET_URL}/icons/backend/java-backend.webp`, category: "backend" },
    { name: "framer", icon: `${ASSET_URL}/icons/design/framer-design.webp`, category: "design" },
    { name: "mysql", icon: `${ASSET_URL}/icons/database/mysql-database.webp`, category: "database" },
    { name: "android", icon: `${ASSET_URL}/icons/mobile/android-mobile.webp`, category: "mobile" },
    { name: "jmeter", icon: `${ASSET_URL}/icons/qa/jmeter-qa.webp`, category: "qa" },
    { name: "nextjs", icon: `${ASSET_URL}/icons/front/nextjs-front.webp`, category: "frontend" },

    // Row 3 - 8 hexagons
    { name: "golang", icon: `${ASSET_URL}/icons/backend/golang-backend.webp`, category: "backend" },
    { name: "xd", icon: `${ASSET_URL}/icons/design/xd-design.webp`, category: "design" },
    { name: "redis", icon: `${ASSET_URL}/icons/database/redis-database.webp`, category: "database" },
    { name: "ios", icon: `${ASSET_URL}/icons/mobile/ios-mobile.webp`, category: "mobile" },
    { name: "katalon", icon: `${ASSET_URL}/icons/qa/katalon-qa.webp`, category: "qa" },
    { name: "tailwind", icon: `${ASSET_URL}/icons/front/tailwind-css-front.webp`, category: "frontend" },
    { name: "nestjs", icon: `${ASSET_URL}/icons/backend/nestjs-backend.webp`, category: "backend" },
    { name: "sketch", icon: `${ASSET_URL}/icons/design/sketch-design.webp`, category: "design" },
  ];

  // Frontend layout - 3 rows with frontend tools
  const frontendLayout = [
    // Row 1
    { name: "react", icon: `${ASSET_URL}/icons/front/react-front.webp`, category: "frontend" },
    { name: "angular", icon: `${ASSET_URL}/icons/front/angular-front.webp`, category: "frontend" },
    { name: "vuejs", icon: `${ASSET_URL}/icons/front/vuejs-front.webp`, category: "frontend" },
    { name: "nextjs", icon: `${ASSET_URL}/icons/front/nextjs-front.webp`, category: "frontend" },
    { name: "svelte", icon: `${ASSET_URL}/icons/front/svelte-front.webp`, category: "frontend" },
    { name: "nodejs", icon: `${ASSET_URL}/icons/backend/nodejs-backend.webp`, category: "backend" },
    { name: "illustrator", icon: `${ASSET_URL}/icons/design/ai-design.webp`, category: "design" },
    { name: "mongodb", icon: `${ASSET_URL}/icons/database/mongodb-database.webp`, category: "database" },
    { name: "flutter", icon: `${ASSET_URL}/icons/mobile/flutter-mobile.webp`, category: "mobile" },

    // Row 2
    { name: "selenium", icon: `${ASSET_URL}/icons/qa/selenium-qa.webp`, category: "qa" },
    { name: "tailwind", icon: `${ASSET_URL}/icons/front/tailwind-css-front.webp`, category: "frontend" },
    { name: "bootstrap", icon: `${ASSET_URL}/icons/front/bootstrap-front.webp`, category: "frontend" },
    { name: "html", icon: `${ASSET_URL}/icons/front/html-front.webp`, category: "frontend" },
    { name: "css", icon: `${ASSET_URL}/icons/front/css-front.webp`, category: "frontend" },
    { name: "javascript", icon: `${ASSET_URL}/icons/front/javascript-front.webp`, category: "frontend" },
    { name: "python", icon: `${ASSET_URL}/icons/backend/python-backend.webp`, category: "backend" },
    { name: "photoshop", icon: `${ASSET_URL}/icons/design/photoshop-design.webp`, category: "design" },
    { name: "postgresql", icon: `${ASSET_URL}/icons/database/postgresql-database.webp`, category: "database" },
    { name: "react-native", icon: `${ASSET_URL}/icons/mobile/reactjs-mobile.webp`, category: "mobile" },

    // Row 3
    { name: "appium", icon: `${ASSET_URL}/icons/qa/appium-qa.webp`, category: "qa" },
    { name: "emberjs", icon: `${ASSET_URL}/icons/front/emberjs-front.webp`, category: "frontend" },
    { name: "meteorjs", icon: `${ASSET_URL}/icons/front/meteorjs-front.webp`, category: "frontend" },
    { name: "jquery", icon: `${ASSET_URL}/icons/front/jquery-front.webp`, category: "frontend" },
    { name: "java", icon: `${ASSET_URL}/icons/backend/java-backend.webp`, category: "backend" },
    { name: "framer", icon: `${ASSET_URL}/icons/design/framer-design.webp`, category: "design" },
    { name: "mysql", icon: `${ASSET_URL}/icons/database/mysql-database.webp`, category: "database" },
    { name: "android", icon: `${ASSET_URL}/icons/mobile/android-mobile.webp`, category: "mobile" },
  ];

  // Backend layout - 3 rows with backend tools
  const backendLayout = [
    // Row 1
    { name: "react", icon: `${ASSET_URL}/icons/front/react-front.webp`, category: "frontend" },
    { name: "nodejs", icon: `${ASSET_URL}/icons/backend/nodejs-backend.webp`, category: "backend" },
    { name: "python", icon: `${ASSET_URL}/icons/backend/python-backend.webp`, category: "backend" },
    { name: "java", icon: `${ASSET_URL}/icons/backend/java-backend.webp`, category: "backend" },
    { name: "golang", icon: `${ASSET_URL}/icons/backend/golang-backend.webp`, category: "backend" },
    { name: "nestjs", icon: `${ASSET_URL}/icons/backend/nestjs-backend.webp`, category: "backend" },
    { name: "illustrator", icon: `${ASSET_URL}/icons/design/ai-design.webp`, category: "design" },
    { name: "mongodb", icon: `${ASSET_URL}/icons/database/mongodb-database.webp`, category: "database" },
    { name: "flutter", icon: `${ASSET_URL}/icons/mobile/flutter-mobile.webp`, category: "mobile" },

    // Row 2
    { name: "selenium", icon: `${ASSET_URL}/icons/qa/selenium-qa.webp`, category: "qa" },
    { name: "angular", icon: `${ASSET_URL}/icons/front/angular-front.webp`, category: "frontend" },
    { name: "expressjs", icon: `${ASSET_URL}/icons/backend/expressjs-backend.webp`, category: "backend" },
    { name: "laravel", icon: `${ASSET_URL}/icons/backend/laravel-backend.webp`, category: "backend" },
    { name: "dotnet", icon: `${ASSET_URL}/icons/backend/dotnet-backend.webp`, category: "backend" },
    { name: "ruby", icon: `${ASSET_URL}/icons/backend/ruby-backend.webp`, category: "backend" },
    { name: "rust", icon: `${ASSET_URL}/icons/backend/rust-backend.webp`, category: "backend" },
    { name: "photoshop", icon: `${ASSET_URL}/icons/design/photoshop-design.webp`, category: "design" },
    { name: "postgresql", icon: `${ASSET_URL}/icons/database/postgresql-database.webp`, category: "database" },
    { name: "react-native", icon: `${ASSET_URL}/icons/mobile/reactjs-mobile.webp`, category: "mobile" },

    // Row 3
    { name: "appium", icon: `${ASSET_URL}/icons/qa/appium-qa.webp`, category: "qa" },
    { name: "vuejs", icon: `${ASSET_URL}/icons/front/vuejs-front.webp`, category: "frontend" },
    { name: "framer", icon: `${ASSET_URL}/icons/design/framer-design.webp`, category: "design" },
    { name: "mysql", icon: `${ASSET_URL}/icons/database/mysql-database.webp`, category: "database" },
    { name: "android", icon: `${ASSET_URL}/icons/mobile/android-mobile.webp`, category: "mobile" },
    { name: "jmeter", icon: `${ASSET_URL}/icons/qa/jmeter-qa.webp`, category: "qa" },
    { name: "tailwind", icon: `${ASSET_URL}/icons/front/tailwind-css-front.webp`, category: "frontend" },
    { name: "sketch", icon: `${ASSET_URL}/icons/design/sketch-design.webp`, category: "design" },
  ];

  // Design layout - 3 rows with design tools
  const designLayout = [
    // Row 1
    { name: "react", icon: `${ASSET_URL}/icons/front/react-front.webp`, category: "frontend" },
    { name: "nodejs", icon: `${ASSET_URL}/icons/backend/nodejs-backend.webp`, category: "backend" },
    { name: "illustrator", icon: `${ASSET_URL}/icons/design/ai-design.webp`, category: "design" },
    { name: "photoshop", icon: `${ASSET_URL}/icons/design/photoshop-design.webp`, category: "design" },
    { name: "xd", icon: `${ASSET_URL}/icons/design/xd-design.webp`, category: "design" },
    { name: "framer", icon: `${ASSET_URL}/icons/design/framer-design.webp`, category: "design" },
    { name: "sketch", icon: `${ASSET_URL}/icons/design/sketch-design.webp`, category: "design" },
    { name: "mongodb", icon: `${ASSET_URL}/icons/database/mongodb-database.webp`, category: "database" },
    { name: "flutter", icon: `${ASSET_URL}/icons/mobile/flutter-mobile.webp`, category: "mobile" },

    // Row 2
    { name: "selenium", icon: `${ASSET_URL}/icons/qa/selenium-qa.webp`, category: "qa" },
    { name: "angular", icon: `${ASSET_URL}/icons/front/angular-front.webp`, category: "frontend" },
    { name: "python", icon: `${ASSET_URL}/icons/backend/python-backend.webp`, category: "backend" },
    { name: "lottie", icon: `${ASSET_URL}/icons/design/lottie-design.webp`, category: "design" },
    { name: "spline", icon: `${ASSET_URL}/icons/design/spline-design.webp`, category: "design" },
    { name: "webflow", icon: `${ASSET_URL}/icons/design/webflow-design.webp`, category: "design" },
    { name: "after-effects", icon: `${ASSET_URL}/icons/design/ae-design.webp`, category: "design" },
    { name: "postgresql", icon: `${ASSET_URL}/icons/database/postgresql-database.webp`, category: "database" },
    { name: "react-native", icon: `${ASSET_URL}/icons/mobile/reactjs-mobile.webp`, category: "mobile" },
    { name: "appium", icon: `${ASSET_URL}/icons/qa/appium-qa.webp`, category: "qa" },

    // Row 3
    { name: "vuejs", icon: `${ASSET_URL}/icons/front/vuejs-front.webp`, category: "frontend" },
    { name: "java", icon: `${ASSET_URL}/icons/backend/java-backend.webp`, category: "backend" },
    { name: "mysql", icon: `${ASSET_URL}/icons/database/mysql-database.webp`, category: "database" },
    { name: "android", icon: `${ASSET_URL}/icons/mobile/android-mobile.webp`, category: "mobile" },
    { name: "jmeter", icon: `${ASSET_URL}/icons/qa/jmeter-qa.webp`, category: "qa" },
    { name: "tailwind", icon: `${ASSET_URL}/icons/front/tailwind-css-front.webp`, category: "frontend" },
    { name: "nestjs", icon: `${ASSET_URL}/icons/backend/nestjs-backend.webp`, category: "backend" },
    { name: "redis", icon: `${ASSET_URL}/icons/database/redis-database.webp`, category: "database" },
  ];

  // Database layout - 3 rows with database tools
  const databaseLayout = [
    // Row 1
    { name: "react", icon: `${ASSET_URL}/icons/front/react-front.webp`, category: "frontend" },
    { name: "nodejs", icon: `${ASSET_URL}/icons/backend/nodejs-backend.webp`, category: "backend" },
    { name: "illustrator", icon: `${ASSET_URL}/icons/design/ai-design.webp`, category: "design" },
    { name: "mongodb", icon: `${ASSET_URL}/icons/database/mongodb-database.webp`, category: "database" },
    { name: "mysql", icon: `${ASSET_URL}/icons/database/mysql-database.webp`, category: "database" },
    { name: "postgresql", icon: `${ASSET_URL}/icons/database/postgresql-database.webp`, category: "database" },
    { name: "redis", icon: `${ASSET_URL}/icons/database/redis-database.webp`, category: "database" },
    { name: "flutter", icon: `${ASSET_URL}/icons/mobile/flutter-mobile.webp`, category: "mobile" },
    { name: "selenium", icon: `${ASSET_URL}/icons/qa/selenium-qa.webp`, category: "qa" },

    // Row 2
    { name: "angular", icon: `${ASSET_URL}/icons/front/angular-front.webp`, category: "frontend" },
    { name: "python", icon: `${ASSET_URL}/icons/backend/python-backend.webp`, category: "backend" },
    { name: "photoshop", icon: `${ASSET_URL}/icons/design/photoshop-design.webp`, category: "design" },
    { name: "oracle", icon: `${ASSET_URL}/icons/database/oracle-database.webp`, category: "database" },
    { name: "cassandra", icon: `${ASSET_URL}/icons/database/cassandra-database.webp`, category: "database" },
    { name: "react-native", icon: `${ASSET_URL}/icons/mobile/reactjs-mobile.webp`, category: "mobile" },
    { name: "appium", icon: `${ASSET_URL}/icons/qa/appium-qa.webp`, category: "qa" },
    { name: "vuejs", icon: `${ASSET_URL}/icons/front/vuejs-front.webp`, category: "frontend" },
    { name: "java", icon: `${ASSET_URL}/icons/backend/java-backend.webp`, category: "backend" },
    { name: "framer", icon: `${ASSET_URL}/icons/design/framer-design.webp`, category: "design" },

    // Row 3
    { name: "android", icon: `${ASSET_URL}/icons/mobile/android-mobile.webp`, category: "mobile" },
    { name: "jmeter", icon: `${ASSET_URL}/icons/qa/jmeter-qa.webp`, category: "qa" },
    { name: "nextjs", icon: `${ASSET_URL}/icons/front/nextjs-front.webp`, category: "frontend" },
    { name: "golang", icon: `${ASSET_URL}/icons/backend/golang-backend.webp`, category: "backend" },
    { name: "xd", icon: `${ASSET_URL}/icons/design/xd-design.webp`, category: "design" },
    { name: "ios", icon: `${ASSET_URL}/icons/mobile/ios-mobile.webp`, category: "mobile" },
    { name: "katalon", icon: `${ASSET_URL}/icons/qa/katalon-qa.webp`, category: "qa" },
    { name: "tailwind", icon: `${ASSET_URL}/icons/front/tailwind-css-front.webp`, category: "frontend" },
  ];

  // Mobile layout - 3 rows with mobile tools
  const mobileLayout = [
    // Row 1
    { name: "react", icon: `${ASSET_URL}/icons/front/react-front.webp`, category: "frontend" },
    { name: "nodejs", icon: `${ASSET_URL}/icons/backend/nodejs-backend.webp`, category: "backend" },
    { name: "illustrator", icon: `${ASSET_URL}/icons/design/ai-design.webp`, category: "design" },
    { name: "mongodb", icon: `${ASSET_URL}/icons/database/mongodb-database.webp`, category: "database" },
    { name: "flutter", icon: `${ASSET_URL}/icons/mobile/flutter-mobile.webp`, category: "mobile" },
    { name: "react-native", icon: `${ASSET_URL}/icons/mobile/reactjs-mobile.webp`, category: "mobile" },
    { name: "android", icon: `${ASSET_URL}/icons/mobile/android-mobile.webp`, category: "mobile" },
    { name: "ios", icon: `${ASSET_URL}/icons/mobile/ios-mobile.webp`, category: "mobile" },
    { name: "selenium", icon: `${ASSET_URL}/icons/qa/selenium-qa.webp`, category: "qa" },

    // Row 2
    { name: "angular", icon: `${ASSET_URL}/icons/front/angular-front.webp`, category: "frontend" },
    { name: "python", icon: `${ASSET_URL}/icons/backend/python-backend.webp`, category: "backend" },
    { name: "photoshop", icon: `${ASSET_URL}/icons/design/photoshop-design.webp`, category: "design" },
    { name: "postgresql", icon: `${ASSET_URL}/icons/database/postgresql-database.webp`, category: "database" },
    { name: "kotlin", icon: `${ASSET_URL}/icons/mobile/kotlin-mobile.webp`, category: "mobile" },
    { name: "swift", icon: `${ASSET_URL}/icons/mobile/swift-mobile.webp`, category: "mobile" },
    { name: "ionic", icon: `${ASSET_URL}/icons/mobile/ionic-mobile.webp`, category: "mobile" },
    { name: "xamarin", icon: `${ASSET_URL}/icons/mobile/xamarin-mobile.webp`, category: "mobile" },
    { name: "appium", icon: `${ASSET_URL}/icons/qa/appium-qa.webp`, category: "qa" },
    { name: "vuejs", icon: `${ASSET_URL}/icons/front/vuejs-front.webp`, category: "frontend" },

    // Row 3
    { name: "java", icon: `${ASSET_URL}/icons/backend/java-backend.webp`, category: "backend" },
    { name: "framer", icon: `${ASSET_URL}/icons/design/framer-design.webp`, category: "design" },
    { name: "mysql", icon: `${ASSET_URL}/icons/database/mysql-database.webp`, category: "database" },
    { name: "jetpack", icon: `${ASSET_URL}/icons/mobile/jetpack-mobile.webp`, category: "mobile" },
    { name: "pwa", icon: `${ASSET_URL}/icons/mobile/pwa-mobile.webp`, category: "mobile" },
    { name: "jmeter", icon: `${ASSET_URL}/icons/qa/jmeter-qa.webp`, category: "qa" },
    { name: "nextjs", icon: `${ASSET_URL}/icons/front/nextjs-front.webp`, category: "frontend" },
    { name: "golang", icon: `${ASSET_URL}/icons/backend/golang-backend.webp`, category: "backend" },
  ];

  // QA layout - 3 rows with QA tools
  const qaLayout = [
    // Row 1
    { name: "react", icon: `${ASSET_URL}/icons/front/react-front.webp`, category: "frontend" },
    { name: "nodejs", icon: `${ASSET_URL}/icons/backend/nodejs-backend.webp`, category: "backend" },
    { name: "illustrator", icon: `${ASSET_URL}/icons/design/ai-design.webp`, category: "design" },
    { name: "mongodb", icon: `${ASSET_URL}/icons/database/mongodb-database.webp`, category: "database" },
    { name: "flutter", icon: `${ASSET_URL}/icons/mobile/flutter-mobile.webp`, category: "mobile" },
    { name: "selenium", icon: `${ASSET_URL}/icons/qa/selenium-qa.webp`, category: "qa" },
    { name: "appium", icon: `${ASSET_URL}/icons/qa/appium-qa.webp`, category: "qa" },
    { name: "jmeter", icon: `${ASSET_URL}/icons/qa/jmeter-qa.webp`, category: "qa" },
    { name: "katalon", icon: `${ASSET_URL}/icons/qa/katalon-qa.webp`, category: "qa" },

    // Row 2
    { name: "angular", icon: `${ASSET_URL}/icons/front/angular-front.webp`, category: "frontend" },
    { name: "python", icon: `${ASSET_URL}/icons/backend/python-backend.webp`, category: "backend" },
    { name: "photoshop", icon: `${ASSET_URL}/icons/design/photoshop-design.webp`, category: "design" },
    { name: "postgresql", icon: `${ASSET_URL}/icons/database/postgresql-database.webp`, category: "database" },
    { name: "react-native", icon: `${ASSET_URL}/icons/mobile/reactjs-mobile.webp`, category: "mobile" },
    { name: "lambda", icon: `${ASSET_URL}/icons/qa/lambda-qa.webp`, category: "qa" },
    { name: "vuejs", icon: `${ASSET_URL}/icons/front/vuejs-front.webp`, category: "frontend" },
    { name: "java", icon: `${ASSET_URL}/icons/backend/java-backend.webp`, category: "backend" },
    { name: "framer", icon: `${ASSET_URL}/icons/design/framer-design.webp`, category: "design" },
    { name: "mysql", icon: `${ASSET_URL}/icons/database/mysql-database.webp`, category: "database" },

    // Row 3
    { name: "android", icon: `${ASSET_URL}/icons/mobile/android-mobile.webp`, category: "mobile" },
    { name: "nextjs", icon: `${ASSET_URL}/icons/front/nextjs-front.webp`, category: "frontend" },
    { name: "golang", icon: `${ASSET_URL}/icons/backend/golang-backend.webp`, category: "backend" },
    { name: "xd", icon: `${ASSET_URL}/icons/design/xd-design.webp`, category: "design" },
    { name: "redis", icon: `${ASSET_URL}/icons/database/redis-database.webp`, category: "database" },
    { name: "ios", icon: `${ASSET_URL}/icons/mobile/ios-mobile.webp`, category: "mobile" },
    { name: "tailwind", icon: `${ASSET_URL}/icons/front/tailwind-css-front.webp`, category: "frontend" },
    { name: "nestjs", icon: `${ASSET_URL}/icons/backend/nestjs-backend.webp`, category: "backend" },
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
          .hex-wrapper:nth-of-type(1) { margin-left: -560px; margin-top: -108px; }
          .hex-wrapper:nth-of-type(2) { margin-left: -420px; margin-top: -108px; }
          .hex-wrapper:nth-of-type(3) { margin-left: -280px; margin-top: -108px; }
          .hex-wrapper:nth-of-type(4) { margin-left: -140px; margin-top: -108px; }
          .hex-wrapper:nth-of-type(5) { margin-left: 0px; margin-top: -108px; }
          .hex-wrapper:nth-of-type(6) { margin-left: 140px; margin-top: -108px; }
          .hex-wrapper:nth-of-type(7) { margin-left: 280px; margin-top: -108px; }
          .hex-wrapper:nth-of-type(8) { margin-left: 420px; margin-top: -108px; }
          .hex-wrapper:nth-of-type(9) { margin-left: 560px; margin-top: -108px; }

          /* Row 2 (10 hexagons) */
          .hex-wrapper:nth-of-type(10) { margin-left: -630px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(11) { margin-left: -490px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(12) { margin-left: -350px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(13) { margin-left: -210px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(14) { margin-left: -70px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(15) { margin-left: 70px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(16) { margin-left: 210px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(17) { margin-left: 350px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(18) { margin-left: 490px; margin-top: 0px; }
          .hex-wrapper:nth-of-type(19) { margin-left: 630px; margin-top: 0px; }

          /* Row 3 (8 hexagons) */
          .hex-wrapper:nth-of-type(20) { margin-left: -560px; margin-top: 108px; }
          .hex-wrapper:nth-of-type(21) { margin-left: -420px; margin-top: 108px; }
          .hex-wrapper:nth-of-type(22) { margin-left: -280px; margin-top: 108px; }
          .hex-wrapper:nth-of-type(23) { margin-left: -140px; margin-top: 108px; }
          .hex-wrapper:nth-of-type(24) { margin-left: 0px; margin-top: 108px; }
          .hex-wrapper:nth-of-type(25) { margin-left: 140px; margin-top: 108px; }
          .hex-wrapper:nth-of-type(26) { margin-left: 280px; margin-top: 108px; }
          .hex-wrapper:nth-of-type(27) { margin-left: 420px; margin-top: 108px; }

          /* Larger screens - slightly bigger hexagons */
          @media (max-width: 1600px) {
            .loader { height: 450px; }
            .hex { width: 80px; height: 46.19px; }
            .hex:before, .hex:after { width: 80px; height: 46.19px; }
          }

          /* Medium-large tablets (1200px-1400px) */
          @media (max-width: 1400px) {
            .loader { height: 380px; }
            .hex { width: 60px; height: 34.64px; }
            .hex:before, .hex:after { width: 60px; height: 34.64px; }
            .tech-icon img { width: 30px; height: 30px; }

            /* Scale positions by ~80% */
            .hex-wrapper:nth-of-type(1) { margin-left: -448px; margin-top: -86.4px; }
            .hex-wrapper:nth-of-type(2) { margin-left: -336px; margin-top: -86.4px; }
            .hex-wrapper:nth-of-type(3) { margin-left: -224px; margin-top: -86.4px; }
            .hex-wrapper:nth-of-type(4) { margin-left: -112px; margin-top: -86.4px; }
            .hex-wrapper:nth-of-type(5) { margin-left: 0px; margin-top: -86.4px; }
            .hex-wrapper:nth-of-type(6) { margin-left: 112px; margin-top: -86.4px; }
            .hex-wrapper:nth-of-type(7) { margin-left: 224px; margin-top: -86.4px; }
            .hex-wrapper:nth-of-type(8) { margin-left: 336px; margin-top: -86.4px; }
            .hex-wrapper:nth-of-type(9) { margin-left: 448px; margin-top: -86.4px; }

            .hex-wrapper:nth-of-type(10) { margin-left: -504px; margin-top: 0px; }
            .hex-wrapper:nth-of-type(11) { margin-left: -392px; margin-top: 0px; }
            .hex-wrapper:nth-of-type(12) { margin-left: -280px; margin-top: 0px; }
            .hex-wrapper:nth-of-type(13) { margin-left: -168px; margin-top: 0px; }
            .hex-wrapper:nth-of-type(14) { margin-left: -56px; margin-top: 0px; }
            .hex-wrapper:nth-of-type(15) { margin-left: 56px; margin-top: 0px; }
            .hex-wrapper:nth-of-type(16) { margin-left: 168px; margin-top: 0px; }
            .hex-wrapper:nth-of-type(17) { margin-left: 280px; margin-top: 0px; }
            .hex-wrapper:nth-of-type(18) { margin-left: 392px; margin-top: 0px; }
            .hex-wrapper:nth-of-type(19) { margin-left: 504px; margin-top: 0px; }

            .hex-wrapper:nth-of-type(20) { margin-left: -448px; margin-top: 86.4px; }
            .hex-wrapper:nth-of-type(21) { margin-left: -336px; margin-top: 86.4px; }
            .hex-wrapper:nth-of-type(22) { margin-left: -224px; margin-top: 86.4px; }
            .hex-wrapper:nth-of-type(23) { margin-left: -112px; margin-top: 86.4px; }
            .hex-wrapper:nth-of-type(24) { margin-left: 0px; margin-top: 86.4px; }
            .hex-wrapper:nth-of-type(25) { margin-left: 112px; margin-top: 86.4px; }
            .hex-wrapper:nth-of-type(26) { margin-left: 224px; margin-top: 86.4px; }
            .hex-wrapper:nth-of-type(27) { margin-left: 336px; margin-top: 86.4px; }
          }

          /* Standard tablets (1024px-1200px) */
          @media (max-width: 1200px) {
            .loader { height: 340px; }
            .hex { width: 50px; height: 28.87px; }
            .hex:before, .hex:after { width: 50px; height: 28.87px; }
            .tech-icon img { width: 24px; height: 24px; }

            /* Scale positions by ~66% */
            .hex-wrapper:nth-of-type(1) { margin-left: -373px; margin-top: -72px; }
            .hex-wrapper:nth-of-type(2) { margin-left: -280px; margin-top: -72px; }
            .hex-wrapper:nth-of-type(3) { margin-left: -187px; margin-top: -72px; }
            .hex-wrapper:nth-of-type(4) { margin-left: -93px; margin-top: -72px; }
            .hex-wrapper:nth-of-type(5) { margin-left: 0px; margin-top: -72px; }
            .hex-wrapper:nth-of-type(6) { margin-left: 93px; margin-top: -72px; }
            .hex-wrapper:nth-of-type(7) { margin-left: 187px; margin-top: -72px; }
            .hex-wrapper:nth-of-type(8) { margin-left: 280px; margin-top: -72px; }
            .hex-wrapper:nth-of-type(9) { margin-left: 373px; margin-top: -72px; }

            .hex-wrapper:nth-of-type(10) { margin-left: -420px; margin-top: 0px; }
            .hex-wrapper:nth-of-type(11) { margin-left: -327px; margin-top: 0px; }
            .hex-wrapper:nth-of-type(12) { margin-left: -233px; margin-top: 0px; }
            .hex-wrapper:nth-of-type(13) { margin-left: -140px; margin-top: 0px; }
            .hex-wrapper:nth-of-type(14) { margin-left: -47px; margin-top: 0px; }
            .hex-wrapper:nth-of-type(15) { margin-left: 47px; margin-top: 0px; }
            .hex-wrapper:nth-of-type(16) { margin-left: 140px; margin-top: 0px; }
            .hex-wrapper:nth-of-type(17) { margin-left: 233px; margin-top: 0px; }
            .hex-wrapper:nth-of-type(18) { margin-left: 327px; margin-top: 0px; }
            .hex-wrapper:nth-of-type(19) { margin-left: 420px; margin-top: 0px; }

            .hex-wrapper:nth-of-type(20) { margin-left: -373px; margin-top: 72px; }
            .hex-wrapper:nth-of-type(21) { margin-left: -280px; margin-top: 72px; }
            .hex-wrapper:nth-of-type(22) { margin-left: -187px; margin-top: 72px; }
            .hex-wrapper:nth-of-type(23) { margin-left: -93px; margin-top: 72px; }
            .hex-wrapper:nth-of-type(24) { margin-left: 0px; margin-top: 72px; }
            .hex-wrapper:nth-of-type(25) { margin-left: 93px; margin-top: 72px; }
            .hex-wrapper:nth-of-type(26) { margin-left: 187px; margin-top: 72px; }
            .hex-wrapper:nth-of-type(27) { margin-left: 280px; margin-top: 72px; }
          }

          /* Force hide desktop hex grid on mobile/small tablets */
          @media (max-width: 1023px) {
            .loader { display: none !important; }
          }

          /* Smaller mobile screens */
          @media (max-width: 375px) {
            .mobile-hex { width: 45px; height: 25.98px; }
            .mobile-hex:before, .mobile-hex:after { width: 45px; height: 25.98px; }
            .mobile-tech-icon { width: 20px; height: 20px; }
            .mobile-hex-container { gap: 30px; padding: 0 !important; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Technologies;