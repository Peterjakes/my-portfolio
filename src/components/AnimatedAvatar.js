import React from 'react';
import { motion } from 'framer-motion';

const AnimatedAvatar = () => {
  return (
    // Outer wrapper — fades and scales in when scrolled into view
    <motion.div
      className="avatar-svg-container"
      initial={{ opacity: 0, scale: 0.8 }} // starts small and invisible
      whileInView={{ opacity: 1, scale: 1 }} // grows to full size
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}              // only animates once
    >
      <svg width="200" height="240" viewBox="0 0 200 240" className="avatar-svg">

        {/* Head */}
        <circle cx="100" cy="80" r="45" fill="#f5deb3" stroke="#8b7355" strokeWidth="2" />

        {/* Eyes — blink animation on pupils */}
        <g className="eyes-group">
          <circle cx="85" cy="70" r="6" fill="#333" />
          {/* Left pupil moves down then snaps back to simulate blink */}
          <motion.circle
            cx="85"
            cy="70"
            r="3.5"
            fill="#000"
            animate={{ cy: [70, 70, 74, 70] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <circle cx="115" cy="70" r="6" fill="#333" />
          {/* Right pupil — same timing as left for sync */}
          <motion.circle
            cx="115"
            cy="70"
            r="3.5"
            fill="#000"
            animate={{ cy: [70, 70, 74, 70] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </g>

        {/* Smile — curved path */}
        <path
          d="M 85 85 Q 100 95 115 85"
          stroke="#8b7355"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Body — red shirt */}
        <rect x="70" y="130" width="60" height="50" rx="10" fill="#e74c3c" />

        {/* Left Arm — static */}
        <g className="left-arm">
          <rect x="40" y="140" width="30" height="15" rx="7" fill="#f5deb3" />
        </g>

        {/* Right Arm — waves repeatedly with a pause between */}
        <motion.g
          className="right-arm-waving"
          animate={{ rotate: [0, 20, -10, 20, 0] }} // rocks back and forth
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          transformOrigin="70 140" // pivot point at shoulder
        >
          <rect x="130" y="140" width="30" height="15" rx="7" fill="#f5deb3" />
          <circle cx="165" cy="147" r="10" fill="#f5deb3" /> {/* hand */}
        </motion.g>

        {/* Left Leg + Shoe */}
        <rect x="75" y="185" width="12" height="35" rx="6" fill="#333" />
        <rect x="72" y="220" width="18" height="12" rx="6" fill="#000" />

        {/* Right Leg + Shoe */}
        <rect x="113" y="185" width="12" height="35" rx="6" fill="#333" />
        <rect x="110" y="220" width="18" height="12" rx="6" fill="#000" />

        {/* Blush — subtle pink on cheeks */}
        <circle cx="60" cy="80" r="8" fill="#ffb6c1" opacity="0.6" />
        <circle cx="140" cy="80" r="8" fill="#ffb6c1" opacity="0.6" />

      </svg>

      {/* Inline styles — floating animation + drop shadow */}
      <style>{`
        .avatar-svg-container {
          position: relative;
          animation: float 3s ease-in-out infinite; /* gentle up/down float */
        }

        /* Float keyframe — moves avatar 10px up and back */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }

        /* Soft drop shadow under avatar */
        .avatar-svg {
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
        }
      `}</style>
    </motion.div>
  );
};

export default AnimatedAvatar;