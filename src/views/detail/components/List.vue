<template>
  <div>
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{ item.title }}
      </div>
      <div class="item-children" v-if="item.children">
        <detail-list :list="item.children" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.item {
  .item-title {
    padding: 0 .1rem;
    height: .8rem;
    display: flex;
    align-items: center;
    font-size: .28rem;
    color: #222;
    .item-title-icon {
      position: relative;
      margin-right: .08rem;
      display: inline-block;
      width: .28rem;
      height: .28rem;
      background: url('../../../assets/images/logo.png') no-repeat center;
      margin-left: .1rem;
      background-size: .28rem .28rem;
    }
  }
  .item-children {
    padding: 0 .2rem;
  }
}
</style>
