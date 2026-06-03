import { motion } from 'framer-motion';

// SVG logos for each technology — inline SVGs keep it dependency-free
const logos = {
  React: (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
      <circle cx="12" cy="12" r="2.3" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
      <rect width="24" height="24" rx="2" fill="#F7DF1E"/>
      <text x="3.5" y="18" fontSize="11" fontWeight="bold" fill="#000" fontFamily="monospace">JS</text>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
      <rect width="24" height="24" rx="2" fill="#3178C6"/>
      <text x="3" y="18" fontSize="11" fontWeight="bold" fill="white" fontFamily="monospace">TS</text>
    </svg>
  ),
  HTML5: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
      <path d="M3 2l1.8 20L12 24l7.2-2L21 2H3z" fill="#E34F26"/>
      <path d="M12 22.4l5.8-1.6 1.6-17.8H12v19.4z" fill="#EF652A"/>
      <path d="M12 13.5H8.4l-.3-3H12V7.5H5.6l.8 9H12v-3zm0 5.3-2.5-.7-.2-2.3H6.8l.4 4.2L12 21.3V18.8z" fill="white"/>
      <path d="M12 13.5v3h3.3l-.3 3.3-3 .8V21l4.8-1.3.4-4.2H12zm.3-6v3h6.2l-.2 2H12v3h6.1l.6-8H12.3z" fill="#EBEBEB"/>
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
      <path d="M3 2l1.8 20L12 24l7.2-2L21 2H3z" fill="#1572B6"/>
      <path d="M12 22.4l5.8-1.6 1.6-17.8H12v19.4z" fill="#33A9DC"/>
      <path d="M12 13.5H8.7l-.2-2.5H12V8H5.9l.6 6.8H12v-1.3zm0 4.8-2.5-.7-.2-1.9H6.7l.4 4.2 4.9 1.3V18.3z" fill="white"/>
      <path d="M12 13.5v1.3h3.1l-.3 3-2.8.7V21l4.9-1.4.3-4.1H12zm.3-5.5v2.5h6l.2-2.5H12.3z" fill="#EBEBEB"/>
    </svg>
  ),
  'Tailwind CSS': (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
      <path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C13.37 10.85 14.57 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.63 7.15 14.43 6 12 6zm-5 6C4.33 12 2.67 13.33 2 16c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.37 16.85 9.57 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.63 13.15 9.43 12 7 12z" fill="#38BDF8"/>
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
      <path d="M12 1.5L2.5 7v10l9.5 5.5L21.5 17V7L12 1.5z" fill="#3C873A"/>
      <path d="M12 4.2L5.5 8v8l6.5 3.8V4.2z" fill="#3C873A"/>
      <text x="6.5" y="15.5" fontSize="6.5" fill="white" fontWeight="bold" fontFamily="monospace">JS</text>
    </svg>
  ),
  Express: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
      <rect width="24" height="24" rx="2" fill="#2c2c2c"/>
      <text x="2" y="15.5" fontSize="7" fill="white" fontWeight="600" fontFamily="monospace">EX</text>
    </svg>
  ),
  Laravel: (
    <svg viewBox="0 0 50 52" className="w-5 h-5 flex-shrink-0">
      <path d="M49.626 11.564a.809.809 0 01.028.209v10.972a.8.8 0 01-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01a.814.814 0 01-.195.083c-.024.006-.048.016-.073.019a.8.8 0 01-.404-.083L.408 39.944A.801.801 0 010 39.25V7.741c0-.072.01-.142.028-.209.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.022.051-.04.077-.059.031-.023.06-.048.095-.066L9.1.048a.8.8 0 01.8 0l8.672 5.002c.033.019.06.044.09.066.027.019.055.037.078.06.028.027.048.06.071.092.018.025.04.045.054.071.023.04.036.082.051.124.008.023.022.044.028.068a.809.809 0 01.028.209v20.559l8.008-4.611V11.564c0-.072.009-.142.028-.209.006-.023.02-.044.027-.067.016-.042.029-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.071-.093.023-.022.052-.04.078-.059.03-.023.06-.048.095-.066l8.672-5.002a.8.8 0 01.8 0l8.672 5.002c.034.018.064.043.095.066.026.018.054.037.077.059.028.028.048.061.072.093.017.024.039.045.054.071.022.039.036.082.05.124.008.023.022.044.028.067zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zM10.69 19.25v-9.124L7.327 8.19l-4.646-2.675v9.124l8.009 4.61zm16.014-17.234l-8.011 4.613 8.011 4.61 8.008-4.61-8.008-4.613zM35.81 27.355l-4.646-2.675-3.363-1.936v9.124l4.643 2.674 3.366 1.937v-9.124zM19.626 47.894v-9.217l-4.644-2.568-3.367-1.878v9.197l8.011 4.466zM1.602 7.985v31.265l8.007 4.466v-9.196l-4.14-2.299-.002-.001-.002-.002c-.034-.018-.063-.043-.095-.065-.025-.019-.054-.037-.076-.059l-.002-.003c-.026-.025-.046-.057-.068-.087-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.031-.03-.06-.038-.094v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-21.481L7.327 8.19l-5.725-3.3v3.095zm8.8 34.79l8.011 4.466v-9.217l-8.01-4.465v9.216zm16.816-5.44l8.008 4.462v-9.196l-8.008-4.462v9.196zm8.807 5.44v-9.217l-8.009-4.465v9.217l8.009 4.465zm-7.21-26.275l-8.007 4.61v9.122l8.007-4.608v-9.124z" fill="#FF2D20"/>
    </svg>
  ),
  PHP: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
      <ellipse cx="12" cy="12" rx="11" ry="5.5" fill="#8892BF"/>
      <text x="5.5" y="14.5" fontSize="6.5" fill="white" fontWeight="bold" fontFamily="monospace">PHP</text>
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
      <path d="M16.5 2.5c-2.5 0-4.5 4.3-4.5 4.3S9.5 2.5 7.5 2.5C4 2.5 2 6.5 2 10.5c0 3.5 1.7 6.5 4 6.5 1.2 0 2.5-.8 3.5-2.2.8-1.1 1.5-1.5 2-1.5s1.2.4 2 1.5c1 1.4 2.3 2.2 3.5 2.2 2.3 0 4-3 4-6.5 0-4-2-8-4.5-8z" fill="#00758F"/>
      <path d="M12 6.8l3 6.7" stroke="#F29111" strokeWidth="1" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
      <path d="M12.5 2C9 2 7.2 6.5 7.2 10.5c0 3.2 1.5 5.8 5 7.2V22h.8v-4.3c3.5-1.4 5-4 5-7.2C18.8 6.5 16 2 12.5 2z" fill="#47A248"/>
      <path d="M12.5 2v20" stroke="#3D8A3E" strokeWidth="0.8"/>
    </svg>
  ),
  Flutter: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
      <path d="M14.5 2.5L4 13l3.5 3.5L18 6.5z" fill="#54C5F8"/>
      <path d="M14.5 2.5l-7 7 3.5 3.5 7-7z" fill="#01579B" opacity="0.85"/>
      <path d="M7.5 16.5l3.5 3.5 7-7-3.5-3.5z" fill="#29B6F6"/>
      <path d="M11 20l2.5 2 5-5-2-2z" fill="#01579B" opacity="0.65"/>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
      <path fillRule="evenodd" d="M22.7 10.9L13.1 1.3a1.55 1.55 0 00-2.2 0L8.8 3.4l2.8 2.8a1.84 1.84 0 012.3 2.35l2.7 2.7a1.84 1.84 0 11-1.5 1.48V19a1.85 1.85 0 11-1.5-.04V12.4a1.85 1.85 0 01-1-2.44L7.8 4.2 1.3 10.7a1.55 1.55 0 000 2.2l9.6 9.6a1.55 1.55 0 002.2 0l9.6-9.6a1.55 1.55 0 000-2z" fill="#F05032"/>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="white"/>
    </svg>
  ),
  'VS Code': (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
      <path d="M17.5 2.1L9.7 9.3 4.3 5.2 2 6.5l5.3 5.5L2 17.5l2.3 1.3 5.4-4.1 7.8 7.2L22 19.8V4.2L17.5 2.1zm.5 15.2l-5.4-5.3 5.4-5.3v10.6z" fill="#007ACC"/>
    </svg>
  ),
  NPM: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
      <rect width="24" height="24" rx="2" fill="#CB3837"/>
      <text x="3" y="16.5" fontSize="9" fill="white" fontWeight="bold" fontFamily="monospace">npm</text>
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
      <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83"/>
      <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF"/>
      <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E"/>
      <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262"/>
      <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE"/>
    </svg>
  ),
  Illustrator: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
      <rect width="24" height="24" rx="3" fill="#FF9A00"/>
      <text x="3.5" y="17" fontSize="11" fill="#2c0a00" fontWeight="bold" fontFamily="serif">Ai</text>
    </svg>
  ),
  Photoshop: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
      <rect width="24" height="24" rx="3" fill="#001E36"/>
      <text x="2.5" y="17" fontSize="11" fill="#31A8FF" fontWeight="bold" fontFamily="serif">Ps</text>
    </svg>
  ),
};

