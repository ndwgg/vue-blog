<template>
  <Layout>
    <div
      class="detail-main-contianer"
      ref="mainContainer"
      v-loading="isLoading"
    >
      <BlogDetail :blog="data" v-if="data" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixin/fetchData";
import mainScroll from "@/mixin/mainScroll";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "@/views/Blog/components/BlogDetail";
import BlogTOC from "@/views/Blog/components/BlogTOC";
import BlogComment from "@/views/Blog/components/BlogComment";
export default {
  mixins: [fetchData(null), mainScroll("mainContainer")],
  components: {
    Layout,
    BlogDetail,
    BlogComment,
    BlogTOC,
  },
  methods: {
    async fetchData() {
      const { data } = await getBlog(this.$route.params.id);
      return data;
    },
    // handldScroll() {
    //   this.$bus.$emit("mainScroll", this.$refs.mainContainer);
    // },
    // handleSetMainScroll(scrollTop) {
    //   this.$refs.mainContainer.scrollTop = scrollTop;
    // },
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style lang="less" scoped>
.detail-main-contianer {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>