import HoverAvatar from "./HoverAvatar";

interface MarqueeRowProps {
  direction: "left" | "right";
}

const users = [
  { name: "James Anderson", email: "debra.holt@example.com",role:"Mobile App", image: "assets/images/testimonial2.svg" },
  { name: "Sophia Martinez ", email: "wade@example.com",role:"Pay-Per-Click", image: "assets/images/testimonial3.svg" },
  { name: "Savannah Nguyen", email: "savannah@example.com",role:"ERP solution", image: "assets/images/testimonial4.svg" },
  { name: "Brooklyn Simmons", email: "brooklyn@example.com",role:"Digital marketing", image: "assets/images/testimonial5.svg" },
  { name: "Leslie Alexander", email: "leslie@example.com",role:"Web App", image: "assets/images/testimonial6.svg" },
   { name: "Courtney Henry", email: "debra.holt@example.com",role:"DevOps Services", image: "assets/images/testimonial7.svg" },
  { name: "Wade Warren", email: "wade@example.com",role:"Android App", image: "assets/images/testimonial8.svg" },
  { name: "Savannah Nguyen", email: "savannah@example.com",role:"UI/UX Design", image: "assets/images/testimonial9.svg" },
  { name: "Brooklyn Simmons", email: "brooklyn@example.com",role:"Digital Transformation", image: "assets/images/testimonial10.svg" },
  { name: "Leslie Alexander", email: "leslie@example.com",role:"AI chatbot", image: "assets/images/testimonial11.svg" },
];

const MarqueeRow = ({ direction }: MarqueeRowProps) => {
  return (
    <div className="relative w-full overflow-visible">
      {/* LEFT FADE */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-24 z-20
                   bg-gradient-to-r from-white to-transparent"
      />

      {/* RIGHT FADE */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-24 z-20
                   bg-gradient-to-l from-white to-transparent"
      />

      {/* Marquee track */}
      <div
        className={`flex items-center
          ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
      >
        {/* First set */}
        {users.map((user, index) => (
          <div key={`a-${index}`} className="flex-shrink-0 px-3">
            <HoverAvatar user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeRow;