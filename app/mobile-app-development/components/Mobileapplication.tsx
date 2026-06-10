const Mobileapplication = () => {
  return (
    <div className="w-full py-5 px-6 md:px-16">

      {/* 
         TITLE ALIGNMENT: 
         Centered on all devices (Mobile, Tablet, Desktop)
      */}
      <h2 className="text-center text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px]  text-black font-bold mb-12 leading-tight">
        Custom
        <span data-text="Mobile Applications" className="shine-text text-[#F5B800] relative mx-1">Mobile Applications</span>
        That Address <br className="hidden md:block" />
        Enterprise Growth Bottlenecks
      </h2>

      {/* Two Column Layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* LEFT — Single Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/images/software-dev/custom-app-dev/custom-Mobileapplication.png"
            alt="Enterprise mobile application illustration"
            className="w-full max-w-sm md:max-w-md object-contain rounded-xl"
          />
        </div>

        {/* RIGHT — Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          
          {/* 
             PARAGRAPH ALIGNMENT: 
             Mobile: text-center
             Tablet/Desktop: md:text-left (Maintains existing layout)
          */}
          <p className="text-center md:text-left  text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px]  text-black leading-relaxed font-semibold ">
            Enterprise mobility initiatives frequently fail due to legacy systems,
            siloed data, scalability limits, and security gaps that erode ROI.
            Research indicates that nearly 70% of digital transformation projects
            underperform, often because of poor integration and outdated
            infrastructure. Large enterprises require more than basic app
            development, they need secure, cloud-native, and integration-ready
            ecosystems aligned with compliance and enterprise architecture standards.
          </p>

          <p className="text-center md:text-left  text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px]  text-black leading-relaxed font-semibold ">
            As a Custom Mobile App Development Company, Beelockchain builds
            high-performance mobile platforms integrated with AI, cloud, ERP, and
            API-driven systems. Our solutions rewrite your business operational
            efficiency, strengthen security, and measurable business impact through
            strategic digital transformation.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Mobileapplication;