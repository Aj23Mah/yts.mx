import { GetRequest } from "../plugins/http"

export const APILoadMovies =()=>{
    return GetRequest('list_movies.json');
}