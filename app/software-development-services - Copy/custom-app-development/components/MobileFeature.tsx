const features = [
  { text: "Voice and video calls with screen sharing" },
  { text: "AI chatbots with smart responses" },
  { text: "Voice commands and smart search" },
  { text: "GPS tracking with location alerts" },
  { text: "Barcode & QR code scanning" },
  { text: "Digital Wallet(Both Android & iOS)" },
  { text: "Biometric login (fingerprint, Face ID, or behavior-based)" },
  { text: "Multi-factor Authentication" },
  { text: "Single Sign-On (SSO)" },
  { text: "Real-time sync across multiple devices" },
  { text: "Offline-first design with automatic updates" },
  { text: "Personalized push notifications" },
];

const MobileFeature = () => {
  return (
    <div className="w-full bg-white py-8 px-4">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-4">
        <h2 className="text-[19px] sm:text-[19px] md:text-[21px] leading-tight lg:text-[28px] xl:text-[36px] text-black font-bold ">
          <span className="text-black">Essential</span>
          <span
            data-text="Mobile Features "
            className="shine-text text-[#F5B800] relative mx-2"
          >
            Mobile Features{" "}
          </span>
          <span className="text-black">For Next-Gen</span>
          <br />
          <span className="text-black">Applications</span>
        </h2>
      </div>

      {/* Subheading */}
      <p className="text-center text-black text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px]  leading-relaxed font-semibold  max-w-[840px] mx-auto mb-12 ">
        Mobile capabilities for next-gen applications don't just impress
        visually; they solve real operational challenges, provide strong
        security, and integrate with existing business systems. We make sure
        your app, with Beelockchain, provides not just performance but intuitive
        design, bug-free, and sustainable results.
      </p>

      {/* Feature Grid */}
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        {features.map((feature, i) => (
          <div
            key={i}
            tabIndex={0}
            className="
              group
              flex items-center justify-between gap-1.5 sm:gap-3
              bg-[#F7F7F7]
              border-[1.5px] sm:border-2 border-[#E1E1E1]
              rounded-full
              px-2.5 py-2 sm:px-5 sm:py-4
              min-h-[55px] sm:min-h-[72px]
              cursor-pointer
              overflow-hidden

              transition-all duration-300 ease-out

              shadow-[-3px_-6px_16px_0_rgba(253,253,253,0.69),9px_5px_14px_0_rgba(0,0,0,0.15)]

              hover:bg-[#f5c518ac]
              hover:border-[#E1E1E1]
              hover:shadow-[inset_-3px_-6px_16px_0_rgba(253,253,253,0.69),inset_9px_5px_14px_0_rgba(0,0,0,0.15)]
              hover:scale-[1.02]

              active:scale-[0.99]

              focus:shadow-[-3px_-6px_16px_0_rgba(253,253,253,0.69),9px_5px_14px_0_rgba(0,0,0,0.15)]
            "
          >
            <p className="text-[#505050] text-[10px] sm:text-[13px] md:text-[14px] font-medium leading-snug flex-1 transition-colors duration-300 group-hover:text-gray-900">
              {feature.text}
            </p>
            <div className="flex-shrink-0 w-6 h-6 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center">
              <img
                src="/assets/images/software-dev/custom-app-dev/digital-t-icon.png"
                alt="Feature Icon"
                className="w-6 h-6 sm:w-5 sm:h-5 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10   object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileFeature;