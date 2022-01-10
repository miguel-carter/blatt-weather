<template>
  <div id="app">
    <MainView />
  </div>
</template>

<script>
import MainView from "./views/MainView.vue";

export default {
  name: "App",
  components: {
    MainView,
  },
};
</script>

<style>
#app {
  font-family: Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  border: none;
  overflow: hidden;
}
body {
  background-size: center 120%;
  background-repeat: auto no-repeat;
  background-image: url("~@/assets/clouds.svg"),
    linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%);
}
</style>
