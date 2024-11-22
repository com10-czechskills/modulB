'use client'
import './Navbar.css';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

export default function Navbar() {
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

    const scrollToTarget = (targetId) => {
        //router.push("/") - pokud chceš při kliknutí na odkaz změnit URL, například z podstránky na homepage
        setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }, 200);
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
                    <li onClick={() => scrollToTarget('game')}><span>Pixel Crusade</span>
                    </li>
                    <li onClick={() => scrollToTarget('aboutus')}><span>O studiu</span>
                    </li>
                    <li onClick={() => scrollToTarget('clenove')}><span>Náš tým</span>
                    </li>
                    <li onClick={() => scrollToTarget('zkusenosti')}><span>Zkušenosti</span>
                    </li>
                    <li onClick={() => scrollToTarget('blog')}><span>Aktuality</span>
                    </li>
                    <li>
                        <Link href='/panel/' className={`btn btn-primary-outline`}>
                            Panel
                        </Link>
                    </li>
                    <li>
                        <button onClick={() => scrollToTarget('contact')} className={`btn btn-primary`}>
                            Kontakt
                        </button>
                    </li>

                </ul>
            </nav>
        </div>
    );
}
