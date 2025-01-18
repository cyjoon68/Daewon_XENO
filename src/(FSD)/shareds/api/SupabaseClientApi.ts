import { createBrowserClient } from "@supabase/ssr"
import { SUPABASE_API_KEY, SUPABASE_PROJECT_URL } from "../path";

export const SupabaseClientApi = () => createBrowserClient(SUPABASE_PROJECT_URL, SUPABASE_API_KEY);
