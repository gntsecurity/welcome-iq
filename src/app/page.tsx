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

      <main className="flex-grow flex items-center justify-center px-6 md:px-12 py-20 bg-[url('/bg-grid.svg')] bg-top bg-no-repeat bg-contain">
        <AnimatePresence>
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full max-w-5xl rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl px-12 py-16 text-center border border-gray-200 space-y-10"
          >
            <div className="space-y-4">
              <span className="inline-block text-xs font-semibold tracking-wider text-blue-700 bg-blue-100 rounded-full px-3 py-1 uppercase">
                Enterprise-grade Security
              </span>

              <h1 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Welcome-IQ
              </h1>

              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Contractor onboarding, visitor logging, and safety compliance — all in one seamless PWA. Optimized for manufacturing, logistics, and secure enterprise environments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <a
                href="/onboard"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl text-sm shadow-md transition"
              >
                Contractor Sign-In
              </a>
              <a
                href="/admin"
                className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-semibold px-6 py-3 rounded-xl text-sm shadow-sm transition"
              >
                Admin Dashboard
              </a>
              <a
                href="/org"
                className="text-blue-600 border border-blue-200 hover:border-blue-300 hover:text-blue-700 font-semibold px-6 py-3 rounded-xl text-sm transition"
              >
                Organization Settings
              </a>
            </div>

            <div className="pt-6 text-xs text-gray-400 tracking-wide">
              Built for Angstrom Fiber Englewood | Powered by Supabase + Cloudflare Workers
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      <FooterDesktop />
    </div>
  )
}
