<template>
  <div class="wrapper" style="text-align: left">
    <p class="description">Feels like {{ data.feelsLike }}</p>
    <p class="detail">high {{ data.high }} low {{ data.low }}</p>
    <p class="detail">humidity {{ data.humidity }}%</p>
    <p class="detail">wind {{ data.wind }}kph</p>
    <p class="detail">pressure {{ data.pressure }}hPa</p>
  </div>
</template>

<script>
export default {
  name: "WeatherDetails",
  props: {
    data: {
      type: Object,
      required: true,
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
