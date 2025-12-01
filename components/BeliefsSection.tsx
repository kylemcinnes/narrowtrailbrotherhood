import React from 'react'
import Section from './Section'

export default function BeliefsSection() {
  const beliefs = [
    'God is holy, the Creator of heaven and earth, and worthy of all worship.',
    'All people have sinned and fall short of God\'s standard.',
    'Jesus Christ, the Son of God, took on flesh, lived without sin, died on the cross, and rose bodily from the dead.',
    'Salvation is by grace alone, through faith alone, in Christ alone, not by our works.',
    'All who repent of sin and trust in Christ are forgiven, adopted as sons, and given new life by the Holy Spirit.',
    'Christ calls His people to walk a narrow trail of obedience, holiness, and love, in the power of the Spirit.',
    'God has given the local church as the primary place of worship, teaching, discipline, and mission. Narrow Trail Brotherhood seeks to support, not replace, healthy local churches.',
  ]

  return (
    <Section id="beliefs" className="bg-stone-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            What We Believe
          </h2>
          <p className="text-lg text-zinc-700">
            Narrow Trail Brotherhood is a Christian ministry that stands on the
            authority of the Bible and the good news of Jesus Christ. We affirm
            that:
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
          <ul className="space-y-4">
            {beliefs.map((belief, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-700 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  ✓
                </span>
                <span className="text-zinc-700">{belief}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg text-zinc-700">
            If you want a more detailed statement of faith, you can request it
            in the contact form.
          </p>
        </div>
      </div>
    </Section>
  )
}

