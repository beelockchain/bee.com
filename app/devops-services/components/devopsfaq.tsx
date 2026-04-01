'use client';
import { useState } from "react";

const DevopsFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How does Beelockchain’s DevOps consulting improve software quality?",
      a: "Beelockchain’s DevOps consulting services improve software quality by implementing CI/CD pipelines that enable automated testing, instant feedback, reduced deployment errors, and consistent application performance across releases.",
    },
    {
      q: "How can Beelockchain’s cloud DevOps consulting benefit my organization?",
      a: "Beelockchain’s cloud DevOps consulting enables seamless cloud integration, automates deployment processes, and improves infrastructure scalability — helping organizations reduce operational costs and accelerate software innovation.",
    },
    {
      q: "What should I look for when choosing Beelockchain as a DevOps consulting partner?",
      a: "When working with Beelockchain, organizations gain access to expertise in CI/CD implementation, infrastructure automation, DevSecOps integration, and cloud-native deployment strategies aligned with their business requirements.",
    },
    {
      q: "What role do Beelockchain’s DevOps consultants play in a project?",
      a: "Beelockchain’s DevOps consultants assess existing workflows, identify infrastructure gaps, implement automation frameworks, and provide continuous support to improve deployment efficiency and system resilience.",
    },
    {
      q: "How can Beelockchain help implement DevOps in my organization?",
      a: "Beelockchain leverages tools such as Jenkins, Docker, Kubernetes, Terraform, GitLab, Ansible, Prometheus, and cloud platforms like AWS and Azure to deliver scalable DevOps solutions.",
    },
    {
      q: "What DevOps tools and technologies does Beelockchain use?",
      a: "Yes. Beelockchain provides enterprise-grade blockchain development services as part of our digital transformation services. We help businesses enrich the security, transparency, and automation through decentralized technologies where applicable.",
    },
     {
      q: "How do Beelockchain’s DevOps practices reduce downtime and system failures?",
      a: "Beelockchain uses automated monitoring, proactive alerts, and continuous feedback loops to detect and resolve issues before they impact production environments — ensuring high system availability.",
    },
  ];

  return (
    <section className="w-full bg-white py-0">
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-6 xl:px-6 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 lg:gap-60 py-6">

    {/* SINGLE HEADING */}
    <div className="w-full md:w-auto flex justify-center md:justify-start">
      <h2 className="text-center md:text-left text-[24px] sm:text-[32px] md:text-[44px] lg:text-[42px] xl:text-[64px] font-bold leading-tight font-manrope text-black">
        Frequently <br className="hidden md:block" />
        Asked <br className="hidden md:block" />
        <span className="bg-gradient-to-r from-black via-black to-black/50 bg-clip-text text-transparent">
          Questions
        </span>
      </h2>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex-1 flex flex-col gap-4">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="relative rounded-[14px] p-[1px] bg-[#646464] cursor-pointer"
          >
            <div
              className="bg-[#fafafa] rounded-[13px] px-5 py-4"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <button className="w-full flex justify-between items-center gap-6 text-left cursor-pointer">
                <p className="text-black text-[11px] sm:text-[14px] md:text-[12px] lg:text-[16px] xl:text-[15px] font-manrope font-semibold">
                  {item.q}
                </p>

                {isOpen ? (
                  <svg width="16" height="3" viewBox="0 0 16 3" className="flex-none">
                    <path d="M1 1H15" stroke="black" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" className="flex-none">
                    <path d="M8 1V15M1 8H15" stroke="black" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-50 mt-6" : "max-h-0"}`}>
                <p className="text-[11px] sm:text-[14px] md:text-[12px] lg:text-[16px] xl:text-[15px] text-black/80 leading-relaxed font-poppins">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>

  </div>
</section>
  );
};

export default DevopsFAQSection;