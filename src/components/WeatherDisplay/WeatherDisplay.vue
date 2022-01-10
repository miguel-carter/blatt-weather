<template>
  <Card>
    <div class="row" style="padding-top: 20px">
      <div class="column">
        <span>Current Weather</span>
      </div>
      <div class="column">
        <SwitchToggle
          style="margin: 0 0 0 auto"
          @input="onInput"
          :value="isToggled"
        />
      </div>
    </div>
    <div class="row" style="padding-bottom: 20px">
      <div class="column">
        <WeatherGlance
          :conversionType="isToggled ? 'c' : 'f'"
          :data="current"
        />
      </div>
      <div class="column">
        <WeatherDetails
          :conversionType="isToggled ? 'c' : 'f'"
          :data="current"
        />
      </div>
    </div>
  </Card>
</template>

<script>
import Card from "../Card.vue";
import SwitchToggle from "../SwitchToggle.vue";
import WeatherGlance from "./WeatherGlance.vue";
import WeatherDetails from "./WeatherDetails.vue";

export default {
  name: "WeatherDisplay",
  components: {
    Card,
    SwitchToggle,
    WeatherGlance,
    WeatherDetails,
  },
  props: {
    current: {
      type: Object,
      required: true,
    },
    isToggled: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      title: "Current Weather",
    };
  },
  methods: {
    onInput() {
      this.$emit("toggle");
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
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  margin: 0;
  padding: 10px;
}

@media screen and (min-width: 800px) {
  .column {
    flex: 1;
  }
}
</style>
