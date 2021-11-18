<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import api from "@/services";
import Navbar from "@/components/share/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  created() {
    api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (!error.response) {
          const errorMessage = "An error ocurred, try again please.";
          this.$store.commit("setError", errorMessage);
        }
      }
    );
  },
};
</script>

<style>
body {
  height: 100vh;
  background-color: #eaeaea;
}
</style>