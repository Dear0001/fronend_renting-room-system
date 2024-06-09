import React from 'react';
import CardRent from "@/components/CardRent";

const Page = async () => {
    const data = await fetch("https://movie-api-get-only-bmc3.vercel.app/api");
    const result = await data.json();
    return (
        <main className={"container mx-auto max-w-[1238px] max-md:max-w-full"}>
            <h2 className={"font-bold text-3xl pt-10"}>Dear! John</h2>
            <div className={"my-3"}>
            {result?.payload?.map((movie) => (
                <CardRent
                    movie_id={movie.movie_id}
                    image={movie.image}
                    movie_title={movie.movie_title}
                    description={movie.description}
                />
            ))}
            </div>
        </main>
    );
};

export default Page;