"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Rocket, Layout, Settings } from "lucide-react";

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
    <section id="about" className="relative min-h-screen w-full bg-main-bg py-24 px-8 md:px-16 border-t border-tactical-border overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(var(--tactical-border) 1px, transparent 1px)`, 
           backgroundSize: '30px 30px' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Module */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 border-b border-tactical-border pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 font-mono text-xs tracking-[0.4em] text-brand uppercase mb-4 font-bold">
              <span className="w-8 h-[2px] bg-brand"></span>
              Professional Profile
            </div>
            <h2 className="font-gaming text-5xl md:text-7xl text-main-text uppercase italic leading-none">
              Strategic <span className="text-brand">Web</span> <br /> 
              Solutions
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-main-text/60"
          >
            Est. 2021 // Global Operations
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Bio & Intro */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <h3 className="text-2xl font-gaming text-main-text uppercase italic">Focusing on your growth.</h3>
            <p className="text-lg leading-relaxed text-main-text/80 font-medium">
              I help businesses transition from simple websites to **powerful digital assets**. Whether you need a high-end e-commerce store or a custom internal management tool, my goal is to deliver a product that is both visually striking and technically flawless.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-brand pl-4">
                <h4 className="font-gaming text-brand text-sm uppercase mb-2">E-Commerce</h4>
                <p className="text-xs text-main-text/70 uppercase font-mono leading-tight">Optimized storefronts built on Shopify and Next.js for maximum conversion.</p>
              </div>
              <div className="border-l-2 border-brand pl-4">
                <h4 className="font-gaming text-brand text-sm uppercase mb-2">Custom Software</h4>
                <p className="text-xs text-main-text/70 uppercase font-mono leading-tight">Tailored solutions like ERP management and automation to save your team time.</p>
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
                className="group relative p-6 border border-tactical-border bg-card/30 hover:bg-brand/5 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-gaming text-xl text-main-text uppercase italic group-hover:text-brand transition-colors">
                      {item.value}
                    </h4>
                    <p className="font-mono text-[10px] text-main-text/60 uppercase tracking-wider mb-2">{item.label}</p>
                    <p className="text-xs text-main-text/80 leading-relaxed uppercase font-bold tracking-tight">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Capabilities Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 border-2 border-main-text relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-main-text text-main-bg px-4 py-1 font-mono text-[10px] font-black uppercase">
            Capabilities_Manual
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <Settings className="text-brand animate-spin-slow" size={32} />
              <div>
                <p className="font-gaming text-2xl text-main-text uppercase italic">The Tech Behind the Scenes</p>
                <p className="font-mono text-[10px] text-main-text/60 uppercase">I use industry-leading technology to future-proof your business.</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {["E-Commerce", "Web Apps", "API Integration", "Cloud Systems", "UX Design"].map((tag) => (
                <span key={tag} className="bg-main-text text-main-bg px-3 py-1 font-mono text-[11px] font-black uppercase italic">
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