<template>
  <div class="tasks">
    <div class="tasks__header">
      <h2 class="tasks__title">Tasks</h2>
      <button class="tasks__add-button" @click="addTask">Add task</button>
    </div>
    <div class="tasks__list"></div>
  </div>
</template>

<script>
export default {
  name: "Tasks",
  props: {
    folder: {
      type: Object,
      required: true,
    },
  },
};
</script>