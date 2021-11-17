<template>
  <Layout v-if="folder">
    <template #title>Folder > {{ folder.name }}</template>
    <template #subtitle>Manage your tasks.</template>

    <button class="back_button" @click="backToFoldersList">Back</button>

    <h3>Tasks completed: {{ numberOfTasksCompleted }}</h3>

    <ul class="tasks">
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

    <TaskCreate :folder="folder" />
  </Layout>
</template>

<script>
import TaskCreate from "@/components/TaskCreate.vue";
import Layout from "@/components/Layout.vue";
import { mapState } from "vuex";

export default {
  name: "Tasks",
  components: {
    Layout,
    TaskCreate,
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
    const id = this.$route.params.id;
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
  padding-bottom: 2em;
  width: 60%;
  gap: 1em;
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