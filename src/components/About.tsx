"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Rocket, Layout, Globe, MapPin, Briefcase, ShoppingCart, Cpu } from "lucide-react";

export default function About() {
  const highlights = [
    { 
      label: "Corporate Solutions", 
      value: "Business Platforms", 
      desc: "High-performance corporate websites engineered to establish authority and streamline B2B/B2C communications.",
      icon: <Briefcase size={20} /> 
    },
    { 
      label: "E-Commerce", 
      value: "Digital Storefronts", 
      desc: "Scalable Shopify and headless commerce solutions optimized for seamless checkout and global revenue growth.",
      icon: <ShoppingCart size={20} /> 
    },
    { 
      label: "Software Engineering", 
      value: "Custom Applications", 
      desc: "Complex, proprietary web systems and SaaS architecture designed for specific operational requirements.",
      icon: <Cpu size={20} /> 
    },
  ];

  const locations = [
    { city: "New York", region: "USA", zone: "North America" },
    { city: "Dubai", region: "UAE", zone: "Middle East" },
    { city: "Manila", region: "Philippines", zone: "SEA" },
  ];

  return (
    <section id="about" className="relative min-h-screen w-full bg-main-bg py-16 md:py-24 px-6 md:px-16 border-t border-tactical-border overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(var(--tactical-border) 1px, transparent 1px)`, 
           backgroundSize: '30px 30px' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Module */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-20 border-b border-tactical-border pb-8 md:pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.4em] text-brand uppercase mb-4 font-bold">
              <span className="w-6 md:w-8 h-[2px] bg-brand"></span>
              Service Spectrum
            </div>
            <h2 className="font-gaming text-4xl sm:text-5xl md:text-7xl text-main-text uppercase italic leading-[0.9]">
              Advanced <span className="text-brand">Web</span> <br /> 
              Solutions
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-main-text/60"
          >
            Corporate Portfolio // FY-2026
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 md:space-y-8"
          >
            <h3 className="text-xl md:text-2xl font-gaming text-main-text uppercase italic">Engineering high-performance digital infrastructure.</h3>
            <p className="text-base md:text-lg leading-relaxed text-main-text/80 font-medium">
              Samurai Web provides specialized development services focused on <strong className="text-brand uppercase">measurable business growth</strong>. We engineer technically sophisticated platforms that streamline operations and enhance market presence across major global trade hubs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-brand pl-4">
                <h4 className="font-gaming text-brand text-sm uppercase mb-2">Technical Proficiency</h4>
                <p className="text-[10px] md:text-xs text-main-text/70 uppercase font-mono leading-tight">Specializing in Next.js, headless commerce, and complex API integrations for modern enterprises.</p>
              </div>
              <div className="border-l-2 border-brand pl-4">
                <h4 className="font-gaming text-brand text-sm uppercase mb-2">Strategic Consulting</h4>
                <p className="text-[10px] md:text-xs text-main-text/70 uppercase font-mono leading-tight">Aligning technical execution with multi-regional market requirements and regulatory standards.</p>
              </div>
            </div>
          </motion.div>

          {/* Value Cards: Website Types */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {highlights.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-5 md:p-6 border border-tactical-border bg-card/30 hover:bg-brand/5 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand/10 text-brand group-hover:bg-brand group-hover:text-main-bg transition-colors flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-gaming text-lg md:text-xl text-main-text uppercase italic group-hover:text-brand transition-colors">
                      {item.value}
                    </h4>
                    <p className="font-mono text-[9px] md:text-[10px] text-main-text/60 uppercase tracking-wider mb-2">{item.label}</p>
                    <p className="text-[11px] md:text-xs text-main-text/80 leading-relaxed uppercase font-bold tracking-tight">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Geographic Operations Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-20 border border-tactical-border bg-card/10 relative overflow-hidden"
        >
          <div className="flex flex-col xl:flex-row divide-y xl:divide-y-0 xl:divide-x divide-tactical-border">
            <div className="p-6 md:p-8 flex items-center gap-4 bg-main-text/5 min-w-[300px]">
              <Globe className="text-brand shrink-0" size={28} />
              <div>
                <p className="font-gaming text-xl text-main-text uppercase italic">Global Presence</p>
                <p className="font-mono text-[10px] text-main-text/60 uppercase">Operational Hubs</p>
              </div>
            </div>

            <div className="flex-grow grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-tactical-border">
              {locations.map((loc) => (
                <div key={loc.region} className="p-6 flex flex-col justify-center group hover:bg-brand/5 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={14} className="text-brand" />
                    <span className="font-gaming text-lg text-main-text uppercase italic group-hover:text-brand transition-colors">{loc.region}</span>
                  </div>
                  <p className="font-mono text-[11px] text-main-text/80 uppercase tracking-tighter">
                    {loc.city} <span className="text-main-text/40 mx-2">//</span> {loc.zone}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 flex items-center justify-center bg-brand text-main-bg font-mono text-[11px] font-black uppercase italic">
              Network_Online
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}