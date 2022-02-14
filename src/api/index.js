import axios from 'axios'

function getMostPopularMovies() {
    return axios
        .get("https://api.themoviedb.org/3/movie/popular?api_key=812dd8253badbc1386f9495e4546f56b")
}

function getConfiguration() {
    return axios
        .get("https://api.themoviedb.org/3/configuration?api_key=812dd8253badbc1386f9495e4546f56b")
}

function searchMovies(value) {
    return axios
        .get(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=812dd8253badbc1386f9495e4546f56b`)
}

function getMovieDetails(movieId) {
    return axios
        .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=812dd8253badbc1386f9495e4546f56b`)
}
export { getMostPopularMovies, getConfiguration, searchMovies, getMovieDetails }