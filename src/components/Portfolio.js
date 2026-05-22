export default function Portfolio() {
  // Projects data 
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

  return (
    // Section id="projects" links it to navbar scroll
    <section id="projects" className="min-h-screen w-full bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-500">
            Portfolio
          </p>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-md text-zinc-500">
            A selection of my recent work across web development, mobile, and design.
          </p>
        </div>

        {/* Projects grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((work) => (
            <div
              key={work.id}
              className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 transition-colors hover:border-zinc-600"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden bg-zinc-800">
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-full w-full object-cover"
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
                  {/* Demo link  */}
                  {work.demo && (
                    
                     <a href={work.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-fit rounded-lg bg-blue-600 px-3 py-2 text-center text-xs font-medium text-white transition-colors hover:bg-blue-700"
                    >
                      🌐 Demo
                    </a>
                  )}
                  {/* Video link  */}
                  {work.video && (
                    
                     <a href={work.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-fit rounded-lg bg-red-600 px-3 py-2 text-center text-xs font-medium text-white transition-colors hover:bg-red-700"
                    >
                      ▶ Video
                    </a>
                  )}
                  {/* GitHub link  */}
                  {work.github && (
                    
                     <a href={work.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-fit rounded-lg border border-zinc-700 px-3 py-2 text-center text-xs font-medium text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
                    >
                      💻 Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}