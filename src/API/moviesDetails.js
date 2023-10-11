import { GetRequest } from "../plugins/http"

export const APIMoviesDetails =(id)=>{
    return GetRequest('movie_details.json?movie_id='+id);
}

export const APIMoviesDetailsSuggestions =(id)=>{
    return GetRequest('movie_suggestions.json?movie_id='+id);
}
