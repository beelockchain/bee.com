"use client";

const steps = [
  {
    step: "Step 1",
    title: (
      <>
        Consultation & <br /> Assessment
      </>
    ),
    description: (
      <>
        We evaluate your workflows and identify areas for{" "}
        <span className="text-black/80 font-semibold">
          blockchain-powered digital transformation
        </span>
      </>
    ),
    rotate: "-rotate-2",
  },
  {
    step: "Step 2",
    title: "Solution Design & Implementation",
    description: (
      <>
        We design and implement{" "}
        <span className="text-black/80 font-semibold">
          custom blockchain networks, smart contracts, and AI integrations
        </span>{" "}
        to digitize your operations.
      </>
    ),
    rotate: "",
  },
  {
    step: "Step 3",
    title: "Continuous Monitoring & Optimization",
    description: (
      <>
        Our AI-powered analytics{" "}
        <span className="text-black/80 font-semibold">
          monitor processes, detect anomalies, and optimize efficiency.
        </span>
      </>
    ),
    rotate: "rotate-2",
  },
];

const BeelockchainTransformation = () => {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] text-zinc-800 mb-4">
            How BeelockChain Transforms Your Business
          </h2>
          <p className="text-zinc-600 text-base md:text-lg">
            Innovative Solutions for Your Business Challenges
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`bg-neutral-100 rounded-xl shadow-lg p-8 relative transition transform ${item.rotate}`}
            >
              <span className="text-zinc-500 font-semibold">{item.step}</span>

              <div className="flex justify-end my-6">
                <img
                  src="/assets/images/beelock-trans-icon.png"
                  alt={item.step}
                  className="w-32 h-32 md:h-20 md:w-20   lg:h-32 lg:w-32  object-contain"
                />
              </div>

              <h3 className="text-[20px] sm:text-[14px] md:text-[16px] xl:text-[20px] lg:text-[20px] font-semibold font-[Poppins] text-zinc-800 mb-4">
                {item.title}
              </h3>

              <p className="text-zinc-400 leading-6 md:leading-4 lg:leading-6 text-[16px] sm:text-[14px] md:text-[10px] xl:text-[18px] lg:text-[20px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BeelockchainTransformation;
