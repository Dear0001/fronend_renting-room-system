"use client"
import React, {useState} from 'react';
import Link from "next/link";
import PhoneNumber from "@/components/PhoneNumber";
import Image from "next/image";
import {signIn} from "next-auth/react"
import {useRouter} from "next/navigation";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";

const Page = () => {
    const router = useRouter();

    async function handleLogin(userInfo) {
        const newUser = {
            email: userInfo.get("email"),
            password: userInfo.get("password")
        }
        const res = await signIn("credentials", {
            redirect: false,
            ...newUser,
        });
        console.log("key: ", res)
        if (res.ok) {
            router.push("/renting")
        }
    }
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [signupMethod, setSignupMethod] = useState('email');
    return (
        <div className="container-width">
            <div className="mx-auto flex my-5  max-w-full flex-col md:max-w-none md:flex-row">

                {/*Form input */}
                <form>
                    <div className="px-4 py-20">
                        <h2 className="mb-2 text-3xl font-bold">Sign In</h2>
                        <span href="#" className="mb-10 block font-bold text-gray-600">Have an account <Link
                            className={"hover:text-blue-600 text-blue-500"} href={"/register"}> Sign Up</Link></span>
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
                                <input id="signup-password"
                                       type={showPassword ? "text" : "password"}
                                       className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                                       placeholder="Choose a password (minimum 8 characters)"/>
                                {showPassword ? (
                                    <IoEyeOutline onClick={togglePasswordVisibility}
                                                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"/>
                                ) : (
                                    <FaRegEyeSlash onClick={togglePasswordVisibility}
                                                   className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"/>
                                )}
                            </div>
                        </div>
                        <div class="my-5">
                            <button
                                className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                                <Image height={30} width={30} src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt=""/>
                                <span>Login with Google</span>
                            </button>
                        </div>
                        <div class="my-5">
                            <button
                                className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                                <Image height={30} width={30}  src="https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_1280.png" className="w-6 h-6" alt=""/>
                                <span>Login with Facebook</span>
                            </button>
                        </div>
                        <Link href={"/"}
                              className="hover:shadow-blue-600/40 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-8 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg">Login
                        </Link>
                    </div>
                </form>
                <div
                    className="max-w-full rounded-3xl bg-gradient-to-t from-blue-700 via-blue-400 to-blue-600 px-4 py-10 text-white sm:px-10 md:m-6 md:mr-8">
                    <p className="mb-20 font-bold tracking-wider">RENT</p>
                    <p className="mb-4 text-3xl font-bold md:text-4xl md:leading-snug">
                        Start your <br/>
                        life with us
                    </p>
                    <p className="mb-28 leading-relaxed text-gray-200">Lorem ipsum dolor sit amet consectetur
                        radicalising elit.
                        Face nisei voluptuous a official. Omnibus.</p>
                    <div className="bg-blue-600/80 rounded-2xl px-4 py-8">
                        <p className="mb-3 text-gray-200">Lorem ipsum dolor sit amet, consectetur radicalising elit.
                            Error ea
                            voluptuous sapient!</p>
                        <div className="">
                            <div className="flex items-center">
                                <Image height={10} width={10} className="h-10 w-10 rounded-full object-cover"
                                       src="data:image/jpeg;base64,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"
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
        </div>
    );
};

export default Page;