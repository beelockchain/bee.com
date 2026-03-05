const Mobileapplication = () => {
  return (
    <div className="w-full  py-16 px-6 md:px-16">

      <h2 className="text-center text-[20px] md:text-[25px] lg:text-[35px] xl:text-[48px] font-extrabold text-gray-900 mb-12 leading-snug">
        Custom
        <span data-text="Mobile Applications" className="shine-text text-[#F5B800] relative mx-4">Mobile Applications</span>
        That Address <br className="hidden md:block" />
        Enterprise Growth Bottlenecks
      </h2>

      {/* Two Column Layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* LEFT — Single Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/images/software-dev/custom-app-dev/Mobileapplication.png"
            alt="Enterprise mobile application illustration"
            className="w-full max-w-md object-contain rounded-xl"
          />
        </div>

        {/* RIGHT — Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <p className="text-black text-base leading-relaxed font-normal font-['Poppins']">
            Enterprise mobility initiatives frequently fail due to legacy systems,
            siloed data, scalability limits, and security gaps that erode ROI.
            Research indicates that nearly 70% of digital transformation projects
            underperform, often because of poor integration and outdated
            infrastructure. Large enterprises require more than basic app
            development, they need secure, cloud-native, and integration-ready
            ecosystems aligned with compliance and enterprise architecture standards.
          </p>

          <p className="text-black text-base leading-relaxed font-normal font-['Poppins']">
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