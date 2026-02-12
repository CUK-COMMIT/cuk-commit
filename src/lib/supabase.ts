import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let supabase: SupabaseClient | null = null;

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

function initSupabase(): SupabaseClient | null {
  if (supabase) return supabase;

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn(
      "Supabase initialization skipped: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is missing."
    );
    return null;
  }

  try {
    supabase = createClient(SUPABASE_URL as string, SUPABASE_ANON_KEY as string);
    return supabase;
  } catch (error) {
    console.error("Supabase initialization error:", error);
    supabase = null;
    return null;
  }
}

export function getSupabase(): SupabaseClient | null {
  return supabase ?? initSupabase();
}

export default getSupabase;
