<template>
  <div class="home-swiper">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true
        // Some Swiper option/callback...
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length > 0
    }
  }
}
</script>

<style scoped lang="scss">
.home-swiper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 55%;
  .swiper-img {
    width: 100%;
    height: 100%;
  }
  ::v-deep .swiper-pagination-bullet-active {
    background-color: #00bcd4;
  }
}
</style>
