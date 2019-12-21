<template>
  <div class='bingo'>
    <h1>BINGO</h1>
    <b-button variant="primary">
      引く
    </b-button>
    <div class='mt-4'>
      <b-card-group deck>
        <number
          v-for='n in numbers'
          :key="n.number"
          :number='n.number'
          :is-opened='n.isOpened'
          :is-just-opened='n.isJustOpened'/>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import Number from '@/components/Number'
export default {
  name: 'Bingo',
  components: {
    Number
  },
  data () {
    return {
      minValue: 1,
      maxValue: 75,
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
          isOpened: false,
          isJustOpend: false
        })
      }
      this.numbers = result
    }
  }
}
</script>
