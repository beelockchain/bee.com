"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "./ContactForm";

// ─── Constants ────────────────────────────────────────────────────────────────

const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL ?? "";

const SOCIAL_ICONS = [
  { name: "Facebook",  href: "https://www.facebook.com/profile.php?id=61585250317865", src: `${ASSET_URL}/images/fb-icon.webp` },
  { name: "Twitter",   href: "https://x.com/beelockchain",                             src: `${ASSET_URL}/images/x-icon.webp` },
  { name: "Instagram", href: "https://www.instagram.com/beelockchain_com",             src: `${ASSET_URL}/images/insta-icon.webp` },
  { name: "LinkedIn",  href: "https://www.linkedin.com/company/beelockchain-com",      src: `${ASSET_URL}/images/linkedin-icon.webp` },
  { name: "Telegram",  href: "https://t.me/+919025217523",                             src: `${ASSET_URL}/images/telegram-icon.webp` },
  { name: "Pinterest", href: "https://www.pinterest.com/beelockchain",                 src: `${ASSET_URL}/images/pin-icon.webp` },
] as const;

const CONTACT_LINKS = [
  {
    href: "https://wa.me/919025217523",
    icon: <FaWhatsapp className="text-lg group-hover:text-white transition" />,
    label: "+91 9025217523",
  },
  {
    href: "mailto:contact@beelockchain.com",
    icon: <FiMail className="text-lg group-hover:text-white transition" />,
    label: "contact@beelockchain.com",
  },
] as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Pill-style CTA button used in two places on this page */
const PillButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="group relative flex items-center gap-2 px-4 mt-4 py-2 md:py-1 lg:px-4 lg:py-0 border border-black rounded-full overflow-hidden cursor-pointer"
  >
    {/* Expand circle */}
    <span className="absolute inset-0 flex items-center justify-center z-0">
      <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
    </span>

    {/* Radial glow */}
    <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />

    <span className="relative z-10 text-black text-sm whitespace-nowrap transition-colors">
      {label}
    </span>

    <svg
      viewBox="0 0 56 55"
      aria-hidden="true"
      className="relative z-10 w-10 h-10 lg:w-14 lg:h-14 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95"
    >
      <circle cx="28.2" cy="27.1" r="15.9" fill="#F6E000" stroke="#F9C901" strokeWidth="1.5" />
      <path
        d="M31.3 22.1L33.2 29.4M31.3 22.1L24.1 24.1M31.3 22.1L25.1 32.8"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const SocialLinks = () => (
  <div className="flex flex-col gap-3 mt-8">
    <h4 className="text-[14px] md:text-[12px] lg:text-[16px] text-black font-[Poppins]">
      Follow on:
    </h4>
    <div className="flex gap-3 items-center justify-center md:justify-start">
      {SOCIAL_ICONS.map(({ name, href, src }) => (
        <Link key={name} href={href} aria-label={name} target="_blank" rel="noopener noreferrer" className="group">
          <div className="transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_15px_25px_rgba(0,0,0,0.25)] rounded-full">
            <Image src={src} alt={name} width={42} height={42} className="object-contain transition-opacity duration-300 group-hover:opacity-90" />
          </div>
        </Link>
      ))}
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const ContactHeroSection = () => (
  <section className="relative w-full py-12 md:py-16 px-4 sm:px-5 md:px-5 lg:px-18 overflow-hidden">
    {/* Background accents */}
    <div className="absolute inset-y-0 left-0 w-1/2 bg-[#fafafaab] -z-10" />
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-400/30 rounded-full blur-3xl -z-10" />

    {/* Mobile-only heading */}
    <div className="block md:hidden text-center mb-8">
      <h2 className="text-[25px] text-black font-semibold leading-tight font-[poppins]">
        Let's Build Your Next
        <span className="block text-[25px] font-semibold">
          <span data-text="Services" className="shine-text text-[#F5B800] relative">Digital Solution</span>
        </span>
      </h2>
    </div>

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-2 md:gap-2 md:items-stretch">

      {/* ── LEFT COLUMN ── */}
      <div className="order-2 md:order-1 flex flex-col gap-8 items-center md:items-start text-center md:text-start md:justify-between">
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-400/30 rounded-full blur-3xl -z-10" />

        {/* Desktop heading */}
        <div>
          <h2 className="hidden md:block text-[25px] lg:text-[35px] xl:text-[38px] text-black font-semibold leading-tight font-[poppins]">
            Let's Build Your Next{" "}
            <span className="block text-[23px] md:text-[25px] lg:text-[35px] xl:text-[38px] font-semibold">
              <span data-text="Services" className="shine-text text-[#F5B800] relative">
                Digital Solution
              </span>
            </span>
          </h2>

          <div className="mt-10 space-y-6">
            <h2 className="text-[20px] md:text-[22px] font-semibold text-black/80">
              Book A Free IT Consultation
            </h2>

            <p className="max-w-[280px] sm:max-w-[300px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] text-[12px] sm:text-[12px] md:text-[11px] lg:text-[14px] xl:text-[16px] text-black font-normal font-['Poppins'] text-center md:text-left mx-auto md:mx-0">
              Discuss your project with us. We are ready to assist you with tailored development solutions.
            </p>

            {/* Contact links */}
            <div className="flex flex-col md:flex-col gap-4 mt-6 items-center md:items-start justify-center md:justify-start">
              {CONTACT_LINKS.map(({ href, icon, label }) => (
                <Link
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group px-5 py-2 rounded-full border text-black border-black flex items-center gap-2 transition duration-300 hover:bg-black hover:text-white hover:scale-105"
                >
                  {icon}
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 mt-6 text-black items-center justify-center md:justify-start">
              <FiMapPin className="text-lg mt-1 ml-4" />
              <address className="not-italic text-[13px] sm:text-[12px] md:text-[11px] lg:text-[14px] xl:text-[16px] text-black font-normal font-['Poppins']">
                6/219, R5, Ganapathy Nagar, <br />
                Theni Rd, Achampattu, Madurai, <br />
                Tamil Nadu 625019
              </address>
            </div>

            <SocialLinks />
          </div>
        </div>

        {/* Instant CTA card */}
        <div className="bg-white p-4 lg:p-8 rounded-2xl shadow-md space-y-4">
          <h2 className="text-[22px] md:text-[22px] font-semibold text-black">
            Get In Touch Instantly
          </h2>
    <p className="max-w-[550px] mx-auto text-[13px] sm:text-[12px] md:text-[11px] lg:text-[14px] xl:text-[16px] text-black font-normal font-['Poppins']">
    Skip the wait and schedule your free 30-minute consultation now. Web conferencing details will be shared upon confirmation.</p>
          <div className="flex items-center justify-center md:justify-start">
            <PillButton label="Start Video Call" />
          </div>
        </div>
      </div>

      {/* ── RIGHT COLUMN ── */}
      <div className="order-1 md:order-2 flex flex-col">
        <ContactForm />
      </div>

    </div>
  </section>
);

export default ContactHeroSection;