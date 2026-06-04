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
export default function LLMServicesPage() {
  return (
    <>
      <main>
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
