<template>
  <ul class="alphabet">
    <li
      class="alpha"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick(item)"
      @touchstart="handleTouchStart"
      @touchmove.prevent="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      startY: ''
    }
  },
  computed: {
    letters () {
      const letters = []
      for (const key in this.cities) {
        letters.push(key)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs[this.letters[0]][0].offsetTop
  },
  methods: {
    handleLetterClick (key) {
      console.log(key)
      this.$emit('change', key)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 81
          const index = Math.floor((touchY - this.startY) / 22)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
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
    font-size: .28rem;
    font-weight: 500;
    color: $bgColor;
  }
}
</style>
