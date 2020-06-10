<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/2006/c0/c08a1c90286ac75a3.water.jpg_200x200_a7fad350.jpg',
          title: '长隆水上乐园',
          desc: '“巨蟒”滑道带给你肾上腺素的冲击'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/2006/70/705f77e802bf6a92a3.water.jpg_200x200_23fc3e11.jpg',
          title: '长隆野生动物世界',
          desc: '熊猫三胞胎与您共享欢乐时光'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/56/5639ccfd58c4cca4a3.img.png_200x200_0027165c.png',
          title: '广州正佳极地海洋世界',
          desc: '🔥好评如潮，小伙伴热推景点~'
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
