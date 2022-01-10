<template>
  <div class="wrapper" style="text-align: center">
    <p class="city">Temp City</p>
    <p class="temp">{{ temp }}&deg;</p>
    <p class="description">
      {{ data.current.weather[0].description }}
    </p>
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
    conversionType: {
      type: String,
      require: true,
    },
  },
  computed: {
    temp() {
      return conversion(this.conversionType, this.data.current.temp);
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
  margin: 1rem 0;
}
.description {
  font-size: 1rem;
}
</style>
