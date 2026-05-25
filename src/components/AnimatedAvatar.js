import React from 'react';

const AnimatedAvatar = () => {
  return (
    <div className="avatar-svg-container">
      <svg width="200" height="240" viewBox="0 0 200 240" className="avatar-svg">

        {/* Head */}
        <circle cx="100" cy="80" r="45" fill="#f5deb3" stroke="#8b7355" strokeWidth="2" />

        {/* Eyes */}
        <circle cx="85" cy="70" r="6" fill="#333" />   {/* left eye */}
        <circle cx="115" cy="70" r="6" fill="#333" />  {/* right eye */}

        {/* Smile */}
        <path
          d="M 85 85 Q 100 95 115 85"
          stroke="#8b7355"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Body — red shirt */}
        <rect x="70" y="130" width="60" height="50" rx="10" fill="#e74c3c" />

        {/* Left Arm */}
        <rect x="40" y="140" width="30" height="15" rx="7" fill="#f5deb3" />

        {/* Right Arm */}
        <rect x="130" y="140" width="30" height="15" rx="7" fill="#f5deb3" />
        <circle cx="165" cy="147" r="10" fill="#f5deb3" /> {/* hand */}

        {/* Left Leg */}
        <rect x="75" y="185" width="12" height="35" rx="6" fill="#333" />
        <rect x="72" y="220" width="18" height="12" rx="6" fill="#000" /> {/* shoe */}

        {/* Right Leg */}
        <rect x="113" y="185" width="12" height="35" rx="6" fill="#333" />
        <rect x="110" y="220" width="18" height="12" rx="6" fill="#000" /> {/* shoe */}

        {/* Blush — pink circles on cheeks */}
        <circle cx="60" cy="80" r="8" fill="#ffb6c1" opacity="0.6" />
        <circle cx="140" cy="80" r="8" fill="#ffb6c1" opacity="0.6" />

      </svg>
    </div>
  );
};

export default AnimatedAvatar;