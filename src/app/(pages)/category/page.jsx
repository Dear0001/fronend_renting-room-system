import React from 'react';
import {MdFindReplace} from "react-icons/md";
import PreferencesComponents from "@/components/PreferencesComponents";
import RoomCard from "@/components/RoomCard";
import ImageScroll from "@/components/ImageScroll";

const Page = async () => {
    const data = await fetch("https://movie-api-get-only-bmc3.vercel.app/api");
    const result = await data.json();
    return (
        <div className={"my-10"}>
            <div className={"container-width flex gap-2  text-2xl font-bold text-black"}>
                <MdFindReplace  className={"mb-5"}/>
                <h3 className={"mb-5"}>Filter your preferences</h3>
            </div>
            <div className="container-width grid grid-cols-4 my-4 gap-4">
                <div><PreferencesComponents/></div>
                <div><PreferencesComponents/></div>
                <div><PreferencesComponents/></div>
                <div><PreferencesComponents/></div>
            </div>
            <div className="container-width grid grid-cols-3 my-10 gap-5">
                {
                    result?.payload?.map((movie) => (
                        <RoomCard
                            key={movie.id}
                            image={movie.image}
                            movie_title={movie.movie_title}
                            description={movie.description}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Page;