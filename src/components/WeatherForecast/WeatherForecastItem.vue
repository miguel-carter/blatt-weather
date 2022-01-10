<template>
  <div class="wrapper" style="text-align: center; margin-bottom: 10px">
    <p>
      {{ weekDays[new Date(data.sunrise * 1000).getDay()] }}
    </p>
    <img
      :src="`http://openweathermap.org/img/w/${data.weather[0].icon}.png`"
      alt=""
    />
    <p>{{ min }}&deg;/{{ max }}&deg;</p>
  </div>
</template>

<script>
import conversion from "../../helpers/conversion";
export default {
  name: "WeatherForecastItem",
  props: {
    data: {
      type: Object,
      required: true,
    },
    conversionType: {
      type: String,
      required: true,
      default: "f",
    },
  },
  data() {
    return {
      weekDays: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
    };
  },
  computed: {
    min() {
      return conversion(this.conversionType, this.data.temp.min);
    },
    max() {
      return conversion(this.conversionType, this.data.temp.max);
    },
  },
};
</script>

<style scoped>
.wrapper > * {
  margin: 0;
  padding: 0;
}
</style>
