<template>
  <Layout>
    <template #title>Folders</template>
    <template #subtitle>Manage your folders.</template>

    <template #content>
      <ul class="folders" v-if="folders">
        <li class="folders__item" v-for="folder in folders" :key="folder.id">
          <Folder :folder="folder" />
        </li>
      </ul>
      <EmptyResults entityLabel="folders" v-else />

      <FolderCreate />
    </template>
  </Layout>
</template>

<script>
import Folder from "@/components/Folder.vue";
import FolderCreate from "@/components/FolderCreate.vue";
import EmptyResults from "@/components/EmptyResults.vue";
import Layout from "@/components/Layout.vue";

import { mapState } from "vuex";

export default {
  name: "Folders",
  components: {
    Layout,
    Folder,
    FolderCreate,
    EmptyResults,
  },
  computed: {
    ...mapState({
      folders: (state) => state.folderStore.folders,
    }),
  },
  mounted() {
    this.$store.dispatch("getFolders");
  },
};
</script>

<style scoped>
.folders {
  display: flex;
  width: 100%;
  padding-bottom: 2em;
  flex-direction: column;
}

.folders__item {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
