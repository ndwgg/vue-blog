<template>
  <div class="test-contianer">
    <Empty />
  </div>
</template>

<script>
import Empty from "./";
export default {
  components: {
    Empty,
  },
};
</script>

<style lang="less" scoped>
.test-contianer {
  width: 500px;
  height: 400px;
  border: 1px solid;
  position: relative;
  margin: 40px autos;
}
</style>