// src\components\Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-white/50">
          © 2026 CoreStudio Design Agency.
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-brand">Twitter</a>
          <a href="#" className="hover:text-brand">LinkedIn</a>
          <a href="#" className="hover:text-brand">Contact</a>
        </div>
      </div>
    </footer>
  );
}
