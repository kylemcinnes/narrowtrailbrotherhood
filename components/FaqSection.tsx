import React from 'react'
import Section from './Section'

export default function FaqSection() {
  const faqs = [
    {
      question: 'Do I need experience with archery or hunting?',
      answer:
        'No. Beginners are welcome. We start with basic archery and safety and build from there.',
    },
    {
      question: 'Do I need to be a Christian to come?',
      answer:
        'No. Any man who is willing to respect others, follow safety rules, and listen honestly is welcome. We will speak clearly about Christ and the Bible, but you will never be forced to pretend belief.',
    },
    {
      question: 'Is this connected to a church?',
      answer:
        'Narrow Trail Brotherhood is led by committed believers who are members of local churches. We encourage every man to be rooted in a sound, Bible teaching church.',
    },
    {
      question: 'How often do you meet?',
      answer:
        'Our aim is to meet roughly once a month in the warmer seasons and take a break in the deep winter.',
    },
    {
      question: 'Will there be rifle shooting and real hunts?',
      answer:
        'Our long term vision includes helping men obtain PALs, complete hunting courses, and participate in lawful, ethical hunts as Christian fellowship trips. All of this is done with care, training, and respect for the law and the animals we pursue.',
    },
    {
      question: 'What does it cost?',
      answer:
        'Some events may have a small cost to cover land use, gear, and training. We do not want cost to be a barrier. Men can talk to us privately if they need help.',
    },
  ]

  return (
    <Section id="faq" className="bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-stone-100 rounded-lg shadow-md p-6 md:p-8 border-l-4 border-emerald-700"
            >
              <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-zinc-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

