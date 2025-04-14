import { supabase } from './index'

export async function addLog(log: {
  company: string
  person: string
  time?: string
  notes?: string
}) {
  const { error } = await supabase.from('logs').insert([{
    ...log,
    time: log.time || new Date().toISOString()
  }])
  if (error) throw error
}

export async function getLogs() {
  const { data, error } = await supabase.from('logs').select('*').order('time', { ascending: false })
  if (error) throw error
  return data
}
