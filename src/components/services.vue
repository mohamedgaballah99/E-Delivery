<template>
  <div
    class="services"
    id="services"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="200"
  >
    <div class="container">
      <div class="text">
        <h5>Delivery Services</h5>
        <h1>All Essentials You Need</h1>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4">
          <img src="@/assets/icons/services/service-icon-1.svg" alt="img3" />
          <h4>Food</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt.
          </p>
        </div>
        <!--  -->
        <div class="col-sm-12 col-md-6 col-lg-4">
          <img src="@/assets/icons/services/service-icon-2.svg" alt="img3" />
          <h4>Grocery</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt.
          </p>
        </div>
        <!--  -->
        <div class="col-sm-12 col-md-6 col-lg-4">
          <img src="@/assets/icons/services/service-icon-3.svg" alt="img3" />
          <h4>Furniture</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt.
          </p>
        </div>
        <!--  -->
        <div class="col-sm-12 col-md-6 col-lg-4">
          <img src="@/assets/icons/services/service-icon-4.svg" alt="img3" />
          <h4>Medicine</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt.
          </p>
        </div>
        <!--  -->
        <div class="col-sm-12 col-md-6 col-lg-4">
          <img src="@/assets/icons/services/service-icon-5.svg" alt="img3" />
          <h4>Electronics</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt.
          </p>
        </div>
        <!--  -->
        <div class="col-sm-12 col-md-6 col-lg-4">
          <img
            src="@/assets/icons/services/service-icon-6.svg"
            alt="img3"
            style="padding-left:40px"
          />
          <h4>Clothes</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt.
          </p>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "services"
};
</script>
<style lang="scss" scoped>
@import "../scss/main.scss";
.services {
  margin-top: 80px;
  .container {
    .text {
      text-align: center;
      margin-bottom: 20px;
      h5 {
        color: $primary-color;
        font-weight: bold;
        margin-bottom: 20px;
      }
      h1 {
        color: $second-color;
        font-weight: bold;
      }
    }
    .row {
      > div {
        margin: 30px 0px;
        text-align: center;
        transition: 0.5s ease-in-out;
        padding: 10px;

        h4 {
          margin: 15px 0px;
          font-weight: bold;
        }
        p {
          line-height: 1.8;
        }
        &:hover {
          box-shadow: 0px 2px 10px 3px gray;
          cursor: pointer;
        }
      }
    }
  }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .text {
    h1 {
      font-size: 30px !important;
    }
  }
  .row {
    > div {
      width: 90%;
      margin: 30px auto !important;
    }
  }
}
</style>
