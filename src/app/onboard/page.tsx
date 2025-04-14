'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import orgConfig from '../../org.config.json'

export default function OnboardingForm() {
  const router = useRouter()

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    visiting: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem('contractor-info', JSON.stringify(form))
    router.push('/onboard/video')
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-xl bg-white shadow-2xl rounded-3xl p-8 md:p-10 space-y-8"
      >
        <div className="text-center space-y-3">
          <span className="inline-block text-xs font-semibold tracking-wider text-blue-700 bg-blue-100 rounded-full px-3 py-1 uppercase">
            Step 1 of 4
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Contractor Sign-In
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Please provide your details to begin the onboarding process.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Apex Contractors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Who are you here to see?</label>
            <select
              name="visiting"
              value={form.visiting}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a person...</option>
              {orgConfig.employees.map((emp, i) => (
                <option key={i} value={`${emp.name} – ${emp.title}`}>
                  {emp.name} – {emp.title}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-xl text-base tracking-tight shadow-lg"
          >
            Continue to Safety Video
          </button>
        </form>
      </motion.div>
    </main>
  )
}
