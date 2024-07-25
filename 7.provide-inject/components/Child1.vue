<template>
  <div class="box">
    <h2>Child1</h2>
    <Child2 />
  </div>
</template>

<script>
import Child2 from './Child2.vue'

export default {
  components: {
    Child2
  }
}
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid red;
  padding: 20px;
}
</style>