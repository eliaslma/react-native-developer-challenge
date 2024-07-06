import axios from "axios";

const genres: { [key: number]: string } = {
    12: 'Adventure',
    14: 'Fantasy',
    16: 'Animation',
    18: 'Drama',
    27: 'Horror',
    28: 'Action',
    35: 'Comedy',
    36: 'History',
    37: 'Western',
    53: 'Thriller',
    80: 'Crime',
    99: 'Documentary',
    878: 'Science Fiction',
    9648: 'Mystery',
    10402: 'Music',
    10749: 'Romance',
    10751: 'Family',
    10752: 'War',
    10770: 'TV Movie',
};

const API_KEY = process.env.EXPO_PUBLIC_MOVIE_API_KEY;

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc`;

const getImagePath = (path: string) => `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

export interface MovieType {
    adult: boolean;
    backdrop_path: string;
    genre_ids: any;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export const getMovies = async () => {

    const response = await axios.get(API_URL);

    if (response.data.results) {

        const movies: MovieType[] = response.data.results;

        movies.forEach(movie => {
            movie.poster_path = getImagePath(movie.poster_path);
            movie.genre_ids = movie.genre_ids.map((genre: any) => genres[genre])
        });

        return movies;
    }

};