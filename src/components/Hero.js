export default function Hero() {
  return (
    // Full screen hero — id="home" links it to navbar scroll
    <div id="home" className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      {/* Hero content — centered on screen */}
      <div className="relative z-10 flex h-screen w-full flex-col items-center justify-center px-4 text-center">

        {/* Subtitle / role */}
        <p className="mb-3 text-sm font-medium tracking-widest uppercase text-zinc-500">
          Full Stack Developer & Graphic Designer
        </p>

        {/* Main name heading */}
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          Peter Jakes
        </h1>

        {/* Short tagline */}
        <p className="max-w-md text-base leading-relaxed text-zinc-500">
          Building clean digital experiences with code and design.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {/* Primary CTA — takes user to projects */}
          <a
            href="#projects"
            className="rounded-lg border border-zinc-700 bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
          >
            View Projects
          </a>
          {/* Secondary CTA — takes user to contact */}
          <a
            href="#contact"
            className="rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-zinc-800/50"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </div>
  );
}