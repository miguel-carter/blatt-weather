<template>
  <Card>
    <div class="row" style="padding: 20px 10px 10px">
      <div class="column">
        <span>Extended Forecast</span>
      </div>
      <div class="column"></div>
    </div>
    <div class="row" style="padding-bottom: 20px">
      <div class="column" v-for="(item, index) in forecast.daily" :key="index">
        <WeatherForecastItem
          :data="item"
          :conversionType="isToggled ? 'c' : 'f'"
        />
      </div>
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
  props: {
    forecast: {
      type: Object,
      required: true,
    },
    isToggled: {
      type: Boolean,
      required: true,
      default: false,
    },
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
  padding: 10px 0;
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
