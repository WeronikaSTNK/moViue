import { createApp } from 'vue'
import App from './App.vue'
// router - move to separate file
import {
  createWebHashHistory,
  createRouter
} from "vue-router";
import Homepage from './pages/Homepage.vue'
import Details from './pages/Details.vue'

const routes = [
  { path: '/', component: Homepage },
  { path: '/details/:id', component: Details },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// store
import { createStore } from 'vuex'

const store = createStore({
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

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as fasHeart, faStar, faClock, faClockRotateLeft, faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fasHeart, farHeart, faStar, faClock, faClockRotateLeft, faCameraRetro)

createApp(App).use(router).use(store).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
