import React from 'react'
import Section from './Section'

export default function LandownersSection() {
  return (
    <Section id="landowners" className="bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            A Word To Landowners
          </h2>
          <p className="text-lg text-zinc-700">
            Narrow Trail Brotherhood needs safe rural places to walk this out.
          </p>
          <p className="text-lg text-zinc-700 mt-2">
            We are seeking landowners within a reasonable drive of Mississauga
            who are open to allowing small, supervised gatherings for archery
            practice and, where appropriate, future hunting access under clear
            agreements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-stone-100 rounded-lg shadow-lg p-8 border-t-4 border-emerald-700">
            <h3 className="text-2xl font-bold text-zinc-900 mb-6">
              What We Need
            </h3>
            <ul className="space-y-3 text-zinc-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">•</span>
                <span>
                  A safe area for archery practice with a clear shooting lane
                  and backstop.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">•</span>
                <span>
                  In time, access to suitable land for lawful bow and rifle
                  hunts for properly licensed men.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">•</span>
                <span>
                  Clarity about boundaries, rules, and expectations on your
                  property.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-stone-100 rounded-lg shadow-lg p-8 border-t-4 border-emerald-700">
            <h3 className="text-2xl font-bold text-zinc-900 mb-6">
              What We Offer
            </h3>
            <ul className="space-y-3 text-zinc-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">•</span>
                <span>Respectful, supervised use of your land.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">•</span>
                <span>
                  A clear safety plan and adherence to your instructions.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">•</span>
                <span>
                  Liability coverage for organized activities, with
                  documentation provided.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">•</span>
                <span>
                  Men who will leave your property better than they found it.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-lg p-8 border border-emerald-200 text-center">
          <p className="text-lg text-zinc-800 mb-2">
            If you are a Christian landowner who wants your land to be used for
            the glory of God and the building up of men, we would be honored to
            talk.
          </p>
          <p className="text-lg text-zinc-800">
            If you are not a believer but respect what you see here, we would
            still be glad to listen and see if there is a way to partner that
            feels right to you.
          </p>
        </div>
      </div>
    </Section>
  )
}

