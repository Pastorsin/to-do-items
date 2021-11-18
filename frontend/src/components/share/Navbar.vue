<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <router-link to="/" class="navbar__link">
        <li class="navbar__title">To-Do app</li>
      </router-link>
      <li class="navbar__session" v-if="isUserLoggedIn">
        <svg
          class="navbar__session_icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z"
          />
        </svg>
        <span>{{ username }}</span>
        <CButton variant="dark" @click="logout">Logout</CButton>
      </li>
    </ul>
  </nav>
</template>

<script>
import CButton from "@/components/share/CButton.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Navbar",
  components: {
    CButton,
  },
  computed: {
    ...mapState({
      username: (state) => state.sessionStore.username,
    }),
    ...mapGetters(["isUserLoggedIn"]),
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Charmonman:wght@700&display=swap"); /* Charmonman (Bold) */

.navbar {
  background-color: #c0d6df;
  font-family: "Montserrat", sans-serif;
  font-size: clamp(1rem, 1.5vw, 1rem);
  color: rgb(14, 14, 14);
}

.navbar__title {
  font-family: "Charmonman", sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
}

.navbar__list {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.navbar__session {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.navbar__title {
  display: flex;
  align-items: center;
}

.navbar__session_icon {
  width: 1.5rem;
  height: 1.5rem;
  fill: #4f6d7a;
}
</style>
