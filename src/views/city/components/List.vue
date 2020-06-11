<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <ul class="button-list">
          <li class="button-item">
            <div class="button">北京</div>
          </li>
        </ul>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <ul class="button-list">
          <li class="button-item" v-for="hot in hots" :key="hot.id">
            <div class="button">{{ hot.name }}</div>
          </li>
        </ul>
      </div>
      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <ul class="city-list">
          <li class="city-item border-bottom" v-for="city in item" :key="city.id">{{ city.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    hots: Array,
    cities: Object,
    letter: String
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element, 300)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  activated () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="scss" scoped>
.list {
  position: absolute;
  top: 1.62rem;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  .area {
    .title {
      padding-left: .3rem;
      height: .8rem;
      line-height: .8rem;
      background-color: #eee;
      font-size: .28rem;
      color: #666;
      &.border-topbottom {
        &::before, &::after {
          background-color: #ccc;
        }
      }
    }
    .button-list {
      display: flex;
      flex-wrap: wrap;
      .button-item {
        width: 33.3%;
        .button {
          margin: .1rem;
          height: .8rem;
          line-height: .8rem;
          text-align: center;
          border: .02rem solid #ccc;
          font-size: .28rem;
        }
      }
    }
    .city-list {
      .city-item {
        height: .9rem;
        line-height: .9rem;
        padding-left: .2rem;
        font-size: .28rem;
      }
    }
  }
}
</style>
