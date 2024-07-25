<template>
  <div>
    <h1>组件</h1>
    <Child1 :num="num" @change="changeNum" />
    <Child2 @change="changeNum" />
  </div>
</template>

<script>
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'

export default {
  data() {
    return {
      num: 1
    }
  },
  methods: {
    changeNum(n) {
      this.num += n
    }
  },
  components: {
    Child1,
    Child2
  }
}
</script>

<style>
</style>