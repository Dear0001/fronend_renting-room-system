"use client"
import BannerNav from "@/components/BannerNav";
import { MdFindReplace } from "react-icons/md";
import PreferencesComponents from "@/components/PreferencesComponents";
import Card from "@/components/Card";
import {IoLocationSharp, IoPricetagOutline} from "react-icons/io5";
import {FaUsers} from "react-icons/fa";
import {GiStairs} from "react-icons/gi";
import Link from "next/link";

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
            <div className="container-width flex gap-5 py-4">
                <PreferencesComponents text={"Price"} icon={IoPricetagOutline} items={["$50", "$65", "$80"]}/>
                <PreferencesComponents text={"Location"} icon={IoLocationSharp} items={["Tuek Tla", "Beng Salang"]}/>
                <PreferencesComponents text={"Floor"} icon={GiStairs} items={["Floor 1", "Floors 2", "Floors 3", "Floor 4"]}/>
                <PreferencesComponents text={"Roommate"} icon={FaUsers} items={["One", "Two", "Three", "Forth"]}/>
            </div>

            <div className="container-width container-width grid grid-cols-3 my-10 gap-5">
                {
                    result?.payload?.map((movie) => (
                        <Link href={`/detail/${movie.movie_id}`} key={movie.movie_id}>
                            <Card
                                image={movie.image}
                                movie_title={movie.movie_title}
                                description={movie.description}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Page;