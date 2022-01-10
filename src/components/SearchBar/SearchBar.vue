<template>
  <div class="wrapper">
    <form role="search" @submit.prevent="searchHandler">
      <input
        type="search"
        id="query"
        name="q"
        v-model="query"
        placeholder="Search for location..."
        aria-label="Search through site content"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    searchHandler() {
      this.$emit("search", this.query);
      this.query = "";
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
