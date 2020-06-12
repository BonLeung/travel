<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        class="item border-bottom"
        v-for="item in list"
        :key="item.id"
        tag="li"
        :to="`/detail/${item.id}`"
      >
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
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
@import '~@/assets/styles/mixin.scss';

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
    height: 1.9rem;
    overflow: hidden;
    padding: 0 .3rem;
    .item-img-wrapper {
      margin-top: .1rem;
      width: 1.7rem;
      height: 1.7rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: .06rem;
      }
    }
    .item-info {
      margin-left: .2rem;
      flex: 1;
      overflow: hidden;
      .item-title {
        margin-top: .26rem;
        height: .44rem;
        color: #212121;
        font-size: .32rem;
        line-height: .44rem;
      }
      .item-desc {
        margin-top: .1rem;
        line-height: .34rem;
        color: #616161;
        font-size: .24rem;
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
