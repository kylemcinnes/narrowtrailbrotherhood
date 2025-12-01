import React from 'react'
import Section from './Section'

export default function ProcessSection() {
  return (
    <Section id="the-path" className="bg-stone-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
          The Path We Walk Together
        </h2>
        <p className="text-lg text-zinc-700 max-w-3xl mx-auto">
          Narrow Trail Brotherhood is not just a one off event. It is a
          progression. We start simple and build toward deeper commitment,
          skill, and fellowship.
        </p>
      </div>

      <div className="space-y-12 md:space-y-16">
        {/* Phase 1 */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 border-l-4 border-emerald-700">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
              1
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900">
              Introductory Archery & Brotherhood
            </h3>
          </div>
          <div className="ml-16 space-y-3 text-zinc-700">
            <p>
              We begin with accessible monthly gatherings that focus on archery
              and basic field skills.
            </p>
            <p>
              Men learn how to safely handle a bow, shoot at targets, and enjoy
              friendly challenge.
            </p>
            <p>
              Each evening also includes time for prayer, thanksgiving, and a
              short opening of God's Word for those who want to listen and
              discuss.
            </p>
            <p>
              This is where Christian men and faith curious men start to know
              each other without pressure or pretense.
            </p>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 border-l-4 border-emerald-700">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
              2
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900">
              Training For The Hunt: PALs And Hunting Courses
            </h3>
          </div>
          <div className="ml-16 space-y-3 text-zinc-700">
            <p>
              As men grow in trust and interest, we help those who want to move
              further along the trail.
            </p>
            <p>
              We organize group training pathways to obtain Canadian firearms
              licenses (PAL), hunting safety courses, and practical preparation.
            </p>
            <p>
              Men can work through licensing together, study, train, and
              encourage one another.
            </p>
            <p>
              Throughout this phase we keep meeting in the Word of God, talking
              about sin, repentance, grace, and what it means to follow Christ as
              men.
            </p>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 border-l-4 border-emerald-700">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
              3
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900">
              Christian Fellowship Hunts And Wilderness Trips
            </h3>
          </div>
          <div className="ml-16 space-y-3 text-zinc-700">
            <p>
              For men who are ready and properly licensed, our long term vision
              includes Christian fellowship outings for bow hunting, rifle
              hunting, and wilderness retreats up north.
            </p>
            <p>
              These trips are not just about harvesting an animal. They are
              about shared work, early mornings, long sits, honest conversations,
              humble prayer, and worship for what God provides.
            </p>
            <p>
              Around campfires and in quiet stands we open the Scriptures, talk
              about marriage, fatherhood, temptation, suffering, and hope in
              Christ.
            </p>
            <p>
              The trail is narrow, but we do not walk it alone.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

