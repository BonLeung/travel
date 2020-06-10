<template>
  <div class="home-swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
        // Some Swiper option/callback...
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/2006/c0/c08a1c90286ac75a3.water.jpg_600x330_28c9b87d.jpg'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/2006/70/705f77e802bf6a92a3.water.jpg_600x330_49f68117.jpg'
        }
      ]
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
