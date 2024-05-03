
import * as React from "react";

const ViewOwnerComponent = () => {
    return (
        <>
            <div
                className="flex overflow-x-auto flex-col gap-0 justify-center text-lg text-black max-w-[622px] max-md:flex-wrap">
                <div
                    className="flex flex-col gap-3.5 px-5 pt-5 pb-6 w-full bg-white rounded-2xl shadow-lg max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col gap-0 justify-center font-bold max-md:flex-wrap max-md:max-w-full">
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
                    <div className="flex gap-0 px-3.5 py-px mt-3.5 bg-white rounded-xl shadow-lg max-md:flex-wrap">
                        <div className="flex-auto gap-0 self-start">
                            Upload renting policies document:{" "}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewOwnerComponent;

