'use client'

import { useState } from 'react'
import HeaderDesktop from '../../components/HeaderDesktop'
import FooterDesktop from '../../components/FooterDesktop'
import { motion } from 'framer-motion'

export default function OnboardPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    visiting: '',
    signature: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const logEntry = {
      ...form,
      date: new Date().toISOString()
    }

    const res = await fetch('/api/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(logEntry)
    })

    if (res.ok) {
      setSubmitted(true)
    } else {
      alert('Failed to save log.')
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <HeaderDesktop />

      <main className="flex-grow flex justify-center items-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-xl bg-gray-50 rounded-3xl shadow-2xl p-10 md:p-12 space-y-8"
        >
          {submitted ? (
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Thank you!</h2>
              <p className="text-gray-600">Your onboarding log has been submitted.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Company</label>
                <input
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Who are you visiting?</label>
                <input
                  name="visiting"
                  type="text"
                  value={form.visiting}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Signature</label>
                <input
                  name="signature"
                  type="text"
                  value={form.signature}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-4 py-2"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl text-base tracking-tight shadow"
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          )}
        </motion.div>
      </main>

      <FooterDesktop />
    </div>
  )
}
