export function Hero() {
  return (
    <section
      id="download"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-secondary to-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(240,185,11,0.08)_0%,_transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-6">
          Your Local AI
          <br />
          <span className="text-brand">Companion</span>
        </h1>
        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
          Privacy-first AI that runs on your machine. No cloud. No tracking.
          Natively on BSC.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            disabled
            className="group relative flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 text-text-light px-8 py-4 rounded-lg transition-all duration-300 cursor-not-allowed opacity-80"
          >
            <AppleIcon />
            <div className="text-left">
              <span className="block text-xs text-text-muted">Coming Soon</span>
              <span className="block text-sm font-semibold">Download for Mac</span>
            </div>
          </button>
          <button
            disabled
            className="group relative flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 text-text-light px-8 py-4 rounded-lg transition-all duration-300 cursor-not-allowed opacity-80"
          >
            <WindowsIcon />
            <div className="text-left">
              <span className="block text-xs text-text-muted">Coming Soon</span>
              <span className="block text-sm font-semibold">Download for Windows</span>
            </div>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function WindowsIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 12V6.5l8-1.1V12H3zm0 .5h8v6.6l-8-1.1V12.5zM11.5 12V5.3l9.5-1.3V12h-9.5zm0 .5H21v7.8l-9.5-1.3v-6.5z" />
    </svg>
  );
}
