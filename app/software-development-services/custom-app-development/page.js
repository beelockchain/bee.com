import React from "react";
import { HeroSection } from "./components/HeroSection";
import Customappcustomers from "./components/CustomappCustomers";
import Mobileapplication from "./components/Mobileapplication"; 
import Makeusdifferent from "./components/Makeusdifferent";
import Blockchainleader from "./components/Blockchainleader"; 
import Appdevelopment from "./components/Appdevelopment";

export default function CustomAppDevelopment() {
  return (
    <>
      <HeroSection />
      <Customappcustomers />
      <Mobileapplication/>
      <Makeusdifferent />
      <Blockchainleader />
      <Appdevelopment/>
    </>
  );
}
