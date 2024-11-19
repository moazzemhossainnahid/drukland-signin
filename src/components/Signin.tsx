import Image from 'next/image';
import React from 'react';

const Signin = () => {


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
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            width={300}
                            height={16}
                            priority
                        />
                    </div>

                    {/* Signing Text */}
                    <h2 className="text-xl font-semibold mb-2 text-gray-800 text-center">
                        Signing to Your Account
                    </h2>
                    <p className="text-center text-gray-500 mb-4">
                        Don’t you have an account?{" "}
                        <a href="/register" className="text-black font-semibold text-lg hover:underline">
                            Register
                        </a>
                    </p>
                    <p className="text-center text-red-500 mb-4">
                        Unknown email address. Try again!
                    </p>

                    {/* Input Fields */}
                    <form>
                        {/* Email Field */}
                        <div className="mb-4 group">
                            <label
                                htmlFor="email"
                                className="block text-gray-500 group-focus-within:text-black text-sm mb-1 transition-all "
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none px-2 py-1 peer"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-4 group">
                            <label
                                htmlFor="password"
                                className="block text-gray-500 group-focus-within:text-black text-sm mb-1 transition-all"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none px-2 py-1 peer"
                            />
                        </div>

                        {/* Terms & Conditions */}
                        <div className="mb-6">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2 border-gray-300"
                                />
                                <span className="text-sm text-gray-600">
                                    I agree to all <span className="text-black">Terms & Conditions</span>
                                </span>
                            </label>
                        </div>

                        {/* Log In Button */}
                        <button
                            type="submit"
                            className="w-full bg-black font-semibold text-white py-2 rounded-lg hover:bg-gray-800 transition"
                        >
                            Log In
                        </button>
                    </form>
                    <div className="my-6">
                        {/* Divider with text */}
                        <div className="flex items-center justify-center w-full">
                            <div className="w-full border-t border-gray-300"></div>
                            <span className="w-full text-gray-500 text-center text-lg">or sign in with</span>
                            <div className="w-full border-t border-gray-300"></div>
                        </div>

                        {/* Social Icons */}
                        <div className="mt-6 flex justify-center space-x-3">
                            <Image
                                src="/linkedin.svg"
                                alt="Linkedin"
                                width={20}
                                height={20}
                                priority
                            />
                            <Image
                                src="/google.svg"
                                alt="Google"
                                width={20}
                                height={20}
                                priority
                            />
                            <Image
                                src="/facebook.svg"
                                alt="Facebook"
                                width={20}
                                height={20}
                                priority
                            />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Signin;