"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
  const [system, setSystem] = useState("dark");
  const [brand, setBrand] = useState("red");

  useEffect(() => {
    const savedSys = localStorage.getItem("sys-mode") || "dark";
    const savedBrand = localStorage.getItem("brand-mode") || "red";
    updateSystem(savedSys);
    updateBrand(savedBrand);
  }, []);

  const updateSystem = (val: string) => {
    setSystem(val);
    document.documentElement.setAttribute("data-system", val);
    localStorage.setItem("sys-mode", val);
  };

  const updateBrand = (val: string) => {
    setBrand(val);
    document.documentElement.setAttribute("data-brand", val);
    localStorage.setItem("brand-mode", val);
  };

  return (
    <div className="flex items-center gap-3 bg-card backdrop-blur-md border border-tactical-border p-1.5 rounded-sm">
      {/* Mode Toggle */}
      <button 
        onClick={() => updateSystem(system === "dark" ? "light" : "dark")}
        className="p-1 hover:text-brand transition-colors"
      >
        {system === "dark" ? <Sun size={14} /> : <Moon size={14} />}
      </button>

      <div className="w-[1px] h-4 bg-tactical-border" />

      {/* Brand Colors */}
      <div className="flex gap-1.5">
        {[
          { name: 'red', hex: '#ff0000' },
          { name: 'green', hex: '#00ff41' },
          { name: 'blue', hex: '#00f3ff' }
        ].map((c) => (
          <button
            key={c.name}
            onClick={() => updateBrand(c.name)}
            className={`w-3 h-3 rounded-full transition-all ${brand === c.name ? 'scale-125 ring-1 ring-main-text' : 'opacity-30 hover:opacity-100'}`}
            style={{ backgroundColor: c.hex }}
          />
        ))}
      </div>
    </div>
  );
}