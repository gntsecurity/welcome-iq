import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { supabase } from './supabase'

const app = new Hono()

app.use(cors())

app.get('/api/employees', async (c) => {
  const { data, error } = await supabase.from('employees').select('*')
  if (error) return c.json({ error: error.message }, 500)
  return c.json(data)
})

app.post('/api/employees', async (c) => {
  const body = await c.req.json()
  const { data, error } = await supabase.from('employees').upsert(body, { onConflict: ['id'] })
  if (error) return c.json({ error: error.message }, 500)
  return c.json(data)
})

app.get('/api/logs', async (c) => {
  const { data, error } = await supabase.from('logs').select('*')
  if (error) return c.json({ error: error.message }, 500)
  return c.json(data)
})

app.post('/api/logs', async (c) => {
  const body = await c.req.json()
  const { data, error } = await supabase.from('logs').insert(body)
  if (error) return c.json({ error: error.message }, 500)
  return c.json(data)
})

export default app
