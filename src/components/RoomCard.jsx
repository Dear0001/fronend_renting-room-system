import React from 'react';
// import {FaStairs} from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaTachometerAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";


const RoomCard = ({movie_id,image}) => {
    console.log("this is movie id:", movie_id)

    return (
        <article className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div
                className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <Image width={500} height={500}
                       src={image ? image : "https://prod-images.viu.com/2521856816/6feda49624fdc12682d3a83feb50a732252503f9"}
                    alt="ui/ux review check"/>
                <div
                    className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                </div>
                <button
                    className="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                     <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z">
          </path>
        </svg>
      </span>
                </button>
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <p className={"flex gap-4 text-2xl text-black font-bold"}>
                        <FaUserLarge />
                        <span>Saing Sopheak</span>
                    </p>
                </div>
                <ul className={"flex flex-col gap-2"}>
                    <li>Location: <span>Toul Kork</span></li>
                    <li>Contact Number: <span>095 3832 434</span></li>
                    <li>Renting Policies</li>
                    <li>
                        <article className={"flex justify-between"}>
                        <p>
                            Availability: <span>Free</span></p>
                        </article>
                        <div className={"flex justify-between"}>
                            <span></span>
                            <span> <FaStar className={"inline-block"}/> 4.7</span>
                        </div>
                    </li>
                    <li>
                        <Link  href={`/detail/${movie_id}`} key={movie_id} type={"button"} className={"flex text-center items-center justify-center gap-4 bg-blue-500 text-white py-2.5 px-4 rounded-2xl"}>
                            <FaTachometerAlt />
                            See More...
                        </Link>
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default RoomCard;