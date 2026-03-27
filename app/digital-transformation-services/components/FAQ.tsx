'use client';
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

const faqs = [
  {
    q: "What challenges should I expect during digital transformation?",
    a: "Common challenges include adapting to the new technologies, managing change across teams, and integrating legacy systems. Beelockchain helps businesses address these challenges through structured planning, hands-on support, and training throughout the transformation process.",
  },
  {
    q: "How long does it usually take to implement the digital transformation services?",
    a: "The timeline depends on project scope, business size, and system complexity. Beelockchain defines a clear roadmap early on, helping organizations understand each phase, expected milestones, and realistic timelines.",
  },
  {
    q: "How do I find the best digital transformation solutions provider?",
    a: "Choosing the right digital transformation solutions company depends on their ability to align with your business goals and deliver a scalable solution. Beelockchain is a growing digital transformation partner. We create customised transformation strategies tailored to the client’s specific operational and growth requirements.",
  },
  {
    q: "What are digital transformation services, and how do they help my business/organization?",
    a: "Digital transformation services companies aim to modernize the business processes and data usage to improve efficiency and customer engagement. Beelockchain assists organizations in upgrading operations while minimizing disruption and maximizing long-term value.",
  },
    {
    q: "Is digital transformation fit for small- and medium-sized businesses?",
    a: "Yes, digital transformation benefits businesses of all sizes. Beelockchain supports startups, growing companies, and enterprises by tailoring solutions to fit their scale, budget, and operational needs.",
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
