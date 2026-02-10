import HoverAvatar from "./HoverAvatar";

interface MarqueeRowProps {
  direction: "left" | "right";
}



const MarqueeRow = ({ direction }: MarqueeRowProps) => {
  const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL;
const users = [
  { name: "James Anderson", email: "debra.holt@example.com",role:"Mobile App", image: `${ASSET_URL}/images/testimonial2.webp` },
  { name: "Sophia Martinez ", email: "wade@example.com",role:"Pay-Per-Click", image: `${ASSET_URL}/images/testimonial3.webp` },
  { name: "Savannah Nguyen", email: "savannah@example.com",role:"ERP solution", image: `${ASSET_URL}/images/testimonial4.webp` },
  { name: "Brooklyn Simmons", email: "brooklyn@example.com",role:"Digital marketing", image: `${ASSET_URL}/images/testimonial5.webp` },
  { name: "Leslie Alexander", email: "leslie@example.com",role:"Web App", image: `${ASSET_URL}/images/testimonial6.webp` },
   { name: "Courtney Henry", email: "debra.holt@example.com",role:"DevOps Services", image: `${ASSET_URL}/images/testimonial7.webp` },
  { name: "Wade Warren", email: "wade@example.com",role:"Android App", image: `${ASSET_URL}/images/testimonial8.webp` },
  { name: "Savannah Nguyen", email: "savannah@example.com",role:"UI/UX Design", image: `${ASSET_URL}/images/testimonial9.webp` },
  { name: "Brooklyn Simmons", email: "brooklyn@example.com",role:"Digital Transformation", image: `${ASSET_URL}/images/testimonial10.webp` },
  { name: "Leslie Alexander", email: "leslie@example.com",role:"AI chatbot", image: `${ASSET_URL}/images/testimonial11.webp` },
];
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