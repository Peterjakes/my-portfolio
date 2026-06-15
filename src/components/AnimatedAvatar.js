import React from 'react';
import { motion } from 'framer-motion';

const AnimatedAvatar = () => {
  return (
    // Outer wrapper — handles scroll-triggered entrance (Framer Motion) and
    // continuous floating idle (CSS @keyframes avatarFloat)
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}  // starts invisible and slightly shrunk
      whileInView={{ opacity: 1, scale: 1 }}  // grows to full size when scrolled into view
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}               // entrance fires only once
      style={{
        animation: 'avatarFloat 3.5s ease-in-out infinite',
        display: 'inline-block',
      }}
    >
      {/* SVG canvas — 260×320px with a deep drop shadow for depth */}
      <svg width="260" height="320" viewBox="0 0 260 320" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }}>

        {/* Ground shadow — dark ellipse beneath feet to simulate contact shadow */}
        <ellipse cx="130" cy="312" rx="52" ry="8" fill="#000" opacity="0.25" />

        {/* Shoes — dark rounded rects with a lighter highlight strip on each */}
        <rect x="88" y="278" width="34" height="18" rx="9" fill="#1a1a2e" />
        <rect x="138" y="278" width="34" height="18" rx="9" fill="#1a1a2e" />
        <rect x="92" y="280" width="14" height="4" rx="2" fill="#2d2d4e" opacity="0.7" />
        <rect x="142" y="280" width="14" height="4" rx="2" fill="#2d2d4e" opacity="0.7" />

        {/* Legs — tall dark navy rounded rects with subtle crease lines */}
        <rect x="97" y="218" width="26" height="66" rx="13" fill="#1e293b" />
        <rect x="137" y="218" width="26" height="66" rx="13" fill="#1e293b" />
        <rect x="103" y="240" width="14" height="3" rx="1.5" fill="#0f172a" opacity="0.4" />
        <rect x="143" y="240" width="14" height="3" rx="1.5" fill="#0f172a" opacity="0.4" />

        {/* Torso / shirt — blue rounded rect with side shading panels,
            center seam, pocket area, and "PJ" badge for detail */}
        <rect x="72" y="148" width="116" height="82" rx="20" fill="#3b82f6" />
        <rect x="72" y="148" width="22" height="82" rx="11" fill="#2563eb" opacity="0.5" />
        <rect x="166" y="148" width="22" height="82" rx="11" fill="#2563eb" opacity="0.5" />
        <rect x="127" y="158" width="6" height="60" rx="3" fill="#2563eb" opacity="0.4" />
        <rect x="98" y="196" width="64" height="28" rx="10" fill="#2563eb" opacity="0.5" />
        <rect x="127" y="196" width="3" height="28" rx="1.5" fill="#1d4ed8" opacity="0.6" />
        <circle cx="130" cy="175" r="10" fill="#1d4ed8" opacity="0.5" />
        <text x="130" y="179" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" opacity="0.8">PJ</text>

        {/* Left arm — waves repeatedly with a pause between cycles.
            transformOrigin anchors rotation at the left shoulder joint.
            Fingers built from four rects + palm rect + wrist oval. */}
        <motion.g
          animate={{ rotate: [0, -25, 10, -25, 0] }}  // swings out and back
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
          style={{ transformOrigin: '72px 160px' }}    // shoulder pivot point
        >
          <rect x="42" y="148" width="32" height="22" rx="11" fill="#3b82f6" />
          <rect x="24" y="136" width="26" height="20" rx="10" fill="#fbbf8a" />
          <circle cx="22" cy="130" r="13" fill="#fbbf8a" />
          {/* Fingers */}
          <rect x="10" y="118" width="7" height="14" rx="3.5" fill="#f9a875" />
          <rect x="19" y="115" width="7" height="16" rx="3.5" fill="#f9a875" />
          <rect x="28" y="116" width="7" height="15" rx="3.5" fill="#f9a875" />
          <rect x="37" y="120" width="6" height="12" rx="3" fill="#f9a875" />
        </motion.g>

        {/* Right arm — static, resting at the side. Fist is a single circle. */}
        <rect x="186" y="148" width="32" height="22" rx="11" fill="#3b82f6" />
        <rect x="210" y="155" width="26" height="20" rx="10" fill="#fbbf8a" />
        <circle cx="238" cy="168" r="13" fill="#fbbf8a" />

        {/* Neck — short skin-tone rect bridging torso and head */}
        <rect x="114" y="128" width="32" height="26" rx="10" fill="#fbbf8a" />
        <rect x="114" y="140" width="32" height="10" rx="5" fill="#f0a868" opacity="0.4" />

        {/* Head — main skin-tone ellipse with blush on cheeks */}
        <ellipse cx="130" cy="95" rx="50" ry="52" fill="#f0a868" opacity="0.3" />
        <ellipse cx="130" cy="90" rx="48" ry="50" fill="#fbbf8a" />
        <ellipse cx="90" cy="100" rx="14" ry="10" fill="#f87171" opacity="0.25" />   {/* left blush */}
        <ellipse cx="170" cy="100" rx="14" ry="10" fill="#f87171" opacity="0.25" />  {/* right blush */}

        {/* Hair — layered dark ellipses for volume: crown, sides, and a
            lighter highlight ellipse to show parting */}
        <ellipse cx="130" cy="48" rx="48" ry="28" fill="#1c1008" />
        <ellipse cx="84" cy="75" rx="16" ry="24" fill="#1c1008" />
        <ellipse cx="176" cy="75" rx="16" ry="24" fill="#1c1008" />
        <ellipse cx="130" cy="44" rx="44" ry="22" fill="#2d1a0a" />
        <ellipse cx="118" cy="38" rx="16" ry="8" fill="#3d2410" opacity="0.6" />

        {/* Ears — outer skin ellipse + inner shadow ellipse each side */}
        <ellipse cx="83" cy="90" rx="10" ry="13" fill="#fbbf8a" />
        <ellipse cx="83" cy="90" rx="6" ry="9" fill="#f0a868" opacity="0.5" />
        <ellipse cx="177" cy="90" rx="10" ry="13" fill="#fbbf8a" />
        <ellipse cx="177" cy="90" rx="6" ry="9" fill="#f0a868" opacity="0.5" />

        {/* Eyebrows — three short curved paths above each eye */}
        <path d="M105 68 Q113 63 121 67" stroke="#2d1a0a" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M139 67 Q147 63 155 68" stroke="#2d1a0a" strokeWidth="3.5" fill="none" strokeLinecap="round" />

        {/* Eye whites — sclera ellipses behind each iris */}
        <ellipse cx="113" cy="82" rx="12" ry="11" fill="white" />
        <ellipse cx="147" cy="82" rx="12" ry="11" fill="white" />

        {/* Irises — dark brown circles on top of the whites */}
        <circle cx="113" cy="83" r="8" fill="#3d2410" />
        <circle cx="147" cy="83" r="8" fill="#3d2410" />

        {/* Blink — left eye.
            scaleY collapses the pupil + highlight to 8% height to simulate a fast blink.
            times[] spaces the keyframes: hold open → snap shut → snap open → hold.
            transformOrigin is set to the iris centre so it squashes in place. */}
        <motion.g
          animate={{ scaleY: [1, 1, 0.08, 1, 1] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1] }}
          style={{ transformOrigin: '113px 83px' }}
        >
          <circle cx="113" cy="83" r="5" fill="#0f0a05" />
          <circle cx="110" cy="80" r="2" fill="white" opacity="0.7" /> {/* catchlight */}
        </motion.g>

        {/* Blink — right eye. Identical timing to left for a synchronised blink. */}
        <motion.g
          animate={{ scaleY: [1, 1, 0.08, 1, 1] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1] }}
          style={{ transformOrigin: '147px 83px' }}
        >
          <circle cx="147" cy="83" r="5" fill="#0f0a05" />
          <circle cx="144" cy="80" r="2" fill="white" opacity="0.7" /> {/* catchlight */}
        </motion.g>

        {/* Eyelash detail — short curved strokes above each eye */}
        <path d="M103 73 Q105 70 108 72" stroke="#1c1008" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M113 72 Q113 69 116 71" stroke="#1c1008" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M120 74 Q123 71 124 74" stroke="#1c1008" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M137 74 Q140 71 141 74" stroke="#1c1008" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M147 72 Q147 69 150 71" stroke="#1c1008" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M154 73 Q157 70 158 73" stroke="#1c1008" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Nose — small curved bridge path with nostril circles */}
        <path d="M126 95 Q130 103 134 95" stroke="#d4845a" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="124" cy="97" r="3" fill="#e8956a" opacity="0.5" />
        <circle cx="136" cy="97" r="3" fill="#e8956a" opacity="0.5" />

        {/* Mouth — curved smile path, teeth implied by a white-filled arc,
            dimple circles at each corner for cheek lift */}
        <path d="M112 112 Q130 124 148 112" stroke="#c0714a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M116 113 Q130 122 144 113 Q130 120 116 113Z" fill="white" opacity="0.8" />
        <circle cx="107" cy="110" r="3" fill="#e8956a" opacity="0.4" />
        <circle cx="153" cy="110" r="3" fill="#e8956a" opacity="0.4" />

      </svg>

      {/* Float keyframe — gentle 12px vertical oscillation on a 3.5s cycle.
          Defined inline so the animation travels with the component. */}
      <style>{`
        @keyframes avatarFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
      `}</style>
    </motion.div>
  );
};

export default AnimatedAvatar;