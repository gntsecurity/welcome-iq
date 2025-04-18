'use client'

import { useEffect, useState } from 'react'

type LogEntry = {
  id: string
  company: string
  person_visited: string
  timestamp: string
  metadata: { name: string; email: string }
  created_by: string
}

export default function LogsPage() {
  const [logs, setLogs] = useState<LogEntry[]>([])

  useEffect(() => {
    const fetchLogs = async () => {
      const res = await fetch('/api/logs')
      const data = await res.json()
      if (Array.isArray(data)) {
        setLogs(data)
      }
    }

    fetchLogs()
  }, [])

  const handleDelete = async (id: string) => {
    await fetch(`/api/logs?id=${id}`, { method: 'DELETE' })
    setLogs((prev) => prev.filter((log) => log.id !== id))
  }

  const handleClear = async () => {
    await fetch('/api/logs', { method: 'DELETE' })
    setLogs([])
  }

  const handleExport = () => {
    const headers = ['Name', 'Company', 'Email', 'Visiting', 'Date', 'Signature']
    const rows = logs.map(log => [
      log.metadata?.name || '',
      log.company,
      log.metadata?.email || '',
      log.person_visited,
      new Date(log.timestamp).toLocaleString(),
      log.created_by
    ])

    const csvContent =
      [headers, ...rows]
        .map(row => row.map(String).map(val => `"${val.replace(/"/g, '""')}"`).join(','))
        .join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'contractor_logs.csv'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6">Contractor Logs</h1>
        <p className="text-gray-600 mb-8">Review all onboarding completions</p>

        <div className="flex justify-end space-x-4 mb-4">
          <button
            onClick={handleExport}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Export CSV
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200"
          >
            Clear All
          </button>
        </div>

        <div className="overflow-x-auto rounded-xl shadow">
          <table className="min-w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Company</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Visiting</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Signature</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{log.metadata?.name || ''}</td>
                  <td className="px-6 py-4">{log.company}</td>
                  <td className="px-6 py-4">{log.metadata?.email || ''}</td>
                  <td className="px-6 py-4">{log.person_visited}</td>
                  <td className="px-6 py-4">{new Date(log.timestamp).toLocaleString()}</td>
                  <td className="px-6 py-4">{log.created_by}</td>
                  <td className="px-6 py-4 text-red-600 hover:underline cursor-pointer" onClick={() => handleDelete(log.id)}>
                    Delete
                  </td>
                </tr>
              ))}
              {logs.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-6 text-gray-400">
                    No logs to display.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
