import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://omavhrfqwcsxvcpzozsc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tYXZocmZxd2NzeHZjcHpvenNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1MjE2MTIsImV4cCI6MjA2OTA5NzYxMn0.gMI6stKRqqQqg-hUL7JUs1ixSQB57_53ozD6g_MenT8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
