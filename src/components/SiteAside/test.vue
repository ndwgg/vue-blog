<template>
  <div class="test-container">
    <SideAside />
  </div>
</template>

<script>
import SideAside from "./";
export default {
  components: {
    SideAside,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 300px;
  height: 450px;
  margin: 0 auto;
}
</style>
