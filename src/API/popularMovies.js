import { GetRequest } from "../plugins/http"

export const APIPopularMovies =()=>{
    // return GetRequest('movie_suggestions.json');
    return GetRequest('like_movie.json');
}