import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

/**
 * Main Landing Page for Samurai Web.
 * Organized in a tactical flow: 
 * 1. Introduction (Hero) 
 * 2. Strategy & Identity (About)
 * 3. Deployed Assets (Projects)
 * 4. Secure Engagement (Contact)
 */
export default function Home() {
  return (
    <main className="bg-tactical-grid selection:bg-brand selection:text-white min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}