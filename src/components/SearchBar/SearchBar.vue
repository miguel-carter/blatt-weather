<template>
  <div class="wrapper">
    <form role="search" @submit.prevent="formSubmitHandler">
      <input
        type="search"
        id="query"
        name="q"
        v-on:input="searchHandler($event, updateSuggestions, formSubmitHandler)"
        v-model="query"
        placeholder="Search for location..."
        aria-label="Search through site content"
        list="suggestions"
        autocomplete="off"
      />
      <datalist id="suggestions" style="width: 100%">
        <option
          style="width: 100%"
          v-for="(item, index) in suggestions"
          :key="index"
          :value="item.properties.address_line1"
        ></option>
      </datalist>
    </form>
  </div>
</template>

<script>
import _ from "lodash";
import axios from "axios";

export default {
  name: "SearchBar",
  data() {
    return {
      query: "",
      suggestions: [],
    };
  },
  methods: {
    formSubmitHandler() {
      this.$emit("search", {
        name: this.suggestions[0].properties.address_line1,
        location: {
          lon: this.suggestions[0].properties.lon,
          lat: this.suggestions[0].properties.lat,
        },
      });
    },
    searchHandler: _.debounce(
      async (e, updateSuggestions, formSubmitHandler) => {
        if (!e.target.value) return;
        try {
          const GEO_API_KEY = "b8ed1785832c461ea30be6f13be73133";
          const response = await axios.get(
            `https://api.geoapify.com/v1/geocode/autocomplete?text=${e.target.value}&apiKey=${GEO_API_KEY}`
          );
          updateSuggestions(response.data.features);
          if (!e.inputType) {
            formSubmitHandler();
          }
        } catch (err) {
          console.error(err);
        }
      },
      200
    ),
    updateSuggestions(arr) {
      this.suggestions = arr;
    },
  },
};
</script>

<style scoped>
.wrapper > * {
  padding: 0;
  margin: 0;
}

form {
  width: 100%;
}

input {
  width: 100%;
}

input:focus {
  outline: none;
}

::placeholder {
  color: rgb(87, 87, 87);
  opacity: 0.7;
}

input[type="search"] {
  border-radius: 50px;
  background-color: white;
  font-size: 1rem;
  border: 2px solid white;
  padding: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
</style>
