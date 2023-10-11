import { GetRequest } from "../plugins/http"

export const APIUpcomingMovies =()=>{
    // return GetRequest('ListUpcoming.json');
    return GetRequest('list_upcoming.json');
}