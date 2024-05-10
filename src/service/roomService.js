export async function getAllMovies() {
    const request = await fetch('https://movie-api-get-only-bmc3.vercel.app/api', {
        cache: 'no-store',
    });
    return await request.json();
}

export const getMovieById = async (id) => {
    const request = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`, {
        cache: 'no-store',
    });
    return await request.json();
}

export async function getAllMoviesByGenre(genre) {
    const request = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`, {
        cache: 'no-store',
    });
    return await request.json();
}

export const viewDetails = async (slug) => {

    const request = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${slug}`, {
        cache: 'no-store',
    });
    return await request.json();
}