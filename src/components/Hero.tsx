"use client";
import { motion } from "framer-motion";
import { ChevronDown, ArrowDownRight } from "lucide-react";

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between p-8 md:p-16 overflow-hidden bg-main-bg transition-colors duration-500">
      
      {/* Background with Zoom - Increased brightness for light mode compatibility */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.3] md:brightness-[0.2] grayscale contrast-125 data-[system=light]:brightness-[0.8] data-[system=light]:opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070')" }}
      />

      {/* 1. TOP STATUS BAR */}
      <div className="relative z-20 pt-4 md:pt-8 flex justify-between items-start font-mono text-xs tracking-[0.3em] text-main-text/60 uppercase">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-brand animate-pulse" />
            System_Initialization // 2026
          </div>
          <div className="text-brand tracking-widest font-bold">
            Targeting: Global_Market
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-right flex flex-col items-end gap-1"
        >
          <span>Sector: Olongapo_PH</span>
          {/* Status color adapts slightly for light mode legibility */}
          <span className="text-green-500 dark:text-green-400 italic font-medium">Uplink_Status: Stable</span>
        </motion.div>
      </div>

      {/* 2. INTERACTIVE VERTICAL SCROLL */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={scrollToNext}
        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-6 cursor-pointer group"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.6em] [writing-mode:vertical-rl] text-main-text font-medium opacity-70">
          Next_Module
        </span>
        <div className="w-[1px] h-12 bg-tactical-border group-hover:bg-brand transition-all duration-500" />
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="bg-card border border-tactical-border p-2.5 group-hover:border-brand group-hover:bg-brand transition-all shadow-lg"
        >
          <ChevronDown className="w-6 h-6 text-main-text group-hover:text-main-bg transition-colors" />
        </motion.div>
      </motion.div>

      {/* 3. BOTTOM AREA */}
      <div className="relative z-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
        
        {/* Left: Main Heading */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-4 font-mono text-xs tracking-[0.4em] text-brand uppercase mb-6 font-bold">
            <span className="h-[2px] w-12 bg-brand"></span>
            Interface_Protocol_v4.0
          </div>

          <h1 className="font-gaming text-5xl md:text-7xl font-light leading-none uppercase tracking-tight text-main-text italic mb-8">
            SQUAD <span className="text-brand font-bold drop-shadow-[0_0_15px_var(--brand-glow)]">BASED</span> <br />
            <span className="opacity-90">OPERATIONS</span>
          </h1>

          <div className="flex items-start gap-4">
            <ArrowDownRight className="w-5 h-5 text-brand mt-1 flex-shrink-0 opacity-80" />
            <p className="max-w-md font-mono text-sm text-main-text/70 leading-relaxed uppercase tracking-[0.15em]">
              Engineering high-frequency web experiences from Olongapo City. 
              Built for tactical dominance and performance.
            </p>
          </div>
        </motion.div>

        {/* Right: Primary Action Button */}
        <motion.div 
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.button 
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative border-r-[4px] border-brand bg-main-text text-main-bg px-10 py-4 font-gaming font-bold uppercase italic text-xl transition-all hover:bg-brand hover:text-white shadow-[8px_8px_0px_var(--tactical-border)]"
          >
            Engage_Now
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none border-[1px] border-tactical-border m-6 md:m-10" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(var(--main-text)_50%,transparent_50%)] bg-[length:100%_6px] opacity-[0.03]" />
    </section>
  );
}