"use client"
import React from 'react'
import './Footer.css'
import Link from 'next/link'

export default function Footer() {
    const scrollToTarget = (targetId) => {
        setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 200);
    };

    const formatDate = () => {
        const date = new Date();
        const days = ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'];
        const months = ['Ledna', 'Února', 'Března', 'Dubna', 'Května', 'Června', 'Červenece', 'Srpna', 'Září', 'Října', 'Listopadu', 'Prosinece'];
        const dayName = days[date.getDay()];
        const day = date.getDate();
        const monthName = months[date.getMonth()];
        const year = date.getFullYear();
        return `Je ${dayName}, ${day}. ${monthName.toLowerCase()} ${year}`;
    };

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="item about">
                        <img onClick={() => scrollToTarget("header")} src='/images/nav_logo.webp' alt=""
                             draggable="false" loading="lazy" placeholder="blur"/>
                        <p>Jsme herní studio s vášní pro pixelové hry</p>
                        <span>Pixelforge studios</span>
                        <span>IČ: 77777777</span>
                        <span>Praha, Vinohrady</span>
                    </div>
                    <div className="item empty"></div>
                    <div className="item links">
                        <h2>Aktuální datum</h2>
                        <p className='footer-date'>{formatDate()}</p>
                    </div>
                    <div className="item links">
                        <h2>Užitečné</h2>
                        <button onClick={() => scrollToTarget("game")}>Pixel Crusade</button>
                        <button onClick={() => scrollToTarget("aboutus")}>O studiu</button>
                        <button onClick={() => scrollToTarget("clenove")}>Náš tým</button>
                        <button onClick={() => scrollToTarget("zkusenosti")}>Zkušenosti</button>
                        <button onClick={() => scrollToTarget("contact")}>Kontakt</button>
                    </div>
                    <div className="item links">
                        <h2>Kontakty</h2>
                        <a href='tel:777777777' target='_blank' rel="noopener noreferrer"><img
                            src='/images/footerphone.svg' alt='Telefonní číslo redesigner' width={25} height={25}
                            draggable="false" loading="lazy" placeholder="blur"/> +420 777 777 777</a>
                        <a href='mailto:info@pixelforge.cz' target='_blank' rel="noopener noreferrer"><img
                            src='/images/footeremail.svg' alt='E-mail redesigneru' width={25} height={25}
                            draggable="false" loading="lazy" placeholder="blur"/> info@pixelforge.cz</a>
                    </div>
                </div>
                <div className="bottom-line"></div>
                <div className="bottom-content">
                    <p>2023 - {new Date().getFullYear()} © pixelforge.cz všechna práva vyhrazena</p>
                    <a href='https://www.mladejovsky.cz/' target='_blank' rel="noopener noreferrer">Web & Design <img src='/images/mladejovsky.svg' alt='' draggable="false" loading="lazy" placeholder="blur" /></a>
                </div>
            </div>
        </footer>
    )
}