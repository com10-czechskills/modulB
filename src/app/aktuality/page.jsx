import {createClient} from "@/utils/supabase/server";
import Link from "next/link";
import './style.css'
import '../globals.css'
import Banner from "@/app/_components/Banner/Banner";
import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";

export default async function BlogPage() {


    // SUPABASE
    const supabase = await createClient();

    const { data: blog, error } = await supabase.from('blog').select(`*`);

    if (error) {
        console.error('Error fetching posts:', error.message);
        return <div>Error fetching posts</div>;
    }

    if (!blog || blog.length === 0) {
        console.log('No posts found or issue with columns');
        return <div>No posts found</div>;
    }
    return (
        <>
            <Navbar/>
            <Banner headingText='Aktuality' path='/aktuality' />
            <section className="blog-page" id='blog-page'>
                <div className="container">
                    <div className="row">
                        {blog.map((post) => (
                            <Link className='item' href={`/aktuality/${post.slug}`} key={post.id}>
                                <img src={post.img} alt="" draggable='false' placeholder='blur' loading='eager'/>
                                <h4>{post.title}</h4>
                                <p>{post.text}</p>
                                <button className="btn read-more">Více &rarr;</button>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}