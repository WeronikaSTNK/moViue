<template>
  <div class="p-5 bg-dark text-white wrapper">
    <header class="header-content w-100 text-center">
      <router-link to="/">Movies</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import { getConfiguration } from './api'

export default {
  created() {
    getConfiguration()
      .then(response => (this.$store.commit('setImageBaseUrl', response.data.images.base_url)));
  },
}
</script>
<style>
.header-content a {
  font-size: 2em;
  text-decoration: none;
  color: #fff;
}
.wrapper {
  width: 100%;
  min-height: 100vh;
}
</style>
