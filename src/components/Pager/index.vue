<template>
  <div class="pager-container" v-if="pageNumber > 1">
    <a
      @click="handleClick(1)"
      :class="{ disabled: current === 1 }"
      >|&lt;&lt;</a
    >
    <a
      @click="handleClick(current - 1)"
      :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      v-for="(item, i) in numbers"
      :key="i"
      :class="{ active: item === current }"
      @click="handleClick(item)"
      >{{ item }}</a
    >
    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: pageNumber === current }"
      >&gt;&gt;</a
    >
    <a
      @click="handleClick(pageNumber)"
      :class="{ disabled: pageNumber === current }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 当前显示的总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    // 面板展示的最小数字
    visibleMin() {
      const min = this.current - Math.floor(this.visibleNumber / 2);
      if (min <= 1) {
        return 1;
      }
      return min;
    },
    // 面板展示的最大数字
    visibleMax() {
      const max = this.visibleMin + this.visibleNumber - 1;
      if (max >= this.pageNumber) {
        return this.pageNumber;
      }
      return max;
    },
    numbers() {
      const numbers = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        numbers.push(i);
      }
      return numbers;
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 0) {
        newPage = 0;
      }

      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }

      if (newPage === this.current) {
        return;
      }
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    margin: 0 6px;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      cursor: pointer;
      font-weight: bold;
    }
  }
}
</style>
