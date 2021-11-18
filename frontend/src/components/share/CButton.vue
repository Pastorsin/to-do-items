<template>
  <button @click="$emit('click')" class="button">
    <span v-if="hasText" class="button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "CButton",
  computed: {
    hasText() {
      return this.$slots["default"];
    },
  },
};
</script>

<style>
button {
  outline: none;
  background: none;
  border: none;
  font: inherit;
  color: inherit;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
  font: inherit;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #c0d6df;
  color: #395663;

  border-radius: 7px;
  padding: 0.45em 0.45rem;
  font-size: clamp(0.8rem, 4vw, 0.9rem);
  font-family: "Lato", sans-serif;
}

.button:hover {
  color: #444;
}

.button[variant~="red"] {
  color: #eaeaea;
  background-color: #f44336;
}

.button[variant~="red"]:hover {
  background-color: #bb251a;
}

.button[variant~="dark"] {
  background-color: #395663;
  color: #c0d6df;
}

.button[variant~="dark"]:hover {
  color: #deecf1;
}

.button[variant~="large"] {
  padding: 0.45rem 2rem;
  font-size: clamp(1.1rem, 4vw, 1.1rem);
}
</style>