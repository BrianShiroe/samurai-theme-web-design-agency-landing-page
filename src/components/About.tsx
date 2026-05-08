"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-8 bg-main-bg overflow-hidden border-t border-brand/20 transition-colors duration-500">
      
      {/* Background HUD Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-tactical-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto pt-8 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Briefing */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-10"
          >
            <div className="inline-flex items-center gap-4">
              <span className="h-[2px] w-12 bg-brand"></span>
              <span className="font-mono text-xs tracking-[0.5em] text-brand uppercase italic animate-pulse font-bold">
                Mission_Control_v.04
              </span>
            </div>
            
            <h2 className="font-gaming text-6xl md:text-7xl font-light uppercase tracking-tighter text-main-text italic leading-[0.9]">
              Request <br />
              <motion.span 
                whileHover={{ skewX: -10 }}
                className="text-brand font-bold drop-shadow-[0_0_20px_var(--brand-glow)] cursor-default inline-block transition-all duration-300"
              >
                Extraction
              </motion.span>
            </h2>
            
            <p className="font-mono text-sm text-main-text/50 leading-relaxed uppercase tracking-[0.2em] max-w-sm">
              Current Status: <span className="text-main-text font-bold tracking-widest">Awaiting_Input</span> <br />
              Location: <span className="text-main-text">Remote_Sector_04</span>
            </p>

            <div className="pt-4 space-y-6">
              <motion.div 
                whileHover={{ x: 10 }}
                className="group cursor-pointer inline-block"
              >
                <p className="font-mono text-xs text-brand mb-2 transition-all group-hover:tracking-widest font-bold">// COMM_LINK</p>
                <p className="font-gaming text-3xl text-main-text transition-transform group-hover:text-brand">
                  ops@core-studio.io
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Data Input Terminal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* HUD Corner Brackets */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-brand/50" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-brand/50" />
            
            <form className="bg-card backdrop-blur-xl border border-tactical-border p-8 md:p-12 space-y-8 relative overflow-hidden">
              <div className="grid grid-cols-1 gap-8">
                
                {/* Name Input */}
                <div className="relative group">
                  <label className="font-mono text-[10px] text-main-text/40 uppercase tracking-[0.3em] group-focus-within:text-brand transition-colors font-bold">
                    Operator_Identity
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-tactical-border py-3 font-gaming text-main-text focus:outline-none focus:border-brand transition-all placeholder:text-main-text/10 text-base"
                    placeholder="ENTER NAME"
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-brand w-0 group-focus-within:w-full transition-all duration-500 shadow-[0_0_10px_var(--brand-glow)]" />
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <label className="font-mono text-[10px] text-main-text/40 uppercase tracking-[0.3em] group-focus-within:text-brand transition-colors font-bold">
                    Signal_Channel
                  </label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-transparent border-b border-tactical-border py-3 font-gaming text-main-text focus:outline-none focus:border-brand transition-all placeholder:text-main-text/10 text-base"
                    placeholder="EMAIL@PROTOCOL.IO"
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-brand w-0 group-focus-within:w-full transition-all duration-500 shadow-[0_0_10px_var(--brand-glow)]" />
                </div>

                {/* Message Input */}
                <div className="relative group">
                  <label className="font-mono text-[10px] text-main-text/40 uppercase tracking-[0.3em] group-focus-within:text-brand transition-colors font-bold">
                    Objectives
                  </label>
                  <textarea 
                    rows={2}
                    className="w-full bg-transparent border-b border-tactical-border py-3 font-gaming text-main-text focus:outline-none focus:border-brand transition-all placeholder:text-main-text/10 resize-none text-base"
                    placeholder="SPECIFY MISSION PARAMETERS..."
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-brand w-0 group-focus-within:w-full transition-all duration-500 shadow-[0_0_10px_var(--brand-glow)]" />
                </div>

              </div>

              {/* Tactical Submit Button */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group relative w-full h-14 bg-transparent border border-brand/50 flex items-center justify-center overflow-hidden transition-all hover:border-brand"
              >
                <div className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                
                <span className="relative z-10 font-gaming font-bold uppercase italic text-brand group-hover:text-main-bg text-lg tracking-tighter transition-colors duration-300">
                  Initiate_Transmission
                </span>

                <div className="absolute top-0 right-0 p-1">
                   <div className="w-1.5 h-1.5 bg-brand group-hover:bg-main-bg transition-colors animate-pulse" />
                </div>
              </motion.button>

              <p className="font-mono text-[9px] text-center text-main-text/30 uppercase tracking-[0.4em] font-bold">
                Secure_Link_Established // No_Interception_Detected
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}