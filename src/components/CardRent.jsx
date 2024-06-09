"use client"
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegStar, FaStar } from "react-icons/fa";

const CardRent = ({ image, movie_title, movie_id, description }) => {
    const [selectedStarIndex, setSelectedStarIndex] = useState(null);

    const handleStarClick = (index) => {
        setSelectedStarIndex(index);
    };
    return (
        <main className="card card-side max-w-[1000px] rounded-lg border transition duration-300 shadow-lg hover:shadow-2xl border-none my-10">
            <figure>
                <Image
                    width={350}
                    height={400}
                    layout="fixed"
                    className={"rounded-t-lg"}
                    src={image ? image : "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"}
                    alt={"rent"}
                />
            </figure>
            <div className="card-body">
                <div className={"grid grid-cols-3"}>
                    <h2 className="card-title font-bold col-span-2 max-lines-1 max-w-[400px]">{movie_title}</h2>
                    <span className={"flex justify-end gap-2"}>
                        {[...Array(5)].map((_, index) => (
                            <React.Fragment key={index}>
                                {index < selectedStarIndex ? (
                                    <FaStar className={"text-2xl text-yellow-500"} onClick={() => handleStarClick(index + 1)}/>
                                ) : (
                                    <FaRegStar className={"text-2xl text-yellow-500"} onClick={() => handleStarClick(index + 1)}/>
                                )}
                            </React.Fragment>
                        ))}
                    </span>
                </div>
                <div className="grid grid-cols-6 gap-2 mb-3 ">
                    <h5 className="col-span-5 max-w-[450px] font-sans font-medium text-xl antialiased leading-snug tracking-normal text-blue-gray-900 overflow-hidden overflow-ellipsis max-lines-2">
                        {description}
                    </h5>
                </div>
                <div className="card-actions flex gap-5">
                    <Link href={`/detail/${movie_id}`}>
                        <span className="btn btn-primary">See more..</span>
                    </Link>
                    <button className="btn btn-error">Remove</button>
                </div>
            </div>
        </main>
    );
};

export default CardRent;