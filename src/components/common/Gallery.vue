<template>
  <div class="gallery" @click="handleClickGallery">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="img in imgs" :key="img">
          <img :src="img" alt="" class="swiper-img">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleClickGallery () {
      this.$emit('hide')
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  display: flex;
  align-items: center;
  .wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    .swiper-img {
      width: 100%;
    }
  }
}

.gallery ::v-deep .swiper-container {
  overflow: inherit;
}
.gallery ::v-deep .swiper-pagination-fraction {
  bottom: -1rem;
  font-size: .28rem;
  color: #fff;
  z-index: 2;
}
</style>
