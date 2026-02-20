
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

export const metadata = {
  title: " Digital Transforms | Innovation & Technology",
  description:
    "Explore leverages digital transformations to enhance fitness technology, user experience, and data security.",
};

export default function DigitalTransforms() {
  return (
      <main>
          <HeroSection/>
          <DigitalTransformationSection />
          <Whatwedo />
          <WhyDigitalTransformation />
          <BusinessValue/>
          <RoadMapCard />
          <EndToEndServices/>
          <BenefitsSection/>
          <SubIndustriesWeServe />
          <FAQ />
      </main>


  )
}
