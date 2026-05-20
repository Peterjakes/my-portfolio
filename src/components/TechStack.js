// src/components/TechStack.js

import { motion } from 'framer-motion';

export default function TechStack() {
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
    <section id="skills" className="min-h-screen w-full bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section header — animates in when scrolled into view */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}   // starts invisible 20px below
          whileInView={{ opacity: 1, y: 0 }} // animates when scrolled to
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}           // only animates once
          className="mb-12"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-500">
            Skills
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Technologies & Tools
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, groupIndex) => (
            <div
              key={groupIndex}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 transition-colors"
            >
              <h3 className="mb-4 text-lg font-semibold text-zinc-100">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.techs.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}