<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="left">
          <SiteAside />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import SiteAside from "@/components/SiteAside";
import Layout from "@/components/Layout";
export default {
  components: {
    SiteAside,
    Layout,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
  background-color: #ff0;
  .left {
    height: 100%;
  }
}
</style>