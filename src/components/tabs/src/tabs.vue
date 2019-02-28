<template>
  <div name="tabs" :class="[
    'tabs',
    type ? `is-${type}` : ''
  ]">
  <ul>
    <!-- <li v-for=""></li> -->
  </ul>
  <slot></slot>
  </div>
</template>
<script>
import { oneOf } from '@/utils/help'
export default {
  props: {
    size: {
      type: String,
      validator: function (key) {
        return oneOf(key, ['small', 'medium', 'large'])
      }
    },
    type: {
      type: String,
      validator: (key) => {
        return oneOf(key, ['boxed', 'toggle'])
      }
    },
    position: {
      type: String,
      validator: (key) => {
        return oneOf(key, ['center', 'right'])
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  created () {
  }
}
</script>
<style scoped>
</style>
