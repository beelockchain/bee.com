import Image from 'next/image';
import Link from 'next/link';
interface HeroSectionProps {
  backgroundImage?: string;
  onConsultClick?: () => void;
}

export default function HeroSection({ 
  backgroundImage = '/assets/images/digital-transform-banner.png',
  onConsultClick 
}: HeroSectionProps) {
  return (
    <div className='md:p-3 lg:p-3 xl:p-3  bg-white id="top"'>
            <section className="relative w-full  md:min-h-[370px] lg:min-h-[450px] xl:min-h-[690px]  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Digital Transformation Background"
          fill
          className="object-cover object-center rounded-2xl hidden sm:hidden md:block lg:block xl:block"
          priority
          quality={100}
        />
      </div>

      {/* Content Container - Aligned to left with proper spacing */}
      <div className="relative  z-10 h-full  md:min-h-[370px] lg:min-h-[450px] xl:min-h-[650px] flex items-center">
        <div className=" container mx-auto px-3 md:px-10 lg:px-5 xl:px-5">
          <div className="md:pt-8 md:pb-8 lg:pt-8 lg:pb-8 xl:pt-8 xl:pb-8">
            {/* Main Heading */}
            <h1 className="mb-5 leading-[1.15] mt-3">
            <span className="
                block
                text-[20px]
                md:text-[25px]
                lg:text-[35px]
                xl:text-[48px]
                font-bold text-black
                text-center
                md:text-left
                
                ">
                Digital Transformation
            </span>

              <span className="block text-[20px] md:text-[25px] lg:text-[35px] xl:text-[48px] font-bold text-center md:text-left">
                <span data-text="Services" className="shine-text text-[#F5B800] relative">
                Services
                </span>

                <span className="text-black"> & Solution</span>
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-black text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-semibold leading-[1.65] xl:mt-10 mb-5 md:max-w-[325px] lg:max-w-[400px] xl:max-w-[520px] text-center md:text-left">
              Beelockchain is a trusted Digital Transformation Services Provider, enabling organizations to modernize business operations, streamline processes, and align technology with their business goals. As a digital transformation consulting company and service provider, we help startups, mid-sized companies, and enterprises achieve sustainable business growth.

            </p>

            {/* CTA Button */}
              {/* CTA Button */}
             <div className="text-center md:text-left mb-5">
              <Link
                href="/contact-us"
                target="_blank"
                className="
                  group relative overflow-hidden
                  cursor-pointer
                  inline-flex items-center justify-center gap-2
                  w-fit
                  px-4 py-2 md:px-2 md:py-1 lg:px-3 lg:py-2 xl:px-3 xl:py-2.5
                  border border-black rounded-full
                  bg-[#f2f2f2]
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]
                "
              >
                {/* Expanding circle */}
                <span className="absolute inset-0 flex items-center justify-center z-0">
                  <span className="w-10 h-10 bg-gray-100 rounded-full scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out" />
                </span>

                {/* Glow */}
                <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(226,226,226,0.9)_0%,rgba(226,226,226,0.3)_50%,transparent_100%)] group-hover:opacity-0 transition-opacity duration-300 z-0" />

                {/* Text */}
                <span className="relative z-10 font-poppins text-black text-sm md:text-[12px] lg:text-[12px] xl:text-[15px]">
                  Consult Our Experts
                </span>

                {/* Arrow Icon */}
                <svg
                  className="relative z-10 w-8 h-8 lg:w-8 lg:h-8 transition-all duration-300 group-hover:rotate-[60deg] group-hover:translate-x-1 group-active:scale-95"
                  viewBox="0 0 56 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="28.2473"
                    cy="27.0945"
                    r="15.912"
                    fill="#F6E000"
                    stroke="#F9C901"
                    strokeWidth="1.51543"
                  />
                  <path
                    d="M31.3253 22.1686L33.2667 29.414M31.3253 22.1686L24.0799 24.11M31.3253 22.1686L25.1373 32.8865"
                    stroke="black"
                    strokeWidth="3.03086"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
    </div>

  );
}