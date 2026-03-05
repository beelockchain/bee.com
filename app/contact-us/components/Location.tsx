import React from "react";

const Location = () => {
  return (
    <section className="w-full py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
            <h2 className="text-[23px] md:text-[25px] lg:text-[35px] xl:text-[38px] text-black mb-10 text-center font-bold">
                Where We Are
          </h2>
        </div>

        {/* Map */}
        <div className="w-full h-[450px] md:h-[500px] rounded overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9459991785993!2d78.05940787479274!3d9.938451290163835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cff4350d1ec3%3A0x82d50f0e09d3a134!2sBeelockchain%20-%20Digital%20Transformation%20Company!5e0!3m2!1sen!2sin!4v1772705238145!5m2!1sen!2sin"            
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Location;