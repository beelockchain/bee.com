"use client";

import { ArrowUpRight, ChevronRight, Minus, Plus, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;

const serviceMenu = [
  {
    label: "Digital Transformation",
    href: "/digital-transformation-services",
    children: [
      {
        label: "Digital Transformation Services",
        href: "/digital-transformation-services",
        target: "_blank",
      },
    ],
  },
  {
    label: "Software Development",
    href: "/",
    children: [
      {
        label: "Custom App Development",
        href: "/",
        target: "_blank",
      },
      {
        label: "Android App Development",
        href: "/",
        target: "_blank",
      },
      {
        label: "iOS App Development",
        href: "/",
        target: "_blank",
      },
      {
        label: "React Native App Development",
        href: "/",
        target: "_blank",
      },
      {
        label: "Web App Development",
        href: "/",
        target: "_blank",
      },
      {
        label: "ERP Software Development",
        href: "/",
        target: "_blank",
      },
      {
        label: "Progressive Web Apps (PWA)",
        href: "/",
        target: "_blank",
      },
    ],
  },
  {
    label: "Blockchain Development",
    href: "https://beelockchain.io/",
    children: [
      {
        label: "Blockchain Development Services",
        href: "https://beelockchain.io/",
        target: "_blank",
      },
    ],
  },
  {
    label: "AI Development",
    href: "/llm-development-company",
    children: [
      {
        label: "Generative AI Development",
        href: "/",
        target: "_blank",
      },
      {
        label: "Chat AI App Development",
        href: "/",
        target: "_blank",
      },
      {
        label: "LLM Development",
        href: "/llm-development-company",
        target: "_blank",
      },
      {
        label: "AI Strategy Consulting",
        href: "/",
        target: "_blank",
      },
      {
        label: "AI UI/UX Design Services",
        href: "/",
        target: "_blank",
      },
      {
        label: "Machine Learning Development",
        href: "/",
        target: "_blank",
      },
      {
        label: "Custom AI Development",
        href: "/",
        target: "_blank",
      },
    ],
  },
  {
    label: "DevOps Services",
    href: "/devops-development-company",
    children: [
      {
        label: "DevOps Development Services",
        href: "/devops-development-company",
        target: "_blank",
      },
    ],
  },
  {
    label: "Digital Marketing",
    href: "/",
    children: [
      {
        label: "Digital Marketing Services",
        href: "/",
        target: "_blank",
      },
    ],
  },
];

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Service", href: "/service", hasDropdown: true },
  { label: "Insights", href: "/#insights" },
];

