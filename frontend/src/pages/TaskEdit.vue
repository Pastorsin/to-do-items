<template v-if="task">
  <Layout>
    <template #title> Edit Task </template>
    <template #subtitle> Change the name of the task </template>

    <template #content>
      <form @submit.prevent="save(task)" class="task__edit_form">
        <CInput>
          <input type="text" v-model="task.title" required />
        </CInput>
        <div class="task__edit_form_buttons">
          <CButton type="submit">Save</CButton>
          <CButton type="button" variant="red" @click="cancel(task)"
            >Cancel</CButton
          >
        </div>
      </form>
    </template>
  </Layout>
</template>

<script>
import CButton from "@/components/share/CButton.vue";
import CInput from "@/components/share/CInput.vue";

import Layout from "@/components/Layout";
import { mapState } from "vuex";

export default {
  name: "TaskEdit",
  components: {
    Layout,
    CButton,
    CInput,
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