
import React from 'react';

interface HoverAvatarProps {
  user: {
    name: string;
    email: string;
    image: string;
  };
}

const HoverAvatar = ({ user }: HoverAvatarProps) => {
  return (
    <div className="relative group pointer-events-auto inline-block">
      <img
        src={user.image}
        alt={user.name}
        className="md:w-12 md:h-12 h-10 w-10 rounded-full object-cover opacity-70
                   group-hover:opacity-100 transition cursor-pointer"
      />

      {/* Hover Card - positioned below the avatar */}
      <div
        className="absolute left-1/2 -translate-x-1/2
                   invisible opacity-0 scale-95
                   group-hover:visible group-hover:opacity-100 group-hover:scale-100
                   transition-all duration-200 ease-out
                   z-[100] pointer-events-none"
        style={{ top: '100%', marginTop: '12px' }}
      >
        {/* Arrow pointing up */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200"></div>
        
        {/* Card content */}
        <div className="relative bg-white rounded-xl shadow-2xl border border-gray-200 px-4 py-3 min-w-[220px]">
          <p className="text-sm font-semibold text-gray-900 whitespace-nowrap">{user.name}</p>
          <p className="text-xs text-gray-500 whitespace-nowrap">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default HoverAvatar;