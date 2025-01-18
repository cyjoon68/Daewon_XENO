import { SUPABASE_API_KEY, SUPABASE_PROJECT_URL } from "./(FSD)/shareds/path/index";
import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    });

    const supabase = createServerClient(
        SUPABASE_PROJECT_URL,
        SUPABASE_API_KEY,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
                    supabaseResponse = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    )
                },
            },
        }
    );

    const { data: { user } } = await supabase.auth.getUser();

    if (user && request.nextUrl.pathname.startsWith("/auth")) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return supabaseResponse;
}
