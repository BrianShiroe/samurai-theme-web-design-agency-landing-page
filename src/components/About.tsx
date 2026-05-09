"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Rocket, Layout, Settings } from "lucide-react";

/**
 * About component for Samurai Web.
 * Optimized for mobile responsiveness with tactical neobrutalist styling.
 */
export default function About() {
  const highlights = [
    { 
      label: "User Experience", 
      value: "Intuitive Design", 
      desc: "Creating interfaces that are easy for your customers to navigate.",
      icon: <Layout size={20} /> 
    },
    { 
      label: "Performance", 
      value: "High-Speed Load", 
      desc: "Fast websites keep customers engaged and improve sales.",
      icon: <Rocket size={20} /> 
    },
    { 
      label: "Reliability", 
      value: "Secure Systems", 
      desc: "Built with modern tools to ensure your business stays online.",
      icon: <ShieldCheck size={20} /> 
    },
  ];

  return (
    <section id="about" className="relative min-h-screen w-full bg-main-bg py-16 md:py-24 px-6 md:px-16 border-t border-tactical-border overflow-hidden">
      
      {/* Background Decor - Neobrutalist Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(var(--tactical-border) 1px, transparent 1px)`, 
           backgroundSize: '30px 30px' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Module - Improved mobile alignment */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-20 border-b border-tactical-border pb-8 md:pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.4em] text-brand uppercase mb-4 font-bold">
              <span className="w-6 md:w-8 h-[2px] bg-brand"></span>
              Strategic Intelligence
            </div>
            <h2 className="font-gaming text-4xl sm:text-5xl md:text-7xl text-main-text uppercase italic leading-[0.9]">
              Global <span className="text-brand">Web</span> <br /> 
              Dominance
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-main-text/60"
          >
            PH // UAE // USA — Global Operations
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          
          {/* Bio & Intro */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 md:space-y-8"
          >
            <h3 className="text-xl md:text-2xl font-gaming text-main-text uppercase italic">Scaling businesses across borders.</h3>
            <p className="text-base md:text-lg leading-relaxed text-main-text/80 font-medium">
              As a lead developer, I transform traditional sites into <strong className="text-brand">lethal digital assets</strong>. From the tech hubs of Dubai to competitive global markets, I deliver technically flawless solutions that drive massive growth.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-brand pl-4">
                <h4 className="font-gaming text-brand text-sm uppercase mb-2">Multi-Region Reach</h4>
                <p className="text-[10px] md:text-xs text-main-text/70 uppercase font-mono leading-tight">Providing tactical web solutions for clients in the Philippines, UAE, and North America.</p>
              </div>
              <div className="border-l-2 border-brand pl-4">
                <h4 className="font-gaming text-brand text-sm uppercase mb-2">Lead Execution</h4>
                <p className="text-[10px] md:text-xs text-main-text/70 uppercase font-mono leading-tight">Solely managing complex web tasks, from ERP systems to high-conversion storefronts.</p>
              </div>
            </div>
          </motion.div>

          {/* Value Cards */}
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

        {/* Capabilities Bar - Mobile optimized stacking */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-20 p-6 md:p-8 border-2 border-main-text relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-main-text text-main-bg px-3 py-1 font-mono text-[9px] md:text-[10px] font-black uppercase">
            Status_Active
          </div>
          <div className="flex flex-col xl:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4 text-center md:text-left">
              <Settings className="text-brand animate-spin-slow hidden sm:block flex-shrink-0" size={32} />
              <div>
                <p className="font-gaming text-xl md:text-2xl text-main-text uppercase italic">International Tech Stack</p>
                <p className="font-mono text-[10px] text-main-text/60 uppercase">Deploying Next.js, Supabase, and Shopify solutions worldwide.</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {["Philippines", "UAE", "USA", "E-Commerce", "UX Design"].map((tag) => (
                <span key={tag} className="bg-main-text text-main-bg px-2 md:px-3 py-1 font-mono text-[10px] md:text-[11px] font-black uppercase italic whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}