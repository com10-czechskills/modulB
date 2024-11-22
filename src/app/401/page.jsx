'use client';
import Link from 'next/link';
import '../globals.css'
import './page.css'
import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";

export default function Custom401() {
    return (
        <>
            <Navbar/>
            <section className="unauth" id="unauth">
                <div className="container">
                    <div className="row">
                        <h1>401 - Unauthorized</h1>
                        <h3>You do not have permission to view this page.</h3>
                        <Link className='btn btn-primary' href="/">
                            Go back to Home
                        </Link>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}