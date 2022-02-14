<template>
    <div class=".container m-2">
        <div class="section-title text-center m-3" v-if="section_name">{{ section_name }}</div>
        <div class="row">
            <Movie v-for="movie in movies" :key="movie.id" :movie="movie" class="col" />
        </div>
    </div>
</template>

<script>
import Movie from "./Movie.vue"
export default {
    props: {
        movies: Array,
        section_name: String
    },
    components: { Movie }
}
</script>

<style>
.section-title {
    font-size: 1.8em;
}
</style>
