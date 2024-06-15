'use client'
import { sendOTP, verifyOTP } from '@/service/authService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

function Verify() {
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const inputRefs = useRef([]);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [countdown, setCountdown] = useState(60); // countdown state to 60 seconds
    const router = useRouter();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const emailFromQuery = urlParams.get('email');
        if (emailFromQuery) {
            setEmail(emailFromQuery);

            // Check if the navigation was done by pushing to history state
            if (!window.history.state || !window.history.state.isNavigated) {
                localStorage.setItem('lastNavigationTime', Date.now());
                setCountdown(60);
            } else {
                // For a refresh, use the timestamp logic
                const lastNavigationTime = localStorage.getItem('lastNavigationTime');
                if (lastNavigationTime) {
                    const elapsed = (Date.now() - parseInt(lastNavigationTime)) / 1000;
                    if (elapsed < 60) {
                        setCountdown(60 - Math.floor(elapsed));
                    } else {
                        setCountdown(60);
                        localStorage.setItem('lastNavigationTime', Date.now());
                    }
                } else {
                    setCountdown(60);
                    localStorage.setItem('lastNavigationTime', Date.now());
                }
            }

            // Update the state to indicate that the navigation was done programmatically
            const newState = { ...window.history.state, isNavigated: true };
            window.history.replaceState(newState, '');
        } else {
            router.push('/register');
        }
    }, [router]);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [countdown]);


    useEffect(() => {
        // Auto-submit the form when the OTP is complete
        if (otp.join('').length === 6) {
            document.getElementById('otp-form').requestSubmit();
        }
    }, [otp]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) { // Only allow digits
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move focus to next input
            if (value && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const otpValue = otp.join('');
        const result = await verifyOTP(otpValue);
        console.log("Backend Response: ", result);
        if (result.message === 'OTP is verified') {
            // OTP verified successfully, proceed with your logic
            setError('');
            console.log('OTP verified successfully');
            window.location.href = `/login`;
        } else {
            // OTP is not valid, display error message and red border
            setError(result.message);
        }
        setLoading(false);
    };

    const handleRequestAgain = async () => {
        setError('');
        setOtp(new Array(6).fill(''));
        inputRefs.current[0].focus();

        if (email) {
            const result = await sendOTP(email);
            if (!result.success) {
                setError('Error resending OTP. Please try again.');
            }
        }
    };

    return (
        <main>
            <div className="">
                <div className="relative w-full h-screen overflow-hidden">
                    <div className="absolute z-20 w-full h-full md:py-[55px] md:px-[140px] py-[80px] px-[150px]">
                        <div className="w-full h-full bg-white bg-opacity-60 shadow-login_border rounded-[20px] p-[16px] relative">
                            <div className="w-full h-full bg-opacity-60 rounded-[20px] grid grid-cols-2 overflow-hidden">
                                <div className="w-full h-full">
                                    <div className="absolute z-20 left-[45px] top-[25px] flex items-center">
                                        <img src="../assets/images/logo.png" alt="" />
                                        <h1 className="text-[24px] font-bold text-primary">BugZapper</h1>
                                    </div>
                                    <div className="-z-0 relative w-full h-full flex justify-center items-center">
                                        <div className="right-[-40px] top-[80px] w-[407px] h-[512px] flex items-center justify-center">
                                            <div className=''>
                                                <h1 className="text-sub_header_medium text-primary pb-[10px]">Verify code</h1>
                                                <p className="text-paragraph16_regular text-[#858080] mt-[2px] w-full">An email verify code has been sent to your email.</p>
                                                <form onSubmit={handleSubmit} className="w-max-[349px] mt-[30px] mx-auto" id="otp-form">
                                                    <div className="flex items-center justify-center gap-3 w-full">
                                                        {otp.map((_, index) => (
                                                            <input
                                                                key={index}
                                                                type="text"
                                                                className={`w-14 h-14 ${error ? 'border-red-500' : 'border-gray-200'} text-center text-2xl font-extrabold text-primary outline-none border-1 rounded-[15px] hover:border-slate-200 appearance-none p-4 focus:bg-white focus:border-primary focus:ring-2 focus:ring-indigo-100`}
                                                                maxLength="1"
                                                                value={otp[index]}
                                                                onChange={(e) => handleChange(e, index)}
                                                                onKeyDown={(e) => handleKeyDown(e, index)}
                                                                ref={(el) => (inputRefs.current[index] = el)}
                                                                required
                                                            />
                                                        ))}
                                                    </div>
                                                    {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
                                                    <p className='mt-4 text-paragraph14_regular text-placeholder_color'>
                                                        {countdown > 0 ? `Request again in ${countdown} seconds` : 'Didn’t receive a code?'}
                                                        {countdown === 0 && <span onClick={handleRequestAgain} className='cursor-pointer text-blue-600'> Request again</span>}
                                                    </p>
                                                    <div className="max-full mt-4">
                                                        <button
                                                            type="submit"
                                                            id="verify-button"
                                                            className="cursor-pointer w-full py-[18px] text-paragraph16_medium bg-primary text-white rounded-[10px] mt-[10px] mb-[10px]"
                                                            disabled={loading}
                                                        >
                                                            {loading ? 'Verifying...' : 'Verify'}
                                                        </button>
                                                    </div>
                                                    <p className="text-paragraph16_regular mt-[20px] text-primary flex justify-center">
                                                        <Link href={'/login'}>Back To Login</Link>
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-full flex justify-end p-10">
                                    <img src="/assets/images/enter_otp.png" alt="" className="h-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Verify;