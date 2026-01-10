import MarqueeRow from "./MarqueeRow";

const Testimonial = () => {
    return (
        <div className="flex justify-center items-center w-full py-20">
            <div className="flex flex-col justify-center items-center">
                <section className="w-full h-[40%] overflow-hidden flex flex-col items-center justify-center gap-8">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h1 className="text-black text-2xl font-bold ">What We’ve Done</h1>
                        <p className="text-black">Trusted by Leading Enterprises and Innovators</p>
                    </div>
                    <MarqueeRow direction="left"  />
                    <MarqueeRow direction="right" />
                </section>
                <div className="w-full h-[40%]"></div>
                <div className="w-full h-[20%]"></div>
            </div>
        </div>
    );
}

export default Testimonial;