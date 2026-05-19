"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;

const testimonials = [
  {
    id: 1,
    text: "We appreciated the Beelockchain team's strong understanding of healthcare operations. The mobile app they built improved internal coordination and patient communication. Most importantly, the team managed the project efficiently and helped us launch the app at the right time without compromising quality.",
    client: "James Anderson – Chief Technology Officer (CTO)",
    image: `${ASSET_URL}/images/testimonialcurosal2.webp`,
  },
  {
    id: 2,
    text: "Collaborating with the Beelockchain developer team, we migrated our existing system into a fully integrated ERP solution for our manufacturing operations. Their technical execution, business alignment, and launch support ensured a smooth go-live.",
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

const CustomeCarousel = () => {
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
                    <p className="text-[11px] sm:text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px]  font-normal text-black">
                      {item.text}
                    </p>
                    <p className="mt-3 sm:mt-6 text-[11px] sm:text-[14px] md:text-[15px] lg:text-[16px]  font-bold text-black">
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

export default CustomeCarousel;