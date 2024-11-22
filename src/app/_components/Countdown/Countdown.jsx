"use client";
import { useState, useEffect } from 'react';

export default function Countdown() {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2027-04-14T00:00:00');
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                roky: Math.floor(difference / (1000 * 60 * 60 * 24 * 365)),
                měsíce: Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)),
                dny: Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)),
                hodin: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minut: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                sekund: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
                {Object.keys(timeLeft).map((interval) => (
                    <span key={interval}>
                        {timeLeft[interval]} {interval}{' '}
                    </span>
                ))}
        </div>
    );
}