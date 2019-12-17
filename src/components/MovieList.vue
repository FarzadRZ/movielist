<template>
  <div class="list">
    <carousel :items="1" :loop="false" :nav="false" :dots="false">
      <MovieCard v-for="movie in movies" v-bind:key="movie.id" v-bind:movie="movie" />
    </carousel>
  </div>
</template>

<script>
import MovieCard from "./MovieCard";
import carousel from "vue-owl-carousel";

export default {
  name: "MovieList",
  data() {
    return {
      movies: [
        {
          id: "0001",
          year: "1994",
          genres: ["Crime", "Drama"],
          duration: "PT142M",
          originalTitle: "The Shawshank Redemption",
          imdbRating: 9.3,
          posterurl:
            "http://isleofcinema.com/wp-content/uploads/2010/08/shawshankredemption1.jpg"
        },
        {
          id: "0002",
          year: "1972",
          genres: ["Crime", "Drama"],
          duration: "PT175M",
          originalTitle: "The Godfather",
          imdbRating: 9.2,
          posterurl:
            "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg"
        },
        {
          id: "0003",
          year: "2008",
          genres: ["Action", "Crime", "Drama"],
          duration: "PT152M",
          originalTitle: "The Dark Knight",
          imdbRating: 5.0,
          posterurl: "https://miro.medium.com/max/625/0*61G-CzFH3-ghyEq7.jpg"
        }
      ]
    };
  },
  mounted() {
    // fetch("./static/movielist.json")
    //   .then(resp => resp.json())
    //   .then(json => {
    //     this.movies = json;
    //   });
  },
  components: {
    MovieCard,
    carousel
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list {
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(255, 96, 0, 1) 0%,
    rgba(255, 96, 0, 1) 12%,
    rgba(255, 255, 255, 1) 48%
  );
}
</style>
