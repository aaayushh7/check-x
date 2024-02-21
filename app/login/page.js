"use client"
import { useState } from 'react';
import React from "react";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                console.log('Login successful');
                // Consider redirecting the user or updating the state to reflect successful login
            } else {
                console.error('Login failed:', response.statusText);
                // Consider displaying an error message to the user
            }
        } catch (error) {
            console.error('Error during login:', error);
            // Consider displaying an error message to the user
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="bg-slate-700 border border-slate-700 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 flex justify-center items-center flex-col relative">
                <h1 className="text-white text-center mb-3 text-2xl font-semibold bg-gradient-to-r from-slate-300 via-blue-400 to-slate-300 bg-clip-text">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="my-4 relative">
                        <input type="email" value={email} onChange={handleEmailChange} className="block w-52 py-2 px-2 text-sm text-stone-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-slate-200 focus:border-blue-500 peer" placeholder="Email" />
                    </div>
                    <div className="my-4 relative">
                        <input type="password" value={password} onChange={handlePasswordChange} className="block w-52 py-2 px-2 text-sm text-stone-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-slate-200 focus:border-blue-500 peer" placeholder="Password" />
                    </div>
                    <div className="w-full flex justify-center items-center pt-7">
                        <button type="submit" disabled={loading} className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                            </span>
                            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                                {loading ? 'Logging in...' : 'Login'}
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
