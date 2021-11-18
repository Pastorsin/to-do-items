<template>
  <Layout v-if="folder">
    <template #title>Folder > {{ folder.name }}</template>
    <template #subtitle>Tasks completed: {{ numberOfTasksCompleted }}</template>

    <template #content>
      <ul class="tasks__list" v-if="hasTasks">
        <li v-for="task in folder.tasks" :key="task.id" class="task__item">
          <div class="task__item_label">
            <input
              @change="updateTask(task)"
              type="checkbox"
              v-model="task.completed"
            />
            {{ task.title }}
          </div>
          <div class="task__item_buttons">
            <CButton @click="editTask(task)">Edit</CButton>
            <CButton variant="red" @click="removeTask(task)">Remove</CButton>
          </div>
        </li>
      </ul>
      <EmptyResults entityLabel="tasks" v-else />

      <TaskCreate :folder="folder" />
    </template>
  </Layout>
</template>

<script>
import TaskCreate from "@/components/TaskCreate.vue";
import Layout from "@/components/Layout.vue";
import { mapState } from "vuex";
import EmptyResults from "@/components/share/EmptyResults.vue";
import CButton from "@/components/share/CButton.vue";

export default {
  name: "Tasks",
  components: {
    Layout,
    TaskCreate,
    EmptyResults,
    CButton,
  },
  data() {
    return {
      newTask: "",
    };
  },
  computed: {
    ...mapState({
      folder: (state) => state.folderStore.folder,
    }),
    numberOfTasksCompleted() {
      if (!this.folder || !this.folder.tasks) return 0;

      return this.folder.tasks.filter((task) => task.completed).length;
    },
    hasTasks() {
      return this.folder && this.folder.tasks && this.folder.tasks.length;
    },
  },
  methods: {
    removeTask(task) {
      this.$store.dispatch("removeTask", task);
    },
    updateTask(task) {
      this.$store.dispatch("updateTask", task);
    },
    editTask(task) {
      this.$router.push({
        name: "TaskEdit",
        params: {
          id: task.id,
        },
      });
    },
  },
  mounted() {
    const { id } = this.$route.params;
    this.$store.dispatch("getFolderById", id);
  },
};
</script>

<style scoped>
.tasks {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.tasks__list {
  display: inline-flex;
  padding-bottom: 2em;
  gap: 1em;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
}

.tasks__header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
}

.task__item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 1rem;
}

.task__item > * {
  display: flex;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .tasks {
    width: 100%;
  }
}
</style>