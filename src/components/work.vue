<template>
  <div
    class="header"
    id="work"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="200"
  >
    <div class="container">
      <div class="row">
        <div class="left col-sm-12 col-md-6 mx-auto ">
          <h3>Fast Delivery</h3>
          <h1><span>Order Now, Recieve Within 30mins </span></h1>
          <p>
            Say goodbye to handling orders on phones or notes manually. Automate
            delivery operations and improve your entire business workflow with
            all in one delivery app
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.amr.qubaadelivery.flutter.up"
            target="_blank"
            rel="noopener noreferrer"
            >download app</a
          >
        </div>
        <div class="right  col-sm-12 col-md-6 mx-auto">
          <img src="@/assets/icons/delivery-img.svg" width="100%" alt="img3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header"
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.header {
  margin-top: 110px;
  .container {
    .row {
      .left {
        margin-top: 90px;
        h3 {
          color: $primary-color;
          font-weight: bold;
          margin-bottom: 10px;
        }
        h1,
        p {
          color: $second-color;
          font-family: "Fira Sans", sans-serif;
          span {
            font-weight: bold;
          }
        }

        p {
          line-height: 2;
          margin: 30px 0px;
        }

        a {
          background-color: $primary-color;
          padding: 15px 20px;
          color: white;
          font-weight: bold;
          text-transform: capitalize;
          text-decoration: none;
          transition: 0.5s ease-in-out;
          &:hover {
            box-shadow: 0px 0px 10px $second-color;
          }
        }
      }
    }
  }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .header {
    margin-top: 30px !important;
    .left {
      width: 90%;
      margin: 30px auto !important;
      h1 {
        font-size: 35px;
      }
    }
    .right {
      width: 90%;
      margin: 20px auto;
    }
  }
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .left {
    margin-top: 20px !important;
    h1 {
      font-size: 25px !important;
    }
    p {
      font-size: 15px !important;
    }
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .left {
    margin-top: 60px !important;
    h1 {
      font-size: 40px !important;
      span {
        font-size: 50px;
      }
    }
  }
}
</style>
