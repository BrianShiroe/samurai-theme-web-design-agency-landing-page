"use client";
import { motion } from "framer-motion";
import { ChevronDown, ArrowDownRight } from "lucide-react";

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between p-8 md:p-16 overflow-hidden bg-black">
      
      {/* Background with Zoom */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.2] grayscale contrast-125"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070')" }}
      />

      {/* 1. TOP STATUS BAR - Added pt-4 to create breathing room from the top edge */}
      <div className="relative z-20 pt-4 md:pt-8 flex justify-between items-start font-mono text-xs tracking-[0.3em] text-white/60 uppercase">
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
          <span className="text-green-400 italic font-medium">Uplink_Status: Stable</span>
        </motion.div>
      </div>

      {/* 2. INTERACTIVE VERTICAL SCROLL */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={scrollToNext}
        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-8 cursor-pointer group"
      >
        <span className="font-mono text-xs uppercase tracking-[0.6em] [writing-mode:vertical-rl] text-white font-medium">
          Next_Module
        </span>
        <div className="w-[1px] h-16 bg-white/40 group-hover:bg-brand group-hover:h-20 transition-all duration-500" />
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="bg-white/5 border border-white/20 p-4 group-hover:border-brand group-hover:bg-brand transition-all shadow-lg"
        >
          <ChevronDown className="w-10 h-10 text-white group-hover:text-black transition-colors" />
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
            <span className="h-[2px] w-16 bg-brand"></span>
            Interface_Protocol_v4.0
          </div>

          {/* Reduced size: md:text-7xl (down from 8xl) */}
          <h1 className="font-gaming text-5xl md:text-7xl font-light leading-none uppercase tracking-tight text-white italic mb-8">
            SQUAD <span className="text-brand font-bold drop-shadow-[0_0_20px_rgba(255,0,0,0.5)]">BASED</span> <br />
            <span className="opacity-90">OPERATIONS</span>
          </h1>

          <div className="flex items-start gap-5">
            <ArrowDownRight className="w-8 h-8 text-brand mt-1 flex-shrink-0" />
            <p className="max-w-md font-mono text-sm text-white/70 leading-relaxed uppercase tracking-[0.15em]">
              Engineering high-frequency web experiences from Olongapo City. 
              Built for tactical dominance and extreme performance in the digital space.
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
            className="group relative border-r-[6px] border-brand bg-white text-black px-14 py-6 font-gaming font-bold uppercase italic text-2xl transition-all hover:bg-brand hover:text-white shadow-[12px_12px_0px_rgba(255,0,0,0.2)]"
          >
            Engage_Now
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none border-[2px] border-white/5 m-6 md:m-10" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_6px]" />
    </section>
  );
}