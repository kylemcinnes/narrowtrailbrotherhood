import React from 'react'
import Section from './Section'

export default function AboutSection() {
  const pillars = [
    {
      title: 'Christ Centered',
      text: 'Jesus Christ and His Word are at the center of everything we do.',
    },
    {
      title: 'Outdoors Forged',
      text: 'We use nature, skills, and challenge to forge brotherhood and character.',
    },
    {
      title: 'For Men Of Faith And Faith Curious',
      text: 'We welcome committed believers and men who are wrestling with what they believe.',
    },
  ]

  return (
    <Section id="about" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
          Our Mission
        </h2>
        <div className="space-y-4 text-lg text-zinc-700 max-w-4xl mx-auto">
          <p>
            Narrow Trail Brotherhood exists to call men into real brotherhood,
            real discipleship, and real encounter with God through the outdoors.
          </p>
          <p>
            We believe the trail that leads to life is narrow. It is a path of
            repentance, faith in Jesus Christ, obedience, courage, and love for
            others.
          </p>
          <p>
            We use archery, hunting preparation, and time in the wilderness as
            tools to bring men together, build trust, and open the Bible in an
            honest way.
          </p>
          <p>
            We are not a replacement for the local church. We are an arm that
            reaches men, sharpens men, and sends them back to serve faithfully in
            their homes and churches.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="bg-stone-100 rounded-lg shadow-lg p-8 border-t-4 border-emerald-700"
          >
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">
              {pillar.title}
            </h3>
            <p className="text-zinc-700">{pillar.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

