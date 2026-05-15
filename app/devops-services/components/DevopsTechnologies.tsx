"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DevopsTechnologies = () => {
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
      icon: `assets/images/devops/icons/Containerization/icon1.png`,
      category: "Containerization",
    },
    {
      name: "mongodb",
      icon: `assets/images/devops/icons/Containerization/icon2.png`,
      category: "Containerization",
    },

    {
      name: "nodejs",
      icon: `assets/images/devops/icons/Cloud Platforms/icon1.png`,
      category: "Cloud Platforms",
    },
    {
      name: "illustrator",
      icon: `assets/images/devops/icons/Cloud Platforms/icon2.png`,
      category: "Cloud Platforms",
    },
    {
      name: "flutter",
      icon: `assets/images/devops/icons/Cloud Platforms/icon3.png`,
      category: "Cloud Platforms",
    },
    {
      name: "selenium",
      icon: `assets/images/devops/icons/Cloud Platforms/icon4.png`,
      category: "Cloud Platforms",
    },

    {
      name: "angular",
      icon: `assets/images/devops/icons/Container Orchestration/icon1.png`,
      category: "Container Orchestration",
    },
    {
      name: "python",
      icon: `assets/images/devops/icons/Container Orchestration/icon2.png`,
      category: "Container Orchestration",
    },
    {
      name: "photoshop",
      icon: `assets/images/devops/icons/Container Orchestration/icon3.png`,
      category: "Container Orchestration",
    },

    // Row 2 - 10 hexagons
    {
      name: "postgresql",
      icon: `assets/images/devops/icons/Infrastructure as Code (IaC)/icon1.png`,
      category: "Infrastructure as Code (IaC)",
    },
    {
      name: "react-native",
      icon: `assets/images/devops/icons/Infrastructure as Code (IaC)/icon2.png`,
      category: "Infrastructure as Code (IaC)",
    },
    {
      name: "appium",
      icon: `assets/images/devops/icons/Infrastructure as Code (IaC)/icon3.png`,
      category: "Infrastructure as Code (IaC)",
    },
    {
      name: "vuejs",
      icon: `assets/images/devops/icons/Infrastructure as Code (IaC)/icon4.png`,
      category: "Infrastructure as Code (IaC)",
    },

    {
      name: "java",
      icon: `assets/images/devops/icons/Infrastructure Automation/icon1.png`,
      category: "Infrastructure Automation",
    },
    {
      name: "framer",
      icon: `assets/images/devops/icons/Infrastructure Automation/icon2.png`,
      category: "Infrastructure Automation",
    },
    {
      name: "mysql",
      icon: `assets/images/devops/icons/Infrastructure Automation/icon3.png`,
      category: "Infrastructure Automation",
    },
    {
      name: "android",
      icon: `assets/images/devops/icons/Infrastructure Automation/icon4.png`,
      category: "Infrastructure Automation",
    },

    {
      name: "jmeter",
      icon: `assets/images/devops/icons/Security & DevSecOps Suricata/icon1.png`,
      category: "Security & DevSecOps Suricata",
    },
    {
      name: "nextjs",
      icon: `assets/images/devops/icons/Security & DevSecOps Suricata/icon2.png`,
      category: "Security & DevSecOps Suricata",
    },
    // Row 3 - 8 hexagons
    {
      name: "golang",
      icon: `assets/images/devops/icons/Security & DevSecOps Suricata/icon3.png`,
      category: "Security & DevSecOps Suricata",
    },
    {
      name: "xd",
      icon: `assets/images/devops/icons/Security & DevSecOps Suricata/icon4.png`,
      category: "Security & DevSecOps Suricata",
    },
    {
      name: "redis",
      icon: `assets/images/devops/icons/Security & DevSecOps Suricata/icon5.png`,
      category: "Security & DevSecOps Suricata",
    },

    {
      name: "ios",
      icon: `assets/images/devops/icons/Testing Automation Tools/icon1.png`,
      category: "Testing Automation Tools",
    },
    {
      name: "katalon",
      icon: `assets/images/devops/icons/Testing Automation Tools/icon2.png`,
      category: "Testing Automation Tools",
    },
    {
      name: "tailwind",
      icon: `assets/images/devops/icons/Testing Automation Tools/icon3.png`,
      category: "Testing Automation Tools",
    },
    {
      name: "nestjs",
      icon: `assets/images/devops/icons/Testing Automation Tools/icon4.png`,
      category: "Testing Automation Tools",
    },
    {
      name: "sketch",
      icon: `assets/images/devops/icons/Testing Automation Tools/icon5.png`,
      category: "Testing Automation Tools",
    },
  ];

  // Frontend layout - 3 rows with frontend tools
  const Containerization = [
    // Row 1
    {
      name: "react",
      icon: `assets/images/devops/icons/Containerization/icon1.png`,
      category: "Containerization",
    },
    {
      name: "angular",
      icon: `assets/images/devops/icons/Container Orchestration/icon1.png`,
      category: "Container Orchestration",
    },
    {
      name: "nodejs",
      icon: `assets/images/devops/icons/Cloud Platforms/icon1.png`,
      category: "Cloud Platforms",
    },
    {
      name: "illustrator",
      icon: `assets/images/devops/icons/Cloud Platforms/icon2.png`,
      category: "Cloud Platforms",
    },
    {
      name: "flutter",
      icon: `assets/images/devops/icons/Cloud Platforms/icon3.png`,
      category: "Cloud Platforms",
    },
    {
      name: "selenium",
      icon: `assets/images/devops/icons/Cloud Platforms/icon4.png`,
      category: "Cloud Platforms",
    },
    {
      name: "angular",
      icon: `assets/images/devops/icons/Containerization/icon2.png`,
      category: "Containerization",
    },
    {
      name: "python",
      icon: `assets/images/devops/icons/Container Orchestration/icon2.png`,
      category: "Container Orchestration",
    },
    {
      name: "photoshop",
      icon: `assets/images/devops/icons/Container Orchestration/icon3.png`,
      category: "Container Orchestration",
    },
    // Row 2 - 10 hexagons
    {
      name: "postgresql",
      icon: `assets/images/devops/icons/Infrastructure as Code (IaC)/icon1.png`,
      category: "Infrastructure as Code (IaC)",
    },
    {
      name: "react-native",
      icon: `assets/images/devops/icons/Infrastructure as Code (IaC)/icon2.png`,
      category: "Infrastructure as Code (IaC)",
    },
    {
      name: "appium",
      icon: `assets/images/devops/icons/Infrastructure as Code (IaC)/icon3.png`,
      category: "Infrastructure as Code (IaC)",
    },
    {
      name: "vuejs",
      icon: `assets/images/devops/icons/Infrastructure as Code (IaC)/icon4.png`,
      category: "Infrastructure as Code (IaC)",
    },

    {
      name: "java",
      icon: `assets/images/devops/icons/Infrastructure Automation/icon1.png`,
      category: "Infrastructure Automation",
    },
    {
      name: "framer",
      icon: `assets/images/devops/icons/Infrastructure Automation/icon2.png`,
      category: "Infrastructure Automation",
    },
    {
      name: "mysql",
      icon: `assets/images/devops/icons/Infrastructure Automation/icon3.png`,
      category: "Infrastructure Automation",
    },
    {
      name: "android",
      icon: `assets/images/devops/icons/Infrastructure Automation/icon4.png`,
      category: "Infrastructure Automation",
    },

    {
      name: "jmeter",
      icon: `assets/images/devops/icons/Security & DevSecOps Suricata/icon1.png`,
      category: "Security & DevSecOps Suricata",
    },
    {
      name: "nextjs",
      icon: `assets/images/devops/icons/Security & DevSecOps Suricata/icon2.png`,
      category: "Security & DevSecOps Suricata",
    },
    // Row 3 - 8 hexagons
    {
      name: "golang",
      icon: `assets/images/devops/icons/Security & DevSecOps Suricata/icon3.png`,
      category: "Security & DevSecOps Suricata",
    },
    {
      name: "xd",
      icon: `assets/images/devops/icons/Security & DevSecOps Suricata/icon4.png`,
      category: "Security & DevSecOps Suricata",
    },
    {
      name: "redis",
      icon: `assets/images/devops/icons/Security & DevSecOps Suricata/icon5.png`,
      category: "Security & DevSecOps Suricata",
    },

    {
      name: "ios",
      icon: `assets/images/devops/icons/Testing Automation Tools/icon1.png`,
      category: "Testing Automation Tools",
    },
    {
      name: "katalon",
      icon: `assets/images/devops/icons/Testing Automation Tools/icon2.png`,
      category: "Testing Automation Tools",
    },
    {
      name: "tailwind",
      icon: `assets/images/devops/icons/Testing Automation Tools/icon3.png`,
      category: "Testing Automation Tools",
    },
    {
      name: "nestjs",
      icon: `assets/images/devops/icons/Testing Automation Tools/icon4.png`,
      category: "Testing Automation Tools",
    },
    {
      name: "sketch",
      icon: `assets/images/devops/icons/Testing Automation Tools/icon5.png`,
      category: "Testing Automation Tools",
    },
  ];

  // Design layout - 3 rows with design tools
  const ContainerOrchestration = [
    // Row 1
    {
      name: "react",
      icon: `assets/images/devops/icons/front/react-front.webp`,
      category: "frontend",
    },
    {
      name: "nodejs",
      icon: `assets/images/devops/icons/backend/nodejs-backend.webp`,
      category: "backend",
    },
    {
      name: "illustrator",
      icon: `assets/images/devops/icons/design/ai-design.webp`,
      category: "design",
    },
    {
      name: "photoshop",
      icon: `assets/images/devops/icons/design/photoshop-design.webp`,
      category: "design",
    },
    {
      name: "xd",
      icon: `assets/images/devops/icons/design/xd-design.webp`,
      category: "design",
    },
    {
      name: "framer",
      icon: `assets/images/devops/icons/design/framer-design.webp`,
      category: "design",
    },
    {
      name: "sketch",
      icon: `assets/images/devops/icons/design/sketch-design.webp`,
      category: "design",
    },
    {
      name: "mongodb",
      icon: `assets/images/devops/icons/database/mongodb-database.webp`,
      category: "database",
    },
    {
      name: "flutter",
      icon: `assets/images/devops/icons/mobile/flutter-mobile.webp`,
      category: "mobile",
    },

    // Row 2
    {
      name: "angular",
      icon: `assets/images/devops/icons/Container Orchestration/icon1.png`,
      category: "Container Orchestration",
    },
    {
      name: "python",
      icon: `assets/images/devops/icons/Container Orchestration/icon2.png`,
      category: "Container Orchestration",
    },
    {
      name: "photoshop",
      icon: `assets/images/devops/icons/Container Orchestration/icon3.png`,
      category: "Container Orchestration",
    },
    {
      name: "lottie",
      icon: `assets/images/devops/icons/design/lottie-design.webp`,
      category: "design",
    },
    {
      name: "spline",
      icon: `assets/images/devops/icons/design/spline-design.webp`,
      category: "design",
    },
    {
      name: "webflow",
      icon: `assets/images/devops/icons/design/webflow-design.webp`,
      category: "design",
    },
    {
      name: "after-effects",
      icon: `assets/images/devops/icons/design/ae-design.webp`,
      category: "design",
    },
    {
      name: "postgresql",
      icon: `assets/images/devops/icons/database/postgresql-database.webp`,
      category: "database",
    },
    {
      name: "react-native",
      icon: `assets/images/devops/icons/mobile/reactjs-mobile.webp`,
      category: "mobile",
    },
    {
      name: "appium",
      icon: `assets/images/devops/icons/qa/appium-qa.webp`,
      category: "qa",
    },

    // Row 3
    {
      name: "vuejs",
      icon: `assets/images/devops/icons/front/vuejs-front.webp`,
      category: "frontend",
    },
    {
      name: "java",
      icon: `assets/images/devops/icons/backend/java-backend.webp`,
      category: "backend",
    },
    {
      name: "mysql",
      icon: `assets/images/devops/icons/database/mysql-database.webp`,
      category: "database",
    },
    {
      name: "android",
      icon: `assets/images/devops/icons/mobile/android-mobile.webp`,
      category: "mobile",
    },
    {
      name: "jmeter",
      icon: `assets/images/devops/icons/qa/jmeter-qa.webp`,
      category: "qa",
    },
    {
      name: "tailwind",
      icon: `assets/images/devops/icons/front/tailwind-css-front.webp`,
      category: "frontend",
    },
    {
      name: "nestjs",
      icon: `assets/images/devops/icons/backend/nestjs-backend.webp`,
      category: "backend",
    },
    {
      name: "redis",
      icon: `assets/images/devops/icons/database/redis-database.webp`,
      category: "database",
    },
  ];

  // Database layout - 3 rows with database tools
  const databaseLayout = [
    // Row 1
    {
      name: "react",
      icon: `assets/images/devops/icons/front/react-front.webp`,
      category: "frontend",
    },
    {
      name: "nodejs",
      icon: `assets/images/devops/icons/backend/nodejs-backend.webp`,
      category: "backend",
    },
    {
      name: "illustrator",
      icon: `assets/images/devops/icons/design/ai-design.webp`,
      category: "design",
    },
    {
      name: "mongodb",
      icon: `assets/images/devops/icons/database/mongodb-database.webp`,
      category: "database",
    },
    {
      name: "mysql",
      icon: `assets/images/devops/icons/database/mysql-database.webp`,
      category: "database",
    },
    {
      name: "postgresql",
      icon: `assets/images/devops/icons/database/postgresql-database.webp`,
      category: "database",
    },
    {
      name: "redis",
      icon: `assets/images/devops/icons/database/redis-database.webp`,
      category: "database",
    },
    {
      name: "flutter",
      icon: `assets/images/devops/icons/mobile/flutter-mobile.webp`,
      category: "mobile",
    },
    {
      name: "selenium",
      icon: `assets/images/devops/icons/qa/selenium-qa.webp`,
      category: "qa",
    },

    // Row 2
    {
      name: "angular",
      icon: `assets/images/devops/icons/front/angular-front.webp`,
      category: "frontend",
    },
    {
      name: "python",
      icon: `assets/images/devops/icons/backend/python-backend.webp`,
      category: "backend",
    },
    {
      name: "photoshop",
      icon: `assets/images/devops/icons/design/photoshop-design.webp`,
      category: "design",
    },
    {
      name: "oracle",
      icon: `assets/images/devops/icons/database/oracle-database.webp`,
      category: "database",
    },
    {
      name: "cassandra",
      icon: `assets/images/devops/icons/database/cassandra-database.webp`,
      category: "database",
    },
    {
      name: "react-native",
      icon: `assets/images/devops/icons/mobile/reactjs-mobile.webp`,
      category: "mobile",
    },
    {
      name: "appium",
      icon: `assets/images/devops/icons/qa/appium-qa.webp`,
      category: "qa",
    },
    {
      name: "vuejs",
      icon: `assets/images/devops/icons/front/vuejs-front.webp`,
      category: "frontend",
    },
    {
      name: "java",
      icon: `assets/images/devops/icons/backend/java-backend.webp`,
      category: "backend",
    },
    {
      name: "framer",
      icon: `assets/images/devops/icons/design/framer-design.webp`,
      category: "design",
    },

    // Row 3
    {
      name: "android",
      icon: `assets/images/devops/icons/mobile/android-mobile.webp`,
      category: "mobile",
    },
    {
      name: "jmeter",
      icon: `assets/images/devops/icons/qa/jmeter-qa.webp`,
      category: "qa",
    },
    {
      name: "nextjs",
      icon: `assets/images/devops/icons/front/nextjs-front.webp`,
      category: "frontend",
    },
    {
      name: "golang",
      icon: `assets/images/devops/icons/backend/golang-backend.webp`,
      category: "backend",
    },
    {
      name: "xd",
      icon: `assets/images/devops/icons/design/xd-design.webp`,
      category: "design",
    },
    {
      name: "ios",
      icon: `assets/images/devops/icons/mobile/ios-mobile.webp`,
      category: "mobile",
    },
    {
      name: "katalon",
      icon: `assets/images/devops/icons/qa/katalon-qa.webp`,
      category: "qa",
    },
    {
      name: "tailwind",
      icon: `assets/images/devops/icons/front/tailwind-css-front.webp`,
      category: "frontend",
    },
  ];

  // Mobile layout - 3 rows with mobile tools
  const mobileLayout = [
    // Row 1
    {
      name: "react",
      icon: `assets/images/devops/icons/front/react-front.webp`,
      category: "frontend",
    },
    {
      name: "nodejs",
      icon: `assets/images/devops/icons/backend/nodejs-backend.webp`,
      category: "backend",
    },
    {
      name: "illustrator",
      icon: `assets/images/devops/icons/design/ai-design.webp`,
      category: "design",
    },
    {
      name: "mongodb",
      icon: `assets/images/devops/icons/database/mongodb-database.webp`,
      category: "database",
    },
    {
      name: "flutter",
      icon: `assets/images/devops/icons/mobile/flutter-mobile.webp`,
      category: "mobile",
    },
    {
      name: "react-native",
      icon: `assets/images/devops/icons/mobile/reactjs-mobile.webp`,
      category: "mobile",
    },
    {
      name: "android",
      icon: `assets/images/devops/icons/mobile/android-mobile.webp`,
      category: "mobile",
    },
    {
      name: "ios",
      icon: `assets/images/devops/icons/mobile/ios-mobile.webp`,
      category: "mobile",
    },
    {
      name: "selenium",
      icon: `assets/images/devops/icons/qa/selenium-qa.webp`,
      category: "qa",
    },

    // Row 2
    {
      name: "angular",
      icon: `assets/images/devops/icons/front/angular-front.webp`,
      category: "frontend",
    },
    {
      name: "python",
      icon: `assets/images/devops/icons/backend/python-backend.webp`,
      category: "backend",
    },
    {
      name: "photoshop",
      icon: `assets/images/devops/icons/design/photoshop-design.webp`,
      category: "design",
    },
    {
      name: "postgresql",
      icon: `assets/images/devops/icons/database/postgresql-database.webp`,
      category: "database",
    },
    {
      name: "kotlin",
      icon: `assets/images/devops/icons/mobile/kotlin-mobile.webp`,
      category: "mobile",
    },
    {
      name: "swift",
      icon: `assets/images/devops/icons/mobile/swift-mobile.webp`,
      category: "mobile",
    },
    {
      name: "ionic",
      icon: `assets/images/devops/icons/mobile/ionic-mobile.webp`,
      category: "mobile",
    },
    {
      name: "xamarin",
      icon: `assets/images/devops/icons/mobile/xamarin-mobile.webp`,
      category: "mobile",
    },
    {
      name: "appium",
      icon: `assets/images/devops/icons/qa/appium-qa.webp`,
      category: "qa",
    },
    {
      name: "vuejs",
      icon: `assets/images/devops/icons/front/vuejs-front.webp`,
      category: "frontend",
    },

    // Row 3
    {
      name: "java",
      icon: `assets/images/devops/icons/backend/java-backend.webp`,
      category: "backend",
    },
    {
      name: "framer",
      icon: `assets/images/devops/icons/design/framer-design.webp`,
      category: "design",
    },
    {
      name: "mysql",
      icon: `assets/images/devops/icons/database/mysql-database.webp`,
      category: "database",
    },
    {
      name: "jetpack",
      icon: `assets/images/devops/icons/mobile/jetpack-mobile.webp`,
      category: "mobile",
    },
    {
      name: "pwa",
      icon: `assets/images/devops/icons/mobile/pwa-mobile.webp`,
      category: "mobile",
    },
    {
      name: "jmeter",
      icon: `assets/images/devops/icons/qa/jmeter-qa.webp`,
      category: "qa",
    },
    {
      name: "nextjs",
      icon: `assets/images/devops/icons/front/nextjs-front.webp`,
      category: "frontend",
    },
    {
      name: "golang",
      icon: `assets/images/devops/icons/backend/golang-backend.webp`,
      category: "backend",
    },
  ];

  // QA layout - 3 rows with QA tools
  const qaLayout = [
    // Row 1
    {
      name: "react",
      icon: `assets/images/devops/icons/front/react-front.webp`,
      category: "frontend",
    },
    {
      name: "nodejs",
      icon: `assets/images/devops/icons/backend/nodejs-backend.webp`,
      category: "backend",
    },
    {
      name: "illustrator",
      icon: `assets/images/devops/icons/design/ai-design.webp`,
      category: "design",
    },
    {
      name: "mongodb",
      icon: `assets/images/devops/icons/database/mongodb-database.webp`,
      category: "database",
    },
    {
      name: "flutter",
      icon: `assets/images/devops/icons/mobile/flutter-mobile.webp`,
      category: "mobile",
    },
    {
      name: "selenium",
      icon: `assets/images/devops/icons/qa/selenium-qa.webp`,
      category: "qa",
    },
    {
      name: "appium",
      icon: `assets/images/devops/icons/qa/appium-qa.webp`,
      category: "qa",
    },
    {
      name: "jmeter",
      icon: `assets/images/devops/icons/qa/jmeter-qa.webp`,
      category: "qa",
    },
    {
      name: "katalon",
      icon: `assets/images/devops/icons/qa/katalon-qa.webp`,
      category: "qa",
    },

    // Row 2
    {
      name: "angular",
      icon: `assets/images/devops/icons/front/angular-front.webp`,
      category: "frontend",
    },
    {
      name: "python",
      icon: `assets/images/devops/icons/backend/python-backend.webp`,
      category: "backend",
    },
    {
      name: "photoshop",
      icon: `assets/images/devops/icons/design/photoshop-design.webp`,
      category: "design",
    },
    {
      name: "postgresql",
      icon: `assets/images/devops/icons/database/postgresql-database.webp`,
      category: "database",
    },
    {
      name: "react-native",
      icon: `assets/images/devops/icons/mobile/reactjs-mobile.webp`,
      category: "mobile",
    },
    {
      name: "lambda",
      icon: `assets/images/devops/icons/qa/lambda-qa.webp`,
      category: "qa",
    },
    {
      name: "vuejs",
      icon: `assets/images/devops/icons/front/vuejs-front.webp`,
      category: "frontend",
    },
    {
      name: "java",
      icon: `assets/images/devops/icons/backend/java-backend.webp`,
      category: "backend",
    },
    {
      name: "framer",
      icon: `assets/images/devops/icons/design/framer-design.webp`,
      category: "design",
    },
    {
      name: "mysql",
      icon: `assets/images/devops/icons/database/mysql-database.webp`,
      category: "database",
    },

    // Row 3
    {
      name: "android",
      icon: `assets/images/devops/icons/mobile/android-mobile.webp`,
      category: "mobile",
    },
    {
      name: "nextjs",
      icon: `assets/images/devops/icons/front/nextjs-front.webp`,
      category: "frontend",
    },
    {
      name: "golang",
      icon: `assets/images/devops/icons/backend/golang-backend.webp`,
      category: "backend",
    },
    {
      name: "xd",
      icon: `assets/images/devops/icons/design/xd-design.webp`,
      category: "design",
    },
    {
      name: "redis",
      icon: `assets/images/devops/icons/database/redis-database.webp`,
      category: "database",
    },
    {
      name: "ios",
      icon: `assets/images/devops/icons/mobile/ios-mobile.webp`,
      category: "mobile",
    },
    {
      name: "tailwind",
      icon: `assets/images/devops/icons/front/tailwind-css-front.webp`,
      category: "frontend",
    },
    {
      name: "nestjs",
      icon: `assets/images/devops/icons/backend/nestjs-backend.webp`,
      category: "backend",
    },
  ];

  const currentLayout = defaultLayout;

  const categories = [
    { key: null as string | null, label: "All" },
    ...Array.from(new Set(defaultLayout.map((tech) => tech.category))).map(
      (category) => ({
        key: category,
        label:
          category === "Security & DevSecOps Suricata"
            ? "Security & DevSecOps"
            : category,
      }),
    ),
  ];

  return (
    <div ref={sectionRef}>
      <div ref={gridRef} className="w-full bg-white py-0">
        <div className="max-w-[1400px] mx-auto px-6 text-center flex flex-col items-center justify-center">
          {/* Heading */}
          <h2
            className=" mb-6
       text-[17px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px] text-black font-bold leading-tight"
          >
            DevOps
            <span
              data-text="Beelockchain A Leader"
              className="shine-text text-[#F5B800] relative mx-1"
            >
              Technology Stack
            </span>
            We Use For <br /> Scalable Software Delivery
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

export default DevopsTechnologies;
