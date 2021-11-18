<template>
  <Layout>
    <template #title> Login </template>
    <template #subtitle> Please enter your credentials </template>
    <template #content>
      <form @submit.prevent="login" class="login__form">
        <div class="login__username">
          <label for="username">Username</label>
          <CInput>
            <input
              id="username"
              v-model="username"
              placeholder="Enter username"
              required
            />
          </CInput>
        </div>
        <div class="login__password">
          <label for="password">Password</label>
          <CInput>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Password"
              required
            />
          </CInput>
        </div>
        <div class="login__submit">
          <CButton type="submit" variant="large">Login</CButton>
        </div>
      </form>
    </template>
  </Layout>
</template>

<script>
import CButton from "@/components/share/CButton.vue";
import CInput from "@/components/share/CInput.vue";
import Layout from "@/components/Layout.vue";

export default {
  name: "Login",
  components: {
    CButton,
    CInput,
    Layout,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      await this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });

      const { isUserLoggedIn } = this.$store.getters;

      if (isUserLoggedIn) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.login__form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem;
}

.login__form > * {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
</style>