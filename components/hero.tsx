"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

import { translations } from "@/lib/i18n"

export default function Hero() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden pt-20">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center"
      >
        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 text-balance"
        >
          {translations.hero.title} <span className="text-primary">{translations.hero.titleHighlight}</span>
          <br />
          {translations.hero.titleEnd}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed text-pretty"
        >
          {translations.hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div variants={buttonVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              {translations.hero.ctaPrimary}
            </Button>
          </motion.div>

          <motion.div variants={buttonVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
            >
              {translations.hero.ctaSecondary}
            </Button>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  )
}
