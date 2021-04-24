<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章列表</h2>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import fetchData from "@/mixin/fetchData";
import RightList from "@/views/Blog/components/RightList";
import { getBlogCategories } from "@/api/blog";
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    list() {
      console.log(this.data);
      // 计算出所有文章总数
      const totalArticleCount = this.data.reduce(
        (a, b) => a + b.articleCount,
        0
      );

      const data = [
        {
          name: "全部",
          id: -1,
          articleCount: totalArticleCount,
        },
        ...this.data,
      ];

      return data.map((item) => ({
        ...item,
        isSelect: item.id === this.categoryId,
        aside: `${item.articleCount}篇`,
      }));
    },
  },
  methods: {
    async fetchData() {
      const { data } = await getBlogCategories();
      return data;
    },
    handleSelect(item) {
      const query = {
        limit: this.$route.query.limit,
        page: 1,
      };

      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 90%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
