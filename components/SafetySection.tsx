import React from 'react'
import Section from './Section'

export default function SafetySection() {
  const commitments = [
    'A designated leader will oversee all shooting and training.',
    'Clear range rules and commands for archery.',
    'All archery practice is directed into proper targets with secure backstops.',
    'No broadheads are used on practice ranges.',
    'All firearms training and hunting is done in line with Canadian law and provincial regulations.',
    'We encourage and assist men in completing their PAL and hunting courses through recognized programs.',
    'All participants sign waivers and agree to follow safety instructions.',
    'We carry liability coverage for activities where appropriate and work with landowners to respect their property and boundaries.',
  ]

  return (
    <Section id="safety" className="bg-stone-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            Safety And Responsibility
          </h2>
          <div className="space-y-4 text-lg text-zinc-700">
            <p>
              We take safety seriously. Archery and firearms are tools that must
              be handled with respect.
            </p>
            <p>
              Our goal is not thrill seeking. Our goal is disciplined, careful,
              and lawful use of equipment and land.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
          <h3 className="text-2xl font-bold text-zinc-900 mb-6">
            Our Commitments
          </h3>
          <ul className="space-y-4">
            {commitments.map((commitment, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-700 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  ✓
                </span>
                <span className="text-zinc-700">{commitment}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

