"use client"

import { motion } from "framer-motion"
import ProjectCard from "./project-card"
import { translations } from "@/lib/i18n"

export default function Projects() {
  const allProjects = translations.projects.allProjects

  return (
    <section className="relative py-24 px-6 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{translations.projects.badge}</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{translations.projects.title}</h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
            {translations.projects.subtitle}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {allProjects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              title={project.title}
              description={project.description}
              techStack={[...project.techStack]}
              link={project.link}
              index={index} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
