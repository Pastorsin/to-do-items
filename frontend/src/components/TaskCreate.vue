<template>
  <form @submit.prevent="addTask" class="task__create_form">
    <CInput>
      <input type="text" v-model="title" placeholder="New task" required />
    </CInput>
    <CButton type="submit">Add</CButton>
    <CButton
      type="button"
      variant="dark"
      class="back_button"
      @click="backToFoldersList"
    >
      Back
    </CButton>
  </form>
</template>

<script>
import CButton from "@/components/share/CButton.vue";
import CInput from "@/components/share/CInput.vue";

export default {
  name: "TaskCreate",
  components: {
    CButton,
    CInput,
  },
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
    backToFoldersList() {
      this.$router.push({
        name: "Folders",
      });
    },
  },
};
</script>

<style scoped>
.task__create_form {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}
</style>
