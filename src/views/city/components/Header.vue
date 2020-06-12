<template>
  <header class="header">
    <router-link to="/" tag="div" class="icon-back-wrapper">
      <div class="iconfont icon-back"></div>
    </router-link>
    <h1 class="title">城市选择</h1>
  </header>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variable.scss';
@import '~@/assets/styles/mixin.scss';

.header {
  position: relative;
  height: $headerHeight;
  background-color: $bgColor;
  .icon-back-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: .4rem;
    padding: 0 .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-back {
      font-size: .36rem;
      color: #fff;
    }
  }
  .title {
    position: absolute;
    left: .8rem;
    right: .8rem;
    line-height: $headerHeight;
    text-align: center;
    @include ellipsis();
    margin: 0 .32rem;
    font-size: .32rem;
    color: #fff;
  }
}
</style>
