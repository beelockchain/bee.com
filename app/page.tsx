import Herosection from "./components/Hero";
import Customers from "./components/Customers";
import Topnav from "./components/Topnav";
import OverView from "./components/OverView";
import Strategie from "./components/Strategie";
import Transforme from "./components/Transforme";
import Discover from "./components/Discover";
import Awards from "./components/Awards";
import Solution from "./components/Solution";
import Digitaltransformation from "./components/Digitaltransformation";
import Testimonial from "./components/Testimonial";
import FAQSection from "./components/faq";
import Footer from "./components/footer";
import OurInsights from "./components/OurInsights";
import BeelockchainTransformation from "./components/beelockchainTransformation";

export default function Home() {
  return (
    <div className="bg-[#F2EEE5]">
      <Topnav />
      <Herosection />
      <Customers />
      <Digitaltransformation/>
      <Testimonial/>
      <OverView />
      <Strategie />
      <Transforme />
      <Discover/>
      <Awards/>
      <Solution/>
      <BeelockchainTransformation/>
      <OurInsights/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}
