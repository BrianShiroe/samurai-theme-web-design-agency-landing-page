"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portfolio",
    description: "Personal mission log showcasing full-stack capabilities and design architecture.",
    repo: "BrianShiroe/portfolio",
    link: "https://brianshiroe.vercel.app",
    status: "online",
    update: "Update SystemLoader.tsx",
    branch: "master",
    date: "2d ago",
    icon: "https://cdn-icons-png.flaticon.com/512/3767/3767084.png"
  },
  {
    title: "Noor Label",
    description: "Premium e-commerce platform for clothing, integrated with high-performance retail UI.",
    repo: "BrianShiroe/noor_label",
    link: "https://noor-label.vercel.app",
    status: "online",
    update: "[fix] products: shopify graphql error",
    branch: "master",
    date: "3d ago",
    icon: "https://cdn-icons-png.flaticon.com/512/863/863684.png"
  },
  {
    title: "Gamecraft",
    description: "Digital storefront specialized in gaming assets and software distribution.",
    repo: "BrianShiroe/gametree",
    link: "https://gametree.vercel.app",
    status: "online",
    update: "[fix] remove onauthstatechange error",
    branch: "master",
    date: "May 6",
    icon: "https://cdn-icons-png.flaticon.com/512/808/808476.png"
  },
  {
    title: "Zhel Gold Jewelry",
    description: "High-end landing page for gold retail, focusing on luxury branding and conversion.",
    repo: "BrianShiroe/zhel-gold-jewelry",
    link: "https://zhel-gold-jewelry.vercel.app",
    status: "online",
    update: "[update] noor: demo text",
    branch: "master",
    date: "May 4",
    icon: "https://cdn-icons-png.flaticon.com/512/461/461146.png"
  },
  {
    title: "Greyscale Real Estate",
    description: "Strategic real estate portal optimized for property listings and lead generation.",
    repo: "BrianShiroe/greyscale-real-estate",
    link: "https://greyscale-real-estate.vercel.app",
    status: "online",
    update: "[fix] components: issues",
    branch: "master",
    date: "Apr 19",
    icon: "https://cdn-icons-png.flaticon.com/512/619/619034.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-main-bg border-t border-tactical-border">
      
      <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/2621/2621037.png" 
          alt="tactical-bg" 
          className="w-32 h-32 invert" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.4em] text-brand uppercase mb-4 font-bold">
            <span className="w-8 h-[2px] bg-brand"></span>
            Asset Deployment History
          </div>
          <h2 className="font-gaming text-5xl md:text-7xl text-main-text uppercase italic leading-none">
            Project <span className="text-brand">Archive</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-card/40 border border-tactical-border hover:border-brand/50 transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b border-tactical-border bg-main-text/5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                  <span className="font-mono text-[10px] text-brand uppercase font-bold tracking-widest">
                    {project.status}
                  </span>
                </div>
                <div className="font-mono text-[9px] text-main-text/40 uppercase">
                  ID_{index + 101} // {project.branch}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 p-2 bg-brand/10 border border-brand/20 group-hover:bg-brand/20 transition-colors shrink-0">
                        <img 
                            src={project.icon} 
                            alt={project.title} 
                            className="w-full h-full object-contain invert brightness-0 group-hover:invert-0 group-hover:brightness-100 transition-all"
                        />
                    </div>
                    {/* Fixed height container for Title and Repo to prevent "jumpy" alignment */}
                    <div className="flex-grow min-h-[64px] flex flex-col justify-center">
                        <h3 className="font-gaming text-2xl text-main-text uppercase italic mb-0 group-hover:text-brand transition-colors line-clamp-2 leading-[1.1]">
                            {project.title}
                        </h3>
                        <p className="font-mono text-[9px] text-main-text/30 uppercase tracking-tighter mt-1">
                            {project.repo}
                        </p>
                    </div>
                </div>

                <p className="font-mono text-[11px] text-main-text/60 uppercase leading-relaxed mb-6 line-clamp-2 h-10">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="bg-main-bg/50 border border-tactical-border p-3 rounded mb-6">
                    <div className="flex items-start gap-3">
                      <img 
                          src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
                          alt="github" 
                          className="w-4 h-4 invert opacity-40 mt-1" 
                      />
                      <div>
                        <p className="font-mono text-[10px] text-main-text/80 uppercase leading-tight line-clamp-1">
                          {project.update}
                        </p>
                        <p className="font-mono text-[9px] text-main-text/30 mt-1 uppercase">
                          LOG: {project.date}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-brand/10 border border-brand/20 py-2 font-gaming text-xs text-brand uppercase italic hover:bg-brand hover:text-main-bg transition-all"
                    >
                      Open Viewport <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-1 right-1 w-2 h-2 bg-brand" />
              </div>
            </motion.div>
          ))}
          
          <div className="border-2 border-dashed border-tactical-border flex flex-col items-center justify-center p-8 opacity-20 hover:opacity-100 transition-opacity min-h-[380px]">
            <img 
                src="https://cdn-icons-png.flaticon.com/512/2306/2306154.png" 
                alt="awaiting" 
                className="w-12 h-12 invert mb-4 opacity-50" 
            />
            <p className="font-mono text-[10px] text-main-text/40 uppercase tracking-[0.3em]">
              Scanning_For_Assets...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}