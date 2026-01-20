"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import ThemeToggle from "./theme-toggle"
import { translations } from "@/lib/i18n"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: translations.nav.home, href: "#" },
    { name: translations.nav.about, href: "#about" },
    { name: translations.nav.projects, href: "#projects" },
    { name: translations.nav.contact, href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <motion.span
              className="text-2xl font-bold tracking-tight text-foreground"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Maimez
            </motion.span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 group"
                >
                  {link.name}
                  <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button className="p-2 text-foreground/70 hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
