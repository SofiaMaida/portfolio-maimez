"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const formspreeId = "xbdaowde";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        // Volver al estado normal después de 5 segundos
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-24 bg-[#32592b]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LADO IZQUIERDO: Estática Brutalista */}
        <div className="space-y-8">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white/80">
            ¿TIENES UN PROYECTO?
          </p>
          <h2 className="text-[14vw] lg:text-[7vw] font-black leading-[0.85] text-[#aa0664] uppercase tracking-tighter">
            HAGÁMOSLO <br /> REAL<span className="text-[#aa0664]">.</span>
          </h2>

          <p className="max-w-md text-white/70 text-lg font-light leading-snug">
        Estamos listos para potenciar tu negocio con una web que destaque. 
        Escríbenos y te responderemos en menos de 24hs.
          </p>

          <div className="pt-8 space-y-1">
            <p className="text-[#aa0664] font-bold text-sm tracking-widest">maimez.desarrollo@gmail.com</p>
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-medium">Buenos Aires, Argentina — Remoto</p>
          </div>
        </div>

        {/* LADO DERECHO: Formulario con manejo de estado */}
        <form onSubmit={handleSubmit} className="space-y-10 pt-10 lg:pt-20">
          <input 
            type="text" name="name" required placeholder="¿CÓMO TE LLAMAS?" 
            className="w-full bg-transparent border-b border-white/20 py-4 focus:border-[#aa0664] outline-none transition-colors text-white placeholder:text-white/30 text-sm tracking-widest uppercase font-bold"
          />

          <input 
            type="email" name="email" required placeholder="TU EMAIL DE CONTACTO" 
            className="w-full bg-transparent border-b border-white/20 py-4 focus:border-[#aa0664] outline-none transition-colors text-white placeholder:text-white/30 text-sm tracking-widest uppercase font-bold"
          />

          <div className="relative">
            <label className="block text-[10px] text-white/40 mb-1 tracking-widest font-bold uppercase">TIPO DE PROYECTO</label>
            <select 
              name="project_type" required
              className="w-full bg-transparent border-b border-white/20 py-4 focus:border-[#aa0664] outline-none transition-colors text-white text-sm tracking-widest uppercase font-bold appearance-none cursor-pointer"
            >
              <option value="" className="bg-[#32592b]">SELECCIONAR OPCIÓN</option>
              <option value="tienda-online" className="bg-[#32592b]">TIENDA ONLINE</option>
              <option value="landing-page" className="bg-[#32592b]">LANDING PAGE</option>
              <option value="catalogo-digital" className="bg-[#32592b]">CATÁLOGO DIGITAL</option>
            </select>
          </div>

          <textarea 
            name="message" required placeholder="CUÉNTANOS BREVEMENTE TU IDEA..." rows={1}
            className="w-full bg-transparent border-b border-white/20 py-4 focus:border-[#aa0664] outline-none transition-colors text-white placeholder:text-white/30 text-sm tracking-widest uppercase font-bold resize-none"
          ></textarea>

          <div className="pt-4">
            <AnimatePresence mode="wait">
              {status === "idle" && (
                <motion.button 
                  key="submit"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  type="submit"
                  className="group flex items-center gap-4 text-white font-black text-xl tracking-tighter uppercase italic hover:text-[#aa0664] transition-colors"
                >
                  ENVIAR AHORA <span className="text-3xl group-hover:translate-x-2 transition-transform">→</span>
                </motion.button>
              )}

              {status === "sending" && (
                <motion.p key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/50 font-bold italic uppercase tracking-widest text-sm">
                  ENVIANDO...
                </motion.p>
              )}

              {status === "success" && (
                <motion.p key="success" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-[#aa0664] font-black text-xl tracking-tighter uppercase italic">
                  ¡ENVIADO CON ÉXITO! TE CONTACTAREMOS PRONTO.
                </motion.p>
              )}

              {status === "error" && (
                <motion.p key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 font-bold uppercase text-xs">
                  HUBO UN ERROR. INTENTA DE NUEVO.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </section>
  );
}