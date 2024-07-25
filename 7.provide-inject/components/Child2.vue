<template>
  <div class="box">
    <h2>Child2</h2>
    <Child3 />
  </div>
</template>

<script>
import Child3 from './Child3.vue'

export default {
  components: {
    Child3
  }
}
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid red;
  padding: 20px;
}
</style>