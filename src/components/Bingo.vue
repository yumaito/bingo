<template>
  <div class='bingo'>
    <h1>BINGO</h1>
    <b-button
      variant="primary"
      @click='draw'>
      引く
    </b-button>
    <div class='mt-4'>
      <b-card-group deck>
        <number
          v-for='n in numbers'
          :key="n.number"
          :number='n.number'
          :is-opened='n.isOpened'
          :just-opened-number='justOpenedNumber'/>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import Number from '@/components/Number'
import _ from 'lodash'
export default {
  name: 'Bingo',
  components: {
    Number
  },
  data () {
    return {
      minValue: 1,
      maxValue: 75,
      justOpenedNumber: 0,
      numbers: []
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      const result = []
      for (let i = this.minValue; i <= this.maxValue; i++) {
        result.push({
          number: i,
          isOpened: false
        })
      }
      this.numbers = result
    },
    draw () {
      const candidates = this.numbers.filter(n => !n.isOpened)
      if (candidates.length === 0) {
        return
      }
      const drawn = _.sample(candidates)
      this.numbers.filter(n => {
        if (n.number === drawn.number) {
          n.isOpened = true
        }
      })
      this.justOpenedNumber = drawn.number
    }
  }
}
</script>
