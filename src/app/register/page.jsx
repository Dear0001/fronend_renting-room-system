"use client"
import { useState } from "react";
import PhoneNumber from "@/components/Email";
import Link from "next/link";

const Register = () => {
    const [signupMethod, setSignupMethod] = useState('email');
    return (
        <main className="container-width">
            <div className="my-10 bg-gray-100 text-gray-900 flex justify-center">
                <div className="max-w-screen-xl h-[780px] m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div>
                            <img
                                src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                                className="w-32 mx-auto"
                                alt="Logo"
                            />
                        </div>
                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold">
                                Sign Up with
                            </h1>
                            <div className="w-full flex-1 mt-8">
                                <div className="mx-auto max-w-xs">
                                    <div className="mb-6 grid grid-cols-2 gap-y-2 gap-x-4 lg:flex-row">
                                        <div
                                            className={`relative flex w-36 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700 ${signupMethod === 'email' ? 'border-blue-600' : 'border-gray-300'}`}
                                            onClick={() => setSignupMethod('email')}
                                        >
                                            <input className="peer hidden" type="radio" name="radio" id="radio1"
                                                   checked={signupMethod === 'email'} readOnly/>
                                            <label
                                                className={`peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border peer-checked:border-blue-600 ${signupMethod === 'email' ? 'peer-checked:border-blue-600' : ''}`}
                                                htmlFor="radio1"
                                            ></label>
                                            <div
                                                className={`peer-checked:bg-blue-600 peer-checked:ring-2 absolute left-3 h-4 w-4 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 ${signupMethod === 'email' ? 'ring-2 ring-blue-600' : ''}`}
                                            ></div>
                                            <span className="pointer-events-none z-10 pr-5 text-[13px]">Email</span>
                                        </div>
                                        <div
                                            className={`relative flex w-36 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700 ${signupMethod === 'phone' ? 'border-blue-600' : 'border-gray-300'}`}
                                            onClick={() => setSignupMethod('phone')}
                                        >
                                            <input className="peer hidden" type="radio" name="radio" id="radio3"
                                                   checked={signupMethod === 'phone'} readOnly/>
                                            <label
                                                className={`peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border peer-checked:border-blue-600 ${signupMethod === 'phone' ? 'peer-checked:border-blue-500' : ''}`}
                                                htmlFor="radio3"
                                            ></label>
                                            <div
                                                className={`peer-checked:bg-blue-600 peer-checked:ring-2 absolute left-3 h-4 w-4 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 ${signupMethod === 'phone' ? 'ring-2 ring-blue-600' : ''}`}
                                            ></div>
                                            <span className="pointer-events-none z-10 pl-5 text-[13px]">Phone Number</span>
                                        </div>
                                    </div>

                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="text" placeholder="firstname"
                                    />
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="text" placeholder="Lastname"
                                    />
                                    {signupMethod === 'email' && (
                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            type="email" placeholder="Email"
                                        />
                                    )}
                                    {signupMethod === 'phone' && <PhoneNumber/>}
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password" placeholder="Password"
                                    />
                                    <button
                                        className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                    >
                                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                             strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                                            <circle cx="8.5" cy="7" r="4"/>
                                            <path d="M20 8v6M23 11h-6"/>
                                        </svg>
                                        <span className="ml-3">
                                            Sign Up
                                        </span>
                                    </button>
                                    <p className="mt-6 text-xs text-gray-600 text-center">Have you an account? <Link href={"/login"} className={"text-blue-400 hover:underline"}>Login</Link></p>
                                    <p className="mt-6 text-xs text-gray-600 text-center">
                                        I agree to abide by template&apos;s
                                        <a href="#" className="border-b border-gray-500 border-dotted">
                                            Terms of Service
                                        </a>
                                        and its
                                        <a href="#" className="border-b border-gray-500 border-dotted">
                                            Privacy Policy
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                             style={{backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')"}}>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Register;
