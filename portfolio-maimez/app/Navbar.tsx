"use client";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-center bg-gradient-to-b from-[#254321] to-transparent">
      <div className="text-2xl font-black text-white tracking-tighter">
        Maimez<span className="text-[#ff00ff]">.</span>
      </div>
      <div className="flex gap-8 font-bold text-xs uppercase tracking-widest">
        <a href="#inicio" className="text-white border-b-2 border-[#ff00ff] pb-1">Inicio</a>
        <a href="#servicios" className="text-white/60 hover:text-[#ff00ff] transition-colors">Servicios</a>
        <a href="#contacto" className="text-white/60 hover:text-[#ff00ff] transition-colors">Contacto</a>
      </div>
    </nav>
  );
}