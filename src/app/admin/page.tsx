'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import HeaderDesktop from '@/components/HeaderDesktop'
import FooterDesktop from '@/components/FooterDesktop'

export default function AdminDashboard() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900 font-sans flex flex-col">
      <HeaderDesktop />

      <main className="flex-grow px-6 md:px-12 py-12">
        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-7xl mx-auto space-y-12"
          >
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 text-base md:text-lg">
                View onboarding status, usage insights, and system configuration.
              </p>
            </div>

            <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card title="Contractors Today" value="17" />
              <Card title="Agreements Signed" value="241" />
              <Card title="Current Visitors On-Site" value="3" />
              <Card title="Org Configuration" value="✓" link="/org" />
              <Card title="View Logs" value="Open" link="/logs" />
              <Card title="Manage Branding" value="Customize" link="/org" />
            </section>
          </motion.div>
        )}
      </main>

      <FooterDesktop />
    </div>
  )
}

function Card({
  title,
  value,
  link
}: {
  title: string
  value: string
  link?: string
}) {
  const content = (
    <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition flex flex-col justify-between h-full">
      <div className="text-sm text-gray-500 mb-2">{title}</div>
      <div className="text-2xl font-semibold text-gray-900 mb-4">{value}</div>
      {link && (
        <div className="text-sm font-medium text-blue-600 hover:underline mt-auto">
          View →
        </div>
      )}
    </div>
  )

  return link ? <a href={link}>{content}</a> : content
}
