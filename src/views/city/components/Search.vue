<template>
  <div class="search">
    <input v-model.trim="keyword" type="text" class="search-input" placeholder="输入城市名称或拼音">
    <div class="search-list-wrapper" v-show="showList" ref="searchListWrapper">
      <ul class="search-list">
        <li class="search-item border-bottom" v-for="city in list" :key="city.id">{{ city.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: []
    }
  },
  computed: {
    showList () {
      return this.keyword !== ''
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const list = []
        for (const key in this.cities) {
          this.cities[key].forEach(item => {
            if (item.name.indexOf(this.keyword) > -1 || item.spell.indexOf(this.keyword) > -1) {
              list.push(item)
            }
          })
        }
        this.list = list
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.searchListWrapper)
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variable.scss';

.search {
  height: .72rem;
  padding: 0 .1rem;
  background-color: $bgColor;
  display: flex;
  align-items: center;
  .search-input {
    width: 100%;
    height: .6rem;
    box-sizing: border-box;
    line-height: .62rem;
    text-align: center;
    border: none;
    border-radius: .06rem;
    outline: none;
    color: #666;
  }
  .search-list-wrapper {
    position: absolute;
    top: 1.62rem;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #f5f5f5;
    z-index: 1;
    overflow: hidden;
    .search-list {
      .search-item {
        height: .9rem;
        line-height: .9rem;
        padding-left: .2rem;
        font-size: .28rem;
        background-color: #fff;
      }
    }
  }
}
</style>
