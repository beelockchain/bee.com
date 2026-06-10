"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "./useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const DevopsEngineeringSolution = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const cardsViewportRef = useRef<HTMLDivElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);

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
    {
      number: "05",
      title: "Containerization & Kubernetes Deployment",
      description:
        "Applications are containerized and deployed through Kubernetes orchestration frameworks to improve scalability and portability across distributed systems.",
    },
    {
      number: "06",
      title: "DevSecOps Consulting",
      description:
        "Security checks are integrated within CI/CD pipelines to enable automated vulnerability detection and compliance monitoring throughout the development lifecycle.",
    },
    {
      number: "07",
      title: "AI-Integrated DevOps Consulting",
      description:
        "We incorporate AI-driven monitoring and deployment analytics into DevOps workflows to detect anomalies, optimize infrastructure performance, and support smarter release management decisions across cloud environments.",
    },
    {
      number: "08",
      title: "DevOps Managed Services",
      description:
        "We provide continuous infrastructure monitoring, deployment pipeline management, and performance optimization to maintain deployment stability and application uptime.",
    },
    {
      number: "09",
      title: "Hire DevOps Engineers",
      description:
        "Hire experienced DevOps engineers from Beelockchain to manage CI/CD pipelines, automate infrastructure provisioning, monitor deployments, and optimize application performance across cloud environments.",
    },
  ];

  useEffect(() => {
    if (isMobile) {
      return;
    }

    const ctx = gsap.context(() => {
      if (
        !sectionRef.current ||
        !paragraphRef.current ||
        !cardsViewportRef.current ||
        !cardsTrackRef.current
      ) {
        return;
      }

      const viewport = cardsViewportRef.current;
      const track = cardsTrackRef.current;

      const createAnimation = () => {
        const scrollDistance = Math.max(
          track.scrollHeight - viewport.clientHeight,
          0,
        );

        gsap.set(track, { y: 0 });

        return gsap.to(track, {
          y: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 10px",
            end: `+=${Math.max(scrollDistance * 1.25, 600)}`,
            pin: sectionRef.current,
            pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      };

      createAnimation();
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-8 px-6 md:px-12 lg:px-16"
    >
      {/* Top Section */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className=" text-[19px] sm:text-[19px] md:text-[21px] leading-tight lg:text-[28px] xl:text-[36px] text-black font-bold  mb-4 ">
          <span
            data-text="Beelockchain:"
            className="shine-text text-[#F5B800] relative mx-0"
          >
            DevOps Consulting & Engineering
          </span>{" "}
          Services
        </h2>
        <p
          ref={paragraphRef}
          className="text-black text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-poppins leading-relaxed font-medium  mb-6 max-w-4xl mx-auto"
        >
          Beelockchain provides end-to-end DevOps consulting and engineering
          services designed to automate development workflows and maintain
          scalable infrastructure across cloud environments.
        </p>
      </div>

      {isMobile ? (
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 h-auto mt-6">
          {/* Image Section - First on mobile/tablet, right on desktop */}
          <div className="w-full flex justify-center items-center h-full">
            <img
              src="/assets/images/devops/devops-solution.png"
              alt="Beelockchain mobile app"
              className="max-w-[280px] w-auto h-auto object-contain mx-auto"
            />
          </div>

          {/* Cards Section - Below image on mobile/tablet, left on desktop */}
          <div className="w-full flex flex-col gap-4">
            {cards.map((card) => (
              <div
                key={card.number}
                className="relative bg-[#ebebeb] border border-gray-200 rounded-xl p-4 flex flex-col gap-1 hover:shadow-md transition-shadow duration-200 overflow-hidden"
              >
                <h3 className="text-left text-[14px] sm:text-[15px] font-semibold font-poppins text-black relative z-10 pr-2">
                  {card.title}
                </h3>
                <p className="text-left text-black text-[11.5px] sm:text-[13px] font-medium font-poppins leading-relaxed relative z-10 pb-4">
                  {card.description}
                </p>
                <span className="absolute bottom-1 right-2 text-[28px] font-extrabold text-[#969696] leading-none pointer-events-none z-0">
                  {card.number}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8 lg:gap-10 items-center mt-10">
          <div
            ref={cardsViewportRef}
            className="relative h-[calc(4*180px+3*20px)] lg:h-[calc(4*190px+3*20px)] xl:h-[calc(4*180px+3*20px)] overflow-hidden"
          >
            <div
              ref={cardsTrackRef}
              className="flex flex-col gap-5 will-change-transform"
            >
              {cards.map((card) => (
                <div
                  key={card.number}
                  className="relative min-h-[180px] lg:min-h-[190px] xl:min-h-[180px] bg-[#E2E2E2] border border-gray-200 rounded-2xl p-5 xl:p-6 flex flex-col gap-2 overflow-hidden"
                >
                  <h3 className="text-left text-[18px] md:text-[14px] lg:text-lg xl:text-[20px] font-semibold font-poppins text-black pr-10">
                    {card.title}
                  </h3>
                  <p className="text-left text-black text-[13px] md:text-[12px] lg:text-sm xl:text-[14px] font-medium font-poppins leading-relaxed pr-12">
                    {card.description}
                  </p>
                  <span className="absolute bottom-3 right-5 text-[34px] lg:text-4xl font-extrabold text-[#969696] leading-none pointer-events-none opacity-70">
                    {card.number}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full min-h-[360px] lg:min-h-[400px] flex items-center justify-center">
            <img
              src="/assets/images/devops/devops-solution.png"
              alt="Beelockchain mobile app"
              className="max-w-full w-auto h-auto object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default DevopsEngineeringSolution;
