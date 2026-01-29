import HoverAvatar from "./HoverAvatar";

interface MarqueeRowProps {
  direction: "left" | "right";
}

const users = [
  { name: "Courtney Henry", email: "debra.holt@example.com", image: "/assets/images/testimoniAL1.svg" },
  { name: "Wade Warren", email: "wade@example.com", image: "/assets/images/testimoniAL1.svg" },
  { name: "Savannah Nguyen", email: "savannah@example.com", image: "/assets/images/testimoniAL1.svg" },
  { name: "Brooklyn Simmons", email: "brooklyn@example.com", image: "/assets/images/testimoniAL1.svg" },
  { name: "Leslie Alexander", email: "leslie@example.com", image: "/assets/images/testimoniAL1.svg" },
];

const MarqueeRow = ({ direction }: MarqueeRowProps) => {
  return (
    <div className="relative w-full overflow-visible ">
       {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-20
                      bg-gradient-to-r from-white to-transparent" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-20
                      bg-gradient-to-l from-white to-transparent" />
      {/* animation ONLY here */}
      <div
        className={`flex gap-6 w-full justify-center items-center
        ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}
        hover:[animation-play-state:paused]`}
      >
        {[...users, ...users].map((user, index) => (
          <div key={index} className="relative overflow-visible">
            <HoverAvatar user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeRow;
