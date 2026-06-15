import React from 'react';
import { motion } from 'framer-motion';
import AnimatedAvatar from './AnimatedAvatar';

const About = () => {
  return (
    <section id="about" className="min-h-screen w-full bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full">

        {/* Two column grid — text left, avatar right on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Column — Bio Text ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}   // starts left and invisible
            whileInView={{ opacity: 1, x: 0 }}  // slides into position
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}            // only animates once
            className="flex flex-col gap-6"
          >
            <div>
              {/* Section label */}
              <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 mb-4">
                About Me
              </p>

              {/* Stacked heading — each word on its own line for visual impact */}
              <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 leading-tight mb-6">
                Developer.<br />
                Designer.<br />
                Creator.
              </h2>
            </div>

            {/* Bio paragraph 1 — introduction and tech stack */}
            <p className="text-zinc-400 text-lg leading-relaxed">
              I'm Peter Jakes, a full stack software engineer and graphic designer who thrives at the intersection of code and creativity. I build robust, scalable applications using React, Node.js, Laravel, and Flutter, while also crafting visually compelling designs with Adobe Illustrator and Photoshop.
            </p>

            {/* Bio paragraph 2 — work approach and values */}
            <p className="text-zinc-400 text-lg leading-relaxed">
              Whether it's architecting a RESTful API, building a responsive React frontend, or designing a brand identity from scratch, I bring the same attention to detail and passion for quality to every project.
            </p>

            {/* CV download button — blue gradient with shadow glow */}
            <motion.a
              href="/resume-peter-jakes.pdf"
              download
              whileHover={{ scale: 1.03 }} // slight scale up on hover
              whileTap={{ scale: 0.97 }}   // slight press down on click
              className="inline-flex items-center gap-3 w-fit rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-colors hover:bg-blue-500"
            >
              {/* Download SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 4v12m0 0l-4-4m4 4l4-4" />
              </svg>
              Download My CV
            </motion.a>
          </motion.div>

          {/* ── Right Column — Avatar ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}    // starts right and invisible
            whileInView={{ opacity: 1, x: 0 }}  // slides into position
            transition={{ duration: 0.7, delay: 0.15 }} // slight delay after text
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            {/* Avatar with decorative rings and glow */}
            <div className="relative flex items-center justify-center">

              {/* Blue glow blob behind avatar — blur-3xl creates soft diffuse glow */}
              <div className="absolute w-72 h-72 rounded-full bg-blue-600/10 blur-3xl" />

              {/* Inner decorative ring */}
              <div className="absolute w-56 h-56 rounded-full border border-zinc-800" />

              {/* Outer decorative ring — more transparent */}
              <div className="absolute w-72 h-72 rounded-full border border-zinc-800/50" />

              {/* Animated avatar sits above all decorative elements */}
              <AnimatedAvatar />
            </div>

            {/* Available for work badge — pulses gently to draw attention */}
            <motion.div
              animate={{ scale: [1, 1.04, 1] }} // subtle pulse animation
              transition={{ duration: 2.5, repeat: Infinity }}
              className="flex items-center gap-2.5 rounded-full border-2 border-green-500 bg-green-500/10 px-5 py-2.5"
            >
              {/* Ping dot — outer ring animates outward like a sonar pulse */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                {/* Inner solid dot stays in place */}
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-green-400 font-semibold text-sm">Available for work</span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;