<template>
  <div>
    <Layout>
      <template #default>
        <BlogList />
      </template>
      <template #right>
        <BlogCateory />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "@/views/Blog/components/BlogList";
import BlogCateory from "@/views/Blog/components/BlogCateory";

export default {
  components: {
    Layout,
    BlogList,
    BlogCateory,
  },
};
</script>

<style scoped>
</style>