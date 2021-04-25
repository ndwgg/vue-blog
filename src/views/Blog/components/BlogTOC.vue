<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList";
export default {
  props: {
    toc: {
      type: Array,
    },
  },
  computed: {
    list() {
      const hash = window.location.hash;
      return this.toc.map((item) => ({
        ...item,
        isSelect: hash === item.anchor,
      }));
    },
  },
  components: {
    RightList,
  },
  methods: {
    handleSelect(it) {
      window.location.hash = it.anchor;
    },
  },
};
</script>


<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
