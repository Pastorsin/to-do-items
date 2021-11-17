<template>
  <form @submit.prevent="addTask" class="task__create_form">
    <input type="text" v-model="title" placeholder="New task" required />
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  name: "TaskCreate",
  props: {
    folder: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTask() {
      const { title, folder } = this;
      this.$store.dispatch("createTask", { title, folder });
    },
  },
};
</script>