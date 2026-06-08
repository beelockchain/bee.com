import Image from "next/image";

const LlmAdopting = () => {
  return (
    <div className="w-full px-4 py-5 sm:px-6 lg:px-6">
      <h2 className="text-center text-[17px] sm:text-[20px] md:text-[21px] lg:text-[28px] xl:text-[36px]  text-black font-bold mb-12 leading-tight">
        Why Businesses Are Adopting <br />
        <span
          data-text="LLM Adopting"
          className="shine-text text-[#F5B800] relative mx-1"
        >
          Large Language Models
        </span>
      </h2>

      {/* Two Column Layout */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row md:flex-row items-center gap-12">
        {/* LEFT — Single Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/images/llm/llm-adopt.png"
            alt="LLM Adopting illustration"
            width={560}
            height={560}
            sizes="(max-width: 768px) 280px, 448px"
            className="w-full max-w-[280px] md:max-w-md object-contain rounded-xl"
          />
        </div>

        {/* RIGHT — Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {/* 
             PARAGRAPH ALIGNMENT: 
             Mobile: text-center
             Tablet/Desktop: md:text-left (Maintains existing layout)
          */}
          <p className="text-center sm:text-left md:text-left  text-[13px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-poppins font-medium  text-black">
            There is a reason large language models have moved so quickly from
            research labs into boardroom priorities: they solve a problem
            businesses have lived with for decades. A surprising amount of the
            work that slows organizations down every single day is
            language-heavy. Teams spend hours reading through documents that no
            one has time to fully digest. Answering the same users’ questions
            over and over. Searching for information that definitely exists
            somewhere, but takes far too long to find.
          </p>

          <p className="text-center sm:text-left md:text-left  text-[13px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-poppins font-medium  text-black">
            Large language models were built to take that burden off your team.
            Unlike traditional automation tools that fall apart the moment
            something does not fit a predefined rule, LLMs actually understand
            what is being asked. The system examines context to determine user
            intent and provides relevant answers that meet user needs beyond
            basic technical accuracy.
          </p>

          <p className="text-center sm:text-left md:text-left  text-[13px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-poppins font-medium  text-black">
            The business transformation occurs through the integration of that
            capability with existing business systems, which the organization
            relies on: knowledge bases, CRMs, internal tools, and databases.
            Employees transition from searching for information to asking
            questions once they have established LLM connections. Customers
            receive instant answers, eliminating the need to wait. Decisions
            that used to require tracking down three people and two documents
            now happen in a conversation.
          </p>
          <p className="text-center sm:text-left md:text-left  text-[13px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-poppins font-medium  text-black">
            Organizations investing in LLM development today are not simply
            adopting the latest technology. They are removing the friction that
            has always slowed their teams, putting their institutional knowledge
            to work, and building an operational edge that grows stronger the
            longer they run with it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LlmAdopting;
