import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="bg-tactical-grid selection:bg-brand selection:text-white">
      <Hero />
      <About />
      <Contact />
    </div>
  );
}