"use client"

import { motion } from "framer-motion"
import TeamCard from "./team-card"

const teamMembers = [
  {
    name: "Alex Rivera",
    role: "Creative Director & Co-Founder",
    bio: "Visionary designer with 10+ years crafting brand identities and digital experiences that resonate. Passionate about merging creativity with strategy.",
    skills: ["Brand Strategy", "UI/UX Design", "Creative Direction", "Design Systems"],
  },
  {
    name: "Jordan Chen",
    role: "Technical Lead & Co-Founder",
    bio: "Full-stack architect specializing in scalable web solutions and modern frameworks. Transforms complex ideas into elegant, performant applications.",
    skills: ["React/Next.js", "TypeScript", "System Architecture", "Web Performance"],
  },
]

export default function About() {
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
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Maimez</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Crafting Digital Excellence
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
            We're a boutique digital agency dedicated to transforming bold ideas into exceptional digital experiences.
            Our approach combines strategic thinking, innovative design, and cutting-edge technology to create solutions
            that drive results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}
