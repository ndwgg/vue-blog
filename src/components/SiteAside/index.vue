<template>
  <div class="site-aside-container">
    <Avatar :url="data.avatar" v-if="data.avatar" :size="100" />
    <h1 class="title">{{ data.siteTitle }}</h1>
    <Meau />
    <Contact v-if="data.weixin" />
    <footer v-if="data.icp">{{ data.icp }}</footer>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Meau from "./Meau";
import Contact from "./Contact";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Meau,
    Contact,
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
  created() {
    this.$store.dispatch("about/fetchAbout");
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