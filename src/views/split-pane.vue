<template>
  <div class="split-pane-con">
    <split-pane>
      <span slot="left">left</span>
      <span slot="right">right</span>
    </split-pane>
  </div>
</template>

<script>
import SplitPane from 'components/split-pane'
export default {
  components: {
    SplitPane
  }
}
</script>

<style lang="less">
.split-pane-con{
  width: 100%;
  height: 400px;
}
</style>
