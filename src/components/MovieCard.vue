<template>
  <sequential-entrance>
    <div class="movie-card">
      <sequential-entrance>
        <div class="movie-card-photo">
          <img class="movie-card-photo-image" :src="movie.posterurl" />
        </div>
      </sequential-entrance>
      <h1 class="movie-card-title">{{ movie.originalTitle }}</h1>
      <div class="movie-card-info">
        <span class="movie-card-info-part">{{ movie.year }}</span>
        <span class="movie-card-info-part">
          <span
            class="movie-card-info-part-genre"
            v-for="genre in movie.genres"
            v-bind:key="genre"
          >{{ genre }}</span>
        </span>
        <span class="movie-card-info-part">{{ movieDuration() }}</span>
      </div>
      <span class="movie-card-rate">
        <strong class="movie-card-rate-number">
          <number
            ref="number1"
            :from="0"
            :to="movie.imdbRating"
            :format="theFormat"
            :duration="5"
            :delay="1"
            easing="Power1.easeOut"
          />
        </strong>/10
      </span>
      <div class="movie-card-bar">
        <div class="movie-card-bar-line" :style="{ width: barWidthPercentage() + '%' }"></div>
      </div>
      <sequential-entrance fromBottom>
        <router-link
          class="movie-card-btn"
          :to="{ name: 'details', params: { id: movie.id }}"
          :movie="movie"
        >movie details</router-link>
      </sequential-entrance>
    </div>
  </sequential-entrance>
</template>

<script>
export default {
  props: {
    movie: { type: Object }
  },
  methods: {
    barWidthPercentage() {
      return this.movie.imdbRating * 10;
    },
    theFormat(number) {
      return number.toFixed(1);
    },
    completed() {},
    playAnimation() {
      this.$refs.number2.play();
    },
    movieDuration() {
      let hours = (this.movie.duration.match(/\d+/g) / 60).toFixed(2);
      let minutes = this.movie.duration.match(/\d+/g) % 60;
      return hours.split(".")[0] + "h " + minutes + "min";
    }
  }
};
</script>

<style lang="scss" scoped>
.movie-card {
  text-align: center;
  padding: 30px 31px 0;
  animation-delay: 1000ms;
  animation-duration: 2s;
  margin-bottom: 20px;

  &-photo {
    max-width: 300px;
    width: 100%;
    height: 350px;
    margin: 0 auto;
    animation-duration: 3s;

    @media (max-width: 374px) {
      max-width: 200px;
      height: 270px;
    }

    &-image {
      max-width: 100%;
      max-height: 100%;
      border-radius: 7px;
    }
  }

  &-title {
    font-size: 30px;
    padding: 20px 0 10px;
    height: 100px;

    @media (min-width: 413px) {
      font-size: 35px;
    }

    @media (max-width: 374px) {
      font-size: 25px;
      height: 80px;
      padding: 15px 0 5px;
    }
  }

  &-info {
    @media (min-width: 413px) {
      font-size: 17px;
      padding: 10px 0;
    }

    @media (max-width: 374px) {
      font-size: 13px;
    }

    &-part {
      color: #5d5d5d;

      &:after {
        content: " . ";
        position: relative;
        top: -4px;
      }

      &:last-child:after {
        display: none;
      }

      &-genre {
        &:after {
          content: ", ";
          position: relative;
        }

        &:last-child:after {
          display: none;
        }
      }
    }
  }

  &-rate {
    font-size: 20px;
    display: block;
    margin: 15px 0;

    @media (min-width: 413px) {
      font-size: 25px;
    }

    @media (max-width: 374px) {
      margin: 10px 0;
    }

    &-number {
      font-size: 28px;

      @media (min-width: 413px) {
        font-size: 35px;
      }
    }
  }

  &-bar {
    width: 68%;
    height: 6px;
    background: #ccc;
    position: relative;
    margin: 0 auto 20px;
    border-radius: 35px;

    @media (min-width: 413px) {
      width: 80%;
    }

    &-line {
      background: #ff6000;
      height: 6px;
      position: absolute;
      top: 0;
      left: 0;
      border-top-left-radius: 35px;
      border-bottom-left-radius: 35px;
      animation: progress 6s;
    }
  }

  &-btn {
    background: #ff6000;
    color: #fff;
    text-transform: uppercase;
    font-size: 19px;
    padding: 15px 0;
    width: 80%;
    display: block;
    border-radius: 10px;
    border: none;
    outline: none;
    margin: 0 auto;
    position: relative;
    text-decoration: none;
    animation-duration: 4s;

    @media (min-width: 413px) {
      font-size: 20px;
      width: 82%;
    }

    @media (max-width: 374px) {
      width: 70%;
    }
  }
}

@keyframes progress {
  0% {
    width: 0;
  }

  100% {
    width: barWidthPercentage() + "%";
  }
}
</style>