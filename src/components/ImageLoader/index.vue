<template>
  <div class="image-loader-container">
    <img :src="src" alt="" />
    <div
      class="mode"
      :style="{ 'background-image': `url(${placeholder})` }"
    ></div>
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
      default: 500,
    },
  },
};
</script>

<style lang="less" scoped>
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .mode {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    filter: blur(4px);
    background-size: 100% 100%;
    animation: hide 500ms;
  }
  @keyframes hide {
    0% {
      filter: blur(0px);
      opacity: 1;
    }

    100% {
      filter: blur(40px);
      opacity: 0;
    }
  }
}
</style>