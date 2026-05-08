"use client";
import { motion } from "framer-motion";
import { Target, ShoppingCart, Cpu, ChevronRight } from "lucide-react";

export default function About() {
  const stats = [
    { 
      label: "Deployment_Ready", 
      value: "LANDING PAGES", 
      icon: <Target className="w-6 h-6 text-brand" />, // Increased icon size
      desc: "High-conversion tactical entries." 
    },
    { 
      label: "Scale_Protocol", 
      value: "E-COMMERCE", 
      icon: <ShoppingCart className="w-6 h-6 text-brand" />,
      desc: "Secure digital storefronts."
    },
    { 
      label: "Custom_Builds", 
      value: "CUSTOM APPS", 
      icon: <Cpu className="w-6 h-6 text-brand" />,
      desc: "Bespoke software architecture."
    },
  ];

  return (
    <section id="about" className="relative py-32 px-8 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Side: Text & Brand Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Label size increased to text-xs */}
            <div className="flex items-center gap-4 font-mono text-xs tracking-[0.5em] text-brand uppercase font-bold">
              <span className="h-[2px] w-12 bg-brand"></span>
              Origin: Olongapo_City_PH
            </div>

            {/* Reduced H2 from 7xl to 6xl for cleaner spacing */}
            <h2 className="font-gaming text-5xl md:text-6xl font-light uppercase tracking-tighter text-white italic leading-[1.1]">
              Tactical <span className="text-brand font-bold drop-shadow-[0_0_15px_rgba(255,0,0,0.3)]">Web Solutions</span> <br />
              for Modern Brands.
            </h2>

            {/* Decorative Tactical Image */}
            <div className="relative w-full h-80 border border-white/10 overflow-hidden group">
               <div className="absolute inset-0 bg-brand/20 z-10 mix-blend-overlay group-hover:bg-transparent transition-all duration-700" />
               <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070" 
                alt="Cyber Security Terminal"
                className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute bottom-4 left-4 z-20 font-mono text-[10px] tracking-widest text-white/60 bg-black/90 px-3 py-1.5 border border-white/10">
                 IMG_SCAN_092.JPG // SYSTEM_VIEW
               </div>
            </div>

            {/* Paragraph text increased to text-sm */}
            <p className="font-mono text-sm text-white/60 leading-relaxed uppercase tracking-widest max-w-xl">
              Based in Olongapo City, we engineer digital interfaces that demand attention. 
              No generic templates—just high-performance, precision code built for the next generation of the web.
            </p>
          </motion.div>

          {/* Right Side: Icon Grid */}
          <div className="grid grid-cols-1 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex items-center justify-between border border-white/5 bg-white/[0.02] p-10 hover:bg-brand/5 hover:border-brand/40 transition-all cursor-crosshair"
              >
                <div className="flex items-center gap-8">
                  <div className="p-5 bg-white/5 border border-white/10 group-hover:border-brand/50 group-hover:bg-brand/10 transition-all">
                    {stat.icon}
                  </div>
                  <div>
                    {/* Label size increased to text-[10px] */}
                    <p className="font-mono text-[10px] text-brand mb-2 tracking-[0.4em] font-bold">
                      // {stat.label}
                    </p>
                    <h3 className="font-gaming text-3xl text-white font-bold tracking-tight group-hover:text-brand transition-colors">
                      {stat.value}
                    </h3>
                    {/* Desc size increased to text-xs */}
                    <p className="font-mono text-xs text-white/40 uppercase mt-2 italic tracking-wider">
                      {stat.desc}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-white/10 group-hover:text-brand transition-all group-hover:translate-x-3" />
                
                {/* Tactical Corner Decoration */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10 group-hover:border-brand transition-colors" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Background HUD Detail */}
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none hidden lg:block">
        <div className="font-mono text-9xl font-bold text-white uppercase tracking-tighter select-none">
          ABOUT_US
        </div>
      </div>
    </section>
  );
}