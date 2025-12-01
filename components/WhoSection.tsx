/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Section from './Section'

export default function WhoSection() {
  return (
    <Section id="who" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
          Who Is Narrow Trail Brotherhood For?
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-stone-100 rounded-lg shadow-lg p-8 border-t-4 border-emerald-700">
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
            Men Of Faith
          </h3>
          <div className="space-y-3 text-zinc-700">
            <p>
              You are already a follower of Christ and want deeper brotherhood,
              real accountability, and a place to grow in masculine discipleship.
            </p>
            <p>
              You want to use your love of the outdoors to reach other men and
              to be sharpened yourself.
            </p>
            <p>
              You are willing to open the Bible, pray with other men, and carry
              one another's burdens.
            </p>
          </div>
        </div>

        <div className="bg-stone-100 rounded-lg shadow-lg p-8 border-t-4 border-emerald-700">
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
            Men Who Are Faith Curious
          </h3>
          <div className="space-y-3 text-zinc-700">
            <p>
              You may not know what you believe yet. You may have church in your
              past or none at all.
            </p>
            <p>
              You are hungry for something real, tired of shallow entertainment,
              and drawn to the outdoors and honest conversation.
            </p>
            <p>
              You are willing to listen, ask questions, and wrestle with what
              Scripture says about God, sin, forgiveness, and purpose.
            </p>
            <p>
              No one here will force you to fake beliefs. You can come as you
              are, with respect, and consider the narrow trail that Jesus speaks
              about.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center bg-emerald-50 rounded-lg p-6 border border-emerald-200">
        <p className="text-lg text-zinc-800 italic">
          Both types of men will be in the same camp, learning from each other,
          and walking the trail together.
        </p>
      </div>
    </Section>
  )
}

