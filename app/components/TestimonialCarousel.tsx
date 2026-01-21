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
    <section className="w-full bg-white">

      {/* ================= DESKTOP & TABLET ================= */}
      <div className="hidden md:flex justify-center">
        <div className="max-w-[800px] px-6 relative">

          {/* SLIDER */}
          <div className="md:overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((item) => (
                <div key={item.id} className="min-w-full">
                  <div className="flex items-center gap-12">

                    {/* IMAGE */}
                    <div className="w-[150px] h-[220px] relative rounded-2xl overflow-hidden">
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
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 rounded-full transition-all duration-300
                    ${current === index
                      ? "w-10 bg-yellow-400"
                      : "w-3 bg-zinc-300 hover:bg-zinc-400"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    
      {/* ================= MOBILE (NEW ONLY) ================= */}
      <div className="md:hidden px-4 py-6">
        <div className="relative">

          {/* SLIDER */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out "
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((item) => (
                <div key={item.id} className="min-w-full">
                  <div className="flex items-start gap-4">

                    {/* IMAGE */}
                    <div className="w-[110px] h-[120px] relative rounded-xl overflow-hidden border-2 border-blue-500">
                      <Image
                        src={item.image}
                        alt={item.client}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* TEXT */}
                    <div className="flex-1">
                      <p className="text-sm text-black leading-snug">
                        {item.text}
                      </p>

                      <p className="mt-3 text-xs font-semibold text-black">
                        {item.client}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DOTS + PLAY */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all
                    ${current === index
                      ? "w-6 bg-yellow-400"
                      : "w-2 bg-zinc-300"}`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default TestimonialCarousel;
