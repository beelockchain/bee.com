import Script from "next/script";
import HeroSectionLlm from "./components/HeroSectionLlm";
import DevopsCustomers from "../devops-development-company/components/devops-customers";
import LlmAdopting from "./components/LlmAdopting";
import CustomLlm from "./components/CustomLlm";
import TalkExpertLlm from "./components/TalkExpertLlm";
import LlmSolution from "./components/LlmSolution";
import BenifitsLLM from "./components/BenifitsLLM";
import LlmUsecases from "./components/LlmUsecases";
import LlmProcess from "./components/LlmProcess";
import LlmIndustry from "./components/LlmIndustry";
import LlmFaq from "./components/LlmFaq";
import LlmTechnologies from "./components/LlmTechnologies";
import WhyBeelockchainLlm from "./components/WhyBeelockchainLlm";

export const metadata = {
  title: "Large Language Model Development Services | Beelockchain",
  description:
    "Beelockchain is a leading LLM development company building custom AI solutions, RAG pipelines, and AI agents to deliver accurate, scalable, & context-aware results",
  keywords: [
    "Large Language Model Development Company",
    "LLM Consulting",
    "LLM Development Company",
    "LLM Consulting and Development Agency",
    "llm fine tuning services",
    "Enterprise LLM solutions",
    "custom llm development",
    "LLM development services",
  ],
  authors: [{ name: "Beelockchain" }],
  alternates: {
    canonical: "https://beelockchain.com/llm-development-company/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "LLM Development Company | Custom LLM Solutions",
    description:
      "Build custom LLM solutions, RAG pipelines, and AI agents with Beelockchain. Scalable, context-aware AI systems designed for real business impact.",
    url: "https://beelockchain.com/llm-development-company/",
    siteName: "Beelockchain",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_AE", "en_IN"],
    images: [
      {
        url: "https://ik.imagekit.io/racjwdojq/llm-development-company.png",
        width: 1200,
        height: 630,
        alt: "LLM development company | Beelockchain",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@beelockchain",
    creator: "@beelockchain",
    title: "LLM Development Company | Beelockchain",
    description:
      "Build custom LLM solutions, RAG pipelines, and AI agents with Beelockchain. Scalable, context-aware AI systems designed for real business impact.",
    images: ["https://ik.imagekit.io/racjwdojq/llm-development-company.png"],
  },
  other: {
    author: "Beelockchain",
    "twitter:url": "https://beelockchain.com/llm-development-company/",
    "twitter:domain": "beelockchain.com",
  },
};

export default function LLMServicesPage() {
  const llmSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Large Language Model Development Services | Beelockchain",
        url: "https://beelockchain.com/llm-development-company/",
        description:
          "Beelockchain is a leading LLM development company building custom AI solutions, RAG pipelines, and AI agents to deliver accurate, scalable, and context-aware results.",
        inLanguage: "en",
        isPartOf: {
          "@type": "WebSite",
          name: "Beelockchain",
          url: "https://beelockchain.com/",
        },
      },
      {
        "@type": "Service",
        serviceType: "Large Language Model Development Services",
        name: "LLM Development Services",
        provider: {
          "@type": "Organization",
          name: "Beelockchain",
          url: "https://beelockchain.com/",
        },
        areaServed: "Worldwide",
        url: "https://beelockchain.com/llm-development-company/",
        description:
          "Custom LLM development, RAG pipelines, AI agents, fine-tuning, and enterprise AI solutions built for scalable business use cases.",
      },
      {
        "@type": "Organization",
        name: "Beelockchain",
        url: "https://beelockchain.com/",
        logo: "https://ik.imagekit.io/racjwdojq/Mainlogo.webp",
        sameAs: [
          "https://www.linkedin.com/company/beelockchain",
          "https://x.com/beelockchain",
          "https://www.instagram.com/beelockchain_com/",
          "https://www.facebook.com/profile.php?id=61585250317865",
          "https://in.pinterest.com/beelockchain/",
        ],
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is LLM development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LLM development refers to building AI systems using large language models trained on massive datasets to understand and generate natural language. These models enable applications such as AI assistants, chatbots, enterprise search tools, and automated document analysis. Businesses use LLM solutions to automate communication, process unstructured data, and improve operational efficiency.",
        },
      },
      {
        "@type": "Question",
        name: "What is an LLM development company, and what does it involve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LLM development is the end-to-end process of selecting, training, fine-tuning, and deploying AI systems powered by large language models. It encompasses use-case strategy, data preparation and curation, fine-tuning or continued pre-training of foundation models, RAG pipeline construction, prompt engineering, application development, security hardening, and production deployment with ongoing optimization. A trusted LLM solution provider like Beelockchain handles the full lifecycle from first consultation to post-launch performance management.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between LLM fine-tuning and RAG?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fine-tuning adapts a model to a specific domain, while RAG connects the model to external knowledge sources to provide accurate and up-to-date responses. Most enterprise solutions use both together.",
        },
      },
      {
        "@type": "Question",
        name: "How long does LLM development take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LLM development timelines range from 3-6 weeks for RAG-based applications, 8-16 weeks for fine-tuned systems, and up to 6-18 months for fully custom enterprise deployments.",
        },
      },
      {
        "@type": "Question",
        name: "Which LLM models does Beelockchain work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work with GPT-4o, Claude 3.5, Gemini 1.5, LLaMA 3.1, Mistral, Falcon, Qwen, Phi-3, and custom-trained models based on project requirements.",
        },
      },
      {
        "@type": "Question",
        name: "What is LLM hallucination and how do you prevent it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LLM hallucination occurs when a model generates incorrect information. We prevent it using RAG grounding, structured outputs, confidence calibration, validation pipelines, and continuous monitoring.",
        },
      },
      {
        "@type": "Question",
        name: "Can you build an LLM on our own infrastructure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide on-premise LLM deployment using open-source models with full control over data, infrastructure, and security.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="llm-page-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(llmSchema) }}
      />
      <Script
        id="llm-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="overflow-x-hidden">
        <HeroSectionLlm />
        <DevopsCustomers />
        <LlmAdopting />
        <CustomLlm />
        <TalkExpertLlm />
        <LlmSolution />
        <BenifitsLLM />
        <LlmUsecases />
        <LlmProcess />
        <LlmIndustry />
        <WhyBeelockchainLlm />
        <LlmTechnologies />
        <LlmFaq />
      </main>
    </>
  );
}
