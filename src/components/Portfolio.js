import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
  // Tracks which category filter is active — defaults to showing all
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack online store with React, Node.js, and MongoDB integration.',
      category: 'web',
      image: '/projects/ecommerce-app.jpg',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/pjkiberu/ecommerce-platform',
      demo: 'https://ecommerce-demo.example.com',
      video: 'https://youtu.be/dQw4w9WgXcQ',
    },
    {
      id: 2,
      title: 'Fitness Tracker App',
      description: 'Cross-platform mobile app built with Flutter for tracking workouts.',
      category: 'mobile',
      image: '/projects/mobile-app.jpg',
      tech: ['Flutter', 'Firebase', 'Dart'],
      github: 'https://github.com/pjkiberu/fitness-tracker',
      demo: 'https://play.google.com/store/apps/details?id=com.pjkiberu.fitnesstracker',
      video: 'https://youtu.be/fitness-demo-video',
    },
    {
      id: 3,
      title: 'Brand Identity Suite',
      description: 'Complete brand identity design including logo and stationery.',
      category: 'design',
      image: '/projects/brand-identity.jpg',
      tech: ['Illustrator', 'Photoshop', 'Figma'],
      demo: 'https://behance.net/pjkiberu/brand-identity',
    },
    {
      id: 4,
      title: 'SaaS Analytics Dashboard',
      description: 'Real-time analytics dashboard built with React and Laravel API.',
      category: 'web',
      image: '/projects/saas-dashboard.jpg',
      tech: ['React', 'Laravel', 'PHP', 'MySQL'],
      github: 'https://github.com/pjkiberu/analytics-dashboard',
      demo: 'https://analytics-demo.example.com',
      video: 'https://youtu.be/analytics-demo-video',
    },
    {
      id: 5,
      title: 'REST API Platform',
      description: 'Scalable RESTful API built with Laravel.',
      category: 'web',
      image: '/projects/api-platform.jpg',
      tech: ['Laravel', 'PHP', 'MySQL', 'API'],
      github: 'https://github.com/pjkiberu/rest-api',
      demo: 'https://api-docs.example.com',
    },
    {
      id: 6,
      title: 'Creative Print Designs',
      description: 'Collection of poster designs and illustrations.',
      category: 'design',
      image: '/projects/poster-design.jpg',
      tech: ['Illustrator', 'Photoshop', 'InDesign'],
      demo: 'https://behance.net/pjkiberu/print-designs',
    },
  ];

  const categories = ['all', 'web', 'mobile', 'design'];

  // Filter projects — show all if filter is 'all'
  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="min-h-screen w-full bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section header — animates in when scrolled into view */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-500">
            Portfolio
          </p>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-md text-zinc-500">
            A selection of my recent work across web development, mobile, and design.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap gap-3 justify-center"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-zinc-100 text-zinc-900'
                  : 'border border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid wrapped in AnimatePresence */}
        {/* AnimatePresence allows cards to animate OUT when filter changes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}   // starts invisible below
                animate={{ opacity: 1, y: 0 }}     // slides into place
                exit={{ opacity: 0, y: -20 }}      // slides up and fades out on filter change
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 transition-colors hover:border-zinc-600"
              >
                {/* Project image — zooms slightly on hover */}
                <div className="relative h-48 overflow-hidden bg-zinc-800">
                  <motion.img
                    src={work.image}
                    alt={work.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Project content */}
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-semibold text-zinc-100">{work.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-zinc-500">{work.description}</p>

                  {/* Tech tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {work.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 flex-wrap">
                    {/* Demo — blue */}
                    {work.demo && (
                      <motion.a
                        href={work.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-fit rounded-lg bg-blue-600 px-3 py-2 text-center text-xs font-medium text-white transition-colors hover:bg-blue-700"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        🌐 Demo
                      </motion.a>
                    )}
                    {/* Video — red */}
                    {work.video && (
                      <motion.a
                        href={work.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-fit rounded-lg bg-red-600 px-3 py-2 text-center text-xs font-medium text-white transition-colors hover:bg-red-700"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        ▶ Video
                      </motion.a>
                    )}
                    {/* GitHub — outlined */}
                    {work.github && (
                      <motion.a
                        href={work.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-fit rounded-lg border border-zinc-700 px-3 py-2 text-center text-xs font-medium text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        💻 Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}