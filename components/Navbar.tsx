'use client'

import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'The Path', id: 'the-path' },
    { label: 'Who It Is For', id: 'who' },
    { label: 'Safety', id: 'safety' },
    { label: 'Landowners', id: 'landowners' },
    { label: 'Beliefs', id: 'beliefs' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl md:text-2xl font-bold text-white hover:text-emerald-400 transition-colors"
          >
            Narrow Trail Brotherhood
          </button>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-zinc-200 hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-600 transition-colors text-sm"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

