<template>
  <Layout>
    <template #title>Folders</template>
    <template #subtitle>Manage your folders.</template>

    <ul class="folders">
      <li class="folders__item" v-for="folder in folders" :key="folder.id">
        <Folder :folder="folder" />
      </li>
    </ul>

    <FolderCreate />
  </Layout>
</template>

<script>
import Folder from "@/components/Folder.vue";
import FolderCreate from "@/components/FolderCreate.vue";
import Layout from "@/components/Layout.vue";

import { mapState } from "vuex";

export default {
  name: "Folders",
  components: {
    Layout,
    Folder,
    FolderCreate,
  },
  computed: {
    ...mapState({
      folders: (state) => state.folderStore.folders,
    }),
  },
  async mounted() {
    this.$store.dispatch("getFolders");
  },
};
</script>

<style scoped>
.folders {
  display: flex;
  padding-bottom: 2em;
  width: 30%;
  flex-direction: column;
}

.folders__item {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1em;
}

@media (max-width: 1024px) {
  .folders {
    width: 100%;
  }
}
</style>
