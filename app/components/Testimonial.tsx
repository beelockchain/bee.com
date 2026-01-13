import MarqueeRow from "./MarqueeRow";

const Testimonial = () => {
  return (
    <div className="flex justify-center items-center w-full bg-white mt-10">
      <div className="flex flex-col justify-center items-center w-full">
        <img src="/assets/images/TESTIMONIALS.png" alt="Testimonial" className="w-[80%]"/>
        <section className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-black text-2xl font-bold">
              What We've Done
            </h1>
            <p className="text-black">
              Trusted by Leading Enterprises and Innovators
            </p>
          </div>
          <div className="w-[600px] h-80 flex flex-col justify-center items-center gap-6
                    bg-white overflow-hidden">

          <MarqueeRow direction="left" />
          <MarqueeRow direction="right" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonial;