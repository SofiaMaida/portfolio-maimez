"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "./project-card"

const projectsData = {
  "Alex Rivera": [
    {
      title: "Luxe Fashion Rebrand",
      description:
        "Complete visual identity redesign for a luxury fashion brand, including logo, typography system, and digital brand guidelines that elevated their market presence.",
      techStack: ["Figma", "Adobe Suite", "Brand Strategy", "Design Systems"],
      link: "#",
    },
    {
      title: "FinTech Mobile App",
      description:
        "End-to-end UX/UI design for a financial technology startup, focusing on intuitive user flows and accessible design patterns for complex financial data.",
      techStack: ["UI/UX Design", "Prototyping", "User Research", "Accessibility"],
      link: "#",
    },
    {
      title: "Wellness Platform Redesign",
      description:
        "Strategic redesign of a health and wellness platform, improving user engagement by 150% through refined information architecture and modern visual design.",
      techStack: ["UX Strategy", "Visual Design", "Responsive Design", "Analytics"],
      link: "#",
    },
  ],
  "Jordan Chen": [
    {
      title: "E-Commerce Platform",
      description:
        "Built a high-performance e-commerce platform handling 100K+ daily transactions with real-time inventory management and seamless checkout experience.",
      techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Real-Time Collaboration Tool",
      description:
        "Developed a WebSocket-based collaboration platform enabling teams to work together in real-time with optimistic UI updates and conflict resolution.",
      techStack: ["React", "WebSockets", "Redis", "Node.js"],
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Created a comprehensive analytics dashboard processing millions of data points with interactive visualizations and custom reporting capabilities.",
      techStack: ["Next.js", "D3.js", "TanStack Query", "Python"],
      link: "#",
    },
  ],
}

export default function Projects() {
  const [selectedMember, setSelectedMember] = useState<"Alex Rivera" | "Jordan Chen">("Alex Rivera")

  const members = Object.keys(projectsData) as Array<"Alex Rivera" | "Jordan Chen">

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
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Work</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Featured Projects</h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
            Explore our portfolio of successful projects across design and development disciplines.
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
              key={member}
              onClick={() => setSelectedMember(member)}
              className={`relative px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                selectedMember === member ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {selectedMember === member && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-primary rounded-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{member}</span>
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
