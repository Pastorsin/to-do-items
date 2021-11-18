<template v-if="task">
  <Layout>
    <template #title> Edit Task </template>
    <template #subtitle> Change the name of the task </template>

    <template #content>
      <form @submit.prevent="save(task)" class="task__edit_form">
        <input type="text" v-model="task.title" required />
        <div class="task__edit_form_buttons">
          <button type="submit">Save</button>
          <button type="button" @click="cancel(task)">Cancel</button>
        </div>
      </form>
    </template>
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
    const { id } = this.$route.params;
    this.$store.dispatch("getTaskById", id);
  },
};
</script>

<style scoped>
.task__edit_form {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  flex: 4;
  padding: 2em;
}

.task__edit_form_buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>