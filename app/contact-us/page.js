import React from 'react'
import ContactHeroSection from './components/ContactHeroSection'
import ContactMarquee from './components/ContactMarquee'
import Location from './components/Location'
export const metadata = {
  title: "Contact Beelockchain for Expert Digital Transformation Solutions",
  description:
    "Contact Beelockchain to discuss your AI, blockchain, mobile app, or custom software development project. Get expert consultation and tailored digital solutions for your business.",
  openGraph: {
    title:
      "Discuss Your Project with Beelockchain’s Software Development Experts",
    description:
      "Contact our AI and blockchain development specialists to discover scalable digital solutions tailored to your business needs.",
    url: "https://beelockchain.com/contact-us",
    type: "website",
  },
};

export default function ContactUs() {
  
  return (
    <div>
        <ContactHeroSection/>
        <ContactMarquee/>
        <Location/>
    </div>
  )
}
