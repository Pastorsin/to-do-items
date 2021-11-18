<template>
  <rotate-square3 :color="color" :size="size" />
</template>

<script>
import { RotateSquare3 } from "vue-loading-spinner";

export default {
  name: "Loader",
  components: {
    RotateSquare3,
  },
  data() {
    return {
      color: "#444",
      size: "50px",
    };
  },
};
</script>