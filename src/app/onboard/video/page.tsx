'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function SafetyVideoScreen() {
  const router = useRouter()
  const [canContinue, setCanContinue] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setCanContinue(true), 60 * 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl p-8 md:p-10 space-y-8"
      >
        <div className="text-center">
          <span className="inline-block text-xs font-semibold tracking-wider text-blue-700 bg-blue-100 rounded-full px-3 py-1 uppercase mb-4">
            Step 2 of 4
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
            Contractor Safety Video
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Please watch the full safety briefing before continuing. The “Continue” button will activate when complete.
          </p>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/bIKHudof6pc?si=9-DBJV0_IFHpt4rC"
            title="Contractor Safety Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="flex justify-center">
          <button
            disabled={!canContinue}
            onClick={() => router.push('/onboard/agreement')}
            className={`px-6 py-3 rounded-xl font-semibold text-sm md:text-base transition ${
              canContinue
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-400 cursor-not-allowed'
            }`}
          >
            {canContinue ? 'Continue to Agreement' : 'Please watch the full video'}
          </button>
        </div>
      </motion.div>
    </main>
  )
}
