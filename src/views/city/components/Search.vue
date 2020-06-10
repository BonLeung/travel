<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市名称">
  </div>
</template>

<script>
export default {

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
}
</style>