// Fallback logo for any tech not in the logos object above
// Shows first 2 letters of the tech name on a dark background
const DefaultLogo = ({ name }) => (
  <div className="w-5 h-5 flex-shrink-0 rounded bg-zinc-700 flex items-center justify-center">
    <span className="text-[7px] font-bold text-zinc-300 leading-none">
      {name.slice(0, 2).toUpperCase()}
    </span>
  </div>
);

// Skills grouped by category — each tech maps to a logo above
const skills = [
  {
    category: 'FRONTEND',
    techs: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'BACKEND',
    techs: ['Node.js', 'Express', 'Laravel', 'PHP'],
  },
  {
    category: 'DATABASE',
    techs: ['MongoDB', 'MySQL'],
  },
  {
    category: 'MOBILE',
    techs: ['Flutter'],
  },
  {
    category: 'TOOLS & VERSION CONTROL',
    techs: ['Git', 'GitHub', 'VS Code', 'NPM'],
  },
  {
    category: 'DESIGN',
    techs: ['Illustrator', 'Photoshop', 'Figma'],
  },
];

export default function TechStack() {
  return (
    // Section id="skills" links it to navbar scroll
    <section id="skills" className="min-h-screen w-full bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section header — centered, animates in on scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
            What I Work With
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Tech Stack & Skills
          </h2>
        </motion.div>

        {/* Skills grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, gi) => (
            // Each card staggered with slight delay based on index
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.08 }} // 0s, 0.08s, 0.16s...
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 hover:border-zinc-700 transition-colors"
            >
              {/* Category label — small uppercase tracking */}
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5">
                {group.category}
              </p>

              {/* Tech badges — each shows logo + name side by side */}
              <div className="flex flex-wrap gap-2">
                {group.techs.map((tech, ti) => (
                  <motion.div
                    key={ti}
                    whileHover={{ scale: 1.05 }} // slight grow on hover
                    className="flex items-center gap-2 rounded-lg border border-zinc-700/60 bg-zinc-800/70 px-3 py-2 text-sm font-medium text-zinc-300 cursor-default transition-colors hover:border-zinc-600 hover:bg-zinc-800"
                  >
                    {/* Show real logo or fallback to initials */}
                    {logos[tech] || <DefaultLogo name={tech} />}
                    <span>{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}