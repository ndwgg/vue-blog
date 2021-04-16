<template>
  <div class="site-aside-container">
    <Avatar
      url="https://img1.baidu.com/it/u=3455184204,2524748306&fm=26&fmt=auto&gp=0.jpg"
      :size="100"
    />
    <h1 class="title">龙傲天的小窝</h1>
    <Meau />
    <Contact />
    <footer>京：ICP备</footer>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Meau from "./Meau";
import Contact from "./Contact";
export default {
  components: {
    Avatar,
    Meau,
    Contact,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.site-aside-container {
  background-color: @dark;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  .avatar-container {
    margin: 0 auto;
  }
  .title {
    text-align: center;
    font-size: 1.2em;
    color: #fff;
  }
  footer {
    font-size: 12px;
    text-align: center;
    color: @gray;
  }
}
</style>