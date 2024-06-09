import React from 'react';
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