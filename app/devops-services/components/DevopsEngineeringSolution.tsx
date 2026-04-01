"use client";
import { useState, useEffect, useRef } from "react";
const DevopsEngineeringSolution = () => {
  const [active, setActive] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);



  const cards = [
    {
      number: "01",
      title: "DevOps Strategy & Assessment",
      description:
        "We evaluate your current development lifecycle, infrastructure dependencies, and deployment workflows to create a customized DevOps adoption roadmap aligned with your business goals",
    },
    {
      number: "02",
      title: "DevOps Audits & Consulting",
      description:
        "We evaluate your DevOps workflows, audit existing infrastructure, and review development pipelines to identify automation opportunities. Our DevOps experts recommend suitable tools and eliminate unnecessary tasks to improve deployment efficiency and infrastructure performance.",
    },
    {
      number: "03",
      title: "CI/CD Pipeline Implementation",
      description:
        "Automated CI/CD pipelines are implemented to streamline code integration, testing, and deployment across development and production environments.",
    },
    {
      number: "04",
      title: "Infrastructure as Code (IaC)",
      description:
        "Infrastructure provisioning is automated using IaC frameworks to ensure deployment consistency across environments and eliminate configuration drift.",
    },
  ];

  return (
    <div className="w-full bg-white py-8 px-6 md:px-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className=" text-[19px] sm:text-[19px] md:text-[21px] leading-tight lg:text-[28px] xl:text-[36px] text-black font-bold  mb-4 ">
          <span data-text="Beelockchain:" className="shine-text text-[#F5B800] relative mx-0">DevOps Consulting & Engineering</span> Services
        </h2>
        <p className="text-black text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-poppins leading-relaxed font-medium  mb-6 max-w-2xl mx-auto">
         Beelockchain provides end-to-end DevOps consulting and engineering services designed to automate development workflows and maintain scalable infrastructure across cloud environments.
        </p>

       
      </div>

      {/* 
         FIX APPLIED HERE:
         Changed 'h-auto md:h-[500px] lg:h-auto' to just 'h-auto'.
         The fixed 500px height was causing the content to overflow and overlap the next section.
         'h-auto' allows the container to grow to the natural height of the cards.
      */}
      <div ref={containerRef} className="max-w-6xl mx-auto flex flex-col md:flex-row  lg:flex-row items-center  gap-8 lg:gap-10 h-auto mt-6 lg:mt-0">
        
        {/* Image Section - First on mobile/tablet, right on desktop */}
        <div ref={imageRef} className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center h-full order-none md:order-2 lg:order-2">
          <img
            src="/assets/images/devops/devops-solution.png"
            alt="Beelockchain mobile app"
            className="max-w-[280px] md:max-w-[200px] lg:max-w-full w-auto h-auto object-contain mx-auto"
          />
        </div>

        {/* Cards Section - Below image on mobile/tablet, left on desktop */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 order-none md:order-1 lg:order-1">
          {cards.map((card) => (
            <div
              key={card.number}
              className="relative bg-[#ebebeb] lg:bg-[#E2E2E2] border border-gray-200 rounded-xl lg:rounded-2xl p-4 md:p-5 lg:p-4 flex flex-col gap-1 hover:shadow-md transition-shadow duration-200 overflow-hidden lg:overflow-visible"
            >
              <h3 className="text-left text-[14px] sm:text-[15px] md:text-[13px] lg:text-lg font-semibold font-poppins text-black relative z-10 pr-2 lg:pr-0">
                {card.title}
              </h3>
              <p className="text-left text-black text-[11.5px] sm:text-[13px] md:text-[10px] lg:text-sm xl:text-sm font-medium font-poppins leading-relaxed relative z-10 pb-4 lg:pb-0 lg:pr-0">
                {card.description}
              </p>
              <span className="absolute bottom-1 right-2 lg:static lg:self-end text-[28px] md:text-[20px] lg:text-4xl font-extrabold text-[#969696] leading-none pointer-events-none lg:pointer-events-auto z-0 lg:mt-2">
                {card.number}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DevopsEngineeringSolution;