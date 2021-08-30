<template>
  <div class="tesmonials" id="test">
    <div class="container">
      <h4>Testimonials</h4>
      <h1>What Our Users Says</h1>
      <div>
        <VueSlickCarousel :arrows="true" :dots="true">
          <div>
            <div class="icons">
              <span
                ><i class="fas fa-star"></i><i class="fas fa-star"></i
                ><i class="fas fa-star"></i><i class="fas fa-star"></i
                ><i class="fas fa-star"></i
              ></span>
            </div>
            <p>
              “A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.”
            </p>
            <div class="img">
              <img src="../assets/icons/testmonials/1.jpg" />
            </div>
          </div>
          <div>
            <div class="icons">
              <span
                ><i class="fas fa-star"></i><i class="fas fa-star"></i
                ><i class="fas fa-star"></i><i class="fas fa-star"></i
                ><i class="fas fa-star"></i
              ></span>
            </div>
            <p>
              “The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli,
              but the Little Blind Text didn’t listen. She packed her seven
              versalia, put her initial into the belt and made herself on the
              way.”
            </p>
            <div class="img">
              <img src="../assets/icons/testmonials/2.jpg" />
            </div>
          </div>
          <div>
            <div class="icons">
              <span
                ><i class="fas fa-star"></i><i class="fas fa-star"></i
                ><i class="fas fa-star"></i><i class="fas fa-star"></i
                ><i class="fas fa-star"></i
              ></span>
            </div>
            <p>
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </p>
            <div class="img">
              <img src="../assets/icons/testmonials/3.jpg" />
            </div>
          </div>
          <div>
            <div class="icons">
              <span
                ><i class="fas fa-star"></i><i class="fas fa-star"></i
                ><i class="fas fa-star"></i><i class="fas fa-star"></i
                ><i class="fas fa-star"></i
              ></span>
            </div>
            <p>
              “Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.”
            </p>
            <div class="img">
              <img src="../assets/icons/testmonials/4.jpg" />
            </div>
          </div>
          <div>
            <div class="icons">
              <span
                ><i class="fas fa-star"></i><i class="fas fa-star"></i
                ><i class="fas fa-star"></i><i class="fas fa-star"></i
                ><i class="fas fa-star"></i
              ></span>
            </div>
            <p>
              “Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.”
            </p>
            <div class="img">
              <img src="../assets/icons/testmonials/5.jpg" />
            </div>
          </div>
          <div>
            <div class="icons">
              <span
                ><i class="fas fa-star"></i><i class="fas fa-star"></i
                ><i class="fas fa-star"></i><i class="fas fa-star"></i
                ><i class="fas fa-star"></i
              ></span>
            </div>
            <p>
              “Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.”
            </p>
            <div class="img">
              <img src="../assets/icons/testmonials/6.jpg" />
            </div>
          </div>
        </VueSlickCarousel>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-3">
          <img src="../assets/icons/partner/partner-1.svg" />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <img src="../assets/icons/partner/partner-2.svg" />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <img src="../assets/icons/partner/partner-4.svg" />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <img src="../assets/icons/partner/partner-3.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "tesmonials",
  components: {
    VueSlickCarousel
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.tesmonials {
  margin-top: 100px;
  .container {
    h4 {
      color: $primary-color;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
    }
    h1 {
      color: $second-color;
      font-weight: bold;
      text-align: center;
      margin-bottom: 60px;
    }
    .icons {
      span {
        i {
          color: #e96a20;
          margin: 0px 5px;
        }
      }
    }
    > div {
      text-align: center;
      p {
        line-height: 2;
        padding: 30px;
      }

      .img {
        width: 150px;
        height: auto;
        margin: auto;

        img {
          width: 100%;
          border-radius: 10%;
        }
      }
    }
    .row {
      margin-top: 90px;
      > div {
        img {
          opacity: 0.6;
          transition: 0.5s ease-in-out;
          cursor: pointer;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  h1 {
    font-size: 30px;
  }
}
</style>
