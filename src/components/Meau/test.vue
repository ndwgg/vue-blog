<template>
  <div class="test-container">
    <Meau />
  </div>
</template>

<script>
import Meau from "./";
export default {
  components: {
    Meau,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 250px;
  height: 400px;
  margin: 0 auto;
  background-color: #000;
}
</style>
