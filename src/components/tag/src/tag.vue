<template>
  <div name="tag" :class="[
    hasAddons ? 'tags' : 'tag',
    !hasAddons && (colorList.indexOf(color) > -1) ? `is-${color}` : '',
    `is-${size}`,
    hasAddons ? 'has-addons' : ''
  ]"
  :style="{backgroundColor: (colorList.indexOf(color) === -1) &&  color}"
  >
    <a v-if="hasAddons" :class="['tag', `is-${color}`]"><slot></slot></a>
    <slot v-else></slot>
    <button v-if="closable && !hasAddons" class="delete" @click="handleClose"></button>
    <a v-if="hasAddons" class="tag is-delete" @click="handleClose"></a>
  </div>

</template>
<script>
import { oneOf } from '@/utils/help'
let colorList = ['black', 'dark', 'light', 'white', 'primary', 'link', 'info', 'success', 'warning', 'danger']
export default {
  props: {
    color: {
      type: String,
      validator: (key) => {
        if (colorList.indexOf(key) > -1) {
          return true
        } else if (/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(key)) {
          return true
        } else {
          throw new Error('valid color')
        }
      }
    },
    size: {
      type: String,
      validator: function (key) {
        return oneOf(key, ['small', 'medium', 'large'])
      }
    },
    closable: {
      type: Boolean,
      default: false
    },
    hasAddons: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      colorList: colorList
    }
  },
  computed: {
  },
  methods: {
    handleClose () {
      this.$emit('close')
    }
  },
  created () {
  }
}
</script>
<style scoped>
</style>
