<template>

  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(icons, index) in pages" :key="index">
        <div class="icons">
          <div class="icon" v-for="item in icons" :key="item.id">
            <img class="img" v-lazy="item.imgUrl" alt="">
            <p class="name">{{ item.desc }}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
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
        }
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="scss" scoped>
.icons {
  padding-top: .1rem;
  padding-bottom: .1rem;
  display: flex;
  flex-wrap: wrap;
  .icon {
    width: 25%;
    height: 2rem;
    text-align: center;
    .img {
      width: 1.1rem;
      height: 1.1rem;
    }
    .name {
      margin-top: .1rem;
      color: #212121;
      font-size: .28rem;
    }
  }
  ::v-deep .swiper-container {
    width: 100%;
  }
  ::v-deep .swiper-pagination {
    bottom: 0;
  }
}
</style>
