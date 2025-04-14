import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://xkaxefigpjuxbevmdqdf.supabase.co'
const SUPABASE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrYXhlZmlncGp1eGJldm1kcWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MzUzMjMsImV4cCI6MjA2MDIxMTMyM30.tpKK42gVF6dpR52hOkqdyi-xrHfxLTes9tAXkatayfM'

export const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
