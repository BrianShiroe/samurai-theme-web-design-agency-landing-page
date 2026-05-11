"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

/**
 * Header component for Samurai Web.
 * Fixed "Double Click" navigation issue by optimizing event handling.
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Network", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const GITHUB_URL = "https://github.com/BrianShiroe";

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-brand/30 bg-main-bg/90 backdrop-blur-lg transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between font-mono">
        
        {/* Logo Section */}
        <Link href="/" className="block">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-black text-lg sm:text-xl md:text-2xl tracking-tighter uppercase group cursor-pointer flex-shrink-0"
          >
            <span className="text-main-text transition-colors duration-500">SAMURAI</span>
            <span className="text-brand group-hover:animate-pulse">_WEB</span>
          </motion.div>
        </Link>
        
        <div className="flex items-center gap-2 md:gap-10">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-[12px] font-bold uppercase tracking-[0.25em] text-main-text/80">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="relative hover:text-brand transition-all py-2 group"
              >
                // {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 md:border-l border-tactical-border md:pl-6">
            <ThemeSwitcher />
            
            {/* GitHub Action Button */}
            <a 
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex px-4 md:px-6 py-2 text-[11px] font-black uppercase border-2 border-brand text-brand hover:bg-brand hover:text-main-bg transition-all duration-300 shadow-[0_0_15px_var(--brand-glow)] hover:shadow-none active:scale-95"
            >
              GITHUB
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10 border border-brand/20 hover:border-brand transition-colors rounded-sm bg-brand/5 z-[60]"
              aria-label="Toggle Menu"
            >
              <motion.div 
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="h-[2px] w-5 bg-brand origin-center" 
              />
              <motion.div 
                animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="h-[2px] w-5 bg-brand" 
              />
              <motion.div 
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="h-[2px] w-5 bg-brand origin-center" 
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed top-0 left-0 w-full bg-main-bg z-50 overflow-hidden flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8 font-mono">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={closeMenu}
                    className="text-2xl font-black uppercase tracking-[0.4em] text-main-text/90 hover:text-brand transition-colors block py-4"
                  >
                    <span className="text-brand/40 mr-2">▶</span> {link.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile GitHub Button */}
              <motion.a 
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 px-12 py-4 border-2 border-brand text-brand text-[14px] font-black tracking-widest shadow-[0_0_20px_var(--brand-glow)] active:bg-brand active:text-main-bg transition-all"
              >
                GITHUB
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}