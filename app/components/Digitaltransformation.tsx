const Digitaltransformation = () => {
  const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;

  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-20 py-12">
      {/* 
        Mobile:  flex-col  → order-1 (title), order-2 (image), order-3 (content)
        Desktop: flex-row  → lg:order-none resets to DOM order (title+content left, image right)
        But since title and content need to be in the SAME left column on desktop,
        we use a wrapper that's only visible on lg+
      */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">

        {/* TITLE — order-1 mobile, hidden on desktop (desktop version inside left col) */}
        <h2 className="w-full order-1 md:hidden text-[17px] md:text-[24px] font-bold text-black leading-snug text-center">
          Beelockchain Your Trusted
          <span
            className="block text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(90deg, #AF7211 33%, #F6E000 49%, #D7B007 63%)" }}
          >
            Digital Transformation Company
          </span>
        </h2>

        {/* IMAGE — order-2 mobile, order-none desktop */}
        <div className="w-full md:w-1/2 flex justify-center items-center order-2 md:order-none">
          <img
            src={`${ASSET_URL}/images/Digitalbuttoniimg.webp`}
            alt="trusted digital"
            className="w-full max-w-sm md:max-w-md xl:max-w-md lg:max-w-lg object-contain"
          />
        </div>

        {/* LEFT COLUMN — desktop only layout (title + content together) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center
        gap-6 order-3 md:order-first  md:items-start md:text-start xl:items-start  xl:text-start ">

          {/* Title — desktop only */}
          <h2 className="hidden md:block text-[24px]  xl:text-[36px] font-bold text-black leading-snug">
            Beelockchain Your Trusted
            <span
              className="block text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #AF7211 33%, #F6E000 49%, #D7B007 63%)" }}
            >
              Digital Transformation Company
            </span>
          </h2>

          {/* Content — shows on both, order-3 handled by parent */}
          <p className="text-[12px] md:text-[13px] lg:text-[16px] xl:text-[18px]  font-medium text-black/80">
            As a forward-thinking{" "}
            <span className="text-[#F9C901] font-semibold">Digital Transformation Company</span>,
            Beelockchain empowers organizations to achieve measurable business outcomes
            through automation, innovation, and scalable technologies.
          </p>

          <p className="text-[12px] md:text-[13px]  lg:text-[16px] xl:text-[18px]  font-medium text-black/80">
            With over 8 years of experience in delivering enterprise grade
            <span className="text-[#F9C901] mx-1 font-semibold">
              Digital transformation services and solutions
            </span>
            we help businesses modernize applications, optimize operations, and
            unlock new digital capabilities.
          </p>

          <p className="text-[12px] md:text-[13px]  lg:text-[16px] xl:text-[18px]  font-medium text-black/80">
            Our future-ready experts mitigate risks, streamline workflows, and
            solve complex digital challenges using front-line strategies.
          </p>

          {/* CTA BUTTON */}
          <button className="relative flex items-center gap-3 px-4 py-1 md:px-6 md:py-1 lg:px-6 lg:py-1 border border-black rounded-full overflow-hidden cursor-pointer w-fit mx-auto md:mx-0">
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)]" />
            <span className="relative z-10 text-black text-[12px] md:text-[14px] lg:text-[16px] font-medium">Consult Now</span>
            <svg className="relative z-10 w-10 h-10 md:w-8 md:h-8 lg:w-12 lg:h-12" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="28.2473" cy="27.0945" r="15.912" fill="#F6E000" stroke="#F9C901" strokeWidth="1.51543" />
              <path d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
                stroke="black" strokeWidth="3.03086" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Digitaltransformation;