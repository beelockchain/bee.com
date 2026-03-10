"use client";
import { useState } from "react";

const services = [
  {
    image: "/assets/images/software-dev/custom-app-dev/mobile-development.svg", // 🔁 Replace with your image path
    title: "Android App Development",
    description:
      "Beelockchain offers reliable Android app development using Java, Kotlin, and cross-platform frameworks to create dependable mobile applications for Android Mobile, Tablet, and TV. Our process includes strategy, UI/UX, development, QA, and deployment.",
  },
  {
    image: "/assets/images/software-dev/custom-app-dev/app-development.svg",
    title: "iOS App Development",
    description:
      "Our iOS app development services help reach elite prospects with stable, full-fledged iOS apps. Using Swift and Apple frameworks, our developers follow a complete process from idea and UI/UX to development, testing, and App Store launch.",
  },
  {
    image: "/assets/images/software-dev/custom-app-dev/Flutter.svg",
    title: "Flutter App Development",
    description:
      "Beelockchain Flutter App Development delivers high-end performance for Android and iOS from one codebase. We develop responsive, native-feeling mobile apps ensuring user satisfaction across every screen and platform.",
  },
  {
    image: "/assets/images/software-dev/custom-app-dev/Reactnative.svg",
    title: "React Native App Development",
    description:
      "We build next-generation mobile apps with React Native — visually attractive, strong, secure, and high-performing applications that work hassle-free on Android and iOS.",
  },
  {
    image: "/assets/images/software-dev/custom-app-dev/Pwa.svg",
    title: "PWA App Development",
    description:
      "Our PWA Development services combine modern web technologies like HTML, CSS, and JavaScript to provide installable, cross-platform web apps with offline functionality, fast load times, and engaging UI.",
  },
  {
    image: "/assets/images/software-dev/custom-app-dev/Webapp.svg",
    title: "Web App Development",
    description:
      "Our web app development services offer end-to-end solutions. We build web applications with React, Node.js, and Django, providing responsive frontends, reliable backend architecture, and API integration.",
  },
  {
    image: "/assets/images/software-dev/custom-app-dev/Wearableapp.svg",
    title: "Wearable App Development",
    description:
      "We design innovative wearable apps for iOS and Android smart devices, specializing in health monitoring, activity tracking, and interactive notifications — following global coding standards and best practices.",
  },
  {
    image: "/assets/images/software-dev/custom-app-dev/CrossPlatform.svg",
    title: "Cross-Platform App Development",
    description:
      "Beelockchain builds custom web and mobile apps for Android, iOS, and Windows offering cross-platform support, rich features, and a hassle-free user experience built to grow your business.",
  },
  {
    image: "/assets/images/software-dev/custom-app-dev/ERP.svg",
    title: "ERP App Development",
    description:
      "At Beelockchain, we develop robust ERP applications for your unique operational demands of modern enterprises. Our solutions align complex business processes, ensure data accuracy, and provide end-to-end visibility into performance metrics.",
  },
];

const delayClasses = [
  "delay-[50ms]",
  "delay-[120ms]",
  "delay-[190ms]",
  "delay-[260ms]",
  "delay-[330ms]",
  "delay-[400ms]",
  "delay-[470ms]",
  "delay-[540ms]",
  "delay-[610ms]",
];

const ServiceCard = ({ service }: { service: (typeof services)[0] }) => {
  return (
    <div
      className="relative overflow-hidden rounded-xl p-8 border-2 cursor-default bg-gray-100 border-gray-100 shadow-sm"
    >
      {/* Image */}
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 overflow-hidden bg-white border border-gray-200">
        <img
          src={service.image}
          alt={service.title}
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold leading-snug mb-3 text-gray-900">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-gray-500 h-36">
        {service.description}
      </p>
    </div>
  );
};

const BlockchainLeader = () => {
  const [active, setActive] = useState(false);

  return (
    <section
      className="relative py-20 px-6 min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-[20px] md:text-[25px] lg:text-[35px] xl:text-[48px] font-bold text-gray-900 mb-4">
            What Makes
            <span data-text="Beelockchain A Leader" className="shine-text text-[#F5B800] relative mx-4">Beelockchain A Leader</span>
            In Custom
            <br className="hidden sm:block" /> Mobile App Development Services
          </h2>

          <p className="text-gray-400 text-sm leading-7 max-w-xl mx-auto mb-8">
            Every business faces unique challenges throughout the mobile app
            development process. Beelockchain provides custom mobile development
            solutions focused on solving complex challenges with innovative and
            user-friendly mobile solutions globally.
          </p>

          {/* CTA Button */}
          <div className="w-full flex justify-center items-center">
            <button
              onTouchStart={() => setActive(true)}
              onTouchEnd={() => setActive(false)}
              onMouseLeave={() => setActive(false)}
              className="group relative flex items-center gap-2 px-4 py-2 lg:px-4 lg:py-0 border border-black rounded-full overflow-hidden cursor-pointer"
            >
              {/* Expand Circle */}
              <span className="absolute inset-0 flex items-center justify-center z-0">
                <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
              </span>

              {/* Glow */}
              <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />

              {/* Text */}
              <span className="relative z-10 text-black text-sm whitespace-nowrap transition-colors">
                Talk To Our Experts
              </span>

              {/* Icon */}
              <svg
                viewBox="0 0 56 55"
                className="relative z-10 w-10 h-10 lg:w-14 lg:h-14 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95"
              >
                <circle
                  cx="28.2"
                  cy="27.1"
                  r="15.9"
                  fill="#F6E000"
                  stroke="#F9C901"
                  strokeWidth="1.5"
                />
                <path
                  d="M31.3 22.1L33.2 29.4M31.3 22.1L24.1 24.1M31.3 22.1L25.1 32.8"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-cover bg-center bg-no-repeat w-full"
          style={{
            backgroundImage:
              "url('/assets/images/software-dev/custom-app-dev/Blockchainleader.svg')",
          }}
        >
          {services.map((service, i) => (
            <div key={i} className={`animate-fade-up ${delayClasses[i]}`}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockchainLeader;