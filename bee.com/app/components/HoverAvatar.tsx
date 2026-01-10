interface HoverAvatarProps {
  user: {
    name: string;
    email: string;
    image: string;
  };
}

const HoverAvatar = ({ user }: HoverAvatarProps) => {
  return (
    <div className="relative group">
      {/* Avatar */}
      <img
        src={user.image}
        alt={user.name}
        className="w-12 h-12 rounded-full object-cover opacity-70
                   group-hover:opacity-100 transition"
      />

      {/* Hover Card */}
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2
                   scale-95 opacity-0
                   group-hover:scale-100 group-hover:opacity-100
                   transition-all duration-200 z-20"
      >
        <div className="bg-white rounded-xl shadow-xl px-4 py-3 min-w-[220px]">
          <p className="text-sm font-semibold text-gray-900">
            {user.name}
          </p>
          <p className="text-xs text-gray-500">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default HoverAvatar;
