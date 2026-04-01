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
export default function DevopsServices() {

  
  return (
    <>
      <main>
        <HeroSectionDevops />
        <DevopsCustomers />
        <DevOpsConsulting />
        <DevopsEngineeringSolution/>
        <BenefitsOfDevOps/>
        <StructuredDevOps/>
        <YourConsulting/>
        <DevopsTechnologies/>
        <AwardsSection/>
        <IndustryDevops/>
        <DevopsTestimonial/>
        <DevopsTestimonialCarousel/>
        <Scheduleconsult/>
        <DevopsFAQSection/>
      </main>
    </>
  );
}