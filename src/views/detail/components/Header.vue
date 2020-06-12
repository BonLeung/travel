<template>
  <div class="header">
    <router-link tag="div" to="/" class="icon-back-wrapper">
      <span class="iconfont icon-back"></span>
    </router-link>
    <div
      class="header-fixed"
      v-show="showHeader"
      :style="`opacity: ${opacity}`"
    >
      <router-link to="/">
        <span class="iconfont icon-back"></span>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showHeader: false,
      opacity: 0
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      console.log('scroll')
      const top = document.documentElement.scrollTop || document.body.scrollTop
      if (top < 46) {
        this.showHeader = false
      } else {
        this.showHeader = true
        let opacity = Math.abs(top / 160)
        if (opacity >= 1) {
          opacity = 1
        }
        this.opacity = opacity
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variable.scss';

.header {
  .icon-back-wrapper {
    position: absolute;
    top: .2rem;
    left: .2rem;
    width: .72rem;
    height: .72rem;
    border-radius: .3rem;
    text-align: center;
    background: rgba(0, 0, 0, .5);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-back {
      color: #fff;
      font-size: .4rem;
    }
  }
  .header-fixed {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    overflow: hidden;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    background-color: $bgColor;
    color: #fff;
    font-size: .32rem;
    z-index: 2;
    .icon-back {
      position: absolute;
      top: 0;
      left: 0;
      width: .64rem;
      text-align: center;
      color: #fff;
      font-size: .36rem;
    }
  }
}
</style>
