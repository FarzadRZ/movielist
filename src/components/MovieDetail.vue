<template>
  <div class="movie">
    <sequential-entrance>
      <div class="movie-detail">
        <sequential-entrance>
          <div class="movie-detail-photo">
            <img :src="details[id].posterurl" class="movie-detail-photo-image" />
            <div
              class="movie-detail-photo-btn"
              v-bind:class="[isActive ? 'movie-detail-photo-orange' : 'movie-detail-photo-red']"
            >
              <span class="movie-detail-photo-btn-plus">{{ inWatchlist ? '-' : '+' }}</span>
            </div>
          </div>
        </sequential-entrance>
        <div class="movie-detail-rate">
          <h2 class="movie-detail-rate-title">{{details[id].originalTitle}}</h2>
          <div class="movie-detail-rate-box">
            <span class="movie-detail-rate-box-number">
              <number
                ref="number1"
                :from="0"
                :to="details[id].imdbRating"
                :format="theFormat"
                :duration="5"
                :delay="1"
                easing="Power1.easeOut"
              />
            </span>
          </div>
          <div class="movie-detail-rate-bar">
            <div class="movie-detail-rate-bar-line" :style="{ width: barWidthPercentage() + '%' }"></div>
          </div>
        </div>
        <div class="movie-detail-info">
          <span class="movie-detail-info-part">{{details[id].year}}</span>
          <span class="movie-detail-info-part">
            <span
              class="movie-detail-info-part-genre"
              v-for="genre in details[id].genres"
              v-bind:key="genre"
            >{{genre}}</span>
          </span>
          <span class="movie-detail-info-part">{{ movieDuration() }}</span>
        </div>
        <p class="movie-detail-text">{{details[id].storyline}}</p>
        <div class="movie-detail-members">
          <span
            class="movie-detail-members-describe"
            v-for="director in details[id].directors"
            v-bind:key="director"
          >
            <strong class="movie-detail-members-describe-title">Director: &nbsp;</strong>
            {{director}}
          </span>
          <span class="movie-detail-members-describe">
            <strong
              class="movie-detail-members-describe-title"
              style="padding-right: 4px;"
            >Writers: &nbsp;</strong>
            <span
              class="movie-detail-members-describe-afters"
              v-for="writer in details[id].writers"
              v-bind:key="writer"
            >{{writer}}</span>
          </span>
          <span class="movie-detail-members-describe">
            <strong
              class="movie-detail-members-describe-title"
              style="padding-right: 14px;"
            >Stars: &nbsp;</strong>
            <span
              class="movie-detail-members-describe-actore"
              v-for="(actor, index) in details[id].actors"
              v-bind:key="actor"
            >
              <span v-if="index < 3">{{actor}}</span>
              <span
                v-else
                v-show="showMore"
                v-bind:class="showMore ? 'show-after-dot' : 'hide-after-dot'"
              >{{ actor }}</span>
            </span>
            <span
              class="show-more-btn"
              v-show="showMoreButton"
              v-on:click="showMore = !showMore"
            >{{ showMore ? 'Show Less' : 'Show More' }}</span>
          </span>
        </div>
        <sequential-entrance fromBottom>
          <button
            class="movie-detail-btn"
            v-bind:class="[isActive ? 'movie-detail-orange' : 'movie-detail-red']"
            v-on:click="inWatchlist = !inWatchlist , isActive = !isActive , showNotification = !showNotification"
          >{{ inWatchlist ? '- remove from watchlist' : '+ add to watchlist' }}</button>
        </sequential-entrance>
      </div>
    </sequential-entrance>
  </div>
</template>

<script>
export default {
  name: "MovieDetail",
  methods: {
    barWidthPercentage() {
      return this.details[this.id].imdbRating * 10;
    },
    theFormat(number) {
      return number.toFixed(1);
    },
    movieDuration() {
      let hours = (this.details[this.id].duration.match(/\d+/g) / 60).toFixed(
        2
      );
      let minutes = this.details[this.id].duration.match(/\d+/g) % 60;
      return hours.split(".")[0] + "h " + minutes + "min";
    }
  },
  props: {
    id: { type: String }
  },
  mounted() {
    if (this.details[this.id].actors.length > 3) {
      this.showMoreButton = true;
    }
  },
  data() {
    return {
      isActive: true,
      showMore: false,
      showMoreButton: false,
      showNotification: false,
      details: {
        "0001": {
          id: "0001",
          year: "1994",
          genres: ["Crime", "Drama"],
          duration: "PT142M",
          originalTitle: "The Shawshank Redemption",
          imdbRating: 9.3,
          actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "Bob Gunon"],
          writers: ["Stephen King"],
          directors: ["Frank Darabont"],
          storyline:
            "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.",
          posterurl:
            "http://isleofcinema.com/wp-content/uploads/2010/08/shawshankredemption1.jpg"
        },
        "0002": {
          id: "0002",
          year: "1972",
          genres: ["Crime", "Drama"],
          duration: "PT175M",
          originalTitle: "The Godfather",
          imdbRating: 9.2,
          actors: [
            "Marlon Brando",
            "Al Pacino",
            "James Caan",
            "Marlo Brando",
            "Al Paino",
            "Jame Caan"
          ],
          writers: ["Mario Puzo", "Francis Ford Coppola"],
          directors: ["Francis Ford Coppola"],
          storyline:
            "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.                Written by\nJ. S. Golden",
          posterurl:
            "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg"
        },
        "0003": {
          id: "0003",
          year: "2008",
          genres: ["Action", "Crime", "Drama"],
          duration: "PT152M",
          originalTitle: "The Dark Knight",
          imdbRating: 5.0,
          directors: ["Christopher Nolan"],
          writers: ["Jonathan Nolan", "Christopher Nolan"],
          storyline:
            'Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman\'s struggle against the Joker becomes deeply personal, forcing him to "confront everything he believes" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.                Written by\nLeon Lombardi',
          actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
          posterurl: "https://miro.medium.com/max/625/0*61G-CzFH3-ghyEq7.jpg"
        }
      },
      inWatchlist: false
    };
  }
};
</script>

