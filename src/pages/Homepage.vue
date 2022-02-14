<template>
    <Searchbox v-model="searchtext" />
    <Movies v-if="searchtext && !loading" :section_name="'Matching movies'" :movies="searched_movies" />
    <Movies
        v-else-if="favorites_movies.length > 0"
        :section_name="'Favorites'"
        :movies="favorites_movies"
    />
    <Movies v-if="!searchtext && !loading" :section_name="'Most popular'" :movies="popular_movies" />
    <ErrorComponent v-if="error" />
</template>

<script>
import Movies from '../components/Movies.vue'
import Searchbox from '../components/Searchbox.vue';
import { getMostPopularMovies, searchMovies } from '../api'
import ErrorComponent from '../components/ErrorComponent.vue'

export default {
    data() {
        return {
            loading: false,
            popular_movies: null,
            searched_movies: null,
            searchtext: null,
            error: false
        };
    },
    watch: {
        searchtext(value) {
            if (value) {
                this.loading = true
                searchMovies(value)
                    .then(response => {
                        this.searched_movies = response.data.results
                        this.loading = false 
                    })
                    .catch(error => {
                        console.log('failed to get searched movies', error)
                        this.error = true
                        this.loading = false 
                    })
            }
        }
    },
    created() {
        this.loading = true
        getMostPopularMovies()
            .then(response => {
                this.popular_movies = response.data.results
                this.loading = false
            })
            .catch(error => {
                console.log('failed to get popular movies', error)
                this.error = true
                this.loading = false
            })
    },
    computed: {
        favorites_movies() {
            return this.$store.state.favorites
        }
    },
    components: { Movies, Searchbox, ErrorComponent }
}
</script>

<style>
</style>
