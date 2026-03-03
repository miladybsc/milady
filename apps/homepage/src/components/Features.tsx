const features = [
  {
    title: "Multi-Model",
    description: "Claude, GPT, Ollama, Groq, DeepSeek — use any model you want.",
  },
  {
    title: "Cross-Platform",
    description: "Desktop, web, and mobile. One AI companion everywhere.",
  },
  {
    title: "Custom Personality",
    description: "Define your AI's character, voice, and behavior. Make it truly yours.",
  },
  {
    title: "Plugin System",
    description: "Extend with plugins for Twitch, YouTube, trading, and more.",
  },
  {
    title: "Knowledge Base",
    description: "Feed documents and URLs. Your AI learns what you teach it.",
  },
  {
    title: "Autonomous Loops",
    description: "Set goals and let your AI work toward them independently.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 px-6 md:px-12 bg-dark">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <p className="text-sm font-medium text-brand uppercase tracking-widest mb-4">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] max-w-3xl">
            Everything you need.
            <br />
            Nothing you don't.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-white/[0.06] hover:border-brand/30 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
