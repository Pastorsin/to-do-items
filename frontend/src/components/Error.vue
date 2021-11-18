<template>
  <div class="error">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.error {
  padding: 1rem;
  color: #f44336;
}
</style>