const Customers = () => {
    return (
       <section className="w-full bg-white relative z-10">

      {/* ================= MOBILE VERSION ================= */}
      <div className="flex md:hidden w-full py-10 overflow-hidden">
        <div className="relative w-full">
          <div
            className="flex items-center gap-3"
            style={{
              width: "max-content",
              animation: "scroll 14s linear infinite",
            }}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="w-40 h-24 rounded-lg bg-gray-100 shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ================= DESKTOP + TABLET VERSION ================= */}
      <div className="hidden md:flex w-full py-16 overflow-hidden">
        <div className="relative w-full">
          <div
            className="flex items-center gap-6"
            style={{
              width: "max-content",
              animation: "scroll 12s linear infinite",
            }}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="w-60 h-32 rounded-lg bg-gray-100 shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

    </section>
    );
};

export default Customers;
