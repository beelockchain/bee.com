"use client";

import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import NavItem from "./NavItem";
import SideMenu from "./SideMenu";

const Topnav = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const primaryMobileNav = [
    { label: "Home", href: "/" },
    { label: "Service", href: "/service" },
    { label: "Blog", href: "/blog" },
    { label: "Contact us", href: "/contact" },
  ];

  const secondaryNav = [
    { label: "About us", href: "/about" },
    { label: "Pitch Deck", href: "/pitch-deck" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Condition", href: "/terms" },
    { label: "Career", href: "/career" },
  ];

  const navItems = [
    {
      label: "Home",
      content: (
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3 items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full" />
            Digital Transformation
          </li>
          <li className="flex gap-3 items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full" />
            Software Development
          </li>
          <li className="flex gap-3 items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full" />
            Blockchain Solutions
          </li>
        </ul>
      ),
    },
    {
      label: "Service",
      content: (
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3 items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full" />
            Digital Transformation
          </li>
          <li className="flex gap-3 items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full" />
            Software Development
          </li>
          <li className="flex gap-3 items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full" />
            Blockchain Solutions
          </li>
        </ul>
      ),
    },
    {
      label: "Blog",
      content: (
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3 items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full" />
            Digital Transformation
          </li>
          <li className="flex gap-3 items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full" />
            Software Development
          </li>
          <li className="flex gap-3 items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full" />
            Blockchain Solutions
          </li>
        </ul>
      ),
    },
    {
      label: "Contact us",
      content: (
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3 items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full" />
            Digital Transformation
          </li>
          <li className="flex gap-3 items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full" />
            Software Development
          </li>
          <li className="flex gap-3 items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full" />
            Blockchain Solutions
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      {/* ================= TOP NAV ================= */}
      <div className="fixed z-50 w-full bg-white">
        <div className="h-20 flex items-center justify-between px-4 lg:px-8">
          {/* LOGO */}
          <div className="w-[40%] sm:w-[30%] lg:w-[25%]">
            <img
              src="/Frame 14 1.svg"
              alt="logo"
              className="h-8 sm:h-9 md:h-10 lg:h-12"
            />
          </div>

          {/* CENTER NAV (TABLET + DESKTOP ONLY) */}
          <div
            className="
              hidden
              sm:flex
              w-[50%]
              justify-center
              items-center
              space-x-6
              md:space-x-8
              lg:space-x-10
              text-xs
              md:text-sm
              lg:text-base
            "
          >
            {navItems.map((item, index) => (
              <NavItem
                key={item.label}
                label={item.label}
                isFirst={index === 0}
                isHovered={hoveredIndex === index}
                anyHovered={hoveredIndex !== null}
                onHover={(hovered) => setHoveredIndex(hovered ? index : null)}
              >
                {item.content}
              </NavItem>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center justify-end gap-3 w-[60%] sm:w-[30%] lg:w-[25%]">
            {/* GET STARTED (HIDDEN ON MOBILE) */}
            <button
              className="
                hidden
                sm:flex
                items-center
                bg-black
                text-white
                px-3 py-2
                md:px-4 md:py-2.5
                rounded-full
                text-xs
                md:text-sm
                hover:bg-gray-800
                transition
                border border-black
              "
            >
              Get started
              <ArrowUpRight className="ml-2 h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
            </button>

            {/* MENU BUTTON (ALL SCREENS) */}
            <button
              onClick={() => setSideMenuOpen(!sideMenuOpen)}
              className="
                flex
                items-center
                gap-1
                border
                border-black
                px-2 py-1
                md:px-4 md:py-[8.5px]
                rounded-full
                text-xs
                md:text-sm
                hover:bg-gray-100
                transition
                text-black
              "
            >
              {sideMenuOpen ? "Close" : "Menu"}

              <div className="w-6 h-6 md:w-6 md:h-6 rounded-full flex items-center justify-center">
                {sideMenuOpen ? (
                  <X className="h-4 w-4 md:h-5 md:w-5" />
                ) : (
                  <img
                    src="/Background.svg"
                    alt="menu"
                    className="h-4 w-4 md:h-5 md:w-5"
                  />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ================= SIDE MENU (MOBILE NAV) ================= */}
      {/* ================= SIDE MENU (MOBILE NAV) ================= */}
      <SideMenu isOpen={sideMenuOpen} onClose={() => setSideMenuOpen(false)}>
        <div className="flex flex-col items-end pr-8 space-y-8">
          {/* PRIMARY MOBILE LINKS */}
          <div className="space-y-6 text-right flex flex-col sm:block md:hidden">
            {primaryMobileNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-2xl font-semibold text-black hover:text-yellow-500"
                onClick={() => setSideMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="w-20 h-px bg-gray-300" />

          {/* SECONDARY LINKS */}
          <div className="space-y-5 text-right flex flex-col">
            {secondaryNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-gray-700 hover:text-yellow-500"
                onClick={() => setSideMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </SideMenu>
    </>
  );
};

export default Topnav;
