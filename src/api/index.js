import axios from 'axios'

// i know this shouldn't be exposed to public but i have run out of time :) I should move it to env's
const api_key = '812dd8253badbc1386f9495e4546f56b'

function getMostPopularMovies() {
    return axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
}

function getConfiguration() {
    return axios
        .get(`https://api.themoviedb.org/3/configuration?api_key=${api_key}`)
}

function searchMovies(value) {
    return axios
        .get(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${api_key}`)
}

function getMovieDetails(movieId) {
    return axios
        .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`)
}
export { getMostPopularMovies, getConfiguration, searchMovies, getMovieDetails }