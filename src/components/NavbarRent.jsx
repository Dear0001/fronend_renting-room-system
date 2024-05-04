"use client"
import {useState} from "react";
import Link from "next/link";

const NavbarRent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleClick = () => {
        setIsLoggedIn(prevState => !prevState);
    };
    return (
        <>
            <div className="flex flex-col justify-end items-center bg-blue-700  px-16 pt-2 max-md:px-5">
                <div className="flex flex-col w-full max-w-[1238px] max-md:max-w-full">
                    <div
                        className="flex gap-5 justify-between items-center max-w-full text-lg text-center text-white w-[497px] max-md:flex-wrap">
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
                            <li>
                                <Link href={"/register"} className="self-stretch my-auto cursor-pointer" onClick={handleClick}>
                                    {isLoggedIn ? 'Sign Out' : 'Sign In'}
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarRent;