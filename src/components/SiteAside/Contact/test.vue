<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
export default {
  components: {
    Contact,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  background-color: #000;
  width: 320px;
  height: 300px;
  padding-top: 200px;
  margin: 0 auto;
}
</style>