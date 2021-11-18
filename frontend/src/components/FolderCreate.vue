<template>
  <form @submit.prevent="createFolder" class="folder_create__form">
    <CInput>
      <input
        type="text"
        placeholder="New Folder"
        v-model="folder.name"
        required
      />
    </CInput>
    <CButton type="submit">Add</CButton>
  </form>
</template>

<script>
import CInput from "@/components/share/CInput.vue";
import CButton from "@/components/share/CButton.vue";

export default {
  name: "FolderCreate",
  components: {
    CButton,
    CInput,
  },
  data() {
    return {
      folder: {
        name: "",
      },
    };
  },
  methods: {
    createFolder() {
      this.$store.dispatch("createFolder", this.folder);
    },
  },
};
</script>

<style scoped>
.folder_create__form {
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>