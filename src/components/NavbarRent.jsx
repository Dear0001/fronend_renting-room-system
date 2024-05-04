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
            <div className="flex flex-col justify-end items-center bg-blue-700  px-16 py-3 max-md:px-5">
                <div className="flex flex-col w-full max-w-[1238px] max-md:max-w-full">
                    <div
                        className="flex gap-5 justify-between items-center max-w-full text-lg text-center text-white max-md:flex-wrap">
                        <div className={"flex gap-5 justify-center text-center items-center"}>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/008d395d52e00074a8a83f13462bef3d2cbbe39219fcc79891fd860e106ad11b?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&"
                                className="shrink-0 self-stretch aspect-[0.97] w-[65px]"
                            />
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
                        <div className="relative">
                            <button
                                id="dropdownAvatarNameButton"
                                onClick={toggleDropdown}
                                className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full md:me-0 dark:text-white"
                                type="button"
                            >
                                <span className="sr-only">Open user menu</span>
                                <Image
                                    width={10}
                                    height={10}
                                    className="w-8 h-8 me-2 rounded-full"
                                    src="https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                                    alt="user photo"
                                />
                                Bonnie Green
                                <svg
                                    className={`w-2.5 h-2.5 ms-3 ${isOpen ? 'transform rotate-180' : ''}`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>

                            {isOpen && (
                                <div
                                    id="dropdownAvatarName"
                                    className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                                >
                                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                        <div className="font-medium ">Pro User</div>
                                        <div className="truncate">name@flowbite.com</div>
                                    </div>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                        <li>
                                            <a href="#"
                                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Settings
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Earnings
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="py-2">
                                            <Link href={"/register"} className="self-stretch my-auto cursor-pointe block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-whiter"
                                                  onClick={handleClick}>
                                                {isLoggedIn ? 'Sign Out' : 'Sign In'}
                                            </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarRent;