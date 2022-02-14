import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      favorites: [],
      image_base_url: null,
      image_size: 'w342'
    }
  },
  mutations: {
    addToFavorites(state, movie) {
      if (state.favorites.some(movie => movie.id === movie.Id)) {
        return
      }
      state.favorites.push(movie)
    },
    removeFromFavorites(state, movieId) {
      state.favorites = state.favorites.filter(movie => movie.id !== movieId);
    },

    setImageBaseUrl(state, value) {
      state.image_base_url = value
    }
  },
  getters: {
    isFavorite: (state) => (movieId) => {
      return state.favorites.some(movie => movie.id === movieId)
    }
  }
})