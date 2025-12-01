/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Section from './Section'

export default function OutdoorsSection() {
  return (
    <Section
      id="outdoors"
      className="text-white"
      backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          The Outdoors And The Gift Of God
        </h2>
        <div className="space-y-4 text-lg md:text-xl text-zinc-100">
          <p>
            Creation is not an accident. The forests, lakes, ridges, and trails
            are the work of God's hands.
          </p>
          <p>
            When we walk a narrow deer trail or sit quietly at first light, we
            are reminded that the world is not about us.
          </p>
          <p>
            God has given these places as a gift and a classroom. We learn
            patience, humility, dependence, and gratitude.
          </p>
          <p>
            When God provides game on a hunt, we receive it with thanksgiving,
            use it wisely, and remember that every good gift is from Him.
          </p>
        </div>
      </div>
    </Section>
  )
}

