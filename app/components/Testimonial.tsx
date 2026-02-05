import MarqueeRow from "./MarqueeRow";

const Testimonial = () => {
  return (
    <>
      {/* ================= DESKTOP & TABLET ================= */}
      <div className="hidden md:flex justify-center items-center w-full bg-white mt-10">
        <div className="flex flex-col justify-center items-center w-full">
          <img
            src="/assets/images/TESTIMONIALS.png"
            alt="Testimonial"
            className="w-[80%]"
          />

          <section className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="text-black text-2xl font-bold">
                What We've Done
              </h2>
              <p className="text-black">
                Trusted by Leading Enterprises and Innovators
              </p>
            </div>

            {/* overflow-hidden only on desktop */}
            <div className="w-[600px] h-80 flex flex-col justify-center items-center gap-6 bg-white overflow-hidden">
              <MarqueeRow direction="left" />
              <MarqueeRow direction="right" />
            </div>
          </section>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="flex md:hidden w-full bg-white mt-6 px-4">
        <div className="flex flex-col w-full items-center">
          <img
            src="/assets/images/TESTIMONIALS.png"
            alt="Testimonial"
            className="w-full"
          />

          <section className="w-full flex flex-col items-center mt-4">
            <div className="flex flex-col items-center gap-1 text-center">
              <h2 className="text-black text-xl font-bold">
                What We've Done
              </h2>
              <p className="text-black text-xs">
                Trusted by Leading Enterprises and Innovators
              </p>
            </div>

            {/* NO overflow-hidden → sticky navbar works */}
            <div className="w-full flex flex-col gap-4 mt-4 overflow-hidden">
              <MarqueeRow direction="left"/>
              <MarqueeRow direction="right" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
