export default function Footer() {
  // Dynamically gets current year — no need to manually update every year
  const currentYear = new Date().getFullYear();

  return (
    // Border top separates footer from contact section
    <footer className="w-full border-t border-zinc-800 bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Top row — logo left, social links right */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">

          {/* Logo and tagline */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-zinc-100">
              PJ<span className="text-zinc-500">.</span>
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Building digital experiences with code and design.
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-6">
            {[
              { label: 'GitHub', href: 'https://github.com/pjkiberu' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/pjkiberu' },
              { label: 'Instagram', href: 'https://instagram.com/pjkiberu' },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer" // security best practice for external links
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright row — border top separates it from links */}
        <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-600">
          {/* currentYear updates automatically every year */}
          <p>© {currentYear} Peter Jakes. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}