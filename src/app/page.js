import BannerNav from "@/components/BannerNav";
import { MdFindReplace } from "react-icons/md";
import PreferencesComponents from "@/components/PreferencesComponents";
import Card from "@/components/Card";
import { IoLocationSharp, IoPricetagOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { GiStairs } from "react-icons/gi";
const Page = async () => {
    const data = await fetch("https://movie-api-get-only-bmc3.vercel.app/api");
    const result = await data.json();
    const genresSet = new Set(result.payload.map((movie) => movie.genre));
    const genres = Array.from(genresSet);
    return (
        <div className="flex flex-col gap-4 mb-10">
            <BannerNav />
            <div className="container mx-auto flex items-center gap-2 text-2xl font-bold text-black px-4">
                <MdFindReplace />
                <h3>Filter your preferences</h3>
            </div>
            <div className="container mx-auto flex flex-wrap gap-5 py-4 px-4">
                <PreferencesComponents text={"Price"} icon={IoPricetagOutline} items={["$50", "$65", "$80"]} />
                <PreferencesComponents text={"Location"} icon={IoLocationSharp} items={["Tuek Tla", "Beng Salang"]} />
                <PreferencesComponents text={"Floor"} icon={GiStairs} items={["Floor 1", "Floors 2", "Floors 3", "Floor 4"]} />
                <PreferencesComponents text={"Roommate"} icon={FaUsers} items={["One", "Two", "Three", "Forth"]} />
            </div>

            <div>
                <h4 className="max-w-[1488px] text-2xl text-blue-600 m-auto font-bold">ALL Block</h4>
                <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 my-10 px-4">
                    {result?.payload?.map((movie) => (
                        <Card
                            key={movie.movie_id}
                            image={movie.image}
                            movie_title={movie.movie_title}
                            description={movie.description}
                            genre={movie.genre}
                        />
                    ))}
                </div>
            </div>

            {genres.map((genre) => {
                const genreMovies = result.payload.filter((movie) => movie.genre === genre);
                return (
                    <div key={genre}>
                        <h4 className="max-w-[1488px] text-2xl text-blue-600 m-auto font-bold">{genre} Block</h4>
                        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 my-10 px-4">
                            {genreMovies.map((movie) => (
                                <Card
                                    key={movie.movie_id}
                                    image={movie.image}
                                    movie_title={movie.movie_title}
                                    description={movie.description}
                                    genre={movie.genre}
                                />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Page;
