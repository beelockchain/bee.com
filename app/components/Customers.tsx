const Customers = () => {
  // Your customer logos/images
  const customerImages = [
    "/assets/images/Background (4).svg",
    "/assets/images/sidelogo.svg",
    "/assets/images/Background (6).svg",
    "/assets/images/Background (7).svg",
    "/assets/images/sidelogo.svg",
    "/assets/images/Background (7).svg",
  ];

  return (
    <section className="w-full bg-white relative z-10">
      <div className="w-full py-10 overflow-hidden">
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
                <img src={src} alt={`Customer ${index + 1}`} className="h-40 w-80 object-contain" />
              </div>
            ))}
            {/* Second set (duplicate) for seamless loop */}
            {customerImages.map((src, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 px-4">
                <img src={src} alt={`Customer ${index + 1}`} className="h-40 w-80 object-contain" />
              </div>
            ))}
           {customerImages.map((src, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 px-4">
                <img src={src} alt={`Customer ${index + 1}`} className="h-40 w-80 object-contain" />
              </div>
            ))}
            {customerImages.map((src, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 px-4">
                <img src={src} alt={`Customer ${index + 1}`} className="h-40 w-80 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;