import { motion } from 'framer-motion';

export default function Footer() {
  // Dynamically gets current year — no need to manually update every year
  const currentYear = new Date().getFullYear();

  return (
    // Border top separates footer from contact section
    <footer className="w-full border-t border-zinc-800 bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Single row — fades in when scrolled into view */}
        {/* flex-wrap allows items to stack on smaller screens */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-between gap-8 flex-wrap"
        >

          {/* Logo and tagline — left side */}
          <div className="flex items-center gap-3">
            <div>
              <h3 className="text-lg font-bold text-zinc-100">
                PJ<span className="text-zinc-500">.</span>
              </h3>
              {/*  tagline  */}
              <p className="text-xs text-zinc-600">
                Building clean digital experiences.
              </p>
            </div>
          </div>

          {/* Copyright — center */}
          {/* currentYear updates automatically every year */}
          <p className="text-sm text-zinc-600">
            © {currentYear} Peter Jakes. All rights reserved.
          </p>

          {/* Social links — right side, scale up on hover */}
          <div className="flex gap-8">
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
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-300"
                whileHover={{ scale: 1.1 }} // slight scale up on hover
              >
                {link.label}
              </motion.a>
            ))}
          </div>

        </motion.div>
      </div>
    </footer>
  );
}