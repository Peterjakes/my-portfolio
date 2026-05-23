import { motion } from 'framer-motion';

export default function Footer() {
  // Dynamically gets current year — no need to manually update every year
  const currentYear = new Date().getFullYear();

  return (
    // Border top separates footer from contact section
    <footer className="w-full border-t border-zinc-800 bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Top row — animates in when scrolled into view */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}   // starts invisible 20px below
          whileInView={{ opacity: 1, y: 0 }} // slides into position
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}           // only animates once
          className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        >

          {/* Logo and tagline — left aligned on desktop */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-zinc-100">
              PJ<span className="text-zinc-500">.</span>
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Building digital experiences with code and design.
            </p>
          </div>

          {/* Social links — scale up on hover */}
          <div className="flex gap-6">
            {[
              { label: 'GitHub', href: 'https://github.com/pjkiberu' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/pjkiberu' },
              { label: 'Instagram', href: 'https://instagram.com/pjkiberu' },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer" // security best practice for external links
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
                whileHover={{ scale: 1.1 }} // slight scale up on hover
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Copyright row — fades in slightly after top row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }} // slight delay after top row
          viewport={{ once: true }}
          className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-600"
        >
          {/* currentYear updates automatically every year */}
          <p>© {currentYear} Peter Jakes. All rights reserved.</p>
        </motion.div>

      </div>
    </footer>
  );
}