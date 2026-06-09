"use client";
import Link from "next/link";
import { useState } from "react";

const LlmFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What Is LLM Development?",
      a: "LLM development refers to building AI systems using large language models trained on massive datasets to understand and generate natural language. These models enable applications such as AI assistants, chatbots, enterprise search tools, and automated document analysis. Businesses use LLM solutions to automate communication, process unstructured data, and improve operational efficiency.",
    },
    {
      q: "What is an LLM development company, and what does it involve?",
      a: (
        <>
          LLM development is the end-to-end process of selecting, training,
          fine-tuning, and deploying AI systems powered by large language
          models. <br></br>
          <br></br>
          It encompasses use-case strategy, data preparation and curation,
          fine-tuning or continued pre-training of foundation models, RAG
          pipeline construction, prompt engineering, application development,
          security hardening, and production deployment with ongoing
          optimization. A trusted LLM solution provider like Beelockchain
          handles the full lifecycle from first consultation to post-launch
          performance management.
        </>
      ),
    },
    {
      q: "What is the difference between LLM fine-tuning and RAG?",
      a: (
        <>
          Fine-tuning retrains a base model on domain-specific data to change
          its behaviour, style, or task specialization, best for teaching a
          model your industry's language or adapting its output format.{" "}
          <br></br>
          <br></br> RAG (Retrieval-Augmented Generation) connects the LLM to an
          external knowledge base at inference time, best for keeping knowledge
          current and accurate without retraining. Most enterprise LLM solutions
          use both together: fine-tune for behaviour, RAG for factual grounding.
          Beelockchain's consulting service helps you determine the right
          architecture for your specific requirements.
        </>
      ),
    },
    {
      q: "How long does LLM development take?",
      a: `Timeline varies by complexity:
    - LLM application with API + RAG: 3–6 weeks.
    - Fine-tuned LLM with integrations: 8–16 weeks.
    - Fully custom LLM with enterprise deployment: 6–18 months.

    Beelockchain's Rapid LLM Deploy program delivers a production-ready LLM application in 15 business days for qualifying use cases, a single-domain RAG system or API-based application with up to three integrations.`,
    },
    {
      q: "Which LLM models does Beelockchain work with?",
      a: (
        <>
          We build with OpenAI GPT-4o, GPT-4 Turbo, Anthropic Claude 3.5 Sonnet,
          Claude 3 Opus, Google Gemini 1.5 Pro, Meta LLaMA 3.1 (8B, 70B, 405B),
          Mistral AI (7B, Mixtral 8×7B), Falcon, Qwen 2, Phi-3, and
          custom-trained models. <br></br> <br></br> For data sovereignty, we
          recommend open-source models on your own infrastructure. For maximum
          capability, GPT-4o or Claude 3.5 Sonnet and cost-optimized production
          at scale, fine-tuned LLaMA 3.1 70B or Mistral typically offer the best
          cost-performance ratio.
        </>
      ),
    },
    {
      q: "What is LLM hallucination, and how do you prevent it?",
      a: `LLM hallucination occurs when a language model generates plausible-sounding but factually incorrect output. Beelockchain, an experienced LLM development partner, prevents hallucinations through:

    (1) RAG grounding — forcing the model to cite retrieved sources
    (2) Confidence calibration — training models to express uncertainty rather than fabricate
    (3) Structured output schemas — reducing free-form generation in high-stakes contexts
    (4) Post-generation LLM-as-judge pipelines — flagging uncited claims before they reach users
    (5) Continuous hallucination rate monitoring in production with automatic alerts.`,
    },
    {
      q: "What Learning Strategies Are Used in Custom LLM Development?",
      a: (
        <>
          We combine in-context and few-shot learning to adapt your model
          through fast development, because it needs only minimal data, and then
          we apply zero-shot learning to handle unknown tasks.<br></br>
          <br></br> The model uses a chain-of-thought (CoT) prompting to follow
          a structured reasoning process, helping it solve complex problems
          through all of their stages. Self-consistency decoding filters out
          unreliable outputs, while active learning continuously closes
          knowledge gaps to improve performance without the need for expensive
          retraining procedures.
        </>
      ),
    },
    {
      q: "Can you build an LLM on our own infrastructure?",
      a: (
        <>
          Yes. Beelockchain, as a leading Large Language Model Development
          company, offers on-premise LLM deployment for organizations requiring
          full data sovereignty. <br></br>
          <br></br> We handle GPU infrastructure consultation, model weight
          delivery, inference server setup (vLLM, TGI, Ollama), API layer
          development, security hardening, and staff training. On-premise
          deployments use open-source models (LLaMA 3.1, Mistral, Qwen 2) that
          operate without any external API dependencies.{" "}
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-white mt-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-6 sm:px-6 md:flex-row md:items-start md:gap-10 lg:gap-40 lg:px-6 xl:px-6">
        {/* SINGLE HEADING */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start justify-center md:justify-start">
          <h2 className="text-center md:text-left text-[24px] sm:text-[32px] md:text-[44px] lg:text-[42px] xl:text-[54px] font-bold leading-tight font-manrope text-black">
            Frequently <br className="hidden md:block" />
            Asked <br className="hidden md:block" />
            <span className="bg-linear-to-r from-black via-black to-black/50 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mt-4 max-w-[460px] md:max-w-[247px] lg:max-w-[460px] text-center md:text-left 
          mx-auto mb-0 max-w-xl font-medium font-poppins text-black text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] ">
            Everything you need to know about LLM development services before
            starting a project. Still have questions?
          </p>
          <Link href="/contact-us" target="_blank" className="mt-5">
            <button className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full border border-black bg-white px-2 py-1 lg:px-4 lg:py-0 cursor-pointer">
              <span className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] transition-opacity duration-300 group-hover:opacity-0" />
              <span className="relative z-10 whitespace-nowrap text-sm font-medium text-center text-black transition-colors">
                Contact Our Team
              </span>
              <svg
                viewBox="0 0 56 55"
                className="relative z-10 h-10 w-10 transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-60 group-active:scale-95 lg:h-14 lg:w-14"
              >
                <circle
                  cx="28.2"
                  cy="27.1"
                  r="15.9"
                  fill="#F6E000"
                  stroke="#F9C901"
                  strokeWidth="1.5"
                />
                <path
                  d="M31.3 22.1L33.2 29.4M31.3 22.1L24.1 24.1M31.3 22.1L25.1 32.8"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="relative rounded-[14px] bg-[#646464] p-px cursor-pointer"
              >
                <div
                  className="bg-[#fafafa] rounded-[13px] px-5 py-4"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <button className="w-full flex justify-between items-center gap-6 text-left cursor-pointer">
                    <p className="text-black text-[11px] sm:text-[14px] md:text-[12px] lg:text-[15px] xl:text-[15px] font-poppins font-medium">
                      {item.q}
                    </p>

                    {isOpen ? (
                      <svg
                        width="16"
                        height="3"
                        viewBox="0 0 16 3"
                        className="flex-none"
                      >
                        <path
                          d="M1 1H15"
                          stroke="black"
                          strokeOpacity="0.6"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="flex-none"
                      >
                        <path
                          d="M8 1V15M1 8H15"
                          stroke="black"
                          strokeOpacity="0.6"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[520px] mt-6" : "max-h-0"}`}
                  >
                    <p className="whitespace-pre-line text-[11px] sm:text-[14px] md:text-[12px] lg:text-[16px] xl:text-[15px] text-black/80 leading-relaxed font-poppins">
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

export default LlmFaq;
