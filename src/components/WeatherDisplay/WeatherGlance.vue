<template>
  <div class="wrapper" style="text-align: center">
    <p class="city">{{ data.city }}</p>
    <p class="temp">{{ data.temp }}</p>
    <p class="description">{{ data.description }}</p>
  </div>
</template>

<script>
export default {
  name: "WeatherGlance",
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
}

.city {
  font-size: 1.5rem;
}
.temp {
  font-size: 4rem;
  margin: 0.5rem 0;
}
.description {
  font-size: 1rem;
}
</style>
