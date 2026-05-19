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

const LlmProcess = () => {
  return (
    <section className="w-full px-6 py-8 md:px-16 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-center text-[17px] font-bold leading-tight text-black sm:text-[20px] md:text-[21px] lg:text-[28px] xl:text-[36px]">
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
         
         <img src="/assets/images/llm/llm-line.png" alt="LLM Process" 
         className=" w-auto object-contain" />

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
              <p className="mt-3 text-[13px] font-medium leading-relaxed text-black">
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
