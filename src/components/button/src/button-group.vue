<template>
  <div name="button-group" class="buttons has-addons">
    <slot></slot>
  </div>
</template>
<script>

import { oneOf } from '@/utils/help'
export default {
  props: {
    size: {
      type: String,
      default: 'default',
      validator: (key) => {
        return oneOf(key, ['default'])
      }
    }
  }
}
</script>
