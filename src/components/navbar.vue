<template>
  <div class="this fixed-top bg-white">
    <div class="container ">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/">
          <img
            src="../assets/icons/logo/logo.svg"
            width="130"
            height="30"
            class="d-inline-block align-top"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item ">
              <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#work"> How It Works </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#test"> Testimonials </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.this {
  box-shadow: 0px 0px 6px 6px rgba(128, 128, 128, 0.432);
  .container {
    padding: 10px 0px;
    .navbar-light .navbar-nav .nav-link {
      color: black;
      display: inline;
      transition: 0.5s ease-in-out;
      background-color: transparent;
      border-radius: 50%;
      &:hover {
        background-color: #e8505a5e;
      }
    }

    nav {
      li {
        margin-right: 20px;
        font-weight: bold;
        margin: 6px 0px;
      }
    }
  }
}
</style>
