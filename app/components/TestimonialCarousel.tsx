"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "BeeLockChain helped us eliminate paper records while securing sensitive patient data",
    client: "Healthcare Client",
    image: "/assets/images/insight-one.png",
  },
  {
    id: 2,
    text: "BeeLockChain streamlined our operations and improved data transparency",
    client: "Finance Client",
    image: "/assets/images/insight-two.png",
  },
  {
    id: 3,
    text: "BeeLockChain provided secure and scalable digital transformation",
    client: "Enterprise Client",
    image: "/assets/images/insight-three.png",
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="w-full bg-white flex flex-col justify-center items-center ">
      <div className="max-w-[800px] px-6 relative">

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((item) => (
              <div key={item.id} className="min-w-full">
                <div className="flex flex-col md:flex-row items-center gap-12">

                  {/* IMAGE */}
                  <div className="w-full md:w-[150px] h-[220px] relative rounded-2xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.client}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">
                    <p className="text-[28px] leading-snug text-black font-medium max-w-[600px]">
                      {item.text}
                    </p>

                    <p className="mt-6 text-[18px] font-semibold text-black">
                      {item.client}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONTROLS */}
        <div className="flex items-center justify-center gap-6 mt-14">

          {/* DOTS */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all duration-300
                  ${current === index
                    ? "w-10 bg-yellow-400"
                    : "w-3 bg-zinc-300 hover:bg-zinc-400"}
                `}
              />
            ))}
          </div>

          {/* PLAY BUTTON */}
          <button
            aria-label="Play"
            className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-zinc-100 transition"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="black"
            >
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
