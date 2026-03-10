"use client";

import React, { useRef } from "react";
import { FiMail, FiUser } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput from "react-phone-input-2";
import { getData } from "country-list";
import { toast } from "react-toastify";
import { useContactStore } from "@/app/zustand/store/contactStore";
import "react-phone-input-2/lib/style.css";

// ─── Types ────────────────────────────────────────────────────────────────────

/**
 * Shape stored in React Hook Form.
 * `phone_full` holds the combined string PhoneInput gives us (dialCode + localNumber).
 * We split it into `phone_code` / `phone_number` at submit time before sending to the API.
 */
interface ContactFormValues {
  customer_name: string;
  email: string;
  country: string;
  phone_full: string;
  service: string;
  description: string;
}

/** Shape the API / store expects */
interface ContactPayload extends Omit<ContactFormValues, "phone_full"> {
  phone_code: string;   // e.g. "91"
  phone_number: string; // e.g. "9876543210"
}

// ─── Constants ────────────────────────────────────────────────────────────────

const COUNTRY_OPTIONS = [
  { label: "Select Country", value: "" },
  ...getData().map(({ name, code }) => ({ label: name, value: code })),
] as const;

const SERVICE_OPTIONS = [
  { label: "Select Service you need", value: "" },
  { label: "AI Development", value: "ai-dev" },
  { label: "Blockchain Development", value: "blockchain-dev" },
  { label: "Digital Marketing Service", value: "digital-marketing" },
  { label: "Mobile App Development", value: "mobile-dev" },
  { label: "Custom Software Development", value: "custom-software-dev" },
  { label: "DevOps Consulting", value: "devops-consulting" },
  { label: "Digital Transformation", value: "digital-transformation" },
  { label: "Game App Development", value: "game-app-dev" },
] as const;

const DEFAULT_VALUES: ContactFormValues = {
  customer_name: "",
  email: "",
  country: "",
  phone_full: "",
  service: "",
  description: "",
};

// ─── Validation Schema ────────────────────────────────────────────────────────

const contactSchema: yup.ObjectSchema<ContactFormValues> = yup.object({
  customer_name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]+$/, "Name must contain only letters")
    .min(3, "Name must be at least 3 characters"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  country: yup
    .string()
    .required("Country is required"),

  phone_full: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{8,15}$/, "Enter a valid phone number"),

  service: yup
    .string()
    .required("Please select a service"),

  description: yup
    .string()
    .required("Description is required")
    .min(10, "Minimum 10 characters")
    .max(1000, "Maximum 1000 characters"),
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

function splitPhone(
  fullValue: string,
  dialCode: string,
): { phone_code: string; phone_number: string } {
  const localNumber = fullValue.startsWith(dialCode)
    ? fullValue.slice(dialCode.length)
    : fullValue;
  return { phone_code: dialCode, phone_number: localNumber };
}

// ─── Shared Styles ────────────────────────────────────────────────────────────

const inputClass =
  "w-full min-h-[48px] bg-gray-100 px-4 py-3 sm:py-4 pr-12 rounded-xl " +
  "text-sm sm:text-base outline-none " +
  "focus:ring-2 focus:ring-yellow-400 focus:bg-white " +
  "transition-all duration-300 " +
  "font-[Poppins] placeholder:font-[Poppins]";

const selectClass =
  "w-full min-h-[48px] bg-gray-100 px-4 py-3 sm:py-4 pr-10 rounded-xl " +
  "text-sm sm:text-base outline-none appearance-none " +
  "focus:ring-2 focus:ring-yellow-400 " +
  "transition-all duration-300 font-[Poppins]";

// ─── Sub-components ───────────────────────────────────────────────────────────

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
}

const InputField = ({ icon, ...rest }: InputFieldProps) => (
  <div className="relative">
    <input className={inputClass} {...rest} />
    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg pointer-events-none">
      {icon}
    </span>
  </div>
);

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: readonly { label: string; value: string }[];
}

const SelectField = ({ options, ...rest }: SelectFieldProps) => (
  <div className="relative">
    <select className={selectClass} {...rest}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
    <IoChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
  </div>
);

const FieldError = ({ message }: { message?: string }) =>
  message ? <p className="text-red-500 text-xs mt-1">{message}</p> : null;

