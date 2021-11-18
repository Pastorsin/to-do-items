<template>
  <div class="input">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CInput",
  props: {
    name: String,
  },
};
</script>

<style scoped>
input {
  font: inherit;
  color: inherit;
}

.input {
  display: flex;
  flex-direction: column;
  font-size: clamp(0.8rem, 1vw, 1rem);
  font-family: "Montserrat", sans-serif;
}
</style>