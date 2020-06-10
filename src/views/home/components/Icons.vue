<template>

  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(icons, index) in pages" :key="index">
        <div class="icons">
          <div class="icon" v-for="item in icons" :key="item.iconUrl">
            <img class="img" v-lazy="item.iconUrl" alt="">
            <p class="name">{{ item.name }}</p>
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
  data () {
    return {
      iconList: [
        {
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          name: '景点门票'
        },
        {
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          name: '一日游'
        },
        {
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
          name: '踏青赏花'
        },
        {
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
          name: '动植物园'
        },
        {
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
          name: '珠江夜游'
        },
        {
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
          name: '城市观光'
        },
        {
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          name: '主题乐园'
        },
        {
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          name: '泡温泉'
        },
        {
          iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
          name: '自然风光'
        },
        {
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          name: '广州必游'
        }
      ],
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
      this.iconList.forEach((item, index) => {
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
  ::v-deep .swiper-pagination {
    bottom: 0;
  }
}
</style>
