"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { otpService } from '@/service/otp.service';

const Page = () => {
    const [message, setMessage] = useState('');
    const [otp, setOTP] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const handleVerifyOTP = async (event) => {
        event.preventDefault();
        setMessage('');
        setIsLoading(true);

        try {
            const response = await otpService.verifyOtp(otp, 'email@example.com'); // Replace with actual email

            if (response.success) {
                setMessage('OTP verification successful!');
                const newUser = {
                    email: 'email@example.com',
                    password: 'password' // Replace with actual password handling
                }
                const res = await signIn("credentials", {
                    redirect: false,
                    ...newUser,
                });
                if (res.ok) {

                    await router.push("/login");
                } else {
                    setMessage('Sign in failed');
                }
            } else {
                setMessage('Invalid OTP');
            }
        } catch (error) {
            setMessage('An error occurred while verifying the OTP');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
            <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                        <div className="font-semibold text-3xl">
                            <p>Email Verification</p>
                        </div>
                        <div className="flex flex-row text-sm font-medium text-gray-400">
                            <p>We have sent a code to your email ba**@dipainhouse.com</p>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={handleVerifyOTP}>
                            <div className="flex flex-col space-y-16">
                                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                    <div className="h-16 w-full">
                                        <input
                                            value={otp}
                                            onChange={(e) => setOTP(e.target.value)}
                                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                            type="text"
                                            name="otp"
                                            maxLength="6"
                                            placeholder="Enter OTP"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-5">
                                    <div>
                                        <button
                                            type="submit"
                                            className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? 'Verifying...' : 'Verify Account'}
                                        </button>
                                    </div>

                                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                        <p>Didn't receive code?</p>
                                        <a
                                            className="flex flex-row items-center text-blue-600"
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            Resend
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {message && <p className={`mt-4 text-center ${message === 'OTP verification successful!' ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
