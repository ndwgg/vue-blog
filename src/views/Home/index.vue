<template>
  <div class="test-container">
    HOME
    <button @click="handle">handle</button>
  </div>
</template>

<script>
import { getBanners } from "@/api/test";
export default {
  methods: {
    async handle() {
      // this.$showMessage({
      //   content: "23432",
      // });
      const res = await getBanners();
      console.log(res);
    },
  },
};
</script>

<style scoped>
.test-container {
  height: 500px;
  width: 50%;
  margin: 0 auto;
}
</style>