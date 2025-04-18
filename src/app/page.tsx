'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
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
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <HeaderDesktop />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-24 relative overflow-hidden">
        {/* BACKGROUND GLOW */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-blue-600 opacity-[0.04] blur-3xl animate-pulse-slow z-0" />

        {/* MAIN CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 max-w-5xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Welcome-IQ
          </h1>

          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Secure onboarding. Site control. Total visibility. Built for ops that can’t afford to guess.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/onboard"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
            >
              Contractor Sign-In
            </a>
            <a
              href="/admin"
              className="bg-white hover:bg-gray-100 border text-gray-900 font-semibold px-6 py-3 rounded-lg transition"
            >
              Admin Dashboard
            </a>
            <a
              href="/org"
              className="text-blue-600 border border-blue-500 hover:border-blue-600 hover:text-blue-700 font-semibold px-6 py-3 rounded-lg transition"
            >
              Org Settings
            </a>
          </div>

          <div className="mt-10 text-xs text-gray-400">
            Built for Angstrom Fiber Englewood · Powered by Supabase + Cloudflare Workers
          </div>
        </motion.div>
      </main>

      <FooterDesktop />
    </div>
  )
}
