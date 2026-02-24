"use client";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Contact from "./Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#32592b] text-white selection:bg-[#aa0664]">
      <Navbar />
      
      <Hero />

      {/* Agregamos más espacio (py-32) y margen entre secciones */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-32 pb-32">
        
        <section id="servicios" className="scroll-mt-32">
          <Services />
        </section>

        <section id="contacto" className="scroll-mt-32">
          <Contact />
        </section>

      </div>

      <footer className="py-10 text-center border-t border-white/5 text-white/20 text-[10px] tracking-[0.5em] uppercase">
        © 2024 Maimez Studio — Digital Craft
      </footer>
    </main>
  );
}