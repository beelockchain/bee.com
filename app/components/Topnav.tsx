"use client";

import { ArrowUpRight, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;

const serviceSubMenu = [
  { label: "Digital Transformation", href: "/digital-transformation-services" },
  { label: "Software Development", href: "/service/software-development" },
  { label: "Blockchain Solutions", href: "/service/blockchain-solutions" },
  { label: "AI Development", href: "/service/ai-development" },
  { label: "DevOps", href: "/service/devops" },
];

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Service", href: "/service", hasDropdown: true },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
];

const secondaryNav = [
  { label: "About us", href: "/about" },
  { label: "Pitch Deck", href: "/pitch-deck" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Condition", href: "/terms" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

const socialIcons = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61585250317865",
    src: `${ASSET_URL}/images/fb-icon.webp`,
  },
  {
    name: "Twitter",
    href: "https://x.com/beelockchain",
    src: `${ASSET_URL}/images/x-icon.webp`,
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/+919025217523",
    src: `${ASSET_URL}/images/whatsapp-icon.webp`,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/beelockchain",
    src: `${ASSET_URL}/images/linkedin-icon.webp`,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/beelockchain_com",
    src: `${ASSET_URL}/images/insta-icon.webp`,
  },
];

const Topnav = () => {
  const pathname = usePathname();
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  // Ref on the Service nav button to measure its position
  const serviceButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        serviceButtonRef.current &&
        !serviceButtonRef.current.contains(target)
      ) {
        setServiceDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when side menu open
  useEffect(() => {
    document.body.style.overflow = sideMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sideMenuOpen]);

  const isActive = (href: string, hasDropdown?: boolean) => {
    if (hasDropdown) return pathname.startsWith("/service");
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleSubMenuClick = (href: string) => {
    setServiceDropdownOpen(false);
    window.location.href = href;
  };

  const handleSideSubMenuClick = (href: string) => {
    setSideMenuOpen(false);
    setMobileServiceOpen(false);
    window.location.href = href;
  };

  return (
    <>
      {/* ===== TOP NAV ===== */}
      <div className="fixed z-50 w-full bg-white">
        <div className="h-20 flex items-center justify-between px-4 lg:px-10">

          {/* 1. LOGO */}
          <div className="flex-shrink-0 w-[20%]">
            <Link href="/" onClick={() => setServiceDropdownOpen(false)}>
              <img
                src="https://beecomassets.s3.ap-southeast-2.amazonaws.com/assets/images/footer-logo.webp"
                alt="logo"
                className="h-8 sm:h-9 md:h-10 lg:h-14"
              />
            </Link>
          </div>

          {/* 2. CENTER NAV — hidden on mobile */}
          <nav className="hidden sm:flex flex-1 justify-center items-center gap-6 md:gap-8 lg:gap-10">
            {primaryNav.map((item) => {
              const active = isActive(item.href, item.hasDropdown);
              return (
                <div key={item.label} className="relative">
                  {item.hasDropdown ? (
                    // FIX 1: No chevron icon on Service
                    <button
                      ref={serviceButtonRef}
                      onClick={() => setServiceDropdownOpen((prev) => !prev)}
                      className={`text-xs md:text-sm lg:text-base transition-colors
                        ${active || serviceDropdownOpen
                          ? "font-bold text-black"        // FIX 6: bold + black when active
                          : "font-medium text-gray-700 hover:text-black"
                        }`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setServiceDropdownOpen(false)}
                      className={`text-xs md:text-sm lg:text-base transition-colors
                        ${active
                          ? "font-bold text-black"        // FIX 6: bold + black when active
                          : "font-medium text-gray-700 hover:text-black"
                        }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* 3. RIGHT ACTIONS */}
          <div className="flex items-center justify-end gap-3 w-auto sm:w-[30%] lg:w-[22%]">
            <Link
              href="/contact"
              className="hidden sm:flex items-center bg-black text-white px-3 py-2 md:px-4 md:py-2.5 rounded-full text-xs lg:text-sm hover:bg-gray-800 transition border border-black whitespace-nowrap"
            >
              Get started
              <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 ml-1" />
            </Link>

            <button
              onClick={() => setSideMenuOpen(!sideMenuOpen)}
              className="flex items-center gap-1.5 border border-black px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm hover:bg-gray-100 transition text-black cursor-pointer"
            >
              {sideMenuOpen ? "Close" : "Menu"}
              <div className="w-6 h-6 rounded-full flex items-center justify-center">
                {sideMenuOpen ? (
                  <X className="h-4 w-4 md:h-5 md:w-5" />
                ) : (
                  <img
                    src="https://beecomassets.s3.ap-southeast-2.amazonaws.com/assets/images/Hamburger.webp"
                    alt="menu"
                    className="h-4 w-4 md:h-5 md:w-5"
                  />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* ===== SERVICE DROPDOWN =====
            FIX 2: White + blur shadow, no grey gradient
            FIX 3: Submenu aligned directly under "Service" label
        */}
        <div
          ref={dropdownRef}
          className={`absolute left-0 right-0 top-full w-full transition-all duration-300 overflow-hidden ${
            serviceDropdownOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
          style={{
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow:
              "0 24px 64px 0 rgba(200,200,200,0.5), 0 2px 12px 0 rgba(180,180,180,0.15)",
          }}
        >
          {/*
            Mirror the exact flex layout of the top nav row so the submenu
            naturally sits below the "Service" button:
              [logo 20%] [flex-1 center: Home | Service | Blog | Contact] [right w-[30%]]
          */}
          <div className="flex items-start px-4 lg:px-10 py-6">
            {/* Mirror logo spacer */}
            <div className="flex-shrink-0 w-[20%]" />

            {/* Mirror center nav container */}
            <div className="flex flex-1 justify-center items-start gap-6 md:gap-8 lg:gap-10">
              {/* Invisible "Home" placeholder keeps Service column aligned */}
              <div
                aria-hidden
                className="invisible text-xs md:text-sm lg:text-base font-medium select-none pointer-events-none"
              >
                Home
              </div>

              {/* The actual submenu — directly under Service */}
              <div className="flex flex-col gap-3">
                {serviceSubMenu.map((sub) => (
                  <button
                    key={sub.label}
                    onClick={() => handleSubMenuClick(sub.href)}
                    className="flex items-center gap-3 text-sm md:text-[15px] font-medium text-gray-700 hover:text-black transition group text-left"
                  >
                    <span className="w-2 h-2 flex-shrink-0 rounded-full bg-yellow-400 group-hover:scale-125 transition-transform" />
                    {sub.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mirror right-actions spacer */}
            <div className="flex-shrink-0 sm:w-[30%] lg:w-[22%]" />
          </div>
        </div>
      </div>

      {/* Click-away overlay to close service dropdown */}
      {serviceDropdownOpen && (
        <div
          className="fixed inset-0 z-30"
          style={{ top: "80px" }}
          onClick={() => setServiceDropdownOpen(false)}
        />
      )}

      {/* ===== SIDE MENU ===== */}
      {sideMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm"
          style={{ top: "80px" }}
          onClick={() => setSideMenuOpen(false)}
        />
      )}

      {/*
        FIX 5 — Mobile: slides top-to-bottom, full width, all items centered
                 Desktop (sm+): slides from right, items right-aligned
      */}
      <div
        className={`
          fixed z-50 bg-white shadow-2xl flex flex-col pb-8
          transition-all duration-300 ease-in-out
          top-20
          /* Mobile */
          left-0 w-full pt-10
          ${sideMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
          }
          /* sm+: override to right-side drawer */
          sm:left-auto sm:right-0 sm:w-[min(380px,90vw)] sm:h-[calc(100vh-80px)]
          sm:translate-y-0
          ${sideMenuOpen ? "sm:translate-x-0 sm:opacity-100" : "sm:translate-x-full sm:opacity-0 sm:pointer-events-none"}
        `}
      >
        <div className="flex flex-col items-center sm:items-end gap-8 flex-1 overflow-y-auto sm:pr-8 px-6 sm:px-0 pt-10">

          {/* PRIMARY MOBILE LINKS — only on mobile, centered */}
          <div className="flex flex-col items-center gap-4 sm:hidden w-full">
            {primaryNav.map((item) =>
              item.hasDropdown ? (
                <div key={item.label} className="w-full flex flex-col items-center">
                  {/* FIX 5: No chevron on mobile Service button */}
                  <button
                    onClick={() => setMobileServiceOpen((p) => !p)}
                    className="text-2xl font-semibold text-black hover:text-yellow-500 transition text-center"
                  >
                    {item.label}
                  </button>
                  {mobileServiceOpen && (
                    <div className="flex flex-col items-center mt-3 gap-3">
                      {serviceSubMenu.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => handleSideSubMenuClick(sub.href)}
                          className="flex items-center gap-2 text-base font-medium text-gray-600 hover:text-yellow-500 transition text-center"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-2xl font-semibold text-black hover:text-yellow-500 transition text-center"
                  onClick={() => setSideMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Divider */}
          <div className="w-20 h-px bg-gray-300" />

          {/* SECONDARY LINKS — centered mobile, right-aligned sm+ */}
          <div className="flex flex-col items-center sm:items-end gap-3">
            {secondaryNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-gray-700 hover:text-yellow-500 transition text-center sm:text-right"
                onClick={() => setSideMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* SOCIAL ICONS — centered mobile, right-aligned sm+ */}
        <div className="px-6 sm:px-0 sm:pr-8 pt-6 border-t border-gray-100 mt-4">
          <h4 className="text-center sm:text-right text-sm font-medium text-black mb-3">
            Connect With Us:
          </h4>
          <div className="flex gap-3 justify-center sm:justify-end">
            {socialIcons.map((icon, i) => (
              <Link
                key={i}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSideMenuOpen(false)}
              >
                <Image
                  src={icon.src}
                  alt={icon.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topnav;