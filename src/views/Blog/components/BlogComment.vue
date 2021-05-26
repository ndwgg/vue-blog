<template>
  <div class="blog-comment-container">
    <MessageArea
      title="用户评论"
      :list="data.rows"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixin/fetchData";
import { getComment, postComment } from "@/api/blog";
export default {
  components: {
    MessageArea
  },
  mixins: [
    fetchData({
      total: 0,
      rows: []
    })
  ],
  data() {
    return {
      page: 1,
      limit: 10
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  computed: {
    canFetchMore() {
      return this.data.total > this.data.rows.length;
    }
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        return;
      }
      if (this.isLoading) {
        return;
      }
      const top = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      const range = 200;
      if (this.canFetchMore && top < range) {
        this.fetchMore();
      }
    },
    async fetchData() {
      const { data } = await getComment({
        page: this.page,
        limit: this.limit,
        blogId: this.$route.params.id
      });
      return data;
    },
    async fetchMore() {
      this.isLoading = true;
      this.page++;
      const { rows } = await this.fetchData();
      this.data.rows = this.data.rows.concat(rows);
      this.isLoading = false;
    },
    async handleSubmit(formData, callback) {
      const { data } = await postComment({
        blogid: this.$route.params.id,
        ...formData
      });
      this.data.rows.unshift(data);
      this.data.total++;
      callback("评论成功");
    }
  }
};
</script>

<style lang="less" scoped>
.blog-comment-container {
  margin: 30px 0;
}
</style>