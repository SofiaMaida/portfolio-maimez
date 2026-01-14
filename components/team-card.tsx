"use client"

import { motion } from "framer-motion"

interface TeamCardProps {
  name: string
  role: string
  bio: string
  skills: string[]
}

export default function TeamCard({ name, role, bio, skills }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative bg-card border border-border rounded-lg p-8 transition-shadow hover:shadow-xl"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
          <p className="text-lg text-primary font-medium">{role}</p>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6">{bio}</p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-3 py-1 text-sm font-medium bg-muted text-foreground rounded-full border border-border group-hover:border-primary/50 transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
