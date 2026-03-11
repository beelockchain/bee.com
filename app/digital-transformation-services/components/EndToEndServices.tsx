import React from 'react';

interface ServiceCard {
  title: string;
}

const EndToEndServices: React.FC = () => {
  const services: ServiceCard[] = [
    { title: 'Custom Application Development' },
    { title: 'Agile Software Development' },
    { title: 'ERP Software Development' },
    { title: 'Blockchain Development' },
    { title: 'Generative AI Development' },
    { title: 'AI Chatbot Development' },
    { title: 'LLM Development' },
    { title: 'Machine Learning Development' },
    { title: 'Custom AI Development' },
    { title: 'DevOps Development' },
    { title: 'Cloud Computing Development' },
    { title: 'Cybersecurity Development' },
    { title: 'IoT Development' },
    { title: 'AR & VR Development' },
    { title: 'Low-Code Application Development' },
    { title: 'Digital Growth Development' },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-10 xl:mb-15">
          <h2 className="text-[20px] md:text-[22px] lg:text-[28px] xl:text-[36px] font-bold mb-6 leading-tight text-[#000000] font-poppines">
            Our <span data-text="End-to-End" className="shine-text relative text-[#F9C901]">End-To-End</span> Digital Transformation
            <br className="hidden md:block" />
            Services & Solutions
          </h2>

          <p className="text-[#000000] text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] font-semibold lg:max-w-5xl xl:max-w-4xl mx-auto md:px-4 lg:px-4 xl:px-4">
            Beelockchain provides full-cycle digital transformation services, supporting organizations from roadmap to
            implementation and ongoing optimization. Our solutions help businesses improve operational adaptability,
            strengthen their market presence, and remain competitive in today's fast-changing digital space.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3 lg:gap-3 xl:gap-6">
          {services.map((service, index) => (
            <div
            key={index}
            tabIndex={0}
            className="
                group relative
                bg-[#F7F7F7]
                border-2 border-[#E1E1E1]
                rounded-[50px]
                px-5 py-2 md:px-6 md:py-5 lg:px-3 lg:py-3 xl:px-6 xl:py-5
                min-h-[35px] md:min-h-[95px] lg:min-h-7
                overflow-hidden
                cursor-pointer
                
                transition-all duration-300 ease-out
                
                shadow-[-3px_-6px_16px_0_rgba(253,253,253,0.69),9px_5px_14px_0_rgba(0,0,0,0.15)]
                
                /* HOVER */
                hover:bg-[#f5c518ac]
                hover:border-[#E1E1E1]
                hover:shadow-[inset_-3px_-6px_16px_0_rgba(253,253,253,0.69),inset_9px_5px_14px_0_rgba(0,0,0,0.15)]
                hover:scale-[1.02]

                /* ACTIVE */
                active:scale-[0.99]

                /* FOCUS */
                focus:shadow-[-3px_-6px_16px_0_rgba(253,253,253,0.69),9px_5px_14px_0_rgba(0,0,0,0.15)]
            "
            >

              {/* Content */}
              <div className="flex items-center justify-between  h-full">

                {/* Title */}
                <h3 className="
                  text-[9px] md:text-[14px] lg:text-[11px] xl:text-[14px]
                  font-medium text-[#505050] font-bold
                  leading-relaxed
                  transition-colors duration-300
                  group-hover:text-gray-900
                  group-focus:text-gray-900
                  flex-1
                ">
                  {service.title}
                </h3>

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="relative w-5 h-5 md:w-12 md:h-12 lg:w-10 lg:h-10">

                    <div className="
                      w-full h-full rounded-xl flex items-center justify-center
                      transition-all duration-300
               
                    ">

                      <div className="
                        w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center
                        transition-all duration-300
                       
                        overflow-hidden
                      ">
                        <img 
                          src="/assets/images/digital-t-icon.png"
                          alt={service.title}
                          className="
                            w-6 h-6 sm:w-5 sm:h-5 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10
                            object-cover
                            transition-transform duration-300
                            group-hover:scale-110
                          "
                        />
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EndToEndServices;
