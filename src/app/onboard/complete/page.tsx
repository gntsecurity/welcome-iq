'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CompletionScreen() {
  const [contractor, setContractor] = useState<{ name: string, company: string, visiting: string } | null>(null)

  useEffect(() => {
    const data = localStorage.getItem('contractor-logs')
    if (data) {
      const logs = JSON.parse(data)
      const last = logs[logs.length - 1]
      setContractor({
        name: last.name,
        company: last.company,
        visiting: last.visiting
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-10 md:p-12 space-y-8 text-center"
      >
        <span className="inline-block text-xs font-semibold tracking-wider text-green-700 bg-green-100 rounded-full px-3 py-1 uppercase">
          Step 4 of 4
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          You're All Set
        </h1>

        <p className="text-gray-600 text-sm md:text-base">
          Thank you <strong>{contractor?.name}</strong> from <strong>{contractor?.company}</strong>.
        </p>
        <p className="text-gray-600 text-sm md:text-base">
          We've notified <strong>{contractor?.visiting}</strong> that you're on site.
        </p>

        <div className="pt-6 text-sm text-gray-400 border-t">
          Please remain in the waiting area. A team member will arrive shortly.
        </div>
      </motion.div>
    </main>
  )
}
