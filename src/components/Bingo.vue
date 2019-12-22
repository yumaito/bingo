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
      variant="success"
      v-b-modal.history-modal
    >
      履歴を見る
    </b-button>
    <b-button
      variant='danger'
      v-b-modal.reset-modal>
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
      @hidden='updateDrawnNumber'
      >
      <h2 class='text-center'>{{ drawnNumber }}</h2>
      <b-progress :max='maxValue'>
        <b-progress-bar :value='drawnCount' />
      </b-progress>
    </b-modal>
    <b-modal
      centered
      ok-only
      ref='finish-modal'
    >
      全て引き終わりました
    </b-modal>
    <b-modal
      ok-only
      scrollable
      id="history-modal"
    >
      <b-table
        :fields="drawnNumberFields"
        :items="drawns"
        small
        responsive
        striped>
      </b-table>
    </b-modal>
    <b-modal
      header-bg-variant="danger"
      id='reset-modal'
      @ok="initData"
    >
      リセットします
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
      numbers: [],
      drawnNumbers: [],
      drawnNumberFields: [
        {
          key: 'index',
          label: ''
        },
        {
          key: 'number',
          label: ''
        }
      ]
    }
  },
  created () {
    this.initData()
  },
  computed: {
    drawns () {
      return this.drawnNumbers.map((dn, i) => {
        return {
          index: `${i + 1} 回目`,
          number: dn
        }
      })
    }
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
      this.drawnNumbers = []
    },
    draw () {
      const candidates = this.numbers.filter(n => !n.isOpened)
      if (candidates.length === 0) {
        this.$refs['finish-modal'].show()
        return
      }
      const drawn = _.sample(candidates)
      this.$refs['number-modal'].show()
      this.drawnNumber = drawn.number
      this.drawnCount++
    },
    updateDrawnNumber (e) {
      for (const n of this.numbers) {
        if (n.number === this.drawnNumber) {
          n.isOpened = true
        }
      }
      this.justOpenedNumber = this.drawnNumber
      this.drawnNumbers.push(this.drawnNumber)
    }
  }
}
</script>
