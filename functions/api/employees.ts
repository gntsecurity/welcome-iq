export async function onRequest({ env }: { env: Record<string, string> }) {
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = env

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
