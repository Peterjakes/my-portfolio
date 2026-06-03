import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
  // Tracks which category filter is active — defaults to showing all
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack online store built with React, Node.js, and MongoDB with Stripe integration.',
      category: 'web',
      image: '/projects/ecommerce-app.jpg',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/pjkiberu/ecommerce-platform',
      demo: 'https://ecommerce-demo.example.com',
      video: 'https://youtu.be/dQw4w9WgXcQ',
    },
    {
      id: 2,
      title: 'Fitness Tracker App',
      description: 'Cross-platform mobile app built with Flutter for tracking workouts and nutrition.',
      category: 'mobile',
      image: '/projects/mobile-app.jpg',
      tech: ['Flutter', 'Firebase'],
      github: 'https://github.com/pjkiberu/fitness-tracker',
      demo: 'https://play.google.com/store/apps/details?id=com.pjkiberu.fitnesstracker',
      video: 'https://youtu.be/fitness-demo-video',
    },
    {
      id: 3,
      title: 'Brand Identity Suite',
      description: 'Complete brand identity design including logo, stationery, and brand guidelines.',
      category: 'design',
      image: '/projects/brand-identity.jpg',
      tech: ['Illustrator', 'Photoshop'],
      demo: 'https://behance.net/pjkiberu/brand-identity',
    },
    {
      id: 4,
      title: 'SaaS Analytics Dashboard',
      description: 'Real-time analytics dashboard with data visualization built with React and Laravel API.',
      category: 'web',
      image: '/projects/saas-dashboard.jpg',
      tech: ['React', 'Laravel', 'PHP'],
      github: 'https://github.com/pjkiberu/analytics-dashboard',
      demo: 'https://analytics-demo.example.com',
      video: 'https://youtu.be/analytics-demo-video',
    },
    {
      id: 5,
      title: 'REST API Platform',
      description: 'Scalable RESTful API built with Laravel serving multiple client applications.',
      category: 'web',
      image: '/projects/api-platform.jpg',
      tech: ['Laravel', 'PHP', 'MySQL'],
      github: 'https://github.com/pjkiberu/rest-api',
      demo: 'https://api-docs.example.com',
    },
    {
      id: 6,
      title: 'Creative Print Designs',
      description: 'Collection of poster designs, illustrations, and print media for various clients.',
      category: 'design',
      image: '/projects/poster-design.jpg',
      tech: ['Illustrator', 'Photoshop'],
      demo: 'https://behance.net/pjkiberu/print-designs',
    },
  ];

  const categories = ['all', 'web', 'mobile', 'design'];

  // Filter projects — show all if filter is 'all'
  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="min-h-screen w-full bg-zinc-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Centered header — matches target */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-500">
            Portfolio
          </p>
          <h2 className="mb-3 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-md text-zinc-500">
            A selection of my recent work across web development, mobile, and design.
          </p>
        </motion.div>

        {/* Filter buttons — centered */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap gap-3 justify-center"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-zinc-100 text-zinc-900'
                  : 'border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 transition-colors hover:border-zinc-600"
              >
                {/* Project image */}
                <div className="relative h-52 overflow-hidden bg-zinc-800">
                  <motion.img
                    src={work.image}
                    alt={work.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category pill */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-black/60 backdrop-blur-sm border border-zinc-700 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                      {work.category}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-semibold text-zinc-100">{work.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-zinc-500">{work.description}</p>

                  {/* Tech tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {work.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-zinc-800 border border-zinc-700 px-2.5 py-1 text-xs font-medium text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 flex-wrap">
                    {work.demo && (
                      <motion.a
                        href={work.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-fit rounded-lg bg-blue-600 px-3 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-blue-500"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        🌐 Demo
                      </motion.a>
                    )}
                    {work.video && (
                      <motion.a
                        href={work.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-fit rounded-lg bg-red-600 px-3 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-red-500"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        ▶ Video
                      </motion.a>
                    )}
                    {work.github && (
                      <motion.a
                        href={work.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-fit rounded-lg border border-zinc-700 px-3 py-2 text-center text-xs font-semibold text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
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