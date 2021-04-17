<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="main">
      <slot />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.layout-container {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  .left,
  .right {
    flex: 0 0 auto;
  }
  .main {
    flex: 1;
  }
}
</style>