<template>
  <div name="tabpane" class="tab-pane">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    label: String,
    icon: String
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
