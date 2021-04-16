<template>
  <div class="image-loader-container">
    <img
      :src="placeholder"
      alt=""
      class="placeholder"
      v-if="!everythingIsDone"
    />
    <img
      :src="src"
      alt=""
      class="src"
      @load="imgLoad"
      :style="{ opacity: originOpacity, transition: `opacity ${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      isLoading: true,
      everythingIsDone: false,
    };
  },
  computed: {
    originOpacity() {
      return this.isLoading ? 0 : 1;
    },
  },
  methods: {
    imgLoad() {
      this.isLoading = false;
      setTimeout(() => {
        this.everythingIsDone = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    .self-fill();
    object-fit: cover;
    &.placeholder {
      filter: blur(1vw);
    }
  }
}
</style>