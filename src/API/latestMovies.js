import { GetRequest } from "../plugins/http"

export const APIUpcomingMovies =()=>{
    return GetRequest('list_upcoming.json');
}