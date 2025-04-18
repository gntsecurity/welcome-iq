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
    <div className="min-h-screen flex flex-col bg-gray-950 text-white font-sans overflow-hidden">
      <HeaderDesktop />

      {/* BACKGROUND ANIMATION LAYER */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-90" />
        <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-blue-600 opacity-10 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-indigo-400 opacity-10 blur-2xl animate-float" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] bg-[size:40px_40px]" />
      </div>

      <main className="flex-grow px-6 md:px-12 py-28 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-5xl space-y-10"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Welcome-IQ
          </motion.h1>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Enterprise-grade contractor onboarding, security compliance, and site access visibility
            — engineered for serious operations, trusted by high-risk industries.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="/onboard"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl text-sm shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Contractor Sign-In
            </a>
            <a
              href="/admin"
              className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold px-6 py-3 rounded-xl text-sm shadow-md transition"
            >
              Admin Dashboard
            </a>
            <a
              href="/org"
              className="text-blue-400 border border-blue-500 hover:border-blue-400 hover:text-blue-300 font-semibold px-6 py-3 rounded-xl text-sm transition"
            >
              Org Settings
            </a>
          </motion.div>

          <div className="pt-8 text-xs text-gray-600 tracking-wide">
            Built for Angstrom Fiber Englewood · Supabase + Cloudflare Workers
          </div>
        </motion.div>
      </main>

      <FooterDesktop />
    </div>
  )
}
