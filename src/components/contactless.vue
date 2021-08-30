<template>
  <div
    class="about"
    id="about"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="200"
  >
    <div class="container">
      <div class="row">
        <div class="left col-sm-12 col-md-6 mx-auto ">
          <img src="@/assets/icons/received-img.svg" width="100%" alt="img3" />
        </div>
        <div class="right  col-sm-12 col-md-5 mx-auto">
          <h4>Contactless Delivery</h4>
          <h1>On-time Delivery to Your Doorstep</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about"
};
</script>
<style lang="scss" scoped>
@import "../scss/main.scss";
.about {
  margin-top: 100px;
  .container {
    .row {
      .right {
        margin-top: 90px;
        h4 {
          color: $primary-color;
          font-weight: bold;
        }
        h1 {
          font-weight: bold;
          margin: 25px 0px;
        }
        p {
          color: $second-color;
          line-height: 1.8;
        }
        h5 {
          font-weight: bold;
          margin: 20px 0px;
          span {
            i {
              color: #e96a20;
              padding: 0px 3px;
            }
          }
        }
      }
    }
  }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .about {
    margin-top: 50px;
    .left {
      width: 90%;
      margin: 20px auto 0px auto;
    }
    .right {
      width: 90%;
      margin: 0px auto;
    }
    .right {
      h1 {
        font-size: 30px;
      }
    }
  }
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .about {
    .right {
      margin-top: 20px !important;
      h1 {
        font-size: 30px !important;
      }
    }
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .about {
    .right {
      margin-top: 100px !important;
      h1 {
        font-size: 40px !important;
      }
    }
  }
}
</style>
