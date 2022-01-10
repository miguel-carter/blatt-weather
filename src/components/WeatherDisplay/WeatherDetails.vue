<template>
  <div class="wrapper" style="text-align: left">
    <p class="description">Feels like {{ feels_like }}</p>
    <p class="detail">high {{ max }} low {{ low }}</p>
    <p class="detail">humidity {{ data.main.humidity }}%</p>
    <p class="detail">wind {{ data.wind.speed }} kph</p>
    <p class="detail">pressure {{ data.main.pressure }} hPa</p>
  </div>
</template>

<script>
import conversion from "../../helpers/conversion";

export default {
  name: "WeatherDetails",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    feels_like() {
      return conversion("f", this.data.main.feels_like);
    },
    max() {
      return conversion("f", this.data.main.temp_max);
    },
    low() {
      return conversion("f", this.data.main.temp_min);
    },
  },
};
</script>

<style scoped>
.wrapper > * {
  padding: 0;
  margin: 0;
  width: 50%;
  margin: 0 auto;
}

.description {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.detail {
  font-size: 1rem;
  margin-bottom: 5px;
}
</style>
