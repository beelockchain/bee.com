"use client";

import React, { useState, useCallback } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin, FiUser } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";

// ─── Constants ────────────────────────────────────────────────────────────────

const COUNTRY_OPTIONS = [
  { label: "Country", value: "" },
  { label: "India", value: "IN" },
  { label: "USA", value: "US" },
  { label: "UK", value: "GB" },
] as const;

const PHONE_CODES = [
  { flag: "🇮🇳", code: "+91" },
  { flag: "🇺🇸", code: "+1" },
  { flag: "🇬🇧", code: "+44" },
] as const;

const SERVICE_OPTIONS = [
  { label: "AI Development", value: "ai-dev" },
    { label: "Blockchain Development", value: "blockchain-dev" },

  { label: "Digital Marketing Service", value: "digital-marketing" },
  { label: "Mobile App Development", value: "mobile-dev" },
  { label: "Custom Software Development", value: "custom-software-dev" },
  { label: "DevOps Consulting", value: "devops-consulting" },
  { label: "Digital Transformation", value: "digital-transformation" },
  { label: "Game App Development", value: "game-app-dev" },
] as const;

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  email: string;
  country: string;
  phoneCode: string;
  phone: string;
  service: string;
  message: string;
}

const INITIAL_FORM_STATE: FormState = {
  name: "",
  email: "",
  country: "",
  phoneCode: "+91",
  phone: "",
  service: "",
  message: "",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const inputBaseClass = `
  w-full min-h-[48px] bg-gray-100 px-4 py-3 sm:py-4 pr-12 rounded-xl
  text-sm sm:text-base outline-none
  focus:ring-2 focus:ring-yellow-400 focus:bg-white
  transition-all duration-300
  font-[Poppins] placeholder:font-[Poppins]
`.trim();

const selectBaseClass = `
  w-full min-h-[48px] bg-gray-100 px-4 py-3 sm:py-4 pr-10 rounded-xl
  text-sm sm:text-base outline-none appearance-none
  focus:ring-2 focus:ring-yellow-400
  transition-all duration-300
  font-[Poppins]
`.trim();

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
}

const InputField = ({ icon, ...props }: InputFieldProps) => (
  <div className="relative">
    <input {...props} className={inputBaseClass} />
    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg pointer-events-none">
      {icon}
    </span>
  </div>
);

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: readonly { label: string; value: string }[];
}

const SelectField = ({ options, ...props }: SelectFieldProps) => (
  <div className="relative">
    <select {...props} className={selectBaseClass}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
    <IoChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
  </div>
);



// ─── Main Component ───────────────────────────────────────────────────────────

export const ContactForm = () => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM_STATE);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // TODO: wire up API call / toast notification
      console.log("Form submitted:", form);
    },
    [form]
  );

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-10 shadow-xl w-full max-w-3xl mx-auto h-full flex flex-col overflow-hidden">
      <h2 className="text-black text-[25px] lg:text-[35px] xl:text-[38px] font-semibold leading-tight font-[poppins] mb-6 sm:mb-8 text-center md:text-left">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 text-black placeholder:text-black sm:space-y-5 md:space-y-4 flex flex-col flex-1 justify-between">
        {/* Name */}
        <InputField
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          icon={<FiUser />}
        />

        {/* Email */}
        <InputField
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={form.email}
          onChange={handleChange}
          icon={<FiMail />}
        />

        {/* Country + Phone */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <SelectField
            name="country"
            value={form.country}
            onChange={handleChange}
            options={COUNTRY_OPTIONS}
          />

          <div className="min-w-0">
            <div className="flex items-center w-full min-h-[48px] bg-gray-100 rounded-xl focus-within:ring-2 focus-within:ring-yellow-400 font-[Poppins] overflow-hidden">
              <select
                name="phoneCode"
                value={form.phoneCode}
                onChange={handleChange}
                className="bg-transparent px-3 py-3 text-sm outline-none cursor-pointer shrink-0"
              >
                {PHONE_CODES.map(({ flag, code }) => (
                  <option key={code} value={code}>
                    {flag} {code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="9876543210"
                value={form.phone}
                onChange={handleChange}
                className="flex-1 min-w-0 bg-transparent px-3 py-3 text-sm sm:text-base outline-none font-[Poppins] placeholder:font-[Poppins]"
              />
            </div>
          </div>
        </div>

        {/* Service */}
        <SelectField
          name="service"
          value={form.service}
          onChange={handleChange}
          options={SERVICE_OPTIONS}
        />

        {/* Message */}
        <textarea
          name="message"
          rows={4}
          placeholder="Project Details / Describe what you need"
          value={form.message}
          onChange={handleChange}
          className="w-full bg-gray-100 px-4 py-3 sm:py-4 rounded-xl text-sm sm:text-base outline-none resize-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all duration-300 font-[Poppins] placeholder:font-[Poppins]"
        />

        <p className="text-[12px] sm:text-[12px] md:text-[16px] lg:text-[16px] text-gray-500 leading-relaxed font-[Poppins]">
          *All inquiries are handled confidentially. NDAs can be signed before detailed discussions.
        </p>

         <div className="flex justify-center">
    <button
      type="submit"
      className="group relative flex items-center gap-2 px-4 mt-4 py-1 md:py-1 lg:px-4 lg:py-0 border border-black rounded-full overflow-hidden cursor-pointer"
    >
      {/* Expand circle on hover */}
      <span className="absolute inset-0 flex items-center justify-center z-0">
        <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
      </span>

      {/* Radial glow */}
      <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />

      <span className="relative z-10 text-black text-sm whitespace-nowrap transition-colors">
        Submit
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
  </div>
      </form>
    </div>
  );
};