
import React from 'react'
import BusinessValue from './components/BusinessValue'
import RoadMapCard from './components/RoadMapCard'
import EndToEndServices from './components/EndToEndServices'
import HeroSection from './components/HeroSection'
import BenefitsSection from './components/BenefitsSection'
import DigitalTransformationSection from "./components/DigitalTransformation";
import Whatwedo from "./components/Whatwedo";
import WhyDigitalTransformation from "./components/Whydigitaltrans";
import FAQ from "./components/FAQ";
import SubIndustriesWeServe from "./components/Sub-industriesweserve";
import AwardsSection from "./components/AwardsSection"
import ContactSection from "./components/ContactSection"
import Script from "next/script";
export const metadata = {
  title: " Digital Transforms | Innovation & Technology",
  description:"Beelockchain is a digital transformation services company helping businesses with consulting, strategy, automation, cloud migration, & application modernization",
  keywords: [
    "digital transformation companies in usa",
    "digital transformation solution providers",
    "digital transformation consulting services",
    "digital transformation consulting provider",
    "digital transformation strategy",
    "digital transformation consultant",
    "business transformation consultant",
    "digital transformation consulting firms",
    "enterprise digital transformation",
    "digital transformation solutions",
  ],

  authors: [{ name: "Beelockchain" }],

  alternates: {
    canonical: "https://beelockchain.com/",
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
        url: "https://beecomassets.s3.ap-southeast-2.amazonaws.com/assets/favicon.webp",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

    openGraph: {
      type: "website",
      title: "Digital Transformation Services & Solutions | Beelockchain",
      description:
        "Beelockchain is a digital transformation services company helping businesses with consulting, strategy, automation, cloud migration, and application modernization.",
      url: "https://beelockchain.io/digital-transformation-services",
      locale: "en_US",

      alternateLocale: [
        "en_GB",
        "en_AE",
        "en_IN",
      ],

      images: [
        {
          url: "https://beelockchain.io/og-images/digital-transformation.webp", // replace
          width: 1200,
          height: 630,
          alt: "Digital Transformation Services & Solutions | Beelockchain",
          type: "image/webp",
        },
      ],
    },

twitter: {
  card: "summary_large_image",
  title:
    "Digital Transformation Services & Solutions | Beelockchain",
  description:
    "Beelockchain is a digital transformation services company helping businesses with consulting, strategy, automation, cloud migration, and application modernization.",
  site: "@beelockchain",
  creator: "@beelockchain",
  images: [
    {
      url: "https://beelockchain.io/og-images/digital-transformation.webp", // replace with real image
      alt: "Digital Transformation Services & Solutions | Beelockchain",
    },
  ],
},
  verification: {
    google: "oHyAtIPc1Y3gW6EHnBU5Lq4nIDAAUGMpzAxIDfW4e40",
  },
  
};

export default function DigitalTransforms() {
  const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://beelockchain.io/#organization",
  url: "https://beelockchain.io/",
  legalName: "Beelockchain - Digital Transformation Company",
  name: "Beelockchain",
  description:
    "Beelockchain is a digital transformation services company helping businesses with consulting, strategy, automation, cloud migration, and application modernization.",
  logo: "https://beelockchain.io/logo.png",
  image: "https://beelockchain.io/logo.png",
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
          <main>
          <HeroSection/>
          <DigitalTransformationSection />
          <Whatwedo />
          <WhyDigitalTransformation />
          <BusinessValue/>
          <RoadMapCard />
          <EndToEndServices/>
           <SubIndustriesWeServe />
           <AwardsSection/>
          <BenefitsSection/>
          <ContactSection/>
          <FAQ />
      </main>
    </>



  )
}