/** Animated spinner — pure SVG, no extra deps */
const Spinner = () => (
  <svg
    className="animate-spin w-4 h-4 text-black"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12" cy="12" r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export const ContactForm = () => {
  const addContact = useContactStore((state) => state.addContact);

  // Stores the latest dialCode without causing extra re-renders.
  // Only needed at submit time, not on every keystroke.
  const dialCodeRef = useRef<string>("91");

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(contactSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const selectedCountryCode = watch("country");
  const phoneCountry = selectedCountryCode?.toLowerCase() || "in";

  const onSubmit = async (data: ContactFormValues) => {
    const { phone_full, ...rest } = data;
    const { phone_code, phone_number } = splitPhone(phone_full, dialCodeRef.current);
    const payload: ContactPayload = { ...rest, phone_code, phone_number };

    try {
      await addContact(payload);
      toast.success("Message sent! We'll be in touch soon.");
      reset();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast.error(message);
    }
  };

  return (
    <>
  

      <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-10 shadow-xl w-full max-w-3xl mx-auto h-full flex flex-col overflow-hidden">
        <h2 className="text-black text-[25px] lg:text-[35px] xl:text-[38px] font-semibold leading-tight font-[Poppins] mb-6 sm:mb-8 text-center md:text-left">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-4 text-black sm:space-y-5 md:space-y-4 flex flex-col flex-1 justify-between"
        >
          {/* Name */}
          <div>
            <InputField
              type="text"
              placeholder="Your Name"
              icon={<FiUser />}
              {...register("customer_name")}
              onKeyDown={(e) => {
                if (!/[a-zA-Z\s]/.test(e.key) && e.key !== "Backspace") {
                  e.preventDefault();
                }
              }}
            />
            <FieldError message={errors.customer_name?.message} />
          </div>

          {/* Email */}
          <div>
            <InputField
              type="email"
              placeholder="example@gmail.com"
              icon={<FiMail />}
              {...register("email")}
            />
            <FieldError message={errors.email?.message} />
          </div>

          {/* Country + Phone */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div>
              <SelectField options={COUNTRY_OPTIONS} {...register("country")} />
              <FieldError message={errors.country?.message} />
            </div>

            <div>
              <Controller
                name="phone_full"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    country={phoneCountry}
                    value={value}
                    onChange={(fullValue, countryData: { dialCode: string }) => {
                      dialCodeRef.current = countryData.dialCode ?? "91";
                      onChange(fullValue);
                    }}
                    inputStyle={{
                      width: "100%",
                      height: "55px",
                      borderRadius: "12px",
                      background: "#f3f4f6",
                      border: "none",
                    }}
                    containerStyle={{ width: "100%" }}
                  />
                )}
              />
              <FieldError message={errors.phone_full?.message} />
            </div>
          </div>

          {/* Service */}
          <div>
            <SelectField options={SERVICE_OPTIONS} {...register("service")} />
            <FieldError message={errors.service?.message} />
          </div>

          {/* Description */}
          <div>
            <textarea
              rows={4}
              maxLength={1000}
              placeholder="Project Details / Describe what you need"
              {...register("description")}
              className="w-full bg-gray-100 px-4 py-3 sm:py-4 rounded-xl text-sm sm:text-base outline-none resize-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all duration-300 font-[Poppins] placeholder:font-[Poppins]"
            />
            <FieldError message={errors.description?.message} />
          </div>

          <p className="text-[12px] sm:text-[12px] md:text-[16px] text-gray-500 leading-relaxed font-[Poppins]">
            *All inquiries are handled confidentially. NDAs can be signed before detailed discussions.
          </p>

          {/* Submit */}
          <div className="flex justify-center">
           <button
  type="submit"
  disabled={isSubmitting}
  className="group relative flex items-center gap-2 px-4 mt-4 py-1 md:py-1 lg:px-4 lg:py-0 border border-black rounded-full overflow-hidden cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
>
  {/* Hover expand circle */}
  <span className="absolute inset-0 flex items-center justify-center z-0">
    <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
  </span>

  {/* Radial glow */}
  <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />

  {/* Button text */}
  <span className="relative z-10 text-black text-sm whitespace-nowrap flex items-center gap-2">
    {isSubmitting && <Spinner />}
    {isSubmitting ? "Loading..." : "Submit"}
  </span>

  {/* Arrow icon stays always */}
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
    </>
  );
};