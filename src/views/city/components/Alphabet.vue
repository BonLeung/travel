<template>
  <ul class="alphabet">
    <li class="alpha">A</li>
    <li class="alpha">B</li>
    <li class="alpha">C</li>
    <li class="alpha">D</li>
    <li class="alpha">E</li>
    <li class="alpha">F</li>
    <li class="alpha">G</li>
  </ul>
</template>

<script>
export default {

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
