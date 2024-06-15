"use client"
import { useState } from "react";
import PhoneNumber from "@/components/PhoneNumber";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import signupAction from "@/action/signupAction";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [signupMethod, setSignupMethod] = useState('email');
    const [showPassword, setShowPassword] = useState(false);

    // Validation schema
    const schema = z.object({
        firstname: z.string().nonempty('First name is required'),
        lastname: z.string().nonempty('Last name is required'),
        email: z.string().email('Invalid email address').optional(),
        gender: z.string().nonempty('Gender is required'),
        dob: z.string().nonempty('Date of birth is required'),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters')
            .regex(/(?=.*[a-z])/, 'Password must contain at least one lowercase letter')
            .regex(/(?=.*[A-Z])/, 'Password must contain at least one uppercase letter')
            .regex(/(?=.*\d)/, 'Password must contain at least one number')
            .regex(/(?=.*[@$!%*?&])/, 'Password must contain at least one special character'),
    });

    const router = useRouter();

    const {
        handleSubmit,
        setError,
        formState: { errors },
        register,
    } = useForm({
        resolver: zodResolver(schema),
    });

    const handleUserRegister = async (data) => {
        try {
            const response = await signupAction(data);
            if (response) {
                console.log('Success: User registered');
                router.push(`/verifyRegister?email=${encodeURIComponent(data.email)}`);
            } else {
                console.log('Registration failed');
                setError('email', {
                    type: 'manual',
                    message: 'Email already exists, please try other email.',
                });
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setError('email', {
                    type: 'manual',
                    message: 'Email already exists. Please use a different email address.',
                });
            } else {
                console.error('Unexpected error during registration:', error);
                setError('form', {
                    type: 'manual',
                    message: 'Unexpected error occurred. Please try again later.',
                });
            }
        }
    };

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
                            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign Up with</h1>
                            <form className="w-full flex-1 mt-8" onSubmit={handleSubmit(handleUserRegister)}>
                                <div className="mx-auto max-w-xs">
                                    <div className="mb-6 grid grid-cols-2 gap-y-2 gap-x-4 lg:flex-row">
                                        <div
                                            className={`relative flex w-36 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700 ${signupMethod === "email" ? "border-blue-600" : "border-gray-300"}`}
                                            onClick={() => setSignupMethod("email")}
                                        >
                                            <input
                                                className="peer hidden"
                                                type="radio"
                                                name="radio"
                                                id="radio1"
                                                checked={signupMethod === "email"}
                                                readOnly
                                            />
                                            <label
                                                className={`peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border peer-checked:border-blue-600 ${signupMethod === "email" ? "peer-checked:border-blue-600" : ""}`}
                                                htmlFor="radio1"
                                            ></label>
                                            <div
                                                className={`peer-checked:bg-blue-600 peer-checked:ring-2 absolute left-3 h-4 w-4 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 ${signupMethod === "email" ? "ring-2 ring-blue-600" : ""}`}
                                            ></div>
                                            <span className="pointer-events-none z-10 pr-5 text-[13px]">Email</span>
                                        </div>
                                        <div
                                            className={`relative flex w-36 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700 ${signupMethod === "phone" ? "border-blue-600" : "border-gray-300"}`}
                                            onClick={() => setSignupMethod("phone")}
                                        >
                                            <input
                                                className="peer hidden"
                                                type="radio"
                                                name="radio"
                                                id="radio3"
                                                checked={signupMethod === "phone"}
                                                readOnly
                                            />
                                            <label
                                                className={`peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border peer-checked:border-blue-600 ${signupMethod === "phone" ? "peer-checked:border-blue-500" : ""}`}
                                                htmlFor="radio3"
                                            ></label>
                                            <div
                                                className={`peer-checked:bg-blue-600 peer-checked:ring-2 absolute left-3 h-4 w-4 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2 ${signupMethod === "phone" ? "ring-2 ring-blue-600" : ""}`}
                                            ></div>
                                            <span className="pointer-events-none z-10 pl-5 text-[13px]">Phone Number</span>
                                        </div>
                                    </div>
                                    <input
                                        className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${errors.firstname ? "border-red-500" : "border-gray-200"} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                                        type="text"
                                        placeholder="First name"
                                        {...register("firstname")}
                                    />
                                    {errors.firstname &&
                                        <p className="text-red-500 text-xs">{errors.firstname.message}</p>}

                                    <input
                                        className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${errors.lastname ? "border-red-500" : "border-gray-200"} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5`}
                                        type="text"
                                        placeholder="Last name"
                                        {...register("lastname")}
                                    />
                                    {errors.lastname &&
                                        <p className="text-red-500 text-xs">{errors.lastname.message}</p>}

                                    {signupMethod === "email" && (
                                        <>
                                            <input
                                                className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${errors.email ? "border-red-500" : "border-gray-200"} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5`}
                                                type="email"
                                                placeholder="Email"
                                                {...register("email")}
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-xs">{errors.email.message}</p>
                                            )}
                                        </>
                                    )}

                                    {signupMethod === "phone" && (
                                        <>
                                            {/*<PhoneNumber />*/}
                                            <input
                                                className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${errors.phone ? "border-red-500" : "border-gray-200"} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5`}
                                                type="email"
                                                placeholder="Phone number"
                                                {...register("phone")}
                                            />
                                            {errors.phone && (
                                                <p className="text-red-500 text-xs">{errors.phone.message}</p>
                                            )}
                                        </>
                                    )}

                                    <div className="relative mt-5">
                                        <input
                                            className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${errors.password ? "border-red-500" : "border-gray-200"} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                            {...register("password")}
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="text-red-500 text-xs">{errors.password.message}</p>
                                    )}

                                    <button
                                        className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                    >
                                        <svg
                                            className="w-6 h-6 -ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                                            <circle cx="8.5" cy="7" r="4"/>
                                            <path d="M20 8v6M23 11h-6"/>
                                        </svg>
                                        <span className="ml-3">Sign Up</span>
                                    </button>
                                    {errors.form && (
                                        <p className="text-red-500 text-xs mt-4 text-center">{errors.form.message}</p>
                                    )}
                                    <p className="mt-6 text-xs text-gray-600 text-center">
                                        Have you an account? <Link href={"/login"}
                                                                   className="text-blue-400 hover:underline ml-2">Login</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                        <div
                            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                            style={{backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')"}}
                        ></div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Register;
