<template>
  <div class="wrapper" style="text-align: center">
    <p class="city">{{ data.name }}</p>
    <p class="temp">{{ temp }}</p>
    <p class="description">{{ data.weather[0].description }}</p>
  </div>
</template>

<script>
import conversion from "../../helpers/conversion";

export default {
  name: "WeatherGlance",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    temp() {
      return conversion("f", this.data.main.temp);
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
