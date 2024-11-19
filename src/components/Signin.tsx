"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';

const Signin: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await axios.post(
                'https://social-login.druckland.de/api/v1/user/signin',
                { email, password },
                { headers: { 'Content-Type': 'application/json' } }
            );

            console.log("response", response);

        } catch (err) {
            const axiosError = err as AxiosError;
            if (axiosError.response && axiosError.response.data) {
                const apiError = axiosError.response.data as { message: string };
                setError(apiError.message); // Use API-provided error message
            } else {
                setError('An unknown error occurred.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center min-h-screen">
            {/* Background with Text */}
            <div className="md:w-1/2 w-full bg-white flex items-center justify-center rounded-lg h-full min-h-[90vh]">
                <div className="text-center">
                    <h2 className="text-xl text-gray-800">
                        Image or Video <br /> of Our Services
                    </h2>
                </div>
            </div>

            {/* Right Side - Signing Card */}
            <div className="md:w-1/2 w-full p-20">
                <div className="w-full p-5 bg-white rounded-xl shadow-md">
                    {/* Logo */}
                    <div className="w-40 mx-auto py-7">
                        <Image src="/logo.svg" alt="Logo" width={300} height={16} priority />
                    </div>

                    {/* Signing Text */}
                    <h2 className="text-xl font-semibold mb-2 text-gray-800 text-center">
                        Signing to Your Account
                    </h2>
                    <p className="text-center text-gray-500 mb-4">
                        Don’t you have an account?{' '}
                        <a href="/register" className="text-black font-semibold text-lg hover:underline">
                            Register
                        </a>
                    </p>

                    {/* Error Message */}
                    {error && (
                        <p className="text-center text-red-500 mb-4">{error}</p>
                    )}

                    {/* Input Fields */}
                    <form onSubmit={handleSignin}>
                        {/* Email Field */}
                        <div className="mb-4 group">
                            <label htmlFor="email" className="block text-gray-500 group-focus-within:text-black text-sm mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none px-2 py-1"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-4 group">
                            <label htmlFor="password" className="block text-gray-500 group-focus-within:text-black text-sm mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none px-2 py-1"
                                required
                            />
                        </div>

                        {/* Terms & Conditions */}
                        <div className="mb-6">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2 border-gray-300"
                                    required
                                />
                                <span className="text-sm text-gray-600">
                                    I agree to all <span className="text-black">Terms & Conditions</span>
                                </span>
                            </label>
                        </div>

                        {/* Log In Button */}
                        <button
                            type="submit"
                            className={`w-full bg-black font-semibold text-white py-2 rounded-lg transition ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
                                }`}
                            disabled={loading}
                        >
                            {loading ? 'Signing in...' : 'Log In'}
                        </button>
                    </form>

                    {/* Divider and Social Icons */}
                    <div className="my-6">
                        <div className="flex items-center justify-center w-full">
                            <div className="w-full border-t border-gray-300"></div>
                            <span className="w-full text-gray-500 text-center text-lg">or sign in with</span>
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="mt-6 flex justify-center space-x-3">
                            <Image src="/linkedin.svg" alt="Linkedin" width={20} height={20} priority />
                            <Image src="/google.svg" alt="Google" width={20} height={20} priority />
                            <Image src="/facebook.svg" alt="Facebook" width={20} height={20} priority />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
