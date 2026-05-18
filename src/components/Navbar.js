import { useState } from 'react';

export default function Navbar() {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  // Scrolls smoothly to the clicked section using its id
  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' }); // ?. prevents error if element not found
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo / Brand */}
          <a href="#home" className="text-lg font-bold tracking-tight text-zinc-100">
            PJ<span className="text-zinc-500">.</span>
          </a>

          {/* Desktop nav links — clicking scrolls to section */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)} // trigger smooth scroll on click
                className="text-sm font-medium text-zinc-500 hover:text-zinc-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-zinc-300 hover:text-zinc-100">☰</button>

        </div>
      </div>
    </nav>
  );
}