<template>
  <div id="app">
    <Pager :current="current" :total="20" @pageChange="pageChange" />
  </div>
</template>

<script>
import Pager from "./";
export default {
  name: "App",
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
    };
  },
  methods: {
    pageChange(num) {
      this.current = num;
    },
  },
};
</script>

<style lang="less" scoped>
</style>
