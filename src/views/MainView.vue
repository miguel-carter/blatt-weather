<template>
  <div class="main">
    <SearchBar @search="searchHandler($event)" />
    <WeatherDisplay :weather="data" />
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar/SearchBar.vue";
import WeatherDisplay from "../components/WeatherDisplay/WeatherDisplay.vue";
export default {
  name: "MainView",
  components: {
    SearchBar,
    WeatherDisplay,
  },
  data() {
    return {
      data: {
        city: "Searcy",
        temp: 32,
        description: "overcast clouds",
        feelsLike: 13,
        high: 10,
        low: 4,
        humidity: 53,
        wind: 23,
        pressure: 12,
      },
    };
  },
  methods: {
    searchHandler(query) {
      console.log(query);
    },
  },
};
</script>

<style scoped>
.main {
  width: 80%;
  max-width: 900px;
  padding: 0;
  margin: 0 auto;
}
</style>
