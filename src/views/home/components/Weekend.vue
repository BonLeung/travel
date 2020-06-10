<template>
  <div class="recommend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
          title: '清远周边逛',
          desc: '人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
          title: '浮在海上的绿洲',
          desc: '南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
          title: '广州必打卡',
          desc: '感受现代与传统相融合的广州'
        }
      ]
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
