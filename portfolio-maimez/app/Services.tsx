"use client";
import { motion } from "framer-motion";

const servicios = [
  {
    num: "01",
    title: "LANDING PAGES",
    desc: "Sitios de alto impacto diseñados para convertir visitas en clientes reales.",
    features: ["Diseño exclusivo", "Optimización móvil", "Carga ultra rápida"]
  },
  {
    num: "02",
    title: "CATÁLOGOS DIGITALES",
    desc: "Muestra tus productos con estética editorial. Sin precios, solo puro deseo visual.",
    features: ["Galería premium", "Link a WhatsApp", "Fácil de actualizar"]
  },
  {
    num: "03",
    title: "TIENDAS ONLINE",
    desc: "E-commerce completo para marcas que están listas para escalar sus ventas.",
    features: ["Pagos seguros", "Gestión de stock", "Panel intuitivo"]
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-[#32592b]">
      {/* Cabecera de Sección */}
      <div className="mb-16">
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white/80">
          LO QUE HACEMOS
        </p>
        <h2 className="text-5xl md:text-7xl font-bold text-[#aa0664] tracking-tighter leading-[0.9]">
          Soluciones a medida para <br /> negocios que crecen.
        </h2>
      </div>

      {/* Rejilla de Servicios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/10">
        {servicios.map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
            className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col last:border-r-0"
          >
            {/* Número gigante en verde claro / opacidad */}
            <span className="text-7xl font-black text-white/10 mb-8 block tracking-tighter">
              {s.num}
            </span>
            
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight uppercase">
              {s.title}
            </h3>
            
            <p className="text-white/60 text-lg mb-8 font-light leading-snug">
              {s.desc}
            </p>

            {/* Lista de características */}
            <ul className="mt-auto space-y-2">
              {s.features.map((feature, idx) => (
                <li key={idx} className="text-white/40 text-sm font-medium tracking-wide uppercase">
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}