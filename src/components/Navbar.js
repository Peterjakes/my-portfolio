import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  // Tracks which section is currently visible on screen
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];

      // Offset by 100px so section activates slightly before reaching top
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;

          // Check if scroll position is within this section's bounds
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    // Attach scroll listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on unmount to prevent memory leaks
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrolls to section and updates active state immediately on click
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Navbar slides down from top on page load
    <motion.nav
      initial={{ y: -100 }}  // starts 100px above screen
      animate={{ y: 0 }}     // slides to normal position
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo — scales up slightly on hover */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-lg font-bold tracking-tight text-zinc-100"
          >
            PJ<span className="text-zinc-500">.</span>
          </motion.a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === item.id ? 'text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'
                }`}
                whileHover={{ scale: 1.05 }} // slight scale on hover
                whileTap={{ scale: 0.95 }}   // slight shrink on click
              >
                {item.label}

                {/* Animated underline that slides between active nav items */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator" // shared id makes it animate between buttons
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile hamburger — scales on hover/tap */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-zinc-300 hover:text-zinc-100"
          >
            ☰
          </motion.button>

        </div>
      </div>
    </motion.nav>
  );
}