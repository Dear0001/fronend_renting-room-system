import React from 'react';
import Image from "next/image";

const OwnerDownload = () => {
    return (
        <div className="flex flex-col gap-5 max-md:flex-wrap">
            <div className="flex flex-col gap-2.5 px-5 -mt-24 text-black">
                <div className="text-4xl font-bold">
                    Sopheak Saing
                </div>
                <div className="gap-0 self-end mt-2.5 text-xl">View my room on map</div>
            </div>
            <div className="flex gap-5 mt-5 w-full max-md:flex-wrap max-md:max-w-full">
                <div
                    className="flex overflow-x-auto no-scrollbar flex-col grow shrink-0 gap-0 justify-center basis-0 w-fit max-md:flex-wrap max-md:max-w-full">
                    <div
                        className="flex flex-col gap-3.5 px-5 pt-5 bg-white rounded-2xl shadow-lg max-md:flex-wrap max-md:max-w-full">
                        <div
                            className="flex flex-col gap-0 justify-center text-lg font-bold text-black max-md:flex-wrap max-md:max-w-full">
                            <div
                                className="px-5 pt-5 pb-9 bg-white rounded-xl shadow-lg max-md:flex-wrap max-md:max-w-full">
                                Personal Info:
                                <br/>
                                <span className="">Full Name:</span>
                                <br/>
                                <span className="">Contact info:  Rent House Address: </span>
                                <br/>
                                <span className="">About Room: </span>
                                <ul>
                                    <li>
                                        <span className="">Room Type:</span>
                                    </li>
                                    <li>
                                        <span className="">Number of Bedroom</span>
                                    </li>
                                    <li>
                                        <span className="">Number of Bathroom</span>
                                    </li>
                                    <li>
                                        <span className="">Amenities:</span>
                                    </li>
                                </ul>
                                <span className="">Renting Info:</span>
                                <ul>
                                    <li></li>
                                </ul>
                                <br/>
                                <br/>
                            </div>
                        </div>
                        <div
                            className="flex z-10 py-10 flex-col gap-5 items-start pt-1.5 mt-3.5 -mb-2.5 max-w-full w-[338px] max-md:mb-2.5">
                            <div
                                className="items-start px-3 pt-1.5 pb-3.5 text-lg text-black bg-white rounded-xl shadow-lg max-md:pr-5">
                                View Policies Document:{" "}
                            </div>
                        </div>
                    </div>
                </div>
                <Image width={10} height={10}
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2da9a51fcdf5568ec53a247719986a990f844f93ad872ca7e980ea2aa9030504?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da9a51fcdf5568ec53a247719986a990f844f93ad872ca7e980ea2aa9030504?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da9a51fcdf5568ec53a247719986a990f844f93ad872ca7e980ea2aa9030504?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da9a51fcdf5568ec53a247719986a990f844f93ad872ca7e980ea2aa9030504?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da9a51fcdf5568ec53a247719986a990f844f93ad872ca7e980ea2aa9030504?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da9a51fcdf5568ec53a247719986a990f844f93ad872ca7e980ea2aa9030504?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da9a51fcdf5568ec53a247719986a990f844f93ad872ca7e980ea2aa9030504?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da9a51fcdf5568ec53a247719986a990f844f93ad872ca7e980ea2aa9030504?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&"
                    className="grow shrink-0 h-[460px] gap-0 aspect-[1.54] basis-0 w-fit max-md:flex-wrap max-md:max-w-full"
                 alt={"d"}/>
            </div>
            <div className={"flex"}>
                <div
                    className="justify-center items-center px-16 pt-2 pb-5 mt-5 ml-80 max-w-full text-3xl font-bold text-center text-white whitespace-nowrap bg-blue-600 w-[313px] max-md:px-5 max-md:ml-2.5">
                    Message
                </div>
                <div
                    className="justify-center items-center px-16 pt-2 pb-5 mt-5 ml-80 max-w-full text-3xl font-bold text-center text-white whitespace-nowrap bg-green-600 w-[313px] max-md:px-5 max-md:ml-2.5">
                    Call
                </div>
            </div>

        </div>
    );
};

export default OwnerDownload;