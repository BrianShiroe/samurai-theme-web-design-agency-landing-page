"use client";

export default function Footer() {
  return (
    <footer className="bg-main-bg py-10 md:py-16 px-6 md:px-10 border-t border-tactical-border transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-center gap-12 md:gap-16">
        
        {/* Left: Metadata & Credit */}
        <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left w-full md:w-auto">
          <div className="flex items-center gap-3 font-mono text-[12px] md:text-[14px] tracking-[0.4em] md:tracking-[0.5em] text-brand font-black uppercase">
            <span className="text-[10px] md:text-[12px] animate-pulse">▶</span>
            <span>// Blade_Sheathed</span>
          </div>
          
          <div className="space-y-4 md:space-y-3">
            <div className="text-[13px] md:text-[15px] text-main-text/80 font-mono tracking-[0.1em] md:tracking-[0.15em] uppercase font-bold leading-relaxed">
              © 2026 Samurai Web Design <br className="md:hidden" /> 
              <span className="hidden md:inline mx-2 text-main-text/20">//</span> 
              PH_UAE_USA
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-3 text-[11px] md:text-[13px] font-mono tracking-[0.2em] md:tracking-[0.25em] text-main-text/40 uppercase font-medium">
              <span className="opacity-50">Forged_by:</span> 
              <a 
                href="https://github.com/BrianShiroe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-main-text/90 font-bold group hover:text-brand cursor-crosshair transition-all underline decoration-brand/20 underline-offset-8 hover:underline-offset-4"
              >
                Brian Haw (BrianShiroe)
              </a>
            </div>
          </div>
        </div>

        {/* Right: Signal Channels - Desktop labels maintained */}
        <div className="flex flex-row flex-wrap justify-center md:justify-end gap-6 md:gap-10 text-[12px] md:text-[14px] font-mono uppercase tracking-[0.2em] md:tracking-[0.35em] font-black">
          
          <a 
            href="https://github.com/BrianShiroe" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:gap-3 text-main-text/70 hover:text-brand transition-all duration-300 relative group p-2"
          >
            <img 
              src="/icons/github-brands-solid-full.svg" 
              alt="GitHub" 
              className="w-5 h-5 dark:invert-0 invert opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" 
            />
            <span className="hidden lg:inline">GitHub</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand transition-all group-hover:w-full shadow-[0_0_10px_var(--brand-glow)]" />
          </a>

          <a 
            href="https://www.linkedin.com/in/brianshiroe/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:gap-3 text-main-text/70 hover:text-brand transition-all duration-300 relative group p-2"
          >
            <img 
              src="/icons/linkedin-brands-solid-full.svg" 
              alt="LinkedIn" 
              className="w-5 h-5 dark:invert-0 invert opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" 
            />
            <span className="hidden lg:inline">LinkedIn</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand transition-all group-hover:w-full shadow-[0_0_10px_var(--brand-glow)]" />
          </a>
          
          <a 
            href="https://brianshiroe.vercel.app" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:gap-3 text-main-text/70 hover:text-brand transition-all duration-300 relative group p-2"
          >
            <img 
              src="/icons/firefoxbrowser.svg" 
              alt="Website" 
              className="w-5 h-5 dark:invert-0 invert opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" 
            />
            <span className="hidden lg:inline">Portfolio</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand transition-all group-hover:w-full shadow-[0_0_10px_var(--brand-glow)]" />
          </a>
        </div>
        
      </div>

      {/* Decorative HUD Footer Line */}
      <div className="max-w-7xl mx-auto mt-12 md:mt-16 flex items-center gap-4 md:gap-6">
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-tactical-border to-transparent opacity-30 md:opacity-40" />
        <div className="w-2 md:w-3 h-2 md:h-3 bg-brand/10 rotate-45 border border-brand/30 animate-pulse flex items-center justify-center">
            <div className="w-1 h-1 bg-brand" />
        </div>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-tactical-border to-transparent opacity-30 md:opacity-40" />
      </div>
    </footer>
  );
}