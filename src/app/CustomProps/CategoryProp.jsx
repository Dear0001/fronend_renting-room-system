import RoomCard from "@/components/RoomCard";

const CustomLink = ({ movie_id, image, movie_title, description }) => {
    return (
        <RoomCard
            key={movie_id}
            movie_id={movie_id}
            image={image}
            movie_title={movie_title}
            description={description}
        />
    );
};
export default CustomLink;