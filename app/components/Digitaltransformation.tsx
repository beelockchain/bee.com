const Digitaltransformation = () => {
  return (
    <section className="w-full bg-white">
      {/* ================= MOBILE LAYOUT ================= */}
      <div className="flex md:hidden flex-col w-full px-6 py-10 gap-10 justify-center items-center">
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
          As a forward-thinking Digital Transformation Company , Beelockchain
          empowers organizations to achieve measurable business outcomes through
          automation, innovation, and scalable technologies.
        </p>
        <p className="text-sm leading-8 text-gray-700 text-center">
          With over 8 years of experience in delivering enterprise grade{" "}
          <span className="text-yellow-600 ml-1 mr-1">
            Digital transformation services and solutions
          </span>
          Digital transformation services and solutions, we help businesses
          modernize applications, optimize operations, and unlock new digital
          capabilities.
        </p>
        <p className="text-sm leading-8 text-gray-700 text-center">
          Our future ready experts mitigate risks, streamline workflows, and
          solve complex digital challenges using front-line strategies.
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
          <svg
            className="relative z-10 w-10 h-10 md:w-8 md:h-8 lg:w-14 lg:h-14"
            viewBox="0 0 56 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="28.2473"
              cy="27.0945"
              r="15.912"
              fill="#F6E000"
              stroke="#F9C901"
              strokeWidth="1.51543"
            />
            <path
              d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
              stroke="black"
              strokeWidth="3.03086"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* ================= DESKTOP + TABLET LAYOUT ================= */}
      {/* ⚠️ UNTOUCHED DESIGN */}
      <div className="hidden md:flex w-full h-screen justify-center items-center bg-white">
        <div className="w-[50%] h-full flex flex-col justify-center items-start gap-6 p-5">
          <h2 className="md:text-xl lg:text-4xl font-bold mb-6 text-black">
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

          <p className="md:text-sm lg:text-lg leading-8 text-gray-700">
            As a forward-thinking Digital Transformation Company , Beelockchain
            empowers organizations to achieve measurable business outcomes
            through automation, innovation, and scalable technologies.
          </p>
          <p className="md:text-sm lg:text-lg leading-8 text-gray-700">
            With over 8 years of experience in delivering enterprise grade
            <span className="text-yellow-600 ml-1 mr-1">
              Digital transformation services and solutions
            </span>
            Digital transformation services and solutions, we help businesses
            modernize applications, optimize operations, and unlock new digital
            capabilities.
          </p>
          <p className="md:text-sm lg:text-lg leading-8 text-gray-700">
            Our future ready experts mitigate risks, streamline workflows, and
            solve complex digital challenges using front-line strategies.
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
            <svg
              className="relative z-10 w-10 h-10 md:w-8 md:h-8 lg:w-14 lg:h-14"
              viewBox="0 0 56 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="28.2473"
                cy="27.0945"
                r="15.912"
                fill="#F6E000"
                stroke="#F9C901"
                strokeWidth="1.51543"
              />
              <path
                d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
                stroke="black"
                strokeWidth="3.03086"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
