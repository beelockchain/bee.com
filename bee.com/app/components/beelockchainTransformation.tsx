"use client";

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

          {/* STEP 1 */}
          <div className="bg-neutral-100 rounded-xl shadow-lg p-8 relative transform -rotate-2 transition">
            <span className="text-zinc-500 font-semibold">Step 1</span>

            <div className="flex justify-end my-6">
              <img
                src="/assets/images/beelock-trans-icon.png"
                alt="Consultation"
                className="w-32 h-32 object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold font-[Poppins] text-zinc-800 mb-4">
              Consultation & <br/> Assessment
            </h3>

            <p className="text-zinc-400 leading-6">
              We evaluate your workflows and identify areas for{" "}
              <span className="text-black font-semibold">
                blockchain-powered digital transformation
              </span>
            </p>
          </div>

          {/* STEP 2 */}
          <div className="bg-neutral-100 rounded-xl shadow-lg p-8 relative">
            <span className="text-zinc-500 font-semibold">Step 2</span>

            <div className="flex justify-end my-6">
              <img
                src="/assets/images/beelock-trans-icon.png"
                alt="Implementation"
                className="w-32 h-32 object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold font-[Poppins] text-zinc-800 mb-4">
              Solution Design & Implementation
            </h3>

            <p className="text-zinc-400 leading-6">
              We design and implement{" "}
              <span className="text-black font-semibold">
                custom blockchain networks, smart contracts, and AI integrations
              </span>{" "}
              to digitize your operations.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="bg-neutral-100 rounded-xl shadow-lg p-8 relative transform rotate-2 transition">
            <span className="text-zinc-500 font-semibold">Step 3</span>

            <div className="flex justify-end my-6">
              <img
                src="/assets/images/beelock-trans-icon.png"
                alt="Optimization"
                className="w-32 h-32 object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold font-[Poppins] text-zinc-800 mb-4">
              Continuous Monitoring & Optimization
            </h3>

            <p className="text-zinc-400 leading-6">
              Our AI-powered analytics{" "}
              <span className="text-black font-semibold">
                monitor processes, detect anomalies, and optimize efficiency.
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BeelockchainTransformation;
