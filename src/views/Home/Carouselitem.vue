<template>
  <div class="carouse-item-container">
    <div class="carouse-img">
      <ImageLoader
        :src="carouse.bigImg"
        :placeholder="carouse.midImg"
        @load="showWords"
      />
    </div>
    <div class="title" ref="title">{{ carouse.title }}</div>
    <div class="desc" ref="desc">{{ carouse.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["carouse"],
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
  },
  components: {
    ImageLoader,
  },
  methods: {
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      // 强制重新渲染 reflow 否则不会有动画效果
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      this.$refs.desc.clientWidth;
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
  },
};
</script>

<style lang="less" scoped>
.carouse-item-container {
  height: 100%;
  position: relative;
}
.carouse-img {
  height: 100%;
}
.title,
.desc {
  position: absolute;
  left: 50px;
  color: #fff;
  letter-spacing: 3px;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
  text-shadow: 0 1px rgba(0, 0, 0, 0.5), 0 -1px rgba(0, 0, 0, 0.5),
    1px 0 rgba(0, 0, 0, 0.5), -1px 0 rgba(0, 0, 0, 0.5);
}

.title {
  top: calc(50% - 40px);
  font-size: 1.8em;
}
.desc {
  top: calc(50% + 20px);
  font-size: 1.2em;
}
</style>