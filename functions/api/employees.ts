import { createClient } from '@supabase/supabase-js'
import type { PagesFunction } from '@cloudflare/workers-types'

const supabase = createClient(
  'https://xkaxefigpjuxbevmdqdf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrYXhlZmlncGp1eGJldm1kcWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MzUzMjMsImV4cCI6MjA2MDIxMTMyM30.tpKK42gVF6dpR52hOkqdyi-xrHfxLTes9tAXkatayfM'
)

export const onRequest: PagesFunction = async ({ request }) => {
  if (request.method === 'GET') {
    const { data, error } = await supabase
      .from('employees')
      .select('*')
      .order('id', { ascending: true })

    return new Response(JSON.stringify({ employees: data || [], error }), {
      headers: { 'Content-Type': 'application/json' },
      status: error ? 500 : 200
    })
  }

  if (request.method === 'POST') {
    const body = await request.json()

    if (!Array.isArray(body)) {
      return new Response(JSON.stringify({ error: 'Invalid payload' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 400
      })
    }

    await supabase.from('employees').delete().neq('id', 0)
    const { error } = await supabase.from('employees').insert(body)

    return new Response(JSON.stringify({ success: !error, error }), {
      headers: { 'Content-Type': 'application/json' },
      status: error ? 500 : 200
    })
  }

  return new Response('Method Not Allowed', { status: 405 })
}
