<template>
  <div class="wrapper" style="text-align: left">
    <p class="description">
      Feels like {{ feels_like }}&deg;{{ conversionType.toUpperCase() }}
    </p>
    <div>
      <div style="display: inline-block">
        <p class="detail"><i class="fas fa-tint"></i> humidity</p>
        <p class="detail"><i class="fas fa-wind"></i> wind</p>
        <p class="detail"><i class="fas fa-tachometer-alt"></i> pressure</p>
      </div>
      <div style="display: inline-block; margin: 0 0 0 10px">
        <p class="detail">{{ data.current.humidity }}%</p>
        <p class="detail">{{ data.current.wind_speed }} kph</p>
        <p class="detail">{{ data.current.pressure }} hPa</p>
      </div>
    </div>
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
    conversionType: {
      type: String,
      require: true,
    },
  },
  computed: {
    feels_like() {
      return conversion(this.conversionType, this.data.current.feels_like);
    },
  },
};
</script>

<style scoped>
.wrapper > * {
  padding: 0;
  margin: 0;
  width: 60%;
  margin: 0 auto;
}

.description {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.detail {
  font-size: 1rem;
  margin-bottom: 10px;
}
</style>
