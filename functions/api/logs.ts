import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://xkaxefigpjuxbevmdqdf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrYXhlZmlncGp1eGJldm1kcWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MzUzMjMsImV4cCI6MjA2MDIxMTMyM30.tpKK42gVF6dpR52hOkqdyi-xrHfxLTes9tAXkatayfM'
)

export const onRequest = async ({ request }: { request: Request }) => {
  if (request.method === 'POST') {
    try {
      const body = await request.json()

      const { company, person_visited, reason, metadata, created_by, type } = body

      if (!company || !person_visited || !created_by) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          headers: { 'Content-Type': 'application/json' },
          status: 400
        })
      }

      const { error } = await supabase.from('logs').insert([
        {
          timestamp: new Date().toISOString(),
          company,
          person_visited,
          reason: reason || '',
          metadata: metadata || {},
          created_by,
          type: type || 'onboard'
        }
      ])

      if (error) throw error

      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200
      })
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 500
      })
    }
  }

  return new Response('Method Not Allowed', { status: 405 })
}
