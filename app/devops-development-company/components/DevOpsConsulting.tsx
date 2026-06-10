const DevOpsConsulting = () => {
  return (
    <div className="w-full py-5 px-6 md:px-16">

      {/* 
         TITLE ALIGNMENT: 
         Centered on all devices (Mobile, Tablet, Desktop)
      */}
      <h2 className="text-center text-[17px] sm:text-[20px] md:text-[21px] lg:text-[28px] xl:text-[36px]  text-black font-bold mb-12 leading-tight">
        What Is
        <span data-text="DevOps Consulting" className="shine-text text-[#F5B800] relative mx-1">DevOps Consulting</span>
        And Why Is It Important  <br className="hidden md:block" />
        For Modern Software Development?
      </h2>

      {/* Two Column Layout */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row md:flex-row items-center gap-12">

        {/* LEFT — Single Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/images/devops/devops-consulting.png"
            alt="Enterprise mobile application illustration"
            className="w-full max-w-[280px] md:max-w-md object-contain rounded-xl"
          />
        </div>

        {/* RIGHT — Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          
          {/* 
             PARAGRAPH ALIGNMENT: 
             Mobile: text-center
             Tablet/Desktop: md:text-left (Maintains existing layout)
          */}
          <p className="text-center sm:text-left md:text-left  text-[13px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-poppins font-medium  text-black">
           A DevOps consulting services company helps businesses adopt DevOps practices by bridging the gap between software development and IT operations teams. It introduces automation across development workflows and infrastructure provisioning to improve how applications are built, tested, deployed, and monitored across cloud environments.
          </p>

          <p className="text-center sm:text-left md:text-left  text-[13px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-poppins font-medium  text-black">
            Practices such as CI/CD pipelines, Infrastructure as Code (IaC), containerization, and continuous monitoring are integrated into the software delivery lifecycle. These capabilities enable faster releases, improved deployment efficiency, and consistent application performance across cloud or hybrid platforms.
          </p>

            <p className="text-center sm:text-left md:text-left  text-[13px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-poppins font-medium  text-black">
          AI-integrated DevOps environments further enhance software delivery by using predictive analytics and intelligent issue detection. This helps optimize application infrastructure usage and reduce deployment risks across development and production environments.</p>
        </div>

      </div>
    </div>
  );
};

export default DevOpsConsulting;