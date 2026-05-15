import React from "react";
import Script from "next/script";
import HeroSectionDevops from "./components/HeroSectionDevops";
import DevopsCustomers from "./components/devops-customers";
import DevOpsConsulting from "./components/DevOpsConsulting";
import DevopsEngineeringSolution from "./components/DevopsEngineeringSolution";
import BenefitsOfDevOps from "./components/BenefitsOfDevOps";
import StructuredDevOps from "./components/StructuredDevOps";
import YourConsulting from "./components/YourConsulting";
import AwardsSection from "../digital-transformation-services/components/AwardsSection";
import IndustryDevops from "./components/IndustryDevops";
import DevopsTestimonial from "./components/DevopsTestimonial";
import DevopsTestimonialCarousel from "./components/DevopsTestimonialCarousel";
import DevopsFAQSection from "./components/devopsfaq";
import Scheduleconsult from "./components/Scheduleconsult";
import DevopsTechnologies from "./components/DevopsTechnologies";

export const metadata = {
  title: "DevOps Development Company | Beelockchain",
  description:
    "Beelockchain is an AI-powered DevOps development company offering CI/CD automation, DevOps consulting, and scalable cloud infrastructure solutions.",
  keywords: [
    "devops service providers",
    "devops consulting company",
    "devops automation services",
    "devops consulting firms",
    "devops consulting company",
    "devops service provider company",
    "hire devops engineers",
    "ai powered devops",
    "devops automation services",
    "devops development services",
  ],
  authors: [{ name: "Beelockchain" }],
  alternates: {
    canonical: "https://beelockchain.com/devops-development-company",
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  openGraph: {
    title: "DevOps Development Company | Beelockchain",
    description:
      "Automate software delivery and optimize cloud infrastructure with AI-powered DevOps consulting services from Beelockchain.",
    url: "https://beelockchain.com/devops-development-company",
    siteName: "Beelockchain",
    images: [
      {
        url: "https://beecomassets.s3.ap-southeast-2.amazonaws.com/devops_services.jpeg",
        width: 1200,
        height: 630,
        alt: "Beelockchain DevOps Development Company",
      },
    ],
    locale: "en_US",
    alternateLocale: ["en_GB", "en_AE", "en_IN"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Development Company | Beelockchain",
    description:
      "AI-powered DevOps consulting services for CI/CD automation, infrastructure optimization, and scalable cloud-native deployments.",
    images: [
      "https://beecomassets.s3.ap-southeast-2.amazonaws.com/devops_services.jpeg",
    ],
  },
  other: {
    title: "AI-Powered DevOps Consulting Services | Beelockchain ",
  },
};

function DevOpsSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://beelockchain.com/#website",
        url: "https://beelockchain.com/",
        name: "Beelockchain",
        description: "Digital Transformation Solutions Provider",
        publisher: {
          "@id": "https://beelockchain.com/#organization",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://beelockchain.com/?s={search_term_string}",
            },
            "query-input": {
              "@type": "PropertyValueSpecification",
              valueRequired: true,
              valueName: "search_term_string",
            },
          },
        ],
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": "https://beelockchain.com/devops-development-company/#webpage",
        url: "https://beelockchain.com/devops-development-company",
        name: "DevOps Development Company | Beelockchain",
        isPartOf: {
          "@id": "https://beelockchain.com/#website",
        },
        description:
          "Beelockchain is an AI-powered DevOps development company offering DevOps consulting services, CI/CD automation, infrastructure optimization, and scalable cloud-native solutions.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "ReadAction",
          target: "https://beelockchain.com/devops-development-company",
        },
      },
      {
        "@type": "Service",
        "@id": "https://beelockchain.com/devops-development-company/#service",
        serviceType: "DevOps Consulting Services",
        name: "DevOps Development Services",
        provider: {
          "@type": "Organization",
          "@id": "https://beelockchain.com/#organization",
          name: "Beelockchain",
          url: "https://beelockchain.com",
        },
        areaServed: {
          "@type": "Place",
          name: "Global",
        },
        description:
          "Beelockchain provides AI-powered DevOps consulting services, CI/CD automation, infrastructure optimization, DevSecOps integration, and cloud-native deployment solutions for scalable software delivery.",
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://beelockchain.com/devops-development-company/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://beelockchain.com",
          },
         
          {
            "@type": "ListItem",
            position: 2,
            name: "DevOps Development Company",
            item: "https://beelockchain.com/devops-development-company",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://beelockchain.com/devops-development-company/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How does Beelockchain’s DevOps consulting improve software quality?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Beelockchain’s DevOps consulting services improve software quality through CI/CD pipeline implementation, automated testing, deployment automation, and continuous monitoring across development environments.",
            },
          },
          {
            "@type": "Question",
            name: "How can Beelockchain’s cloud DevOps consulting benefit my organization?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Beelockchain’s cloud DevOps consulting helps organizations automate deployment workflows, improve infrastructure scalability, optimize cloud environments, and accelerate software delivery.",
            },
          },
          {
            "@type": "Question",
            name: "What role do Beelockchain’s DevOps consultants play in a project?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Beelockchain’s DevOps consultants assess infrastructure workflows, implement CI/CD pipelines, automate deployment processes, and provide continuous monitoring and optimization support.",
            },
          },
          {
            "@type": "Question",
            name: "What DevOps tools and technologies does Beelockchain use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Beelockchain uses DevOps technologies such as Jenkins, Docker, Kubernetes, Terraform, GitLab CI/CD, Ansible, Prometheus, AWS, and Microsoft Azure to deliver scalable DevOps solutions.",
            },
          },
          {
            "@type": "Question",
            name: "How do Beelockchain’s DevOps practices reduce downtime and deployment risks?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Beelockchain implements automated monitoring, CI/CD pipelines, infrastructure automation, and proactive alert systems to reduce deployment risks and maintain application uptime.",
            },
          },
        ],
      },
    ],
  };

  return (
    <Script
      id="devops-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export default function DevopsServices() {
  return (
    <>
      <DevOpsSchema />
      <main>
        <HeroSectionDevops />
        <DevopsCustomers />
        <DevOpsConsulting />
        <DevopsEngineeringSolution />
        <BenefitsOfDevOps />
        <StructuredDevOps />
        <YourConsulting />
        <DevopsTechnologies />
        <IndustryDevops />
        <AwardsSection />
        <DevopsTestimonial />
        <DevopsTestimonialCarousel />
        <Scheduleconsult />
        <DevopsFAQSection />
      </main>
    </>
  );
}
