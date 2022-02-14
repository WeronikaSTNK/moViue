import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as fasHeart, faStar, faClock, faClockRotateLeft, faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fasHeart, farHeart, faStar, faClock, faClockRotateLeft, faCameraRetro)

createApp(App).use(router).use(store).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
