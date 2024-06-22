import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"

// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGY4MTZlODg4MGJlZTMwOWEzNjQwOGQwMDc5ZDIyYyIsInN1YiI6IjY2NjQyN2NmNTJmNWE3NjkxYjkxNzY3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bNAmd9ieuKk5fsgWGxoOQcGp-DWLN0oYUPzgjrfnklY"

const headers = {
    Authorization: "bearer " +
        TMDB_TOKEN,
}

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, { headers, params });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

