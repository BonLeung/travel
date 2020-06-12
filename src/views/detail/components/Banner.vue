<template>
  <div class="banner" @click="handleClickBanner">
    <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="" class="banner-img">
    <div class="banner-info">
      <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
      <div class="banner-number"><span class="iconfont icon-pic"></span>39</div>
    </div>
    <div class="back-wrapper" @click.stop="goBack">
      <span class="iconfont icon-back"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner',
  methods: {
    handleClickBanner () {
      this.$emit('showGallery')
    },
    goBack () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/mixins.scss';

.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  width: 100%;
  padding-bottom: 55%;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 .3rem;
    line-height: .6rem;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
    .banner-title {
      flex: 1;
      font-size: .32rem;
      color: #fff;
      @include ellipsis();
    }
    .banner-number {
      display: flex;
      align-items: center;
      padding: 0 .2rem;
      height: .4rem;
      line-height: .4rem;
      border-radius: .2rem;
      background-color: rgba(0, 0, 0, .5);
      color: #fff;
      font-size: .24rem;
      .icon-pic {
        margin-right: .1rem;
      }
    }
  }
  .back-wrapper {
    position: absolute;
    top: .2rem;
    left: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: .6rem;
    height: .6rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .5);
    .icon-back {
      font-size: .32rem;
      color: #fff;
    }
  }
}
</style>
