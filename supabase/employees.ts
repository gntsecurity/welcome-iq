import { supabase } from './index'

export async function getEmployees() {
  const { data, error } = await supabase.from('employees').select('*')
  if (error) throw error
  return data
}

export async function addEmployee(employee: { name: string; title: string }) {
  const { error } = await supabase.from('employees').insert([employee])
  if (error) throw error
}

export async function updateEmployee(id: number, updates: { name?: string; title?: string }) {
  const { error } = await supabase.from('employees').update(updates).eq('id', id)
  if (error) throw error
}

export async function deleteEmployee(id: number) {
  const { error } = await supabase.from('employees').delete().eq('id', id)
  if (error) throw error
}
