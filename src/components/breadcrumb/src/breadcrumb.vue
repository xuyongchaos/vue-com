<template>
  <nav name="breadcrumb" class="breadcrumb" aria-label="breadcrumbs">
    <ul><slot></slot></ul>
  </nav>
</template>
<script>
// import { oneOf } from '@/utils/help'
export default {
  name: 'NevisBreadcrumb',
  props: {
  },
  mounted () {
    const items = this.$el.querySelectorAll('.nevis-breadcrumb__item')
    if (items.length) {
      items[items.length - 1].setAttribute('class', 'is-active')
      items[items.length - 1].querySelector('a').setAttribute('aria-current', 'page')
    }
  }
}
</script>
<style scoped>
</style>
