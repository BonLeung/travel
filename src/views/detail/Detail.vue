<template>
  <div class="detail">
    <detail-header />
    <detail-banner @showGallery="handleShowGallery" />
    <gallery v-show="showGallery" :imgs="galleryImgs" @hide="handleHideGallery" />
    <detail-list :list="list" />
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import Gallery from 'components/common/Gallery.vue'

export default {
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    Gallery
  },
  data () {
    return {
      showGallery: false,
      galleryImgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg', 'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png'],
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆联票'
        }, {
          title: '成人五馆联票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
    }
  },
  methods: {
    handleShowGallery () {
      this.showGallery = true
    },
    handleHideGallery () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  height: 50rem;
}
</style>
