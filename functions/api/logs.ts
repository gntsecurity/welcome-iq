import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://xkaxefigpjuxbevmdqdf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrYXhlZmlncGp1eGJldm1kcWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MzUzMjMsImV4cCI6MjA2MDIxMTMyM30.tpKK42gVF6dpR52hOkqdyi-xrHfxLTes9tAXkatayfM'
)

export const onRequest = async ({ request }: { request: Request }) => {
  if (request.method === 'GET') {
    const { data, error } = await supabase
      .from('logs')
      .select('*')
      .order('timestamp', { ascending: false })

    return new Response(JSON.stringify({ logs: data || [], error }), {
      headers: { 'Content-Type': 'application/json' },
      status: error ? 500 : 200
    })
  }

  if (request.method === 'POST') {
    const body = await request.json()
    const { error } = await supabase.from('logs').insert(body)

    return new Response(JSON.stringify({ success: !error, error }), {
      headers: { 'Content-Type': 'application/json' },
      status: error ? 500 : 200
    })
  }

  return new Response('Method Not Allowed', { status: 405 })
}
