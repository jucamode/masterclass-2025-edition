import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://juzawcmxtyajkfuvsjia.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1emF3Y214dHlhamtmdXZzamlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzOTA1NDcsImV4cCI6MjA1NDk2NjU0N30.JlqScCeyxZ-9mfdCWWvAbob_oV47e_cFUYAfLDVm4nk',
)
