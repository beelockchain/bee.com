'use client';
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

const faqs = [
  {
    q: "Can Beelockchain's AI chatbots be customized to suit my business needs?",
    a: "Yes, as a leading AI chatbot development company, Beelockchain specializes in creating customizable solutions tailored to your business needs, branding, industry requirements, and user expectations, ensuring a seamless and personalized experience for your customers.",
  },
  {
    q: "Why are businesses investing in AI chatbot solutions?",
    a: "Businesses invest in AI chatbots to automate customer communication, reduce operational costs, and provide instant responses across digital platforms.",
  },
  {
    q: "What AI chatbot development services does Beelockchain offer for enterprises?",
    a: "We provide chatbot consulting, conversation design, architecture planning, custom chatbot development, system integration, and ongoing optimization services.",
  },
  {
    q: "Can Beelockchain build AI chatbots for eCommerce customer support?",
    a: "Yes. Our chatbot solutions help eCommerce businesses automate product inquiries, order tracking, and customer support interactions.",
  },
    {
    q: "Does Beelockchain offer conversational AI chatbot development for websites?",
    a: "Yes. We build conversational AI chatbots that can be integrated into websites, web applications, and digital platforms.",
  },
      {
    q: "Can Beelockchain build voice-enabled AI chatbots for mobile apps?",
    a: "Yes. We develop voice-enabled chatbot systems that support hands-free interaction within mobile applications.",
  },
      {
    q: "Do AI chatbot development services support RAG integration?",
    a: "Yes. Our chatbot solutions support Retrieval-Augmented Generation (RAG) to ensure accurate knowledge retrieval while maintaining full control over enterprise data.",
  },
      {
    q: "How much does AI chatbot development cost?",
    a: "The cost of AI chatbot development depends on chatbot complexity, integrations, AI capabilities, and deployment platforms. Enterprise chatbot solutions with advanced automation require more development resources than basic chatbot systems.",
  },

];


  return (
   <section className="w-full bg-[#fff]">
      <div className="w-[70%] md:w-[90%]  xl:w-[70%] mx-auto flex flex-col md:flex-row  gap-2 md:gap-[30px] lg:gap-[100px] text-white">

        {/* LEFT SIDE — Desktop only */}
        <div className="hidden md:flex md:w-[40%] flex-col gap-10">
          <h2 className="text-[20px] sm:text-[40px] md:text-[44px] lg:text-[50px] xl:text-[58px] font-bold leading-tight font-manrope   text-black">
            Frequently <br /> Asked <br />
            <span className="bg-linear-to-r from-black via-black to-black/50 bg-clip-text text-transparent"  >
              Questions
            </span>
          </h2>
        </div>
        {/* MOBILE HEADING */}
      <div className="md:hidden text-center mt-15 mb-6">
        <h2 className="text-3xl font-bold font-manrope text-black">
          Frequently Asked <br />
          <span className="bg-linear-to-r text-black from-black via-black to-black/50 bg-clip-text ">
            Questions
          </span>
        </h2>
      </div>


        {/* RIGHT SIDE — FAQ */}
        <div className="w-full md:w-[60%] flex flex-col gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="relative rounded-[14px]  bg-[#646464] cursor-pointer p-px">
                <div className="bg-[#fafafa] rounded-[13px] px-3 py-4"
                 onClick={() => setOpenIndex(isOpen ? null : index)}>
                  <button
                    className="w-full flex justify-between items-center gap-6 text-left cursor-pointer "
                  >
                    <p className="text-black text-[10px] sm:text-[14px] md:text-[12px]  xl:text-[15px] lg:text-[14px] font-semibold font-manrope">{item.q}</p>

                    {isOpen ? (
                      <svg width="16" height="3" viewBox="0 0 16 3">
                        <path d="M1 1H15" stroke="black" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16">
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

                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-50 mt-6" : "max-h-0"}`}>
                    <p className="text-[10px] sm:text-[14px] md:text-[12px]  xl:text-[15px] lg:text-[14px] text-[#646464] leading-relaxed ">{item.a}</p>
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

export default FAQ;
