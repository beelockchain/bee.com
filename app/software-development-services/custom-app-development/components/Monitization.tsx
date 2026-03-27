"use client";

const Monitization = () => {
  return (
    <section className="w-full bg-white  px-4">
      {/* Header */}
      <div className="text-center mb-10  mx-auto">
        <h2 className="text-[19px] sm:text-[19px] md:text-[21px] lg:text-[28px] xl:text-[36px] text-black leading-tight font-bold mb-3 max-w-7xl mx-auto">
          Mobile App
          <span data-text="Monetization Strategy" className="shine-text text-[#F5B800] relative mx-2">Monetization Strategy</span>
        </h2>
        <p className="text-black text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px]  text-black leading-relaxed font-normal  max-w-[670px] mx-auto">
          There are multiple custom mobile app monetization models available
          globally, but we focus on the most wanted and revenue-generating
          strategies that help your businesses maximize ROI.
        </p>
      </div>

      {/*
        ViewBox: 780 x 420  |  Center image: ~(390, 210)

        ONE single arc connects 3 labels on the RIGHT side:
          - In App Purchase    top-center  → right edge of label ≈ (452, 70)  [yellow dot]
          - In App Advertisement left edge ≈ (472, 83)  [no dot, line passes through]
          - Paid Apps          top-center  ≈ (622, 200) [yellow dot]

        The arc goes: (452,70) → curves right past In App Advertisement → down to (622,200)
        Control points pull it outward to the right to make a smooth quarter-circle shape.

        Separate individual lines:
          - Freemium Model right-center (192,83) → yellow dot → diagonal to center (328,172)
          - Subscription Model bottom-center (120,220) → yellow dot → diagonal to center (298,228)
          - Sponsorships top-center (380,358) → straight up to center bottom (385,268)
      -->
      */}
      {/* Mobile/Tablet Layout (Hidden on lg+) */}
      <div className="lg:hidden flex flex-col items-center w-full mt-4 pb-8 overflow-hidden">
        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}</style>
        
        {/* Center image with dotted arc */}
        <div className="relative w-full max-w-[320px] mx-auto mb-10 mt-12 flex justify-center items-center">
          {/* SVG Arc with Dots */}
          <svg 
            className="absolute w-[300px] h-[150px] top-[-30px] left-1/2 -translate-x-1/2 pointer-events-none" 
            viewBox="0 0 300 150" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Dashed curve */}
            <path d="M 20 150 A 130 130 0 0 1 280 150" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4 6" />
            {/* Yellow dots positioned along the arc */}
            <circle cx="20" cy="150" r="3.5" fill="#F5B800" />
            <circle cx="58" cy="74" r="3.5" fill="#F5B800" />
            <circle cx="150" cy="20" r="3.5" fill="#F5B800" />
            <circle cx="242" cy="74" r="3.5" fill="#F5B800" />
            <circle cx="280" cy="150" r="3.5" fill="#F5B800" />
          </svg>

          <div className="w-[180px] h-[180px] rounded-full bg-gray-100/60 flex items-center justify-center relative z-10 drop-shadow-md">
            <img
              src={`/assets/images/software-dev/custom-app-dev/Monitization.svg`}
              alt="Monetization"
              className="w-[85%] h-[85%] object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Scrollable Strategy Row */}
        <div className="w-full relative px-2">
          <div className="flex overflow-x-auto gap-4 py-4 px-2 snap-x snap-mandatory hide-scrollbar">
            <MobilePill text="Freemium Model" />
            <MobilePill text="Subscription Model" />
            <MobilePill text="In App Purchase" />
            <MobilePill text="In App Advertisement" />
            <MobilePill text="Paid Apps" />
            <MobilePill text="Sponsorships and Partnerships" />
          </div>
        </div>
      </div>

      {/* Desktop Layout (Hidden on mobile/tablet) */}
      <div
        className="relative w-full max-w-[780px] mx-auto hidden lg:block"
        style={{
          backgroundImage:
            "url('/assets/images/software-dev/custom-app-dev/Appbg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          aspectRatio: "780/420",
        }}
      >
        {/* Center image */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]"
          style={{ zIndex: 1 }}
        >
          <div className="w-full h-full rounded-full bg-gray-100/60 flex items-center justify-center">
            <img
              src={`/assets/images/software-dev/custom-app-dev/Monitization.svg`}
              alt="Monetization"
              className="w-[85%] h-[85%] object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Freemium Model - top left */}
        <div className="absolute top-[25%] left-[8%]" style={{ zIndex: 2 }}>
          <LabelBox text="Freemium Model" />
        </div>

        {/* In App Purchase - top center */}
        <div
          className="absolute top-[5%] left-1/2 -translate-x-1/2"
          style={{ zIndex: 2 }}
        >
          <LabelBox text="In App Purchase" />
        </div>

        {/* In App Advertisement - top right */}
        <div className="absolute top-[25%] right-[2%]" style={{ zIndex: 2 }}>
          <LabelBox text="In App Advertisement" />
        </div>

        {/* Subscription Model - middle left */}
        <div
          className="absolute top-[60%] left-[0%] -translate-y-1/2"
          style={{ zIndex: 2 }}
        >
          <LabelBox text="Subscription Model" />
        </div>

        {/* Paid Apps - middle right */}
        <div
          className="absolute top-[60%] right-[0%] -translate-y-1/2"
          style={{ zIndex: 2 }}
        >
          <LabelBox text="Paid Apps" />
        </div>

        {/* Sponsorships - bottom center */}
        <div
          className="absolute bottom-[2%] left-1/2 -translate-x-1/2"
          style={{ zIndex: 2 }}
        >
          <LabelBox text="Sponsorships and Partnerships" />
        </div>
      </div>
    </section>
  );
};

const LabelBox = ({ text }: { text: string }) => (
  <div className="bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm whitespace-nowrap">
    <span className="text-black text-[12px] sm:text-[13px] md:text-[14px]  font-medium">
      {text}
    </span>
  </div>
);

const MobileLabelBox = ({ text }: { text: string }) => (
  <div className="bg-white border border-gray-200 rounded-xl px-2 py-3 shadow-sm flex items-center justify-center text-center h-full">
    <span className="text-black text-[12px] font-medium leading-snug">
      {text}
    </span>
  </div>
);

const MobilePill = ({ text }: { text: string }) => (
  <div className="shrink-0 snap-center bg-white border border-gray-200 rounded-[30px] px-6 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
    <span className="text-black text-[13px] font-bold">
      {text}
    </span>
  </div>
);

export default Monitization;
