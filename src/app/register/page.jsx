"use client";
import { useState } from 'react';
import '../globals.css';
import './page.css';
import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";
import Banner from "@/app/_components/Banner/Banner";

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (res.ok) {
            //router.push('/login');
        } else {
            const errorData = await res.json();
            setError(errorData.error || 'Registration failed');
        }
    };

    return (
        <>
            <Navbar/>
            <Banner headingText='Registracew' path='/register' />
            <section className="register" id="register">
                <div className="container">
                    <div className="row">
                        <h1>Register</h1>
                        <form onSubmit={handleSubmit}>
                            <div className='form-control'>
                                <label htmlFor="username">Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='form-control'>
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            {error && <p className="error">{error}</p>}
                            <button className='btn btn-primary' type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}