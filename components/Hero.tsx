'use client'

import React from 'react'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 max-w-4xl z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Narrow Trail Brotherhood
        </h1>
        <p className="text-xl md:text-2xl text-zinc-200 mb-8 font-light">
          Men. Outdoors. Brotherhood. The narrow trail of following Christ.
        </p>
        <div className="text-lg md:text-xl text-zinc-300 mb-12 space-y-4 max-w-3xl mx-auto">
          <p>
            Narrow Trail Brotherhood is a Christian men's fellowship and
            discipleship community based near Mississauga.
          </p>
          <p>
            We gather men around the outdoors - archery, hunting preparation,
            wilderness skills - and we open the Scriptures together.
          </p>
          <p>
            Some men arrive as men of faith. Many come faith curious. All are
            invited to walk the narrow trail that leads to life.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-emerald-700 text-white rounded-lg hover:bg-emerald-600 transition-colors font-semibold text-lg"
          >
            Join the Brotherhood
          </button>
          <button
            onClick={() => scrollToSection('the-path')}
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg"
          >
            Learn how it works
          </button>
        </div>
      </div>
    </section>
  )
}

