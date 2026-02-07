const Customers = () => {
  // Your customer logos/images
  const customerImages = [
    "/assets/images/Customerimg1.svg",
    "/assets/images/Customerimg2.svg",
    "/assets/images/Customerimg3.svg",
    "/assets/images/Customerimg4.svg",
    "/assets/images/Customerimg2.svg",
    "/assets/images/Customerimg4.svg",
  ];

  return (
    <section className="w-full bg-white relative z-10">
      <div className="w-full py-2 overflow-hidden">
        <div className="relative w-full overflow-hidden">
          {/* Marquee track */}
          <div
            className="flex items-center"
            style={{
              width: "max-content",
              animation: "scroll 60s linear infinite",
            }}
          >
            {/* First set of images */}
            {customerImages.map((src, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 px-4">
                <img src={src} alt={`Customer ${index + 1}`} className="md:h-40 md:w-80 w-40 h-20 object-contain" />
              </div>
            ))}
            {/* Second set (duplicate) for seamless loop */}
            {customerImages.map((src, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 px-4">
                <img src={src} alt={`Customer ${index + 1}`} className="md:h-40 md:w-80 w-40 h-20 object-contain" />
              </div>
            ))}
           {customerImages.map((src, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 px-4">
                <img src={src} alt={`Customer ${index + 1}`} className="md:h-40 md:w-80 w-40 h-20 object-contain" />
              </div>
            ))}
            {customerImages.map((src, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 px-4">
                <img src={src} alt={`Customer ${index + 1}`} className="md:h-40 md:w-80 w-40 h-20 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;