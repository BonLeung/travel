<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-back"></div>
    </div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <div class="header-right">
      <span class="city-name">城市</span>
      <span class="iconfont icon-arrow-down"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>

.header {
  height: 1.14rem;
  background-color: #17c0c8;
  display: flex;
  align-items: center;
  color: #fff;
  .header-left {
    height: 100%;
    width: .85rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-back {
      font-size: .4rem;
    }
  }
  .header-input {
    margin-left: .13rem;
    flex: 1;
    height: .8rem;
    display: flex;
    align-items: center;
    padding-left: .13rem;
    background-color: #fff;
    border-radius: .12rem;
    font-size: .4rem;
    color: #a5a5a5;
  }
  .header-right {
    margin: 0 .26rem;
    display: flex;
    align-items: center;
    .city-name {
      font-size: .4rem;
    }
    .icon-arrow-down {
      font-size: .32rem;
    }
  }
}
</style>
