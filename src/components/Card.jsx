import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {FaTachometerAlt} from "react-icons/fa";

const Card = ({image, movie_title, key}) => {
    return (
        <>
            <div
                className="relative flex w-full max-w-[26rem] flex-col py-5 rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <div
                    className="relative mx-4 m-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                    <Image width={400} height={400}
                           src={image ? image : "https://prod-images.viu.com/2521856816/6feda49624fdc12682d3a83feb50a732252503f9"}
                        alt="ui/ux review check"/>
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                        <h5 className="block font-sans font-bold text-xl antialiased leading-snug tracking-normal text-blue-gray-900 max-lines-1">
                            {movie_title}
                        </h5>
                        <p
                            className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="-mt-0.5 h-5 w-5 text-yellow-700">
                                <path fill-rule="evenodd"
                                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            5.0
                        </p>
                    </div>
                    <p className={"font-bold text-[18px]"}>Owner: <span className={"text-blue-400"}>Saing Sopheak</span></p>
                    <p className={"py-1"}><span className={"font-bold"}>$70/$80/$90 </span>a month</p>
                    <p className="block font-sans text-base antialiased leading-relaxed text-gray-500 pb-1">
                        <span className={"font-bold"}>Contact number:</span> 095 3832 434
                    </p>
                    <p  className={"text-blue-400"}>• Rent Polices</p>
                    <div className={"pt-5 flex gap-5"}>
                        <p className={"flex justify-center text-left items-center gap-3"}>
                            <Image height={20} width={20} src={"/assets/images/Stair.svg"} alt={"icon"}/>
                            <span className={"font-bold text-[20px]"}>3</span> Floor
                        </p>
                        <p className={"flex justify-center text-left items-center gap-3"}>
                            <Image height={20} width={20} src={"/assets/images/bath.svg"} alt={"icon"}/>
                            <span className={"font-bold text-[20px]"}>3</span> Floor
                        </p>
                    </div>
                </div>
                <Link href={`/detail/${key}`} key={key}>
                        <span className={"flex text-center mx-5 items-center justify-center gap-4 bg-blue-500 text-white py-2.5 px-4 rounded-2xl"}>
                            <FaTachometerAlt />
                            See Detail...
                        </span>
                </Link>
            </div>
        </>
    );
};

export default Card;