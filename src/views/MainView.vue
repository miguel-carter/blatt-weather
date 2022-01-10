<template>
  <div class="main" v-if="data">
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
import axios from "axios";
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
  mounted() {
    this.searchHandler("New York");
  },
  data() {
    return {
      data: null,
    };
  },
  methods: {
    searchHandler(query) {
      const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
      const OW_API_KEY = "";
      axios
        .get(`${baseURL}${query}&appid=${OW_API_KEY}`)
        .then((res) => {
          const { data } = res;
          this.data = data;
        })
        .catch((err) => {
          console.error(err);
        });
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
  margin-bottom: 15px;
}
</style>
