import Image from "next/image";
const BenefitsOfDevOps = () => {
  return (
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-center text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px]  text-black font-bold mb-4 leading-tight">
        Key <span data-text="DevOps Consulting" className="shine-text text-[#F5B800] relative mx-1">Benefits Of DevOps</span>
        Consulting<br />
        Services For Software Delivery
      </h2>
        <p className="text-black text-[13px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-poppins  font-medium  mb-6 max-w-4xl mx-auto">
         Implementing DevOps consulting practices enables businesses to automate infrastructure provisioning and deployment workflows, helping teams deliver stable software updates faster while minimizing operational overhead across modern application environments.
        </p>
        <div className="w-full flex justify-center items-center mt-6">
  
        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/assets/images/devops/devops-benefits-mobile.png"
            alt="DevOps Benefits Mobile"
            width={320}
            height={320}
            className="w-full max-w-[320px] h-auto object-contain"
            priority
          />
        </div>

        {/* Tablet & Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/assets/images/devops/devops-benefits-desktop.png"
            alt="DevOps Benefits Desktop"
            width={900}
            height={500}
            className="w-full max-w-[700px] lg:max-w-[900px] h-auto object-contain"
          />
        </div>

      </div>
      </div>

    
  );
};

export default BenefitsOfDevOps;