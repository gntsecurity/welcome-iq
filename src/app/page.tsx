'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import HeaderDesktop from '../components/HeaderDesktop'
import FooterDesktop from '../components/FooterDesktop'

export default function LandingPage() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
      router.push('/onboard')
    }
  }, [router])

  if (isMobile) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col text-gray-900 font-sans">
      <HeaderDesktop />

      <main className="flex-grow flex items-center justify-center px-6 md:px-12 py-12">
        <AnimatePresence>
          <motion.div
            key="landing-hero"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl px-10 py-14 max-w-3xl w-full text-center space-y-8"
          >
            <div className="space-y-3">
              <span className="inline-block text-xs font-semibold tracking-wide text-blue-700 bg-blue-100 rounded-full px-3 py-1 uppercase">
                Admin Portal
              </span>
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Welcome-IQ Admin
              </h1>
              <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
                Effortless contractor onboarding and facility compliance. Designed for security, speed, and peace of mind.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a
                href="/org"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl text-sm"
              >
                Configure Organization
              </a>
              <a
                href="/admin"
                className="border border-gray-300 hover:border-gray-400 text-gray-800 font-semibold px-6 py-3 rounded-xl text-sm"
              >
                Go to Dashboard
              </a>
              <a
                href="/onboard"
                className="text-blue-600 border border-blue-200 hover:border-blue-300 hover:text-blue-700 font-semibold px-6 py-3 rounded-xl text-sm"
              >
                Contractor Sign-In
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      <FooterDesktop />
    </div>
  )
}
