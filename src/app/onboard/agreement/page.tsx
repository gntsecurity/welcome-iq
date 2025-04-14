'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function PolicyAgreement() {
  const router = useRouter()
  const [signature, setSignature] = useState('')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!signature.trim() || !date.trim()) return

    const formData = localStorage.getItem('contractor-info')
    if (!formData) return

    const parsed = JSON.parse(formData)
    const newEntry = {
      name: parsed.name,
      company: parsed.company,
      email: parsed.email,
      visiting: parsed.visiting,
      date,
      signature
    }

    const existingLogs = JSON.parse(localStorage.getItem('contractor-logs') || '[]')
    const updatedLogs = [...existingLogs, newEntry]
    localStorage.setItem('contractor-logs', JSON.stringify(updatedLogs))

    localStorage.removeItem('contractor-info')
    localStorage.removeItem('contractor-signature')

    router.push('/onboard/complete')
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-16">
      <AnimatePresence>
        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full max-w-xl bg-white shadow-2xl rounded-3xl px-8 py-10 md:px-12 md:py-12 space-y-10"
          >
            <div className="text-center">
              <span className="inline-block text-xs font-semibold tracking-wider text-blue-700 bg-blue-100 rounded-full px-3 py-1 uppercase mb-4">
                Step 3 of 4
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                Contractor Policy Agreement
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Review the safety and liability requirements. Then sign and date to continue.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-5 text-sm text-gray-700 space-y-3">
              <p className="font-medium">This policy governs all contractors at Angstrom facilities:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>PPE:</strong> Bring your own PPE. Safety glasses required at all times.</li>
                <li><strong>Liability:</strong> You are fully responsible for your actions and safety.</li>
                <li><strong>Safety:</strong> Lockout/Tagout, Hot Work Permit, Fall Protection required.</li>
                <li><strong>Recording:</strong> Strictly prohibited unless supervised by Angstrom staff.</li>
                <li><strong>Emergency:</strong> Follow fire, weather, and spill protocols.</li>
                <li><strong>Escort:</strong> Must be escorted unless explicitly approved.</li>
                <li><strong>Compliance:</strong> Violation = removal and contract termination.</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name (Signature)
                </label>
                <input
                  type="text"
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                  required
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl tracking-tight shadow-lg"
              >
                I Agree and Continue
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
