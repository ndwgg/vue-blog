<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">
          <h1>left</h1>
        </div>
      </template>
      <template #default>
        <div class="main">
          <h1>main</h1>
        </div>
      </template>

      <template #right>
        <div class="right">
          <h1>right</h1>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style lang="less" scoped>
.left {
  width: 250px;
  background: #f00;
}
.main {
  background: #0f0;
}
.right {
  width: 300px;
  background: #00f;
}
</style>