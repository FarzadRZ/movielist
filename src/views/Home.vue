<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <MovieList msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import MovieList from "@/components/MovieList.vue";

export default {
  name: "home",
  components: {
    MovieList
  }
};
</script>

<style scoped lang="scss">
</style>
