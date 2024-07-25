<template>
  <div class="box" ref="box">
    <h2>{{title}}</h2>
    <input type="text" v-model="title">
    <p>pos: {{pos}}</p>
    {{test}}
  </div>
</template>

<script>
import usePos from '../mixins/usePos'

export default {
  // 把混入的代码和当前组件进行合并
  mixins: [usePos],
  data() {
    return {
      title: 'Child3',
      test: 12345
    }
  },
  methods: {
  },
  created() {
    console.log('组件内的创建阶段')
  }
}
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid red;
  padding: 20px;
}
</style>