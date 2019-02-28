<template>
  <div name="panel" class="panel">
    <p class="panel-heading" >
      <slot name="title">{{title}}</slot>
    </p>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: {
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
  },
  mounted () {
  }
}
</script>
<style scoped>
</style>
