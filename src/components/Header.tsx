// src\components\Header.tsx
export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-neon-red/30 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-mono">
        <div className="font-black text-xl tracking-tighter uppercase group cursor-pointer">
          <span className="text-white group-hover:text-neon-cyan transition-colors">NEO</span>
          <span className="text-neon-red group-hover:animate-flicker">_AGENCY</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
          <a href="#" className="text-neon-cyan hover:before:content-['>'] before:mr-1 transition-all">Network</a>
          <a href="#" className="hover:text-neon-red transition-all">Projects</a>
          <a href="#" className="hover:text-neon-red transition-all">Terminal</a>
        </div>
        <button className="relative px-4 py-1 text-xs font-bold uppercase border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all shadow-[0_0_10px_rgba(0,243,255,0.3)]">
          INITIALIZE_
        </button>
      </div>
    </header>
  );
}
