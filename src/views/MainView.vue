<template>
  <div class="main">
    <WeatherDisplay :weather="data" />
  </div>
</template>

<script>
import WeatherDisplay from "../components/WeatherDisplay/WeatherDisplay.vue";
export default {
  name: "MainView",
  components: {
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
};
</script>

<style scoped>
.main {
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
}
</style>
