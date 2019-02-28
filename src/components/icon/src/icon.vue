<template>
  <div name="icon" class="icon">
    <i :class="[
      'fa',
      `fa-${type}`,
      `is-${size}`
    ]"></i>
  </div>
</template>
<script>
import { oneOf } from '@/utils/help'
export default {
  props: {
    type: String,
    size: {
      type: String,
      validator: (key) => {
        return oneOf(key, ['small', 'medium', 'large'])
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
