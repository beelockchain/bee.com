const steps = [
  {
    number: "Step 1",
    title: "Requirement Analysis & LLM Strategy",
    description:
      "We begin by understanding the business goals, technical requirements, and datasets required for the AI system.",
    highlighted: true,
  },
  {
    number: "Step 2",
    title: "Data Preparation",
    description:
      "Quality data is essential for effective LLM performance. Our team prepares and structures datasets to ensure optimal training and accuracy.",
    highlighted: false,
  },
  {
    number: "Step 3",
    title: "Model Selection",
    description:
      "We select the most suitable language model architecture based on project complexity, performance requirements, and scalability needs.",
    highlighted: true,
  },
  {
    number: "Step 6",
    title: "Deployment & Monitoring",
    description:
      "The final system is deployed within a secure infrastructure and monitored to ensure consistent performance and continuous improvement.",
    highlighted: false,
  },
  {
    number: "Step 5",
    title: "Application Development",
    description:
      "Our developers build the AI application interface and APIs that allow users to interact with the language model.",
    highlighted: true,
  },
  {
    number: "Step 4",
    title: "Model Training & Optimization",
    description:
      "The model is trained or fine-tuned using domain-specific data to improve contextual understanding and response quality.",
    highlighted: false,
  },
];

const cardClassName = (highlighted: boolean) =>
  highlighted
    ? "border-[#f1c84e] bg-[#fff9e8]"
    : "border-[#d8d8d8] bg-[#fbfbfb]";

const stepPillClassName = (highlighted: boolean) =>
  highlighted
    ? "border-[#f1c84e] bg-white text-black"
    : "border-[#d8d8d8] bg-white text-black";
const ProcessArrow = ({ className = "" }) => (
  <svg
    width="60"
    height="11"
    viewBox="0 0 113 11"
    fill="none"
    className={className}
  >
    <path
      d="M1 4.3335H0V6.3335H1V5.3335V4.3335ZM101.667 5.3335C101.667 8.27901 104.054 10.6668 107 10.6668C109.946 10.6668 112.333 8.27901 112.333 5.3335C112.333 2.38798 109.946 0.000162601 107 0.000162601C104.054 0.000162601 101.667 2.38798 101.667 5.3335ZM10.5 6.3335H11.5V4.3335H10.5V5.3335V6.3335ZM29.5 4.3335H28.5V6.3335H29.5V5.3335V4.3335ZM47.5 6.3335H48.5V4.3335H47.5V5.3335V6.3335ZM64.5 4.3335H63.5V6.3335H64.5V5.3335V4.3335ZM81.5 6.3335H82.5V4.3335H81.5V5.3335V6.3335ZM98.5 4.3335H97.5V6.3335H98.5V5.3335V4.3335ZM1 5.3335V6.3335H10.5V5.3335V4.3335H1V5.3335ZM29.5 5.3335V6.3335H39V5.3335V4.3335H29.5V5.3335ZM39 5.3335V6.3335H47.5V5.3335V4.3335H39V5.3335ZM64.5 5.3335V6.3335H81.5V5.3335V4.3335H64.5V5.3335ZM98.5 5.3335V6.3335H107V5.3335V4.3335H98.5V5.3335Z"
      fill="#B9B9B9"
    />
  </svg>
);
const LlmProcess = () => {
  return (
    <section className="w-full px-6 py-8 md:px-16 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-center  font-bold leading-tight text-black 
           text-[19px] sm:text-[19px] md:text-[21px]  lg:text-[28px] xl:text-[36px]">
            Our LLM{" "}
            <span
              data-text="Development Process"
              className="shine-text relative mx-1 text-[#F5B800]"
            >
              Development Process
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[13px] font-poppins font-medium text-black md:text-[12px] lg:text-[14px] xl:text-[16px]">
            At Beelockchain, we follow a structured development approach to
            ensure the successful implementation of LLM solutions.
          </p>
        </div>

        <div className="relative mt-12 hidden lg:block">
         
        {/* 1 -> 2 */}
          <div className="absolute top-[95px] left-[30%] z-20">
            <ProcessArrow />
          </div>

          {/* 2 -> 3 */}
          <div className="absolute top-[95px] left-[65%] z-20">
            <ProcessArrow />
          </div>
          {/* 2 -> 3 */}
          <div className="absolute top-[50%] left-[80%] z-20 rotate-90">
            <ProcessArrow />
          </div>
          {/* 5 <- 4 */}
          <div className="absolute top-[350px] left-[65%] z-20 rotate-180">
            <ProcessArrow />
          </div>

          {/* 6 <- 5 */}
          <div className="absolute top-[350px] left-[30%] z-20 rotate-180">
            <ProcessArrow />
          </div>
          <div className="grid grid-cols-3 gap-x-16 gap-y-16">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`relative min-h-[138px] rounded-[18px] border px-5 py-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)] ${cardClassName(step.highlighted)}`}
              >
                <div
                  className={`inline-flex rounded-full border px-4 py-1 text-[11px] font-medium leading-none ${stepPillClassName(step.highlighted)}`}
                >
                  {step.number}
                </div>
                <h3 className="mt-4 max-w-[230px] text-[18px] font-semibold leading-snug text-black">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[350px] text-black text-[12px] md:text-[10px] lg:text-[12px] xl:text-[14px] font-poppins leading-relaxed font-medium">
                  {step.description}
                </p>
                
              </div>
            ))}
            
          </div>
        </div>
        

        <div className="mt-10 grid gap-5 lg:hidden">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`rounded-[18px] border px-5 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] ${cardClassName(step.highlighted)}`}
            >
              <div
                className={`inline-flex rounded-full border px-4 py-1 text-[11px] font-medium leading-none ${stepPillClassName(step.highlighted)}`}
              >
                {step.number}
              </div>
              <h3 className="mt-4 text-[18px] font-semibold leading-snug text-black">
                {step.title}
              </h3>
              <p className="mt-3 text-[13px] font-poppins font-medium leading-relaxed text-black">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LlmProcess;
