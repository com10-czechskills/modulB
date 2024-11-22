import { createClient } from "@/utils/supabase/server";

export async function POST(req) {
    try {
        const { username } = await req.json();

        const supabase = createClient();

        const { data: user, error } = await supabase
            .from('blogUsers')
            .select('username, password')
            .eq('username', username)
            .single();

        if (error || !user) {
            console.error('User not found or error:', error);
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 401 });
        }

        console.log('User found:', user);
        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        console.error('An error occurred:', error);
        return new Response(JSON.stringify({ error: `An error occurred, ${error}` }), { status: 500 });
    }
}