import { createClient } from '@supabase/supabase-js'

export const onRequest = async ({ request, env }: { request: Request, env: Record<string, string> }) => {
  const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY)

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

    const cleanBody = body.map((e: any) => ({
      ...e,
      email: e.email || `${e.name.toLowerCase().replace(/\s+/g, '')}@placeholder.local`
    }))

    const { error } = await supabase
      .from('employees')
      .upsert(cleanBody, { onConflict: 'email' })

    return new Response(JSON.stringify({ success: !error, error }), {
      headers: { 'Content-Type': 'application/json' },
      status: error ? 500 : 200
    })
  }

  return new Response('Method Not Allowed', { status: 405 })
}
