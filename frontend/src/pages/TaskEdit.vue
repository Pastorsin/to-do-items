<template v-if="task">
  <Layout>
    <template #title> Edit Task </template>
    <template #subtitle> Change the name of the task </template>

    <form @submit.prevent="save(task)" class="task__edit_form">
      <input type="text" v-model="task.title" required />
      <div class="task__edit_form_buttons">
        <button type="submit">Save</button>
        <button type="button" @click="cancel(task)">Cancel</button>
      </div>
    </form>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import { mapState } from "vuex";

export default {
  name: "TaskEdit",
  components: {
    Layout,
  },
  computed: {
    ...mapState({
      task: (state) => state.folderStore.task,
    }),
  },
  methods: {
    save(task) {
      this.$store.dispatch("updateTask", task);
      this.goToTasksList(task.folder);
    },
    cancel(task) {
      this.goToTasksList(task.folder);
    },
    goToTasksList(folderId) {
      this.$router.push({
        name: "Tasks",
        params: {
          id: folderId,
        },
      });
    },
  },
  mounted() {
    this.$store.dispatch("getTaskById", this.$route.params.id);
  },
};
</script>

<style scoped>
.task__edit_form {
  display: flex;
  width: 30%;
  gap: 1rem;
  flex-direction: column;
  justify-items: center;
}

.task__edit_form_buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>