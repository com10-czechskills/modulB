'use client'
import './SubNavbar.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SubNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTarget = async (sectionId) => {
        await router.push('/');

        // Ensure scrolling happens after page navigation
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 200); // Short delay to ensure page redirection is processed

        // Close the menu on mobile after clicking
        setMenuOpen(false);
    };

    return (
        <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
            <nav className="container">
                <img
                    onClick={() => scrollToTarget('hero')}
                    className="nav-logo"
                    src="/images/nav_logo.webp"
                    alt="Logo mladejovsky"
                    draggable="false"
                    loading="eager"
                    placeholder="blur"
                />

                <div className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li onClick={() => scrollToTarget('game')} data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="0"><span>Pixel Crusade</span>
                    </li>
                    <li onClick={() => scrollToTarget('aboutus')} data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="100"><span>O studiu</span>
                    </li>
                    <li onClick={() => scrollToTarget('clenove')} data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="200"><span>Náš tým</span>
                    </li>
                    <li onClick={() => scrollToTarget('zkusenosti')} data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="300"><span>Zkušenosti</span>
                    </li>
                    <li data-aos="fade-down" data-aos-once="true" data-aos-delay="500">
                        <Link href='/beta-testovani/' className={`btn btn-primary-outline`}>
                            Beta testování
                        </Link>
                    </li>
                    <li data-aos="fade-down" data-aos-once="true" data-aos-delay="600">
                        <button onClick={() => scrollToTarget('contact')} className={`btn btn-primary`}>
                            Kontakt
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}