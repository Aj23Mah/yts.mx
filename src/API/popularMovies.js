import { GetRequest } from "../plugins/http"

export const APIPopularMovies =()=>{
    return GetRequest('like_movie.json');
}