'use client'
import { sendOTP } from '@/service/authService';
import Link from 'next/link';
import React, { useState } from 'react';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email.trim() === '') {
            setError('Email can not be empty')
            return;
        }

        if (!isValidEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setIsLoading(true);
        const result = await sendOTP(email);
        setIsLoading(false);

        if (result.success) {
            window.location.href = `/verify?email=${encodeURIComponent(email)}`;
        } else {
            setError('This email is not found. Please try again.');
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        setError(isValid ? '' : 'Please enter a valid email address');
        return isValid;
    };

    return (
        <main>
            <div className="">
                <div className="relative w-full h-screen overflow-hidden">
                    <div className="absolute z-20 w-full h-full md:py-[55px] md:px-[140px] py-[80px] px-[150px]">
                        <div className="w-full h-full shadow-login_border rounded-[20px] p-[16px] relative">
                            <div className="w-full h-full bg-opacity-60 rounded-[20px] grid grid-cols-2 overflow-hidden">
                                <div className="w-full h-full">
                                    <div className="absolute z-20 left-[45px] top-[25px] flex items-center">
                                        <img src="../assets/images/logo.png" alt="" />
                                    </div>
                                    <div className="-z-0 relative w-full h-full flex justify-end items-center">
                                        <div className="right-[-40px] top-[80px] w-[407px] h-fit flex items-center">
                                            <div>
                                                <p className="text-paragraph16_regular text-[#858080] mt-[2px]">Enter your email address to reset password</p>
                                                <form onSubmit={handleSubmit} className="w-[349px] mt-[44px]">

                                                    {error && <p className="text-red-500 text-xs py-2 px-1">{error}</p>}
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        onBlur={() => isValidEmail(email)}
                                                        className={`w-full rounded-[10px] border ${error ? 'border-red-500' : 'border-primary border-opacity-35'} text-paragraph16_regular py-[16px] px-[25px]`}
                                                        placeholder="Email"
                                                    />

                                                    <button
                                                        type="submit"
                                                        className="cursor-pointer w-full py-[18px] text-paragraph16_medium bg-primary text-white rounded-[10px] mt-[32px] mb-[32px]"
                                                        disabled={isLoading}
                                                    >
                                                        {isLoading ? 'Loading...' : 'Continue'}
                                                    </button>
                                                </form>
                                                <p className="text-paragraph16_regular text-primary flex justify-center">
                                                    <Link href={'/login'}>Back To Login</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-full flex justify-end">
                                    <img src="/assets/images/Forgot password-rafiki.svg" alt="" className="h-full ml-[-15.2%]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ForgotPassword;
