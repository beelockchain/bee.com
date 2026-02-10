"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
    const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;

const testimonials = [
  {
    id: 1,
    text: "We appreciated the Beelockchain team's strong understanding of healthcare operations. The mobile app they built improved internal coordination and patient communication. Most importantly, the team managed the project efficiently and helped us launch the app at the right time without compromising quality. They were professional, realistic, and consistent throughout the process.",
    client: "James Anderson – Chief Technology Officer (CTO)",
    image: `${ASSET_URL}/images/testimonialcurosal2.webp`,
  },
  {
    id: 2,
    text: "Collaborating with the Beelockchain developer team, we migrated our existing system into a fully integrated ERP solution for our manufacturing operations. Their technical execution, business alignment, and launch support ensured a smooth go-live. ",
    client: "Michael Thompson – Founder & CEO",
    image: `${ASSET_URL}/images/testimonialcurosal3.webp`,
  },
  {
    id: 3,
    text: "Our experience with the Beelockchain development team was consistently positive from start to launch. Their strong technical expertise and clear alignment with our business goals enabled the successful deployment of an AI chatbot that supports our e-commerce platform and strengthens customer service operations.",
    client: "Emma Wilson – Startup Co-Founder",
    image: `${ASSET_URL}/images/testimonialcurosal.webp`,
  },
  {
    id: 4,
    text: "The Beelockchain team supported our beauty care brand with a well-planned digital marketing strategy. Their thoughtful content planning, targeted campaign execution, and consistent performance tracking helped improve brand awareness, audience engagement, and overall digital presence.",
    client: "Emily Roberts – Product Manager",
    image: `${ASSET_URL}/images/testimonialcurosal4.webp`,
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  // 🔁 Auto slide every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white">

      {/* ================= DESKTOP & TABLET ================= */}
      <div className="hidden md:flex justify-center">
        <div className="max-w-[800px] px-6 relative">

          {/* SLIDER */}
          <div className="md:overflow-hidden m-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((item) => (
                <div key={item.id} className="min-w-full">
                  <div className="flex items-center justify-center gap-12">

                    {/* IMAGE */}
                   <div className="w-[150px] h-[220px] relative rounded-2xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.client}
                      fill
                      sizes="150px"
                      className="object-cover object-top"
                    />

                    </div>

                    {/* CONTENT */}
                    <div className="flex-1">
                      <p className="text-lg leading-snug text-black font-medium max-w-[600px]">
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

          {/* DOTS */}
          <div className="flex items-center justify-center gap-6 mt-14">
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 rounded-full transition-all duration-300
                    ${
                      current === index
                        ? "w-10 bg-yellow-400"
                        : "w-3 bg-zinc-300 hover:bg-zinc-400"
                    }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-4 py-6">
        <div className="relative">

          {/* SLIDER */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((item) => (
                <div key={item.id} className="min-w-full">
                  <div className="flex items-start gap-4">

                    {/* IMAGE */}
                    <div className="w-[110px] h-[180px] relative rounded-xl overflow-hidden border-2 border-blue-500">
                      <Image
                        src={item.image}
                        alt={item.client}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* TEXT */}
                    <div className="flex-1">
                      <p className="text-xs text-black leading-snug">
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

          {/* DOTS */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all
                    ${
                      current === index
                        ? "w-6 bg-yellow-400"
                        : "w-2 bg-zinc-300"
                    }`}
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
