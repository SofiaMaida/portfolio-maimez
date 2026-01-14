"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  link: string
  index: number
}

export default function ProjectCard({ title, description, techStack, link, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/50"
    >
      <div className="flex flex-col h-full">
        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>

        <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-accent-foreground border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
        >
          View Project
          <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
        </a>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}
