import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Manrope } from "next/font/google";
import Topnav from "./components/Topnav"; // Adjust the path based on your project structure

/* Fonts */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Digital Transformation Services Company | Beelockchain",
  description:
    "As a leading digital transformation company, Beelockchain offers AI, software, blockchain, and automation to help global enterprises modernize operations and achieve digital outcomes.",

  keywords: [
    "Digital Transformation Company in USA",
    "digital transformation and ai",
    "custom software development company",
    "website building companies",
    "mobile application development firm",
    "web design using ai",
    "website design and app development",
    "full stack development company",
    "digital marketing and web design agency",
    "digital transformation company in dubai",
    "IT Consulting and Services",
    "It Services Company In USA",
    "top it services company",
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
      { url: "https://beecomassets.s3.ap-southeast-2.amazonaws.com/assets/favicon.webp" },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    siteName: "Beelockchain - Digital Transformation Services",
    url: "https://beelockchain.com/",
    title:
      "Best Digital Transformation Company | Digital Transformation Solutions",
    description:
      "Beelockchain offers next-gen digital transformation through AI-powered software and advanced blockchain solutions for enterprise growth.",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_AE", "en_IN"],
    images: [
      {
        url: "https://beecomassets.s3.ap-southeast-2.amazonaws.com/assets/images/og-img.webp",
        width: 1200,
        height: 630,
        alt: "Digital Transformation Services & Solutions | Beelockchain.com",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@beelockchain",
    title:
      "Best Digital Transformation Company | Digital Transformation Solutions",
    description:
      "Beelockchain offers next-generation digital transformation through AI-powered software and advanced blockchain solutions for enterprise growth.",
    images: ["https://beecomassets.s3.ap-southeast-2.amazonaws.com/assets/images/twitter.webp"],
  },

  verification: {
    google: "oHyAtIPc1Y3gW6EHnBU5Lq4nIDAAUGMpzAxIDfW4e40",
  },
};

/* ===================== ROOT LAYOUT ===================== */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${manrope.variable} antialiased`}>
        {/* ================= TOP NAVIGATION ================= */}
        <Topnav />
        
        {/* ================= MAIN CONTENT ================= */}
        {/* Add padding-top to account for fixed navbar height (h-20 = 5rem = 80px) */}
        <main className="pt-20">
          {children}
        </main>

        {/* ================= Product Schema ================= */}
        <Script
          id="product-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Top Digital Transformation Services Company",
              "image": "https://www.beelockchain.com/path-to-image.jpg",
              "description":
                "Beelockchain.com is a prominent digital transformation company offering digital transformation services and solutions that help leading enterprises transform their businesses and modernize operations.",
              "brand": {
                "@type": "Brand",
                "name": "Beelockchain.com"
              },
              "offers": {
                "@type": "AggregateOffer",
                "url": "https://www.beelockchain.com/",
                "priceCurrency": "USD",
                "lowPrice": "10000",
                "highPrice": "15000",
                "offerCount": "25"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.3",
                "ratingCount": "1980"
              }
            }),
          }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Beelockchain.com",
              url: "https://beelockchain.com",
              sameAs: [
                "https://www.linkedin.com/company/beelockchain",
                "https://x.com/beelockchain",
                "https://www.instagram.com/beelockchain_com/",
                "https://www.facebook.com/profile.php?id=61585250317865",
                "https://in.pinterest.com/beelockchain/",
              ],
            }),
          }}
        />
        {/* ================= Microsoft Clarity ================= */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "v8hdr4wjo9");
            `,
          }}
        />

        {/* ================= Google Analytics ================= */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7GEST55L57"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7GEST55L57');
            `,
          }}
        />
      </body>
    </html>
  );
}