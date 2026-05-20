import { motion } from 'framer-motion';

export default function TechStack() {
  // Skills grouped by category 
  const skills = [
    {
      category: 'Frontend',
      techs: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      techs: ['Node.js', 'Express', 'PHP', 'Laravel', 'MySQL'],
    },
    {
      category: 'Mobile',
      techs: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    },
    {
      category: 'Tools',
      techs: ['Git', 'GitHub', 'VS Code', 'Figma', 'Photoshop'],
    },
    {
      category: 'Design',
      techs: ['Illustrator', 'Photoshop', 'Figma', 'UI/UX', 'Branding'],
    },
    {
      category: 'MERN Stack',
      techs: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript'],
    },
  ];

  return (
    // Section id="skills" links it to navbar scroll
    <section id="skills" className="min-h-screen w-full bg-black py-20 px-4 sm:px-6 lg:px-8">
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
            Skills
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Technologies & Tools
          </h2>
        </motion.div>

        {/* Skills grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, groupIndex) => (
            // Each card animates in with staggered delay
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }} // lifts card on hover
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 transition-colors"
            >
              {/* Category title */}
              <h3 className="mb-4 text-lg font-semibold text-zinc-100">
                {skillGroup.category}
              </h3>

              {/* Tech tags — each pops in individually */}
              <div className="flex flex-wrap gap-2">
                {skillGroup.techs.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}  // starts small and invisible
                    whileInView={{ opacity: 1, scale: 1 }} // pops into full size
                    transition={{ duration: 0.4, delay: techIndex * 0.05 }} // staggered: 0s, 0.05s, 0.1s...
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, backgroundColor: '#27272a' }} // grows + bg change on hover
                    className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}