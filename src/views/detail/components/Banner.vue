<template>
  <div class="banner" @click="handleClickBanner">
    <img :src="bannerImg" alt="" class="banner-img">
    <div class="banner-info">
      <div class="banner-title">{{ sightName }}</div>
      <div class="banner-number"><span class="iconfont icon-pic"></span>39</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String
  },
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
@import '~@/assets/styles/mixin.scss';

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
}
</style>
