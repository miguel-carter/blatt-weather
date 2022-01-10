<template>
  <div class="main">
    <h2>Vue Weather</h2>
    <SearchBar class="component" @search="searchHandler($event)" />
    <WeatherDisplay class="component" :weather="data" />
    <WeatherForecast class="component" />
    <p style="text-align: center; font-size: 13px">
      Developed By
      <a href="https://www.linkedin.com/in/miguelcarter/">Miguel Carter</a>
    </p>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar/SearchBar.vue";
import WeatherDisplay from "../components/WeatherDisplay/WeatherDisplay.vue";
import WeatherForecast from "../components/WeatherForecast/WeatherForecast.vue";
export default {
  name: "MainView",
  components: {
    SearchBar,
    WeatherDisplay,
    WeatherForecast,
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
  margin: 0 auto;
  padding: 0;
}

.component {
  margin-bottom: 10px;
}
</style>
