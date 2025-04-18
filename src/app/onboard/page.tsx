'use client'

import { useEffect, useState } from 'react'
import HeaderDesktop from '../../components/HeaderDesktop'
import FooterDesktop from '../../components/FooterDesktop'
import { motion } from 'framer-motion'

type Employee = {
  id: number
  name: string
  title: string
}

export default function OnboardPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    visiting: ''
  })

  const [employees, setEmployees] = useState<Employee[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('/api/employees')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.employees)) setEmployees(data.employees)
      })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem('contractor-info', JSON.stringify(form))
    window.location.href = '/onboard/video'
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <HeaderDesktop />

      <main className="flex-grow flex justify-center items-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-xl bg-gray-50 rounded-3xl shadow-2xl p-10 md:p-12 space-y-8"
        >
          <div className="text-center space-y-2">
            <span className="inline-block text-xs font-semibold tracking-wider text-blue-700 bg-blue-100 rounded-full px-3 py-1 uppercase">
              Step 1 of 4
            </span>
            <h1 className="text-2xl font-extrabold">Contractor Onboarding</h1>
            <p className="text-sm text-gray-500">Please fill out the form to begin onboarding.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Company</label>
              <input
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                required
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Who are you here to see?</label>
              <select
                name="visiting"
                value={form.visiting}
                onChange={handleChange}
                required
                className="w-full border rounded px-4 py-2 bg-white"
              >
                <option value="">Select employee</option>
                {employees.map(emp => (
                  <option key={emp.id} value={emp.name}>
                    {emp.name} — {emp.title}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl text-base tracking-tight shadow"
            >
              Continue to Safety Video
            </button>
          </form>
        </motion.div>
      </main>

      <FooterDesktop />
    </div>
  )
}
