import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = async () => {
    const cookieStore = await cookies(); // Await the dynamic cookies API

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                async getAll() {
                    const allCookies: { name: string; value: string }[] = [];
                    for (const { name, value } of await cookieStore.getAll()) {
                        allCookies.push({ name, value });
                    }
                    return allCookies;
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }: { name: string; value: string; options: CookieOptions }) => {
                            cookieStore.set(name, value, options);
                        });
                    } catch {
                        // Handle server component edge case (ignored if middleware is used)
                    }
                },
            },
        }
    );
};
