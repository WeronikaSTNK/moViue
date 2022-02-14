import { createWebHashHistory, createRouter } from "vue-router";
import Homepage from '../pages/Homepage.vue'
import Details from '../pages/Details.vue'

const routes = [
    { path: '/', component: Homepage },
    { path: '/details/:id', component: Details },
]
export default createRouter({
    history: createWebHashHistory(),
    routes
})