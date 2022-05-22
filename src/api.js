import axios from "axios";

let api = "http://localhost:3000/Comic/"

export function getComic(id){
    const result = axios.get(api + id);
    return result;

}