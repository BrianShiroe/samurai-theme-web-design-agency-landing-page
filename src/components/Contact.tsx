"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HCaptcha from "@hcaptcha/react-hcaptcha";

/**
 * Contact component for Samurai Web.
 * Integrated with Web3Forms + hCaptcha + Honeypot Anti-Spam.
 * Aligned to start with transparent security modules.
 */
export default function Contact() {
  const [isMounted, setIsMounted] = useState(false);
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");
  
  // Anti-Spam State
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  // Prevent Next.js router initialization errors by waiting for client mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onHCaptchaChange = (token: string) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verification Check
    if (!captchaToken) {
      alert("SECURITY_ALERT: Human verification required.");
      return;
    }

    setStatus("SENDING");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");
    
    // Attach Captcha Token for server-side validation
    formData.append("h-captcha-response", captchaToken);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json() as { success: boolean };

      if (data.success) {
        setStatus("SUCCESS");
        (e.target as HTMLFormElement).reset();
        // Reset security protocol for next message
        setCaptchaToken(null);
        captchaRef.current?.resetCaptcha();
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      setStatus("ERROR");
    }
  };

  if (!isMounted) return null;

  return (
    <section id="contact" className="relative py-20 md:py-32 px-6 md:px-8 bg-main-bg overflow-hidden border-t border-brand/20 transition-colors duration-500">
      
      {/* Background HUD Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-tactical-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-brand/5 rounded-full blur-[80px] md:blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto pt-4 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Side: Strategic Briefing */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-6 md:space-y-10"
          >
            <div className="inline-flex items-center gap-4">
              <span className="h-[2px] w-8 md:w-12 bg-brand"></span>
              <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] text-brand uppercase italic font-bold">
                Engagement_Protocol_v.04
              </span>
            </div>
            
            <h2 className="font-gaming text-5xl sm:text-6xl md:text-7xl font-light uppercase tracking-tighter text-main-text italic leading-[0.9]">
              Request <br />
              <motion.span 
                whileHover={{ skewX: -10 }}
                className="text-brand font-bold drop-shadow-[0_0_20px_var(--brand-glow)] cursor-default inline-block transition-all duration-300"
              >
                Consultation
              </motion.span>
            </h2>
            
            <p className="font-mono text-[11px] md:text-sm text-main-text/50 leading-relaxed uppercase tracking-[0.15em] md:tracking-[0.2em] max-w-sm">
              Current Status: <span className="text-main-text font-bold tracking-widest">Accepting_Projects</span> <br />
              Operations: <span className="text-main-text">Global_Network_Active</span>
            </p>

            <div className="pt-2 md:pt-4 space-y-6">
              <motion.div whileHover={{ x: 10 }} className="group cursor-pointer inline-block">
                <p className="font-mono text-[10px] md:text-xs text-brand mb-1 md:mb-2 transition-all group-hover:tracking-widest font-bold">// SECURE_COMM_LINK</p>
                <p className="font-gaming text-xl sm:text-2xl md:text-3xl text-main-text transition-transform group-hover:text-brand break-all">
                  brianshiroe@gmail.com
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
            <div className="absolute -top-1 -left-1 md:-top-2 md:-left-2 w-4 h-4 md:w-6 md:h-6 border-t-2 border-l-2 border-brand/50" />
            <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 border-b-2 border-r-2 border-brand/50" />
            
            <form 
              onSubmit={handleSubmit}
              className="bg-card backdrop-blur-xl border border-tactical-border p-6 md:p-12 space-y-6 md:space-y-8 relative overflow-hidden flex flex-col items-start"
            >
              {/* ANTI-SPAM 1: Honeypot (Invisible to users) */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              <div className="grid grid-cols-1 gap-6 md:gap-8 w-full text-left">
                {/* Name */}
                <div className="relative group flex flex-col items-start">
                  <label className="font-mono text-[9px] md:text-[10px] text-main-text/40 uppercase tracking-[0.2em] md:tracking-[0.3em] group-focus-within:text-brand transition-colors font-bold">
                    Organization_Contact
                  </label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-tactical-border py-2 md:py-3 font-gaming text-main-text focus:outline-none focus:border-brand transition-all placeholder:text-main-text/10 text-sm md:text-base cursor-text text-left"
                    placeholder="ENTER FULL NAME"
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-brand w-0 group-focus-within:w-full transition-all duration-500 shadow-[0_0_10px_var(--brand-glow)]" />
                </div>

                {/* Email */}
                <div className="relative group flex flex-col items-start">
                  <label className="font-mono text-[9px] md:text-[10px] text-main-text/40 uppercase tracking-[0.2em] md:tracking-[0.3em] group-focus-within:text-brand transition-colors font-bold">
                    Official_Signal_Channel
                  </label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    className="w-full bg-transparent border-b border-tactical-border py-2 md:py-3 font-gaming text-main-text focus:outline-none focus:border-brand transition-all placeholder:text-main-text/10 text-sm md:text-base cursor-text text-left"
                    placeholder="CORPORATE@EMAIL.COM"
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-brand w-0 group-focus-within:w-full transition-all duration-500 shadow-[0_0_10px_var(--brand-glow)]" />
                </div>

                {/* Message */}
                <div className="relative group flex flex-col items-start">
                  <label className="font-mono text-[9px] md:text-[10px] text-main-text/40 uppercase tracking-[0.2em] md:tracking-[0.3em] group-focus-within:text-brand transition-colors font-bold">
                    Project_Scope
                  </label>
                  <textarea 
                    name="message"
                    rows={2}
                    required
                    className="w-full bg-transparent border-b border-tactical-border py-2 md:py-3 font-gaming text-main-text focus:outline-none focus:border-brand transition-all placeholder:text-main-text/10 resize-none text-sm md:text-base cursor-text text-left"
                    placeholder="OUTLINE YOUR DIGITAL OBJECTIVES..."
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-brand w-0 group-focus-within:w-full transition-all duration-500 shadow-[0_0_10px_var(--brand-glow)]" />
                </div>
              </div>

              {/* ANTI-SPAM 2: hCaptcha (Aligned Start, Background Removed) */}
              <div className="flex justify-start py-2 w-full overflow-hidden">
                <HCaptcha
                  sitekey="YOUR_HCAPTCHA_SITE_KEY" 
                  onVerify={onHCaptchaChange}
                  theme="dark"
                  ref={captchaRef}
                />
              </div>

              {/* Tactical Submit Button (Aligned Start) */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "SENDING"}
                type="submit"
                className="group relative w-full sm:w-64 h-12 md:h-14 bg-transparent border border-brand/50 flex items-center justify-center overflow-hidden transition-all hover:border-brand disabled:opacity-50 cursor-pointer"
              >
                <div className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                
                <span className="relative z-10 font-gaming font-bold uppercase italic text-brand group-hover:text-main-bg text-base md:text-lg tracking-tighter transition-colors duration-300">
                  {status === "SENDING" ? "Transmitting..." : status === "SUCCESS" ? "Transmission_Sent" : "Transmit_Inquiry"}
                </span>

                <div className="absolute top-0 right-0 p-1">
                  <div className={`w-1.5 h-1.5 bg-brand group-hover:bg-main-bg transition-colors ${status === "SENDING" ? "animate-ping" : "animate-pulse"}`} />
                </div>
              </motion.button>

              {status === "ERROR" && (
                <p className="font-mono text-[10px] text-red-500 uppercase text-left font-bold tracking-widest">
                  Signal_Lost // Link_Failed
                </p>
              )}

              <p className="font-mono text-[8px] md:text-[9px] text-left text-main-text/30 uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold w-full">
                End-To-End_Encryption // Response_Time_24H
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}