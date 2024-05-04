"use client"
import React, { useState } from 'react';
import PhoneNumber from "@/components/PhoneNumber";
import Link from "next/link";

const Login = () => {
    const [signupMethod, setSignupMethod] = useState('email');

    return (
        <div className="mx-auto flex my-5  max-w-full flex-col md:max-w-none md:flex-row">

            {/*Form input */}
            <form >
                <div className="px-4 py-20">
                    <h2 className="mb-2 text-3xl font-bold">Sign In</h2>
                    <span href="#" className="mb-10 block font-bold text-gray-600">Have an account <Link className={"hover:text-blue-600 text-blue-500"} href={"/register"}> Sign Up</Link></span>
                    <p className="mb-1 font-medium text-gray-500">Sign In with</p>
                    <div className="mb-6 flex flex-col gap-y-2 gap-x-4 lg:flex-row">
                        <div
                            className={`relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700 ${signupMethod === 'email' ? 'border-blue-600' : 'border-gray-300'}`}
                            onClick={() => setSignupMethod('email')}>
                            <input className="peer hidden" type="radio" name="radio" id="radio1"
                                   checked={signupMethod === 'email'} readOnly/>
                            <label
                                className={`peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border peer-checked:border-blue-600 ${signupMethod === 'email' ? 'peer-checked:border-blue-600' : ''}`}
                                htmlFor="radio1"></label>
                            <div
                                className={`peer-checked:bg-blue-600 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 ${signupMethod === 'email' ? 'ring-2 ring-blue-600' : ''}`}></div>
                            <span className="pointer-events-none z-10">Email</span>
                        </div>
                        <div
                            className={`relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700 ${signupMethod === 'phone' ? 'border-blue-600' : 'border-gray-300'}`}
                            onClick={() => setSignupMethod('phone')}>
                            <input className="peer hidden" type="radio" name="radio" id="radio3"
                                   checked={signupMethod === 'phone'} readOnly/>
                            <label
                                className={`peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border peer-checked:border-blue-600 ${signupMethod === 'phone' ? 'peer-checked:border-blue-600' : ''}`}
                                htmlFor="radio3"></label>
                            <div
                                className={`peer-checked:bg-blue-600 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 ${signupMethod === 'phone' ? 'ring-2 ring-blue-600' : ''}`}></div>
                            <span className="pointer-events-none z-10">Phone Number</span>
                        </div>
                    </div>
                    {signupMethod === 'email' && (
                        <>
                            <p className="mb-1 font-medium text-gray-500">Email</p>
                            <div className="mb-4 flex flex-col">
                                <div
                                    className="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                                    <input type="name" id="signup-email"
                                           className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                                           placeholder="Enter your email"/>
                                </div>
                            </div>
                        </>
                    )}
                    {signupMethod === 'phone' && <PhoneNumber/>}
                    <p className="mb-1 font-medium text-gray-500">Password</p>
                    <div className="mb-4 flex flex-col">
                        <div
                            className="focus-within:border-blue-600 relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                            <input type="password" id="signup-password"
                                   className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                                   placeholder="Choose a password (minimum 8 characters)"/>
                        </div>
                    </div>
                    <Link href={"/"}
                        className="hover:shadow-blue-600/40 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-8 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg">Login
                    </Link>
                </div>
            </form>
            <div className="max-w-full rounded-3xl bg-gradient-to-t from-blue-700 via-blue-400 to-blue-600 px-4 py-10 text-white sm:px-10 md:m-6 md:mr-8">
                <p className="mb-20 font-bold tracking-wider">RENT</p>
                <p className="mb-4 text-3xl font-bold md:text-4xl md:leading-snug">
                    Start your <br/>
                    life with us
                </p>
                <p className="mb-28 leading-relaxed text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere nisi voluptas a officia. Omnis.</p>
                <div className="bg-blue-600/80 rounded-2xl px-4 py-8">
                    <p className="mb-3 text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ea
                        voluptates sapiente!</p>
                    <div className="">
                        <div className="flex items-center">
                            <img className="h-10 w-10 rounded-full object-cover" src="/images/y9s3xOJV6rnQPKIrdPYJy.png"
                                 alt="Simon Lewis"/>
                            <p className="ml-4 w-56">
                                <strong className="block font-medium">Simon Lewis</strong>
                                <span className="text-xs text-gray-200"> Published 12 Bestsellers </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
