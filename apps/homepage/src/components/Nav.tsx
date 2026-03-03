export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-dark/80 backdrop-blur-md border-b border-white/5">
      <a href="#" className="text-xl font-bold text-text-light tracking-tight">
        milady
      </a>
      <div className="hidden md:flex items-center gap-8">
        <a href="#privacy" className="text-sm text-text-muted hover:text-text-light transition-colors duration-300">
          Privacy
        </a>
        <a href="#defi" className="text-sm text-text-muted hover:text-text-light transition-colors duration-300">
          DeFi
        </a>
        <a href="#features" className="text-sm text-text-muted hover:text-text-light transition-colors duration-300">
          Features
        </a>
        <a
          href="#download"
          className="text-sm font-medium text-dark bg-brand hover:bg-brand-hover px-4 py-2 rounded-md transition-colors duration-300"
        >
          Download
        </a>
      </div>
    </nav>
  );
}
