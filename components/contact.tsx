"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/i18n"

export default function Contact() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="relative py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            {translations[language].contact.title} <span className="text-primary">{translations[language].contact.titleHighlight}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {translations[language].contact.subtitle}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 max-w-2xl mx-auto"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              {translations[language].contact.nameLabel}
            </label>
            <motion.div
              animate={{
                scale: focusedField === "name" ? 1.01 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                required
                className="w-full px-4 py-3 bg-card border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                placeholder={translations[language].contact.namePlaceholder}
              />
            </motion.div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              {translations[language].contact.emailLabel}
            </label>
            <motion.div
              animate={{
                scale: focusedField === "email" ? 1.01 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                required
                className="w-full px-4 py-3 bg-card border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                placeholder={translations[language].contact.emailPlaceholder}
              />
            </motion.div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              {translations[language].contact.messageLabel}
            </label>
            <motion.div
              animate={{
                scale: focusedField === "message" ? 1.01 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                required
                rows={6}
                className="w-full px-4 py-3 bg-card border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                placeholder={translations[language].contact.messagePlaceholder}
              />
            </motion.div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-4">
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              {translations[language].contact.submitButton}
            </Button>
          </motion.div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">{translations[language].contact.orReachUs}</p>
          <a
            href="mailto:hello@maimez.com"
            className="text-lg font-medium text-accent hover:text-accent/80 transition-colors"
          >
            hello@maimez.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}
