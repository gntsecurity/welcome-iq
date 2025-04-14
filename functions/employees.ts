export async function onRequest({ env }: { env: Record<string, string> }) {
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = env

  const response = await fetch(`${SUPABASE_URL}/rest/v1/employees`, {
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      accept: 'application/json'
    }
  })

  const data = await response.text()

  return new Response(data, {
    status: response.status,
    headers: { 'Content-Type': 'application/json' }
  })
}
