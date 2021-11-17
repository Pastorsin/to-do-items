<template>
  <div class="folder">
    <div class="folder__label">
      <div class="folder__label_icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M24 22h-24v-14h7.262c1.559 0 2.411-.708 5.07-3h11.668v17zm-16.738-16c.64 0 1.11-.271 2.389-1.34l-2.651-2.66h-7v4h7.262z"
          />
        </svg>
      </div>
      <div class="folder__label_text">
        <span>{{ folder.name }}</span>
      </div>
    </div>
    <div class="folder__buttons">
      <router-link :to="{ path: `folder/${folder.id}` }">
        <button>View items</button>
      </router-link>
      <button @click="removeFolder(folder)">Remove</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Folder",
  props: {
    folder: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["removeFolder"]),
  },
};
</script>

<style scoped>
.folder {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
}

.folder__label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.folder__label_icon {
  fill: #1a85a8;
}

.folder__buttons {
  display: flex;
  align-items: center;
  gap: 1em;
}
</style>