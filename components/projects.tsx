"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "./project-card"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/i18n"

export default function Projects() {
  const { language } = useLanguage()
  const [selectedMember, setSelectedMember] = useState<"alex" | "jordan">("alex")

  const members = [
    { key: "alex" as const, name: translations[language].projects.members.alex },
    { key: "jordan" as const, name: translations[language].projects.members.jordan },
  ]

  const projectsData = {
    alex: translations[language].projects.alexProjects,
    jordan: translations[language].projects.jordanProjects,
  }

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
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{translations[language].projects.badge}</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{translations[language].projects.title}</h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
            {translations[language].projects.subtitle}
          </p>
        </motion.div>

        {/* Member Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {members.map((member) => (
            <button
              key={member.key}
              onClick={() => setSelectedMember(member.key)}
              className={`relative px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                selectedMember === member.key ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {selectedMember === member.key && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-primary rounded-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{member.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMember}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projectsData[selectedMember].map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
