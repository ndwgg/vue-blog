<template>
  <div class="test-container">
    HOME
    <button @click="handle">handle</button>
  </div>
</template>

<script>
export default {
  methods: {
    handle() {
      this.$showMessage({
        content: "23432",
      });
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