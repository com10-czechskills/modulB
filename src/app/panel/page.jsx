"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../globals.css';
import './page.css'
import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";
import Modal from "@/app/_components/Modal/Modal";
import Banner from "@/app/_components/Banner/Banner";

export default function AddPostPage() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [img, setImg] = useState('');
    const [slug, setSlug] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const handleSubmit = async () => {
        const response = await fetch('/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, text, img, slug }),
        });

        if (response.ok) {
            router.push('/aktuality');
        } else {
            const errorData = await response.json();
            console.error('Error adding post:', errorData.error);
        }
    };

    return (
        <>
            <Navbar/>
            <Banner headingText='Panel' path='/panel' />
            <section className="panel" id="panel">
                <div className="container">
                    <div className="row">
                        <h2>Přidání nové aktuality</h2>
                        <form onSubmit={(e) => { e.preventDefault(); setIsModalOpen(true); }}>
                            <div className='form-control'>
                                <label htmlFor="title">Nadpis</label>
                                <input
                                    type="text"
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='form-control'>
                                <label htmlFor="text">Text</label>
                                <textarea
                                    id="text"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='form-control'>
                                <label htmlFor="img">URL obrázku</label>
                                <input
                                    type="text"
                                    id="img"
                                    value={img}
                                    onChange={(e) => setImg(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='form-control'>
                                <label htmlFor="slug">Slug</label>
                                <input
                                    type="text"
                                    id="slug"
                                    value={slug}
                                    onChange={(e) => setSlug(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Přidat aktualitu</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer/>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmit} />
        </>
    );
}