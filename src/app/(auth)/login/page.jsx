"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { loginWithGoogle } from "@/service/authService";

const Login = () => {
    const schema = z.object({
        email: z.string().email("Invalid email address."),
        password: z.string().min(1, "Please enter password."),
    });

    const router = useRouter();
    const [error, setError] = useState(null);
    const { data: session } = useSession();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    // Google login
    const handleSignIn = async (provider) => {
        setError(null);
        try {
            const result = await signIn(provider, { redirect: false, callbackUrl: "/" });
            if (result?.error) {
                console.error("Sign in error:", result.error);
                setError("Sign in failed. Please try again or use a different account.");
            }
        } catch (error) {
            console.error("Unexpected error during sign in:", error);
            setError("An unexpected error occurred. Please try again later.");
        }
    };

    // Handle login with Google
    const handleGoogleSignIn = async () => {
        if (session) {
            console.log("session with additional data:", session);
            const { email, name, image: avatar } = session.user;
            const [firstName, lastName] = name.split(" ");
            console.log("User data from Google:", { email, firstName, lastName, avatar });

            try {
                const backendResponse = await loginWithGoogle({ email, firstName, lastName, avatar });

                if (backendResponse) {
                    console.log("Backend response:", backendResponse);
                    router.push("/");
                } else {
                    console.error("Unexpected backend response:", backendResponse);
                    setError("Sign in failed. Please try again or use a different account.");
                }
            } catch (error) {
                console.error("Error logging in with Google:", error);
                setError("Sign in failed. Please try again or use a different account.");
            }
        }
    };

    // useEffect to handle Google sign-in on session change
    useEffect(() => {
        handleGoogleSignIn();
    }, [session, router]);

    // Local login
    const handleLogin = async (userInfo) => {
        const newUserInfo = {
            email: userInfo.email,
            password: userInfo.password,
        };

        try {
            const res = await signIn("credentials", {
                redirect: false,
                ...newUserInfo,
            });

            if (res?.ok) {
                router.push("/");
            } else {
                const errorMessage = res?.error || "Login failed. Please check your credentials.";
                setError(errorMessage);
            }
        } catch (error) {
            console.error("Error logging in:", error);
            setError("An unexpected error occurred. Please try again later.");
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
                            <h1 className="text-2xl xl:text-3xl font-extrabold">
                                Sign In
                            </h1>
                            <div className="w-full flex-1 mt-8">
                                <div className="flex flex-col items-center">
                                    <button onClick={() => handleSignIn("google")}
                                            className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                                    >
                                        <div className="bg-white p-2 rounded-full">
                                            <svg className="w-4" viewBox="0 0 533.5 544.3">
                                                <path
                                                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                    fill="#4285f4"
                                                />
                                                <path
                                                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                    fill="#34a853"
                                                />
                                                <path
                                                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                    fill="#fbbc04"
                                                />
                                                <path
                                                    d="M272.1 107.6c39.9-.7 78.5 14.5 108 42.1l80.1-80.1c-48.4-45-112.2-69-178.1-67.4C160.7 8 66.6 66 28.9 150l90.4 70.1c21.7-64.4 81.8-112.4 152.8-112.5z"
                                                    fill="#ea4335"
                                                />
                                            </svg>
                                        </div>
                                        <span className="ml-4">Sign In with Google</span>
                                    </button>

                                    <button onClick={() => handleSignIn("facebook")}
                                            className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
                                    >
                                        <div className="bg-white p-1 rounded-full">
                                            <Image width={30} height={30} alt={"image"} src={"/assets/images/facebook.svg"}/>
                                        </div>
                                        <span className="ml-4">Login with Facebook</span>
                                    </button>
                                </div>

                                <div className="my-12 border-b text-center">
                                    <div
                                        className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                        Or sign up with e-mail
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit(handleLogin)} className="mx-auto max-w-xs">
                                    <input
                                        className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${errors.email ? 'border-red-500' : 'border-gray-200'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                                        type="email" placeholder="Email" name="email" id="email" {...register('email')}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

                                    <input
                                        className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${errors.password ? 'border-red-500' : 'border-gray-200'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5`}
                                        type="password" placeholder="Password"
                                        name="password" id="password" {...register('password')}
                                    />
                                    {errors.password &&
                                        <p className="text-red-500 text-xs">{errors.password.message}</p>}
                                    <p className="text-paragraph16_regular mt-2 text-primary flex justify-end">
                                        <Link href={'/forgotPassword'}>Forgot Password?</Link>
                                    </p>

                                    <button
                                        type="submit"
                                        className="mt-4 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                    >
                                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                             strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                                            <circle cx="8.5" cy="7" r="4"/>
                                            <path d="M20 8v6M23 11h-6"/>
                                        </svg>
                                        <span className="ml-3">
                                            Sign In
                                        </span>
                                    </button>

                                    {error && <p className="mt-5 text-red-500 text-xs text-center">{error}</p>}

                                    <p className="mt-6 text-xs text-gray-600 text-center">Didn't have an account?
                                        <Link href={"/register"} className={"text-blue-400 hover:underline ml-2"}>Sign
                                            up</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat relative overflow-hidden">
                            <div>
                                <Image className="absolute inset-0 bg-cover bg-no-repeat bg-center animate-upDownBg" fill src={"/assets/images/signup.svg"} alt={"image"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;
