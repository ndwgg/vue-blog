<template>
  <div class="to-top-contianer" v-show="show" @click="handleClick">top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.show = false;
        return;
      }
      this.show = dom.scrollTop > 500;
    },
    handleClick() {
      this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style lang="less" scoped >
@import "~@/styles/var.less";
.to-top-contianer {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: @primary;
  border-radius: 50%;
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 999;
  color: #fff;
  cursor: pointer;
}
</style>
