<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList";
import { debounce } from "@/utils";
export default {
  props: {
    toc: {
      type: Array,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  computed: {
    // 根据toc算出来一个带有isSelect的数组
    tocWithSelect() {
      const getToc = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getToc(t.children),
        }));
      };
      return getToc(this.toc);
    },
    // 根据toc得到他们元素对应的数组
    doms() {
      const doms = [];
      const getDoms = (toc) => {
        for (const item of toc) {
          doms.push(document.getElementById(item.anchor));
          if (item.children && item.children.length > 0) {
            getDoms(item.children);
          }
        }
      };
      getDoms(this.toc);
      return doms;
    },
  },
  components: {
    RightList,
  },
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  },
  methods: {
    handleSelect(it) {
      window.location.hash = it.anchor;
    },
    setSelect(scrollDom) {
      if (!scrollDom) {
        return;
      }
      this.activeAnchor = "";
      const range = 200;
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        } else {
          const top = dom.getBoundingClientRect().top;
          if (top > 0 && top <= range) {
            this.activeAnchor = dom.id;
            // 在范围内
          } else if (top > range) {
            // 在下方
            return;
          } else {
            // 在上方
            this.activeAnchor = dom.id;
          }
        }
      }
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
