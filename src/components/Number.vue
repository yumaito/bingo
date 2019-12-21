<template>
  <b-card
    :bg-variant="bgVariant"
    :text-variant='textVariant'
    style="min-width: 5rem; max-width: 5rem;"
    class="text-center"
    >
    {{ number }}
  </b-card>
</template>

<script>
export default {
  name: 'Number',
  props: {
    number: {
      type: Number,
      required: true,
      default: 1
    },
    isOpened: {
      type: Boolean,
      required: false,
      default: false
    },
    justOpenedNumber: {
      type: Number,
      required: false,
      default: 0
    }
  },
  computed: {
    isJustOpened () {
      return this.number === this.justOpenedNumber
    },
    bgVariant () {
      if (this.isJustOpened) {
        return 'danger'
      }
      if (this.isOpened) {
        return 'success'
      }
      return 'light'
    },
    textVariant () {
      if (this.isJustOpened || this.isOpened) {
        return 'white'
      }
      return 'black'
    }
  }
}
</script>
