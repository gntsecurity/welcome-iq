import { createClient } from '@supabase/supabase-js'

export async function onRequest({ request, env }: { request: Request, env: Record<string, string> }) {
  const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY)

  if (request.method === 'POST') {
    try {
      const body = await request.json()

      if (!Array.isArray(body)) {
        return new Response(JSON.stringify({ error: 'Payload must be an array of employees' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        })
      }

      const { error } = await supabase
        .from('employees')
        .upsert(body, { onConflict: 'name' })

      if (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        })
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    } catch {
      return new Response(JSON.stringify({ error: 'Unexpected error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      })
    }
  }

  if (request.method === 'GET') {
    const { data, error } = await supabase.from('employees').select('*')

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    return new Response(JSON.stringify({ employees: data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return new Response('Method not allowed', { status: 405 })
}
