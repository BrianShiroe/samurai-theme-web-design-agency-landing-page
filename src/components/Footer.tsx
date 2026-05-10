"use client";

export default function Footer() {
  return (
    <footer className="bg-main-bg py-6 md:py-10 px-6 md:px-10 border-t border-tactical-border transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-16">
        
        {/* Left: Metadata & Credit */}
        <div className="flex flex-col gap-3 md:gap-4 items-center md:items-start text-center md:text-left w-full md:w-auto">
          <div className="flex items-center gap-3 font-mono text-[10px] md:text-[12px] tracking-[0.3em] md:tracking-[0.5em] text-brand font-black uppercase">
            <span className="text-[8px] md:text-[10px] animate-pulse">▶</span>
            <span>// Blade_Sheathed</span>
          </div>
          
          <div className="space-y-1 md:space-y-2">
            <div className="text-[11px] md:text-[14px] text-main-text/80 font-mono tracking-[0.1em] md:tracking-[0.15em] uppercase font-bold leading-none">
              Copyright @ 2026 Samurai Web <span className="hidden md:inline mx-2 text-main-text/20">//</span> 
              <span className="block md:inline mt-1 md:mt-0">PH_UAE_USA</span>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-2 text-[9px] md:text-[12px] font-mono tracking-[0.15em] text-main-text/40 uppercase font-medium">
              <span className="opacity-50">Forged_by:</span> 
              <a 
                href="https://github.com/BrianShiroe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-main-text/90 font-bold group hover:text-brand transition-all underline decoration-brand/20 underline-offset-4"
              >
                Brian Haw
              </a>
            </div>
          </div>
        </div>

        {/* Right: Signal Channels - Slimmer Icons */}
        <div className="flex flex-row items-center justify-center md:justify-end gap-6 md:gap-8 text-[11px] md:text-[13px] font-mono uppercase tracking-[0.2em] font-black">
          <a 
            href="https://github.com/BrianShiroe" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-main-text/70 hover:text-brand transition-all duration-300 relative group py-1"
            aria-label="GitHub"
          >
            <img src="/icons/github-brands-solid-full.svg" alt="" className="w-4 h-4 md:w-5 md:h-5 dark:invert-0 invert opacity-70 group-hover:opacity-100 transition-all" />
            <span className="hidden lg:inline">GitHub</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/brianshiroe/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-main-text/70 hover:text-brand transition-all duration-300 relative group py-1"
            aria-label="LinkedIn"
          >
            <img src="/icons/linkedin-brands-solid-full.svg" alt="" className="w-4 h-4 md:w-5 md:h-5 dark:invert-0 invert opacity-70 group-hover:opacity-100 transition-all" />
            <span className="hidden lg:inline">LinkedIn</span>
          </a>
          
          <a 
            href="https://brianshiroe.vercel.app" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-main-text/70 hover:text-brand transition-all duration-300 relative group py-1"
            aria-label="Portfolio"
          >
            <img src="/icons/web-svgrepo-com.svg" alt="" className="w-4 h-4 md:w-5 md:h-5 dark:invert-0 invert opacity-70 group-hover:opacity-100 transition-all" />
            <span className="hidden lg:inline">Portfolio</span>
          </a>
        </div>
      </div>

      {/* Decorative HUD Footer Line - Reduced Margin */}
      <div className="max-w-7xl mx-auto mt-6 md:mt-8 flex items-center gap-3">
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-tactical-border to-transparent opacity-20" />
        <div className="w-1.5 h-1.5 bg-brand/20 rotate-45 border border-brand/30 animate-pulse flex items-center justify-center">
            <div className="w-0.5 h-0.5 bg-brand" />
        </div>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-tactical-border to-transparent opacity-20" />
      </div>
    </footer>
  );
}