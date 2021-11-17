<template>
  <form @submit.prevent="createFolder" class="folder_create__form">
    <div class="form-group">
      <input
        type="text"
        placeholder="New Folder"
        v-model="folder.name"
        required
      />
    </div>
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  name: "FolderCreate",
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
  gap: 1rem;
}
</style>