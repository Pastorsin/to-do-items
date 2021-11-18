<template>
  <div class="empty_results">
    <small>You don't have any {{ entityLabel }} yet.</small>
    <small>Create one!</small>
  </div>
</template>

<script>
export default {
  name: "EmptyResults",
  props: {
    entityLabel: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.empty_results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6em;
}
</style>