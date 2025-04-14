'use client'

import { useState } from 'react'
import orgConfig from '../../../org.config.json'

type Employee = {
  name: string
  title: string
}

export default function OrgPage() {
  const [employees, setEmployees] = useState<Employee[]>(orgConfig.employees)

  const updateEmployee = (index: number, field: keyof Employee, value: string) => {
    const updated = [...employees]
    updated[index] = { ...updated[index], [field]: value }
    setEmployees(updated)
  }

  const addEmployee = () => {
    setEmployees([...employees, { name: '', title: '' }])
  }

  const removeEmployee = (index: number) => {
    const updated = [...employees]
    updated.splice(index, 1)
    setEmployees(updated)
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Organization Configuration</h1>
      <div className="space-y-4">
        {employees.map((employee, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md space-y-2">
            <input
              type="text"
              placeholder="Full Name"
              value={employee.name}
              onChange={(e) => updateEmployee(index, 'name', e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Job Title"
              value={employee.title}
              onChange={(e) => updateEmployee(index, 'title', e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <button
              onClick={() => removeEmployee(index)}
              className="text-red-600 hover:underline text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={addEmployee}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
      >
        Add Employee
      </button>
    </main>
  )
}
