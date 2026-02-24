"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[#254321] flex flex-col justify-center px-6 overflow-hidden">
      {/* Texto MAIMEZ de fondo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <h1 className="text-[25vw] font-black text-white outline-text">MAIMEZ</h1>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <h2 className="text-[15vw] md:text-[10vw] font-black text-[#ff00ff] leading-[0.8] uppercase tracking-tighter">
            MAIMEZ
          </h2>
      
        </motion.div>

        <p className="mt-6 max-w-md text-white/80 text-lg italic">
          Estudio boutique de desarrollo web de 
          <span className="text-[#ff00ff] font-bold"> alto impacto</span>.
        </p>

        <button className="mt-10 px-8 py-4 bg-[#ff00ff] text-white font-bold text-sm tracking-widest shadow-[0_0_30px_rgba(255,0,255,0.5)]">
          TRABAJEMOS JUNTOS
        </button>
      </div>
    </section>
  );
}