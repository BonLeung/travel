<template>
  <div class="recommend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/mixins.scss';

.recommend {
  margin-top: .1rem;
  .title {
    padding-left: .3rem;
    line-height: .8rem;
    background-color: #eee;
    font-size: .32rem;
  }
  .item {
    display: flex;
    flex-direction: column;
    margin-bottom: .1rem;
    background-color: #fff;
    .item-img-wrapper {
      width: 100%;
      height: 0;
      padding-bottom: 37.5%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .item-info {
      padding: .14rem .2rem .2rem .2rem;
      .item-title {
        overflow: hidden;
        padding-right: 1.4rem;
        color: #212121;
        font-size: .28rem;
        line-height: .48rem;
        @include ellipsis();
      }
      .item-desc {
        padding-right: 1.4rem;
        color: #616161;
        font-size: .24rem;
        line-height: .42rem;
        @include ellipsis();
      }
      .item-button {
        display: block;
        margin-top: .2rem;
        border-radius: .04rem;
        border: none;
        background-color: #00bcd4;
        font-size: .24rem;
        color: #fff;
      }
    }
  }
}
</style>
