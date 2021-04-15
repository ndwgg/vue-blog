<template>
  <div class="test-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg"
    />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 100vw;
  height: 100vh;
}
</style>