import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-12">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <p className="text-lg mb-4">
          Narrow Trail Brotherhood - Walking the narrow trail together, by the
          grace of God.
        </p>
        <p className="text-sm">
          Contact:{' '}
          <a
            href="mailto:kylesmcinnes@gmail.com"
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            kylesmcinnes@gmail.com
          </a>
        </p>
      </div>
    </footer>
  )
}

