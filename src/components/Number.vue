<template>
  <b-card
    bg-variant="light"
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
    isJustOpened: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
