<template>
  <div id="app">
    <div class="top">
      <span><i class="fas fa-chevron-up"></i></span>
    </div>
    <navbar></navbar>
    <home></home>
    <services></services>
    <about></about>
    <work></work>
    <contactless></contactless>
    <tesmonials></tesmonials>
    <last></last>
    <div class="loading">
      <div class="spinner"></div>
    </div>
  </div>
</template>
<script>
import navbar from "@/components/navbar.vue";
import home from "@/components/home.vue";
import services from "@/components/services.vue";
import about from "@/components/about.vue";
import work from "@/components/work.vue";
import contactless from "@/components/contactless.vue";
import tesmonials from "@/components/testmonials.vue";
import last from "@/components/last.vue";
export default {
  name: "App",
  components: {
    navbar,
    home,
    services,
    about,
    work,
    contactless,
    tesmonials,
    last
  }
};
</script>
<style lang="scss">
@import "./scss/main.scss";
#app {
  font-family: "Fira Sans", sans-serif;
  overflow-x: hidden;
}

#nav {
  padding: 0px;
}
.loading {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  background-color: $primary-color;
  z-index: 999999;
}
.spinner {
  position: absolute;
  top: 30%;
  left: 46%;
  // transform: translate(-50%,-50%);
  width: 70px;
  height: 70px;
  background-color: white;

  margin: 100px auto;
  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
  animation: sk-rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes sk-rotateplane {
  0% {
    -webkit-transform: perspective(120px);
  }
  50% {
    -webkit-transform: perspective(120px) rotateY(180deg);
  }
  100% {
    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
  }
}

@keyframes sk-rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
.top {
  position: fixed;
  top: 90%;
  z-index: 22;
  right: 30px;
  visibility: hidden;
  cursor: pointer;
  span {
    i {
      color: #ffffff;
      padding: 15px;
      border-radius: 10px;
      background-color: $primary-color;
    }
  }
}
</style>
