<template>
  <img
    :src="url"
    :style="{ width: size + 'px', height: size + 'px' }"
    class="avatar-container"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 50,
    },
  },
};
</script>

<style lang="less" scoped>
.avatar-container {
  border-radius: 50%;
  display: block;
  object-fit: cover;
}
</style>