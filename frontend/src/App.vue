<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import api from "@/services";

export default {
  name: "App",
  created() {
    api.interceptors.response.use(
      (response) => response,
      () => {
        const errorMessage = "An error ocurred, try again please.";
        this.$store.commit("setError", errorMessage);
      }
    );
  },
};
</script>
