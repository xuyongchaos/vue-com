<template>
  <div id="app">
    <button @click="goHome" class="home-btn">goHome</button>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default{
  methods: {
    goHome() {
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style lang="less">
.content{
  padding: 5px;
  background: #dfdfdf;
  min-height: 500px;
}
.home-btn{
  padding: 8px 14px;
  border-radius: 5px;
  float: right;
  &:hover{
    background: #dfdfdf;
    color: blue;
    cursor: pointer;
  }
}
</style>
