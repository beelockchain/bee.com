"use client";



const BeelockchainTransformation = () => {
  const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;
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
        <span className="text-black font-bold">
          blockchain-powered digital transformation
        </span>
        .
      </>
    ),
    image: `${ASSET_URL}/images/beelock-trans-icon1.webp`,
    rotate: "-rotate-2",
  },
  {
    step: "Step 2",
    title: "Solution Design & Implementation",
    description: (
      <>
        We design and implement{" "}
        <span className="text-black font-bold">
          custom blockchain networks, smart contracts, and AI integrations
        </span>{" "}
        to digitize your operations.
      </>
    ),
    image: `${ASSET_URL}/images/beelock-trans-icon2.webp`,
    rotate: "",
  },
  {
    step: "Step 3",
    title: "Continuous Monitoring & Optimization",
    description: (
      <>
        Our AI-powered analytics{" "}
        <span className="text-black font-bold">
          monitor processes, detect anomalies, and optimize efficiency
        </span>
        .
      </>
    ),
    image: `${ASSET_URL}/images/beelock-trans-icon3.webp`,
    rotate: "rotate-2",
  },
];
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mx-auto mb-10">
          <h2 className="text-2xl md:text-4xl font-bold font-[Poppins] text-zinc-800 mb-4">
            How BeelockChain Transforms Your Business
          </h2>
          <p className="text-zinc-600 text-base md:text-lg">
            Innovative Solutions for Your Business Challenges
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`bg-neutral-100 rounded-xl shadow-lg flex flex-col transition transform ${item.rotate}`}
            >
              {/* Text content (with padding) */}
              <div className="p-8">
                <span className="text-zinc-500 font-semibold mb-3 block">
                  {item.step}
                </span>

                <h3 className="text-[18px] sm:text-[10px] md:text-[12px] lg:text-[20px]  font-semibold font-[Poppins] text-zinc-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-zinc-500 text-[14px] sm:text-[10px] md:text-[10px] lg:text-[15px] leading-6 sm:leading-4 md:leading-5 lg:leading-7 mb-6">
                  {item.description}
                </p>
              </div>

              {/* Image – flush bottom, full width */}
              <div className="mt-auto">
                <img
                  src={item.image}
                  alt={item.step}
                  className="w-full max-h-44 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeelockchainTransformation;
