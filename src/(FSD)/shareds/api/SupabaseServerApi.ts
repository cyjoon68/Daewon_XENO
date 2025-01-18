import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { SUPABASE_API_KEY, SUPABASE_PROJECT_URL } from "../path"

export const SupabaseServerApi = async () => {
    const cookieStore = await cookies();
    
    return createServerClient(
        SUPABASE_PROJECT_URL,
        SUPABASE_API_KEY,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options)
                        )
                    } catch {
                        throw new Error("Failed to set cookies");
                    }
                },
            },
        }
    );
};
