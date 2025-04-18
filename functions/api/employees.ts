export async function onRequest({ request, env }: { request: Request, env: Record<string, string> }) {
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = env

  if (request.method === 'POST') {
    try {
      const body = await request.json()

      const response = await fetch(`${SUPABASE_URL}/rest/v1/employees`, {
        method: 'POST',
        headers: {
          apikey: SUPABASE_SERVICE_ROLE_KEY,
          authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json',
          prefer: 'return=minimal'
        },
        body: JSON.stringify(body)
      })

      if (!response.ok) {
        const error = await response.text()
        return new Response(JSON.stringify({ error }), {
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
    const response = await fetch(`${SUPABASE_URL}/rest/v1/employees?select=*`, {
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        accept: 'application/json'
      }
    })

    const raw = await response.text()

    try {
      const data = JSON.parse(raw)
      return new Response(JSON.stringify({ employees: data }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Invalid JSON from Supabase' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      })
    }
  }

  return new Response('Method not allowed', { status: 405 })
}
