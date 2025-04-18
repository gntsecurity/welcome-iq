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

      <main className="relative flex-grow overflow-hidden px-6 md:px-12 py-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 to-white">
          <div className="absolute inset-0 bg-[url('/bg-grid.svg')] bg-top bg-no-repeat bg-contain opacity-20" />
        </div>

        <motion.div
          className="relative z-10 max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl px-12 py-20 text-center space-y-10"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="space-y-4">
            <motion.span
              className="inline-block text-xs font-semibold tracking-wider text-blue-700 bg-blue-100 rounded-full px-3 py-1 uppercase"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Contractor Access • Enterprise-grade Security
            </motion.span>

            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Welcome-IQ
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              The trusted platform for secure contractor onboarding, site check-ins, and safety compliance. Designed for manufacturing, defense, logistics, and high-security enterprise operations.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
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
              className="text-blue-600 border border-blue-200 hover:border-blue-300 hover:text-blue-700 font-semibold px-6 py-3 rounded-xl text-sm transition"
            >
              Organization Settings
            </a>
          </motion.div>

          <div className="pt-6 text-xs text-gray-400 tracking-wide">
            Built for Angstrom Fiber Englewood · Powered by Supabase + Cloudflare Workers
          </div>
        </motion.div>
      </main>

      <FooterDesktop />
    </div>
  )
}
