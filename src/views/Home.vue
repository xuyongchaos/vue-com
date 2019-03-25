<template>
  <div class="home">
    home page aaa
    <ul>
      <li v-for="item in breadItems" :key="item" @click="changeRoute(item)" class="link">{{item}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      breadItems: [
        'count-to',
        'split-pane',
        'grid',
        'graph',
        'loading',
        'modal',
        'button'
      ]
    }
  },
  methods: {
    changeRoute (name) {
      this.$router.push({name})
    }
  },
}
</script>
<style lang="less">
.link{
  text-decoration-style: wavy;
  text-decoration-line: underline;
  text-decoration-color: yellow;
  &:hover{
    color: blue;
    cursor: pointer;
  }
}
</style>
