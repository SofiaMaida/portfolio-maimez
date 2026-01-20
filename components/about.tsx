"use client"

import { motion } from "framer-motion"
import TeamCard from "./team-card"
import { translations } from "@/lib/i18n"

export default function About() {
  const teamMembers = translations.about.team
  return (
    <section className="relative py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{translations.about.badge}</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {translations.about.title}
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
            {translations.about.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard 
              key={member.name} 
              name={member.name}
              role={member.role}
              bio={member.bio}
              skills={[...member.skills]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
