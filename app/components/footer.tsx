"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const cards = [
    {
      title: "CANADA",
      desc: "At morbi arcu feugiat est tristique risus ipsum maecenas morbi. Elementum.",
      contact: "+02 3486 4631",
    },
    {
      title: "USA",
      desc: "At morbi arcu feugiat est tristique risus ipsum maecenas morbi. Elementum.",
      contact: "+01 9876 5432",
    },
    {
      title: "UK",
      desc: "At morbi arcu feugiat est tristique risus ipsum maecenas morbi. Elementum.",
      contact: "+44 7654 3210",
    },
    {
      title: "INDIA",
      desc: "At morbi arcu feugiat est tristique risus ipsum maecenas morbi. Elementum.",
      contact: "+91 98765 43210",
    },
  ];
  


const socialIcons = [
  {
    name: "Facebook",
    href: "#",
    src: "/assets/images/fb-icon.png",
  },
  {
    name: "Twitter",
    href: "#",
    src: "/assets/images/x-icon.png",
  },
  {
    name: "Discord",
    href: "#",
    src: "/assets/images/discord-icon.png",
  },
  {
    name: "LinkedIn",
    href: "#",
    src: "/assets/images/linkedin-icon.png",
  },
  {
    name: "Pinterest",
    href: "#",
    src: "/assets/images/pin-icon.png",
  },
];


  return (
   <footer className="w-full bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* ================= CARD GRID ================= */}
        
  <div className="relative w-full mt-10">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center rounded-xl opacity-20 pointer-events-none"
    style={{
      backgroundImage: "url('/assets/images/line-wave.png')",
      minHeight: "100%", 
    }}
  ></div>

  {/* Card Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
    {cards.map((card, index) => (
      <div
        key={index}
        className="rounded-xl bg-[#F2F2F2] p-6 flex flex-col gap-4"
      >
        <h4 className="text-[26px] font-bold font-poppins text-black">
          {card.title}
        </h4>
        <p className="text-[16px] leading-relaxed text-black/70 font-poppins">
          {card.desc}
        </p>
        <div className="flex items-center gap-3 mt-2">
          <Image
            src="/assets/images/location-icon.png"
            alt="Location Icon"
            width={22}
            height={22}
          />
          <span className="text-[16px] font-poppins font-medium text-black">
            {card.contact}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>



        {/* ================= FOOTER CONTENT ================= */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* LEFT — LOGO */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <Image
              src="/assets/images/footer-logo.png"
              alt="Company Logo"
              width={160}
              height={40}
            />
            <p className="text-black/80 max-w-[260px] font-poppins text-[15px] leading-relaxed">
              Digital Transformation Company
            </p>
          </div>

          {/* CENTER — SERVICES */}
          <div className="md:col-span-6 flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <h4 className="text-[22px] font-semibold text-black font-poppins">
              Our Expertise
            </h4>

            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 max-w-[600px] text-[15px] text-black/70 font-poppins">
              <Link href="#" className="underline underline-offset-4 hover:text-black">Digital Transformation</Link>
              <Link href="#" className="underline underline-offset-4 hover:text-black">Generative AI Development</Link>
              <Link href="#" className="underline underline-offset-4 hover:text-black">Software Development</Link>
              <Link href="#" className="underline underline-offset-4 hover:text-black">Blockchain Development</Link>
              <Link href="#" className="underline underline-offset-4 hover:text-black">LLM Development</Link>
              <Link href="#" className="underline underline-offset-4 hover:text-black">DevOps</Link>
              <Link href="#" className="underline underline-offset-4 hover:text-black">Digital Marketing</Link>
            </div>
          </div>

          {/* RIGHT — SOCIAL */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end gap-4">
            <h4 className="w-full text-center md:text-left text-[18px] text-black font-poppins">
              Connect With Us
            </h4>

            <div className="flex gap-5">
              {socialIcons.map((icon, i) => (
                <Link key={i} href={icon.href} aria-label={icon.name}>
                  <Image
                    src={icon.src}
                    alt={icon.name}
                    width={42}
                    height={42}
                    className="hover:opacity-80 hover:scale-105 transition"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ================= FOOTER BOTTOM ================= */}
        <div className="pt-10">
          <div className="flex justify-center mb-6">
            <Image
              src="/assets/images/footer-text.png"
              alt="Footer Text"
              width={1400}
              height={219}
              className="w-full max-w-[1400px] h-auto object-contain"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] text-black/70 font-poppins text-center md:text-left">
            <p>© 2025 Beelockchain Foundation, Inc.</p>

            <div className="flex gap-4">
              <Link href="#" className="hover:text-black">Terms & Conditions</Link>
              <span>|</span>
              <Link href="#" className="hover:text-black">Privacy Policy</Link>
              <span>|</span>
              <Link href="#" className="hover:text-black">Sitemap</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
