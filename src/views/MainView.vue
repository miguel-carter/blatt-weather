<template>
  <div class="main">
    <h2>{{ title }}</h2>
    <SearchBar class="component" @search="searchHandler($event)" />
    <div v-if="data">
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
    </div>

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
  data() {
    return {
      data: null,
      title: "Blatt Weather",
      isToggled: false,
    };
  },
  methods: {
    async searchHandler(query) {
      const { name, location } = query;
      const OW_API_KEY = "018ae4396cd24e7003a1b9a92bad8508";
      try {
        const forecast = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${OW_API_KEY}`
        );
        this.data = forecast.data;
        this.data.name = name;
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
  max-height: 90vh;
  margin: 0 auto;
  padding: 0;
}

.component {
  margin-bottom: 15px;
}
</style>
