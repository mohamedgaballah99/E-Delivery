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
          <img src="@/assets/icons/about-img.svg" width="100%" alt="img3" />
        </div>
        <div class="right  col-sm-12 col-md-5 mx-auto">
          <h4>About Us</h4>
          <h1>On-time Delivery and Customer Satisfaction</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <h5>
            Rating 4.8
            <span
              ><i class="fas fa-star"></i><i class="fas fa-star"></i
              ><i class="fas fa-star"></i><i class="fas fa-star"></i
              ><i class="fas fa-star"></i
            ></span>
          </h5>

          <div class="statics">
            <div>
              <h2>1M+</h2>
              <h3>Download</h3>
            </div>
            <div class="line"></div>
            <!--  -->
            <div>
              <h2>234K+</h2>
              <h3>Happy User</h3>
            </div>
            <div class="line"></div>
            <!--  -->
            <div>
              <h2>34K+</h2>
              <h3>Reviews</h3>
            </div>
            <!--  -->
          </div>
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
        margin-top: 20px;
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
        .statics {
          background-color: $primary-color;
          color: white;
          padding: 10px 15px;
          display: flex;
          justify-content: space-around;
          > div {
            text-align: center;
            h2 {
              font-weight: bold;
              font-size: 25px;
            }
            h3 {
              font-size: 25px;
            }
          }
          .line {
            background-color: #fff;
            width: 2px;
            height: 60px;
            margin: 5px 10px;
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
    .right,
    .left {
      width: 90%;
      margin: 20px auto;
    }
    .right {
      h1 {
        font-size: 30px;
      }
    }
    .statics {
      width: 100% !important;
      > div {
        h2 {
          font-size: 17px !important;
        }
        h3 {
          font-size: 17px !important;
          margin-top: 5px !important;
        }
      }
      .line {
        height: 35px !important;
      }
    }
  }
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .about {
    margin-top: 50px;

    .right {
      h1 {
        font-size: 22px !important;
        margin: 10px 0px !important;
      }
      p {
        font-size: 14px !important;
      }
      h5 {
        font-size: 14px !important;
      }
    }
    .statics {
      width: 100% !important;
      > div {
        h2 {
          font-size: 14px !important;
        }
        h3 {
          font-size: 14px !important;
          margin-top: 5px !important;
        }
      }
      .line {
        height: 30px !important;
      }
    }
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .about {
    margin-top: 50px;

    .right {
      h1 {
        font-size: 35px !important;
        margin: 20px 0px !important;
      }
      p {
        font-size: 17px !important;
      }
      h5 {
        font-size: 20px !important;
      }
    }
    .statics {
      width: 100% !important;
      > div {
        h2 {
          font-size: 30px !important;
        }
        h3 {
          font-size: 25px !important;
          margin-top: 5px !important;
        }
      }
      .line {
        height: 50px !important;
      }
    }
  }
}
</style>
