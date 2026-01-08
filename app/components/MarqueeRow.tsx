import HoverAvatar from "./HoverAvatar";

interface MarqueeRowProps {
  direction: "left" | "right";
}

const users = [
  {
    name: "Courtney Henry",
    email: "debra.holt@example.com",
    image: "/avatars/1.jpg",
  },
  {
    name: "Wade Warren",
    email: "wade@example.com",
    image: "/avatars/2.jpg",
  },
  {
    name: "Savannah Nguyen",
    email: "savannah@example.com",
    image: "/avatars/3.jpg",
  },
  {
    name: "Brooklyn Simmons",
    email: "brooklyn@example.com",
    image: "/avatars/4.jpg",
  },
  {
    name: "Leslie Alexander",
    email: "leslie@example.com",
    image: "/avatars/5.jpg",
  },
];

const MarqueeRow = ({ direction }: MarqueeRowProps) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex gap-6 w-max ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        {[...users, ...users].map((user, index) => (
          <HoverAvatar key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default MarqueeRow;
