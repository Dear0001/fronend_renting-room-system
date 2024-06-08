"use client"
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

const NavbarRent = () => {
    const { data: session } = useSession();

    return (
        <>
            <div className="sticky top-0 z-10 flex flex-col justify-end items-center bg-blue-500 px-16 py-3 max-md:px-5">
                <div className="flex flex-col w-full max-w-[1238px] max-md:max-w-full">
                    <div className="flex gap-5 justify-between items-center max-w-full text-lg text-center text-white max-md:flex-wrap">
                        <div className="flex gap-5 justify-center text-center items-center">
                            <Image
                                width={80}
                                height={90}
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&"
                                className="shrink-0 self-stretch aspect-[0.97] w-[65px]"
                                alt={"test"}
                            />
                            <ul className="flex gap-5">
                                <li>
                                    <Link className="self-stretch my-auto cursor-pointer" href={"/"}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link className="self-stretch my-auto cursor-pointer" href={"/category"}>
                                        Categories
                                    </Link>
                                </li>
                                <li>
                                    <a className="self-stretch my-auto cursor-pointer">
                                        Rent
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Profile */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                {!session ? (
                                    <div className="flex items-center mt-4">
                                        <Image
                                            width={62}
                                            height={62}
                                            alt={"image"}
                                            src={""}
                                        />
                                    </div>
                                ) : (
                                    <Image
                                        src={session.user.image}
                                        alt="Profile Picture"
                                        width={62}
                                        height={62}
                                        className="rounded-full"/>
                                )}
                            </div>
                            <ul
                                tabIndex={0}
                                className={`menu text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52`}
                            >
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li>
                                    <a>Settings</a>
                                </li>
                                {!session ? (
                                    <li>
                                        <Link href={"/login"}>
                                            <span className="cursor-pointer">Logout</span>
                                        </Link>
                                    </li>
                                ) : (
                                    <li>
                                        <Link href={"/register"}>
                                            <span className="cursor-pointer">Sign In</span>
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarRent;

