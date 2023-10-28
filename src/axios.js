//Axios is a part of JS that helps in calling APIs and hence deals with backend
import axios from "axios";

const  instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;