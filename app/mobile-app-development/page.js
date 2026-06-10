import React from "react";
import Script from "next/script";

import { HeroSection } from "./components/HeroSection";
import Customappcustomers from "./components/CustomappCustomers";
import Mobileapplication from "./components/Mobileapplication";
import Makeusdifferent from "./components/Makeusdifferent";
import Blockchainleader from "./components/Blockchainleader";
import Appdevelopment from "./components/Appdevelopment";
import AppTechnologies from "./components/AppTechnologies";
import Devlopmentprocess from "./components/Devlopmentprocess";
import MobileFeature from "./components/MobileFeature";
import Appdevindustryweserve from "./components/Appdevindustryweserve";
import Monitization from "./components/Monitization";
import Recoganizedmilestone from "./components/Recoganizedmilestone";
import Customtestimonial from "./components/Customtestimonial";
import Customecarousel from "./components/Customecarousel";
import AppFaq from "./components/Appfaq";

export const metadata = {
  title: "Custom Mobile App Development Company | Beelockchain",
  description:
    "Beelockchain is a leading Custom Mobile App Development Company offering AI-powered mobile solutions for Android, iOS, Flutter, React Native, PWA, and enterprise apps. Talk to our experts today.",

  keywords: [
    "mobile app development services",
    "app development company",
    "AI-powered mobile apps",
    "cross platform app development",
    "mobile app development agency",
    "mobile application development company",
    "app development agency",
    "mobile app development usa",
    "on demand app development company",
  ],

  authors: [{ name: "Beelockchain" }],

  alternates: {
    canonical: "https://beelockchain.com/mobile-app-development",
  },

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-video-preview": -1,
    "max-snippet": -1,
  },

  icons: {
    icon: [
      {
        url: "https://ik.imagekit.io/racjwdojq/favicon.webp",
      },
    ],
  },

  openGraph: {
    type: "website",
    url: "https://beelockchain.com/mobile-app-development",
    title: "Custom Mobile App Development Company | Beelockchain",
    description:
      "AI-powered custom mobile app development services for Android, iOS, Flutter & more. Secure, scalable, enterprise-grade solutions by Beelockchain.",
    locale: "en_US",

    alternateLocale: ["en_GB", "en_AE", "en_IN"],

    images: [
      {
        url: "URL", // replace with OG image
        width: 1200,
        height: 630,
        alt: "Beelockchain – Custom Mobile App Development Company",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Custom Mobile App Development Company | Beelockchain",
    description:
      "AI-powered custom mobile app development services for Android, iOS, Flutter & more. Secure, scalable enterprise solutions by Beelockchain.",
    site: "@beelockchain",
    creator: "@beelockchain",

    images: [
      {
        url: "URL",
        alt: "Beelockchain – Custom Mobile App Development Company",
      },
    ],
  },

  verification: {
    google: "oHyAtIPc1Y3gW6EHnBU5Lq4nIDAAUGMpzAxIDfW4e40",
  },
};

export default function CustomAppDevelopment() {

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://beelockchain.com/#organization",
    url: "https://beelockchain.com/",
    name: "Beelockchain",
    legalName: "Beelockchain",
    description:
      "Beelockchain provides AI-powered mobile app development services for startups and enterprises worldwide.",
    logo: "https://beelockchain.com/logo.png",
    telephone: "+919025217523",
    email: "contact@beelockchain.io",

    sameAs: [
      "https://www.linkedin.com/company/beelockchain",
      "https://x.com/beelockchain",
      "https://www.instagram.com/beelockchain_com/",
      "https://www.facebook.com/profile.php?id=61585250317865",
      "https://in.pinterest.com/beelockchain/",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://beelockchain.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mobile App Development",
        item: "https://beelockchain.com/mobile-app-development",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://beelockchain.com/mobile-app-development/#service",

    name: "Custom Mobile App Development Services",

    description:
      "AI-powered mobile app development services for Android, iOS, Flutter, React Native, and enterprise mobile solutions.",

    provider: {
      "@type": "Organization",
      "@id": "https://beelockchain.com/#organization",
    },

    serviceType: [
      "Mobile App Development",
      "Android App Development",
      "iOS App Development",
      "Flutter App Development",
      "React Native Development",
      "Cross Platform App Development",
      "Enterprise Mobile Apps",
    ],

    areaServed: {
      "@type": "Place",
      name: "Global",
    },
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <main>
        <HeroSection />
        <Customappcustomers />
        <Mobileapplication />
        <Makeusdifferent />
        <Blockchainleader />
        <Appdevelopment />
        <AppTechnologies />
        <Devlopmentprocess />
        <MobileFeature />
        <Appdevindustryweserve />
        <Monitization />
        <Recoganizedmilestone />
        <Customtestimonial />
        <Customecarousel />
        <AppFaq />
      </main>
    </>
  );
}