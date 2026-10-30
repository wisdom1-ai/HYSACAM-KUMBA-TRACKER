// Supabase connection (publishable key is safe in frontend code; RLS protects the data).
// NEVER put the service-role or secret key in this file.
const SUPABASE_URL = "https://wlkchflkgvhripfmeyzm.supabase.co";
const SUPABASE_KEY = "sb_publishable_bLSwAXejPlF6M_vCoLqYHg_s4whAday";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);