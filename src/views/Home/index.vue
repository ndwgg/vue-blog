<template>
  <div
    class="home-container"
    ref="homeContainer"
    @wheel="handleWheel"
    v-loading="isLoading"
  >
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id" class="item">
        <Carouselitem :carouse="item" />
      </li>
    </ul>
    <div class="icon icon-up" @click="switchTo(index - 1)" v-show="index >= 1">
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon icon-down"
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>

    <ul class="indicator">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        class="item"
        :class="[i === index ? 'active' : '']"
        @click="switchTo(i)"
      />
    </ul>
  </div>
</template>

<script>
import Carouselitem from "@/views/Home/Carouselitem";
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  data() {
    return {
      index: 0, // 当前显示的是第几张轮播图
      containerHeight: 0, // 整个容器的高度
      switching: false,
    };
  },
  components: {
    Carouselitem,
    Icon,
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  mounted() {
    this.containerHeight = this.$refs.homeContainer.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner", ["data", "isLoading"]),
  },
  methods: {
    switchTo(index) {
      this.index = index;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }

      if (e.deltaY < -5 && this.index > 0) {
        // 向上
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        // 向下
        this.switching = true;
        this.index++;
      }
    },
    handleTransitionEnd() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.homeContainer.clientHeight;
    },
  },
};
</script>

<style lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 500ms;
    .item {
      height: 100%;
      color: #fff;
    }
  }
  .icon {
    .self-center();
    transform: translateX(-50%);
    cursor: pointer;
    @tap: 25px;
    font-size: 24px;
    color: @lightWords;
    &.icon-up {
      top: @tap;
      animation: jump-up 4s infinite;
    }
    &.icon-down {
      top: auto;
      bottom: @tap;
      animation: jump-down 4s infinite;
    }
    @jump: 5px;
    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump);
      }
      50% {
        transform: translate(-50%, -@jump);
      }
      100% {
        transform: translate(-50%, @jump);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump);
      }
      50% {
        transform: translate(-50%, @jump);
      }
      100% {
        transform: translate(-50%, -@jump);
      }
    }
  }
  .indicator {
    .self-center();
    transform: translateY(50%);
    left: auto;
    right: 25px;
    .item {
      width: 7px;
      height: 7px;
      margin-bottom: 10px;
      border: 1px solid #fff;
      border-radius: 50%;
      cursor: pointer;
      box-sizing: border-box;
      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>