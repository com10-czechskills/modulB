import { createClient } from "@/utils/supabase/server";

export async function POST(req, res) {
    try {
        const { title, text, img, slug } = await req.json();

        if (!title || !text || !img || !slug) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
        }

        const supabase = createClient();

        // Fetch the newest post to get the highest ID
        const { data: newestPost, error: fetchError } = await supabase
            .from('blog')
            .select('id')
            .order('id', { ascending: false })
            .limit(1)
            .single();

        if (fetchError) {
            return new Response(JSON.stringify({ error: fetchError.message }), { status: 500 });
        }

        const newId = newestPost ? newestPost.id + 1 : 1;

        const { data, error } = await supabase
            .from('blog')
            .insert([{
                id: newId,
                title,
                text,
                img,
                slug,
                created_at: new Date().toISOString()
            }]);

        if (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }

        return new Response(JSON.stringify({ message: 'Post added successfully', data }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: `An error occurred, ${error}` }), { status: 500 });
    }
}