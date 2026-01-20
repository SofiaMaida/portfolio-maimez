"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { translations } from "@/lib/i18n"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: translations.nav.home, href: "#home" },
    { name: translations.nav.about, href: "#about" },
    { name: translations.nav.projects, href: "#projects" },
    { name: translations.nav.contact, href: "#contact" },
  ]

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {translations.footer.brand}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {translations.footer.tagline}
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">{translations.footer.navigation}</h4>
            <nav className="flex flex-col space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">{translations.footer.connect}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">© {currentYear} {translations.footer.brand}. {translations.footer.rights}.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              {translations.footer.privacy}
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              {translations.footer.terms}
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
