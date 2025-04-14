'use client'

import { useEffect, useState } from 'react'
import HeaderDesktop from '../components/HeaderDesktop'
import FooterDesktop from '../components/FooterDesktop'
import { motion } from 'framer-motion'

type LogEntry = {
  name: string
  company: string
  email: string
  visiting: string
  date: string
  signature: string
}

export default function LogsPage() {
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [confirmClear, setConfirmClear] = useState(false)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('contractor-logs') || '[]')
    setLogs(saved)
  }, [])

  const deleteEntry = (index: number) => {
    const updated = [...logs]
    updated.splice(index, 1)
    localStorage.setItem('contractor-logs', JSON.stringify(updated))
    setLogs(updated)
  }

  const clearAllLogs = () => {
    localStorage.removeItem('contractor-logs')
    setLogs([])
    setConfirmClear(false)
  }

  const exportCSV = () => {
    const header = ['Name', 'Company', 'Email', 'Visiting', 'Date', 'Signature']
    const rows = logs.map(l => [l.name, l.company, l.email, l.visiting, l.date, l.signature])
    const csvContent = [header, ...rows].map(r => r.map(v => `"${v}"`).join(',')).join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'contractor_logs.csv'
    link.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900 flex flex-col">
      <HeaderDesktop />

      <main className="flex-grow px-6 md:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-6xl mx-auto space-y-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-1">
                Contractor Logs
              </h1>
              <p className="text-gray-600 text-sm">Review all onboarding completions</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={exportCSV}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm"
              >
                Export CSV
              </button>
              <button
                onClick={() => setConfirmClear(true)}
                className="border border-red-500 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition text-sm"
              >
                Clear All
              </button>
            </div>
          </div>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-xl">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50 text-gray-600 text-left uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Company</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Visiting</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Signature</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {logs.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center px-6 py-10 text-gray-400 italic">
                      No logs found.
                    </td>
                  </tr>
                ) : (
                  logs.map((log, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4">{log.name}</td>
                      <td className="px-6 py-4">{log.company}</td>
                      <td className="px-6 py-4">{log.email}</td>
                      <td className="px-6 py-4">{log.visiting}</td>
                      <td className="px-6 py-4">{log.date}</td>
                      <td className="px-6 py-4">{log.signature}</td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => deleteEntry(i)}
                          className="text-red-500 hover:text-red-700 text-xs font-medium"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {confirmClear && (
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl space-y-4">
                <h2 className="text-lg font-bold">Clear all logs?</h2>
                <p className="text-sm text-gray-500">This action cannot be undone.</p>
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    onClick={() => setConfirmClear(false)}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={clearAllLogs}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </main>

      <FooterDesktop />
    </div>
  )
}
