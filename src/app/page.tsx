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
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-white font-sans">
      <HeaderDesktop />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden">
        {/* Vibe Layer */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0f1c] to-[#0d1117]" />

        {/* Subtle pulse edge glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[600px] w-[800px] bg-blue-600 opacity-[0.035] blur-3xl rounded-full animate-pulse-slow" />

        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome-IQ
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg mt-6 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Secure onboarding. Site control. Total visibility.  
          Built for ops that can’t afford to guess.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="/onboard"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            Contractor Sign-In
          </a>
          <a
            href="/admin"
            className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-3 rounded-lg border transition"
          >
            Admin Dashboard
          </a>
          <a
            href="/org"
            className="text-blue-400 hover:text-blue-300 font-medium px-6 py-3 rounded-lg border border-blue-500 transition"
          >
            Org Settings
          </a>
        </motion.div>

        <div className="mt-10 text-xs text-gray-600">
          Built for Angstrom Fiber Englewood · Powered by Supabase + Cloudflare Workers
        </div>
      </main>

      <FooterDesktop />
    </div>
  )
}
