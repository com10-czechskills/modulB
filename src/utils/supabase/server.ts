import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = () => {
  const cookieStore = cookies();

  return createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll: () => {
            // Manually construct the array of cookies
            const allCookies = cookieStore.getAll().map(({ name, value }) => ({
              name,
              value,
            }));
            return allCookies;
          },
          setAll: (cookiesToSet) => {
            try {
              cookiesToSet.forEach(({ name, value, options }: { name: string; value: string; options: CookieOptions }) => {
                cookieStore.set(name, value, options);
              });
            } catch {
              // Handle exceptions, especially in Server Components
            }
          },
        },
      }
  );
};
