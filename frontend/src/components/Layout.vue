<template>
  <div class="section">
    <h2 class="section__title" v-if="hasTitleSlot">
      <slot name="title"></slot>
    </h2>
    <h3 class="section__subtitle" v-if="hasSubtitleSlot">
      <slot name="subtitle"></slot>
    </h3>
    <slot class="section__content"></slot>
    <Alert />
  </div>
</template>

<script>
import Alert from "@/components/Alert";

export default {
  name: "Layout",
  components: {
    Alert,
  },
  computed: {
    hasTitleSlot() {
      return !!this.$slots["title"];
    },
    hasSubtitleSlot() {
      return !!this.$slots["subtitle"];
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap"); /* Lato (Regular) */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"); /* Montserrat (Regular + Bold) */

.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2em;
  padding-bottom: 2em;
  font-family: "Montserrat", sans-serif;
}

.section__title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-family: monospace;
}

.section__subtitle {
  margin: 2rem 0 3rem 0;
  font-family: "Lato", sans-serif;
  color: #444;
  font-size: clamp(0.5rem, 1.5vw, 1.5rem);
}
</style>