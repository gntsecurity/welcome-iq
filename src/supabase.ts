import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  // You will map these to ENV secrets in your Wrangler config
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE!
)
