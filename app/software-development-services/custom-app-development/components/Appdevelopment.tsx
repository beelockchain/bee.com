"use client";

const leftFeatures = [
  {
    title: "Artificial Intelligence",
    description:
      "We build AI-powered algorithms and cognitive automation into your mobile applications to enable predictive analytics, smart decision-making, and intelligent process optimization.",
  },
  {
    title: "Internet of Things",
    description:
      "We deploy mobile applications with IoT ecosystems to ensure real-time device connectivity, monitoring, and data synchronization.",
  },
  {
    title: "Blockchain",
    description:
      "We build high-end security decentralized applications (DApps) using blockchain architecture to ensure data security, immutability, and data integrity.",
  },
];

const rightFeatures = [
  {
    title: "Cloud Computing",
    description:
      "Our reliable cloud infrastructure and DevOps methodologies enable us to build high-availability mobile applications with optimized performance.",
  },
  {
    title: "Generative AI",
    description:
      "We integrate the Generative AI models with the mobile applications to automate content creation, intelligent code generation, and rapid design prototyping.",
  },
  {
    title: "Machine Learning",
    description:
      "Our advanced machine learning models are trained on historical and real-time data to deliver adaptive and data-driven app functionality.",
  },
];

const FeatureCard = ({
  title,
  description,
  align = "left",
}: {
  title: string;
  description: string;
  align?: "left" | "right";
}) => (
  <div
    className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col gap-3 flex-1 min-h-[140px] justify-center ${
      align === "right" ? "text-left" : "text-left"
    }`}
  >
    <h3 className="text-gray-900 font-bold text-[18px] leading-snug">{title}</h3>
    <p className="text-black text-xs leading-relaxed">{description}</p>
  </div>
);

const Appdevelopment = () => {
  return (
    <section
      className="relative w-full py-20 px-6 overflow-hidden"
      
    >
      {/* Header */}
      <div className="text-center mb-14 max-w-6xl mx-auto flex flex-col justify-center items-center">
        <h2 className="text-[20px] md:text-[25px] lg:text-[35px] xl:text-[48px] font-bold text-gray-900 leading-tight mb-4">
          Custom{" "}
          <span className="text-yellow-500">App Development Services</span>{" "}
          Powered By
          <br />
          Advanced Technologies
        </h2>
        <p className="text-gray-400 text-sm leading-7 w-4xl">
          We combine advanced technologies, including AI, IoT, and blockchain,
          to build the future-ready mobile apps that respond dynamically to user
          and market needs. Our developers provide mobile solutions that optimize
          operations and enhance user experience.
        </p>
      </div>

      {/* 3-Column Layout */}
      <div
        className="max-w-5xl mx-auto grid grid-cols-1 gap-8 items-stretch"
        style={{
        backgroundImage:
          "url('/assets/images/software-dev/custom-app-dev/Appdevelopmentbg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        gridTemplateColumns: "1fr auto 1fr",
       
      }}
      >
        {/* Left Column */}
        <div className="flex flex-col gap-5">
          {leftFeatures.map((f, i) => (
            <FeatureCard key={i} title={f.title} description={f.description} align="left" />
          ))}
        </div>

        {/* Center Column — Phone Image */}
        <div className="flex justify-center items-center w-[220px] lg:w-[360px]">
          <div className="relative w-full">
            {/* Yellow blob background */}
            <div
              className="absolute inset-0 rounded-[40%] h-80 blur-2xl z-0"
             
            />
            <img
              src="/assets/images/software-dev/custom-app-dev/Appdevelopment.svg"
              alt="App Development Mockup"
              className="relative object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-5">
          {rightFeatures.map((f, i) => (
            <FeatureCard key={i} title={f.title} description={f.description} align="right" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Appdevelopment;