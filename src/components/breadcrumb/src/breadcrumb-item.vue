<template>
  <li name="breadcrumb-item" class="nevis-breadcrumb__item">
    <a class="is-link" ref="link" role="link"><slot></slot></a>
  </li>
</template>
<script>
export default {
  props: {
    to: {},
    replace: Boolean
  },
  data () {
    return {
    }
  },
  mounted () {
    const link = this.$refs.link
    link.setAttribute('role', 'link')
    link.addEventListener('click', _ => {
      _.preventDefault()
      const { to, $router } = this
      if (!to || !$router) return
      this.replace ? $router.replace(to) : $router.push(to)
    })
  }
}
</script>
<style scoped>
</style>
