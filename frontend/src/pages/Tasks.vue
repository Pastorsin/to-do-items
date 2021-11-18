<template>
  <Layout v-if="folder">
    <template #title>Folder > {{ folder.name }}</template>
    <template #subtitle>Manage your tasks.</template>

    <template #content>
      <button class="back_button" @click="backToFoldersList">Back</button>

      <ul class="tasks__list" v-if="hasTasks">
        <header class="tasks__header">
          <h3>Tasks completed: {{ numberOfTasksCompleted }}</h3>
        </header>

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
            <button @click="editTask(task)">Edit</button>
            <button @click="removeTask(task)">Remove</button>
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

export default {
  name: "Tasks",
  components: {
    Layout,
    TaskCreate,
    EmptyResults,
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
    backToFoldersList() {
      this.$router.push({
        name: "Folders",
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
.back_button {
  display: flex;
  align-self: center;
  margin: 2rem;
}

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
  justify-content: center;
  flex-direction: column;
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

.task__create_form {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

@media (max-width: 768px) {
  .tasks {
    width: 100%;
  }
}
</style>