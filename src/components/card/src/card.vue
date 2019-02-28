<template>
  <div name="card" class="card">
    <div class="card-header">
      <span class="card-header-icon">
        <slot name="icon"></slot>
      </span>
      <span class="card-header-title">{{title}}</span>
      <div style="padding:.75rem">
        <slot name="extra"></slot>
      </div>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
    <div class="card-footer" style="padding:.5rem;justify-content:center">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String
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
