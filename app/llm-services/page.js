import HeroSectionLlm from "./components/HeroSectionLlm";
import DevopsCustomers from "../devops-services/components/devops-customers";
import LlmAdopting from "./components/LlmAdopting";
import CustomLlm from "./components/CustomLlm";
import TalkExpertLlm from "./components/TalkExpertLlm";
import LlmSolution from "./components/LlmSolution";
import BenifitsLLM from "./components/BenifitsLLM";
import LlmUsecases from "./components/LlmUsecases";
import LlmProcess from "./components/LlmProcess";
import LlmIndustry from "./components/LlmIndustry";
import LlmFaq from "./components/LlmFaq";
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
        <LlmUsecases/>
        <LlmProcess/>
        <LlmIndustry/>
        <LlmFaq/>

      </main>
    </>
  );
}
