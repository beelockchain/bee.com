import React from "react";
import Script from "next/script";
import { HeroSectionDevops } from "./components/HeroSectionDevops";
import DevopsCustomers from "./components/devops-customers";
import DevOpsConsulting from "./components/DevOpsConsulting";
import DevopsEngineeringSolution from "./components/DevopsEngineeringSolution";
import BenefitsOfDevOps from "./components/BenefitsOfDevOps";
import StructuredDevOps from "./components/StructuredDevOps";
import YourConsulting from "./components/YourConsulting";

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
      </main>
    </>
  );
}