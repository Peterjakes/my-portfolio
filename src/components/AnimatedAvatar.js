import React from 'react';
import { motion } from 'framer-motion';

const AnimatedAvatar = () => {
  return (
    <div className="avatar-svg-container">
      <svg width="200" height="240" viewBox="0 0 200 240" className="avatar-svg">

        {/* Head */}
        <circle cx="100" cy="80" r="45" fill="#f5deb3" stroke="#8b7355" strokeWidth="2" />

        {/* Eyes — static outer circles */}
        <g className="eyes-group">
          <circle cx="85" cy="70" r="6" fill="#333" />   {/* left eye white */}
          {/* Left pupil — animates downward to simulate blinking */}
          <motion.circle
            cx="85"
            cy="70"
            r="3.5"
            fill="#000"
            animate={{ cy: [70, 70, 74, 70] }} // moves down then back up
            transition={{ duration: 3, repeat: Infinity }}
          />

          <circle cx="115" cy="70" r="6" fill="#333" />  {/* right eye white */}
          {/* Right pupil — same blink animation */}
          <motion.circle
            cx="115"
            cy="70"
            r="3.5"
            fill="#000"
            animate={{ cy: [70, 70, 74, 70] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </g>

        {/* Smile */}
        <path
          d="M 85 85 Q 100 95 115 85"
          stroke="#8b7355"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Body */}
        <rect x="70" y="130" width="60" height="50" rx="10" fill="#e74c3c" />

        {/* Left Arm — static */}
        <g className="left-arm">
          <rect x="40" y="140" width="30" height="15" rx="7" fill="#f5deb3" />
        </g>

        {/* Right Arm — waves back and forth */}
        <motion.g
          className="right-arm-waving"
          animate={{ rotate: [0, 20, -10, 20, 0] }} // rocks arm up and down
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }} // pauses 1s between waves
          transformOrigin="70 140" // rotates from shoulder joint
        >
          <rect x="130" y="140" width="30" height="15" rx="7" fill="#f5deb3" />
          <circle cx="165" cy="147" r="10" fill="#f5deb3" /> {/* hand */}
        </motion.g>

        {/* Left Leg */}
        <rect x="75" y="185" width="12" height="35" rx="6" fill="#333" />
        <rect x="72" y="220" width="18" height="12" rx="6" fill="#000" />

        {/* Right Leg */}
        <rect x="113" y="185" width="12" height="35" rx="6" fill="#333" />
        <rect x="110" y="220" width="18" height="12" rx="6" fill="#000" />

        {/* Blush */}
        <circle cx="60" cy="80" r="8" fill="#ffb6c1" opacity="0.6" />
        <circle cx="140" cy="80" r="8" fill="#ffb6c1" opacity="0.6" />

      </svg>
    </div>
  );
};

export default AnimatedAvatar;