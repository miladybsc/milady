import { motion, Variants } from "framer-motion";

export function HeroBackground() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section
      className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 pointer-events-none overflow-hidden"
    >
      {/* HUD Frame Elements */}
      <div className="absolute top-12 left-12 w-6 h-6 border-t-2 border-l-2 border-white/20"></div>
      <div className="absolute top-12 right-12 w-6 h-6 border-t-2 border-r-2 border-white/20"></div>
      <div className="absolute bottom-12 left-12 w-6 h-6 border-b-2 border-l-2 border-white/20"></div>
      <div className="absolute bottom-12 right-12 w-6 h-6 border-b-2 border-r-2 border-white/20"></div>

      {/* Crosshairs & Grid Lines */}
      <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-white/[0.03]"></div>
      <div className="absolute top-0 bottom-0 right-[20%] w-[1px] bg-white/[0.03]"></div>
      <div className="absolute top-[30%] left-0 right-0 h-[1px] bg-white/[0.03]"></div>

      {/* Central Editorial Content */}
      <motion.div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-white/10 text-xs font-mono tracking-[0.2em] text-white/50 bg-black/50 backdrop-blur-md">
            <span className="w-1.5 h-1.5 bg-brand animate-pulse"></span>
            <span>SYS.MILADY_APP_V1.0</span>
          </div>
          <div className="inline-flex items-center px-3 py-1 bg-brand/10 border border-brand/20 text-[10px] font-mono tracking-[0.2em] text-brand rounded backdrop-blur-md uppercase">
            Powered by @ElizaOS
          </div>
        </motion.div>

        {/* Massive clipping typography - Background Layer */}
        {/* Restore white/yellow color scheme and solid readability */}
        <motion.h1
          variants={itemVariants}
          className="text-[12vw] sm:text-[14vw] lg:text-[16vw] font-black leading-[0.8] tracking-tighter uppercase text-white/95 flex flex-col items-center pointer-events-none select-none mt-12"
        >
          <span>AGENTIC</span>
          <span className="text-brand drop-shadow-lg">CORE</span>
        </motion.h1>
      </motion.div>
    </section>
  );
}

export function HeroForeground() {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="absolute inset-0 flex flex-col items-center justify-end px-6 md:px-12 pointer-events-none overflow-hidden pb-32">
      <motion.div
        className="relative z-10 w-full flex flex-col items-center translate-y-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } }
        }}
      >

        <motion.div variants={itemVariants} className="w-full max-w-lg mx-auto flex flex-col md:flex-row gap-4 pointer-events-auto">
          {/* CTA buttons - Hardcore Flat Minimalist */}
          <button className="flex-1 group relative flex items-center justify-center gap-3 bg-brand text-dark border border-brand hover:bg-white hover:border-white px-8 py-4 transition-colors duration-300 font-mono text-xs uppercase tracking-widest font-bold">
            <AppleIcon />
            <div className="flex flex-col items-start">
              <span>MAC OS</span>
              <span className="text-[9px] opacity-60 font-medium tracking-widest mt-0.5">COMING SOON</span>
            </div>
          </button>

          <button className="flex-1 group relative flex items-center justify-center gap-3 bg-black/80 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-dark px-8 py-4 transition-colors duration-300 font-mono text-xs uppercase tracking-widest font-bold">
            <WindowsIcon />
            <div className="flex flex-col items-start">
              <span>WINDOWS</span>
              <span className="text-[9px] opacity-60 font-medium tracking-widest mt-0.5">COMING SOON</span>
            </div>
          </button>
        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/30 font-mono text-[10px] tracking-widest uppercase pointer-events-auto"
      >
        <span>INITIALIZING SEQUENCE</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent"></div>
      </motion.div>

    </section>
  );
}

export function AppleIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export function WindowsIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 12V6.5l8-1.1V12H3zm0 .5h8v6.6l-8-1.1V12.5zM11.5 12V5.3l9.5-1.3V12h-9.5zm0 .5H21v7.8l-9.5-1.3v-6.5z" />
    </svg>
  );
}

