<template>
  <div class="city">
    <city-header />
    <city-search :cities="cities" />
    <city-list :hots="hotCities" :cities="cities" :letter="letter" />
    <alphabet :cities="cities" @change="handleLetterChange" />
  </div>
</template>

<script>
import axios from 'axios'

import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import Alphabet from './components/Alphabet'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Alphabet
  },
  data () {
    return {
      letter: '',
      cities: {},
      hotCities: []
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(res => {
        res = res.data
        if (res.resultCode === '0' && res.data) {
          const data = res.data
          this.cities = data.cities
          this.hotCities = data.hotCities
        }
      })
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  }
}
</script>

<style lang="scss">

</style>
