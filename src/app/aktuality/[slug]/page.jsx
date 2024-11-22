import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';
import './style.css';
import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";
import '../../globals.css'
import Banner from "@/app/_components/Banner/Banner";

export default async function BlogPostPage({ params }) {
    const { slug } = params;
    const supabase = await createClient();

    const { data: post, error } = await supabase
        .from('blog')
        .select('*')
        .eq('slug', slug)
        .single();

    if (error || !post) {
        console.error('Error fetching post:', error?.message);
        return notFound();
    }

    return (
        <>
            <Navbar/>
            <Banner headingText={post.title} path={`/aktuality/${slug}`} />
            <section className="single-post" id="single-post">
                <div className='container'>
                    <div className="post">
                        <img src={post.img} alt={post.title} loading="eager"/>
                        <h2>{post.title}</h2>
                        <p>{post.text}</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}