const Digitaltransformation = () => {
  return (
    <section className="w-full bg-white">
      {/* ================= MOBILE LAYOUT ================= */}
      <div className="flex md:hidden flex-col w-full px-6 py-16 gap-10 justify-center items-center">
        {/* Heading */}
        <h3 className="text-sm font-bold text-black leading-snug text-center w-full">
          Beelockchain Your Trusted Digital
          <span
            className="
              font-semibold
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-yellow-300
              via-yellow-500
              to-yellow-700
           
            "
          >
            Transformation Company
          </span>
        </h3>

        {/* Image */}
        <div className="w-full">
          <img
            src="/assets/images/Digitalbuttoniimg.webp"
            alt="trusted digital"
            className="w-full max-w-sm mx-auto object-contain"
          />
        </div>

        {/* Content */}
        <p className="text-sm leading-8 text-gray-700 text-center">
          As a forward-thinking
          <span className="text-[#FFCC00] ml-1">
            Digital Transformation Company
          </span>
          , Beelockchain empowers organizations to achieve measurable business
          outcomes through automation, innovation, and scalable technologies.
        </p>
        <p className="text-sm leading-8 text-gray-700 text-center">
          With over <span className="text-[#FFCC00] ml-1">8 years</span> of
          experience in delivering enterprise grade Digital transformation
          services and solutions, we help businesses modernize applications,
          optimize operations, and unlock new digital capabilities.
        </p>
        <p className="text-sm leading-8 text-gray-700 text-center">
          Our future ready experts mitigate risks, streamline workflows, and
          solve complex
          <span className="text-[#FFCC00] ml-1">digital challenges</span> using
          front-line strategies.
        </p>

        {/* CTA */}
        <button
          className="
            w-fit
            flex
            items-center
            gap-2
            text-black
            border
            border-black
            px-3
            py-2
            rounded-full
            font-medium
            shadow
            hover:bg-gray-100
            transition
          "
        >
          Consult Now
          <div className="w-8 h-8 rounded-full flex justify-center items-center bg-yellow-500">
            <img
              src="/assets/images/Herobuttonimg.webp"
              alt="arrow"
              className="h-8 w-8"
            />
          </div>
        </button>
      </div>

      {/* ================= DESKTOP + TABLET LAYOUT ================= */}
      {/* ⚠️ UNTOUCHED DESIGN */}
      <div className="hidden md:flex w-full h-screen justify-center items-center bg-white">
        <div className="w-[50%] h-full flex flex-col justify-center items-start gap-6 p-5">
          <h2 className="text-4xl font-bold mb-6 text-black">
            Beelockchain Your Trusted
            <span
              className="
                font-semibold
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-yellow-300
                via-yellow-500
                to-yellow-700
                ml-2
              "
            >
              Digital <br /> Transformation Company
            </span>
          </h2>

          <p className="text-lg leading-8 text-gray-700">
            As a forward-thinking
            <span className="text-[#FFCC00] ml-1">
              Digital Transformation Company
            </span>
            , Beelockchain empowers organizations to achieve measurable business
            outcomes through automation, innovation, and scalable technologies.
          </p>
          <p className="text-lg leading-8 text-gray-700">
            With over <span className="text-[#FFCC00] ml-1">8 years</span> of
            experience in delivering enterprise grade Digital transformation
            services and solutions, we help businesses modernize applications,
            optimize operations, and unlock new digital capabilities.
          </p>
          <p className="text-lg leading-8 text-gray-700">
            Our future ready experts mitigate risks, streamline workflows, and
            solve complex
            <span className="text-[#FFCC00] ml-1">digital challenges</span>{" "}
            using front-line strategies.
          </p>

          <button
            className="
              flex
              items-center
              gap-2
              text-black
              border
              border-black
              px-2
              py-1
              rounded-full
              font-medium
              shadow
              hover:bg-gray-100
              transition
            "
          >
            Consult Now
            <div className="w-8 h-8 rounded-full flex justify-center items-center bg-yellow-500">
              <img
                src="/assets/images/Herobuttonimg.webp"
                alt="arrow"
                className="h-8 w-8"
              />
            </div>
          </button>
        </div>

        <div className="w-[45%] h-full flex justify-center items-center">
          <img
            src="/assets/images/Digitalbuttoniimg.webp"
            alt="trusted digital"
            className="w-[500px] h-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Digitaltransformation;
