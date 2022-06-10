<template>
  <div class="logo">
    <img class="logo-img" :src="logoImgUrl" alt="">
  </div>
</template>
<script>
export default {
  name: 'LayoutLogo',
  props: {
    logoImgUrl: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  width:100%;
  height:$layout-header-height;
  padding:$layout-spacing;
  &-img{
    display: block;
    height:100%;
    margin: 0 auto;
  }
}
</style>