const secondaryNav = [
  { label: "About us", href: "#" },
  { label: "Pitch Deck", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "Career", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Condition", href: "#" },
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
  // {
  //   name: "Whatsapp",
  //   href: "https://wa.me/+919025217523",
  //   src: `${ASSET_URL}/images/whatsapp-icon.webp`,
  // },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/beelockchain",
    src: `${ASSET_URL}/images/pin-icon.webp`,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/beelockchain-com",
    src: `${ASSET_URL}/images/linkedin-icon.webp`,
  },
  // {
  //   name: "Telegram",
  //   href: "https://t.me/+919025217523",
  //   src: `${ASSET_URL}/images/telegram-icon.webp`,
  // },
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
  const [mobileOpenServiceIndex, setMobileOpenServiceIndex] = useState<
    number | null
  >(null);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const serviceButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* Close dropdown on outside click */
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

  /* Prevent horizontal scroll issue */
  useEffect(() => {
    document.body.style.overflow = sideMenuOpen ? "hidden" : "";
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.body.style.overflowX = "";
    };
  }, [sideMenuOpen]);

  const isActive = (href: string, hasDropdown?: boolean) => {
    if (hasDropdown) {
      return (
        pathname.startsWith("/service") ||
        serviceMenu.some(
          (service) =>
            (service.href !== "/" && pathname === service.href) ||
            service.children.some(
              (child) => child.href !== "/" && pathname === child.href,
            ),
        )
      );
    }

    if (href === "/") return pathname === "/";

    return pathname.startsWith(href);
  };

  const handleSideSubMenuClick = (href: string) => {
    setSideMenuOpen(false);
    setMobileServiceOpen(false);
    setMobileOpenServiceIndex(null);
    window.location.href = href;
  };

  const handleSideMenuToggle = () => {
    setSideMenuOpen((open) => {
      if (open) {
        setMobileServiceOpen(false);
        setMobileOpenServiceIndex(null);
      }

      return !open;
    });
  };

  const handleSideMenuClose = () => {
    setSideMenuOpen(false);
    setMobileServiceOpen(false);
    setMobileOpenServiceIndex(null);
  };

  return (
    <>
      {/* ===== TOP NAV ===== */}
      <div className="fixed z-50 w-full bg-[#FFFCF8]">
        <div className="h-20 grid grid-cols-2   sm:grid-cols-3 md:grid md:grid-cols-3 items-center px-4 lg:px-10">
          {/* LEFT - LOGO */}
          <div className="flex items-center">
            <Link href="/" onClick={() => setServiceDropdownOpen(false)}>
              <img
                src="/assets/images/footer-logo.webp"
                alt="logo"
                className="h-10 sm:h-10
                md:h-10 lg:h-14"
              />
            </Link>
          </div>

          {/* CENTER NAV */}
          <nav className="hidden sm:flex justify-center items-center gap-6 sm:gap-6 md:gap-8 lg:gap-10">
            {primaryNav.map((item) => {
              const active =
                isActive(item.href, item.hasDropdown) &&
                (item.hasDropdown || !serviceDropdownOpen);

              return (
                <div key={item.label} className="relative group/nav">
                  {item.hasDropdown ? (
                    <button
                      ref={serviceButtonRef}
                      onClick={() => setServiceDropdownOpen((prev) => !prev)}
                      className={`relative inline-flex items-center py-2 text-xs md:text-sm lg:text-base transition-all duration-300 ease-out cursor-pointer after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-[#D4A500] after:transition-all after:duration-300 after:ease-out hover:-translate-y-0.5 hover:tracking-[0.02em]
                      ${
                        active || serviceDropdownOpen
                          ? "font-bold text-black after:w-full"
                          : "font-medium text-[#807E7C] after:w-0 hover:text-black hover:after:w-full"
                      }`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setServiceDropdownOpen(false)}
                      className={`relative inline-flex items-center py-2 text-xs md:text-sm lg:text-base transition-all duration-300 ease-out cursor-pointer after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-[#D4A500] after:transition-all after:duration-300 after:ease-out hover:-translate-y-0.5 hover:tracking-[0.02em]
                      ${
                        active
                          ? "font-bold text-black after:w-full"
                          : "font-medium text-[#807E7C] after:w-0 hover:text-black hover:after:w-full"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex justify-end items-center gap-3">
            <Link
              href="/contact-us"
              target="_blank"
              className="flex  sm:flex items-center bg-black text-white px-3 py-2 md:px-4 md:py-2.5 rounded-full text-xs lg:text-sm hover:bg-gray-800 transition border border-black whitespace-nowrap"
            >
              Get started
              <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 ml-1" />
            </Link>

            <button
              onClick={handleSideMenuToggle}
              className="flex items-center cursor-pointer gap-1.5 border border-black px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm hover:bg-gray-100 transition text-black"
            >
              {sideMenuOpen ? "Close" : "Menu"}
              <div className="w-6 h-6 flex items-center justify-center">
                {sideMenuOpen ? (
                  <X className="h-4 w-4 md:h-5 md:w-5" />
                ) : (
                  <img
                    src="/assets/images/Hamburger.webp"
                    alt="menu"
                    className="h-4 w-4 md:h-5 md:w-5"
                  />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* ===== SERVICE DROPDOWN (DESKTOP) ===== */}
        <div
          ref={dropdownRef}
          className={`absolute left-0 right-0 top-full w-full cursor-pointer  transition-all duration-300 overflow-hidden ${
            serviceDropdownOpen
              ? "max-h-[520px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="hidden sm:flex justify-center px-4 lg:px-10">
            <div className="grid w-[620px] grid-cols-[280px_1fr] overflow-hidden rounded bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <div className="flex flex-col border-r border-[#CFCFCF] py-3">
                {serviceMenu.map((service, index) => {
                  const active = activeServiceIndex === index;

                  return (
                    <button
                      key={service.label}
                      type="button"
                      onMouseEnter={() => setActiveServiceIndex(index)}
                      onFocus={() => setActiveServiceIndex(index)}
                      onClick={() => setActiveServiceIndex(index)}
                      className={`cursor-pointer group flex h-[45px] items-center justify-between px-6 text-left 
                         transition ${
                           active
                             ? "text-[#D4A500] text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-semibold leading-[1.65]"
                             : "text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-semibold leading-[1.65] hover:text-[#D4A500] text-black "
                         }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className=" h-2 w-2 rounded-full bg-[#F0D000] ring-1 ring-[#E6B900]" />
                        {service.label}
                      </span>
                      <ChevronRight className="h-4 w-4 text-black transition group-hover:translate-x-0.5" />
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col py-3">
                {serviceMenu[activeServiceIndex].children.map((sub) => (
                  <Link
                    key={sub.label}
                    href={sub.href}
                    target={sub.target}
                    rel="noopener noreferrer"
                    onClick={() => setServiceDropdownOpen(false)}
                    className="flex min-h-[45px] items-center px-6 py-2 text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-semibold leading-[1.65] text-black transition hover:text-[#D4A500]"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Click-away overlay to close service dropdown */}
      {serviceDropdownOpen && (
        <div
          className="fixed inset-0 z-30 transition-opacity duration-300 cursor-pointer"
          style={{
            top: "80px",
            background:
              "linear-gradient(to bottom, rgba(245,245,245,0.92) 0%, rgba(248,248,248,0.75) 40%, rgba(255,255,255,0.4) 100%)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
          onClick={() => setServiceDropdownOpen(false)}
        />
      )}

      {/* ===== SIDE MENU OVERLAY ===== */}
      {sideMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white/40 backdrop-blur-sm"
          style={{ top: "80px" }}
          onClick={handleSideMenuClose}
        />
      )}

      {/* ===== SIDE MENU ===== */}
      <div
        className={`
        fixed z-50 flex flex-col justify-between pb-6
          transition-all duration-300 ease-in-out
          top-15
          w-full pt-5
          ${
            sideMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0 pointer-events-none"
          }
          sm:w-[380px]
          sm:left-auto sm:right-0 sm:h-[calc(100vh-80px)]
          sm:translate-y-0
          ${
            sideMenuOpen
              ? "sm:translate-x-0 sm:opacity-100"
              : "sm:translate-x-full sm:opacity-0 sm:pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col items-start sm:items-end gap-8 flex-1 overflow-y-auto sm:pr-10 px-6 sm:px-0 pt-5 min-h-0">
          {/* PRIMARY MOBILE LINKS */}
          <div className="flex flex-col items-start gap-4 sm:hidden w-full">
            {primaryNav.map((item) =>
              item.hasDropdown ? (
                <div key={item.label} className="w-full">
                  <button
                    onClick={() => {
                      setMobileServiceOpen((p) => !p);
                      setMobileOpenServiceIndex(null);
                    }}
                    className="flex w-full items-center justify-between text-md font-medium text-black hover:text-yellow-500 transition"
                  >
                    <span>{item.label}</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/20 text-black">
                      {mobileServiceOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  {mobileServiceOpen && (
                    <div className="flex flex-col items-start mt-3 gap-3 w-full pl-4">
                      {serviceMenu.map((service, index) => {
                        const serviceOpen = mobileOpenServiceIndex === index;

                        return (
                          <div key={service.label} className="w-full">
                            <div className="flex w-full items-center justify-between gap-4">
                              <button
                                onClick={() =>
                                  handleSideSubMenuClick(service.href)
                                }
                                className="flex min-w-0 items-center gap-2 text-left text-base font-semibold text-black hover:text-yellow-500 transition"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                                <span>{service.label}</span>
                              </button>
                              <button
                                type="button"
                                aria-label={`${serviceOpen ? "Close" : "Open"} ${service.label} services`}
                                aria-expanded={serviceOpen}
                                onClick={() =>
                                  setMobileOpenServiceIndex((current) =>
                                    current === index ? null : index,
                                  )
                                }
                                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-black/20 text-black transition hover:border-yellow-500 hover:text-yellow-500"
                              >
                                {serviceOpen ? (
                                  <Minus className="h-4 w-4" />
                                ) : (
                                  <Plus className="h-4 w-4" />
                                )}
                              </button>
                            </div>
                            <div
                              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                                serviceOpen
                                  ? "grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0"
                              }`}
                            >
                              <div className="min-h-0">
                                <div className="mt-3 flex flex-col items-start gap-2.5 pl-4 pb-2">
                                  {service.children.map((sub) => (
                                    <button
                                      key={sub.label}
                                      onClick={() =>
                                        handleSideSubMenuClick(sub.href)
                                      }
                                      className="text-left text-sm font-medium text-[#555] hover:text-yellow-500 transition"
                                    >
                                      {sub.label}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-md font-medium text-black hover:text-yellow-500 transition"
                  onClick={() => setSideMenuOpen(false)}
                >
                  {item.label}
                </a>
              ),
            )}
          </div>

          {/* SECONDARY LINKS */}
          <div
            className={`flex-col items-start sm:items-end gap-5 w-full ${
              mobileServiceOpen ? "hidden sm:flex" : "flex"
            }`}
          >
            {secondaryNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-md font-medium text-black hover:text-yellow-500 transition"
                onClick={handleSideMenuClose}
              >
                {item.label}
              </a>
            ))}
          </div>
          {/* SOCIAL ICONS */}
          <div
            className={`sm:px-0 sm:pr-0 flex-col sm:items-end md:mt-40 shrink-0 ${
              mobileServiceOpen ? "hidden sm:flex" : "flex"
            }`}
          >
            <h4 className="text-lg md:text-md font-medium text-black mb-3">
              Connect With Us:
            </h4>
            <div className="flex gap-3">
              {socialIcons.map((icon, i) => (
                <Link
                  key={i}
                  href={icon.href}
                  aria-label={icon.name}
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div
                    className="
          transition-all duration-300 ease-out
          group-hover:-translate-y-2
          group-hover:shadow-[0_15px_25px_rgba(0,0,0,0.25)]
          rounded-full
        "
                  >
                    <Image
                      src={icon.src}
                      alt={icon.name}
                      width={42}
                      height={42}
                      className="object-contain transition-opacity duration-300 group-hover:opacity-90"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topnav;