<style scoped lang="scss">
.movie {
  background: linear-gradient(
    180deg,
    rgba(255, 96, 0, 1) 0%,
    rgba(255, 96, 0, 1) 7%,
    rgba(255, 255, 255, 1) 28%
  );

  @media (max-width: 374px) {
    background: linear-gradient(
      180deg,
      rgba(255, 96, 0, 1) 0%,
      rgba(255, 96, 0, 1) 7%,
      rgba(255, 255, 255, 1) 22%
    );
  }

  &-detail {
    padding: 20px 20px 0;
    animation-delay: 1000ms;
    animation-duration: 2s;

    &-photo {
      width: 175px;
      height: 220px;
      position: relative;
      animation-delay: 100ms;
      animation-duration: 3s;

      @media (max-width: 374px) {
        width: 130px;
        height: 160px;
      }

      &-image {
        width: 100%;
        height: 100%;
        border-radius: 7px;
      }

      &-btn {
        font-size: 35px;
        color: #fff;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        text-align: center;
        position: absolute;
        bottom: -16px;
        right: -16px;
        transition: all 500ms;

        @media (max-width: 374px) {
          font-size: 25px;
          width: 25px;
          height: 25px;
          bottom: -10px;
          right: -10px;
        }

        &-plus {
          position: absolute;
          top: -3px;
          left: 8px;
          width: 55%;

          @media (max-width: 374px) {
            left: 6px;
          }
        }
      }

      &-orange {
        background: #ff6000;
      }

      &-red {
        background: #f2453b;
      }
    }

    &-rate {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 20px 0 0;

      @media (max-width: 374px) {
        margin: 15px 0 0;
      }

      &-title {
        font-size: 23px;
        width: 50%;

        @media (max-width: 374px) {
          font-size: 19px;
        }
      }

      &-box {
        color: #ff6000;
        border: 1px solid #ff6000;
        border-radius: 7px;
        padding: 2px 6px;
        height: 100%;
        font-weight: bold;
        margin-right: 14px;

        &-number {
          font-size: 14px;
        }
      }

      &-bar {
        width: 35%;
        height: 6px;
        background: #ccc;
        position: relative;
        border-radius: 35px;

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
    }

    &-info {
      font-size: 13px;

      @media (max-width: 374px) {
        font-size: 12px;
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

    &-text {
      font-size: 14px;
      padding: 10px 0;
      border-bottom: 1px solid #a4a4a4;
      line-height: 21px;

      @media (max-width: 374px) {
        font-size: 12px;
        line-height: 19px;
        padding: 8px 0;
      }
    }

    &-members {
      margin: 15px 0 10px;

      &-describe {
        color: #ff6000;
        font-size: 13px;
        display: block;
        padding: 2px 0;

        &-title {
          color: #000;
          font-size: 12px;
        }

        .show-more-btn {
          color: #000;
          margin-left: 5px;
        }
        &-actore {
          span {
            &::after {
              content: ", ";
              color: #000;
              position: relative;
            }
          }
          &:last-child span::after {
            content: " ";
          }

          span.hide-after-dot::after {
            content: " ";
          }

          span.show-after-dot::after {
            content: ", ";
          }
        }
      }
    }

    &-btn {
      color: #fff;
      text-transform: uppercase;
      font-size: 18px;
      padding: 15px 0;
      border-radius: 10px;
      width: 80%;
      display: block;
      margin: 0 auto 20px;
      border: none;
      outline: none;
      position: relative;
      text-decoration: none;
      transition: all 500ms;
      animation-duration: 4s;

      @media (max-width: 374px) {
        font-size: 15px;
        width: 75%;
      }
    }

    &-orange {
      background: #ff6000;
    }

    &-red {
      background: #f2453b;
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