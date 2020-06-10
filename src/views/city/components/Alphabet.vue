<template>
  <ul class="alphabet">
    <li class="alpha" v-for="(item, key) in cities" :key="key">{{ key }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Array
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variable.scss';

.alphabet {
  position: fixed;
  top: 1.62rem;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: .4rem;
  .alpha {
    text-align: center;
    line-height: .44rem;
    font-size: .24rem;
    color: $bgColor;
  }
}
</style>
