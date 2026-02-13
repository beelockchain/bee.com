"use client";

import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Digital Transformation Strategy Consulting",
    description:
      "We assess your business goals with the current technology landscape and market environment to define a clear, practical roadmap that guides technology investments and transformation priorities.",
    number:  <svg width="52" height="42" viewBox="0 0 52 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 20.8591C0 14.3946 1.25529 9.30201 3.76587 5.58121C6.31449 1.8604 10.4037 0 16.0335 0C21.6633 0 25.7334 1.8604 28.244 5.58121C30.7926 9.30201 32.0669 14.3946 32.0669 20.8591C32.0669 27.3987 30.7926 32.5289 28.244 36.2497C25.7334 39.9705 21.6633 41.8309 16.0335 41.8309C10.4037 41.8309 6.31449 39.9705 3.76587 36.2497C1.25529 32.5289 0 27.3987 0 20.8591ZM22.4811 20.8591C22.4811 17.0631 22.0627 14.1503 21.2258 12.1208C20.3889 10.0537 18.6582 9.02013 16.0335 9.02013C13.4088 9.02013 11.678 10.0537 10.8411 12.1208C10.0043 14.1503 9.58585 17.0631 9.58585 20.8591C9.58585 23.4148 9.738 25.5383 10.0423 27.2295C10.3466 28.8832 10.9553 30.2362 11.8682 31.2886C12.8192 32.3034 14.2076 32.8107 16.0335 32.8107C17.8593 32.8107 19.2288 32.3034 20.1417 31.2886C21.0927 30.2362 21.7203 28.8832 22.0246 27.2295C22.3289 25.5383 22.4811 23.4148 22.4811 20.8591Z" fill="#969696"/>
<path d="M36.1948 9.8094V0.84564H52V42H41.8436V9.8094H36.1948Z" fill="#969696"/>
</svg>
  },
  {
    title: "Legacy Application Modernization",
    description:
      "Beelockchain upgrades existing applications for better performance, security, scalability, and compatibility with modern cloud and digital platforms.",
  },
  {
    title: "Custom Software Development",
    description:
      "Our design and development of web, mobile, and enterprise applications tailored to your specific workflows, helping you improve productivity and customer engagement.",
  },
  {
    title: "Cybersecurity Services",
    description:
      "We implement data protection, identity management, threat monitoring, and compliance controls to safeguard critical systems and sensitive information.",
  },
];
const NumberSvg = ({ number }: { number: string }) => {
  return (
    <svg
      width="52"
      height="42"
      viewBox="0 0 52 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-14 h-12"
    >
      <text
        x="50%"
        y="60%"
        textAnchor="middle"
        fill="#969696"
        fontSize="38"
        fontWeight="700"
        fontFamily="Poppins, sans-serif"
      >
        {number}
      </text>
    </svg>
  );
};

const BusinessValue = () => {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-6xl mx-auto">
            <h2 className="text-[36px] font-bold leading-tight">
                How Beelockchain Delivers{" "}
                <span className="text-yellow-400">
                Digital Transformation 
                </span>{" "}for <br/>
                 Business Value Creation
            </h2>

            <p className="mt-6 mx-auto text-black text-[16px] font-poppins font-medium 
            max-w-xl md:max-w-2xl lg:max-w-4xl">
                Beelockchain supports organizations through their digital
                transformation journey by combining consulting expertise with
                practical execution. Our end-to-end services improve process
                efficiency, modernize workflows, and help businesses respond
                faster to change while delivering better customer experiences.
            </p>
            </div>

        {/* Content Grid */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SERVICES */}
          <div className="space-y-6">
            {services.map((item, index) => (
                <div
                key={index}
                className="relative p-6 rounded-xl bg-neutral-100 shadow-sm hover:shadow-md transition"
                >
                <h3 className="text-xl font-semibold mb-3 text-black font-poppins">
                    {item.title}
                </h3>

                <p className="text-black text-[14px] leading-relaxed font-poppins">
                    {item.description}
                </p>

                {/* Bottom Right Number */}
                <div className="absolute bottom-4 right-6 opacity-40">
                    <NumberSvg number={(index + 1).toString().padStart(2, "0")} />
                </div>
                </div>



            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5]">

              {/* Replace this with your actual asset */}
              <Image
                src="/assets/images/business_val1.png"
                alt="Digital transformation visual"
                fill
                className="object-contain"
              />

            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <button className="px-8 py-3 rounded-full bg-yellow-400 text-black font-medium hover:scale-105 transition">
            Transform Your Business
          </button>
        </div>

      </div>
    </section>
  );
};

export default BusinessValue;
