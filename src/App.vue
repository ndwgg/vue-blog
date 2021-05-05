<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="left">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <router-view></router-view>
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import SiteAside from "@/components/SiteAside";
import Layout from "@/components/Layout";
import ToTop from "@/components/ToTop";
export default {
  components: {
    SiteAside,
    Layout,
    ToTop,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
  .left {
    height: 100%;
  }
}
</style>