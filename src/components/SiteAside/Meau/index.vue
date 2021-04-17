<template>
  <nav class="meau-container">
    <router-link
      v-for="item in items"
      :key="item.link"
      :to="{ name: item.name }"
      :exact="item.exact"
      exact-active-class="selected"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false, // 只要当前路径以name开头，当前菜单就是选中的
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/var.less";
.meau-container {
  color: @gray;
  margin: 24px 0;
  a {
    padding: 0 50px;
    height: 45px;
    display: flex;
    align-items: center;
    font-size: 14px;
    &:hover {
      color: #fff;
    }
    .icon {
      font-size: 16px;
      margin-right: 10px;
    }
    &.selected {
      background-color: #2d2d2d;
    }
  }
}
</style>