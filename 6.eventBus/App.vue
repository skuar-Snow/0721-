<template>
  <div>
    <h1>组件</h1>
    <button @click="show = !show">显示隐藏</button>
    <Child1 v-if="show" />
    <Child2 />
  </div>
</template>

<script>
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'

export default {
  data() {
    return {
      show: true
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