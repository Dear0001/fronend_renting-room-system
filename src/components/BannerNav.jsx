import React from 'react';
import Image from "next/image";
import DropDown from "@/components/DropDown";

const BannerNav = () => {
    return (
        <div className="flex flex-col justify-end items-center bg-blue-500 px-16 pt-2 max-md:px-5">
            <div className="flex flex-col w-full max-w-[1238px] max-md:max-w-full">
                <div className="mt-11 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col text-white max-md:mt-10 max-md:max-w-full">
                                <div className="text-4xl font-bold text-center max-md:max-w-full">
                                    Let’s us Find You Room!
                                </div>
                                <div className="mt-10 text-base max-md:mt-10 max-md:max-w-full">
                                    Find your most reliable and reasonable room at ease or gain
                                    more renters
                                </div>
                                <div className="flex gap-5 items-center pr-7 pl-3 mt-12 text-xl text-black bg-white rounded-[30px] max-md:flex-wrap max-md:pr-5 max-md:mt-10">
                                    <div className="grow self-stretch my-auto">
                                        What do you use this system for?
                                    </div>
                                    <div className="shrink-0 self-stretch w-px bg-black border border-black border-solid h-[55px]"/>
                                    <div className="flex-auto self-stretch my-auto">
                                        To rent room
                                    </div>
                                    <DropDown/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                            <Image
                                width={1238}
                                height={800}
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5cf5e4f348cf90a3e085be9ce41d7b40fe8842d536c585b3a9c9d93c65dc7c8?apiKey=2f013c53cc004a938ce597cfa1a4f4fb"
                                className="w-full aspect-[1.89] max-md:mt-10 max-md:max-w-full"
                                alt="Room Image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerNav;
