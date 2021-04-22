<template>
  <div
    class="carouse-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carouse-img" ref="image" :style="imagePosition">
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
      // 外部容器尺寸
      containerSize: null,
      // 图片尺寸
      innerSize: null,
      mouseX: 0,
      mouseY: 0,
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  computed: {
    // 核心
    imagePosition() {
      if (!this.innerSize || !this.containerSize) {
        return {};
      }
      // 鼠标位置和容器位置确定图片要移动的位置
      const extraWidth = this.innerSize.width - this.containerSize.width; // 多出的宽度
      const extraHeight = this.innerSize.height - this.containerSize.height; //多出的高度
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
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
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
      console.log(this.containerSize, this.innerSize);
    },
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
};
</script>

<style lang="less" scoped>
.carouse-item-container {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.carouse-img {
  width: 110%;
  height: 110%;
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.3s;
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