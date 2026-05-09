"use client";
import { motion } from "framer-motion";
import { ChevronDown, ArrowDownRight } from "lucide-react";

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
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
    <section className="relative h-screen w-full flex flex-col justify-between p-8 md:p-16 overflow-hidden bg-main-bg transition-colors duration-500 text-white">
      
      {/* Video Background */}
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
          className="w-full h-full object-cover grayscale contrast-110 brightness-[0.45] md:brightness-[0.4] transition-all duration-700 
                     opacity-80 dark:opacity-100"
        >
          <source src="/videos/samurai_loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />
      </motion.div>

      {/* 1. TOP STATUS BAR */}
      <div className="relative z-20 pt-4 md:pt-8 flex justify-between items-start font-mono text-xs tracking-[0.3em] text-white/80 uppercase">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-brand animate-pulse" />
            Warrior_Protocol_v4.0 // 2026
          </div>
          <div className="text-brand tracking-widest font-bold">
            Identity: Samurai_Web_Design
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-right flex flex-col items-end gap-1"
        >
          <span>Sector: Olongapo_PH</span>
          <span className="text-green-500 dark:text-green-400 italic font-bold">Status: Combat_Ready</span>
        </motion.div>
      </div>

      {/* 2. INTERACTIVE VERTICAL SCROLL */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-6"
      >
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center gap-6 group cursor-pointer bg-transparent border-none outline-none"
          aria-label="Scroll to next section"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.6em] [writing-mode:vertical-rl] text-white font-bold transition-colors group-hover:text-brand">
            The_Unfolding
          </span>
          <div className="w-[1px] h-16 bg-tactical-border group-hover:bg-brand transition-all duration-500" />
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="bg-card border border-tactical-border p-3 group-hover:border-brand group-hover:bg-brand transition-all shadow-xl"
          >
            <ChevronDown className="w-6 h-6 text-white group-hover:text-main-bg transition-colors" />
          </motion.div>
        </button>
      </motion.div>

      {/* 3. BOTTOM AREA */}
      <div className="relative z-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-4 font-mono text-xs tracking-[0.4em] text-brand uppercase mb-6 font-black">
            <span className="h-[2px] w-12 bg-brand"></span>
            Precision_Code // Sharp_Aesthetic
          </div>

          <h1 className="font-gaming text-6xl md:text-8xl font-light leading-none uppercase tracking-tighter text-white italic mb-8">
            SAMURAI <span className="text-brand font-bold drop-shadow-[0_0_15px_var(--brand-glow)]">WEB</span> <br />
            <span className="opacity-100">DESIGN</span>
          </h1>

          <div className="flex items-start gap-4">
            <ArrowDownRight className="w-6 h-6 text-brand mt-1 flex-shrink-0" />
            <p className="max-w-md font-mono text-[13px] text-white/90 font-bold leading-relaxed uppercase tracking-[0.2em]">
              Forging high-performance digital weapons from the heart of Olongapo. 
              Built for honor, precision, and market dominance.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.button 
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToNext}
            className="group relative border-r-[6px] border-brand bg-brand text-white px-12 py-5 font-gaming font-black uppercase italic text-2xl transition-all hover:bg-brand/90 shadow-[10px_10px_0px_var(--tactical-border)]"
          >
            Enter_Dojo
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none border-[1px] border-tactical-border m-6 md:m-10 opacity-50" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_50%,transparent_50%)] bg-[length:100%_4px] opacity-20" />
    </section>
  );
}