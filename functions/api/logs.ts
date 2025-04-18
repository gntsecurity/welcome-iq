import { createClient } from '@supabase/supabase-js'

export const onRequest = async ({ request, env }: { request: Request, env: Record<string, string> }) => {
  const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY)

  if (request.method === 'POST') {
    try {
      const body = await request.json()
      const { name, company, email, visiting, date, signature, reason } = body

      if (!company || !visiting || !signature || !name) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        })
      }

      const { error } = await supabase.from('logs').insert([
        {
          timestamp: date || new Date().toISOString(),
          company,
          person_visited: visiting,
          reason: reason || '',
          metadata: { name, email },
          created_by: signature,
          type: 'onboard'
        }
      ])

      if (error) {
        console.error("Supabase Insert Error:", error)
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        })
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Unexpected server error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      })
    }
  }

  if (request.method === 'GET') {
    const { data, error } = await supabase
      .from('logs')
      .select('*')
      .order('timestamp', { ascending: false })

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  if (request.method === 'DELETE') {
    const url = new URL(request.url)
    const id = url.searchParams.get('id')

    if (id) {
      await supabase.from('logs').delete().eq('id', id)
    } else {
      await supabase.from('logs').delete().neq('id', '')
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return new Response('Method not allowed', { status: 405 })
}
