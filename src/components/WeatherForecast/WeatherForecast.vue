<template>
  <Card>
    <div class="row" style="padding: 10px">
      <div class="column" style="padding: 10px"><WeatherForecastItem /></div>
      <div class="column" style="padding: 10px"><WeatherForecastItem /></div>
      <div class="column" style="padding: 10px"><WeatherForecastItem /></div>
      <div class="column" style="padding: 10px"><WeatherForecastItem /></div>
      <div class="column" style="padding: 10px"><WeatherForecastItem /></div>
      <div class="column" style="padding: 10px"><WeatherForecastItem /></div>
      <div class="column" style="padding: 10px"><WeatherForecastItem /></div>
    </div>
  </Card>
</template>

<script>
import Card from "../Card.vue";
import WeatherForecastItem from "./WeatherForecastItem.vue";
export default {
  name: "WeatherForecast",
  components: {
    Card,
    WeatherForecastItem,
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  margin: 0;
}

@media screen and (min-width: 800px) {
  .column {
    flex: 1;
  }
}
</style>
