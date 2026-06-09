"use client";
import { useIsMobile } from "@/app/devops-development-company/components/useIsMobile";

const BenifitsLLM = () => {
  const isMobile = useIsMobile();

  const cards = [
    {
      title: "Tailored To Your Business",
      description:
        "Every LLM solution is shaped around your data, workflows, and industry requisites, so the solution aligns with how your business actually operates.",
    },
    {
      title: "Cost-Conscious Development",
      description:
        "We design systems that balance performance and cost, helping you get the most value without unnecessary overhead.",
    },
    {
      title: "Access To LLM Expertise",
      description:
        "Beelockchain provides access to skilled LLM engineers who help you build, deploy, and scale your solution efficiently.",
    },
    {
      title: "Built to Scale",
      description:
        "Whether you’re starting small or planning for growth, our LLM solutions are designed to scale smoothly as your data, users, and use cases expand.",
    },
    {
      title: "Security You Can Rely On",
      description:
        "From secure deployments to privacy-driven architecture, we implement robust safeguards to protect both your business operations and user data.",
    },
    {
      title: "Faster Time-to-Market",
      description:
        "With proven frameworks and agile development processes, we help you launch LLM-powered applications quickly and efficiently.",
    },
  ];

  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 lg:px-6">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className=" text-[19px] sm:text-[19px] md:text-[21px] leading-tight lg:text-[28px] xl:text-[36px] text-black font-bold  mb-4 ">
          Key Benefits Of Choosing
          <br />
          <span
            data-text="Beelockchain:"
            className="shine-text text-[#F5B800] relative mx-0"
          >
            Beelockchain
          </span>{" "}
          For LLM Development
        </h2>
        <p className="text-black text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-poppins leading-relaxed font-medium  mb-6 md:max-w-[550px] lg:max-w-4xl mx-auto">
          Building with large language models is not just about the technology,
          it’s about how well that technology fits into your business. At
          Beelockchain, we focus on creating LLM solutions that are practical,
          scalable, and built to deliver real outcomes.
        </p>
      </div>

      {isMobile ? (
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 h-auto mt-6">
          {/* Image Section - First on mobile/tablet, right on desktop */}
          <div className="w-full flex justify-center items-center h-full">
            <img
              src="/assets/images/llm/benefits-llm-leftimg.png"
              alt="Beelockchain mobile app"
              className="max-w-[320px] w-auto h-auto object-contain mx-auto"
            />
          </div>

          {/* Cards Section - Below image on mobile/tablet, left on desktop */}
          <div className="w-full flex flex-col gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="rounded-3xl border border-[#e5e5e5] bg-[#f8f8f8] px-6 py-7 shadow-[0_4px_18px_rgba(15,23,42,0.06)] transition-shadow duration-200 hover:shadow-[0_10px_28px_rgba(15,23,42,0.1)]"
              >
                <h3 className="text-left text-[16px] sm:text-[15px] font-semibold font-poppins text-black relative z-10 pr-2">
                  {card.title}
                </h3>
                <p className="text-left text-[13px] md:text-[12px] lg:text-[14px] xl:text-[14px] font-poppins font-medium text-black  relative z-10 pb-4">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:gap-4 items-start">
          <div className="relative w-full min-h-[260px] md:min-h-80 xl:min-h-[400px] flex items-center justify-center mt-0 md:mt-0 lg:mt-0 xl:mt-30 xl:sticky">
            <img
              src="/assets/images/llm/benefits-llm-leftimg.png"
              alt="Beelockchain mobile app"
              className="max-w-[320px] md:max-w-[420px] xl:max-w-full w-auto h-auto object-contain mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-4 xl:gap-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className="rounded-3xl border border-[#e5e5e5] bg-[#f8f8f8] px-4 py-6 shadow-[0_8px_28px_rgba(15,23,42,0.06)]"
              >
                <h3 className="text-left text-[18px] md:text-[14px] lg:text-lg xl:text-[20px] font-semibold font-poppins text-black pr-10">
                  {card.title}
                </h3>
                <p className="text-left text-[13px] md:text-[12px] lg:text-[14px] xl:text-[14px] font-poppins font-medium text-black ">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default BenifitsLLM;
