"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;

const testimonials = [
  {
    id: 1,
    text: "The Beelockchain team delivered an AI chatbot solution that significantly improved our customer response time while maintaining a natural conversational experience.",
    client: "James Anderson – Chief Technology Officer (CTO)",
    image: `${ASSET_URL}/images/testimonialcurosal2.webp`,
  },
  {
    id: 2,
    text: "Their chatbot system helped automate repetitive support tasks and allowed our team to focus on more complex customer needs.",
    client: "Michael Thompson –Product Manager",
    image: `${ASSET_URL}/images/testimonialcurosal3.webp`,
  },
];

const Chatbottesticarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-6">
      <div className="max-w-[800px] mx-auto">

        {/* SLIDER */}
        <div className="overflow-hidden m-4 sm:m-8">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((item) => (
              <div key={item.id} className="min-w-full">
                {/* Mobile: column (image top, content below) | sm+: row (image left, content right) */}
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6">

                  {/* IMAGE */}
                  <div className="w-[120px] h-[160px] sm:w-[140px] sm:h-[180px] flex-shrink-0 relative rounded-2xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.client}
                      fill
                      sizes="(max-width: 640px) 120px, 140px"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[14px] xl:text-[16px] font-poppins font-regular text-black">
                      {item.text}
                    </p>
                    <p className="mt-3 sm:mt-6 text-[11px] sm:text-[14px] md:text-[15px] font-poppins font-semibold text-black">
                      {item.client}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300
                ${
                  current === index
                    ? "w-6 sm:w-10 bg-yellow-400"
                    : "w-2 sm:w-3 bg-zinc-300 hover:bg-zinc-400"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Chatbottesticarousel;