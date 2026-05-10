"use client";
import { motion } from "framer-motion";
import { ChevronDown, ArrowDownRight } from "lucide-react";

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("portfolio");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative h-[100dvh] w-full flex flex-col justify-between p-6 md:p-16 overflow-hidden bg-main-bg transition-colors duration-500 text-white">
      
      {/* Background Layer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale contrast-110 brightness-[0.4] transition-all duration-700 
                     opacity-80 dark:opacity-100"
        >
          <source src="/videos/samurai_loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      </motion.div>

      {/* 1. TOP STATUS BAR - Responsive Flex */}
      <div className="relative z-20 pt-2 md:pt-8 flex flex-row justify-between items-start font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-white/80 uppercase">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col gap-1 md:gap-2"
        >
          <div className="flex items-center gap-2 md:gap-3">
            <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-brand animate-pulse" />
            Core_Engine_v4.0
          </div>
          <div className="text-brand tracking-widest font-bold">
            ID: Samurai_Web
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-right flex flex-col items-end gap-1"
        >
          <span className="hidden sm:block">Region: PH_Sector_7</span>
          <span className="text-brand italic font-bold">Scale_and_Dominate</span>
        </motion.div>
      </div>

      {/* 2. INTERACTIVE SCROLL - Hidden on very small screens or moved for space */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-4 md:gap-6"
      >
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center gap-4 md:gap-6 group cursor-pointer bg-transparent border-none outline-none"
          aria-label="View our methodology"
        >
          <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] [writing-mode:vertical-rl] text-white font-bold transition-colors group-hover:text-brand">
            The_Process
          </span>
          <div className="w-[1px] h-10 md:h-16 bg-tactical-border group-hover:bg-brand transition-all duration-500" />
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="bg-card border border-tactical-border p-2 md:p-3 group-hover:border-brand group-hover:bg-brand transition-all shadow-xl"
          >
            <ChevronDown className="w-4 h-4 md:w-6 md:h-6 text-white group-hover:text-main-bg transition-colors" />
          </motion.div>
        </button>
      </motion.div>

      {/* 3. CORE BRANDING AREA - Mobile Optimized Typography */}
      <div className="relative z-20 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10 pb-4 md:pb-0">
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 md:gap-4 font-mono text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] text-brand uppercase mb-4 md:mb-6 font-black">
            <span className="h-[1px] md:h-[2px] w-8 md:w-12 bg-brand"></span>
            Technical_Excellence
          </div>

          <h1 className="font-gaming text-4xl sm:text-6xl md:text-8xl font-light leading-[0.9] uppercase tracking-tighter text-white italic mb-6 md:mb-8">
            SAMURAI <span className="text-brand font-bold drop-shadow-[0_0_15px_var(--brand-glow)]">WEB</span> <br />
            <span className="opacity-100">AGENCY</span>
          </h1>

          <div className="flex items-start gap-3 md:gap-4">
            <ArrowDownRight className="w-5 h-5 md:w-6 md:h-6 text-brand mt-1 flex-shrink-0" />
            <p className="max-w-[280px] md:max-w-md font-mono text-[11px] md:text-[13px] text-white/90 font-bold leading-relaxed uppercase tracking-[0.15em] md:tracking-[0.2em]">
              High-performance web architecture forged with precision. 
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="w-full md:w-auto"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToNext}
            className="w-full md:w-auto group relative border-r-[4px] md:border-r-[6px] border-brand bg-brand text-white px-8 md:px-12 py-4 md:py-5 font-gaming font-black uppercase italic text-xl md:text-2xl transition-all hover:bg-brand/90 shadow-[6px_6px_0px_var(--tactical-border)] md:shadow-[10px_10px_0px_var(--tactical-border)]"
          >
            Launch_Project
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative HUD Elements - Simplified for Mobile */}
      <div className="absolute inset-0 z-10 pointer-events-none border-[1px] border-tactical-border m-3 md:m-10 opacity-30 md:opacity-50" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_50%,transparent_50%)] bg-[length:100%_3px] opacity-10 md:opacity-20" />
    </section>
  );
}