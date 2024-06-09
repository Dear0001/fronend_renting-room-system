import { MdFindReplace } from 'react-icons/md';
import PreferencesComponents from '@/components/PreferencesComponents';
import RoomCard from '@/components/RoomCard';
import { IoLocationSharp, IoPricetagOutline } from 'react-icons/io5';
import { GiStairs } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';

const Page = async () => {
    const data = await fetch('https://movie-api-get-only-bmc3.vercel.app/api');
    const result = await data.json();

    return (
        <div className={'my-10'}>
            <div className={'container-width flex gap-2  text-2xl font-bold text-black'}>
                <MdFindReplace className={'mb-5'} />
                <h3 className={'mb-5'}>Filter your preferences</h3>
            </div>
            <div className="container-width flex gap-5 py-4">
                <PreferencesComponents text={'Price'} icon={IoPricetagOutline} items={['$50', '$65', '$80']} />
                <PreferencesComponents text={'Location'} icon={IoLocationSharp} items={['Tuek Tla', 'Beng Salang']} />
                <PreferencesComponents text={'Floor'} icon={GiStairs} items={['Floor 1', 'Floors 2', 'Floors 3', 'Floor 4']} />
                <PreferencesComponents text={'Roommate'} icon={FaUsers} items={['One', 'Two', 'Three', 'Forth']} />
            </div>
            <div className="container-width grid grid-cols-3 my-10 gap-5">
                    {result?.payload?.map((movie) => (
                        <RoomCard
                            key={movie.id}
                            movie_id={movie.movie_id}
                            image={movie.image}
                            movie_title={movie.movie_title}
                            description={movie.description}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Page;
