export default function Contact() {
  // Contact methods 
  const contactMethods = [
    {
      label: 'Email',
      value: 'peter@example.com',
      icon: '✉️',
      link: 'mailto:peter@example.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/pjkiberu',
      icon: '💼',
      link: 'https://linkedin.com/in/pjkiberu',
    },
    {
      label: 'GitHub',
      value: 'github.com/pjkiberu',
      icon: '🐙',
      link: 'https://github.com/pjkiberu',
    },
    {
      label: 'WhatsApp',
      value: '+1 (555) 123-4567',
      icon: '💬',
      link: 'https://wa.me/15551234567',
    },
    {
      label: 'Instagram',
      value: '@pjkiberu',
      icon: '📷',
      link: 'https://instagram.com/pjkiberu',
    },
  ];

  return (
    // Section id="contact" links it to navbar scroll
    <section id="contact" className="min-h-screen w-full bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-500">
            Get In Touch
          </p>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Let's Work Together
          </h2>
          <p className="mx-auto max-w-md text-zinc-500">
            Have a project in mind? Let's connect and create something amazing together.
          </p>
        </div>

        {/* Two column layout — contact methods left, form right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact method links */}
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer" // security best practice for external links
                className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 hover:border-zinc-700 transition-colors"
              >
                {/* Icon */}
                <div className="text-2xl">{method.icon}</div>

                {/* Label and value */}
                <div className="flex-1">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">
                    {method.label}
                  </p>
                  <p className="text-zinc-300 font-medium">{method.value}</p>
                </div>

                {/* Arrow indicator */}
                <div className="text-zinc-600">→</div>
              </a>
            ))}
          </div>

          {/* Contact form — basic structure, no submit logic yet */}
          <form className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-zinc-100 placeholder-zinc-600 transition-colors focus:border-zinc-600 focus:outline-none"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-zinc-100 placeholder-zinc-600 transition-colors focus:border-zinc-600 focus:outline-none"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-zinc-100 placeholder-zinc-600 transition-colors focus:border-zinc-600 focus:outline-none resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}