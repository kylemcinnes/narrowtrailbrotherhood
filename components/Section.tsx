import React from 'react'

interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
  backgroundImage?: string
}

export default function Section({ id, children, className = '', backgroundImage }: SectionProps) {
  const sectionStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {}

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${className}`}
      style={sectionStyle}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {children}
      </div>
    </section>
  )
}

