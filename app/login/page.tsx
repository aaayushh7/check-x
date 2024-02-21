
"use client"
import { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js
import setName from "@/scraper";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            await setName(email, password);
            // Redirect to home page after setName function call
            // Replace '/home' with the actual home page route
            // Example: <Link href="/home">
            <Link href="/">
                <a>Redirecting...</a>
            </Link>
        } catch (error) {
            console.error('Error:', error);
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
                        <input type="email" value={email} onChange={handleEmailChange} className="block w-52 py-2 px-2 text-sm text-stone-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-slate-200 focus:border-blue-500 peer" />
                        <label htmlFor="" className="absolute text-sm text-slate-300 duration-300 transform translate-y-0 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="my-4 relative">
                        <input type="password" value={password} onChange={handlePasswordChange} className="block w-52 py-2 px-2 text-sm text-stone-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-slate-200 focus:border-blue-500 peer" />
                        <label htmlFor="Password" className="absolute text-sm text-slate-300 duration-300 transform translate-y-0 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="w-full flex justify-center items-center pt-7">
                        <button type="submit" className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block" disabled={loading}>
                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                            </span>
                            <div className="relative flex space-x-2 text-[15px] items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                                <span>{loading ? 'Logging in...' : 'Login'}</span>
                            </div>
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
