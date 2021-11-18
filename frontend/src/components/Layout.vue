<template>
  <div class="section">
    <h2 class="section__title" v-if="hasTitleSlot">
      <slot name="title"></slot>
    </h2>

    <h3 class="section__subtitle" v-if="hasSubtitleSlot">
      <slot name="subtitle"></slot>
    </h3>

    <main class="section__content">
      <Error :message="error" v-if="error" />
      <Loader v-else-if="isLoading" />
      <slot name="content" v-else></slot>
    </main>

    <Alert />
  </div>
</template>

<script>
import Alert from "@/components/Alert";
import Error from "@/components/Error";
import Loader from "@/components/Loader";
import { mapState } from "vuex";

export default {
  name: "Layout",
  components: {
    Alert,
    Error,
    Loader,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.folderStore.isLoading,
      error: (state) => state.folderStore.error,
    }),
    hasTitleSlot() {
      return !!this.$slots["title"];
    },
    hasSubtitleSlot() {
      return !!this.$slots["subtitle"];
    },
  },
  created() {},
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

.section__content {
  display: flex;
  padding-bottom: 2em;
  align-items: center;
  justify-content: center;
  width: 50%;
  flex-direction: column;
}

@media (max-width: 1024px) {
  .section__content {
    width: 100%;
  }
}
</style>