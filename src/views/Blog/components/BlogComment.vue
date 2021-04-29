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
    MessageArea,
  },
  mixins: [
    fetchData({
      total: 0,
      rows: [],
    }),
  ],
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  methods: {
    async fetchData() {
      const { data } = await getComment({
        page: this.page,
        limit: this.limit,
        blogId: this.$route.params.id,
      });
      return data;
    },
    async handleSubmit(formData, callback) {
      const { data } = await postComment({
        blogid: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(data);
      this.data.total++;
      callback("评论成功");
    },
  },
};
</script>

<style lang="less" scoped>
.blog-comment-container {
  margin: 30px 0;
}
</style>