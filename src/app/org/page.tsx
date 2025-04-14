'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HeaderDesktop from '../../components/HeaderDesktop'
import FooterDesktop from '../../components/FooterDesktop'

type Employee = {
  name: string
  title: string
}

export default function OrgConfigPage() {
  const [orgName, setOrgName] = useState('')
  const [primaryColor, setPrimaryColor] = useState('#1D4ED8')
  const [employees, setEmployees] = useState<Employee[]>([])

  useEffect(() => {
    fetch('/api/employees')
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data.employees)) {
          setEmployees(data.employees)
        }
      })
  }, [])

  const addEmployee = () => {
    setEmployees([...employees, { name: '', title: '' }])
  }

  const updateEmployee = (index: number, field: keyof Employee, value: string) => {
    const updated = [...employees]
    updated[index] = { ...updated[index], [field]: value }
    setEmployees(updated)
  }

  const saveConfig = async () => {
    const config = {
      orgName,
      primaryColor,
      employees: employees.filter(e => e.name.trim() && e.title.trim())
    }

    const res = await fetch('/api/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config.employees)
    })

    if (!res.ok) {
      alert('Failed to save employee list.')
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white text-gray-900">
      <HeaderDesktop />

      <main className="flex-grow flex items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl p-10 md:p-12 space-y-10"
        >
          <div className="text-center space-y-3">
            <span className="inline-block text-xs font-semibold tracking-wider text-blue-700 bg-blue-100 rounded-full px-3 py-1 uppercase">
              Org Setup
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Configure Your Organization
            </h1>
            <p className="text-gray-500 text-sm md:text-base">
              Customize your onboarding experience with your team info and brand color.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block font-medium text-sm text-gray-700 mb-1">Organization Name</label>
              <input
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder="e.g. Angstrom"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium text-sm text-gray-700 mb-1">Primary Brand Color</label>
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="h-12 w-24 border-2 border-gray-300 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <label className="block font-medium text-sm text-gray-700 mb-2">Team Members</label>
              <div className="space-y-3">
                {employees.map((emp, i) => (
                  <div key={i} className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Name"
                      value={emp.name}
                      onChange={(e) => updateEmployee(i, 'name', e.target.value)}
                      className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
                    />
                    <input
                      type="text"
                      placeholder="Title"
                      value={emp.title}
                      onChange={(e) => updateEmployee(i, 'title', e.target.value)}
                      className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addEmployee}
                  className="text-sm text-blue-600 font-medium hover:underline"
                >
                  + Add Another
                </button>
              </div>
            </div>

            <button
              onClick={saveConfig}
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-xl text-base tracking-tight shadow-lg"
            >
              Save to Supabase
            </button>
          </div>
        </motion.div>
      </main>

      <FooterDesktop />
    </div>
  )
}
