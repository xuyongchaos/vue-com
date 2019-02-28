<template>
  <button
    :class="[
      'button',
      type ? `is-${type}` : '',
      size ? `is-${size}`: '',
      {
        'is-fullwidth': long,
        'is-outlined': outlined,
        'is-rounded' : round,
        'is-loading': loading
      }
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="icon" class="icon" style="margin-right:1px;">
      <i :class="['fa', `fa-${icon}`]"></i>
    </span>
    <slot></slot></button>
</template>

<script>
import { oneOf } from '@/utils/help'
export default {
  componentName: 'nevis-button',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: function (key) {
        return oneOf(key, ['default', 'primary', 'success', 'warning', 'danger', 'info', 'link'])
      }
    },
    size: {
      type: String,
      validator: function (key) {
        return oneOf(key, ['small', 'medium', 'large'])
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    long: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>
<style scoped>
</style>
