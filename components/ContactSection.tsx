'use client'

import React, { useState } from 'react'
import Section from './Section'

interface FormData {
  name: string
  email: string
  description: string
  journey: string
  interests: string[]
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    description: '',
    journey: '',
    interests: [],
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const descriptionOptions = [
    'Man of faith',
    'Faith curious',
    'Landowner',
    'Pastor or church leader',
    'Other',
  ]

  const interestOptions = [
    'Intro archery nights',
    'PAL and hunting courses',
    'Future hunts or wilderness trips',
    'Making land available',
    'Other',
  ]

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (interest: string) => {
    setFormData((prev) => {
      const interests = prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest]
      return { ...prev, interests }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    // Get Formspree form ID from environment variable or use default
    // In production, set NEXT_PUBLIC_FORMSPREE_ID in Cloudflare Pages environment variables
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'your-form-id-here'

    try {
      // Format data for Formspree
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      if (formData.description) {
        formDataToSend.append('description', formData.description)
      }
      if (formData.journey) {
        formDataToSend.append('faith_journey', formData.journey)
      }
      if (formData.interests.length > 0) {
        formDataToSend.append('interests', formData.interests.join(', '))
      }
      if (formData.message) {
        formDataToSend.append('message', formData.message)
      }

      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message:
            'Thank you for reaching out. We will pray for you and respond as soon as we can.',
        })
        setFormData({
          name: '',
          email: '',
          description: '',
          journey: '',
          interests: [],
          message: '',
        })
      } else {
        const data = await response.json()
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.',
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section id="contact" className="bg-stone-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            Contact Narrow Trail Brotherhood
          </h2>
          <p className="text-lg text-zinc-700">
            If you are interested in joining the brotherhood, hosting us on your
            land, or just want to talk about where you are at in your faith
            journey, we would be glad to hear from you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 md:p-10 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-zinc-900 mb-2"
            >
              Full name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-zinc-900 mb-2"
            >
              Email address <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-zinc-900 mb-2"
            >
              How would you describe yourself?
            </label>
            <select
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="">Select an option</option>
              {descriptionOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="journey"
              className="block text-sm font-semibold text-zinc-900 mb-2"
            >
              Where are you at in your faith journey?
            </label>
            <textarea
              id="journey"
              name="journey"
              rows={4}
              value={formData.journey}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-900 mb-3">
              What are you interested in?
            </label>
            <div className="space-y-2">
              {interestOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="w-4 h-4 text-emerald-600 border-zinc-300 rounded focus:ring-emerald-500"
                  />
                  <span className="text-zinc-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-zinc-900 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {submitStatus.type && (
            <div
              className={`p-4 rounded-lg ${
                submitStatus.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-emerald-700 text-white rounded-lg hover:bg-emerald-600 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </Section>
  )
}

