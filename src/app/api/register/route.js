import { createClient } from "@/utils/supabase/server";
import bcrypt from 'bcrypt';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export async function POST(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user in Supabase
        const { user, error } = await supabase.auth.signUp({
            email: `tomasmladejovsky@gmail.com`, // Supabase requires an email, so we use a dummy email, there would be email input field in production
            password: hashedPassword,
        });

        if (error) {
            return res.status(400).json({ error: error.message });
        }

        // Insert the username into the blogUsers table
        const { data, error: profileError } = await supabase
            .from('blogUsers')
            .insert([{ id: user.id, username }]);

        if (profileError) {
            return res.status(400).json({ error: profileError.message });
        }

        res.status(200).json({ message: 'User registered successfully' });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}