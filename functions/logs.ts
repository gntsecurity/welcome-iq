export async function onRequest({ request, env }: { request: Request; env: Record<string, string> }) {
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = env

  const headers = {
    apikey: SUPABASE_SERVICE_ROLE_KEY,
    authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    accept: 'application/json',
    'Content-Type': 'application/json'
  }

  if (request.method === 'GET') {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/logs`, { headers })
    const data = await response.text()
    return new Response(data, {
      status: response.status,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  if (request.method === 'POST') {
    const body = await request.text()

    const response = await fetch(`${SUPABASE_URL}/rest/v1/logs`, {
      method: 'POST',
      headers,
      body
    })

    const data = await response.text()
    return new Response(data, {
      status: response.status,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return new Response('Method not allowed', { status: 405 })
}
