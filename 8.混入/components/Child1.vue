<template>
  <div class="box" ref="box">
    <h2>Child1</h2>
    <button @click="num++">+</button>{{num}}
    <p>鼠标位置: {{pos}}</p>
  </div>
</template>

<script>
import usePos from '../mixins/usePos'

export default {
  mixins: [usePos],
  data() {
    return {
      num: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid red;
  padding: 20px;
}
</style>