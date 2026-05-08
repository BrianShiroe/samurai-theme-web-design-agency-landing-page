"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-8 bg-black overflow-hidden border-t border-brand/10">
      
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
            
            {/* Reduced H2 size to 7xl to match Hero/About refinement */}
            <h2 className="font-gaming text-6xl md:text-7xl font-light uppercase tracking-tighter text-white italic leading-[0.9]">
              Request <br />
              <motion.span 
                whileHover={{ skewX: -10, color: "#fff" }}
                className="text-brand font-bold drop-shadow-[0_0_20px_rgba(255,0,0,0.4)] cursor-default inline-block transition-all duration-300"
              >
                Extraction
              </motion.span>
            </h2>
            
            {/* Increased text size to text-sm */}
            <p className="font-mono text-sm text-white/50 leading-relaxed uppercase tracking-[0.2em] max-w-sm">
              Current Status: <span className="text-white font-bold tracking-widest">Awaiting_Input</span> <br />
              Location: <span className="text-white">Remote_Sector_04</span>
            </p>

            <div className="pt-4 space-y-6">
              <motion.div 
                whileHover={{ x: 10 }}
                className="group cursor-pointer inline-block"
              >
                <p className="font-mono text-xs text-brand mb-2 transition-all group-hover:tracking-widest font-bold">// COMM_LINK</p>
                <p className="font-gaming text-3xl text-white transition-transform">
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
            <div className="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-l-2 border-brand/50" />
            <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-brand/50" />
            
            <form className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-10 md:p-14 space-y-10 relative overflow-hidden">
              <div className="grid grid-cols-1 gap-10">
                
                {/* Name Input */}
                <div className="relative group">
                  <label className="font-mono text-xs text-white/40 uppercase tracking-[0.3em] group-focus-within:text-brand transition-colors font-bold">
                    Operator_Identity
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 font-gaming text-white focus:outline-none focus:border-brand transition-all placeholder:text-white/5 text-lg"
                    placeholder="ENTER NAME"
                  />
                  <div className="absolute bottom-0 left-0 h-[2px] bg-brand w-0 group-focus-within:w-full transition-all duration-500 shadow-[0_0_10px_#ff0000]" />
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <label className="font-mono text-xs text-white/40 uppercase tracking-[0.3em] group-focus-within:text-brand transition-colors font-bold">
                    Signal_Channel
                  </label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 font-gaming text-white focus:outline-none focus:border-brand transition-all placeholder:text-white/5 text-lg"
                    placeholder="EMAIL@PROTOCOL.IO"
                  />
                  <div className="absolute bottom-0 left-0 h-[2px] bg-brand w-0 group-focus-within:w-full transition-all duration-500 shadow-[0_0_10px_#ff0000]" />
                </div>

                {/* Message Input */}
                <div className="relative group">
                  <label className="font-mono text-xs text-white/40 uppercase tracking-[0.3em] group-focus-within:text-brand transition-colors font-bold">
                    Objectives
                  </label>
                  <textarea 
                    rows={3}
                    className="w-full bg-transparent border-b border-white/10 py-4 font-gaming text-white focus:outline-none focus:border-brand transition-all placeholder:text-white/5 resize-none text-lg"
                    placeholder="SPECIFY MISSION PARAMETERS..."
                  />
                  <div className="absolute bottom-0 left-0 h-[2px] bg-brand w-0 group-focus-within:w-full transition-all duration-500 shadow-[0_0_10px_#ff0000]" />
                </div>

              </div>

              {/* Tactical Submit Button */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group relative w-full h-20 bg-transparent border-2 border-brand/50 flex items-center justify-center overflow-hidden transition-all hover:border-brand"
              >
                <div className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                
                <span className="relative z-10 font-gaming font-bold uppercase italic text-brand group-hover:text-white text-2xl tracking-tighter transition-colors duration-300">
                  Initiate_Transmission
                </span>

                <div className="absolute top-0 right-0 p-1.5">
                   <div className="w-2 h-2 bg-brand group-hover:bg-white transition-colors animate-pulse" />
                </div>
              </motion.button>

              <p className="font-mono text-[10px] text-center text-white/30 uppercase tracking-[0.5em] font-bold">
                Secure_Link_Established // No_Interception_Detected
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}