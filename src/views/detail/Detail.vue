<template>
  <div class="detail">
    <detail-header />
    <detail-banner :bannerImg="bannerImg" :sightName="sightName" @showGallery="handleShowGallery" />
    <gallery v-show="showGallery" :imgs="galleryImgs" @hide="handleHideGallery" />
    <detail-list :list="list" />
  </div>
</template>

<script>
import axios from 'axios'
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
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      list: []
    }
  },
  mounted () {
    this.getData()
  },
  activated () {
    this.getData()
  },
  methods: {
    handleShowGallery () {
      this.showGallery = true
    },
    handleHideGallery () {
      this.showGallery = false
    },
    getData () {
      const id = this.$route.params.id
      axios.get(`/api/detail.json?id=${id}`).then(res => {
        res = res.data
        if (res.resultCode === '0' && res.data) {
          this.galleryImgs = res.data.gallaryImgs
          this.bannerImg = res.data.bannerImg
          this.sightName = res.data.sightName
          this.list = res.data.categoryList
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  height: 20rem;
}
</style>
