<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="img">
            <a class="navbar-brand" href="/"
              ><img
                src="../assets/icons/logo/logo-2.svg"
                class="d-inline-block align-top"
            /></a>
          </div>
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.amr.qubaadelivery.flutter.up"
              target="_blank"
              rel="noopener noreferrer"
              class="app"
            >
              <p>
                <span><i class="fab fa-apple apple"></i></span>Download on
              </p>
              <h5>App Store</h5>
            </a>
          </div>
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.amr.qubaadelivery.flutter.up"
              target="_blank"
              rel="noopener noreferrer"
              class="app"
            >
              <p>
                <span><i class="fab fa-google-play"></i></span>Get it on
              </p>
              <h5>Google Store</h5>
            </a>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <h3>About Us</h3>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <h3>About</h3>
          <ul>
            <li>Partners</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <h3>Support</h3>
          <ul>
            <li>Open Ticket</li>
            <li>Community</li>
            <li>Return Policy</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "last"
};
</script>
<style lang="scss" scoped>
@import "../scss/main.scss";
.footer {
  margin-top: 100px;
  background-color: $second-color;
  padding: 35px 0px;
  .container {
    .row {
      > div {
        .app {
          color: white;
          text-decoration: none;
          margin: 20px 0px;
          display: block;
          background-color: rgba(128, 128, 128, 0.192);
          border: 2px solid white;
          border-radius: 20px;
          text-align: center;
          padding: 10px 0px;
          width: 170px;
          transition: 0.5s ease-in-out;
          p {
            color: gray;
            font-size: 17px !important;
            transition: 0.5s ease-in-out;
            span {
              i {
                color: white;
                padding-right: 10px;
                font-size: 22px !important;
                transition: 0.5s ease-in-out;
              }
              .apple {
                font-size: 28px !important;
              }
            }
          }
          h5 {
            margin-top: 6px;
            transition: 0.5s ease-in-out;
          }
          &:hover {
            box-shadow: 0px 0px 15px $primary-color;
            i,
            h5,
            p {
              color: $primary-color;
            }
          }
        }
        h3 {
          font-weight: bold;
          color: white;
        }
        ul {
          li {
            transition: 0.5s all;
            color: white;
            list-style: none;
            margin: 20px 0px;
            cursor: pointer;
            &:hover {
              color: $primary-color;
            }
          }
        }
      }
    }
  }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .footer {
    .container {
      .row {
        > div {
          .img {
            width: 200px;
            margin: 20px auto;
            img {
              width: 80%;
            }
          }
          text-align: center;
          a.app {
            text-align: center;
            margin: 40px auto;
          }
        }
      }
    }
  }
}
</style>
