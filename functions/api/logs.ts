import { createClient } from '@supabase/supabase-js'

export const onRequest = async ({ request, env }: { request: Request, env: Record<string, string> }) => {
  const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY)

  if (request.method === 'POST') {
    try {
      const body = await request.json()

      const { company, visiting, reason, email, date, signature } = body

      if (!company || !visiting || !signature) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          headers: { 'Content-Type': 'application/json' },
          status: 400
        })
      }

      const { error } = await supabase.from('logs').insert([
        {
          timestamp: date || new Date().toISOString(),
          company,
          person_visited: visiting,
          reason: reason || '',
          metadata: { email },
          created_by: signature,
          type: 'onboard'
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
