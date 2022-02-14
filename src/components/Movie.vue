<template>
    <div class="container d-flex flex-column justify-content-center align-items-center mt-3 mb-3">
        <router-link :to="'/details/' + movie.id">
            <div class="movie-title pb-2 text-center">
                <span>{{ movie.title }}</span>
            </div>
            <img v-if="movie.poster_path" :src="image_src" :alt="movie.title" class="rounded" />
            <div v-else>Movie poster is missing..</div>
        </router-link>
        <div class="d-flex justify-content-between w-100 mt-3">
            <div>
                <font-awesome-icon icon="star" />
                <span>{{ movie.vote_average }}</span>
            </div>
            <!-- TODO: move to seperate and reusable component (for example: FavoritesButton ) -->
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
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: Object,
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
    },
    computed: {
        image_src() {
            return this.$store.state.image_base_url + this.$store.state.image_size + this.movie.poster_path
        }
    }
}
</script>

<style>
a {
    text-decoration: none;
}
.movie-title {
    color: #fff;
    font-size: 1.3em;
}
</style>
