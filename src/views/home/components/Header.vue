<template>
  <header class="header">
    <div class="header-left">
      <div class="iconfont icon-back"></div>
    </div>
    <div class="header-title">
      <span class="iconfont icon-search"></span>
      <div class="title">输入城市/景点/游玩主题</div>
    </div>
    <router-link to="/city" tag="div" class="header-right">
      <span class="city-name">{{ city }}</span>
      <span class="iconfont icon-arrow-down"></span>
    </router-link>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variable.scss';

.header {
  height: $headerHeight;
  background-color: $bgColor;
  display: flex;
  align-items: center;
  color: #fff;
  .header-left {
    height: 100%;
    width: .4rem;
    padding: 0 .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-back {
      font-size: .36rem;
    }
  }
  .header-title {
    flex: 1;
    height: .6rem;
    margin: .14rem 0;
    padding: 0 .2rem;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: .06rem;
    font-size: .28rem;
    color: #e4e7ea;
    overflow: hidden;
    .icon-search {
      font-size: .4rem;
    }
    .title {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .header-right {
    padding: 0 .22rem;
    display: flex;
    align-items: center;
    line-height: .88rem;
    color: #fff;
    .city-name {
      font-size: .28rem;
    }
    .icon-arrow-down {
      font-size: .28rem;
    }
  }
}
</style>
