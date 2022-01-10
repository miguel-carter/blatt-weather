<template>
  <div class="main" v-if="data">
    <h2>Blatt Weather</h2>
    <SearchBar class="component" @search="searchHandler($event)" />
    <WeatherDisplay
      class="component"
      @toggle="onToggle"
      :current="data"
      :isToggled="isToggled"
    />
    <WeatherForecast
      class="component"
      :forecast="data"
      :isToggled="isToggled"
    />
    <p style="text-align: center; font-size: 13px">
      Developed In Vue By
      <a href="https://www.linkedin.com/in/miguelcarter/">Miguel Carter</a>
      Inspired By
      <a href="https://github.com/esnz/react-weather-app">React Weather</a>
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
      isToggled: false,
    };
  },
  methods: {
    async searchHandler(query) {
      const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
      const OW_API_KEY = "018ae4396cd24e7003a1b9a92bad8508";
      try {
        const current = await axios.get(
          `${baseURL}${query}&appid=${OW_API_KEY}`
        );
        const forecast = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${current.data.coord.lat}&lon=${current.data.coord.lon}&appid=${OW_API_KEY}`
        );
        this.data = forecast.data;
      } catch (error) {
        console.error(error);
      }
    },
    onToggle() {
      this.isToggled = !this.isToggled;
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
