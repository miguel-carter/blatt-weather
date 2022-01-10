<template>
  <Card>
    <div class="row" style="padding: 10px">
      <div class="column" style="padding: 10px">
        <WeatherGlance :data="weather" />
      </div>
      <div class="column" style="padding: 10px">
        <WeatherDetails :data="weather" />
      </div>
    </div>
  </Card>
</template>

<script>
import Card from "../Card.vue";
import WeatherGlance from "./WeatherGlance.vue";
import WeatherDetails from "./WeatherDetails.vue";

export default {
  name: "WeatherDisplay",
  components: {
    Card,
    WeatherGlance,
    WeatherDetails,
  },
  props: {
    weather: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      title: "Current Weather",
    };
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
