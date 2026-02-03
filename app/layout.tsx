import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Manrope } from "next/font/google";

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
    icon: [{ url: "/assets/images/favicon.png" }],
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
        url: "https://ik.imagekit.io/racjwdojq/ogimg.webp",
        width: 1200,
        height: 630,
        alt:
          "Digital Transformation Services & Solutions | Beelockchain.com",
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
    images: ["https://ik.imagekit.io/racjwdojq/ogimg.webp"],
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
        {children}

        {/* ================= Product Schema ================= */}
        <Script
          id="product-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name:
                "Beelockchain - Digital Transformation & Blockchain Services",
              image: "https://ik.imagekit.io/racjwdojq/ogimg.webp",
              description:
                "AI-powered digital transformation, blockchain, software development, and automation services for enterprises worldwide.",
              brand: {
                "@type": "Brand",
                name: "Beelockchain",
              },
              offers: {
                "@type": "AggregateOffer",
                url: "https://beelockchain.com/",
                priceCurrency: "USD",
                lowPrice: "5000",
                highPrice: "10000",
                offerCount: "10",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                ratingCount: "1587",
              },
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
