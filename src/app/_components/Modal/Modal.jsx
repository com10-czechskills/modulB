'use client'
import React, { useState, useEffect } from 'react';
import './Modal.css';
import bcrypt from 'bcryptjs';
import { useRouter } from 'next/navigation';

const Modal = ({ isOpen, onClose, onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleClickOutside = (event) => {
        if (event.target.className === 'modal-overlay') {
            onClose();
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const response = await fetch('/api/CheckAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username }),
        });

        const user = await response.json();

        if (user && user.password) {
            const isPasswordValid = bcrypt.compareSync(password, user.password);
            console.log('Password valid:', isPasswordValid);

            if (isPasswordValid) {
                onSubmit();
                onClose();
            } else {
                setError('Invalid username or password');
                router.push('/401');
            }
        } else {
            setError('Invalid username or password');
            router.push('/401');
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content flex justify-center items-center">
                <button className="modal-close" onClick={onClose}>×</button>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;