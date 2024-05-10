"use client"
import {useState} from "react";
import Link from "next/link";
import Image from "next/image";

const NavbarRent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleClick = () => {
        setIsLoggedIn(prevState => !prevState);
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <>
            <div className="flex flex-col justify-end items-center bg-blue-500  px-16 py-3 max-md:px-5">
                <div className="flex flex-col w-full max-w-[1238px] max-md:max-w-full">
                    <div
                        className="flex gap-5 justify-between items-center max-w-full text-lg text-center text-white max-md:flex-wrap">
                        <div className={"flex gap-5 justify-center text-center items-center"}>
                            <Image width={80} height={90}
                                   loading="lazy"
                                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&"
                                   className="shrink-0 self-stretch aspect-[0.97] w-[65px]"
                                   alt={"test"}/>
                            <ul className={"flex gap-5 "}>
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
                        {/*profile*/}
                        <div className="dropdown dropdown-end text-black">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <Image width={50} height={50} alt="Tailwind CSS Navbar component"
                                         src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                                </div>
                            </div>
                            <ul tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarRent;