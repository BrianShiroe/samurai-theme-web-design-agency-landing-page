"use client";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-brand/30 bg-main-bg/90 backdrop-blur-lg transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between font-mono">
        
        {/* Logo Section - Increased size and spacing */}
        <div className="font-black text-2xl tracking-tighter uppercase group cursor-pointer">
          <span className="text-main-text transition-colors duration-500">TACTICAL</span>
          <span className="text-brand group-hover:animate-pulse">_OS</span>
        </div>
        
        <div className="flex items-center gap-10">
          {/* Navigation Links - Boosted size from 10px to 12px and opacity to 80% */}
          <nav className="hidden md:flex gap-8 text-[12px] font-bold uppercase tracking-[0.25em] text-main-text/80">
            <a href="#about" className="hover:text-brand transition-all py-2">Network</a>
            <a href="#projects" className="hover:text-brand transition-all py-2">Projects</a>
            <a href="#contact" className="hover:text-brand transition-all py-2">Contact</a>
          </nav>
          
          <div className="flex items-center gap-6 border-l border-tactical-border pl-6">
            {/* Tactical Settings Switcher */}
            <ThemeSwitcher />
            
            {/* Action Button - Slightly larger padding for better hit-box and legibility */}
            <button className="px-6 py-2 text-[11px] font-black uppercase border-2 border-brand text-brand hover:bg-brand hover:text-main-bg transition-all duration-300 shadow-[0_0_15px_var(--brand-glow)] hover:shadow-none">
              INITIALIZE_
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}