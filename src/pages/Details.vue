<template>
    <div class="card bg-dark m-5 p-3 border border-dark">
        <div v-if="loading" class="d-flex align-items-center justify-content-center">
            <Loading />
        </div>
        <div v-if="error" class="d-flex align-items-center justify-content-center">
            <ErrorComponent />
        </div>
        <div v-if="!error && !loading" class="row g-0">
            <div class="col-md-4">
                <img  v-if="!loading" class="img-fluid rounded-start" :src="image_src" alt="Image is missing" />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <p class="fw-light">{{ genres }}</p>
                    <h2 class="card-title mb-3">{{ movie.title }}</h2>
                    <span class="m-3">
                        <font-awesome-icon icon="clock-rotate-left" />
                        {{ movie.runtime }} min
                    </span>
                    <span>
                        <font-awesome-icon icon="camera-retro" />
                        {{ formatted_date }}
                    </span>
                    <p class="card-text mt-5">{{ movie.overview }}</p>
            <div v-if="isFavorite()" @click="removeFromFavorites">
                <font-awesome-icon
                    :icon="['fas', 'heart']"
                    data-bs-toggle="tooltip"
                    class="btn btn-secondary"
                    data-bs-placement="top"
                    title="Remove from favorites"
                />
            </div>
            <div v-else @click="addToFavorites">
                <font-awesome-icon
                    :icon="['far', 'heart']"
                    class="btn btn-secondary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Add to favorites"
                /> </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getMovieDetails } from '../api'
import moment from 'moment'
import Loading from '../components/Loading.vue'
import ErrorComponent from '../components/ErrorComponent.vue'
export default {
  components: { Loading, ErrorComponent},
    data() {
        return {
            movie: null,
            release_date: '',
            loading: false,
            error: false
        }
    },
    created() {
        this.loading = true
        getMovieDetails(this.$route.params.id)
            .then(response => {
                this.movie = response.data
                this.loading = false
            }) .catch(error => {
                console.log('failed to get movie details', error)
                this.error = true
                this.loading = false
            })
    },
    computed: {
        image_src() {
            return this.$store.state.image_base_url + this.$store.state.image_size + this.movie.poster_path
        },
        formatted_date() {
            return moment(this.movie.release_date).format('MMMM Do YYYY');
        },
        genres() {
            return this.movie.genres.map(el => el.name).join(' | ')
        },
        
    },
    methods: {
        isFavorite() {
            return this.$store.getters.isFavorite(this.movie.id)
        },
        addToFavorites() {
            this.$store.commit('addToFavorites', this.movie)
        },
        removeFromFavorites() {
            this.$store.commit('removeFromFavorites', this.movie.id)
        }
    }
}
</script>

<style>
</style>