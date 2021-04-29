<template>
  <div class="blog-list-container" v-loading="isLoading" ref="container">
    <ul>
      <li v-for="(item, i) in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <router-link
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </router-link>
        </div>
        <div class="main">
          <router-link
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </router-link>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论{{ item.commentNumber }}</span>
            <router-link
              :to="{
                name: 'CategoryBlog',
                params: {
                  categoryId: item.category.id,
                },
              }"
            >
              {{ item.category.name }}
            </router-link>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <Pager
      :current="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.page"
      :visibleNumber="10"
      @pageChange="pageChange"
    />
  </div>
</template>

<script>
import fetchData from "@/mixin/fetchData";
import Pager from "@/components/Pager";
import { getBlogs } from "@/api/blog";
import { formatDate } from "@/utils";
export default {
  mixins: [fetchData({})],
  components: {
    Pager,
  },
  methods: {
    async fetchData() {
      const { data } = await getBlogs(this.routeInfo);
      return data;
    },
    formatDate,
    pageChange(page) {
      const { categoryId, limit } = this.routeInfo;
      if (categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query: {
            limit,
            page,
          },
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query: {
            limit,
            page,
          },
          params: {
            categoryId,
          },
        });
      }
    },
  },
  watch: {
    async $route() {
      this.isLoading = true;
      this.$refs.container.scrollTop = 0;
      const { data } = await getBlogs(this.routeInfo);
      this.data = data;
      this.isLoading = false;
    },
  },
  computed: {
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1,
        page = +this.$route.query.page || 1,
        limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
