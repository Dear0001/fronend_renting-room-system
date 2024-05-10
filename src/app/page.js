import React from 'react';
import BannerNav from "@/components/BannerNav";
import { MdFindReplace } from "react-icons/md";
import PreferencesComponents from "@/components/PreferencesComponents";
import Card from "@/components/Card";
import {getAllMovies} from "@/service/roomService";

const Page = async () => {
    const data = await fetch("https://movie-api-get-only-bmc3.vercel.app/api");
    const result = await data.json();
    console.log(result);
    return (
        <div className={"flex flex-col gap-4 mb-10"}>
            <BannerNav/>
            <div className={"container-width flex gap-2  text-2xl font-bold text-black"}>
                <MdFindReplace/>
                <h3>Filter your preferences</h3>
            </div>
            <div className="container-width grid grid-cols-4 gap-4">
                <div><PreferencesComponents/></div>
                <div><PreferencesComponents/></div>
                <div><PreferencesComponents/></div>
                <div><PreferencesComponents/></div>
            </div>

            <div className="container-width container-width grid grid-cols-3 my-10 gap-5">
                {
                    result?.payload?.map((movie) => (
                        <Card
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