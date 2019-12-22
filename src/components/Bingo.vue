<template>
  <div class='bingo'>
    <h1>BINGO</h1>
    <b-button
      variant="primary"
      size="lg"
      @click='draw'>
      引く
    </b-button>
    <b-button
      variant='warning'
      @click='initData'>
      リセットする
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
    <b-modal
      centered
      ok-only
      ref='number-modal'
      :title='drawnCount + "回目"'
      @hidden='hidden'
      >
      <h2><strong>{{ drawnNumber }}</strong> が出ました!</h2>
    </b-modal>
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
      drawnNumber: 0,
      drawnCount: 1,
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
      this.drawnCount = 0
      this.justOpenedNumber = 0
    },
    draw () {
      const candidates = this.numbers.filter(n => !n.isOpened)
      if (candidates.length === 0) {
        return
      }
      const drawn = _.sample(candidates)
      this.$refs['number-modal'].show()
      this.drawnNumber = drawn.number
      this.drawnCount++
    },
    hidden (e) {
      for (const n of this.numbers) {
        if (n.number === this.drawnNumber) {
          n.isOpened = true
        }
      }
      this.justOpenedNumber = this.drawnNumber
    }
  }
}
</script>
