import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qghfqtwxswaxuzlypcel.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGZxdHd4c3dheHV6bHlwY2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1Nzk3MDcsImV4cCI6MjA2MTE1NTcwN30.ynKu61Ic8FlvVv3vmXYeWGvLfx3F0SX6UtZ7pm5xJ0Q'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
